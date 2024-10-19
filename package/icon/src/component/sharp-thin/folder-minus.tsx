
import { Icon } from "../../index";

/**
 * A component that renders the `folder-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-minus?s=sharp-thin folder-minus}
 * @preview ![folder-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDMybDQ4IDY0IDIyNCAwIDE2IDAgMCAxNiAwIDM1MiAwIDE2LTE2IDBMMTYgNDgwIDAgNDgwbDAtMTZMMCA0OCAwIDMybDE2IDAgMjA4IDB6bTQ4IDgwbC04IDAtNC44LTYuNEwyMTYgNDggMTYgNDhsMCA0MTYgNDgwIDAgMC0zNTItMjI0IDB6TTE1MiAzMDRsMC0xNiAyMDggMCAwIDE2LTIwOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zM152 304l0-16 208 0 0 16-208 0z" />
    </Icon>
);

export default FolderMinus;