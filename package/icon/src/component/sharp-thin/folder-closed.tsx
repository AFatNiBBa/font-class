
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=sharp-thin folder-closed}
 * @preview ![folder-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDMybDQ4IDY0IDIyNCAwIDE2IDAgMCAxNiAwIDM1MiAwIDE2LTE2IDBMMTYgNDgwIDAgNDgwbDAtMTZMMCA0OCAwIDMybDE2IDAgMjA4IDB6bTQ4IDgwbC04IDAtNC44LTYuNEwyMTYgNDggMTYgNDhsMCAxMjggNDgwIDAgMC02NC0yMjQgMHpNMTYgMTkybDAgMjcyIDQ4MCAwIDAtMjcyTDE2IDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 128 480 0 0-64-224 0zM16 192l0 272 480 0 0-272L16 192z" />
    </Icon>
);

export default FolderClosed;