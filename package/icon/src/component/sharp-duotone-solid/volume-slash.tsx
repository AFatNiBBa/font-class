
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=sharp-duotone-solid volume-slash}
 * @preview ![volume-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxNjBsMCAxOTIgMTI4IDBMMzA0IDQ4MGw0OCAwIDAtMTA2LjdMODEuMiAxNjAgMzIgMTYwem0xNjMuMi0zMS4zTDM1MiAyNTAuNSAzNTIgMzJsLTQ4IDBMMTk1LjIgMTI4Ljd6bTIxNy42IDg4LjljMTEuNyA4LjggMTkuMiAyMi43IDE5LjIgMzguNHMtNy41IDI5LjYtMTkuMiAzOC40bDUuOSA3LjkgMzAuNyAyMy45QzQ2OC4zIDMwOC43IDQ4MCAyODMuNyA0ODAgMjU2YzAtMzEuNC0xNS4xLTU5LjMtMzguNC03Ni44bC0yOC44IDM4LjR6bTU3LjYtNzYuOGMzNSAyNi4zIDU3LjYgNjguMSA1Ny42IDExNS4yYzAgMzguOC0xNS4zIDc0LTQwLjMgOTkuOWwzOC4xIDI5LjZDNTU3IDM1MS4zIDU3NiAzMDUuOSA1NzYgMjU2YzAtNjIuOC0zMC4yLTExOC42LTc2LjgtMTUzLjZsLTI4LjggMzguNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5LjQgLjFsMTkgMTQuN0w2MjAuOSA0NTkuM2wxOSAxNC43LTI5LjQgMzcuOS0xOS0xNC43TDE4LjkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 160l0 192 128 0L304 480l48 0 0-106.7L81.2 160 32 160zm163.2-31.3L352 250.5 352 32l-48 0L195.2 128.7zm217.6 88.9c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l5.9 7.9 30.7 23.9C468.3 308.7 480 283.7 480 256c0-31.4-15.1-59.3-38.4-76.8l-28.8 38.4zm57.6-76.8c35 26.3 57.6 68.1 57.6 115.2c0 38.8-15.3 74-40.3 99.9l38.1 29.6C557 351.3 576 305.9 576 256c0-62.8-30.2-118.6-76.8-153.6l-28.8 38.4z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default VolumeSlash;