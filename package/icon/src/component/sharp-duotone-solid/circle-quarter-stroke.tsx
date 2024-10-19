
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=sharp-duotone-solid circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyczI1Ni0xMTQuNiAyNTYtMjU2UzM5Ny40IDAgMjU2IDBsMCA2NGMxMDYgMCAxOTIgODYgMTkyIDE5MnMtODYgMTkyLTE5MiAxOTJTNjQgMzYyIDY0IDI1NkwwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NmwyNTYgMEwyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0l0 64c106 0 192 86 192 192s-86 192-192 192S64 362 64 256L0 256z" />
            <path d="M256 0C114.6 0 0 114.6 0 256l256 0L256 0z" />
    </Icon>
);

export default CircleQuarterStroke;