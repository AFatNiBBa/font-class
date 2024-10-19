
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rupiah-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rupiah-sign?s=sharp-duotone-solid rupiah-sign}
 * @preview ![rupiah-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggMTYwbDMyIDAgODAgMGM2MS45IDAgMTEyIDUwLjEgMTEyIDExMnMtNTAuMSAxMTItMTEyIDExMmwtNDggMCAwIDEyOC02NCAwIDAtMTYwIDAtMTYwIDAtMzJ6bTY0IDY0bDAgOTYgNDggMGMyNi41IDAgNDgtMjEuNSA0OC00OHMtMjEuNS00OC00OC00OGwtNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDMyTDAgMzIgMCA2NCAwIDI4OCAwIDQ4MGw2NCAwIDAtMTYwIDQwLjYgMCA1MS4yIDE2MCA2Ny4yIDAtLjYtMS44TDE2OC4yIDMwOC42YzUxLjYtMjEuOSA4Ny44LTczIDg3LjgtMTMyLjZjMC03OS41LTY0LjUtMTQ0LTE0NC0xNDRMMzIgMzJ6bTgwIDIyNGwtNDggMEw2NCA5Nmw0OCAwYzQ0LjIgMCA4MCAzNS44IDgwIDgwcy0zNS44IDgwLTgwIDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RupiahSign: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 160l32 0 80 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-48 0 0 128-64 0 0-160 0-160 0-32zm64 64l0 96 48 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-48 0z" />
            <path d="M32 32L0 32 0 64 0 288 0 480l64 0 0-160 40.6 0 51.2 160 67.2 0-.6-1.8L168.2 308.6c51.6-21.9 87.8-73 87.8-132.6c0-79.5-64.5-144-144-144L32 32zm80 224l-48 0L64 96l48 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default RupiahSign;