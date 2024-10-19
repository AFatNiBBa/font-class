
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-wink` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-wink?s=duotone face-smile-wink}
 * @preview ![face-smile-wink](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIgMTYgMTYgMTIzLjQyIDE2IDI1NlMxMjMuNDIgNDk2IDI1NiA0OTZDMzg4LjU4MiA0OTYgNDk2IDM4OC41OCA0OTYgMjU2UzM4OC41ODIgMTYgMjU2IDE2Wk0xNzUuOTU3IDE3NkMxOTMuNzU4IDE3NiAyMDguMDQ3IDE5MC4yNSAyMDguMDQ3IDIwOFMxOTMuNzU4IDI0MCAxNzUuOTU3IDI0MEMxNTguMjc3IDI0MCAxNDMuOTg4IDIyNS43NSAxNDMuOTg4IDIwOFMxNTguMjc3IDE3NiAxNzUuOTU3IDE3NlpNMzcwLjc5NyAzNDYuMjVDMzQyLjM0IDM4MC4zNzUgMzAwLjQ0MSA0MDAgMjU2IDQwMFMxNjkuNjYgMzgwLjM3NSAxNDEuMjAzIDM0Ni4yNUMxMjcuNjQxIDMyOS44NzUgMTUyLjM0NCAzMDkuNSAxNjUuNzg1IDMyNS43NUMxODguMTg4IDM1Mi43NSAyMjEuMDA0IDM2OCAyNTYgMzY4UzMyMy44MTIgMzUyLjYyNSAzNDYuMjE1IDMyNS43NUMzNTkuNzc3IDMwOS42MjUgMzg0LjM1OSAzMzAgMzcwLjc5NyAzNDYuMjVaTTM3Ni4yNDYgMjMzTDM2Ni41NTkgMjI0LjVDMzUxLjY2NCAyMTEuMjUgMzIwLjMwMSAyMTEuMjUgMzA1LjUyNyAyMjQuNUwyOTUuOTYxIDIzM0MyODcuNzI3IDI0MC4zNzUgMjc0LjQwNiAyMzMuMzc1IDI3Ni4yMjMgMjIyLjI1QzI4MC4yMTkgMTk3IDMxMC4zNzEgMTgwLjEyNSAzMzYuMDQzIDE4MC4xMjVDMzYxLjgzNiAxODAuMTI1IDM5MS45ODggMTk3IDM5NS45ODQgMjIyLjI1QzM5Ny42OCAyMzMuMjUgMzg0LjYwMiAyNDAuNSAzNzYuMjQ2IDIzM1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTc1Ljk2OSAxNzZDMTU4LjI4OSAxNzYgMTQ0IDE5MC4yNSAxNDQgMjA4UzE1OC4yODkgMjQwIDE3NS45NjkgMjQwQzE5My43NyAyNDAgMjA4LjA1OSAyMjUuNzUgMjA4LjA1OSAyMDhTMTkzLjc3IDE3NiAxNzUuOTY5IDE3NlpNMzM2LjA1NSAxODAuMTI1QzMxMC4zODMgMTgwLjEyNSAyODAuMjMgMTk3IDI3Ni4yMzQgMjIyLjI1QzI3NC40MTggMjMzLjM3NSAyODcuNzM4IDI0MC4zNzUgMjk1Ljk3MyAyMzNMMzA1LjUzOSAyMjQuNUMzMjAuMzEyIDIxMS4yNSAzNTEuNjc2IDIxMS4yNSAzNjYuNTcgMjI0LjVMMzc2LjI1OCAyMzNDMzg0LjYxMyAyNDAuNSAzOTcuNjkxIDIzMy4yNSAzOTUuOTk2IDIyMi4yNUMzOTIgMTk3IDM2MS44NDggMTgwLjEyNSAzMzYuMDU1IDE4MC4xMjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const FaceSmileWink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240C158.277 240 143.988 225.75 143.988 208S158.277 176 175.957 176ZM370.797 346.25C342.34 380.375 300.441 400 256 400S169.66 380.375 141.203 346.25C127.641 329.875 152.344 309.5 165.785 325.75C188.188 352.75 221.004 368 256 368S323.812 352.625 346.215 325.75C359.777 309.625 384.359 330 370.797 346.25ZM376.246 233L366.559 224.5C351.664 211.25 320.301 211.25 305.527 224.5L295.961 233C287.727 240.375 274.406 233.375 276.223 222.25C280.219 197 310.371 180.125 336.043 180.125C361.836 180.125 391.988 197 395.984 222.25C397.68 233.25 384.602 240.5 376.246 233Z" />
            <path d="M175.969 176C158.289 176 144 190.25 144 208S158.289 240 175.969 240C193.77 240 208.059 225.75 208.059 208S193.77 176 175.969 176ZM336.055 180.125C310.383 180.125 280.23 197 276.234 222.25C274.418 233.375 287.738 240.375 295.973 233L305.539 224.5C320.312 211.25 351.676 211.25 366.57 224.5L376.258 233C384.613 240.5 397.691 233.25 395.996 222.25C392 197 361.848 180.125 336.055 180.125Z" />
    </Icon>
);

export default FaceSmileWink;