
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=solid square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNjBjMC0zNS4zIDI4LjctNjQgNjQtNjRIMjU2YzM1LjMgMCA2NCAyOC43IDY0IDY0VjM1MmMwIDM1LjMtMjguNyA2NC02NCA2NEg2NGMtMzUuMyAwLTY0LTI4LjctNjQtNjRWMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 160c0-35.3 28.7-64 64-64H256c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160z" />
    </Icon>
);

export default SquareSmall;