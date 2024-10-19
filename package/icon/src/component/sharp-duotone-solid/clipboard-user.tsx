
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-user?s=sharp-duotone-solid clipboard-user}
 * @preview ![clipboard-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDgwIDAgMCA3MiAwIDI0IDExMiAwIDg4IDAgMjQgMCAwLTI0IDAtNDggMC0yNCA4MCAwIDAgNDQ4TDAgNTEyIDAgNjR6TTgwIDQ0OGwyMjQgMC0zMi05Ni0xNjAgMEw4MCA0NDh6bTQ4LTE5MmE2NCA2NCAwIDEgMCAxMjggMCA2NCA2NCAwIDEgMCAtMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNzAuNCA2NEwzMDQgNjRsMCA5Ni0xMTIgMEw4MCAxNjBsMC05NiAzMy42IDBDMTIxIDI3LjUgMTUzLjMgMCAxOTIgMHM3MSAyNy41IDc4LjQgNjR6TTIxNiA4MGEyNCAyNCAwIDEgMCAtNDggMCAyNCAyNCAwIDEgMCA0OCAwek0xMjggMjU2YTY0IDY0IDAgMSAxIDEyOCAwIDY0IDY0IDAgMSAxIC0xMjggMHptMTQ0IDk2bDMyIDk2TDgwIDQ0OGwzMi05NiAxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClipboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l80 0 0 72 0 24 112 0 88 0 24 0 0-24 0-48 0-24 80 0 0 448L0 512 0 64zM80 448l224 0-32-96-160 0L80 448zm48-192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
            <path d="M270.4 64L304 64l0 96-112 0L80 160l0-96 33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64zM216 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96L80 448l32-96 160 0z" />
    </Icon>
);

export default ClipboardUser;