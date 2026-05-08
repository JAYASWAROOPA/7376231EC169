import { useEffect } from 'react';
import { Log } from 'logging_middleware';

function App() {
  useEffect(() => {
    // 1. Startup Narrative
    Log("frontend", "info", "App-Root", "Frontend application initialized and mounting components.");

    // 2. Simulated Warning (e.g., if a configuration is missing)
    const configLoaded = true; 
    if (!configLoaded) {
      Log("frontend", "warn", "config-loader", "Optional UI configuration missing, reverting to defaults.");
    }
  }, []);

 // Inside App.tsx
const handleTestError = () => {
  // This sends the data to your middleware
  Log("frontend", "error", "auth-handler", "Login attempt failed: received string, expected object.");
};

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>AffordMed Logging Dashboard</h1>
      <button onClick={handleTestError} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Simulate Handler Error
      </button>
      <p>Check the Browser Console (F12) to see the narrative!</p>
    </div>
  );
}

export default App;