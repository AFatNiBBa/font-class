
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=sharp-duotone-solid chevrons-down}
 * @preview ![chevrons-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOC43IDY0TDQxLjQgODYuNmwxOTIgMTkyTDI1NiAzMDEuM2wyMi42LTIyLjYgMTkyLTE5Mkw0OTMuMyA2NCA0NDggMTguNyA0MjUuNCA0MS40IDI1NiAyMTAuNyA4Ni42IDQxLjQgNjQgMTguNyAxOC43IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDQ5My4zbC0yMi42LTIyLjYtMTkyLTE5MkwxOC43IDI1NiA2NCAyMTAuN2wyMi42IDIyLjZMMjU2IDQwMi43IDQyNS40IDIzMy40IDQ0OCAyMTAuNyA0OTMuMyAyNTZsLTIyLjYgMjIuNi0xOTIgMTkyTDI1NiA0OTMuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M18.7 64L41.4 86.6l192 192L256 301.3l22.6-22.6 192-192L493.3 64 448 18.7 425.4 41.4 256 210.7 86.6 41.4 64 18.7 18.7 64z" />
            <path d="M256 493.3l-22.6-22.6-192-192L18.7 256 64 210.7l22.6 22.6L256 402.7 425.4 233.4 448 210.7 493.3 256l-22.6 22.6-192 192L256 493.3z" />
    </Icon>
);

export default ChevronsDown;