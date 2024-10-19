
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=sharp-solid message}
 * @preview ![message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDBMMCAwIDAgNDE2bDE2MCAwIDAgOTYgMTQ0LTk2IDIwOCAwTDUxMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L0 0 0 416l160 0 0 96 144-96 208 0L512 0z" />
    </Icon>
);

export default Message;