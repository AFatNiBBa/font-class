
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=sharp-thin message}
 * @preview ![message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDQxNmwxNiAwIDAgMTYgMCA2MC44IDAgMTkuMiAxNi0xMC43TDMwNCA0MTZsMTkyIDAgMTYgMCAwLTE2IDAtMzg0IDAtMTZMNDk2IDAgMTYgMCAwIDAgMCAxNiAwIDQwMGwwIDE2IDE2IDAgMTI4IDB6TTE2IDQwMEwxNiAxNmw0ODAgMCAwIDM4NC0xOTIgMC00LjggMC00IDIuN0wxNzYgNDgyLjFsMC02Ni4xIDAtMTYtMTYgMEwxNiA0MDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 416l16 0 0 16 0 60.8 0 19.2 16-10.7L304 416l192 0 16 0 0-16 0-384 0-16L496 0 16 0 0 0 0 16 0 400l0 16 16 0 128 0zM16 400L16 16l480 0 0 384-192 0-4.8 0-4 2.7L176 482.1l0-66.1 0-16-16 0L16 400z" />
    </Icon>
);

export default Message;