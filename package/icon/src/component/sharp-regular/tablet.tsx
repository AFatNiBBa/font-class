
import { Icon } from "../../index";

/**
 * A component that renders the `tablet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=sharp-regular tablet}
 * @preview ![tablet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggNDhsMCA0MTYgMzUyIDAgMC00MTZMNDggNDh6TTAgMEw0OCAwIDQwMCAwbDQ4IDAgMCA0OCAwIDQxNiAwIDQ4LTQ4IDBMNDggNTEyIDAgNTEybDAtNDhMMCA0OCAwIDB6TTE5MiA0MDBsNjQgMCAxNiAwIDAgMzItMTYgMC02NCAwLTE2IDAgMC0zMiAxNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 48l0 416 352 0 0-416L48 48zM0 0L48 0 400 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM192 400l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Tablet;