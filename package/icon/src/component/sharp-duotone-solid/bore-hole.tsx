
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=sharp-duotone-solid bore-hole}
 * @preview ![bore-hole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDUxMmw1MTIgMCAwLTM4NC0xNjAgMCAwIDIyNGMwIDUzLTQzIDk2LTk2IDk2cy05Ni00My05Ni05NmwwLTIyNEwwIDEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzMmwwLTMyTDIyNCAwbDAgMzIgMCAyNjQuNmMtMTkuMSAxMS4xLTMyIDMxLjctMzIgNTUuNGMwIDM1LjMgMjguNyA2NCA2NCA2NHM2NC0yOC43IDY0LTY0YzAtMjMuNy0xMi45LTQ0LjQtMzItNTUuNEwyODggMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 512l512 0 0-384-160 0 0 224c0 53-43 96-96 96s-96-43-96-96l0-224L0 128z" />
            <path d="M288 32l0-32L224 0l0 32 0 264.6c-19.1 11.1-32 31.7-32 55.4c0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4L288 32z" />
    </Icon>
);

export default BoreHole;