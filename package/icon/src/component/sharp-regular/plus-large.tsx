
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=sharp-regular plus-large}
 * @preview ![plus-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDg4IDIzMmwyNCAwIDAgNDgtMjQgMC0yMDggMCAwIDIwOCAwIDI0LTQ4IDAgMC0yNCAwLTIwOEwyNCAyODAgMCAyODBsMC00OCAyNCAwIDIwOCAwIDAtMjA4IDAtMjQgNDggMCAwIDI0IDAgMjA4IDIwOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z" />
    </Icon>
);

export default PlusLarge;