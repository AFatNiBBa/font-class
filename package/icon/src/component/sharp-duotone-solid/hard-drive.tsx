
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=sharp-duotone-solid hard-drive}
 * @preview ![hard-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDUxMiAwIDAgMjU2TDAgMjg4IDAgMzJ6TTM1MiAzODRhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjg4bDUxMiAwIDAgMTkyTDAgNDgwIDAgMjg4em0zNTIgOTZhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHptNjQgMzJhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l512 0 0 256L0 288 0 32zM352 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M0 288l512 0 0 192L0 480 0 288zm352 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default HardDrive;