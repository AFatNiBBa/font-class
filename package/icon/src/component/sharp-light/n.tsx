
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=sharp-light n}
 * @preview ![n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0OEwwIDMybDIzLjQgMCA0LjggNS43TDM1MiA0MjAuMyAzNTIgNDhsMC0xNiAzMiAwIDAgMTYgMCA0MTYgMCAxNi0yMy40IDAtNC44LTUuN0wzMiA5MS43IDMyIDQ2NGwwIDE2TDAgNDgwbDAtMTZMMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 48L0 32l23.4 0 4.8 5.7L352 420.3 352 48l0-16 32 0 0 16 0 416 0 16-23.4 0-4.8-5.7L32 91.7 32 464l0 16L0 480l0-16L0 48z" />
    </Icon>
);

export default N;