
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=sharp-duotone-solid laptop-file}
 * @preview ![laptop-file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDQ4IDQ4IDQ4IDI3MiAwIDAtOTYtMTkyIDAgMC0yMjQgMzIwIDAgMCAzMiA2NCAwIDAtNjQgMC0zMkw0ODAgMCA5NiAwIDY0IDBsMCAzMiAwIDI1NkwwIDI4OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAxMjhsMTYwIDAgMCAxMjggMTI4IDAgMCAyNTYtMjg4IDAgMC0zODR6bTE5MiAwbDk2IDk2LTk2IDAgMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 48 48 48 272 0 0-96-192 0 0-224 320 0 0 32 64 0 0-64 0-32L480 0 96 0 64 0l0 32 0 256L0 288z" />
            <path d="M352 128l160 0 0 128 128 0 0 256-288 0 0-384zm192 0l96 96-96 0 0-96z" />
    </Icon>
);

export default LaptopFile;