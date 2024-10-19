
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tags` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=sharp-duotone-solid tags}
 * @preview ![tags](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMDMgNjVMNDU0LjIgMjE2LjJsMCA3OS42TDMwMyA0NDcgMzM3IDQ4MSA0OTUuMiAzMjIuN2w3LTcgMC05LjkgMC05OS41IDAtOS45LTctN0wzMzcgMzEgMzAzIDY1eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMkwwIDI1NiAyMjQgNDgwIDQxNiAyODhsMC02NEwyMjQgMzIgMCAzMnptMTEyIDgwYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M303 65L454.2 216.2l0 79.6L303 447 337 481 495.2 322.7l7-7 0-9.9 0-99.5 0-9.9-7-7L337 31 303 65z" />
            <path d="M0 32L0 256 224 480 416 288l0-64L224 32 0 32zm112 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Tags;