Video Game Auto-Complete Search

This is a simple and interactive auto-complete search component built with React and TypeScript. It fetches video game titles from the RAWG API and displays game details in a modal upon selection.
Features

    Auto-complete Search: Type to see a list of video game suggestions in real-time.
    Highlighted Text: Search query matches are highlighted in the suggested titles.
    Modal Display: Click on a game title to open a modal with more details about the game.
    Asynchronous Data Fetching: The search is powered by asynchronous API calls for efficient data loading.
    No Third-party Libraries: The project uses only React and TypeScript, with custom CSS for styling.

How to Run the Project

    Clone the repository:

git clone <repo-url>

Navigate to the project directory:

cd autocomplete-component

Install the dependencies:

npm install

Run the project:

    npm start

    The app will be available locally at http://localhost:3000.

Project Structure

    src/components: Contains reusable components like AutoComplete and HighlightedText.
    src/styles: CSS files for custom styling.
    src/App.tsx: Main application file that integrates the auto-complete component.

Usage

    Start typing in the search box to see game suggestions.
    Click on a game title to view details in a modal window.
    The search is case-insensitive, and matching parts of the game title are highlighted for better UX.

API Information

This project uses the RAWG Video Games Database API. Ensure you have a valid API key to fetch game data. Replace YOUR_API_KEY in the code with your actual API key.
Example

Replace the API key in AutoComplete.tsx:

const response = await fetch(
  `https://api.rawg.io/api/games?key=YOUR_API_KEY&search=${inputValue}`
);

CSS and Styling

The project uses custom CSS for styling, focusing on a clean and intuitive user interface. The class .highlight is used to emphasize matching parts of the search query.
Key Considerations

    Performance: Debounced API calls prevent excessive requests.
    Accessibility: Ensured keyboard navigation and screen reader support.
    Responsive Design: The layout adapts to different screen sizes for a seamless experience.

Additional Notes

    CORS Issues: Ensure proper handling of CORS errors if encountered, and make sure the API key is valid.
    Improving UX: Feel free to enhance the modal design or add more features for a richer experience.

Questions and Answers

    How would you create a new page based on user requirements?
        Start with gathering UI/UX specifications, design wireframes, set up the React route, and build reusable components following best practices.

    Experience with State Management Libraries?
        Yes, I have used libraries like Redux for complex state handling, ensuring global state consistency across components.

    Code Best Practices?
        Writing clean and modular code, following the DRY (Don't Repeat Yourself) principle, using TypeScript interfaces for type safety, and proper documentation.

    Styling Methods?
        Inline styles, CSS Modules, and styled-components. Each has benefits based on the use case, such as scoping or dynamic styling.

    Passing Data from Child to Parent Components?
        Using callback functions, context, or leveraging custom hooks for shared state.

    Experience with Design Systems?
        Yes, I have created and maintained design systems focusing on reusable components, consistent styles, and adhering to UI/UX guidelines.

License

This project is licensed under the MIT License.