
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-light i}
 * @preview ![i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMzJMMCAzMiAwIDY0bDE2IDAgMTI4IDAgMCAzODRMMTYgNDQ4IDAgNDQ4bDAgMzIgMTYgMCAyODggMCAxNiAwIDAtMzItMTYgMC0xMjggMCAwLTM4NCAxMjggMCAxNiAwIDAtMzItMTYgMEwxNjAgMzIgMTYgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 32L0 32 0 64l16 0 128 0 0 384L16 448 0 448l0 32 16 0 288 0 16 0 0-32-16 0-128 0 0-384 128 0 16 0 0-32-16 0L160 32 16 32z" />
    </Icon>
);

export default I;