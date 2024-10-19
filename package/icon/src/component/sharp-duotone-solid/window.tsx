
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=sharp-duotone-solid window}
 * @preview ![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNEwwIDQ4MGw1MTIgMCAwLTI1NkwwIDIyNHpNMTYwIDk2bDAgNjQgNjQgMCAwLTY0LTY0IDB6bTk2IDBsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAzMkwwIDMyIDAgMjI0bDUxMiAwIDAtMTkyek0xMjggOTZsMCA2NC02NCAwIDAtNjQgNjQgMHptMzIgMGw2NCAwIDAgNjQtNjQgMCAwLTY0em0xNjAgMGwwIDY0LTY0IDAgMC02NCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 480l512 0 0-256L0 224zM160 96l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
            <path d="M512 32L0 32 0 224l512 0 0-192zM128 96l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Window;