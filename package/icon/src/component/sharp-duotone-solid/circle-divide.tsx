
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=sharp-duotone-solid circle-divide}
 * @preview ![circle-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NC0yNGwyNCAwIDE3NiAwIDI0IDAgMCA0OC0yNCAwLTE3NiAwLTI0IDAgMC00OHptODAtMTA0bDY0IDAgMCA2NC02NCAwIDAtNjR6bTAgMTkybDY0IDAgMCA2NC02NCAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMTI4bDY0IDAgMCA2NC02NCAwIDAtNjR6TTE0NCAyMzJsMjQgMCAxNzYgMCAyNCAwIDAgNDgtMjQgMC0xNzYgMC0yNCAwIDAtNDh6bTE0NCA4OGwwIDY0LTY0IDAgMC02NCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-24l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm80-104l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64z" />
            <path d="M224 128l64 0 0 64-64 0 0-64zM144 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm144 88l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default CircleDivide;