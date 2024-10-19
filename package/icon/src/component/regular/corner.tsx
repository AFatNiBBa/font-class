
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=regular corner}
 * @preview ![corner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxODRjMC0xMy4zIDEwLjctMjQgMjQtMjRsMzY4IDBjMzAuOSAwIDU2IDI1LjEgNTYgNTZsMCAxNDRjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0xNDRjMC00LjQtMy42LTgtOC04TDI0IDIwOGMtMTMuMyAwLTI0LTEwLjctMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 184c0-13.3 10.7-24 24-24l368 0c30.9 0 56 25.1 56 56l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-4.4-3.6-8-8-8L24 208c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Corner;