
import { Icon, generic } from "../../index";

/**
 * A component that renders the `child` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=sharp-duotone-solid child}
 * @preview ![child](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGE2NCA2NCAwIDEgMCAxMjggMEE2NCA2NCAwIDEgMCA5NiA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTExNi45IDE2MGwtMTYgMC05LjYgMTIuOC03Mi4xIDk2TDAgMjk0LjRsNTEuMiAzOC40IDE5LjItMjUuNkw4MCAyOTQuNCA4MCA0ODBsMCAzMiA2NCAwIDAtMzIgMC05NiAzMiAwIDAgOTYgMCAzMiA2NCAwIDAtMzIgMC0xODUuNiA5LjYgMTIuOCAxOS4yIDI1LjZMMzIwIDI5NC40bC0xOS4yLTI1LjYtNzIuMS05NkwyMTkuMSAxNjBsLTE2IDAtODYuMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 64a64 64 0 1 0 128 0A64 64 0 1 0 96 64z" />
            <path d="M116.9 160l-16 0-9.6 12.8-72.1 96L0 294.4l51.2 38.4 19.2-25.6L80 294.4 80 480l0 32 64 0 0-32 0-96 32 0 0 96 0 32 64 0 0-32 0-185.6 9.6 12.8 19.2 25.6L320 294.4l-19.2-25.6-72.1-96L219.1 160l-16 0-86.2 0z" />
    </Icon>
);

export default Child;