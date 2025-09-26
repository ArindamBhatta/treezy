import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/auth.slice";
import { AuthRepo } from "./repo/auth/Auth.repo";
import supabase from "./config/supabase";

function App() {
  const [loading, setLoading] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<
    "connected" | "disconnected" | "checking"
  >("checking");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const checkSupabaseConnection = async () => {
    try {
      setConnectionStatus("checking");
      console.log("Checking Supabase connection...");

      // Directly test Supabase connection
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Supabase connection error:", error);
        throw error;
      }

      console.log("Supabase connected successfully! Session:", data.session);
      setConnectionStatus("connected");
      return data.session !== null;
    } catch (err) {
      console.error("Supabase connection error:", err);
      setConnectionStatus("disconnected");
      setError(
        "Failed to connect to Supabase: " +
          (err instanceof Error ? err.message : "Unknown error")
      );
      return false;
    }
  };

  const checkAuthState = async () => {
    try {
      setLoading(true);
      const isConnected = await checkSupabaseConnection();

      if (!isConnected) {
        dispatch(logout());
        return;
      }

      // Get the repository instance
      const authRepo = AuthRepo.getInstance();
      const userData = await authRepo.getCurrentUser();

      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.error("Auth state check failed:", error);
      setError("Failed to check authentication status");
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial auth check
    checkAuthState();

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event);
      await checkAuthState();
    });

    // Cleanup subscription on unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading application...</p>
          {connectionStatus === "checking" && (
            <p>Checking authentication status...</p>
          )}
        </div>
      </div>
    );
  }

  if (connectionStatus === "disconnected") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Connection Error
          </h2>
          <p className="text-gray-700 mb-4">
            {error ||
              "Unable to connect to the authentication service. Please check your internet connection and try again."}
          </p>
          <button
            onClick={checkAuthState}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to Treezy
          </h1>
          <p className="text-green-600 mt-1">✓ Connected to Supabase</p>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Application Status</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span>Supabase: Connected</span>
            </div>
            {/* Add more status indicators as needed */}
          </div>
        </div>
      </main>
      <footer className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          Treezy Application © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default App;
