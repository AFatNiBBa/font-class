
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `life-ring` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/life-ring?s=duotone life-ring}
 * @preview ![life-ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM0OC4zODkgMjMxLjQ5MUw0NTYuMjQ3IDEyMy42MzJDNDgyLjc0OSAxNjMuNjMxIDQ5NiAyMDkuODE1IDQ5NiAyNTZDNDk2IDMwMi4xODUgNDgyLjc0OSAzNDguMzY5IDQ1Ni4yNDcgMzg4LjM2OEwzNDguMzg1IDI4MC41MDVDMzUyLjYyMyAyNjQuNDA3IDM1Mi42MjcgMjQ3LjU5MyAzNDguMzg5IDIzMS40OTFaTTIzMS40OTUgMTYzLjYxNUMyNDcuNTkzIDE1OS4zNzcgMjY0LjQwNyAxNTkuMzc3IDI4MC41MDUgMTYzLjYxNUwzODguMzY4IDU1Ljc1M0MzNDguMzY5IDI5LjI1MSAzMDIuMTg0IDE2IDI1NiAxNkMyMDkuODE1IDE2IDE2My42MzEgMjkuMjUxIDEyMy42MzIgNTUuNzUzTDIzMS40OTUgMTYzLjYxNVpNMTYzLjYxMSAyMzEuNDkxTDU1Ljc1MyAxMjMuNjMyQzI5LjI1MSAxNjMuNjMxIDE2IDIwOS44MTUgMTYgMjU2QzE2IDMwMi4xODQgMjkuMjUxIDM0OC4zNjkgNTUuNzUzIDM4OC4zNjhMMTYzLjYxNSAyODAuNTA1QzE1OS4zNzcgMjY0LjQwNyAxNTkuMzczIDI0Ny41OTMgMTYzLjYxMSAyMzEuNDkxWk0yODAuNTA1IDM0OC4zODVDMjY0LjQwNyAzNTIuNjIzIDI0Ny41OTMgMzUyLjYyMyAyMzEuNDk1IDM0OC4zODVMMTIzLjYzMiA0NTYuMjQ3QzE2My42MzEgNDgyLjc0OSAyMDkuODE1IDQ5NiAyNTYgNDk2QzMwMi4xODUgNDk2IDM0OC4zNjkgNDgyLjc0OSAzODguMzY4IDQ1Ni4yNDdMMjgwLjUwNSAzNDguMzg1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNjMuODY2IDIzMS41MDFMNTYgMTIzLjYzNUM2NC43NDMgMTEwLjQ0IDc0LjkwOCA5Ny45MSA4Ni41MzUgODYuMjgzUzExMC42OTEgNjQuNDkxIDEyMy44ODcgNTUuNzQ5TDIzMS43NTIgMTYzLjYxNEMyMTUuODc3IDE2Ny43OTQgMjAwLjc4NCAxNzUuNjk0IDE4OC4zNjUgMTg4LjExM0MxNzUuOTQ1IDIwMC41MzMgMTY4LjA0NSAyMTUuNjI2IDE2My44NjYgMjMxLjUwMVpNMTYzLjg2NiAyODAuNDk5TDU2IDM4OC4zNjVDNjQuNzQzIDQwMS41NiA3NC45MDggNDE0LjA5IDg2LjUzNSA0MjUuNzE3UzExMC42OTEgNDQ3LjUwOSAxMjMuODg3IDQ1Ni4yNTFMMjMxLjc1MiAzNDguMzg2QzIxNS44NzcgMzQ0LjIwNiAyMDAuNzg0IDMzNi4zMDYgMTg4LjM2NSAzMjMuODg3QzE3NS45NDUgMzExLjQ2NyAxNjguMDQ1IDI5Ni4zNzQgMTYzLjg2NiAyODAuNDk5Wk00MjUuOTY4IDg2LjI4M0M0MTQuMzQxIDc0LjY1NyA0MDEuODEyIDY0LjQ5MSAzODguNjE2IDU1Ljc0OUwyODAuNzUgMTYzLjYxNEMyOTYuNjI1IDE2Ny43OTQgMzExLjcxOSAxNzUuNjk0IDMyNC4xMzggMTg4LjExM1MzNDQuNDU4IDIxNS42MjYgMzQ4LjYzNyAyMzEuNTAxTDQ1Ni41MDMgMTIzLjYzNUM0NDcuNzYgMTEwLjQ0IDQzNy41OTUgOTcuOTEgNDI1Ljk2OCA4Ni4yODNaTTQ1Ni41MDMgMzg4LjM2NUwzNDguNjM3IDI4MC40OTlDMzQ0LjQ1OCAyOTYuMzc0IDMzNi41NTcgMzExLjQ2NyAzMjQuMTM4IDMyMy44ODdTMjk2LjYyNSAzNDQuMjA2IDI4MC43NSAzNDguMzg2TDM4OC42MTYgNDU2LjI1MUM0MDEuODEyIDQ0Ny41MDkgNDE0LjM0MSA0MzcuMzQzIDQyNS45NjggNDI1LjcxN1M0NDcuNzYgNDAxLjU2IDQ1Ni41MDMgMzg4LjM2NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function LifeRing(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M348.389 231.491L456.247 123.632C482.749 163.631 496 209.815 496 256C496 302.185 482.749 348.369 456.247 388.368L348.385 280.505C352.623 264.407 352.627 247.593 348.389 231.491ZM231.495 163.615C247.593 159.377 264.407 159.377 280.505 163.615L388.368 55.753C348.369 29.251 302.184 16 256 16C209.815 16 163.631 29.251 123.632 55.753L231.495 163.615ZM163.611 231.491L55.753 123.632C29.251 163.631 16 209.815 16 256C16 302.184 29.251 348.369 55.753 388.368L163.615 280.505C159.377 264.407 159.373 247.593 163.611 231.491ZM280.505 348.385C264.407 352.623 247.593 352.623 231.495 348.385L123.632 456.247C163.631 482.749 209.815 496 256 496C302.185 496 348.369 482.749 388.368 456.247L280.505 348.385Z" />
            <path d="M163.866 231.501L56 123.635C64.743 110.44 74.908 97.91 86.535 86.283S110.691 64.491 123.887 55.749L231.752 163.614C215.877 167.794 200.784 175.694 188.365 188.113C175.945 200.533 168.045 215.626 163.866 231.501ZM163.866 280.499L56 388.365C64.743 401.56 74.908 414.09 86.535 425.717S110.691 447.509 123.887 456.251L231.752 348.386C215.877 344.206 200.784 336.306 188.365 323.887C175.945 311.467 168.045 296.374 163.866 280.499ZM425.968 86.283C414.341 74.657 401.812 64.491 388.616 55.749L280.75 163.614C296.625 167.794 311.719 175.694 324.138 188.113S344.458 215.626 348.637 231.501L456.503 123.635C447.76 110.44 437.595 97.91 425.968 86.283ZM456.503 388.365L348.637 280.499C344.458 296.374 336.557 311.467 324.138 323.887S296.625 344.206 280.75 348.386L388.616 456.251C401.812 447.509 414.341 437.343 425.968 425.717S447.76 401.56 456.503 388.365Z" />
        </Icon>
    </>
}