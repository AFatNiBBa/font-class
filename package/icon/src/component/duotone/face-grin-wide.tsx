
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-wide` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-wide?s=duotone face-grin-wide}
 * @preview ![face-grin-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDYxIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41NzggMTIzLjQ2MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU3OCA0OTYgMjU2QzQ5NiAxMjMuNDE4IDM4OC41MzkgMTYgMjU2IDE2Wk0zMTkuNjk1IDEzNi43NUMzMjcuMzI0IDEyNS4yNSAzNDQuMzk4IDEyNSAzNTIuMzkxIDEzNi43NUMzNjQuNzQyIDE1NS4xMjUgMzY3LjUyNyAxNzMuNjI1IDM2OC4xMzMgMTkyQzM2Ny42NDggMjEwLjM3NSAzNjQuNzQyIDIyOC44NzUgMzUyLjM5MSAyNDcuMjVDMzQ0Ljc2MiAyNTguNzUgMzI3LjY4OCAyNTkgMzE5LjY5NSAyNDcuMjVDMzA3LjM0NCAyMjguODc1IDMwNC41NTkgMjEwLjM3NSAzMDMuOTUzIDE5MkMzMDQuNTU5IDE3My42MjUgMzA3LjM0NCAxNTUuMTI1IDMxOS42OTUgMTM2Ljc1Wk0xNTkuNzMgMTM2Ljc1QzE2Ny4zNTkgMTI1LjI1IDE4NC40MzQgMTI1IDE5Mi40MjYgMTM2Ljc1QzIwNC43NzcgMTU1LjEyNSAyMDcuNDQxIDE3My42MjUgMjA4LjA0NyAxOTJDMjA3LjU2MyAyMTAuMzc1IDIwNC43NzcgMjI4Ljg3NSAxOTIuNDI2IDI0Ny4yNUMxODQuNzk3IDI1OC43NSAxNjcuNzIzIDI1OSAxNTkuNzMgMjQ3LjI1QzE0Ny4yNTggMjI4Ljg3NSAxNDQuNTk0IDIxMC4zNzUgMTQzLjk4OCAxOTJDMTQ0LjQ3MyAxNzMuNjI1IDE0Ny4yNTggMTU1LjEyNSAxNTkuNzMgMTM2Ljc1Wk0yNTYgNDMyQzE5NS40NTMgNDMyIDEyMS40NjUgMzkzLjc1IDExMi4xNDEgMzM4Ljc1QzExMC4yMDMgMzI2Ljg3NSAxMjEuNDY1IDMxNy4xMjUgMTMyLjg0OCAzMjAuNzVDMTYzLjEyMSAzMzAuNSAyMDguMDQ3IDMzNiAyNTYgMzM2UzM0OC44NzkgMzMwLjUgMzc5LjE1MiAzMjAuNzVDMzkwLjUzNSAzMTcuMTI1IDQwMS42NzYgMzI2Ljg3NSAzOTkuODU5IDMzOC43NUMzOTAuNTM1IDM5My43NSAzMTYuNTQ3IDQzMiAyNTYgNDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTIuNDAyIDEzNi43NUMzNDQuNDEgMTI1IDMyNy4zMzYgMTI1LjI1IDMxOS43MDcgMTM2Ljc1QzMwNy4zNTUgMTU1LjEyNSAzMDQuNTcgMTczLjYyNSAzMDMuOTY1IDE5MkMzMDQuNTcgMjEwLjM3NSAzMDcuMzU1IDIyOC44NzUgMzE5LjcwNyAyNDcuMjVDMzI3LjY5OSAyNTkgMzQ0Ljc3MyAyNTguNzUgMzUyLjQwMiAyNDcuMjVDMzY0Ljc1NCAyMjguODc1IDM2Ny42NiAyMTAuMzc1IDM2OC4xNDUgMTkyQzM2Ny41MzkgMTczLjYyNSAzNjQuNzU0IDE1NS4xMjUgMzUyLjQwMiAxMzYuNzVaTTE1OS43NDIgMTM2Ljc1QzE0Ny4yNyAxNTUuMTI1IDE0NC40ODQgMTczLjYyNSAxNDQgMTkyQzE0NC42MDUgMjEwLjM3NSAxNDcuMjcgMjI4Ljg3NSAxNTkuNzQyIDI0Ny4yNUMxNjcuNzM0IDI1OSAxODQuODA5IDI1OC43NSAxOTIuNDM4IDI0Ny4yNUMyMDQuNzg5IDIyOC44NzUgMjA3LjU3NCAyMTAuMzc1IDIwOC4wNTkgMTkyQzIwNy40NTMgMTczLjYyNSAyMDQuNzg5IDE1NS4xMjUgMTkyLjQzOCAxMzYuNzVDMTg0LjQ0NSAxMjUgMTY3LjM3MSAxMjUuMjUgMTU5Ljc0MiAxMzYuNzVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const FaceGrinWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 16C123.461 16 16 123.418 16 256C16 388.578 123.461 496 256 496S496 388.578 496 256C496 123.418 388.539 16 256 16ZM319.695 136.75C327.324 125.25 344.398 125 352.391 136.75C364.742 155.125 367.527 173.625 368.133 192C367.648 210.375 364.742 228.875 352.391 247.25C344.762 258.75 327.688 259 319.695 247.25C307.344 228.875 304.559 210.375 303.953 192C304.559 173.625 307.344 155.125 319.695 136.75ZM159.73 136.75C167.359 125.25 184.434 125 192.426 136.75C204.777 155.125 207.441 173.625 208.047 192C207.563 210.375 204.777 228.875 192.426 247.25C184.797 258.75 167.723 259 159.73 247.25C147.258 228.875 144.594 210.375 143.988 192C144.473 173.625 147.258 155.125 159.73 136.75ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.875 121.465 317.125 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.535 317.125 401.676 326.875 399.859 338.75C390.535 393.75 316.547 432 256 432Z" />
            <path d="M352.402 136.75C344.41 125 327.336 125.25 319.707 136.75C307.355 155.125 304.57 173.625 303.965 192C304.57 210.375 307.355 228.875 319.707 247.25C327.699 259 344.773 258.75 352.402 247.25C364.754 228.875 367.66 210.375 368.145 192C367.539 173.625 364.754 155.125 352.402 136.75ZM159.742 136.75C147.27 155.125 144.484 173.625 144 192C144.605 210.375 147.27 228.875 159.742 247.25C167.734 259 184.809 258.75 192.438 247.25C204.789 228.875 207.574 210.375 208.059 192C207.453 173.625 204.789 155.125 192.438 136.75C184.445 125 167.371 125.25 159.742 136.75Z" />
    </Icon>
);

export default FaceGrinWide;