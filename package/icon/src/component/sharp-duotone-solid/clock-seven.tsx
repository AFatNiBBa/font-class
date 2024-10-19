
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-seven` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven?s=sharp-duotone-solid clock-seven}
 * @preview ![clock-seven](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTE1OC43IDM1OC43bDEzLjMtMjAgNjAtOTBMMjMyIDEyMGwwLTI0IDQ4IDAgMCAyNCAwIDEzNiAwIDcuMy00IDYtNjQgOTYtMTMuMyAyMC0zOS45LTI2LjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMzIgOTZsMCAyNCAwIDEyOC43LTYwIDkwLTEzLjMgMjAgMzkuOSAyNi42IDEzLjMtMjAgNjQtOTYgNC02IDAtNy4zIDAtMTM2IDAtMjQtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockSeven: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM158.7 358.7l13.3-20 60-90L232 120l0-24 48 0 0 24 0 136 0 7.3-4 6-64 96-13.3 20-39.9-26.6z" />
            <path d="M232 96l0 24 0 128.7-60 90-13.3 20 39.9 26.6 13.3-20 64-96 4-6 0-7.3 0-136 0-24-48 0z" />
    </Icon>
);

export default ClockSeven;