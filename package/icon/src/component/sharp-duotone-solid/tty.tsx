
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tty?s=sharp-duotone-solid tty}
 * @preview ![tty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3NEMyOS45IDEzMiAxMjIuOSA0OCAyNTYgNDhzMjI2LjEgODQgMjU2IDEyNmwtNTEuMiA5MC0xMjgtNDIgMC03OGMtNDkuNi0xOC4xLTEwNC0xOC4xLTE1My42IDBsMCA3OC0xMjggNDJMMCAxNzR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAzMjBsLTY0IDAgMCA2NCA2NCAwIDAtNjR6bTAgOTZsLTY0IDAgMCA2NCA2NCAwIDAtNjR6bTMyLTk2bDAgNjQgNjQgMCAwLTY0LTY0IDB6bTE2MCAwbC02NCAwIDAgNjQgNjQgMCAwLTY0em0zMiAwbDAgNjQgNjQgMCAwLTY0LTY0IDB6bTE2MCAwbC02NCAwIDAgNjQgNjQgMCAwLTY0em0tNjQgOTZsMCA2NCA2NCAwIDAtNjQtNjQgMHptLTMyIDBsLTI1NiAwIDAgNjQgMjU2IDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 174C29.9 132 122.9 48 256 48s226.1 84 256 126l-51.2 90-128-42 0-78c-49.6-18.1-104-18.1-153.6 0l0 78-128 42L0 174z" />
            <path d="M96 320l-64 0 0 64 64 0 0-64zm0 96l-64 0 0 64 64 0 0-64zm32-96l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64zm-64 96l0 64 64 0 0-64-64 0zm-32 0l-256 0 0 64 256 0 0-64z" />
    </Icon>
);

export default Tty;