Ant Design (AntD) provides a grid system based on Flexbox, which helps to create responsive layouts easily. The key components in Ant Design’s grid system are:

1. Row
   A Row is a wrapper that contains multiple columns (<Col>).
   It ensures that the layout follows a proper structure.
   It can define spacing (gutter), alignment, and responsiveness.

2. Column (<Col>)
   A Col represents a section within a row.
   Columns should be placed inside a Row.
   The width of each column is controlled by the span property.

3. Gutter (gutter={value})
   Defines the space between columns.
   The value is usually in pixels.
   gutter={16} means there is 16px spacing between columns.

4. Span (span={value})
   Specifies how many columns out of 24 a <Col> should occupy.
   span={24} means the column takes up the full width (since the total grid has 24 parts).
   span={12} would take half the width.
