
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=sharp-solid door-closed}
 * @preview ![door-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMEw0ODAgMGwwIDQ0OCA2NCAwIDMyIDAgMCA2NC0zMiAwLTY0IDBMOTYgNTEybC02NCAwTDAgNTEybDAtNjQgMzIgMCA2NCAwTDk2IDB6TTM4NCAyODhhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 0L480 0l0 448 64 0 32 0 0 64-32 0-64 0L96 512l-64 0L0 512l0-64 32 0 64 0L96 0zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DoorClosed;