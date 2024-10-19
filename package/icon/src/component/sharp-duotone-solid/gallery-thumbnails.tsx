
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gallery-thumbnails` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gallery-thumbnails?s=sharp-duotone-solid gallery-thumbnails}
 * @preview ![gallery-thumbnails](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDk2IDk2IDAgMC05NkwwIDQxNnptMTYwIDBsMCA5NiA5NiAwIDAtOTYtOTYgMHptMTYwIDBsMCA5NiA5NiAwIDAtOTYtOTYgMHptMTYwIDBsMCA5NiA5NiAwIDAtOTYtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiA2NGwwIDIyNEw2NCAyODggNjQgNjRsNDQ4IDB6TTY0IDBMMCAwIDAgNjQgMCAyODhsMCA2NCA2NCAwIDQ0OCAwIDY0IDAgMC02NCAwLTIyNCAwLTY0TDUxMiAwIDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const GalleryThumbnails: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 96 96 0 0-96L0 416zm160 0l0 96 96 0 0-96-96 0zm160 0l0 96 96 0 0-96-96 0zm160 0l0 96 96 0 0-96-96 0z" />
            <path d="M512 64l0 224L64 288 64 64l448 0zM64 0L0 0 0 64 0 288l0 64 64 0 448 0 64 0 0-64 0-224 0-64L512 0 64 0z" />
    </Icon>
);

export default GalleryThumbnails;