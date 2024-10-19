
import { Icon } from "../../index";

/**
 * A component that renders the `tablet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=sharp-light tablet}
 * @preview ![tablet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJsMCA0NDggMzg0IDAgMC00NDhMMzIgMzJ6TTAgMEwzMiAwIDQxNiAwbDMyIDAgMCAzMiAwIDQ0OCAwIDMyLTMyIDBMMzIgNTEyIDAgNTEybDAtMzJMMCAzMiAwIDB6TTE5MiA0MDBsNjQgMCAxNiAwIDAgMzItMTYgMC02NCAwLTE2IDAgMC0zMiAxNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32l0 448 384 0 0-448L32 32zM0 0L32 0 416 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM192 400l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Tablet;