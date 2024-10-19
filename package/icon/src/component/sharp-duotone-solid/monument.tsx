
import { Icon, generic } from "../../index";

/**
 * A component that renders the `monument` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=sharp-duotone-solid monument}
 * @preview ![monument](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwzMiAwIDIwIDAgMjgwIDAgMjAgMCAzMiAwIDAgNjQtMzIgMEwzMiA1MTIgMCA1MTJsMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDk2TDE5MiAwbDk2IDk2IDQ0IDM1Mkw1MiA0NDggOTYgOTZ6TTI1NiAyNzJsLTEyOCAwIDAgNDggMTI4IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448l32 0 20 0 280 0 20 0 32 0 0 64-32 0L32 512 0 512l0-64z" />
            <path d="M96 96L192 0l96 96 44 352L52 448 96 96zM256 272l-128 0 0 48 128 0 0-48z" />
    </Icon>
);

export default Monument;