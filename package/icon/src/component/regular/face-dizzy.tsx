
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-dizzy` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-dizzy?s=regular face-dizzy}
 * @preview ![face-dizzy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjIuMjE1IDIzOC4xMjVDMjI5Ljk2NSAyMzAuMjUgMjI5Ljk2NSAyMTcuNjI1IDIyMi4yMTUgMjA5Ljc1TDIwNC4yOTMgMTkyTDIyMi4yMTUgMTc0LjEyNUMyMjkuOTY1IDE2Ni4yNSAyMjkuOTY1IDE1My42MjUgMjIyLjIxNSAxNDUuNzVDMjE0LjM0NCAxMzggMjAxLjc1IDEzOCAxOTMuODc5IDE0NS43NUwxNzUuOTU3IDE2My43NUwxNTguMTU2IDE0NS44NzVDMTUwLjQwNiAxMzguMTI1IDEzNy42OTEgMTM4LjEyNSAxMjkuOTQxIDE0NS44NzVDMTIyLjA3IDE1My43NSAxMjIuMDcgMTY2LjM3NSAxMjkuOTQxIDE3NC4yNUwxNDcuNzQyIDE5Mi4xMjVMMTI5Ljk0MSAyMTBDMTIyLjA3IDIxNy43NSAxMjIuMDcgMjMwLjUgMTI5Ljk0MSAyMzguMjVDMTM3LjY5MSAyNDYuMTI1IDE1MC40MDYgMjQ2LjEyNSAxNTguMTU2IDIzOC4yNUwxNzUuOTU3IDIyMC41TDE5My43NTggMjM4LjI1QzIwMS43NSAyNDYgMjE0LjM0NCAyNDYgMjIyLjIxNSAyMzguMTI1Wk0yNTYgMjcyQzIyMC42NDEgMjcyIDE5MS45NDEgMzAwLjc1IDE5MS45NDEgMzM2UzIyMC42NDEgNDAwIDI1NiA0MDBTMzIwLjA1OSAzNzEuMjUgMzIwLjA1OSAzMzZTMjkxLjM1OSAyNzIgMjU2IDI3MlpNMzgyLjE4IDE0NS44NzVDMzc0LjQzIDEzOC4xMjUgMzYxLjcxNSAxMzguMTI1IDM1My44NDQgMTQ1Ljg3NUwzMzYuMDQzIDE2My43NUwzMTguMjQyIDE0NS44NzVDMzEwLjM3MSAxMzguMTI1IDI5Ny42NTYgMTM4LjEyNSAyODkuOTA2IDE0NS44NzVDMjgyLjE1NiAxNTMuNzUgMjgyLjE1NiAxNjYuMzc1IDI4OS45MDYgMTc0LjI1TDMwNy44MjggMTkyLjEyNUwyODkuOTA2IDIxMEMyODIuMTU2IDIxNy43NSAyODIuMTU2IDIzMC41IDI4OS45MDYgMjM4LjI1QzI5Ny42NTYgMjQ2LjEyNSAzMTAuMzcxIDI0Ni4xMjUgMzE4LjI0MiAyMzguMjVMMzM2LjA0MyAyMjAuNUwzNTMuODQ0IDIzOC4yNUMzNjEuNTk0IDI0Ni4xMjUgMzc0LjMwOSAyNDYuMTI1IDM4Mi4wNTkgMjM4LjI1QzM4OS45MyAyMzAuNSAzODkuOTMgMjE3Ljc1IDM4Mi4wNTkgMjEwTDM2NC4yNTggMTkyTDM4Mi4xOCAxNzQuMTI1QzM4OS45MyAxNjYuMjUgMzg5LjkzIDE1My43NSAzODIuMTggMTQ1Ljg3NVpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDQ4QzE1MC4xMzEgNDQ4IDY0IDM2MS44NjkgNjQgMjU2UzE1MC4xMzEgNjQgMjU2IDY0UzQ0OCAxNTAuMTMxIDQ0OCAyNTZTMzYxLjg2OSA0NDggMjU2IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceDizzy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M222.215 238.125C229.965 230.25 229.965 217.625 222.215 209.75L204.293 192L222.215 174.125C229.965 166.25 229.965 153.625 222.215 145.75C214.344 138 201.75 138 193.879 145.75L175.957 163.75L158.156 145.875C150.406 138.125 137.691 138.125 129.941 145.875C122.07 153.75 122.07 166.375 129.941 174.25L147.742 192.125L129.941 210C122.07 217.75 122.07 230.5 129.941 238.25C137.691 246.125 150.406 246.125 158.156 238.25L175.957 220.5L193.758 238.25C201.75 246 214.344 246 222.215 238.125ZM256 272C220.641 272 191.941 300.75 191.941 336S220.641 400 256 400S320.059 371.25 320.059 336S291.359 272 256 272ZM382.18 145.875C374.43 138.125 361.715 138.125 353.844 145.875L336.043 163.75L318.242 145.875C310.371 138.125 297.656 138.125 289.906 145.875C282.156 153.75 282.156 166.375 289.906 174.25L307.828 192.125L289.906 210C282.156 217.75 282.156 230.5 289.906 238.25C297.656 246.125 310.371 246.125 318.242 238.25L336.043 220.5L353.844 238.25C361.594 246.125 374.309 246.125 382.059 238.25C389.93 230.5 389.93 217.75 382.059 210L364.258 192L382.18 174.125C389.93 166.25 389.93 153.75 382.18 145.875ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}