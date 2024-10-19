
import { Icon } from "../../index";

/**
 * A component that renders the `message-dots` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-dots?s=sharp-solid message-dots}
 * @preview ![message-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDUxMiAwbDAgNDE2LTIwOCAwTDE2MCA1MTJsMC05NkwwIDQxNiAwIDB6TTEyOCAyNDBhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0em0xMjggMGEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6bTE2MC0zMmEzMiAzMiAwIDEgMCAtNjQgMCAzMiAzMiAwIDEgMCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageDots: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM128 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default MessageDots;