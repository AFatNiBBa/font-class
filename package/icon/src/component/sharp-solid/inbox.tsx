
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=sharp-solid inbox}
 * @preview ![inbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMzJMNzEgMzIgNjUgNTYuMiAxIDMxMi4ybC0xIDMuOEwwIDMyMCAwIDQ0OGwwIDMyIDMyIDAgNDQ4IDAgMzIgMCAwLTMyIDAtMTI4IDAtMy45LTEtMy44LTY0LTI1Nkw0NDEgMzJsLTI1IDBMOTYgMzJ6TTczIDI4OEwxMjEgOTZsMjcwIDAgNDggMTkyLTcxIDAtMzIgNjQtMTYwIDAtMzItNjQtNzEgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32L71 32 65 56.2 1 312.2l-1 3.8L0 320 0 448l0 32 32 0 448 0 32 0 0-32 0-128 0-3.9-1-3.8-64-256L441 32l-25 0L96 32zM73 288L121 96l270 0 48 192-71 0-32 64-160 0-32-64-71 0z" />
    </Icon>
);

export default Inbox;