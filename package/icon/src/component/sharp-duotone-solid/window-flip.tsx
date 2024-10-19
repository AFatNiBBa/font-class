
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=sharp-duotone-solid window-flip}
 * @preview ![window-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGw1MTIgMCAwIDI1NkwwIDQ4MCAwIDIyNHpNMjg4IDk2bDY0IDAgMCA2NC02NCAwIDAtNjR6bTk2IDBsNjQgMCAwIDY0LTY0IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMzJsNTEyIDAgMCAxOTJMMCAyMjQgMCAzMnpNMzg0IDk2bDAgNjQgNjQgMCAwLTY0LTY0IDB6bS0zMiAwbC02NCAwIDAgNjQgNjQgMCAwLTY0ek0xOTIgOTZsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l512 0 0 256L0 480 0 224zM288 96l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
            <path d="M0 32l512 0 0 192L0 224 0 32zM384 96l0 64 64 0 0-64-64 0zm-32 0l-64 0 0 64 64 0 0-64zM192 96l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default WindowFlip;