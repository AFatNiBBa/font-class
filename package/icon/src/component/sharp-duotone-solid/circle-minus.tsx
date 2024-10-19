
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-minus?s=sharp-duotone-solid circle-minus}
 * @preview ![circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE2MC0yNGwyNCAwIDE0NCAwIDI0IDAgMCA0OC0yNCAwLTE0NCAwLTI0IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAyMzJsMjQgMCAxNDQgMCAyNCAwIDAgNDgtMjQgMC0xNDQgMC0yNCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-24l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
            <path d="M160 232l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default CircleMinus;