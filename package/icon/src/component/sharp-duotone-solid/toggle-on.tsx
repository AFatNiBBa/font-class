
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=sharp-duotone-solid toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDU3NiAwIDAtMzg0TDAgNjR6bTI4OCA5NmwxOTIgMCAwIDE5Mi0xOTIgMCAwLTE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4MCAxNjBIMjg4VjM1Mkg0ODBWMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l576 0 0-384L0 64zm288 96l192 0 0 192-192 0 0-192z" />
            <path d="M480 160H288V352H480V160z" />
    </Icon>
);

export default ToggleOn;