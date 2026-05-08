import { Log } from 'logging_middleware';

const runApplication = async () => {
    console.log("--- AffordMed Backend Narrative Starting ---");

    // Example 1: Fatal DB Error
    await Log(
        "backend", 
        "fatal", 
        "db-layer", 
        "Critical database connection failure. Received string, expected bool."
    );

    // Example 2: Type Mismatch in Handler
    await Log(
        "backend", 
        "error", 
        "handler", 
        "received string, expected bool"
    );

    // Example 3: Info Success
    await Log(
        "backend",
        "info",
        "server",
        "Notification backend is now listening on port 3000."
    );
};

runApplication();