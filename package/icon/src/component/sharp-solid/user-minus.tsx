
import { Icon } from "../../index";

/**
 * A component that renders the `user-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-minus?s=sharp-solid user-minus}
 * @preview ![user-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDBBMTI4IDEyOCAwIDEgMSA5NiAxMjh6TTM4NCAzMDRsNjQgMjA4TDAgNTEyIDY0IDMwNGwzMjAgMHptODgtMTA0bDE0NCAwIDI0IDAgMCA0OC0yNCAwLTE0NCAwLTI0IDAgMC00OCAyNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM384 304l64 208L0 512 64 304l320 0zm88-104l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default UserMinus;