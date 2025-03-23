# Free Clip

Free Clip is a web application designed to capture screenshots of websites. Built with Next.js and Tailwind CSS, it provides a user-friendly interface for users to input URLs and receive screenshots of the corresponding web pages.

## Features

- **URL Input**: Users can input the URL of the website they wish to capture.
- **Screenshot Capture**: The application processes the URL and returns a screenshot of the specified web page.
- **Responsive Design**: The interface is optimized for various devices using Tailwind CSS.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ehmasuk/screen-cap.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd screen-cap
   ```

3. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Development

To start the development server:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To build the application for production:

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

This will generate an optimized build in the `.next` directory.

### Starting the Production Server

After building the application, you can start the production server:

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

## Project Structure

- `app/`: Contains the main application components and pages.
- `components/`: Reusable UI components.
- `helpers/`: Utility functions and helpers.
- `hooks/`: Custom React hooks.
- `lib/`: External libraries and configurations.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling.
- [TypeScript](https://www.typescriptlang.org/): Superset of JavaScript for type safety.
- [Puppeteer](https://pptr.dev/): Node.js library for headless browser automation, used for capturing screenshots.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vercel](https://vercel.com/): Hosting platform for the live application.

