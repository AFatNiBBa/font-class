
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `stroopwafel` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stroopwafel?s=duotone stroopwafel}
 * @preview ![stroopwafel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4OC4xMjUgMjEwLjc1MUwxNDIuODc1IDI1Ni4wMDFMMTg4LjEyNSAzMDEuMjUxTDIzMy4zNzUgMjU2LjAwMUwxODguMTI1IDIxMC43NTFaTTMwMS4yNSAxODguMTI2TDI1NiAxNDIuODc2TDIxMC43NSAxODguMTI2TDI1NiAyMzMuMzc2TDMwMS4yNSAxODguMTI2Wk0yMTAuNzUgMzIzLjg3NkwyNTYgMzY5LjEyNkwzMDEuMjUgMzIzLjg3NkwyNTYgMjc4LjYyNkwyMTAuNzUgMzIzLjg3NlpNMjU2IDE2LjAwMUMxMjMuNDYxIDE2LjAwMSAxNiAxMjMuNDYyIDE2IDI1Ni4wMDFTMTIzLjQ2MSA0OTYuMDAxIDI1NiA0OTYuMDAxUzQ5NiAzODguNTQgNDk2IDI1Ni4wMDFTMzg4LjUzOSAxNi4wMDEgMjU2IDE2LjAwMVpNNDQyLjYyNSAyOTUuNjI2TDQzMS4zNzUgMzA2Ljg3NkM0MjguMjUgMzEwLjAwMSA0MjMuMTI1IDMxMC4wMDEgNDIwIDMwNi44NzZMMzkxLjc1IDI3OC42MjZMMzQ2LjUgMzIzLjg3NkwzODAuNSAzNTcuNzUxTDM5Ny4zNzUgMzQwLjg3NkM0MDAuNSAzMzcuNzUxIDQwNS42MjUgMzM3Ljc1MSA0MDguNzUgMzQwLjg3Nkw0MjAgMzUyLjEyNkM0MjMuMTI1IDM1NS4yNTEgNDIzLjEyNSAzNjAuMzc2IDQyMCAzNjMuNTAxTDQwMy4xMjUgMzgwLjM3Nkw0MjAgMzk3LjM3NkM0MjMuMTI1IDQwMC41MDEgNDIzLjEyNSA0MDUuNjI2IDQyMCA0MDguNzUxTDQwOC43NSA0MjAuMDAxQzQwNS42MjUgNDIzLjEyNiA0MDAuNSA0MjMuMTI2IDM5Ny4zNzUgNDIwLjAwMUwzODAuNSA0MDMuMDAxTDM2My41IDQyMC4wMDFDMzYwLjM3NSA0MjMuMTI2IDM1NS4yNSA0MjMuMTI2IDM1Mi4xMjUgNDIwLjAwMUwzNDAuODc1IDQwOC43NTFDMzM3Ljc1IDQwNS42MjYgMzM3Ljc1IDQwMC41MDEgMzQwLjg3NSAzOTcuMzc2TDM1Ny44NzUgMzgwLjM3NkwzMjMuODc1IDM0Ni41MDFMMjc4LjYyNSAzOTEuNzUxTDMwNi44NzUgNDIwLjAwMUMzMTAgNDIzLjEyNiAzMTAgNDI4LjI1MSAzMDYuODc1IDQzMS4zNzZMMjk1LjYyNSA0NDIuNjI2QzI5Mi41IDQ0NS43NTEgMjg3LjM3NSA0NDUuNzUxIDI4NC4yNSA0NDIuNjI2TDI1NiA0MTQuMzc2TDIyNy43NSA0NDIuNjI2QzIyNC42MjUgNDQ1Ljc1MSAyMTkuNSA0NDUuNzUxIDIxNi4zNzUgNDQyLjYyNkwyMDUuMTI1IDQzMS4zNzZDMjAyIDQyOC4yNTEgMjAyIDQyMy4xMjYgMjA1LjEyNSA0MjAuMDAxTDIzMy4zNzUgMzkxLjc1MUwxODguMTI1IDM0Ni41MDFMMTU0LjI1IDM4MC41MDFMMTcxLjEyNSAzOTcuMzc2QzE3NC4yNSA0MDAuNTAxIDE3NC4yNSA0MDUuNjI2IDE3MS4xMjUgNDA4Ljc1MUwxNTkuODc1IDQyMC4wMDFDMTU2Ljc1IDQyMy4xMjYgMTUxLjYyNSA0MjMuMTI2IDE0OC41IDQyMC4wMDFMMTMxLjYyNSA0MDMuMTI2TDExNC42MjUgNDIwLjAwMUMxMTEuNSA0MjMuMTI2IDEwNi4zNzUgNDIzLjEyNiAxMDMuMjUgNDIwLjAwMUw5MiA0MDguNzUxQzg4Ljg3NSA0MDUuNjI2IDg4Ljg3NSA0MDAuNTAxIDkyIDM5Ny4zNzZMMTA5IDM4MC41MDFMOTIgMzYzLjUwMUM4OC44NzUgMzYwLjM3NiA4OC44NzUgMzU1LjI1MSA5MiAzNTIuMTI2TDEwMy4yNSAzNDAuODc2QzEwNi4zNzUgMzM3Ljc1MSAxMTEuNSAzMzcuNzUxIDExNC42MjUgMzQwLjg3NkwxMzEuNjI1IDM1Ny44NzZMMTY1LjUgMzIzLjg3NkwxMjAuMjUgMjc4LjYyNkw5MiAzMDYuODc2Qzg4Ljg3NSAzMTAuMDAxIDgzLjc1IDMxMC4wMDEgODAuNjI1IDMwNi44NzZMNjkuMzc1IDI5NS42MjZDNjYuMjUgMjkyLjUwMSA2Ni4yNSAyODcuMzc2IDY5LjM3NSAyODQuMjUxTDk3LjYyNSAyNTYuMDAxTDY5LjM3NSAyMjcuNzUxQzY2LjI1IDIyNC42MjYgNjYuMjUgMjE5LjUwMSA2OS4zNzUgMjE2LjM3Nkw4MC42MjUgMjA1LjEyNkM4My43NSAyMDIuMDAxIDg4Ljg3NSAyMDIuMDAxIDkyIDIwNS4xMjZMMTIwLjI1IDIzMy4zNzZMMTY1LjUgMTg4LjEyNkwxMzEuNSAxNTQuMTI2TDExNC42MjUgMTcxLjEyNkMxMTEuNSAxNzQuMjUxIDEwNi4zNzUgMTc0LjI1MSAxMDMuMjUgMTcxLjEyNkw5MiAxNTkuODc2Qzg4Ljg3NSAxNTYuNzUxIDg4Ljg3NSAxNTEuNjI2IDkyIDE0OC41MDFMMTA4Ljg3NSAxMzEuNTAxTDkyIDExNC42MjZDODguODc1IDExMS41MDEgODguODc1IDEwNi4zNzYgOTIgMTAzLjI1MUwxMDMuMjUgOTIuMDAxQzEwNi4zNzUgODguODc2IDExMS41IDg4Ljg3NiAxMTQuNjI1IDkyLjAwMUwxMzEuNSAxMDkuMDAxTDE0OC41IDkyLjAwMUMxNTEuNjI1IDg4Ljg3NiAxNTYuNzUgODguODc2IDE1OS44NzUgOTIuMDAxTDE3MS4xMjUgMTAzLjI1MUMxNzQuMjUgMTA2LjM3NiAxNzQuMjUgMTExLjUwMSAxNzEuMTI1IDExNC42MjZMMTU0LjEyNSAxMzEuNTAxTDE4OC4xMjUgMTY1LjUwMUwyMzMuMzc1IDEyMC4yNTFMMjA1LjEyNSA5Mi4wMDFDMjAyIDg4Ljg3NiAyMDIgODMuNzUxIDIwNS4xMjUgODAuNjI2TDIxNi4zNzUgNjkuMzc2QzIxOS41IDY2LjI1MSAyMjQuNjI1IDY2LjI1MSAyMjcuNzUgNjkuMzc2TDI1NiA5Ny42MjZMMjg0LjI1IDY5LjM3NkMyODcuMzc1IDY2LjI1MSAyOTIuNSA2Ni4yNTEgMjk1LjYyNSA2OS4zNzZMMzA2Ljg3NSA4MC42MjZDMzEwIDgzLjc1MSAzMTAgODguODc2IDMwNi44NzUgOTIuMDAxTDI3OC42MjUgMTIwLjI1MUwzMjMuODc1IDE2NS41MDFMMzU3Ljg3NSAxMzEuNTAxTDM0MC44NzUgMTE0LjYyNkMzMzcuNzUgMTExLjUwMSAzMzcuNzUgMTA2LjM3NiAzNDAuODc1IDEwMy4yNTFMMzUyLjEyNSA5Mi4wMDFDMzU1LjI1IDg4Ljg3NiAzNjAuMzc1IDg4Ljg3NiAzNjMuNSA5Mi4wMDFMMzgwLjUgMTA4Ljg3NkwzOTcuMzc1IDkyLjAwMUM0MDAuNSA4OC44NzYgNDA1LjYyNSA4OC44NzYgNDA4Ljc1IDkyLjAwMUw0MjAgMTAzLjI1MUM0MjMuMTI1IDEwNi4zNzYgNDIzLjEyNSAxMTEuNTAxIDQyMCAxMTQuNjI2TDQwMyAxMzEuNTAxTDQyMCAxNDguNTAxQzQyMy4xMjUgMTUxLjYyNiA0MjMuMTI1IDE1Ni43NTEgNDIwIDE1OS44NzZMNDA4Ljc1IDE3MS4xMjZDNDA1LjYyNSAxNzQuMjUxIDQwMC41IDE3NC4yNTEgMzk3LjM3NSAxNzEuMTI2TDM4MC41IDE1NC4xMjZMMzQ2LjUgMTg4LjEyNkwzOTEuNzUgMjMzLjM3Nkw0MjAgMjA1LjEyNkM0MjMuMTI1IDIwMi4wMDEgNDI4LjI1IDIwMi4wMDEgNDMxLjM3NSAyMDUuMTI2TDQ0Mi42MjUgMjE2LjM3NkM0NDUuNzUgMjE5LjUwMSA0NDUuNzUgMjI0LjYyNiA0NDIuNjI1IDIyNy43NTFMNDE0LjM3NSAyNTYuMDAxTDQ0Mi42MjUgMjg0LjI1MUM0NDUuNzUgMjg3LjM3NiA0NDUuNzUgMjkyLjUwMSA0NDIuNjI1IDI5NS42MjZaTTI3OC42MjUgMjU2LjAwMUwzMjMuODc1IDMwMS4yNTFMMzY5LjEyNSAyNTYuMDAxTDMyMy44NzUgMjEwLjc1MUwyNzguNjI1IDI1Ni4wMDFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxNC4zNDQgMjU2TDQ0Mi41OTQgMjI3Ljc1QzQ0NS43MjEgMjI0LjYyNSA0NDUuNzIxIDIxOS41IDQ0Mi41OTQgMjE2LjM3NUw0MzEuMzQ0IDIwNS4xMjVDNDI4LjIxOSAyMDIgNDIzLjA5NCAyMDIgNDE5Ljk2OSAyMDUuMTI1TDM5MS43MjEgMjMzLjM3NUwzNDYuNDY5IDE4OC4xMjVMMzgwLjQ2OSAxNTQuMTI1TDM5Ny4zNDQgMTcxLjEyNUM0MDAuNDY5IDE3NC4yNSA0MDUuNTk0IDE3NC4yNSA0MDguNzIxIDE3MS4xMjVMNDE5Ljk2OSAxNTkuODc1QzQyMy4wOTQgMTU2Ljc1IDQyMy4wOTQgMTUxLjYyNSA0MTkuOTY5IDE0OC41TDQwMi45NjkgMTMxLjVMNDE5Ljk2OSAxMTQuNjI1QzQyMy4wOTQgMTExLjUgNDIzLjA5NCAxMDYuMzc1IDQxOS45NjkgMTAzLjI1TDQwOC43MjEgOTJDNDA1LjU5NCA4OC44NzUgNDAwLjQ2OSA4OC44NzUgMzk3LjM0NCA5MkwzODAuNDY5IDEwOC44NzVMMzYzLjQ2OSA5MkMzNjAuMzQ0IDg4Ljg3NSAzNTUuMjE5IDg4Ljg3NSAzNTIuMDk0IDkyTDM0MC44NDQgMTAzLjI1QzMzNy43MjEgMTA2LjM3NSAzMzcuNzIxIDExMS41IDM0MC44NDQgMTE0LjYyNUwzNTcuODQ0IDEzMS41TDMyMy44NDQgMTY1LjVMMjc4LjU5NCAxMjAuMjVMMzA2Ljg0NCA5MkMzMDkuOTY5IDg4Ljg3NSAzMDkuOTY5IDgzLjc1IDMwNi44NDQgODAuNjI1TDI5NS41OTQgNjkuMzc1QzI5Mi40NjkgNjYuMjUgMjg3LjM0NCA2Ni4yNSAyODQuMjE5IDY5LjM3NUwyNTUuOTY5IDk3LjYyNUwyMjcuNzE5IDY5LjM3NUMyMjQuNTk0IDY2LjI1IDIxOS40NjkgNjYuMjUgMjE2LjM0NCA2OS4zNzVMMjA1LjA5NCA4MC42MjVDMjAxLjk2OSA4My43NSAyMDEuOTY5IDg4Ljg3NSAyMDUuMDk0IDkyTDIzMy4zNDQgMTIwLjI1TDE4OC4wOTQgMTY1LjVMMTU0LjA5NCAxMzEuNUwxNzEuMDk0IDExNC42MjVDMTc0LjIxOSAxMTEuNSAxNzQuMjE5IDEwNi4zNzUgMTcxLjA5NCAxMDMuMjVMMTU5Ljg0NCA5MkMxNTYuNzE5IDg4Ljg3NSAxNTEuNTk0IDg4Ljg3NSAxNDguNDY5IDkyTDEzMS40NjkgMTA5TDExNC41OTQgOTJDMTExLjQ2OSA4OC44NzUgMTA2LjM0NCA4OC44NzUgMTAzLjIxOSA5Mkw5MS45NjkgMTAzLjI1Qzg4Ljg0NCAxMDYuMzc1IDg4Ljg0NCAxMTEuNSA5MS45NjkgMTE0LjYyNUwxMDguODQ0IDEzMS41TDkxLjk2OSAxNDguNUM4OC44NDQgMTUxLjYyNSA4OC44NDQgMTU2Ljc1IDkxLjk2OSAxNTkuODc1TDEwMy4yMTkgMTcxLjEyNUMxMDYuMzQ0IDE3NC4yNSAxMTEuNDY5IDE3NC4yNSAxMTQuNTk0IDE3MS4xMjVMMTMxLjQ2OSAxNTQuMTI1TDE2NS40NjkgMTg4LjEyNUwxMjAuMjE5IDIzMy4zNzVMOTEuOTY5IDIwNS4xMjVDODguODQ0IDIwMiA4My43MTkgMjAyIDgwLjU5NCAyMDUuMTI1TDY5LjM0NCAyMTYuMzc1QzY2LjIxOSAyMTkuNSA2Ni4yMTkgMjI0LjYyNSA2OS4zNDQgMjI3Ljc1TDk3LjU5NCAyNTZMNjkuMzQ0IDI4NC4yNUM2Ni4yMTkgMjg3LjM3NSA2Ni4yMTkgMjkyLjUgNjkuMzQ0IDI5NS42MjVMODAuNTk0IDMwNi44NzVDODMuNzE5IDMxMCA4OC44NDQgMzEwIDkxLjk2OSAzMDYuODc1TDEyMC4yMTkgMjc4LjYyNUwxNjUuNDY5IDMyMy44NzVMMTMxLjU5NCAzNTcuODc1TDExNC41OTQgMzQwLjg3NUMxMTEuNDY5IDMzNy43NSAxMDYuMzQ0IDMzNy43NSAxMDMuMjE5IDM0MC44NzVMOTEuOTY5IDM1Mi4xMjVDODguODQ0IDM1NS4yNSA4OC44NDQgMzYwLjM3NSA5MS45NjkgMzYzLjVMMTA4Ljk2OSAzODAuNUw5MS45NjkgMzk3LjM3NUM4OC44NDQgNDAwLjUgODguODQ0IDQwNS42MjUgOTEuOTY5IDQwOC43NUwxMDMuMjE5IDQyMEMxMDYuMzQ0IDQyMy4xMjUgMTExLjQ2OSA0MjMuMTI1IDExNC41OTQgNDIwTDEzMS41OTQgNDAzLjEyNUwxNDguNDY5IDQyMEMxNTEuNTk0IDQyMy4xMjUgMTU2LjcxOSA0MjMuMTI1IDE1OS44NDQgNDIwTDE3MS4wOTQgNDA4Ljc1QzE3NC4yMTkgNDA1LjYyNSAxNzQuMjE5IDQwMC41IDE3MS4wOTQgMzk3LjM3NUwxNTQuMjE5IDM4MC41TDE4OC4wOTQgMzQ2LjVMMjMzLjM0NCAzOTEuNzVMMjA1LjA5NCA0MjBDMjAxLjk2OSA0MjMuMTI1IDIwMS45NjkgNDI4LjI1IDIwNS4wOTQgNDMxLjM3NUwyMTYuMzQ0IDQ0Mi42MjVDMjE5LjQ2OSA0NDUuNzUgMjI0LjU5NCA0NDUuNzUgMjI3LjcxOSA0NDIuNjI1TDI1NS45NjkgNDE0LjM3NUwyODQuMjE5IDQ0Mi42MjVDMjg3LjM0NCA0NDUuNzUgMjkyLjQ2OSA0NDUuNzUgMjk1LjU5NCA0NDIuNjI1TDMwNi44NDQgNDMxLjM3NUMzMDkuOTY5IDQyOC4yNSAzMDkuOTY5IDQyMy4xMjUgMzA2Ljg0NCA0MjBMMjc4LjU5NCAzOTEuNzVMMzIzLjg0NCAzNDYuNUwzNTcuODQ0IDM4MC4zNzVMMzQwLjg0NCAzOTcuMzc1QzMzNy43MjEgNDAwLjUgMzM3LjcyMSA0MDUuNjI1IDM0MC44NDQgNDA4Ljc1TDM1Mi4wOTQgNDIwQzM1NS4yMTkgNDIzLjEyNSAzNjAuMzQ0IDQyMy4xMjUgMzYzLjQ2OSA0MjBMMzgwLjQ2OSA0MDNMMzk3LjM0NCA0MjBDNDAwLjQ2OSA0MjMuMTI1IDQwNS41OTQgNDIzLjEyNSA0MDguNzIxIDQyMEw0MTkuOTY5IDQwOC43NUM0MjMuMDk0IDQwNS42MjUgNDIzLjA5NCA0MDAuNSA0MTkuOTY5IDM5Ny4zNzVMNDAzLjA5NCAzODAuMzc1TDQxOS45NjkgMzYzLjVDNDIzLjA5NCAzNjAuMzc1IDQyMy4wOTQgMzU1LjI1IDQxOS45NjkgMzUyLjEyNUw0MDguNzIxIDM0MC44NzVDNDA1LjU5NCAzMzcuNzUgNDAwLjQ2OSAzMzcuNzUgMzk3LjM0NCAzNDAuODc1TDM4MC40NjkgMzU3Ljc1TDM0Ni40NjkgMzIzLjg3NUwzOTEuNzIxIDI3OC42MjVMNDE5Ljk2OSAzMDYuODc1QzQyMy4wOTQgMzEwIDQyOC4yMTkgMzEwIDQzMS4zNDQgMzA2Ljg3NUw0NDIuNTk0IDI5NS42MjVDNDQ1LjcyMSAyOTIuNSA0NDUuNzIxIDI4Ny4zNzUgNDQyLjU5NCAyODQuMjVMNDE0LjM0NCAyNTZaTTI1NS45NjkgMTQyLjg3NUwzMDEuMjE5IDE4OC4xMjVMMjU1Ljk2OSAyMzMuMzc1TDIxMC43MTkgMTg4LjEyNUwyNTUuOTY5IDE0Mi44NzVaTTE0Mi44NDQgMjU2TDE4OC4wOTQgMjEwLjc1TDIzMy4zNDQgMjU2TDE4OC4wOTQgMzAxLjI1TDE0Mi44NDQgMjU2Wk0yNTUuOTY5IDM2OS4xMjVMMjEwLjcxOSAzMjMuODc1TDI1NS45NjkgMjc4LjYyNUwzMDEuMjE5IDMyMy44NzVMMjU1Ljk2OSAzNjkuMTI1Wk0zMjMuODQ0IDMwMS4yNUwyNzguNTk0IDI1NkwzMjMuODQ0IDIxMC43NUwzNjkuMDk0IDI1NkwzMjMuODQ0IDMwMS4yNVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Stroopwafel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M188.125 210.751L142.875 256.001L188.125 301.251L233.375 256.001L188.125 210.751ZM301.25 188.126L256 142.876L210.75 188.126L256 233.376L301.25 188.126ZM210.75 323.876L256 369.126L301.25 323.876L256 278.626L210.75 323.876ZM256 16.001C123.461 16.001 16 123.462 16 256.001S123.461 496.001 256 496.001S496 388.54 496 256.001S388.539 16.001 256 16.001ZM442.625 295.626L431.375 306.876C428.25 310.001 423.125 310.001 420 306.876L391.75 278.626L346.5 323.876L380.5 357.751L397.375 340.876C400.5 337.751 405.625 337.751 408.75 340.876L420 352.126C423.125 355.251 423.125 360.376 420 363.501L403.125 380.376L420 397.376C423.125 400.501 423.125 405.626 420 408.751L408.75 420.001C405.625 423.126 400.5 423.126 397.375 420.001L380.5 403.001L363.5 420.001C360.375 423.126 355.25 423.126 352.125 420.001L340.875 408.751C337.75 405.626 337.75 400.501 340.875 397.376L357.875 380.376L323.875 346.501L278.625 391.751L306.875 420.001C310 423.126 310 428.251 306.875 431.376L295.625 442.626C292.5 445.751 287.375 445.751 284.25 442.626L256 414.376L227.75 442.626C224.625 445.751 219.5 445.751 216.375 442.626L205.125 431.376C202 428.251 202 423.126 205.125 420.001L233.375 391.751L188.125 346.501L154.25 380.501L171.125 397.376C174.25 400.501 174.25 405.626 171.125 408.751L159.875 420.001C156.75 423.126 151.625 423.126 148.5 420.001L131.625 403.126L114.625 420.001C111.5 423.126 106.375 423.126 103.25 420.001L92 408.751C88.875 405.626 88.875 400.501 92 397.376L109 380.501L92 363.501C88.875 360.376 88.875 355.251 92 352.126L103.25 340.876C106.375 337.751 111.5 337.751 114.625 340.876L131.625 357.876L165.5 323.876L120.25 278.626L92 306.876C88.875 310.001 83.75 310.001 80.625 306.876L69.375 295.626C66.25 292.501 66.25 287.376 69.375 284.251L97.625 256.001L69.375 227.751C66.25 224.626 66.25 219.501 69.375 216.376L80.625 205.126C83.75 202.001 88.875 202.001 92 205.126L120.25 233.376L165.5 188.126L131.5 154.126L114.625 171.126C111.5 174.251 106.375 174.251 103.25 171.126L92 159.876C88.875 156.751 88.875 151.626 92 148.501L108.875 131.501L92 114.626C88.875 111.501 88.875 106.376 92 103.251L103.25 92.001C106.375 88.876 111.5 88.876 114.625 92.001L131.5 109.001L148.5 92.001C151.625 88.876 156.75 88.876 159.875 92.001L171.125 103.251C174.25 106.376 174.25 111.501 171.125 114.626L154.125 131.501L188.125 165.501L233.375 120.251L205.125 92.001C202 88.876 202 83.751 205.125 80.626L216.375 69.376C219.5 66.251 224.625 66.251 227.75 69.376L256 97.626L284.25 69.376C287.375 66.251 292.5 66.251 295.625 69.376L306.875 80.626C310 83.751 310 88.876 306.875 92.001L278.625 120.251L323.875 165.501L357.875 131.501L340.875 114.626C337.75 111.501 337.75 106.376 340.875 103.251L352.125 92.001C355.25 88.876 360.375 88.876 363.5 92.001L380.5 108.876L397.375 92.001C400.5 88.876 405.625 88.876 408.75 92.001L420 103.251C423.125 106.376 423.125 111.501 420 114.626L403 131.501L420 148.501C423.125 151.626 423.125 156.751 420 159.876L408.75 171.126C405.625 174.251 400.5 174.251 397.375 171.126L380.5 154.126L346.5 188.126L391.75 233.376L420 205.126C423.125 202.001 428.25 202.001 431.375 205.126L442.625 216.376C445.75 219.501 445.75 224.626 442.625 227.751L414.375 256.001L442.625 284.251C445.75 287.376 445.75 292.501 442.625 295.626ZM278.625 256.001L323.875 301.251L369.125 256.001L323.875 210.751L278.625 256.001Z" />
            <path d="M414.344 256L442.594 227.75C445.721 224.625 445.721 219.5 442.594 216.375L431.344 205.125C428.219 202 423.094 202 419.969 205.125L391.721 233.375L346.469 188.125L380.469 154.125L397.344 171.125C400.469 174.25 405.594 174.25 408.721 171.125L419.969 159.875C423.094 156.75 423.094 151.625 419.969 148.5L402.969 131.5L419.969 114.625C423.094 111.5 423.094 106.375 419.969 103.25L408.721 92C405.594 88.875 400.469 88.875 397.344 92L380.469 108.875L363.469 92C360.344 88.875 355.219 88.875 352.094 92L340.844 103.25C337.721 106.375 337.721 111.5 340.844 114.625L357.844 131.5L323.844 165.5L278.594 120.25L306.844 92C309.969 88.875 309.969 83.75 306.844 80.625L295.594 69.375C292.469 66.25 287.344 66.25 284.219 69.375L255.969 97.625L227.719 69.375C224.594 66.25 219.469 66.25 216.344 69.375L205.094 80.625C201.969 83.75 201.969 88.875 205.094 92L233.344 120.25L188.094 165.5L154.094 131.5L171.094 114.625C174.219 111.5 174.219 106.375 171.094 103.25L159.844 92C156.719 88.875 151.594 88.875 148.469 92L131.469 109L114.594 92C111.469 88.875 106.344 88.875 103.219 92L91.969 103.25C88.844 106.375 88.844 111.5 91.969 114.625L108.844 131.5L91.969 148.5C88.844 151.625 88.844 156.75 91.969 159.875L103.219 171.125C106.344 174.25 111.469 174.25 114.594 171.125L131.469 154.125L165.469 188.125L120.219 233.375L91.969 205.125C88.844 202 83.719 202 80.594 205.125L69.344 216.375C66.219 219.5 66.219 224.625 69.344 227.75L97.594 256L69.344 284.25C66.219 287.375 66.219 292.5 69.344 295.625L80.594 306.875C83.719 310 88.844 310 91.969 306.875L120.219 278.625L165.469 323.875L131.594 357.875L114.594 340.875C111.469 337.75 106.344 337.75 103.219 340.875L91.969 352.125C88.844 355.25 88.844 360.375 91.969 363.5L108.969 380.5L91.969 397.375C88.844 400.5 88.844 405.625 91.969 408.75L103.219 420C106.344 423.125 111.469 423.125 114.594 420L131.594 403.125L148.469 420C151.594 423.125 156.719 423.125 159.844 420L171.094 408.75C174.219 405.625 174.219 400.5 171.094 397.375L154.219 380.5L188.094 346.5L233.344 391.75L205.094 420C201.969 423.125 201.969 428.25 205.094 431.375L216.344 442.625C219.469 445.75 224.594 445.75 227.719 442.625L255.969 414.375L284.219 442.625C287.344 445.75 292.469 445.75 295.594 442.625L306.844 431.375C309.969 428.25 309.969 423.125 306.844 420L278.594 391.75L323.844 346.5L357.844 380.375L340.844 397.375C337.721 400.5 337.721 405.625 340.844 408.75L352.094 420C355.219 423.125 360.344 423.125 363.469 420L380.469 403L397.344 420C400.469 423.125 405.594 423.125 408.721 420L419.969 408.75C423.094 405.625 423.094 400.5 419.969 397.375L403.094 380.375L419.969 363.5C423.094 360.375 423.094 355.25 419.969 352.125L408.721 340.875C405.594 337.75 400.469 337.75 397.344 340.875L380.469 357.75L346.469 323.875L391.721 278.625L419.969 306.875C423.094 310 428.219 310 431.344 306.875L442.594 295.625C445.721 292.5 445.721 287.375 442.594 284.25L414.344 256ZM255.969 142.875L301.219 188.125L255.969 233.375L210.719 188.125L255.969 142.875ZM142.844 256L188.094 210.75L233.344 256L188.094 301.25L142.844 256ZM255.969 369.125L210.719 323.875L255.969 278.625L301.219 323.875L255.969 369.125ZM323.844 301.25L278.594 256L323.844 210.75L369.094 256L323.844 301.25Z" />
        </Icon>
    </>
}