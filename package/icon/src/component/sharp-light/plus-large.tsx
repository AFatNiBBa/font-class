
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=sharp-light plus-large}
 * @preview ![plus-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDE2bDAtMTZMMjQwIDBsMCAxNiAwIDIyNEwxNiAyNDAgMCAyNDBsMCAzMiAxNiAwIDIyNCAwIDAgMjI0IDAgMTYgMzIgMCAwLTE2IDAtMjI0IDIyNCAwIDE2IDAgMC0zMi0xNiAwLTIyNCAwIDAtMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0-16L240 0l0 16 0 224L16 240 0 240l0 32 16 0 224 0 0 224 0 16 32 0 0-16 0-224 224 0 16 0 0-32-16 0-224 0 0-224z" />
    </Icon>
);

export default PlusLarge;