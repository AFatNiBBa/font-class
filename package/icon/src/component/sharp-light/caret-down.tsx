
import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-light caret-down}
 * @preview ![caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDIyNEwzMiAyMjRsMCAxLjdMMTYwIDM0MSAyODggMjI1LjhsMC0xLjd6bTAtMzJsMzIgMCAwIDMyIDAgMTZMMTYwIDM4NCAwIDI0MGwwLTE2IDAtMzIgMzIgMCAyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 224L32 224l0 1.7L160 341 288 225.8l0-1.7zm0-32l32 0 0 32 0 16L160 384 0 240l0-16 0-32 32 0 256 0z" />
    </Icon>
);

export default CaretDown;