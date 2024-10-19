
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=sharp-solid chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQyOS4zbDIyLjYtMjIuNiAxOTItMTkyTDQ5My4zIDE5MiA0NDggMTQ2LjdsLTIyLjYgMjIuNkwyNTYgMzM4LjcgODYuNiAxNjkuNCA2NCAxNDYuNyAxOC43IDE5MmwyMi42IDIyLjYgMTkyIDE5MkwyNTYgNDI5LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 429.3l22.6-22.6 192-192L493.3 192 448 146.7l-22.6 22.6L256 338.7 86.6 169.4 64 146.7 18.7 192l22.6 22.6 192 192L256 429.3z" />
    </Icon>
);

export default ChevronDown;