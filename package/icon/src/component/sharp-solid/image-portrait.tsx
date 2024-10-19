
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=sharp-solid image-portrait}
 * @preview ![image-portrait](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDBMMCAwIDAgNTEybDM4NCAwTDM4NCAwek0xMjggMTkyYTY0IDY0IDAgMSAxIDEyOCAwIDY0IDY0IDAgMSAxIC0xMjggMHptMTQ0IDk2bDMyIDk2TDgwIDM4NGwzMi05NiAxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96L80 384l32-96 160 0z" />
    </Icon>
);

export default ImagePortrait;