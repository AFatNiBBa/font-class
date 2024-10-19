
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=solid rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxMjhDMCA5Mi43IDI4LjcgNjQgNjQgNjRINDQ4YzM1LjMgMCA2NCAyOC43IDY0IDY0VjM4NGMwIDM1LjMtMjguNyA2NC02NCA2NEg2NGMtMzUuMyAwLTY0LTI4LjctNjQtNjRWMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
    </Icon>
);

export default Rectangle;