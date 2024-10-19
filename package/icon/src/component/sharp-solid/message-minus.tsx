
import { Icon } from "../../index";

/**
 * A component that renders the `message-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-minus?s=sharp-solid message-minus}
 * @preview ![message-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDUxMiAwbDAgNDE2LTIwOCAwTDE2MCA1MTJsMC05NkwwIDQxNiAwIDB6TTE4NCAxODRsLTI0IDAgMCA0OCAyNCAwIDE0NCAwIDI0IDAgMC00OC0yNCAwLTE0NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM184 184l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default MessageMinus;