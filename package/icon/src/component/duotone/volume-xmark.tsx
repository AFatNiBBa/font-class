
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=duotone volume-xmark}
 * @preview ![volume-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgMTg0YzAgNi4xIDIuMyAxMi4zIDcgMTdsNTUgNTUtNTUgNTVjLTQuNyA0LjctNyAxMC44LTcgMTdzMi4zIDEyLjMgNyAxN3MxMC44IDcgMTcgN3MxMi4zLTIuMyAxNy03bDU1LTU1IDU1IDU1YzQuNyA0LjcgMTAuOCA3IDE3IDdzMTIuMy0yLjMgMTctN3M3LTEwLjggNy0xN3MtMi4zLTEyLjMtNy0xN2wtNTUtNTUgNTUtNTVjNC43LTQuNyA3LTEwLjggNy0xN3MtMi4zLTEyLjMtNy0xN3MtMTAuOC03LTE3LTdzLTEyLjMgMi4zLTE3IDdsLTU1IDU1LTU1LTU1Yy00LjctNC43LTEwLjgtNy0xNy03cy0xMi4zIDIuMy0xNyA3cy03IDEwLjgtNyAxN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCA2NGMwLTEyLjYtNy40LTI0LTE4LjktMjkuMnMtMjUtMy4xLTM0LjQgNS4zTDEzMS44IDE2MCA2NCAxNjBjLTM1LjMgMC02NCAyOC43LTY0IDY0bDAgNjRjMCAzNS4zIDI4LjcgNjQgNjQgNjRsNjcuOCAwTDI2Ni43IDQ3MS45YzkuNCA4LjQgMjIuOSAxMC40IDM0LjQgNS4zUzMyMCA0NjAuNiAzMjAgNDQ4bDAtMzg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M384 184c0 6.1 2.3 12.3 7 17l55 55-55 55c-4.7 4.7-7 10.8-7 17s2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7l55-55 55 55c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7s7-10.8 7-17s-2.3-12.3-7-17l-55-55 55-55c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17s-10.8-7-17-7s-12.3 2.3-17 7l-55 55-55-55c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7s-7 10.8-7 17z" />
            <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160 64 160c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l67.8 0L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448l0-384z" />
    </Icon>
);

export default VolumeXmark;