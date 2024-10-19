
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=sharp-light message}
 * @preview ![message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDQxNmwzMiAwIDAgMzIgMCAyNS41IDAgMzguNSAzMi0yMS4zTDMwNCA0MTZsMTc2IDAgMzIgMCAwLTMyIDAtMzUyIDAtMzJMNDgwIDAgMzIgMCAwIDAgMCAzMiAwIDM4NGwwIDMyIDMyIDAgOTYgMHpNMzIgMzg0TDMyIDMybDQ0OCAwIDAgMzUyLTE3NiAwLTkuNyAwLTguMSA1LjRMMTkyIDQ1Mi4ybDAtMzYuMiAwLTMyLTMyIDBMMzIgMzg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 416l32 0 0 32 0 25.5 0 38.5 32-21.3L304 416l176 0 32 0 0-32 0-352 0-32L480 0 32 0 0 0 0 32 0 384l0 32 32 0 96 0zM32 384L32 32l448 0 0 352-176 0-9.7 0-8.1 5.4L192 452.2l0-36.2 0-32-32 0L32 384z" />
    </Icon>
);

export default Message;