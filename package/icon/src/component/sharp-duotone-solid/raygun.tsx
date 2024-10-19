
import { Icon, generic } from "../../index";

/**
 * A component that renders the `raygun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=sharp-duotone-solid raygun}
 * @preview ![raygun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwbDAgNzQuOEM3OC41IDY3LjkgOTQuOCA2NCAxMTIgNjRsODAgMEw2NCAwek0yODggMzJsMCAyNCAwIDggMCAxOTIgMCAzMiAwIDggMCAyNCA0OCAwIDAtMjQgMC0yNDAgMC0yNC00OCAwem04MCAzMmwwIDI0IDAgMTc2IDAgMjQgNDggMCAwLTI0IDAtNTYgMC02NCAwLTU2IDAtMjQtNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTc2QzAgMTE0LjEgNTAuMSA2NCAxMTIgNjRsMTc2IDAgMCAxOTIgMCAzMkwxNzYgNTEyIDQ4IDQ0OGw4MC0xNjAtMTYgMEM1MC4xIDI4OCAwIDIzNy45IDAgMTc2em00MTYtMzJsNjQgMCA5Ni00OCAwIDE2MC05Ni00OC02NCAwIDAtNjR6TTExMiAyMDBhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4em0xMjAtMjRhMjQgMjQgMCAxIDAgLTQ4IDAgMjQgMjQgMCAxIDAgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 0l0 74.8C78.5 67.9 94.8 64 112 64l80 0L64 0zM288 32l0 24 0 8 0 192 0 32 0 8 0 24 48 0 0-24 0-240 0-24-48 0zm80 32l0 24 0 176 0 24 48 0 0-24 0-56 0-64 0-56 0-24-48 0z" />
            <path d="M0 176C0 114.1 50.1 64 112 64l176 0 0 192 0 32L176 512 48 448l80-160-16 0C50.1 288 0 237.9 0 176zm416-32l64 0 96-48 0 160-96-48-64 0 0-64zM112 200a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Raygun;