
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevron-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=sharp-duotone-solid chevron-right}
 * @preview ![chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMTcuMyAyNTZsLTIyLjYgMjIuNi0xOTIgMTkyTDgwIDQ5My4zIDM0LjcgNDQ4bDIyLjYtMjIuNkwyMjYuNyAyNTYgNTcuNCA4Ni42IDM0LjcgNjQgODAgMTguN2wyMi42IDIyLjYgMTkyIDE5MkwzMTcuMyAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M317.3 256l-22.6 22.6-192 192L80 493.3 34.7 448l22.6-22.6L226.7 256 57.4 86.6 34.7 64 80 18.7l22.6 22.6 192 192L317.3 256z" />
    </Icon>
);

export default ChevronRight;