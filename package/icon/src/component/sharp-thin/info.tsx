
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-thin info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgNjRMNjQgNjRsMCAzMiAzMiAwIDAtMzJ6TTY0IDQ4bDMyIDAgMTYgMCAwIDE2IDAgMzIgMCAxNi0xNiAwLTMyIDAtMTYgMCAwLTE2IDAtMzIgMC0xNiAxNiAwek0zMiAxNzZsOCAwIDU2IDAgOCAwIDAgOCAwIDI4MCA4MCAwIDggMCAwIDE2LTggMEw4IDQ4MGwtOCAwIDAtMTYgOCAwIDgwIDAgMC0yNzItNDggMC04IDAgMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 64L64 64l0 32 32 0 0-32zM64 48l32 0 16 0 0 16 0 32 0 16-16 0-32 0-16 0 0-16 0-32 0-16 16 0zM32 176l8 0 56 0 8 0 0 8 0 280 80 0 8 0 0 16-8 0L8 480l-8 0 0-16 8 0 80 0 0-272-48 0-8 0 0-16z" />
    </Icon>
);

export default Info;