
import { Icon } from "../../index";

/**
 * A component that renders the `folder-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-plus?s=sharp-light folder-plus}
 * @preview ![folder-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJsMTkyIDAgNDggNjQgMjA4IDAgMzIgMCAwIDMyIDAgMzIwIDAgMzItMzIgMEwzMiA0ODAgMCA0ODBsMC0zMkwwIDY0IDAgMzJsMzIgMHptMjQwIDk2bC0xNiAwLTkuNi0xMi44TDIwOCA2NCAzMiA2NGwwIDM4NCA0NDggMCAwLTMyMC0yMDggMHptMCA2NGwwIDE2IDAgNjQgNjQgMCAxNiAwIDAgMzItMTYgMC02NCAwIDAgNjQgMCAxNi0zMiAwIDAtMTYgMC02NC02NCAwLTE2IDAgMC0zMiAxNiAwIDY0IDAgMC02NCAwLTE2IDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zm0 64l0 16 0 64 64 0 16 0 0 32-16 0-64 0 0 64 0 16-32 0 0-16 0-64-64 0-16 0 0-32 16 0 64 0 0-64 0-16 32 0z" />
    </Icon>
);

export default FolderPlus;