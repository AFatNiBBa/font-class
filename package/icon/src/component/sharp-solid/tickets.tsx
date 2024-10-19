
import { Icon } from "../../index";

/**
 * A component that renders the `tickets` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets?s=sharp-solid tickets}
 * @preview ![tickets](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMzJsMCAxMjhjMjYuNSAwIDQ4IDIxLjUgNDggNDhzLTIxLjUgNDgtNDggNDhsMCAxMjggNTQ0IDAgMC0xMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDhsMC0xMjhMOTYgMzJ6bTQxNiA5NmwtMjg4IDAgMCAxNjAgMjg4IDAgMC0xNjB6TTIyNCA5NmwyODggMCAzMiAwIDAgMzIgMCAxNjAgMCAzMi0zMiAwLTI4OCAwLTMyIDAgMC0zMiAwLTE2MCAwLTMyIDMyIDB6TTQ4IDEyMGwwLTI0TDAgOTZsMCAyNEwwIDQ1NmwwIDI0IDI0IDAgNDk2IDAgMjQgMCAwLTQ4LTI0IDBMNDggNDMybDAtMzEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tickets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32l0 128c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 128 544 0 0-128c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-128L96 32zm416 96l-288 0 0 160 288 0 0-160zM224 96l288 0 32 0 0 32 0 160 0 32-32 0-288 0-32 0 0-32 0-160 0-32 32 0zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default Tickets;