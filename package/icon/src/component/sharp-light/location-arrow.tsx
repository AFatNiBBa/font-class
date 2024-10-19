
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=sharp-light location-arrow}
 * @preview ![location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDIyNGwwIDMyIDAgMTc1LjFMMzc3LjggMTAyLjIgNDguOSAyMjQgMjI0IDIyNGwzMiAwek0wIDIwOEwzOTIuNSA2Mi42IDQzMiA0OCA0MTcuNCA4Ny41IDI3MiA0ODBsLTE2IDAtMzIgMCAwLTMyIDAtMTYwIDAtMzItMzIgMEwzMiAyNTYgMCAyNTZsMC0zMiAwLTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 224l0 32 0 175.1L377.8 102.2 48.9 224 224 224l32 0zM0 208L392.5 62.6 432 48 417.4 87.5 272 480l-16 0-32 0 0-32 0-160 0-32-32 0L32 256 0 256l0-32 0-16z" />
    </Icon>
);

export default LocationArrow;