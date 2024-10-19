
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `puzzle-piece` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece?s=duotone puzzle-piece}
 * @preview ![puzzle-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAyODhDNTEyIDMyMy4zNDYgNDkwLjUxIDM1MiA0NjQgMzUyQzQ1MC4xMTkgMzUyIDQzNy43MjEgMzQ0LjA1NSA0MjkuMDA0IDMzMS40NTlDNDI0LjIyNSAzMjQuNTU1IDQxNi43NTYgMzIwIDQwOC4zNTkgMzIwQzM5NC45MDYgMzIwIDM4NCAzMzAuOTA0IDM4NCAzNDQuMzU3VjQ4MEMzODQgNDk3LjY3MyAzNjkuNjczIDUxMiAzNTIgNTEySDI4MC4zNTlDMjY2LjkwNiA1MTIgMjU2IDUwMS4wOTQgMjU2IDQ4Ny42NDFDMjU2IDQ3OS4yNDIgMjYwLjU1NSA0NzEuNzc1IDI2Ny40NTkgNDY2Ljk5NkMyODAuMDU3IDQ1OC4yNzcgMjg4IDQ0NS44NzkgMjg4IDQzMkMyODggNDA1LjQ5IDI1OS4zNDYgMzg0IDIyNCAzODRTMTYwIDQwNS40OSAxNjAgNDMyQzE2MCA0NDUuODc5IDE2Ny45NDMgNDU4LjI3NyAxODAuNTQxIDQ2Ni45OTZDMTg3LjQ0NSA0NzEuNzc1IDE5MiA0NzkuMjQyIDE5MiA0ODcuNjQxQzE5MiA1MDEuMDk0IDE4MS4wOTQgNTEyIDE2Ny42NDEgNTEySDMyQzE0LjMyNyA1MTIgMCA0OTcuNjczIDAgNDgwVjM0NC4zNTdDMCAzMzAuOTA0IDEwLjkwNiAzMjAgMjQuMzU5IDMyMEMzMi43NTYgMzIwIDQwLjIyNSAzMjQuNTU1IDQ1LjAwNCAzMzEuNDU5QzUzLjcyMSAzNDQuMDU1IDY2LjExOSAzNTIgODAgMzUyQzEwNi41MSAzNTIgMTI4IDMyMy4zNDYgMTI4IDI4OFMxMDYuNTEgMjI0IDgwIDIyNEM2Ni4xMTkgMjI0IDUzLjcyMSAyMzEuOTQzIDQ1LjAwNCAyNDQuNTM5QzQwLjIyNSAyNTEuNDQ1IDMyLjc1NiAyNTYgMjQuMzU5IDI1NkMxMC45MDYgMjU2IDAgMjQ1LjA5NCAwIDIzMS42NDFWMTYwQzAgMTQyLjMyNyAxNC4zMjcgMTI4IDMyIDEyOEgxNjcuNjQxQzE4MS4wOTQgMTI4IDE5MiAxMTcuMDk0IDE5MiAxMDMuNjQxQzE5MiA5NS4yNDIgMTg3LjQ0NSA4Ny43NzUgMTgwLjU0MSA4Mi45OTZDMTY3Ljk0MyA3NC4yNzcgMTYwIDYxLjg3OSAxNjAgNDhDMTYwIDIxLjQ5IDE4OC42NTQgMCAyMjQgMFMyODggMjEuNDkgMjg4IDQ4QzI4OCA2MS44NzkgMjgwLjA1NyA3NC4yNzcgMjY3LjQ1OSA4Mi45OTZDMjYwLjU1NSA4Ny43NzUgMjU2IDk1LjI0MiAyNTYgMTAzLjY0MUMyNTYgMTE3LjA5NCAyNjYuOTA2IDEyOCAyODAuMzU5IDEyOEgzNTJDMzY5LjY3MyAxMjggMzg0IDE0Mi4zMjcgMzg0IDE2MFYyMzEuNjQxQzM4NCAyNDUuMDk0IDM5NC45MDYgMjU2IDQwOC4zNTkgMjU2QzQxNi43NTYgMjU2IDQyNC4yMjUgMjUxLjQ0NSA0MjkuMDA0IDI0NC41MzlDNDM3LjcyMSAyMzEuOTQzIDQ1MC4xMTkgMjI0IDQ2NCAyMjRDNDkwLjUxIDIyNCA1MTIgMjUyLjY1NCA1MTIgMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PuzzlePiece(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 288C512 323.346 490.51 352 464 352C450.119 352 437.721 344.055 429.004 331.459C424.225 324.555 416.756 320 408.359 320C394.906 320 384 330.904 384 344.357V480C384 497.673 369.673 512 352 512H280.359C266.906 512 256 501.094 256 487.641C256 479.242 260.555 471.775 267.459 466.996C280.057 458.277 288 445.879 288 432C288 405.49 259.346 384 224 384S160 405.49 160 432C160 445.879 167.943 458.277 180.541 466.996C187.445 471.775 192 479.242 192 487.641C192 501.094 181.094 512 167.641 512H32C14.327 512 0 497.673 0 480V344.357C0 330.904 10.906 320 24.359 320C32.756 320 40.225 324.555 45.004 331.459C53.721 344.055 66.119 352 80 352C106.51 352 128 323.346 128 288S106.51 224 80 224C66.119 224 53.721 231.943 45.004 244.539C40.225 251.445 32.756 256 24.359 256C10.906 256 0 245.094 0 231.641V160C0 142.327 14.327 128 32 128H167.641C181.094 128 192 117.094 192 103.641C192 95.242 187.445 87.775 180.541 82.996C167.943 74.277 160 61.879 160 48C160 21.49 188.654 0 224 0S288 21.49 288 48C288 61.879 280.057 74.277 267.459 82.996C260.555 87.775 256 95.242 256 103.641C256 117.094 266.906 128 280.359 128H352C369.673 128 384 142.327 384 160V231.641C384 245.094 394.906 256 408.359 256C416.756 256 424.225 251.445 429.004 244.539C437.721 231.943 450.119 224 464 224C490.51 224 512 252.654 512 288Z" />
        </Icon>
    </>
}