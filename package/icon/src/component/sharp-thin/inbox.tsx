
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=sharp-thin inbox}
 * @preview ![inbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgNDY0bDQ4MCAwIDAtMTQyLS41LTItMTA2LjYgMC0yOS44IDU5LjYtMi4yIDQuNC00LjkgMC0xOTIgMC00LjkgMC0yLjItNC40TDEyMy4xIDMyMCAxNi41IDMyMGwtLjUgMiAwIDE0MnpNNDkxLjUgMzA0bC02NC0yNTYtMzQzIDAtNjQgMjU2TDEyOCAzMDRsNC45IDAgMi4yIDQuNEwxNjQuOSAzNjhsMTgyLjEgMCAyOS44LTU5LjYgMi4yLTQuNCA0LjkgMCAxMDcuNSAwek0wIDQ2NEwwIDMyMCA3MiAzMmwzNjggMCA3MiAyODggMCAxNDQgMCAxNi0xNiAwTDE2IDQ4MCAwIDQ4MGwwLTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 464l480 0 0-142-.5-2-106.6 0-29.8 59.6-2.2 4.4-4.9 0-192 0-4.9 0-2.2-4.4L123.1 320 16.5 320l-.5 2 0 142zM491.5 304l-64-256-343 0-64 256L128 304l4.9 0 2.2 4.4L164.9 368l182.1 0 29.8-59.6 2.2-4.4 4.9 0 107.5 0zM0 464L0 320 72 32l368 0 72 288 0 144 0 16-16 0L16 480 0 480l0-16z" />
    </Icon>
);

export default Inbox;