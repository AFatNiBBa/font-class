
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-zip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zip?s=sharp-duotone-solid file-zip}
 * @preview ![file-zip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAxNDQtMjA4IDAgMCAyMDhMMCA1MTIgMCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE2MEwyMjQgMGwwIDE2MCAxNjAgMHpNMjQwIDM1MmwtMTYgMCAwIDMyIDE2IDAgNDEgMC01NC45IDk2LjEtMi4xIDMuNyAwIDQuMiAwIDggMCAxNiAxNiAwIDY0IDAgMTYgMCAwLTMyLTE2IDAtNDEgMCA1NC45LTk2LjEgMi4xLTMuNyAwLTQuMiAwLTggMC0xNi0xNiAwLTY0IDB6bTE0NCAxNmwwLTE2LTMyIDAgMCAxNiAwIDEyOCAwIDE2IDMyIDAgMC0xNiAwLTEyOHptMzItMTZsMCAxNiAwIDgwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC0zMiA4IDBjMzAuOSAwIDU2LTI1LjEgNTYtNTZzLTI1LjEtNTYtNTYtNTZsLTI0IDAtMTYgMHptMzIgODBsMC00OCA4IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileZip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-208 0 0 208L0 512 0 0z" />
            <path d="M384 160L224 0l0 160 160 0zM240 352l-16 0 0 32 16 0 41 0-54.9 96.1-2.1 3.7 0 4.2 0 8 0 16 16 0 64 0 16 0 0-32-16 0-41 0 54.9-96.1 2.1-3.7 0-4.2 0-8 0-16-16 0-64 0zm144 16l0-16-32 0 0 16 0 128 0 16 32 0 0-16 0-128zm32-16l0 16 0 80 0 48 0 16 32 0 0-16 0-32 8 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-24 0-16 0zm32 80l0-48 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0z" />
    </Icon>
);

export default FileZip;