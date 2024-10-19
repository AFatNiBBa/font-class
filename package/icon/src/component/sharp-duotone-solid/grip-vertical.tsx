
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-vertical?s=sharp-duotone-solid grip-vertical}
 * @preview ![grip-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMzJsMTI4IDAgMCAxMjgtMTI4IDAgMC0xMjh6bTAgMTYwbDEyOCAwIDAgMTI4LTEyOCAwIDAtMTI4em0wIDE2MGwxMjggMCAwIDEyOC0xMjggMCAwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNDgwbDEyOCAwIDAtMTI4TDAgMzUyIDAgNDgwek0wIDMyMGwxMjggMCAwLTEyOEwwIDE5MiAwIDMyMHpNMCAzMkwwIDE2MGwxMjggMCAwLTEyOEwwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GripVertical: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M192 32l128 0 0 128-128 0 0-128zm0 160l128 0 0 128-128 0 0-128zm0 160l128 0 0 128-128 0 0-128z" />
            <path d="M0 480l128 0 0-128L0 352 0 480zM0 320l128 0 0-128L0 192 0 320zM0 32L0 160l128 0 0-128L0 32z" />
    </Icon>
);

export default GripVertical;