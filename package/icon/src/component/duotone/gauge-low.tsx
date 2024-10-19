
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gauge-low` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-low?s=duotone gauge-low}
 * @preview ![gauge-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAzMi4wMDFDMTI5IDMyLjAwMSAwIDE2MS4wMDEgMCAzMjAuMDAxQzAgMzcyLjc1MSAxNC4yNSA0MjIuMjUxIDM5IDQ2NC43NTFDNDQuNjI1IDQ3NC4zNzYgNTUuMzc1IDQ4MC4wMDEgNjYuNSA0ODAuMDAxSDUwOS41QzUyMC42MjUgNDgwLjAwMSA1MzEuMzc1IDQ3NC4zNzYgNTM3IDQ2NC43NTFDNTYxLjc1IDQyMi4yNTEgNTc2IDM3Mi43NTEgNTc2IDMyMC4wMDFDNTc2IDE2MS4wMDEgNDQ3IDMyLjAwMSAyODggMzIuMDAxWk0yODggOTYuMDAxQzMwNS42MjUgOTYuMDAxIDMyMCAxMTAuMzc2IDMyMCAxMjguMDAxUzMwNS42MjUgMTYwLjAwMSAyODggMTYwLjAwMVMyNTYgMTQ1LjYyNiAyNTYgMTI4LjAwMVMyNzAuMzc1IDk2LjAwMSAyODggOTYuMDAxWk05NiAzODQuMDAxQzc4LjM3NSAzODQuMDAxIDY0IDM2OS42MjYgNjQgMzUyLjAwMVM3OC4zNzUgMzIwLjAwMSA5NiAzMjAuMDAxUzEyOCAzMzQuMzc2IDEyOCAzNTIuMDAxUzExMy42MjUgMzg0LjAwMSA5NiAzODQuMDAxWk0zNDMuMTI1IDQxNi4wMDFIMjMyLjg3NUMyMjcuMzc1IDQwNi41MDEgMjI0IDM5NS43NTEgMjI0IDM4NC4wMDFDMjI0IDM3MS44NzYgMjI3LjUgMzYwLjc1MSAyMzMuMzc1IDM1MS4xMjZMMTI0Ljc1IDIwNi4zNzZDMTE2Ljg3NSAxOTUuNzUxIDExOSAxODAuNzUxIDEyOS42MjUgMTcyLjc1MUMxNDAuMjUgMTY0Ljg3NiAxNTUuMjUgMTY3LjAwMSAxNjMuMjUgMTc3LjYyNkwyNzEuNzUgMzIyLjM3NkMyNzcgMzIxLjAwMSAyODIuMzc1IDMyMC4wMDEgMjg4IDMyMC4wMDFDMzIzLjM3NSAzMjAuMDAxIDM1MiAzNDguNjI2IDM1MiAzODQuMDAxQzM1MiAzOTUuNzUxIDM0OC42MjUgNDA2LjUwMSAzNDMuMTI1IDQxNi4wMDFaTTQwMCAxOTIuMDAxQzQwMCAxNzQuMzc2IDQxNC4zNzUgMTYwLjAwMSA0MzIgMTYwLjAwMVM0NjQgMTc0LjM3NiA0NjQgMTkyLjAwMVM0NDkuNjI1IDIyNC4wMDEgNDMyIDIyNC4wMDFTNDAwIDIwOS42MjYgNDAwIDE5Mi4wMDFaTTQ4MCAzODQuMDAxQzQ2Mi4zNzUgMzg0LjAwMSA0NDggMzY5LjYyNiA0NDggMzUyLjAwMVM0NjIuMzc1IDMyMC4wMDEgNDgwIDMyMC4wMDFTNTEyIDMzNC4zNzYgNTEyIDM1Mi4wMDFTNDk3LjYyNSAzODQuMDAxIDQ4MCAzODQuMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNDMuMTIyIDQxNi4wMDFIMjMyLjg3MkMyMjcuMzcyIDQwNi41MDEgMjIzLjk5NyAzOTUuNzUxIDIyMy45OTcgMzg0LjAwMUMyMjMuOTk3IDM3MS44NzYgMjI3LjQ5NyAzNjAuNzUxIDIzMy4zNzIgMzUxLjEyNkwxMjQuNzQ3IDIwNi4zNzZDMTE2Ljg3MiAxOTUuNzUxIDExOC45OTcgMTgwLjc1MSAxMjkuNjIyIDE3Mi43NTFDMTQwLjI0NyAxNjQuODc2IDE1NS4yNDcgMTY3LjAwMSAxNjMuMjQ3IDE3Ny42MjZMMjcxLjc0NyAzMjIuMzc2QzI3Ni45OTcgMzIxLjAwMSAyODIuMzcyIDMyMC4wMDEgMjg3Ljk5NyAzMjAuMDAxQzMyMy4zNzIgMzIwLjAwMSAzNTEuOTk3IDM0OC42MjYgMzUxLjk5NyAzODQuMDAxQzM1MS45OTcgMzk1Ljc1MSAzNDguNjIyIDQwNi41MDEgMzQzLjEyMiA0MTYuMDAxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GaugeLow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M288 32.001C129 32.001 0 161.001 0 320.001C0 372.751 14.25 422.251 39 464.751C44.625 474.376 55.375 480.001 66.5 480.001H509.5C520.625 480.001 531.375 474.376 537 464.751C561.75 422.251 576 372.751 576 320.001C576 161.001 447 32.001 288 32.001ZM288 96.001C305.625 96.001 320 110.376 320 128.001S305.625 160.001 288 160.001S256 145.626 256 128.001S270.375 96.001 288 96.001ZM96 384.001C78.375 384.001 64 369.626 64 352.001S78.375 320.001 96 320.001S128 334.376 128 352.001S113.625 384.001 96 384.001ZM343.125 416.001H232.875C227.375 406.501 224 395.751 224 384.001C224 371.876 227.5 360.751 233.375 351.126L124.75 206.376C116.875 195.751 119 180.751 129.625 172.751C140.25 164.876 155.25 167.001 163.25 177.626L271.75 322.376C277 321.001 282.375 320.001 288 320.001C323.375 320.001 352 348.626 352 384.001C352 395.751 348.625 406.501 343.125 416.001ZM400 192.001C400 174.376 414.375 160.001 432 160.001S464 174.376 464 192.001S449.625 224.001 432 224.001S400 209.626 400 192.001ZM480 384.001C462.375 384.001 448 369.626 448 352.001S462.375 320.001 480 320.001S512 334.376 512 352.001S497.625 384.001 480 384.001Z" />
            <path d="M343.122 416.001H232.872C227.372 406.501 223.997 395.751 223.997 384.001C223.997 371.876 227.497 360.751 233.372 351.126L124.747 206.376C116.872 195.751 118.997 180.751 129.622 172.751C140.247 164.876 155.247 167.001 163.247 177.626L271.747 322.376C276.997 321.001 282.372 320.001 287.997 320.001C323.372 320.001 351.997 348.626 351.997 384.001C351.997 395.751 348.622 406.501 343.122 416.001Z" />
        </Icon>
    </>
}