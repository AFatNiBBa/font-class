
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=sharp-duotone-solid thumbs-down}
 * @preview ![thumbs-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMTAyLjNsMCAyNS43IDAgNjQgMCA5NiAwIDIzLjEgMTggMTQuNCA3LjkgNi40YzM0LjIgMjcuMyA1NCA2OC43IDU0IDExMi40bDAgMzUuNyA5NiAwIDAtMzUuN2MwLTM4LjEtOS03NS4xLTI1LjgtMTA4LjNMNDY0IDMzNmw0OCAwIDAtOTYtMTYgMCAwLTgwLTI0IDAgMC03Mi0yNCAwIDAtNTYtNDggMEwyODAgMzJsLTE0LjUgMC0xMi4xIDguMS03MiA0OEwxNjAgMTAyLjN6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDM4NEgxMjhWOTZIMFYzODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ThumbsDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 102.3l0 25.7 0 64 0 96 0 23.1 18 14.4 7.9 6.4c34.2 27.3 54 68.7 54 112.4l0 35.7 96 0 0-35.7c0-38.1-9-75.1-25.8-108.3L464 336l48 0 0-96-16 0 0-80-24 0 0-72-24 0 0-56-48 0L280 32l-14.5 0-12.1 8.1-72 48L160 102.3z" />
            <path d="M0 384H128V96H0V384z" />
    </Icon>
);

export default ThumbsDown;