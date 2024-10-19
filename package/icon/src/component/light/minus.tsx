
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=light minus}
 * @preview ![minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDMyIDI1NmMwIDguOC03LjIgMTYtMTYgMTZMMzIgMjcyYy04LjggMC0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2bDM4NCAwYzguOCAwIDE2IDcuMiAxNiAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Minus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 256c0 8.8-7.2 16-16 16L32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0c8.8 0 16 7.2 16 16z" />
    </Icon>
);

export default Minus;