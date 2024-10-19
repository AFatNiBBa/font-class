
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fax` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=sharp-duotone-solid fax}
 * @preview ![fax](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMGwwIDE5MiAzNTIgMCAwLTEyOEw0MTYgMCAxMjggMHptOTYgMjU2bDAgNjQgNjQgMCAwLTY0LTY0IDB6bTAgMTI4bDAgNjQgNjQgMCAwLTY0LTY0IDB6TTM1MiAyNTZsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAxMjhsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDEyOEwwIDEyOCAwIDUxMmw5NiAwIDAtMzg0em00MTYgNjRsLTM4NCAwIDAgMzIwIDM4NCAwIDAtMzIwek0yODggMjU2bDAgNjQtNjQgMCAwLTY0IDY0IDB6TTIyNCAzODRsNjQgMCAwIDY0LTY0IDAgMC02NHpNNDE2IDI1NmwwIDY0LTY0IDAgMC02NCA2NCAwek0zNTIgMzg0bDY0IDAgMCA2NC02NCAwIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Fax: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0l0 192 352 0 0-128L416 0 128 0zm96 256l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM352 256l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
            <path d="M96 128L0 128 0 512l96 0 0-384zm416 64l-384 0 0 320 384 0 0-320zM288 256l0 64-64 0 0-64 64 0zM224 384l64 0 0 64-64 0 0-64zM416 256l0 64-64 0 0-64 64 0zM352 384l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default Fax;