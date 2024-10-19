
import { Icon, generic } from "../../index";

/**
 * A component that renders the `axe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=sharp-duotone-solid axe}
 * @preview ![axe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGw2NCA2NEwzMzYgMjQwbC02NC02NEwwIDQ0OHptMzg0LTk2bDAgNjQgMzIgMGMxMjMuNyAwIDIyNC0xMDAuMyAyMjQtMjI0bDAtMzItNjQgMCAwIDMyYzAgODguNC03MS42IDE2MC0xNjAgMTYwbC0zMiAwek00MDAgNDhsNjQgNjQgNDgtNDhMNDQ4IDAgNDAwIDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDEyOEwzNTIgMCA1MTIgMTYwbDY0IDAgMCAzMmMwIDg4LjQtNzEuNiAxNjAtMTYwIDE2MGwtMzIgMCAwLTY0TDIyNCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448l64 64L336 240l-64-64L0 448zm384-96l0 64 32 0c123.7 0 224-100.3 224-224l0-32-64 0 0 32c0 88.4-71.6 160-160 160l-32 0zM400 48l64 64 48-48L448 0 400 48z" />
            <path d="M224 128L352 0 512 160l64 0 0 32c0 88.4-71.6 160-160 160l-32 0 0-64L224 128z" />
    </Icon>
);

export default Axe;