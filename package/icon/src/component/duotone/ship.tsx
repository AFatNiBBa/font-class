
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ship` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ship?s=duotone ship}
 * @preview ![ship](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2Mi40MDYgNDQ4LjQwMkM1MzMuOTggNDQ1LjQxIDUwNy42NDMgNDMyLjg3OSA0OTEuODcxIDQxMy42OTFDNDg1LjQyIDQwNS44MzkgNDczLjc4NyA0MDcuMTc1IDQ2Ny4xMjMgNDE0Ljg0N0M0MjguMDI5IDQ1OS44NDQgMzM1LjkyIDQ1OC42OTkgMzAwLjAyIDQxMy42OTFDMjk3LjAyMyA0MDkuOTMzIDI5Mi40ODYgNDA4LjAzOSAyODcuOTg2IDQwNy45OTlDMjgzLjQ4NiA0MDguMDM5IDI3OC45NzcgNDA5LjkzMyAyNzUuOTggNDEzLjY5MUMyNDAuMDggNDU4LjY5OSAxNDcuOTcxIDQ1OS44NDQgMTA4Ljg3NyA0MTQuODQ3QzEwMi4yMTMgNDA3LjE3NSA5MC41OCA0MDUuODM5IDg0LjEyOSA0MTMuNjkxQzY4LjM1NyA0MzIuODc5IDQyLjAyIDQ0NS40MSAxMy41OTQgNDQ4LjQwMkM1LjY4OCA0NDkuMjA3IDAgNDU2LjE2NCAwIDQ2NC4wMlY0OTYuMDUxQzAuMDAyIDUwNS4xMDIgNy42MzcgNTEyLjczMSAxNi43MTUgNTExLjk0NkM0NS41MiA1MDkuNDU3IDcyLjgyNCA1MDAuNjE0IDk2LjEyOSA0ODYuMTkyQzE1Mi42MTUgNTIwLjU4NSAyMzIuOTkgNTIwLjEwOCAyODcuOTg2IDQ4Ni4yN0MzNDIuOTgyIDUyMC4xMDggNDIzLjM4NSA1MjAuNTg1IDQ3OS44NzEgNDg2LjE5MkM1MDMuMTc2IDUwMC42MTQgNTMwLjQ4IDUwOS40NTcgNTU5LjI4NSA1MTEuOTQ2QzU2OC4zNjMgNTEyLjczMSA1NzUuOTk4IDUwNS4xMDIgNTc2IDQ5Ni4wNTFWNDY0LjAyQzU3NiA0NTYuMTY0IDU3MC4zMTIgNDQ5LjIwNyA1NjIuNDA2IDQ0OC40MDJaTTE2MCAxMjguMTIySDQxNlYyMTUuNzY1TDQ4MCAyMzYuMzU3Vjk2LjA5MkM0ODAgNzguNDE4IDQ2NS42NTYgNjQuMDYxIDQ0OCA2NC4wNjFIMzg0VjI0LjAyM0MzODQgMTAuNzYxIDM3My4yNSAwLjAwMSAzNjAgMC4wMDFIMjE2QzIwMi43NSAwLjAwMSAxOTIgMTAuNzYxIDE5MiAyNC4wMjNWNjQuMDYxSDEyOEMxMTAuMzQ0IDY0LjA2MSA5NiA3OC40MTggOTYgOTYuMDkyVjIzNi4zNTdMMTYwIDIxNS43NjVWMTI4LjEyMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTQ0IDI4MC4yOTVDNTQ0IDI4Ny42MTYgNTM5LjgxMiAyOTcuNzUgNTM0LjYyNSAzMDIuOTQyTDQ0Mi42MjUgMzkxLjc1OUM0MjkuMTg3IDQwNC45MjkgNDAyLjk2OSA0MTUuNzk4IDM4NC4xNTYgNDE2LjAwMkMzNjIuOTE2IDQxNi4wMDIgMzM3LjgyNCA0MTAuMTUgMzI1LjAzOSAzOTQuMTA5QzMxNi4xNSAzODIuOTQ4IDMwMi40NjUgMzc2LjQ3NiAyODggMzc2LjM1MUMyNzMuNTM1IDM3Ni40NzYgMjU5Ljg1IDM4Mi45NDggMjUwLjk2MSAzOTQuMTA5QzIzOC4xNzYgNDEwLjE1IDIxMy4wODQgNDE2LjAwMiAxOTEuODQ0IDQxNi4wMDJDMTczLjAzMSA0MTUuNzk4IDE0Ni44MTIgNDA0LjkyOSAxMzMuMzc1IDM5MS43NTlMNDEuMzc1IDMwMi45NDJDMzYuMTg4IDI5Ny43NSAzMiAyODcuNjE2IDMyIDI4MC4yOTVDMzIgMjY3LjM5MyA0MS45MzggMjUzLjc0IDU0LjIxOSAyNDkuNzk5TDI3OC4yMTkgMTc3LjczMkMyODEuNzg3IDE3Ni41ODEgMjg1LjA0NyAxNzYuMzQzIDI4OCAxNzYuMzY2QzI5MC45NTMgMTc2LjM0MyAyOTQuMjEzIDE3Ni41ODEgMjk3Ljc4MSAxNzcuNzMyTDUyMS43ODEgMjQ5Ljc5OUM1MzQuMDYyIDI1My43NCA1NDQgMjY3LjM5MyA1NDQgMjgwLjI5NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Ship(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M562.406 448.402C533.98 445.41 507.643 432.879 491.871 413.691C485.42 405.839 473.787 407.175 467.123 414.847C428.029 459.844 335.92 458.699 300.02 413.691C297.023 409.933 292.486 408.039 287.986 407.999C283.486 408.039 278.977 409.933 275.98 413.691C240.08 458.699 147.971 459.844 108.877 414.847C102.213 407.175 90.58 405.839 84.129 413.691C68.357 432.879 42.02 445.41 13.594 448.402C5.688 449.207 0 456.164 0 464.02V496.051C0.002 505.102 7.637 512.731 16.715 511.946C45.52 509.457 72.824 500.614 96.129 486.192C152.615 520.585 232.99 520.108 287.986 486.27C342.982 520.108 423.385 520.585 479.871 486.192C503.176 500.614 530.48 509.457 559.285 511.946C568.363 512.731 575.998 505.102 576 496.051V464.02C576 456.164 570.312 449.207 562.406 448.402ZM160 128.122H416V215.765L480 236.357V96.092C480 78.418 465.656 64.061 448 64.061H384V24.023C384 10.761 373.25 0.001 360 0.001H216C202.75 0.001 192 10.761 192 24.023V64.061H128C110.344 64.061 96 78.418 96 96.092V236.357L160 215.765V128.122Z" />
            <path d="M544 280.295C544 287.616 539.812 297.75 534.625 302.942L442.625 391.759C429.187 404.929 402.969 415.798 384.156 416.002C362.916 416.002 337.824 410.15 325.039 394.109C316.15 382.948 302.465 376.476 288 376.351C273.535 376.476 259.85 382.948 250.961 394.109C238.176 410.15 213.084 416.002 191.844 416.002C173.031 415.798 146.812 404.929 133.375 391.759L41.375 302.942C36.188 297.75 32 287.616 32 280.295C32 267.393 41.938 253.74 54.219 249.799L278.219 177.732C281.787 176.581 285.047 176.343 288 176.366C290.953 176.343 294.213 176.581 297.781 177.732L521.781 249.799C534.062 253.74 544 267.393 544 280.295Z" />
        </Icon>
    </>
}