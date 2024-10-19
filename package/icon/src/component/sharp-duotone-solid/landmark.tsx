
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=sharp-duotone-solid landmark}
 * @preview ![landmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ2NGwwIDQ4IDUxMiAwIDAtNDgtNjQtNDggMC0yMjQtNjQgMCAwIDIyNC00MCAwIDAtMjI0LTY0IDAgMCAyMjQtNDggMCAwLTIyNC02NCAwIDAgMjI0LTQwIDAgMC0yMjQtNjQgMCAwIDIyNEwwIDQ2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAxOTJIMFYxNDRMMjU2IDAgNTEyIDE0NHY0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 464l0 48 512 0 0-48-64-48 0-224-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 224L0 464z" />
            <path d="M512 192H0V144L256 0 512 144v48z" />
    </Icon>
);

export default Landmark;