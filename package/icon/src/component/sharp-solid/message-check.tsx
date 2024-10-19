
import { Icon } from "../../index";

/**
 * A component that renders the `message-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-check?s=sharp-solid message-check}
 * @preview ![message-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDUxMiAwbDAgNDE2LTIwOCAwTDE2MCA1MTJsMC05NkwwIDQxNiAwIDB6TTM2OSAxNTNsMTctMTdMMzUyIDEwMi4xbC0xNyAxNy0xMTEgMTExLTQ3LTQ3LTE3LTE3TDEyNi4xIDIwMGwxNyAxNyA2NCA2NCAxNyAxNyAxNy0xN0wzNjkgMTUzeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM369 153l17-17L352 102.1l-17 17-111 111-47-47-17-17L126.1 200l17 17 64 64 17 17 17-17L369 153z" />
    </Icon>
);

export default MessageCheck;