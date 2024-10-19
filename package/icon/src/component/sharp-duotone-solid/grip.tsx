
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip?s=sharp-duotone-solid grip}
 * @preview ![grip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwxMjggMCAwIDEyOEwwIDQxNiAwIDI4OHptMTYwIDBsMTI4IDAgMCAxMjgtMTI4IDAgMC0xMjh6bTE2MCAwbDEyOCAwIDAgMTI4LTEyOCAwIDAtMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA5NmwxMjggMCAwIDEyOEwwIDIyNCAwIDk2em0xNjAgMGwxMjggMCAwIDEyOC0xMjggMCAwLTEyOHptMjg4IDBsMCAxMjgtMTI4IDAgMC0xMjggMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Grip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288l128 0 0 128L0 416 0 288zm160 0l128 0 0 128-128 0 0-128zm160 0l128 0 0 128-128 0 0-128z" />
            <path d="M0 96l128 0 0 128L0 224 0 96zm160 0l128 0 0 128-128 0 0-128zm288 0l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default Grip;