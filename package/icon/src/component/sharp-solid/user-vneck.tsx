
import { Icon } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=sharp-solid user-vneck}
 * @preview ![user-vneck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBhMTI4IDEyOCAwIDEgMCAwIDI1NkExMjggMTI4IDAgMSAwIDIyNCAwem0wIDQzMkwxMzguNyAzMDQgNjQgMzA0IDAgNTEybDQ0OCAwTDM4NCAzMDRsLTc0LjcgMEwyMjQgNDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0a128 128 0 1 0 0 256A128 128 0 1 0 224 0zm0 432L138.7 304 64 304 0 512l448 0L384 304l-74.7 0L224 432z" />
    </Icon>
);

export default UserVneck;