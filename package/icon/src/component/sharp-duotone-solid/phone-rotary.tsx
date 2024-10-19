
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=sharp-duotone-solid phone-rotary}
 * @preview ![phone-rotary](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOHM5Ni05NiAyNTYtOTZzMjU2IDk2IDI1NiA5NmwwIDgwLTk2IDAtMzItODBzLTQ4LTI0LTEyOC0yNHMtMTI4IDI0LTEyOCAyNEw5NiAyMDggMCAyMDhsMC04MHpNMzI4IDMxMmE3MiA3MiAwIDEgMSAtMTQ0IDAgNzIgNzIgMCAxIDEgMTQ0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzODRsMCA5NiA0NDggMCAwLTk2TDM1MiAxNjBsLTE5MiAwTDMyIDM4NHpNMjU2IDI0MGE3MiA3MiAwIDEgMSAwIDE0NCA3MiA3MiAwIDEgMSAwLTE0NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128s96-96 256-96s256 96 256 96l0 80-96 0-32-80s-48-24-128-24s-128 24-128 24L96 208 0 208l0-80zM328 312a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
            <path d="M32 384l0 96 448 0 0-96L352 160l-192 0L32 384zM256 240a72 72 0 1 1 0 144 72 72 0 1 1 0-144z" />
    </Icon>
);

export default PhoneRotary;