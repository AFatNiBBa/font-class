
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=sharp-duotone-solid chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgODIuN2wyMi42IDIyLjYgMTkyIDE5Mkw0OTMuMyAzMjAgNDQ4IDM2NS4zbC0yMi42LTIyLjZMMjU2IDE3My4zIDg2LjYgMzQyLjYgNjQgMzY1LjMgMTguNyAzMjBsMjIuNi0yMi42IDE5Mi0xOTJMMjU2IDgyLjd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 82.7l22.6 22.6 192 192L493.3 320 448 365.3l-22.6-22.6L256 173.3 86.6 342.6 64 365.3 18.7 320l22.6-22.6 192-192L256 82.7z" />
    </Icon>
);

export default ChevronUp;