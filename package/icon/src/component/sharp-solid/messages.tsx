
import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=sharp-solid messages}
 * @preview ![messages](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDQxNiAwbDAgMzIwLTIxMy4zIDBMOTYgMzg0bDAtNjRMMCAzMjAgMCAwek0yNTYgNDQ4bDAtOTYgMTkyIDAgMC0yMjQgMTkyIDAgMCAzMjAtOTYgMCAwIDY0TDQzNy4zIDQ0OCAyNTYgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L416 0l0 320-213.3 0L96 384l0-64L0 320 0 0zM256 448l0-96 192 0 0-224 192 0 0 320-96 0 0 64L437.3 448 256 448z" />
    </Icon>
);

export default Messages;