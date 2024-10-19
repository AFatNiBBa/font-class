
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=sharp-thin table}
 * @preview ![table](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgNDhsNDgwIDAgMCAxMTJMMTYgMTYwIDE2IDQ4ek0yNDggMTc2bDAgMTI4TDE2IDMwNGwwLTEyOCAyMzIgMHptMTYgMGwyMzIgMCAwIDEyOC0yMzIgMCAwLTEyOHpNMjQ4IDMyMGwwIDE0NEwxNiA0NjRsMC0xNDQgMjMyIDB6bTE2IDE0NGwwLTE0NCAyMzIgMCAwIDE0NC0yMzIgMHpNMCA0NjRsMCAxNiAxNiAwIDQ4MCAwIDE2IDAgMC0xNiAwLTQxNiAwLTE2LTE2IDBMMTYgMzIgMCAzMiAwIDQ4IDAgNDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l480 0 0 112L16 160 16 48zM248 176l0 128L16 304l0-128 232 0zm16 0l232 0 0 128-232 0 0-128zM248 320l0 144L16 464l0-144 232 0zm16 144l0-144 232 0 0 144-232 0zM0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464z" />
    </Icon>
);

export default Table;