
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=sharp-duotone-solid image-portrait}
 * @preview ![image-portrait](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA1MTJsMzg0IDBMMzg0IDAgMCAwek04MCAzODRsMzItOTYgMTYwIDAgMzIgOTZMODAgMzg0ek0yNTYgMTkyYTY0IDY0IDAgMSAxIC0xMjggMCA2NCA2NCAwIDEgMSAxMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAyNTZhNjQgNjQgMCAxIDAgMC0xMjggNjQgNjQgMCAxIDAgMCAxMjh6TTMwNCAzODRsLTMyLTk2LTE2MCAwTDgwIDM4NGwyMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0L384 0 0 0zM80 384l32-96 160 0 32 96L80 384zM256 192a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM304 384l-32-96-160 0L80 384l224 0z" />
    </Icon>
);

export default ImagePortrait;