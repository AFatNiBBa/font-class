
import { Icon } from "../../index";

/**
 * A component that renders the `tablet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=sharp-thin tablet}
 * @preview ![tablet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMTZsMCA0ODAgNDE2IDAgMC00ODBMMTYgMTZ6TTAgMEwxNiAwIDQzMiAwbDE2IDAgMCAxNiAwIDQ4MCAwIDE2LTE2IDBMMTYgNTEyIDAgNTEybDAtMTZMMCAxNiAwIDB6TTE3NiA0MzJsOTYgMCA4IDAgMCAxNi04IDAtOTYgMC04IDAgMC0xNiA4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 16l0 480 416 0 0-480L16 16zM0 0L16 0 432 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM176 432l96 0 8 0 0 16-8 0-96 0-8 0 0-16 8 0z" />
    </Icon>
);

export default Tablet;