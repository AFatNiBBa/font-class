
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=sharp-light chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOS40IDI1NmwxMS4zLTExLjMgMTkyLTE5MkwyMjQgNDEuNCAyNDYuNiA2NCAyMzUuMyA3NS4zIDU0LjYgMjU2IDIzNS4zIDQzNi43IDI0Ni42IDQ0OCAyMjQgNDcwLjZsLTExLjMtMTEuMy0xOTItMTkyTDkuNCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M9.4 256l11.3-11.3 192-192L224 41.4 246.6 64 235.3 75.3 54.6 256 235.3 436.7 246.6 448 224 470.6l-11.3-11.3-192-192L9.4 256z" />
    </Icon>
);

export default ChevronLeft;