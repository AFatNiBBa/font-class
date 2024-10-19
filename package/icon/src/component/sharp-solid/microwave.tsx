
import { Icon } from "../../index";

/**
 * A component that renders the `microwave` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=sharp-solid microwave}
 * @preview ![microwave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw1NzYgMCAwIDQxNi02NCAwIDAgMzItNjQgMCAwLTMyLTMyMCAwIDAgMzItNjQgMCAwLTMyTDAgNDQ4IDAgMzJ6bTk2IDk2bDAgMjI0IDMyMCAwIDAtMjI0TDk2IDEyOHptNDE2LTE2bC0zMiAwIDAgMjU2IDMyIDAgMC0yNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l576 0 0 416-64 0 0 32-64 0 0-32-320 0 0 32-64 0 0-32L0 448 0 32zm96 96l0 224 320 0 0-224L96 128zm416-16l-32 0 0 256 32 0 0-256z" />
    </Icon>
);

export default Microwave;