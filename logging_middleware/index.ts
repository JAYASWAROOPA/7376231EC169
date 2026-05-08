// logging_middleware/index.ts

export type LogLevel =
  | "info"
  | "warn"
  | "error"
  | "fatal"
  | "debug";

export interface LogData {
  stack: string;
  level: LogLevel;
  package: string;
  message: string;
}

export const Log = async (
  stack: string,
  level: LogLevel,
  pkg: string,
  message: string
): Promise<void> => {

  // Correct structure expected by API
  const logEntry: LogData = {
    stack,
    level,
    package: pkg,
    message
  };

  // Local console narrative
  console.log(
    `[${level.toUpperCase()}] [${pkg}] ${message}`
  );

  try {
    const response = await fetch(
      "http://20.244.56.144/test/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(logEntry)
      }
    );

    // Optional debugging
    const data = await response.text();

    console.log("Server Response:", data);

  } catch (error) {
    console.error(
      "Telemetry Notice: Failed to send log."
    );
  }
};