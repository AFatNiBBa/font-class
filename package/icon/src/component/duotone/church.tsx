
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `church` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=duotone church}
 * @preview ![church](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMzk2VjQ4MEMwIDQ5Ny42NzIgMTQuMzI4IDUxMiAzMiA1MTJIMTYwVjMwNi4yNTRMMTkuMzc1IDM2Ni41QzcuNjI1IDM3MS42MjUgMCAzODMuMTI1IDAgMzk2Wk02MjAuNjI1IDM2Ni41TDQ4MCAzMDYuMjU0VjUxMkg2MDhDNjI1LjY3NCA1MTIgNjQwIDQ5Ny42NzIgNjQwIDQ4MFYzOTZDNjQwIDM4My4xMjUgNjMyLjM3NSAzNzEuNjI1IDYyMC42MjUgMzY2LjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ2NC41IDI0Ni42NTRMMzUyIDE3OS4yNzlWMTI4LjAyOUg0MDBDNDA4Ljg3NSAxMjguMDI5IDQxNiAxMjAuOTA0IDQxNiAxMTIuMDI5VjgwLjAyOUM0MTYgNzEuMTU0IDQwOC44NzUgNjQuMDI5IDQwMCA2NC4wMjlIMzUyVjE2LjAyOUMzNTIgNy4xNTQgMzQ0Ljg3NSAwLjAyOSAzMzYgMC4wMjlIMzA0QzI5NS4xMjUgMC4wMjkgMjg4IDcuMTU0IDI4OCAxNi4wMjlWNjQuMDI5SDI0MEMyMzEuMTI1IDY0LjAyOSAyMjQgNzEuMTU0IDIyNCA4MC4wMjlWMTEyLjAyOUMyMjQgMTIwLjkwNCAyMzEuMTI1IDEyOC4wMjkgMjQwIDEyOC4wMjlIMjg4VjE3OS4yNzlMMTc1LjUgMjQ2LjY1NEMxNjUuODc1IDI1Mi41MjkgMTYwIDI2Mi45MDQgMTYwIDI3NC4xNTRWNTEyLjAyOUgyNTZWNDE2LjAyOUMyNTYgMzgwLjY1NCAyODQuNjI1IDM1Mi4wMjkgMzIwIDM1Mi4wMjlTMzg0IDM4MC42NTQgMzg0IDQxNi4wMjlWNTEyLjAyOUg0ODBWMjc0LjE1NEM0ODAgMjYyLjkwNCA0NzQuMTI1IDI1Mi41MjkgNDY0LjUgMjQ2LjY1NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Church(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M0 396V480C0 497.672 14.328 512 32 512H160V306.254L19.375 366.5C7.625 371.625 0 383.125 0 396ZM620.625 366.5L480 306.254V512H608C625.674 512 640 497.672 640 480V396C640 383.125 632.375 371.625 620.625 366.5Z" />
            <path d="M464.5 246.654L352 179.279V128.029H400C408.875 128.029 416 120.904 416 112.029V80.029C416 71.154 408.875 64.029 400 64.029H352V16.029C352 7.154 344.875 0.029 336 0.029H304C295.125 0.029 288 7.154 288 16.029V64.029H240C231.125 64.029 224 71.154 224 80.029V112.029C224 120.904 231.125 128.029 240 128.029H288V179.279L175.5 246.654C165.875 252.529 160 262.904 160 274.154V512.029H256V416.029C256 380.654 284.625 352.029 320 352.029S384 380.654 384 416.029V512.029H480V274.154C480 262.904 474.125 252.529 464.5 246.654Z" />
        </Icon>
    </>
}