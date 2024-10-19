
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-regular i}
 * @preview ![i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQgMzJMMCAzMiAwIDgwbDI0IDAgMTEyIDAgMCAzNTJMMjQgNDMyIDAgNDMybDAgNDggMjQgMCAyNzIgMCAyNCAwIDAtNDgtMjQgMC0xMTIgMCAwLTM1MiAxMTIgMCAyNCAwIDAtNDgtMjQgMEwxNjAgMzIgMjQgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 32L0 32 0 80l24 0 112 0 0 352L24 432 0 432l0 48 24 0 272 0 24 0 0-48-24 0-112 0 0-352 112 0 24 0 0-48-24 0L160 32 24 32z" />
    </Icon>
);

export default I;