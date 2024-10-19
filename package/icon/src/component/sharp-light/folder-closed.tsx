
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=sharp-light folder-closed}
 * @preview ![folder-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJsMTkyIDAgNDggNjQgMjA4IDAgMzIgMCAwIDMyIDAgMzIwIDAgMzItMzIgMEwzMiA0ODAgMCA0ODBsMC0zMkwwIDY0IDAgMzJsMzIgMHptMjQwIDk2bC0xNiAwLTkuNi0xMi44TDIwOCA2NCAzMiA2NGwwIDEyOCA0NDggMCAwLTY0LTIwOCAwek0zMiAyMjRsMCAyMjQgNDQ4IDAgMC0yMjRMMzIgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 128 448 0 0-64-208 0zM32 224l0 224 448 0 0-224L32 224z" />
    </Icon>
);

export default FolderClosed;