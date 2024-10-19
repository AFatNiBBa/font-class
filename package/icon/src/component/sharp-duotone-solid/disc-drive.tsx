
import { Icon, generic } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=sharp-duotone-solid disc-drive}
 * @preview ![disc-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyNTZhMTYwIDE2MCAwIDEgMCAzMjAgMEExNjAgMTYwIDAgMSAwIDk2IDI1NnptMTkyIDBhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDMybDQ0OCAwIDAgMzg0IDMyIDAgMCA2NC0zMiAwTDMyIDQ4MCAwIDQ4MGwwLTY0IDMyIDBMMzIgMzJ6TTIyNCAyNTZhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMTkyIDBBMTYwIDE2MCAwIDEgMCA5NiAyNTZhMTYwIDE2MCAwIDEgMCAzMjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M32 32l448 0 0 384 32 0 0 64-32 0L32 480 0 480l0-64 32 0L32 32zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192 0A160 160 0 1 0 96 256a160 160 0 1 0 320 0z" />
    </Icon>
);

export default DiscDrive;