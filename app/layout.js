import "../styles/output.css";

export default function Root({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
