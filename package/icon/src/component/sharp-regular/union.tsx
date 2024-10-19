
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=sharp-regular union}
 * @preview ![union](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyODhMMCAzMmw0OCAwIDAgMjU2YzAgNzkuNSA2NC41IDE0NCAxNDQgMTQ0czE0NC02NC41IDE0NC0xNDRsMC0yNTYgNDggMCAwIDI1NmMwIDEwNi04NiAxOTItMTkyIDE5MlMwIDM5NCAwIDI4OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 288L0 32l48 0 0 256c0 79.5 64.5 144 144 144s144-64.5 144-144l0-256 48 0 0 256c0 106-86 192-192 192S0 394 0 288z" />
    </Icon>
);

export default Union;