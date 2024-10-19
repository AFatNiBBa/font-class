
import { Icon } from "../../index";

/**
 * A component that renders the `location-dot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot?s=sharp-solid location-dot}
 * @preview ![location-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDUxMnMxOTItMjA4IDE5Mi0zMjBDMzg0IDg2IDI5OCAwIDE5MiAwUzAgODYgMCAxOTJDMCAzMDQgMTkyIDUxMiAxOTIgNTEyem0wLTM4NGE2NCA2NCAwIDEgMSAwIDEyOCA2NCA2NCAwIDEgMSAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zm0-384a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default LocationDot;