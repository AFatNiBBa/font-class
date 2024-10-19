
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=duotone square-heart}
 * @preview ![square-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6TTc3LjggMjI2LjljMC0xOS41IDcuMy0zOS4xIDIyLTU0czMzLjktMjIuNCA1My4yLTIyLjRzMzguNSA3LjUgNTMuMiAyMi40YzUuOSA2IDExLjggMTIgMTcuNyAxOGM1LjktNiAxMS44LTEyIDE3LjctMThjMTQuNy0xNC45IDMzLjktMjIuNCA1My4yLTIyLjRzMzguNSA3LjUgNTMuMiAyMi40czIyIDM0LjUgMjIgNTRzLTcuMyAzOS4xLTIyIDU0TDI0Ni41IDM4NC4xYy02LjIgNi4zLTE0LjMgOS40LTIyLjUgOS40cy0xNi4zLTMuMS0yMi41LTkuNEw5OS45IDI4MC45Yy0xNC43LTE0LjktMjItMzQuNS0yMi01NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk5LjkgMTcyLjljLTI5LjQgMjkuOC0yOS40IDc4LjIgMCAxMDhMMjAxLjUgMzg0LjFjNi4yIDYuMyAxNC4zIDkuNCAyMi41IDkuNHMxNi4zLTMuMSAyMi41LTkuNEwzNDguMSAyODAuOWMyOS40LTI5LjggMjkuNC03OC4yIDAtMTA4cy03Ny0yOS44LTEwNi40IDBsLTE3LjcgMTgtMTcuNy0xOGMtMjkuNC0yOS44LTc3LTI5LjgtMTA2LjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM77.8 226.9c0-19.5 7.3-39.1 22-54s33.9-22.4 53.2-22.4s38.5 7.5 53.2 22.4c5.9 6 11.8 12 17.7 18c5.9-6 11.8-12 17.7-18c14.7-14.9 33.9-22.4 53.2-22.4s38.5 7.5 53.2 22.4s22 34.5 22 54s-7.3 39.1-22 54L246.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L99.9 280.9c-14.7-14.9-22-34.5-22-54z" />
            <path d="M99.9 172.9c-29.4 29.8-29.4 78.2 0 108L201.5 384.1c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4L348.1 280.9c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18-17.7-18c-29.4-29.8-77-29.8-106.4 0z" />
    </Icon>
);

export default SquareHeart;