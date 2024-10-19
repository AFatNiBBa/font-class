
import { Icon } from "../../index";

/**
 * A component that renders the `message-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-exclamation?s=sharp-solid message-exclamation}
 * @preview ![message-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDUxMiAwbDAgNDE2LTIwOCAwTDE2MCA1MTJsMC05NkwwIDQxNiAwIDB6TTI4MCA4MGwtNDggMCAwIDI0IDAgMTEyIDAgMjQgNDggMCAwLTI0IDAtMTEyIDAtMjR6TTIzMiAyNzJsMCA0OCA0OCAwIDAtNDgtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MessageExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM280 80l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 272l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default MessageExclamation;