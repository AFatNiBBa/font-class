
import { Icon } from "../../index";

/**
 * A component that renders the `user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user?s=sharp-solid user}
 * @preview ![user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDI1NkExMjggMTI4IDAgMSAwIDIyNCAwYTEyOCAxMjggMCAxIDAgMCAyNTZ6TTQ0OCA1MTJMMzg0IDMwNCA2NCAzMDQgMCA1MTJsNDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const User: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM448 512L384 304 64 304 0 512l448 0z" />
    </Icon>
);

export default User;