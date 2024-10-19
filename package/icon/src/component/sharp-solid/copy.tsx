
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=sharp-solid copy}
 * @preview ![copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUyIDBsOTYgOTYgMCAyODgtMjg4IDBMMTYwIDAgMzUyIDB6TTY0IDEyOGw2NCAwIDAgNjQtNjQgMCAwIDI1NiAxOTIgMCAwLTMyIDY0IDAgMCAzMiAwIDY0LTY0IDBMNjQgNTEyIDAgNTEybDAtNjRMMCAxOTJsMC02NCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 0l96 96 0 288-288 0L160 0 352 0zM64 128l64 0 0 64-64 0 0 256 192 0 0-32 64 0 0 32 0 64-64 0L64 512 0 512l0-64L0 192l0-64 64 0z" />
    </Icon>
);

export default Copy;