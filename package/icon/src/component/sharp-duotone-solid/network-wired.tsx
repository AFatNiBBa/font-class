
import { Icon, generic } from "../../index";

/**
 * A component that renders the `network-wired` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/network-wired?s=sharp-duotone-solid network-wired}
 * @preview ![network-wired](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0IDMyIDAgOTYgMCAwIDMyIDY0IDAgMC0zMiAyNTYgMCAwIDMyIDY0IDAgMC0zMiA5NiAwIDMyIDAgMC02NC0zMiAwLTI1NiAwIDAtMzItNjQgMCAwIDMyTDMyIDIyNCAwIDIyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCA2NGwwIDY0LTEyOCAwIDAtNjQgMTI4IDB6TTI1NiAwTDE5MiAwbDAgNjQgMCA2NCAwIDY0IDY0IDAgMTI4IDAgNjQgMCAwLTY0IDAtNjQgMC02NEwzODQgMCAyNTYgMHpNMjI0IDM4NGwwIDY0TDk2IDQ0OGwwLTY0IDEyOCAwek05NiAzMjBsLTY0IDAgMCA2NCAwIDY0IDAgNjQgNjQgMCAxMjggMCA2NCAwIDAtNjQgMC02NCAwLTY0LTY0IDBMOTYgMzIwem0zMjAgNjRsMTI4IDAgMCA2NC0xMjggMCAwLTY0em0tNjQtNjRsMCA2NCAwIDY0IDAgNjQgNjQgMCAxMjggMCA2NCAwIDAtNjQgMC02NCAwLTY0LTY0IDAtMTI4IDAtNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const NetworkWired: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 96 0 0 32 64 0 0-32 256 0 0 32 64 0 0-32 96 0 32 0 0-64-32 0-256 0 0-32-64 0 0 32L32 224 0 224z" />
            <path d="M384 64l0 64-128 0 0-64 128 0zM256 0L192 0l0 64 0 64 0 64 64 0 128 0 64 0 0-64 0-64 0-64L384 0 256 0zM224 384l0 64L96 448l0-64 128 0zM96 320l-64 0 0 64 0 64 0 64 64 0 128 0 64 0 0-64 0-64 0-64-64 0L96 320zm320 64l128 0 0 64-128 0 0-64zm-64-64l0 64 0 64 0 64 64 0 128 0 64 0 0-64 0-64 0-64-64 0-128 0-64 0z" />
    </Icon>
);

export default NetworkWired;