
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=regular jar}
 * @preview ![jar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMjRjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMjA4IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRMNTYgMEM0Mi43IDAgMzIgMTAuNyAzMiAyNHpNMjU2IDEyOGM4LjggMCAxNiA3LjIgMTYgMTZsMCA4MEw0OCAyMjRsMC04MGMwLTguOCA3LjItMTYgMTYtMTZsMTkyIDB6bTE2IDI0MGwwIDgwYzAgOC44LTcuMiAxNi0xNiAxNkw2NCA0NjRjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTgwIDIyNCAwek02NCA4MEMyOC43IDgwIDAgMTA4LjcgMCAxNDRMMCA0NDhjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMTkyIDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zMDRjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 24c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 0C42.7 0 32 10.7 32 24zM256 128c8.8 0 16 7.2 16 16l0 80L48 224l0-80c0-8.8 7.2-16 16-16l192 0zm16 240l0 80c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-80 224 0zM64 80C28.7 80 0 108.7 0 144L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-304c0-35.3-28.7-64-64-64L64 80z" />
    </Icon>
);

export default Jar;