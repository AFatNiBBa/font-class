
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=sharp-duotone-solid camera-web}
 * @preview ![camera-web](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyMjRhMTI4IDEyOCAwIDEgMCAyNTYgMEExMjggMTI4IDAgMSAwIDk2IDIyNHptNDggMGMwLTQ0LjIgMzUuOC04MCA4MC04MGwwIDMyYy0yNi41IDAtNDggMjEuNS00OCA0OGwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAyMjRjMCA4MS00MyAxNTItMTA3LjUgMTkxLjRMNDE2IDQ3MmwwIDQwTDMyIDUxMmwwLTQwIDc1LjUtNTYuNkM0MyAzNzYgMCAzMDUgMCAyMjRDMCAxMDAuMyAxMDAuMyAwIDIyNCAwUzQ0OCAxMDAuMyA0NDggMjI0ek0yMjQgMzg0YTE2MCAxNjAgMCAxIDAgMC0zMjAgMTYwIDE2MCAwIDEgMCAwIDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 224a128 128 0 1 0 256 0A128 128 0 1 0 96 224zm48 0c0-44.2 35.8-80 80-80l0 32c-26.5 0-48 21.5-48 48l-32 0z" />
            <path d="M448 224c0 81-43 152-107.5 191.4L416 472l0 40L32 512l0-40 75.5-56.6C43 376 0 305 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM224 384a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CameraWeb;