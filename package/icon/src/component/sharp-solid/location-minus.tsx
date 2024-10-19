
import { Icon } from "../../index";

/**
 * A component that renders the `location-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-minus?s=sharp-solid location-minus}
 * @preview ![location-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDUxMnMxOTItMjA4IDE5Mi0zMjBDMzg0IDg2IDI5OCAwIDE5MiAwUzAgODYgMCAxOTJDMCAzMDQgMTkyIDUxMiAxOTIgNTEyek0xMjAgMTY4bDE0NCAwIDI0IDAgMCA0OC0yNCAwLTE0NCAwLTI0IDAgMC00OCAyNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LocationMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zM120 168l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default LocationMinus;