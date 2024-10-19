
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notebook` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=sharp-duotone-solid notebook}
 * @preview ![notebook](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMEw0ODAgMGwwIDUxMi0yODggMEwxOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAwTDY0IDBsMCAxMDQtNDAgMEwwIDEwNGwwIDQ4IDI0IDAgNDAgMCAwIDgwLTQwIDBMMCAyMzJsMCA0OCAyNCAwIDQwIDAgMCA4MC00MCAwTDAgMzYwbDAgNDggMjQgMCA0MCAwIDAgMTA0IDEyOCAwTDE5MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 0L480 0l0 512-288 0L192 0z" />
            <path d="M192 0L64 0l0 104-40 0L0 104l0 48 24 0 40 0 0 80-40 0L0 232l0 48 24 0 40 0 0 80-40 0L0 360l0 48 24 0 40 0 0 104 128 0L192 0z" />
    </Icon>
);

export default Notebook;