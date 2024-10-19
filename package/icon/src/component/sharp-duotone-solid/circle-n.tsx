
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=sharp-duotone-solid circle-n}
 * @preview ![circle-n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTE2MCAxMjhsMzYuNiAwIDcuMiAxMC4zTDMwNCAyODMuMiAzMDQgMTUybDAtMjQgNDggMCAwIDI0IDAgMjA4IDAgMjQtMzYuNiAwLTcuMi0xMC4zTDIwOCAyMjguOCAyMDggMzYwbDAgMjQtNDggMCAwLTI0IDAtMjA4IDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgMTI4bC00OCAwIDAgMjQgMCAxMzEuMkwyMDMuNyAxMzguMyAxOTYuNiAxMjggMTYwIDEyOGwwIDI0IDAgMjA4IDAgMjQgNDggMCAwLTI0IDAtMTMxLjJMMzA4LjMgMzczLjdsNy4yIDEwLjMgMzYuNiAwIDAtMjQgMC0yMDggMC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l36.6 0 7.2 10.3L304 283.2 304 152l0-24 48 0 0 24 0 208 0 24-36.6 0-7.2-10.3L208 228.8 208 360l0 24-48 0 0-24 0-208 0-24z" />
            <path d="M352 128l-48 0 0 24 0 131.2L203.7 138.3 196.6 128 160 128l0 24 0 208 0 24 48 0 0-24 0-131.2L308.3 373.7l7.2 10.3 36.6 0 0-24 0-208 0-24z" />
    </Icon>
);

export default CircleN;