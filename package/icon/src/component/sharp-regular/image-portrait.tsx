
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=sharp-regular image-portrait}
 * @preview ![image-portrait](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggNDhsMCA0MTYgMjg4IDAgMC00MTZMNDggNDh6TTM4NCAwbDAgNDggMCA0MTYgMCA0OC00OCAwTDQ4IDUxMiAwIDUxMmwwLTQ4TDAgNDggMCAwIDQ4IDAgMzM2IDBsNDggMHpNMTI4IDE5MmE2NCA2NCAwIDEgMSAxMjggMCA2NCA2NCAwIDEgMSAtMTI4IDB6bTE0NCA5NmwzMiA5Nkw4MCAzODRsMzItOTYgMTYwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l0 416 288 0 0-416L48 48zM384 0l0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0 48 0 336 0l48 0zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96L80 384l32-96 160 0z" />
    </Icon>
);

export default ImagePortrait;