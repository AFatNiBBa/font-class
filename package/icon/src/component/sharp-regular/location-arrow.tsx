
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=sharp-regular location-arrow}
 * @preview ![location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDIwOGwwIDQ4IDAgODUuOCA3OC43LTIxMi41TDEzOC4yIDIwOGw4NS44IDAgNDggMHpNMCAyMDhMMzcyLjcgNzAgNDMyIDQ4bC0yMiA1OS4zTDI3MiA0ODBsLTQ4IDAgMC00OCAwLTEyOCAwLTQ4LTQ4IDBMNDggMjU2IDAgMjU2bDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M272 208l0 48 0 85.8 78.7-212.5L138.2 208l85.8 0 48 0zM0 208L372.7 70 432 48l-22 59.3L272 480l-48 0 0-48 0-128 0-48-48 0L48 256 0 256l0-48z" />
    </Icon>
);

export default LocationArrow;