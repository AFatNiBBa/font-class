
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=sharp-thin cross}
 * @preview ![cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDBsOCAwTDI0OCAwbDggMCAwIDggMCAxMjAgMTIwIDAgOCAwIDAgOCAwIDExMiAwIDgtOCAwLTEyMCAwIDAgMjQ4IDAgOC04IDAtMTEyIDAtOCAwIDAtOCAwLTI0OEw4IDI1NmwtOCAwIDAtOEwwIDEzNmwwLTggOCAwIDEyMCAwTDEyOCA4bDAtOHptMTYgMTZsMCAxMjAgMCA4LTggMEwxNiAxNDRsMCA5NiAxMjAgMCA4IDAgMCA4IDAgMjQ4IDk2IDAgMC0yNDggMC04IDggMCAxMjAgMCAwLTk2LTEyMCAwLTggMCAwLTggMC0xMjAtOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 0l8 0L248 0l8 0 0 8 0 120 120 0 8 0 0 8 0 112 0 8-8 0-120 0 0 248 0 8-8 0-112 0-8 0 0-8 0-248L8 256l-8 0 0-8L0 136l0-8 8 0 120 0L128 8l0-8zm16 16l0 120 0 8-8 0L16 144l0 96 120 0 8 0 0 8 0 248 96 0 0-248 0-8 8 0 120 0 0-96-120 0-8 0 0-8 0-120-96 0z" />
    </Icon>
);

export default Cross;