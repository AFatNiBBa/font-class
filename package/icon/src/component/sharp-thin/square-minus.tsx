
import { Icon } from "../../index";

/**
 * A component that renders the `square-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-minus?s=sharp-thin square-minus}
 * @preview ![square-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgNDhsMCA0MTYgNDE2IDAgMC00MTZMMTYgNDh6TTAgMzJsMTYgMCA0MTYgMCAxNiAwIDAgMTYgMCA0MTYgMCAxNi0xNiAwTDE2IDQ4MCAwIDQ4MGwwLTE2TDAgNDggMCAzMnpNMTIwIDI2NGwwLTE2IDIwOCAwIDAgMTYtMjA4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM120 264l0-16 208 0 0 16-208 0z" />
    </Icon>
);

export default SquareMinus;