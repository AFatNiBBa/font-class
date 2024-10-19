
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-security` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-security?s=sharp-duotone-solid camera-security}
 * @preview ![camera-security](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjA4YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMEw0NDggMGwwIDQxNi0xNDQgMCA4MCA1NiAwIDQwTDY0IDUxMmwwLTQwIDgwLTU2TDAgNDE2IDAgMHpNMjI0IDMzNmExMjggMTI4IDAgMSAwIDAtMjU2IDEyOCAxMjggMCAxIDAgMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CameraSecurity: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 208a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M0 0L448 0l0 416-144 0 80 56 0 40L64 512l0-40 80-56L0 416 0 0zM224 336a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default CameraSecurity;