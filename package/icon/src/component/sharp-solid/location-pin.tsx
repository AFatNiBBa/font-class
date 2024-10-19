
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin?s=sharp-solid location-pin}
 * @preview ![location-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDE5MmMwIDExMi0xOTIgMzIwLTE5MiAzMjBTMCAzMDQgMCAxOTJDMCA4NiA4NiAwIDE5MiAwUzM4NCA4NiAzODQgMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LocationPin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 192c0 112-192 320-192 320S0 304 0 192C0 86 86 0 192 0S384 86 384 192z" />
    </Icon>
);

export default LocationPin;