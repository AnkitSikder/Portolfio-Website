# Report Incident Flow

The "Report an Incident" flow is the primary data ingestion mechanism for the system, allowing operators to log events efficiently and accurately.

## Key Screens
*   **05-ro-report-modal.png**: The multi-step modal form for reporting a new incident.

## Core Interactions
*   **Progressive Disclosure**: The form is broken down into manageable sections (e.g., Incident Type, Date/Time, Location, Description, Attachments) to reduce cognitive load.
*   **Draft Auto-saving**: As the user progresses through the form, data is automatically saved as a draft, ensuring no loss of context in case of an interruption.
*   **Attachment Handling**: Built-in drag-and-drop zones for evidence upload (photos, documents) with visual confirmation of successful uploads.
*   **Severity Assessment**: Incorporates logic to determine the initial severity tier based on user selections (e.g., injuries, spills, asset damage).

## UI/UX Notes
*   Utilizes a modal overlay to keep the user in the context of their dashboard while completing the report.
*   Clear primary ("Submit") and secondary ("Save Draft", "Cancel") actions.
*   Form validation ensures data integrity before submission.
