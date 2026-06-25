export default function Results() {

  const results = JSON.parse(localStorage.getItem("results")) || [];

  return (
    <div className="users-wrapper">

      {/* Heading */}
      <h2 className="users-title">Results</h2>
      <p className="users-subtitle">View all exam results</p>

      {/* Table */}
      <div className="table-card">
        <table className="users-table">

          {/* Table Header */}
          <thead>
            <tr>
              <th>NAME</th>
              <th>EXAM</th>
              <th>SCORE</th>
              <th>DATE</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>

            {/* If no results */}
            {results.length === 0 && (
              <tr>
                <td colSpan="4" className="no-users">
                  No results yet.
                </td>
              </tr>
            )}

            {/* If results exist */}
            {results.length > 0 && results.map((r, i) => (
              <tr key={i}>
                <td>{r.playerName}</td>
                <td>{r.exam}</td>
                <td>{r.score}</td>
                <td>{r.date || "-"}</td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
}