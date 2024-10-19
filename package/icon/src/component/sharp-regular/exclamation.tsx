
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-regular exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODggNTZsMC0yNEw0MCAzMmwwIDI0IDAgMjg4IDAgMjQgNDggMCAwLTI0TDg4IDU2em04IDM2MGwtNjQgMCAwIDY0IDY0IDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M88 56l0-24L40 32l0 24 0 288 0 24 48 0 0-24L88 56zm8 360l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Exclamation;