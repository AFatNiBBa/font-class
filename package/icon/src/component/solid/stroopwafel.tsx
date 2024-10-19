
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stroopwafel` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stroopwafel?s=solid stroopwafel}
 * @preview ![stroopwafel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODguMTI1IDIxMC43NUwxNDIuODc1IDI1NkwxODguMTI1IDMwMS4yNUwyMzMuMzc1IDI1NkwxODguMTI1IDIxMC43NVpNMzAxLjI1IDE4OC4xMjVMMjU2IDE0Mi44NzVMMjEwLjc1IDE4OC4xMjVMMjU2IDIzMy4zNzVMMzAxLjI1IDE4OC4xMjVaTTIxMC43NSAzMjMuODc1TDI1NiAzNjkuMTI1TDMwMS4yNSAzMjMuODc1TDI1NiAyNzguNjI1TDIxMC43NSAzMjMuODc1Wk0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDYxIDE2IDI1NlMxMjMuNDYxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTM5IDQ5NiAyNTZTMzg4LjUzOSAxNiAyNTYgMTZaTTQ0Mi42MjUgMjk1LjYyNUw0MzEuMzc1IDMwNi44NzVDNDI4LjI1IDMxMCA0MjMuMTI1IDMxMCA0MjAgMzA2Ljg3NUwzOTEuNzUgMjc4LjYyNUwzNDYuNSAzMjMuODc1TDM4MC41IDM1Ny43NUwzOTcuMzc1IDM0MC44NzVDNDAwLjUgMzM3Ljc1IDQwNS42MjUgMzM3Ljc1IDQwOC43NSAzNDAuODc1TDQyMCAzNTIuMTI1QzQyMy4xMjUgMzU1LjI1IDQyMy4xMjUgMzYwLjM3NSA0MjAgMzYzLjVMNDAzLjEyNSAzODAuMzc1TDQyMCAzOTcuMzc1QzQyMy4xMjUgNDAwLjUgNDIzLjEyNSA0MDUuNjI1IDQyMCA0MDguNzVMNDA4Ljc1IDQyMEM0MDUuNjI1IDQyMy4xMjUgNDAwLjUgNDIzLjEyNSAzOTcuMzc1IDQyMEwzODAuNSA0MDNMMzYzLjUgNDIwQzM2MC4zNzUgNDIzLjEyNSAzNTUuMjUgNDIzLjEyNSAzNTIuMTI1IDQyMEwzNDAuODc1IDQwOC43NUMzMzcuNzUgNDA1LjYyNSAzMzcuNzUgNDAwLjUgMzQwLjg3NSAzOTcuMzc1TDM1Ny44NzUgMzgwLjM3NUwzMjMuODc1IDM0Ni41TDI3OC42MjUgMzkxLjc1TDMwNi44NzUgNDIwQzMxMCA0MjMuMTI1IDMxMCA0MjguMjUgMzA2Ljg3NSA0MzEuMzc1TDI5NS42MjUgNDQyLjYyNUMyOTIuNSA0NDUuNzUgMjg3LjM3NSA0NDUuNzUgMjg0LjI1IDQ0Mi42MjVMMjU2IDQxNC4zNzVMMjI3Ljc1IDQ0Mi42MjVDMjI0LjYyNSA0NDUuNzUgMjE5LjUgNDQ1Ljc1IDIxNi4zNzUgNDQyLjYyNUwyMDUuMTI1IDQzMS4zNzVDMjAyIDQyOC4yNSAyMDIgNDIzLjEyNSAyMDUuMTI1IDQyMEwyMzMuMzc1IDM5MS43NUwxODguMTI1IDM0Ni41TDE1NC4yNSAzODAuNUwxNzEuMTI1IDM5Ny4zNzVDMTc0LjI1IDQwMC41IDE3NC4yNSA0MDUuNjI1IDE3MS4xMjUgNDA4Ljc1TDE1OS44NzUgNDIwQzE1Ni43NSA0MjMuMTI1IDE1MS42MjUgNDIzLjEyNSAxNDguNSA0MjBMMTMxLjYyNSA0MDMuMTI1TDExNC42MjUgNDIwQzExMS41IDQyMy4xMjUgMTA2LjM3NSA0MjMuMTI1IDEwMy4yNSA0MjBMOTIgNDA4Ljc1Qzg4Ljg3NSA0MDUuNjI1IDg4Ljg3NSA0MDAuNSA5MiAzOTcuMzc1TDEwOSAzODAuNUw5MiAzNjMuNUM4OC44NzUgMzYwLjM3NSA4OC44NzUgMzU1LjI1IDkyIDM1Mi4xMjVMMTAzLjI1IDM0MC44NzVDMTA2LjM3NSAzMzcuNzUgMTExLjUgMzM3Ljc1IDExNC42MjUgMzQwLjg3NUwxMzEuNjI1IDM1Ny44NzVMMTY1LjUgMzIzLjg3NUwxMjAuMjUgMjc4LjYyNUw5MiAzMDYuODc1Qzg4Ljg3NSAzMTAgODMuNzUgMzEwIDgwLjYyNSAzMDYuODc1TDY5LjM3NSAyOTUuNjI1QzY2LjI1IDI5Mi41IDY2LjI1IDI4Ny4zNzUgNjkuMzc1IDI4NC4yNUw5Ny42MjUgMjU2TDY5LjM3NSAyMjcuNzVDNjYuMjUgMjI0LjYyNSA2Ni4yNSAyMTkuNSA2OS4zNzUgMjE2LjM3NUw4MC42MjUgMjA1LjEyNUM4My43NSAyMDIgODguODc1IDIwMiA5MiAyMDUuMTI1TDEyMC4yNSAyMzMuMzc1TDE2NS41IDE4OC4xMjVMMTMxLjUgMTU0LjEyNUwxMTQuNjI1IDE3MS4xMjVDMTExLjUgMTc0LjI1IDEwNi4zNzUgMTc0LjI1IDEwMy4yNSAxNzEuMTI1TDkyIDE1OS44NzVDODguODc1IDE1Ni43NSA4OC44NzUgMTUxLjYyNSA5MiAxNDguNUwxMDguODc1IDEzMS41TDkyIDExNC42MjVDODguODc1IDExMS41IDg4Ljg3NSAxMDYuMzc1IDkyIDEwMy4yNUwxMDMuMjUgOTJDMTA2LjM3NSA4OC44NzUgMTExLjUgODguODc1IDExNC42MjUgOTJMMTMxLjUgMTA5TDE0OC41IDkyQzE1MS42MjUgODguODc1IDE1Ni43NSA4OC44NzUgMTU5Ljg3NSA5MkwxNzEuMTI1IDEwMy4yNUMxNzQuMjUgMTA2LjM3NSAxNzQuMjUgMTExLjUgMTcxLjEyNSAxMTQuNjI1TDE1NC4xMjUgMTMxLjVMMTg4LjEyNSAxNjUuNUwyMzMuMzc1IDEyMC4yNUwyMDUuMTI1IDkyQzIwMiA4OC44NzUgMjAyIDgzLjc1IDIwNS4xMjUgODAuNjI1TDIxNi4zNzUgNjkuMzc1QzIxOS41IDY2LjI1IDIyNC42MjUgNjYuMjUgMjI3Ljc1IDY5LjM3NUwyNTYgOTcuNjI1TDI4NC4yNSA2OS4zNzVDMjg3LjM3NSA2Ni4yNSAyOTIuNSA2Ni4yNSAyOTUuNjI1IDY5LjM3NUwzMDYuODc1IDgwLjYyNUMzMTAgODMuNzUgMzEwIDg4Ljg3NSAzMDYuODc1IDkyTDI3OC42MjUgMTIwLjI1TDMyMy44NzUgMTY1LjVMMzU3Ljg3NSAxMzEuNUwzNDAuODc1IDExNC42MjVDMzM3Ljc1IDExMS41IDMzNy43NSAxMDYuMzc1IDM0MC44NzUgMTAzLjI1TDM1Mi4xMjUgOTJDMzU1LjI1IDg4Ljg3NSAzNjAuMzc1IDg4Ljg3NSAzNjMuNSA5MkwzODAuNSAxMDguODc1TDM5Ny4zNzUgOTJDNDAwLjUgODguODc1IDQwNS42MjUgODguODc1IDQwOC43NSA5Mkw0MjAgMTAzLjI1QzQyMy4xMjUgMTA2LjM3NSA0MjMuMTI1IDExMS41IDQyMCAxMTQuNjI1TDQwMyAxMzEuNUw0MjAgMTQ4LjVDNDIzLjEyNSAxNTEuNjI1IDQyMy4xMjUgMTU2Ljc1IDQyMCAxNTkuODc1TDQwOC43NSAxNzEuMTI1QzQwNS42MjUgMTc0LjI1IDQwMC41IDE3NC4yNSAzOTcuMzc1IDE3MS4xMjVMMzgwLjUgMTU0LjEyNUwzNDYuNSAxODguMTI1TDM5MS43NSAyMzMuMzc1TDQyMCAyMDUuMTI1QzQyMy4xMjUgMjAyIDQyOC4yNSAyMDIgNDMxLjM3NSAyMDUuMTI1TDQ0Mi42MjUgMjE2LjM3NUM0NDUuNzUgMjE5LjUgNDQ1Ljc1IDIyNC42MjUgNDQyLjYyNSAyMjcuNzVMNDE0LjM3NSAyNTZMNDQyLjYyNSAyODQuMjVDNDQ1Ljc1IDI4Ny4zNzUgNDQ1Ljc1IDI5Mi41IDQ0Mi42MjUgMjk1LjYyNVpNMjc4LjYyNSAyNTZMMzIzLjg3NSAzMDEuMjVMMzY5LjEyNSAyNTZMMzIzLjg3NSAyMTAuNzVMMjc4LjYyNSAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Stroopwafel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M188.125 210.75L142.875 256L188.125 301.25L233.375 256L188.125 210.75ZM301.25 188.125L256 142.875L210.75 188.125L256 233.375L301.25 188.125ZM210.75 323.875L256 369.125L301.25 323.875L256 278.625L210.75 323.875ZM256 16C123.461 16 16 123.461 16 256S123.461 496 256 496S496 388.539 496 256S388.539 16 256 16ZM442.625 295.625L431.375 306.875C428.25 310 423.125 310 420 306.875L391.75 278.625L346.5 323.875L380.5 357.75L397.375 340.875C400.5 337.75 405.625 337.75 408.75 340.875L420 352.125C423.125 355.25 423.125 360.375 420 363.5L403.125 380.375L420 397.375C423.125 400.5 423.125 405.625 420 408.75L408.75 420C405.625 423.125 400.5 423.125 397.375 420L380.5 403L363.5 420C360.375 423.125 355.25 423.125 352.125 420L340.875 408.75C337.75 405.625 337.75 400.5 340.875 397.375L357.875 380.375L323.875 346.5L278.625 391.75L306.875 420C310 423.125 310 428.25 306.875 431.375L295.625 442.625C292.5 445.75 287.375 445.75 284.25 442.625L256 414.375L227.75 442.625C224.625 445.75 219.5 445.75 216.375 442.625L205.125 431.375C202 428.25 202 423.125 205.125 420L233.375 391.75L188.125 346.5L154.25 380.5L171.125 397.375C174.25 400.5 174.25 405.625 171.125 408.75L159.875 420C156.75 423.125 151.625 423.125 148.5 420L131.625 403.125L114.625 420C111.5 423.125 106.375 423.125 103.25 420L92 408.75C88.875 405.625 88.875 400.5 92 397.375L109 380.5L92 363.5C88.875 360.375 88.875 355.25 92 352.125L103.25 340.875C106.375 337.75 111.5 337.75 114.625 340.875L131.625 357.875L165.5 323.875L120.25 278.625L92 306.875C88.875 310 83.75 310 80.625 306.875L69.375 295.625C66.25 292.5 66.25 287.375 69.375 284.25L97.625 256L69.375 227.75C66.25 224.625 66.25 219.5 69.375 216.375L80.625 205.125C83.75 202 88.875 202 92 205.125L120.25 233.375L165.5 188.125L131.5 154.125L114.625 171.125C111.5 174.25 106.375 174.25 103.25 171.125L92 159.875C88.875 156.75 88.875 151.625 92 148.5L108.875 131.5L92 114.625C88.875 111.5 88.875 106.375 92 103.25L103.25 92C106.375 88.875 111.5 88.875 114.625 92L131.5 109L148.5 92C151.625 88.875 156.75 88.875 159.875 92L171.125 103.25C174.25 106.375 174.25 111.5 171.125 114.625L154.125 131.5L188.125 165.5L233.375 120.25L205.125 92C202 88.875 202 83.75 205.125 80.625L216.375 69.375C219.5 66.25 224.625 66.25 227.75 69.375L256 97.625L284.25 69.375C287.375 66.25 292.5 66.25 295.625 69.375L306.875 80.625C310 83.75 310 88.875 306.875 92L278.625 120.25L323.875 165.5L357.875 131.5L340.875 114.625C337.75 111.5 337.75 106.375 340.875 103.25L352.125 92C355.25 88.875 360.375 88.875 363.5 92L380.5 108.875L397.375 92C400.5 88.875 405.625 88.875 408.75 92L420 103.25C423.125 106.375 423.125 111.5 420 114.625L403 131.5L420 148.5C423.125 151.625 423.125 156.75 420 159.875L408.75 171.125C405.625 174.25 400.5 174.25 397.375 171.125L380.5 154.125L346.5 188.125L391.75 233.375L420 205.125C423.125 202 428.25 202 431.375 205.125L442.625 216.375C445.75 219.5 445.75 224.625 442.625 227.75L414.375 256L442.625 284.25C445.75 287.375 445.75 292.5 442.625 295.625ZM278.625 256L323.875 301.25L369.125 256L323.875 210.75L278.625 256Z" />
        </Icon>
    </>
}