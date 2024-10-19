
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=sharp-duotone-solid chevrons-right}
 * @preview ![chevrons-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOC43IDY0TDQxLjQgODYuNiAyMTAuNyAyNTYgNDEuNCA0MjUuNCAxOC43IDQ0OCA2NCA0OTMuM2wyMi42LTIyLjYgMTkyLTE5MkwzMDEuMyAyNTZsLTIyLjYtMjIuNi0xOTItMTkyTDY0IDE4LjcgMTguNyA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ5My4zIDI1NmwtMjIuNiAyMi42LTE5MiAxOTJMMjU2IDQ5My4zIDIxMC43IDQ0OGwyMi42LTIyLjZMNDAyLjcgMjU2IDIzMy40IDg2LjYgMjEwLjcgNjQgMjU2IDE4LjdsMjIuNiAyMi42IDE5MiAxOTJMNDkzLjMgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M18.7 64L41.4 86.6 210.7 256 41.4 425.4 18.7 448 64 493.3l22.6-22.6 192-192L301.3 256l-22.6-22.6-192-192L64 18.7 18.7 64z" />
            <path d="M493.3 256l-22.6 22.6-192 192L256 493.3 210.7 448l22.6-22.6L402.7 256 233.4 86.6 210.7 64 256 18.7l22.6 22.6 192 192L493.3 256z" />
    </Icon>
);

export default ChevronsRight;