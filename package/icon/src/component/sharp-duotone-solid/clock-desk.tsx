
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=sharp-duotone-solid clock-desk}
 * @preview ![clock-desk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGEyMjQgMjI0IDAgMSAwIDQ0OCAwQTIyNCAyMjQgMCAxIDAgMCAyMjR6TTIwMCA5Nmw0OCAwIDAgMjQgMCA5NC4xIDQxIDQxIDE3IDE3TDI3MiAzMDUuOWwtMTctMTctNDgtNDgtNy03IDAtOS45IDAtMTA0IDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNDggMTIwbDAtMjQtNDggMCAwIDI0IDAgMTA0IDAgOS45IDcgNyA0OCA0OCAxNyAxN0wzMDUuOSAyNzJsLTE3LTE3LTQxLTQxIDAtOTQuMXpNNDQ4IDIyNGMwIDEyMy43LTEwMC4zIDIyNC0yMjQgMjI0UzAgMzQ3LjcgMCAyMjRMMCA1MTJsNDQ4IDAgMC0yODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224a224 224 0 1 0 448 0A224 224 0 1 0 0 224zM200 96l48 0 0 24 0 94.1 41 41 17 17L272 305.9l-17-17-48-48-7-7 0-9.9 0-104 0-24z" />
            <path d="M248 120l0-24-48 0 0 24 0 104 0 9.9 7 7 48 48 17 17L305.9 272l-17-17-41-41 0-94.1zM448 224c0 123.7-100.3 224-224 224S0 347.7 0 224L0 512l448 0 0-288z" />
    </Icon>
);

export default ClockDesk;