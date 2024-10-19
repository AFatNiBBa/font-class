
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=sharp-regular plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQ4IDcybDAtMjQtNDggMCAwIDI0IDAgMTYwTDQwIDIzMmwtMjQgMCAwIDQ4IDI0IDAgMTYwIDAgMCAxNjAgMCAyNCA0OCAwIDAtMjQgMC0xNjAgMTYwIDAgMjQgMCAwLTQ4LTI0IDAtMTYwIDAgMC0xNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 72l0-24-48 0 0 24 0 160L40 232l-24 0 0 48 24 0 160 0 0 160 0 24 48 0 0-24 0-160 160 0 24 0 0-48-24 0-160 0 0-160z" />
    </Icon>
);

export default Plus;