
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-solid tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMTkyQzMyIDg2IDExOCAwIDIyNCAwUzQxNiA4NiA0MTYgMTkybDAgMjI0TDMyIDQxNmwwLTIyNHpNMCA0NDhsMzIgMCAzODQgMCAzMiAwIDAgNjQtMzIgMEwzMiA1MTIgMCA1MTJsMC02NHpNMjQ4IDEyMGwwLTI0LTQ4IDAgMCAyNCAwIDQwLTQ4IDAtMjQgMCAwIDQ4IDI0IDAgNDggMCAwIDEyMCAwIDI0IDQ4IDAgMC0yNCAwLTEyMCA0OCAwIDI0IDAgMC00OC0yNCAwLTQ4IDAgMC00MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 192C32 86 118 0 224 0S416 86 416 192l0 224L32 416l0-224zM0 448l32 0 384 0 32 0 0 64-32 0L32 512 0 512l0-64zM248 120l0-24-48 0 0 24 0 40-48 0-24 0 0 48 24 0 48 0 0 120 0 24 48 0 0-24 0-120 48 0 24 0 0-48-24 0-48 0 0-40z" />
    </Icon>
);

export default Tombstone;