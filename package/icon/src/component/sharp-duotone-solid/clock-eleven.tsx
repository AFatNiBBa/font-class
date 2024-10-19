
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eleven` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven?s=sharp-duotone-solid clock-eleven}
 * @preview ![clock-eleven](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTE1OC43IDE1My4zbDM5LjktMjYuNiAxMy4zIDIwIDIwIDMwIDAtNTYuNyAwLTI0IDQ4IDAgMCAyNCAwIDEzNi00NCAxMy4zLTY0LTk2LTEzLjMtMjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMzIgOTZsMCAyNCAwIDU2LjctMjAtMzAtMTMuMy0yMC0zOS45IDI2LjYgMTMuMyAyMCA2NCA5NkwyODAgMjU2bDAtMTM2IDAtMjQtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockEleven: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM158.7 153.3l39.9-26.6 13.3 20 20 30 0-56.7 0-24 48 0 0 24 0 136-44 13.3-64-96-13.3-20z" />
            <path d="M232 96l0 24 0 56.7-20-30-13.3-20-39.9 26.6 13.3 20 64 96L280 256l0-136 0-24-48 0z" />
    </Icon>
);

export default ClockEleven;