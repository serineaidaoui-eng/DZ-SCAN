
import { useEffect, useState } from "react";
import { getHealth, type HealthResponse } from "./services/api";
import "./App.css";

function App() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getHealth()
      .then((result) => {
        setData(result);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="app">
      <div className="container">
        <div className="logo">DZ<span>-SCAN</span></div>

        <h1>Global Smart Product Intelligence</h1>

        <p className="description">
          Scan. Understand. Compare. Discover.
        </p>

        <section className="status-card">
          <h2>Backend Connection</h2>

          {loading && <p>Connecting to API...</p>}

          {error && <p className="error">{error}</p>}

          {data && (
            <>
              <p className="success">● API Connected Successfully</p>
              <p>Status: {data.status}</p>
              <p>Project: {data.project}</p>
              <p>Version: {data.version}</p>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
