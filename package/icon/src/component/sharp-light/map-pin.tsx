
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=sharp-light map-pin}
 * @preview ![map-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDI1NmExMTIgMTEyIDAgMSAwIDAtMjI0IDExMiAxMTIgMCAxIDAgMCAyMjR6TTMwNCAxNDRjMCA3NC4xLTU2IDEzNS4yLTEyOCAxNDMuMUwxNzYgNDk2bDAgMTYtMzIgMCAwLTE2IDAtMjA4LjljLTcyLTgtMTI4LTY5LTEyOC0xNDMuMUMxNiA2NC41IDgwLjUgMCAxNjAgMHMxNDQgNjQuNSAxNDQgMTQ0em0tMTkyIDBsLTMyIDBjMC00NC4yIDM1LjgtODAgODAtODBsMCAzMmMtMjYuNSAwLTQ4IDIxLjUtNDggNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM304 144c0 74.1-56 135.2-128 143.1L176 496l0 16-32 0 0-16 0-208.9c-72-8-128-69-128-143.1C16 64.5 80.5 0 160 0s144 64.5 144 144zm-192 0l-32 0c0-44.2 35.8-80 80-80l0 32c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default MapPin;