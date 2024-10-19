
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=sharp-thin plus-large}
 * @preview ![plus-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjY0IDhsMC04TDI0OCAwbDAgOCAwIDI0MEw4IDI0OGwtOCAwIDAgMTYgOCAwIDI0MCAwIDAgMjQwIDAgOCAxNiAwIDAtOCAwLTI0MCAyNDAgMCA4IDAgMC0xNi04IDAtMjQwIDBMMjY0IDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0-8L248 0l0 8 0 240L8 248l-8 0 0 16 8 0 240 0 0 240 0 8 16 0 0-8 0-240 240 0 8 0 0-16-8 0-240 0L264 8z" />
    </Icon>
);

export default PlusLarge;