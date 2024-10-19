
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin?s=solid location-pin}
 * @preview ![location-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDE5MmMwIDg3LjQtMTE3IDI0My0xNjguMyAzMDcuMmMtMTIuMyAxNS4zLTM1LjEgMTUuMy00Ny40IDBDMTE3IDQzNSAwIDI3OS40IDAgMTkyQzAgODYgODYgMCAxOTIgMFMzODQgODYgMzg0IDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LocationPin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
    </Icon>
);

export default LocationPin;