
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thought-bubble` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thought-bubble?s=sharp-duotone-solid thought-bubble}
 * @preview ![thought-bubble](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwwIDY0IDY0IDAgMC02NEwwIDQ0OHptMTA0LTU2bDAgODAgODAgMCAwLTgwLTgwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMGMtNTMuNyAwLTk5LjcgMzMuMS0xMTguNyA4MEwxMjggODBDNTcuMyA4MCAwIDEzNy4zIDAgMjA4czU3LjMgMTI4IDEyOCAxMjhsNDQuOCAwYzE2LjYgMjguNyA0Ny42IDQ4IDgzLjIgNDhzNjYuNi0xOS4zIDgzLjItNDhsNDQuOCAwYzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4bC05LjMgMGMtMTktNDYuOS02NS04MC0xMTguNy04MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ThoughtBubble: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l0 64 64 0 0-64L0 448zm104-56l0 80 80 0 0-80-80 0z" />
            <path d="M256 0c-53.7 0-99.7 33.1-118.7 80L128 80C57.3 80 0 137.3 0 208s57.3 128 128 128l44.8 0c16.6 28.7 47.6 48 83.2 48s66.6-19.3 83.2-48l44.8 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-9.3 0c-19-46.9-65-80-118.7-80z" />
    </Icon>
);

export default ThoughtBubble;