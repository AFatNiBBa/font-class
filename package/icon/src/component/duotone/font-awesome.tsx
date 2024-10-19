
import { Icon, generic } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=duotone font-awesome}
 * @preview ![font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmwwIDM1MiAzNzMuNiAwYzE0LjYgMCAyNi40LTExLjggMjYuNC0yNi40YzAtMy43LS44LTcuMy0yLjMtMTAuN0w0MzIgMjcybDYxLjctMTM4LjljMS41LTMuNCAyLjMtNyAyLjMtMTAuN2MwLTE0LjYtMTEuOC0yNi40LTI2LjQtMjYuNEw5NiA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDkzYzEyLjItOS41IDIwLTI0LjMgMjAtNDFDMTE2IDIzLjMgOTIuNyAwIDY0IDBTMTIgMjMuMyAxMiA1MmMwIDE2LjcgNy44IDMxLjUgMjAgNDFsMCA0MTkgNjQgMEw5NiA5M3oiLz48L3N2Zz4=|width=32|height=32)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l0 352 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L96 96z" />
            <path d="M96 93c12.2-9.5 20-24.3 20-41C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 419 64 0L96 93z" />
    </Icon>
);

export default FontAwesome;