
import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=sharp-solid pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzIwTDAgMzIwbDAgNjQgMzIgMCAzMiAwIDAgNjQtMzIgMEwwIDQ0OGwwIDY0IDMyIDAgMzIgMCAzMiAwIDMyIDAgMTYwIDAgMzIgMCAzMiAwIDE2MCAwIDMyIDAgMzIgMCAzMiAwIDMyIDAgMC02NC0zMiAwLTMyIDAgMC02NCAzMiAwIDMyIDAgMC02NC0zMiAwLTMyIDAtMzIgMC0zMiAwLTE2MCAwLTMyIDAtMzIgMC0xNjAgMC0zMiAwLTMyIDAtMzIgMHptOTYgNjRsMTYwIDAgMCA2NC0xNjAgMCAwLTY0em0yMjQgMGwxNjAgMCAwIDY0LTE2MCAwIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 320L0 320l0 64 32 0 32 0 0 64-32 0L0 448l0 64 32 0 32 0 32 0 32 0 160 0 32 0 32 0 160 0 32 0 32 0 32 0 32 0 0-64-32 0-32 0 0-64 32 0 32 0 0-64-32 0-32 0-32 0-32 0-160 0-32 0-32 0-160 0-32 0-32 0-32 0zm96 64l160 0 0 64-160 0 0-64zm224 0l160 0 0 64-160 0 0-64z" />
    </Icon>
);

export default Pallet;