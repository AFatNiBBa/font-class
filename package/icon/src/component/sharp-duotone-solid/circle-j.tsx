
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-j` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-j?s=sharp-duotone-solid circle-j}
 * @preview ![circle-j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NCAwbDQ4IDAgMCAyNCAwIDhjMCAyNi41IDIxLjUgNDggNDggNDhzNDgtMjEuNSA0OC00OGwwLTEzNiAwLTI0IDQ4IDAgMCAyNCAwIDEzNmMwIDUzLTQzIDk2LTk2IDk2cy05Ni00My05Ni05NmwwLTggMC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMzNiAxMjhsMCAyNCAwIDEzNmMwIDUzLTQzIDk2LTk2IDk2cy05Ni00My05Ni05NmwwLTggMC0yNCA0OCAwIDAgMjQgMCA4YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4czQ4LTIxLjUgNDgtNDhsMC0xMzYgMC0yNCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleJ: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 0l48 0 0 24 0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136 0-24 48 0 0 24 0 136c0 53-43 96-96 96s-96-43-96-96l0-8 0-24z" />
            <path d="M336 128l0 24 0 136c0 53-43 96-96 96s-96-43-96-96l0-8 0-24 48 0 0 24 0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136 0-24 48 0z" />
    </Icon>
);

export default CircleJ;