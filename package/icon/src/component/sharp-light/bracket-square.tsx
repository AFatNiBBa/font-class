
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=sharp-light bracket-square}
 * @preview ![bracket-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmwxNiAwIDEyOCAwIDE2IDAgMCAzMi0xNiAwTDMyIDY0bDAgMzg0IDExMiAwIDE2IDAgMCAzMi0xNiAwTDE2IDQ4MCAwIDQ4MGwwLTE2TDAgNDggMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 32l16 0 128 0 16 0 0 32-16 0L32 64l0 384 112 0 16 0 0 32-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default BracketSquare;