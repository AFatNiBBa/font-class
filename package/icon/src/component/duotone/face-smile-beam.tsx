
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-smile-beam` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-beam?s=duotone face-smile-beam}
 * @preview ![face-smile-beam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIgMTYgMTYgMTIzLjQyIDE2IDI1NlMxMjMuNDIgNDk2IDI1NiA0OTZDMzg4LjU4MiA0OTYgNDk2IDM4OC41OCA0OTYgMjU2UzM4OC41ODIgMTYgMjU2IDE2Wk0xMjAuMDEyIDIyMy4zNzVDMTIzLjI4MSAxODEuMjUgMTUyLjIyMyAxNTIgMTc1Ljk1NyAxNTJDMTk5LjgxMiAxNTIgMjI4Ljc1NCAxODEuMjUgMjMyLjAyMyAyMjMuMzc1QzIzMi43NSAyMzIgMjIxLjI0NiAyMzUuMjUgMjE3LjEyOSAyMjcuODc1TDIwNy41NjIgMjEwLjg3NUMxOTkuOTM0IDE5Ny4yNSAxODguNDMgMTg5LjI1IDE3Ni4wNzggMTg5LjI1QzE2My44NDggMTg5LjI1IDE1Mi4zNDQgMTk3LjI1IDE0NC41OTQgMjEwLjg3NUwxMzUuMTQ4IDIyNy44NzVDMTMwLjc4OSAyMzUuMjUgMTE5LjI4NSAyMzEuODc1IDEyMC4wMTIgMjIzLjM3NVpNMzcwLjc5NyAzNDYuMjVDMzQyLjM0IDM4MC4zNzUgMzAwLjQ0MSA0MDAgMjU2IDQwMFMxNjkuNjYgMzgwLjM3NSAxNDEuMjAzIDM0Ni4yNUMxMjcuNjQxIDMyOS44NzUgMTUyLjIyMyAzMDkuNSAxNjUuNzg1IDMyNS43NUMxODguMTg4IDM1Mi42MjUgMjIxLjAwNCAzNjcuODc1IDI1NiAzNjcuODc1UzMyMy44MTIgMzUyLjUgMzQ2LjIxNSAzMjUuNzVDMzU5Ljc3NyAzMDkuNSAzODQuMzU5IDMzMCAzNzAuNzk3IDM0Ni4yNVpNMzc2Ljk3MyAyMjcuODc1TDM2Ny41MjcgMjEwLjg3NUMzNTkuNzc3IDE5Ny4yNSAzNDguMjczIDE4OS4yNSAzMzYuMDQzIDE4OS4yNUMzMjMuNjkxIDE4OS4yNSAzMTIuMTg4IDE5Ny4yNSAzMDQuNTU5IDIxMC44NzVMMjk0Ljk5MiAyMjcuODc1QzI5MC44NzUgMjM1LjI1IDI3OS4zNzEgMjMxLjg3NSAyODAuMDk4IDIyMy4zNzVDMjgzLjM2NyAxODEuMjUgMzEyLjMwOSAxNTIgMzM2LjA0MyAxNTJDMzU5Ljg5OCAxNTIgMzg4Ljg0IDE4MS4yNSAzOTIuMTA5IDIyMy4zNzVDMzkyLjcxNSAyMzIgMzgxLjA5IDIzNS4yNSAzNzYuOTczIDIyNy44NzVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEyMC4wMzMgMjIzLjM3NUMxMjMuMzAyIDE4MS4yNSAxNTIuMjQ0IDE1MiAxNzUuOTc4IDE1MkMxOTkuODM0IDE1MiAyMjguNzc1IDE4MS4yNSAyMzIuMDQ1IDIyMy4zNzVDMjMyLjc3MSAyMzIgMjIxLjI2NyAyMzUuMjUgMjE3LjE1IDIyNy44NzVMMjA3LjU4NCAyMTAuODc1QzE5OS45NTUgMTk3LjI1IDE4OC40NTEgMTg5LjI1IDE3Ni4wOTkgMTg5LjI1QzE2My44NjkgMTg5LjI1IDE1Mi4zNjUgMTk3LjI1IDE0NC42MTUgMjEwLjg3NUwxMzUuMTcgMjI3Ljg3NUMxMzAuODEgMjM1LjI1IDExOS4zMDYgMjMxLjg3NSAxMjAuMDMzIDIyMy4zNzVaTTM3Ni45OTQgMjI3Ljg3NUwzNjcuNTQ5IDIxMC44NzVDMzU5Ljc5OSAxOTcuMjUgMzQ4LjI5NSAxODkuMjUgMzM2LjA2NCAxODkuMjVDMzIzLjcxMyAxODkuMjUgMzEyLjIwOSAxOTcuMjUgMzA0LjU4IDIxMC44NzVMMjk1LjAxMyAyMjcuODc1QzI5MC44OTYgMjM1LjI1IDI3OS4zOTIgMjMxLjg3NSAyODAuMTE5IDIyMy4zNzVDMjgzLjM4OCAxODEuMjUgMzEyLjMzIDE1MiAzMzYuMDY0IDE1MkMzNTkuOTIgMTUyIDM4OC44NjEgMTgxLjI1IDM5Mi4xMzEgMjIzLjM3NUMzOTIuNzM2IDIzMiAzODEuMTExIDIzNS4yNSAzNzYuOTk0IDIyNy44NzVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FaceSmileBeam(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM120.012 223.375C123.281 181.25 152.223 152 175.957 152C199.812 152 228.754 181.25 232.023 223.375C232.75 232 221.246 235.25 217.129 227.875L207.562 210.875C199.934 197.25 188.43 189.25 176.078 189.25C163.848 189.25 152.344 197.25 144.594 210.875L135.148 227.875C130.789 235.25 119.285 231.875 120.012 223.375ZM370.797 346.25C342.34 380.375 300.441 400 256 400S169.66 380.375 141.203 346.25C127.641 329.875 152.223 309.5 165.785 325.75C188.188 352.625 221.004 367.875 256 367.875S323.812 352.5 346.215 325.75C359.777 309.5 384.359 330 370.797 346.25ZM376.973 227.875L367.527 210.875C359.777 197.25 348.273 189.25 336.043 189.25C323.691 189.25 312.188 197.25 304.559 210.875L294.992 227.875C290.875 235.25 279.371 231.875 280.098 223.375C283.367 181.25 312.309 152 336.043 152C359.898 152 388.84 181.25 392.109 223.375C392.715 232 381.09 235.25 376.973 227.875Z" />
            <path d="M120.033 223.375C123.302 181.25 152.244 152 175.978 152C199.834 152 228.775 181.25 232.045 223.375C232.771 232 221.267 235.25 217.15 227.875L207.584 210.875C199.955 197.25 188.451 189.25 176.099 189.25C163.869 189.25 152.365 197.25 144.615 210.875L135.17 227.875C130.81 235.25 119.306 231.875 120.033 223.375ZM376.994 227.875L367.549 210.875C359.799 197.25 348.295 189.25 336.064 189.25C323.713 189.25 312.209 197.25 304.58 210.875L295.013 227.875C290.896 235.25 279.392 231.875 280.119 223.375C283.388 181.25 312.33 152 336.064 152C359.92 152 388.861 181.25 392.131 223.375C392.736 232 381.111 235.25 376.994 227.875Z" />
        </Icon>
    </>
}