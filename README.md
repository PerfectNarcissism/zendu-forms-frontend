# Zendu Forms Frontend

Zendu Forms Frontend is a modern Angular web application designed for efficient management of forms and reports. Built with scalability and user experience in mind, it provides a responsive interface for viewing, filtering, and creating reports.

## Features

-   **Dashboard**: A centralized hub for accessing key features and navigating the application.
-   **Reports Management**:
    -   **View Reports**: Lists existing reports with detail views.
    -   **Add Reports**: Intuitive form interface for creating new report entries.
-   **Advanced Search & Sort**:
    -   Real-time search functionality to quickly find specific reports.
    -   Sorting options to organize data effectively.
-   **Responsive Design**: Fully responsive layout optimized for both desktop and mobile devices using Tailwind CSS.
-   **Server-Side Rendering (SSR)**: Enhanced performance and SEO with Angular Universal / Express.

## Tech Stack

-   **Framework**: [Angular 17](https://angular.io/)
-   **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
-   **Icons**: [Lucide Angular](https://lucide.dev/guide/packages/lucide-angular)
-   **Date Handling**: [date-fns](https://date-fns.org/)
-   **Server-Side Rendering**: Express.js

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:
-   **Node.js**: v18.18.0 or higher
-   **npm**: Included with Node.js

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/PerfectNarcissism/zendu-forms-frontend.git
    cd zendu-forms-frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Scripts

The `package.json` file includes several scripts to help with development and maintenance:

-   **Development Server**:
    ```bash
    npm start
    ```
    Runs `ng serve`. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

-   **Build**:
    ```bash
    npm run build
    ```
    Builds the project. The build artifacts will be stored in the `dist/` directory.

-   **Test**:
    ```bash
    npm test
    ```
    Executes unit tests via [Karma](https://karma-runner.github.io).

-   **Lint**:
    ```bash
    npm run lint
    ```
    Runs linting tools to ensure code quality.

## Project Structure

Key directories in the `src/app` folder:

-   **`core/`**: Contains shared components used throughout the application, such as:
    -   `TopbarComponent`: Application header and navigation.
    -   `SearchInputComponent`: Reusable search field.
    -   `SortDropdownComponent`: Dropdown for sorting lists.
-   **`pages/`**: Contains the main route components:
    -   `home/`: Landing page component.
    -   `reports/`: Components for listing and adding reports.

## Further Help

To get more help on the Angular CLI use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
