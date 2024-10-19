
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `champagne-glass` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/champagne-glass?s=thin champagne-glass}
 * @preview ![champagne-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDk2SDEzNlYzNTJDMTM2IDM1MS42OTEgMTM1LjcwNyAzNTEuNTA4IDEzNS42NzQgMzUxLjIxMUMyMDIuNjIzIDM0Ny4wODYgMjU2IDI5MC45MjIgMjU2IDIyMS44MTJDMjU2IDE4Ni43MTkgMjQyLjczNCA5MS42ODggMjIyLjk4NCA2LjE4OEMyMjIuMTQxIDIuNTYyIDIxOC45MDYgMCAyMTUuMTg4IDBINDAuODEyQzM3LjA5NCAwIDMzLjg1OSAyLjU2MiAzMy4wMTYgNi4xODhDMTMuMjY2IDkxLjY4OCAwIDE4Ni43MTkgMCAyMjEuODEyQzAgMjkwLjkyMiA1My4zNzcgMzQ3LjA4NiAxMjAuMzI2IDM1MS4yMTFDMTIwLjI5MyAzNTEuNTA4IDEyMCAzNTEuNjkxIDEyMCAzNTJWNDk2SDMyQzI3LjU3OCA0OTYgMjQgNDk5LjU5NCAyNCA1MDRTMjcuNTc4IDUxMiAzMiA1MTJIMjI0QzIyOC40MjIgNTEyIDIzMiA1MDguNDA2IDIzMiA1MDRTMjI4LjQyMiA0OTYgMjI0IDQ5NlpNNDcuMTg4IDE2SDIwOC44MTJDMjE3Ljc3NyA1NS41ODYgMjI0Ljc3NSA5NC4yNjYgMjI5LjkzNCAxMjhIMjYuMDY2QzMxLjIyNSA5NC4yNjYgMzguMjIzIDU1LjU4NiA0Ny4xODggMTZaTTE2IDIyMS44MTJDMTYgMjA3LjU5NCAxOC42MzMgMTc5LjM5MSAyMy42NzQgMTQzLjg2N0MyMy43OTkgMTQzLjg3MSAyMy44NzMgMTQ0IDI0IDE0NEgyMzJDMjMyLjEyNyAxNDQgMjMyLjIwMSAxNDMuODcxIDIzMi4zMjYgMTQzLjg2N0MyMzcuMzY3IDE3OS4zOTEgMjQwIDIwNy41OTQgMjQwIDIyMS44MTJDMjQwIDI4NC43ODEgMTg5Ljc1IDMzNiAxMjggMzM2UzE2IDI4NC43ODEgMTYgMjIxLjgxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChampagneGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M224 496H136V352C136 351.691 135.707 351.508 135.674 351.211C202.623 347.086 256 290.922 256 221.812C256 186.719 242.734 91.688 222.984 6.188C222.141 2.562 218.906 0 215.188 0H40.812C37.094 0 33.859 2.562 33.016 6.188C13.266 91.688 0 186.719 0 221.812C0 290.922 53.377 347.086 120.326 351.211C120.293 351.508 120 351.691 120 352V496H32C27.578 496 24 499.594 24 504S27.578 512 32 512H224C228.422 512 232 508.406 232 504S228.422 496 224 496ZM47.188 16H208.812C217.777 55.586 224.775 94.266 229.934 128H26.066C31.225 94.266 38.223 55.586 47.188 16ZM16 221.812C16 207.594 18.633 179.391 23.674 143.867C23.799 143.871 23.873 144 24 144H232C232.127 144 232.201 143.871 232.326 143.867C237.367 179.391 240 207.594 240 221.812C240 284.781 189.75 336 128 336S16 284.781 16 221.812Z" />
        </Icon>
    </>
}