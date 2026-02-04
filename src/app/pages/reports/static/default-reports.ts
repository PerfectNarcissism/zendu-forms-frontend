import { ReportType } from "../types/report";

function randomDate() {
    const init = new Date("2022-01-01").getTime();
    const end = new Date("2026-02-01").getTime();
    const randomDate = init + Math.random() * (end - init);
    return new Date(randomDate);
}

export const defaultReports: ReportType[] = [
    // ... Tus reportes anteriores se mantienen ...
    {
        title: "Report One",
        created: randomDate(),
        modified: randomDate(),
        owner: "John Doe",
        form: "Fill Form Educational",
        link: "https://google.com"
    },
    {
        title: "Star Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Philip Fer",
        link: "https://facebook.com",
        form: "Bill of Landing Template"
    },
    {
        title: "Impossible Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Andre M",
        link: "https://instagram.com",
        form: "Important Report Documents Behavior"
    },
    {
        title: "Complex Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Complex User",
        link: "https://instagram.com",
        form: "Test A"
    },
    {
        title: "Ally Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Andres Castaneda",
        link: "https://tiktok.com",
        form: "Test A"
    },
    {
        title: "Brenda Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Andres Castaneda",
        link: "https://outlook.com",
        form: "Test A"
    },
    {
        title: "Olwen Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Olwen Silvester Sue Wil",
        link: "https://microsoft.com",
        form: "Another Sample Template Forms"
    },
    {
        title: "Cassie Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Deco Vil XXVI",
        link: "https://instagram.com",
        form: "FORM I90"
    },
    {
        title: "Brenda Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Losar Amarek Nored",
        link: "https://instagram.com",
        form: "Ideas Form Mind Test"
    },
    // --- NUEVOS DATOS PARA PROBAR PAGINACIÓN ---
    {
        title: "Daily Inspection",
        created: randomDate(),
        modified: randomDate(),
        owner: "Sarah Connor",
        link: "https://google.com",
        form: "Safety Protocol V2"
    },
    {
        title: "Inventory Check",
        created: randomDate(),
        modified: randomDate(),
        owner: "Mike Wazowski",
        link: "https://amazon.com",
        form: "Warehouse Standard"
    },
    {
        title: "Zendu Tech Audit",
        created: randomDate(),
        modified: randomDate(),
        owner: "Elena Gilbert",
        link: "https://zendutech.com",
        form: "Annual IT Review"
    },
    {
        title: "Customer Feedback",
        created: randomDate(),
        modified: randomDate(),
        owner: "Damon Salvatore",
        link: "https://twitter.com",
        form: "Client Satisfaction"
    },
    {
        title: "Monthly Expenses",
        created: randomDate(),
        modified: randomDate(),
        owner: "Bonnie Bennett",
        link: "https://finance.com",
        form: "Billing Template"
    },
    {
        title: "Project Alpha",
        created: randomDate(),
        modified: randomDate(),
        owner: "Rick Grimes",
        link: "https://github.com",
        form: "Development Lifecycle"
    },
    {
        title: "Security Clearance",
        created: randomDate(),
        modified: randomDate(),
        owner: "Daryl Dixon",
        link: "https://cia.gov",
        form: "Classified Access"
    },
    {
        title: "Fleet Management",
        created: randomDate(),
        modified: randomDate(),
        owner: "Glenn Rhee",
        link: "https://tesla.com",
        form: "Vehicle Log"
    },
    {
        title: "Marketing Survey",
        created: randomDate(),
        modified: randomDate(),
        owner: "Maggie Greene",
        link: "https://hubspot.com",
        form: "Social Media Reach"
    },
    {
        title: "Legal Affidavit",
        created: randomDate(),
        modified: randomDate(),
        owner: "Saul Goodman",
        link: "https://bettercallsaul.com",
        form: "Compliance Form"
    },
    {
        title: "HR Onboarding",
        created: randomDate(),
        modified: randomDate(),
        owner: "Kim Wexler",
        link: "https://linkedin.com",
        form: "Employee Welcome"
    },
    {
        title: "Site Visit Report",
        created: randomDate(),
        modified: randomDate(),
        owner: "Gustavo Fring",
        link: "https://lospollos.com",
        form: "Operations Check"
    },
    {
        title: "Quality Control",
        created: randomDate(),
        modified: randomDate(),
        owner: "Walter White",
        link: "https://chemistry.org",
        form: "Batch Purity Test"
    },
    {
        title: "Emergency Protocol",
        created: randomDate(),
        modified: randomDate(),
        owner: "Jesse Pinkman",
        link: "https://science.com",
        form: "Safety Hazard Form"
    },
    {
        title: "Final Review 2025",
        created: randomDate(),
        modified: randomDate(),
        owner: "Skyler White",
        link: "https://accounting.com",
        form: "End of Year Audit"
    }
];