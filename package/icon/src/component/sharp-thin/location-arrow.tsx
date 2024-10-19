
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=sharp-thin location-arrow}
 * @preview ![location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQwIDI0MGwwIDE2IDAgMjA4IDIwLjkgMCAxNDQtMzg4LjlMMTYgMjE5LjEgMTYgMjQwbDIwOCAwIDE2IDB6TTAgMjA4TDQxMi4yIDU1LjMgNDMyIDQ4bC03LjMgMTkuOEwyNzIgNDgwbC0zMiAwLTE2IDAgMC0xNiAwLTE5MiAwLTE2LTE2IDBMMTYgMjU2IDAgMjU2bDAtMTYgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 240l0 16 0 208 20.9 0 144-388.9L16 219.1 16 240l208 0 16 0zM0 208L412.2 55.3 432 48l-7.3 19.8L272 480l-32 0-16 0 0-16 0-192 0-16-16 0L16 256 0 256l0-16 0-32z" />
    </Icon>
);

export default LocationArrow;