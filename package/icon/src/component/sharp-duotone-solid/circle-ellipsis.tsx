
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=sharp-duotone-solid circle-ellipsis}
 * @preview ![circle-ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MTIgMjU2QTI1NiAyNTYgMCAxIDEgMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMHpNMTI4IDIyNGwwIDY0IDY0IDAgMC02NC02NCAwem05NiAwbDAgNjQgNjQgMCAwLTY0LTY0IDB6bTk2IDBsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAyODhsNjQgMCAwLTY0LTY0IDAgMCA2NHptMTYwIDBsMC02NC02NCAwIDAgNjQgNjQgMHptOTYgMGwwLTY0LTY0IDAgMCA2NCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM128 224l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
            <path d="M128 288l64 0 0-64-64 0 0 64zm160 0l0-64-64 0 0 64 64 0zm96 0l0-64-64 0 0 64 64 0z" />
    </Icon>
);

export default CircleEllipsis;