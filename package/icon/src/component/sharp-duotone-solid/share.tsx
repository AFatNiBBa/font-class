
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=sharp-duotone-solid share}
 * @preview ![share](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMwNEMwIDQzMiAxMjggNDgwIDEyOCA0ODBzLTMyLTMyLTMyLTgwYzAtNjEuOSA1MC4xLTExMiAxMTItMTEybDgwIDAgMC0xNjAtMTEyIDBDNzguOCAxMjggMCAyMDYuOCAwIDMwNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCAzODRMNTEyIDIwOCAzMjAgMzJsLTMyIDAgMCAzNTIgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304C0 432 128 480 128 480s-32-32-32-80c0-61.9 50.1-112 112-112l80 0 0-160-112 0C78.8 128 0 206.8 0 304z" />
            <path d="M320 384L512 208 320 32l-32 0 0 352 32 0z" />
    </Icon>
);

export default Share;