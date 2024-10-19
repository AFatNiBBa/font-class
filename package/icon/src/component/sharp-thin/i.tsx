
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-thin i}
 * @preview ![i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOCAzMkwwIDMyIDAgNDhsOCAwIDE0NCAwIDAgNDE2TDggNDY0bC04IDAgMCAxNiA4IDAgMzA0IDAgOCAwIDAtMTYtOCAwLTE0NCAwIDAtNDE2IDE0NCAwIDggMCAwLTE2LTggMEwxNjAgMzIgOCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M8 32L0 32 0 48l8 0 144 0 0 416L8 464l-8 0 0 16 8 0 304 0 8 0 0-16-8 0-144 0 0-416 144 0 8 0 0-16-8 0L160 32 8 32z" />
    </Icon>
);

export default I;