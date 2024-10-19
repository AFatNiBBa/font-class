
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=sharp-thin chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDEwOC43bDUuNyA1LjcgMjA4IDIwOCA1LjcgNS43TDQ2NCAzMzkuM2wtNS43LTUuN0wyNTYgMTMxLjMgNTMuNyAzMzMuNyA0OCAzMzkuMyAzNi43IDMyOGw1LjctNS43IDIwOC0yMDggNS43LTUuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 108.7l5.7 5.7 208 208 5.7 5.7L464 339.3l-5.7-5.7L256 131.3 53.7 333.7 48 339.3 36.7 328l5.7-5.7 208-208 5.7-5.7z" />
    </Icon>
);

export default ChevronUp;