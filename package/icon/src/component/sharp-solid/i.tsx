
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-solid i}
 * @preview ![i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJMMCAzMiAwIDk2bDMyIDAgOTYgMCAwIDMyMC05NiAwTDAgNDE2bDAgNjQgMzIgMCA5NiAwIDY0IDAgOTYgMCAzMiAwIDAtNjQtMzIgMC05NiAwIDAtMzIwIDk2IDAgMzIgMCAwLTY0LTMyIDAtOTYgMC0zMiAwLTMyIDBMMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32L0 32 0 96l32 0 96 0 0 320-96 0L0 416l0 64 32 0 96 0 64 0 96 0 32 0 0-64-32 0-96 0 0-320 96 0 32 0 0-64-32 0-96 0-32 0-32 0L32 32z" />
    </Icon>
);

export default I;