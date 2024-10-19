
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=sharp-duotone-solid chevrons-up}
 * @preview ![chevrons-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOC43IDQ0OEw2NCA0OTMuM2wyMi42LTIyLjZMMjU2IDMwMS4zIDQyNS40IDQ3MC42IDQ0OCA0OTMuMyA0OTMuMyA0NDhsLTIyLjYtMjIuNi0xOTItMTkyTDI1NiAyMTAuN2wtMjIuNiAyMi42LTE5MiAxOTJMMTguNyA0NDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMTguN2wyMi42IDIyLjYgMTkyIDE5Mkw0OTMuMyAyNTYgNDQ4IDMwMS4zbC0yMi42LTIyLjZMMjU2IDEwOS4zIDg2LjYgMjc4LjYgNjQgMzAxLjMgMTguNyAyNTZsMjIuNi0yMi42IDE5Mi0xOTJMMjU2IDE4Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M18.7 448L64 493.3l22.6-22.6L256 301.3 425.4 470.6 448 493.3 493.3 448l-22.6-22.6-192-192L256 210.7l-22.6 22.6-192 192L18.7 448z" />
            <path d="M256 18.7l22.6 22.6 192 192L493.3 256 448 301.3l-22.6-22.6L256 109.3 86.6 278.6 64 301.3 18.7 256l22.6-22.6 192-192L256 18.7z" />
    </Icon>
);

export default ChevronsUp;