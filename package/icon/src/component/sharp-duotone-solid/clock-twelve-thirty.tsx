
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-twelve-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-twelve-thirty?s=sharp-duotone-solid clock-twelve-thirty}
 * @preview ![clock-twelve-thirty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIzMiAxMjhsNDggMCAwIDI0IDAgMjQwIDAgMjQtNDggMCAwLTI0IDAtMjQwIDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODAgMTI4bDAgMjQgMCAyNDAgMCAyNC00OCAwIDAtMjQgMC0yNDAgMC0yNCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockTwelveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 128l48 0 0 24 0 240 0 24-48 0 0-24 0-240 0-24z" />
            <path d="M280 128l0 24 0 240 0 24-48 0 0-24 0-240 0-24 48 0z" />
    </Icon>
);

export default ClockTwelveThirty;