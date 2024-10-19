
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-lines?s=sharp-duotone-solid message-lines}
 * @preview ![message-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTI4IDE0NGwwIDQ4IDI0IDAgMjA4IDAgMjQgMCAwLTQ4LTI0IDAtMjA4IDAtMjQgMHptMCA5NmwwIDQ4IDI0IDAgMTEyIDAgMjQgMCAwLTQ4LTI0IDAtMTEyIDAtMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAxNDRsMjQgMCAyMDggMCAyNCAwIDAgNDgtMjQgMC0yMDggMC0yNCAwIDAtNDh6bTAgOTZsMjQgMCAxMTIgMCAyNCAwIDAgNDgtMjQgMC0xMTIgMC0yNCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageLines: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM128 144l0 48 24 0 208 0 24 0 0-48-24 0-208 0-24 0zm0 96l0 48 24 0 112 0 24 0 0-48-24 0-112 0-24 0z" />
            <path d="M128 144l24 0 208 0 24 0 0 48-24 0-208 0-24 0 0-48zm0 96l24 0 112 0 24 0 0 48-24 0-112 0-24 0 0-48z" />
    </Icon>
);

export default MessageLines;