
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building?s=sharp-duotone-solid building}
 * @preview ![building](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMzg0IDBsMCA1MTItMTQ0IDAgMC0xMjgtOTYgMCAwIDEyOEwwIDUxMiAwIDB6TTY0IDk2bDAgNjQgNjQgMCAwLTY0TDY0IDk2em0wIDEyOGwwIDY0IDY0IDAgMC02NC02NCAwek0xNjAgOTZsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAxMjhsMCA2NCA2NCAwIDAtNjQtNjQgMHpNMjU2IDk2bDAgNjQgNjQgMCAwLTY0LTY0IDB6bTAgMTI4bDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggOTZMNjQgOTZsMCA2NCA2NCAwIDAtNjR6bTAgMTI4bC02NCAwIDAgNjQgNjQgMCAwLTY0em05NiAwbC02NCAwIDAgNjQgNjQgMCAwLTY0em0zMiAwbDAgNjQgNjQgMCAwLTY0LTY0IDB6TTE2MCA5NmwwIDY0IDY0IDAgMC02NC02NCAwem0xNjAgMGwtNjQgMCAwIDY0IDY0IDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Building: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 512-144 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
            <path d="M128 96L64 96l0 64 64 0 0-64zm0 128l-64 0 0 64 64 0 0-64zm96 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Building;