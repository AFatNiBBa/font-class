
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun?s=sharp-duotone-solid sun}
 * @preview ![sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE1MEw3My4xIDI1NiAwIDM2MmwxMjYuNyAyMy4zTDE1MCA1MTJsMTA2LTczLjFMMzYyIDUxMmwyMy4zLTEyNi43TDUxMiAzNjIgNDM4LjkgMjU2IDUxMiAxNTAgMzg1LjMgMTI2LjcgMzYyIDAgMjU2IDczLjEgMTUwIDAgMTI2LjcgMTI2LjcgMCAxNTB6TTM4NCAyNTZhMTI4IDEyOCAwIDEgMSAtMjU2IDAgMTI4IDEyOCAwIDEgMSAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxNjBhOTYgOTYgMCAxIDAgMCAxOTIgOTYgOTYgMCAxIDAgMC0xOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sun: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 150L73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1 150 0 126.7 126.7 0 150zM384 256a128 128 0 1 1 -256 0 128 128 0 1 1 256 0z" />
            <path d="M256 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default Sun;