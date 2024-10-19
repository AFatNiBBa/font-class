
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=solid colon}
 * @preview ![colon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMTkyQTY0IDY0IDAgMSAwIDk2IDY0YTY0IDY0IDAgMSAwIDAgMTI4em0wIDI1NmE2NCA2NCAwIDEgMCAwLTEyOCA2NCA2NCAwIDEgMCAwIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 192A64 64 0 1 0 96 64a64 64 0 1 0 0 128zm0 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Colon;