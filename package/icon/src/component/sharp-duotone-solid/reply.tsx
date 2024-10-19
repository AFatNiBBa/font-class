
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reply` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=sharp-duotone-solid reply}
 * @preview ![reply](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMTI4bDExMiAwYzk3LjIgMCAxNzYgNzguOCAxNzYgMTc2YzAgMTI4LTEyOCAxNzYtMTI4IDE3NnMzMi0zMiAzMi04MGMwLTYxLjktNTAuMS0xMTItMTEyLTExMmwtODAgMCAwLTE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAzODRMMCAyMDggMTkyIDMybDMyIDAgMCAzNTItMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 128l112 0c97.2 0 176 78.8 176 176c0 128-128 176-128 176s32-32 32-80c0-61.9-50.1-112-112-112l-80 0 0-160z" />
            <path d="M192 384L0 208 192 32l32 0 0 352-32 0z" />
    </Icon>
);

export default Reply;