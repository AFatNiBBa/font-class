
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-right?s=duotone phone-arrow-right}
 * @preview ![phone-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMzExLjQgMjAwLjYgNTEyIDQ0OCA1MTJjMTggMCAzMy44LTEyLjEgMzguNi0yOS41bDI0LTg4YzEtMy41IDEuNC03IDEuNC0xMC41YzAtMTUuOC05LjQtMzAuNi0yNC42LTM2LjlsLTk2LTQwYy0xNi4zLTYuOC0zNS4yLTIuMS00Ni4zIDExLjZMMzA0LjcgMzY4QzIzNC4zIDMzNC43IDE3Ny4zIDI3Ny43IDE0NCAyMDcuM0wxOTMuMyAxNjdjMTMuNy0xMS4yIDE4LjQtMzAgMTEuNi00Ni4zbC00MC05NkMxNTguNiA5LjQgMTQzLjggMCAxMjggMGMtMy41IDAtNyAuNS0xMC41IDEuNGwtODggMjRDMTIuMSAzMC4yIDAgNDYgMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM5MSA3YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDgwIDgwYzkuNCA5LjQgOS40IDI0LjYgMCAzMy45bC04MCA4MGMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBzLTkuNC0yNC42IDAtMzMuOWwzOS0zOUwzMTIgMTI4Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0bDExOC4xIDBMMzkxIDQxYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const PhoneArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c1-3.5 1.4-7 1.4-10.5c0-15.8-9.4-30.6-24.6-36.9l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96C158.6 9.4 143.8 0 128 0c-3.5 0-7 .5-10.5 1.4l-88 24C12.1 30.2 0 46 0 64z" />
            <path d="M391 7c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L312 128c-13.3 0-24-10.7-24-24s10.7-24 24-24l118.1 0L391 41c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default PhoneArrowRight;