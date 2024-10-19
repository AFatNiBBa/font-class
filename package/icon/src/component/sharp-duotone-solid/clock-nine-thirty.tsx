
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-nine-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine-thirty?s=sharp-duotone-solid clock-nine-thirty}
 * @preview ![clock-nine-thirty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC0yNGwyNCAwIDEwNCAwIDI0IDAgMCAyNCAwIDEzNiAwIDI0LTQ4IDAgMC0yNCAwLTExMi04MCAwLTI0IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCA0MTZsMC0yNCAwLTEzNiAwLTI0LTI0IDAtMTA0IDAtMjQgMCAwIDQ4IDI0IDAgODAgMCAwIDExMiAwIDI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockNineThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-24l24 0 104 0 24 0 0 24 0 136 0 24-48 0 0-24 0-112-80 0-24 0 0-48z" />
            <path d="M280 416l0-24 0-136 0-24-24 0-104 0-24 0 0 48 24 0 80 0 0 112 0 24 48 0z" />
    </Icon>
);

export default ClockNineThirty;