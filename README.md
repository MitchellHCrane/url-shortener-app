# URL Shortener App

## Implementation Details

- **Next.js**: The application leverages Next.js for server-side rendering and routing, utilizing the new `app` directory structure for improved organization and performance.
- **Tailwind CSS**: The UI is styled using Tailwind CSS, which provides utility-first styling capabilities that allow for rapid and responsive design.
- **Local Storage**: The application stores the original URLs associated with the shortened random strings in the browser’s local storage for quick retrieval during redirection.
- **Dynamic Routing**: Utilizes Next.js's dynamic routing feature to create unique paths for each shortened URL, making it easy to access the original URLs.

## How to Run

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>

   ```

2. **Install Dependencies**:

   ```bash
   npm install

   ```

3. **Start the Development Server**:

   ```bash
   npm run dev

   ```

4. **Access the Application**:
   Open your browser and navigate to http://localhost:3000 to view the application.

## Testing

- Ensure that all necessary dependencies are installed and the development server is running.
- You can manually test the application by entering various URLs to verify that they are shortened and redirected to the correct page. Testing Examples: submit without a url, submit with an invalid url, submit with a valid url.
- Automated testing not implemented in this project, but recommended for future enhancements.

## Tools Used

- **Next.js**: [https://nextjs.org/](https://nextjs.org/)
- **Tailwind CSS**: [https://tailwindcss.com/](https://tailwindcss.com/)
- **Resources**:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/) - Javascript methods and syntax
  - [W3Schools](https://www.w3schools.com/) - Javascript methods and syntax
  - [Stack Overflow](https://stackoverflow.com/) - Regex methods
  - [ChatGPT (OpenAI)](https://chatgpt.com/) - Assisted in explaing Next.js file structure and routing I wasn't familiar with.
# url-shortener-app
