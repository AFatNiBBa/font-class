
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-field` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-field?s=sharp-duotone-solid pen-field}
 * @preview ![pen-field](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOGwzMiAwIDIyNCAwIDMyIDAgMCA2NC0zMiAwTDY0IDE5MmwwIDI1NiA0NDggMCAwLTEyOCAwLTMyIDY0IDAgMCAzMiAwIDE2MCAwIDMyLTMyIDBMMzIgNTEyIDAgNTEybDAtMzJMMCAxNjBsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzNTJsMTYtMTEyTDQ2OC43IDc1LjNsOTYgOTZMNDAwIDMzNiAyODggMzUyek01ODcuMyAxNDguN2wtOTYtOTZMNTQ0IDBsOTYgOTYtNTIuNyA1Mi43ek05NiAyODhsNjQgMCAwIDY0LTY0IDAgMC02NHptMTYwIDBsMCA2NC02NCAwIDAtNjQgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PenField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l32 0 224 0 32 0 0 64-32 0L64 192l0 256 448 0 0-128 0-32 64 0 0 32 0 160 0 32-32 0L32 512 0 512l0-32L0 160l0-32z" />
            <path d="M288 352l16-112L468.7 75.3l96 96L400 336 288 352zM587.3 148.7l-96-96L544 0l96 96-52.7 52.7zM96 288l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default PenField;