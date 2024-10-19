
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-exclamation?s=sharp-duotone-solid file-exclamation}
 * @preview ![file-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek0xNjggMTkybDAgMjQgMCAxMTIgMCAyNCA0OCAwIDAtMjQgMC0xMTIgMC0yNC00OCAwem0wIDE5MmwwIDQ4IDQ4IDAgMC00OC00OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE2MEwyMjQgMGwwIDE2MCAxNjAgMHpNMjE2IDE5MmwtNDggMCAwIDI0IDAgMTEyIDAgMjQgNDggMCAwLTI0IDAtMTEyIDAtMjR6TTE2OCAzODRsMCA0OCA0OCAwIDAtNDgtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM168 192l0 24 0 112 0 24 48 0 0-24 0-112 0-24-48 0zm0 192l0 48 48 0 0-48-48 0z" />
            <path d="M384 160L224 0l0 160 160 0zM216 192l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM168 384l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default FileExclamation;