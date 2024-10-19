
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=sharp-duotone-solid bring-front}
 * @preview ![bring-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA2NCAwIDE5MmwwIDY0IDY0IDAgOTYgMCAwLTY0LTk2IDBMNjQgNjRsMTI4IDAgMCAzMiA2NCAwIDAtMzIgMC02NEwxOTIgMCA2NCAwIDAgMHpNMzg0IDQxNmwwIDMyIDAgNjQgNjQgMCAxMjggMCA2NCAwIDAtNjQgMC0xMjggMC02NC02NCAwLTk2IDAgMCA2NCA5NiAwIDAgMTI4LTEyOCAwIDAtMzItNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4MCA5NkwxNjAgOTZsMCAzMjAgMzIwIDAgMC0zMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 64 0 192l0 64 64 0 96 0 0-64-96 0L64 64l128 0 0 32 64 0 0-32 0-64L192 0 64 0 0 0zM384 416l0 32 0 64 64 0 128 0 64 0 0-64 0-128 0-64-64 0-96 0 0 64 96 0 0 128-128 0 0-32-64 0z" />
            <path d="M480 96L160 96l0 320 320 0 0-320z" />
    </Icon>
);

export default BringFront;