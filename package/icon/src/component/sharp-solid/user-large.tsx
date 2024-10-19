
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=sharp-solid user-large}
 * @preview ![user-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDI4OEExNDQgMTQ0IDAgMSAwIDI1NiAwYTE0NCAxNDQgMCAxIDAgMCAyODh6TTUxMiA1MTJMNDMyIDMyMCA4MCAzMjAgMCA1MTJsNTEyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zM512 512L432 320 80 320 0 512l512 0z" />
    </Icon>
);

export default UserLarge;