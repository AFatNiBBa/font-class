
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=sharp-duotone-solid album}
 * @preview ![album](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTM4NCAyNTZBMTYwIDE2MCAwIDEgMSA2NCAyNTZhMTYwIDE2MCAwIDEgMSAzMjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCA0MTZhMTYwIDE2MCAwIDEgMCAwLTMyMCAxNjAgMTYwIDAgMSAwIDAgMzIwem0wLTE5MmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Album: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM384 256A160 160 0 1 1 64 256a160 160 0 1 1 320 0z" />
            <path d="M224 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Album;