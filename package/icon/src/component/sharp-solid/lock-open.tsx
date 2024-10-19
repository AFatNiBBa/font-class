
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=sharp-solid lock-open}
 * @preview ![lock-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUyIDE0NGMwLTQ0LjIgMzUuOC04MCA4MC04MHM4MCAzNS44IDgwIDgwbDAgNDggMCAzMiA2NCAwIDAtMzIgMC00OEM1NzYgNjQuNSA1MTEuNSAwIDQzMiAwUzI4OCA2NC41IDI4OCAxNDRsMCA0OEwwIDE5MiAwIDUxMmw0NDggMCAwLTMyMC05NiAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 0 32 64 0 0-32 0-48C576 64.5 511.5 0 432 0S288 64.5 288 144l0 48L0 192 0 512l448 0 0-320-96 0 0-48z" />
    </Icon>
);

export default LockOpen;