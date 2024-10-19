
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-down?s=sharp-duotone-solid message-arrow-down}
 * @preview ![message-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTUwLjEgMjI0bDE3IDE3IDcyIDcyIDE3IDE3IDE3LTE3IDcyLTcyIDE3LTE3TDMyOCAxOTAuMWwtMTcgMTctMzEgMzFMMjgwIDEyMGwwLTI0LTQ4IDAgMCAyNCAwIDExOC4xLTMxLTMxLTE3LTE3TDE1MC4xIDIyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCA5NmwwIDI0IDAgMTE4LjEgMzEtMzEgMTctMTdMMzYxLjkgMjI0bC0xNyAxNy03MiA3Mi0xNyAxNy0xNy0xNy03Mi03Mi0xNy0xN0wxODQgMTkwLjFsMTcgMTcgMzEgMzFMMjMyIDEyMGwwLTI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM150.1 224l17 17 72 72 17 17 17-17 72-72 17-17L328 190.1l-17 17-31 31L280 120l0-24-48 0 0 24 0 118.1-31-31-17-17L150.1 224z" />
            <path d="M280 96l0 24 0 118.1 31-31 17-17L361.9 224l-17 17-72 72-17 17-17-17-72-72-17-17L184 190.1l17 17 31 31L232 120l0-24 48 0z" />
    </Icon>
);

export default MessageArrowDown;