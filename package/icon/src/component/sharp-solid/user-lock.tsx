
import { Icon } from "../../index";

/**
 * A component that renders the `user-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-lock?s=sharp-solid user-lock}
 * @preview ![user-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBhMTI4IDEyOCAwIDEgMSAwIDI1NkExMjggMTI4IDAgMSAxIDIyNCAwek0zODQgMzA0bDAgMjA4TDAgNTEyIDY0IDMwNGwzMjAgMHptMTQ0LTY0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDQ4IDY0IDAgMC00OGMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTgwIDMyYzAtNDQuMiAzNS44LTgwIDgwLTgwczgwIDM1LjggODAgODBsMCA0OCAzMiAwIDAgMTkyLTIyNCAwIDAtMTkyIDMyIDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM384 304l0 208L0 512 64 304l320 0zm144-64c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default UserLock;