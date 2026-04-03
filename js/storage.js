// js/storage.js - The Brain of Anumati
const DB_NAME = "Anumati_Database";

// Function to initialize the system
function initSystem() {
    // If no data exists, create the starting database
    if (!localStorage.getItem(DB_NAME)) {
        const initialData = {
            students: [
                { roll: "101", name: "Abhilasha", branch: "CS", status: "In-Hostel" },
                { roll: "102", name: "Vidya", branch: "CS", status: "In-Hostel" }
            ],
            leaveRequests: [] // This replaces the paper leave slips
        };
        
        // Save to browser storage
        localStorage.setItem(DB_NAME, JSON.stringify(initialData));
        console.log("Anumati: Digital Register Created!");
    } else {
        console.log("Anumati: System Online.");
    }
}

// Run the initialization
initSystem();