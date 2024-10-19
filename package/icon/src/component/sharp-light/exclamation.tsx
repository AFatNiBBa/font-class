
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-light exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgNDhsMC0xNkw0OCAzMmwwIDE2IDAgMzA0IDAgMTYgMzIgMCAwLTE2TDgwIDQ4em04IDM3NmwtNDggMCAwIDQ4IDQ4IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M80 48l0-16L48 32l0 16 0 304 0 16 32 0 0-16L80 48zm8 376l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default Exclamation;