
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-flag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-flag?s=sharp-duotone-solid building-flag}
 * @preview ![building-flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMzg0IDBsMCA1MTItMTQ0IDAgMC0xMjgtOTYgMCAwIDEyOEwwIDUxMiAwIDB6TTY0IDk2bDAgNjQgNjQgMCAwLTY0TDY0IDk2em0wIDEyOGwwIDY0IDY0IDAgMC02NC02NCAwek0xNjAgOTZsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAxMjhsMCA2NCA2NCAwIDAtNjQtNjQgMHpNMjU2IDk2bDAgNjQgNjQgMCAwLTY0LTY0IDB6bTAgMTI4bDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00ODAgMzJsMC0zMkw0MTYgMGwwIDMyIDAgNDgwIDY0IDAgMC0zMjAgMTYwIDAgMC0xNjBMNDgwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BuildingFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 512-144 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
            <path d="M480 32l0-32L416 0l0 32 0 480 64 0 0-320 160 0 0-160L480 32z" />
    </Icon>
);

export default BuildingFlag;