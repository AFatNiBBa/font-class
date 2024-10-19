
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=sharp-duotone-solid chevrons-left}
 * @preview ![chevrons-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMTAuNyAyNTZsMjIuNi0yMi42IDE5Mi0xOTJMNDQ4IDE4LjcgNDkzLjMgNjQgNDcwLjYgODYuNiAzMDEuMyAyNTYgNDcwLjYgNDI1LjQgNDkzLjMgNDQ4IDQ0OCA0OTMuM2wtMjIuNi0yMi42LTE5Mi0xOTJMMjEwLjcgMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTguNyAyNTZsMjIuNi0yMi42IDE5Mi0xOTJMMjU2IDE4LjcgMzAxLjMgNjQgMjc4LjYgODYuNiAxMDkuMyAyNTYgMjc4LjYgNDI1LjQgMzAxLjMgNDQ4IDI1NiA0OTMuM2wtMjIuNi0yMi42LTE5Mi0xOTJMMTguNyAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M210.7 256l22.6-22.6 192-192L448 18.7 493.3 64 470.6 86.6 301.3 256 470.6 425.4 493.3 448 448 493.3l-22.6-22.6-192-192L210.7 256z" />
            <path d="M18.7 256l22.6-22.6 192-192L256 18.7 301.3 64 278.6 86.6 109.3 256 278.6 425.4 301.3 448 256 493.3l-22.6-22.6-192-192L18.7 256z" />
    </Icon>
);

export default ChevronsLeft;