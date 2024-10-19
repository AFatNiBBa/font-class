
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=sharp-light chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQwNi42bDExLjMtMTEuMyAxOTItMTkyTDQ3MC42IDE5MiA0NDggMTY5LjRsLTExLjMgMTEuM0wyNTYgMzYxLjQgNzUuMyAxODAuNyA2NCAxNjkuNCA0MS40IDE5MmwxMS4zIDExLjMgMTkyIDE5MkwyNTYgNDA2LjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 406.6l11.3-11.3 192-192L470.6 192 448 169.4l-11.3 11.3L256 361.4 75.3 180.7 64 169.4 41.4 192l11.3 11.3 192 192L256 406.6z" />
    </Icon>
);

export default ChevronDown;