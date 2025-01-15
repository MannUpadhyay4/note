export const NC = ({ children }) => (
    <div className="NoteContainer">{children}</div>
  );
  
  export const H = ({ level, children }) => {
    const Tag = `h${level || 1}`;
    return <Tag>{children}</Tag>;
  };
  
  export const P = ({ children }) => (
    <p className="Paragraph">{children}</p>
  );
  
  export const LI = ({ items }) => (
    <ul className="BulletList">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  
  export const CB = ({ children }) => (
    <pre className="CodeBlock">
      <code>{children}</code>
    </pre>
  );



export const TABLE = ({ headers, rows }) => {
  if (!headers || headers.length === 0 || !rows || rows.length === 0) {
    return <p>Provide at least two data points for comparison.</p>;
  }

  return (
    <table className="ComparisonTable">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};



