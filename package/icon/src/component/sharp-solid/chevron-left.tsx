
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=sharp-solid chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMi43IDI1NmwyMi42IDIyLjYgMTkyIDE5MkwyNDAgNDkzLjMgMjg1LjMgNDQ4bC0yMi42LTIyLjZMOTMuMyAyNTYgMjYyLjYgODYuNiAyODUuMyA2NCAyNDAgMTguNyAyMTcuNCA0MS40bC0xOTIgMTkyTDIuNyAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M2.7 256l22.6 22.6 192 192L240 493.3 285.3 448l-22.6-22.6L93.3 256 262.6 86.6 285.3 64 240 18.7 217.4 41.4l-192 192L2.7 256z" />
    </Icon>
);

export default ChevronLeft;