
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=light map-pin}
 * @preview ![map-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDI1NmExMTIgMTEyIDAgMSAwIDAtMjI0IDExMiAxMTIgMCAxIDAgMCAyMjR6TTMwNCAxNDRjMCA3NC4xLTU2IDEzNS4yLTEyOCAxNDMuMUwxNzYgNDk2YzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtMjA4LjljLTcyLTgtMTI4LTY5LTEyOC0xNDMuMUMxNiA2NC41IDgwLjUgMCAxNjAgMHMxNDQgNjQuNSAxNDQgMTQ0em0tMTkyIDBjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZjMC00NC4yIDM1LjgtODAgODAtODBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZjLTI2LjUgMC00OCAyMS41LTQ4IDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM304 144c0 74.1-56 135.2-128 143.1L176 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208.9c-72-8-128-69-128-143.1C16 64.5 80.5 0 160 0s144 64.5 144 144zm-192 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default MapPin;