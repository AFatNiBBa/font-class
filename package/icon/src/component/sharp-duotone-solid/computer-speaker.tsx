
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-speaker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-speaker?s=sharp-duotone-solid computer-speaker}
 * @preview ![computer-speaker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTYgMCAzMjBsMCA2NCA2NCAwIDIyNCAwIDAtNjRMNjQgMzIwIDY0IDk2bDIyNCAwIDAtNjRMNjQgMzIgMCAzMnpNOTYgNDE2bDAgNjQgMzIgMCAxNjAgMCAwLTY0LTE2MCAwLTMyIDB6TTMyMCAzMmwwIDMyIDAgMTYgMCAzNTIgMCAxNiAwIDMyIDMyIDAgMTYgMCAyNzIgMCAwLTQ0OEwzNjggMzJsLTE2IDAtMzIgMHpNNTc2IDMyMGE5NiA5NiAwIDEgMSAtMTkyIDAgOTYgOTYgMCAxIDEgMTkyIDB6TTUxMiAxMjhhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDk2bDIyNCAwIDAgMjI0TDY0IDMyMCA2NCA5NnptMzg0IDMyYTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bTgwIDE5MmE0OCA0OCAwIDEgMCAtOTYgMCA0OCA0OCAwIDEgMCA5NiAwem0tMTQ0IDBhOTYgOTYgMCAxIDEgMTkyIDAgOTYgOTYgMCAxIDEgLTE5MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ComputerSpeaker: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96 0 320l0 64 64 0 224 0 0-64L64 320 64 96l224 0 0-64L64 32 0 32zM96 416l0 64 32 0 160 0 0-64-160 0-32 0zM320 32l0 32 0 16 0 352 0 16 0 32 32 0 16 0 272 0 0-448L368 32l-16 0-32 0zM576 320a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM512 128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M64 96l224 0 0 224L64 320 64 96zm384 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-144 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default ComputerSpeaker;