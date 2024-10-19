
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gauge?s=duotone gauge}
 * @preview ![gauge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAzMi4wMDFDMTI5IDMyLjAwMSAwIDE2MS4wMDEgMCAzMjAuMDAxQzAgMzcyLjc1MSAxNC4yNSA0MjIuMjUxIDM5IDQ2NC43NTFDNDQuNjI1IDQ3NC4zNzYgNTUuMzc1IDQ4MC4wMDEgNjYuNSA0ODAuMDAxSDUwOS41QzUyMC42MjUgNDgwLjAwMSA1MzEuMzc1IDQ3NC4zNzYgNTM3IDQ2NC43NTFDNTYxLjc1IDQyMi4yNTEgNTc2IDM3Mi43NTEgNTc2IDMyMC4wMDFDNTc2IDE2MS4wMDEgNDQ3IDMyLjAwMSAyODggMzIuMDAxWk0yODggOTYuMDAxQzMwNS42MjUgOTYuMDAxIDMyMCAxMTAuMzc2IDMyMCAxMjguMDAxUzMwNS42MjUgMTYwLjAwMSAyODggMTYwLjAwMVMyNTYgMTQ1LjYyNiAyNTYgMTI4LjAwMVMyNzAuMzc1IDk2LjAwMSAyODggOTYuMDAxWk05NiAzODQuMDAxQzc4LjM3NSAzODQuMDAxIDY0IDM2OS42MjYgNjQgMzUyLjAwMVM3OC4zNzUgMzIwLjAwMSA5NiAzMjAuMDAxUzEyOCAzMzQuMzc2IDEyOCAzNTIuMDAxUzExMy42MjUgMzg0LjAwMSA5NiAzODQuMDAxWk0xNDQgMjI0LjAwMUMxMjYuMzc1IDIyNC4wMDEgMTEyIDIwOS42MjYgMTEyIDE5Mi4wMDFTMTI2LjM3NSAxNjAuMDAxIDE0NCAxNjAuMDAxUzE3NiAxNzQuMzc2IDE3NiAxOTIuMDAxUzE2MS42MjUgMjI0LjAwMSAxNDQgMjI0LjAwMVpNMzQzLjEyNSA0MTYuMDAxSDIzMi44NzVDMjI3LjM3NSA0MDYuNTAxIDIyNCAzOTUuNzUxIDIyNCAzODQuMDAxQzIyNCAzNDguNjI2IDI1Mi42MjUgMzIwLjAwMSAyODggMzIwLjAwMUMyOTMuNjI1IDMyMC4wMDEgMjk5IDMyMS4wMDEgMzA0LjI1IDMyMi4zNzZMNDEyLjc1IDE3Ny42MjZDNDIwLjc1IDE2Ny4wMDEgNDM1Ljc1IDE2NC44NzYgNDQ2LjM3NSAxNzIuNzUxQzQ1NyAxODAuNzUxIDQ1OS4xMjUgMTk1Ljc1MSA0NTEuMjUgMjA2LjM3NkwzNDIuNjI1IDM1MS4xMjZDMzQ4LjUgMzYwLjc1MSAzNTIgMzcxLjg3NiAzNTIgMzg0LjAwMUMzNTIgMzk1Ljc1MSAzNDguNjI1IDQwNi41MDEgMzQzLjEyNSA0MTYuMDAxWk00ODAgMzg0LjAwMUM0NjIuMzc1IDM4NC4wMDEgNDQ4IDM2OS42MjYgNDQ4IDM1Mi4wMDFTNDYyLjM3NSAzMjAuMDAxIDQ4MCAzMjAuMDAxUzUxMiAzMzQuMzc2IDUxMiAzNTIuMDAxUzQ5Ny42MjUgMzg0LjAwMSA0ODAgMzg0LjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzQzLjEyNSA0MTYuMDAxSDIzMi44NzVDMjI3LjM3NSA0MDYuNTAxIDIyNCAzOTUuNzUxIDIyNCAzODQuMDAxQzIyNCAzNDguNjI2IDI1Mi42MjUgMzIwLjAwMSAyODggMzIwLjAwMUMyOTMuNjI1IDMyMC4wMDEgMjk5IDMyMS4wMDEgMzA0LjI1IDMyMi4zNzZMNDEyLjc1IDE3Ny42MjZDNDIwLjc1IDE2Ny4wMDEgNDM1Ljc1IDE2NC44NzYgNDQ2LjM3NSAxNzIuNzUxQzQ1NyAxODAuNzUxIDQ1OS4xMjUgMTk1Ljc1MSA0NTEuMjUgMjA2LjM3NkwzNDIuNjI1IDM1MS4xMjZDMzQ4LjUgMzYwLjc1MSAzNTIgMzcxLjg3NiAzNTIgMzg0LjAwMUMzNTIgMzk1Ljc1MSAzNDguNjI1IDQwNi41MDEgMzQzLjEyNSA0MTYuMDAxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Gauge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 32.001C129 32.001 0 161.001 0 320.001C0 372.751 14.25 422.251 39 464.751C44.625 474.376 55.375 480.001 66.5 480.001H509.5C520.625 480.001 531.375 474.376 537 464.751C561.75 422.251 576 372.751 576 320.001C576 161.001 447 32.001 288 32.001ZM288 96.001C305.625 96.001 320 110.376 320 128.001S305.625 160.001 288 160.001S256 145.626 256 128.001S270.375 96.001 288 96.001ZM96 384.001C78.375 384.001 64 369.626 64 352.001S78.375 320.001 96 320.001S128 334.376 128 352.001S113.625 384.001 96 384.001ZM144 224.001C126.375 224.001 112 209.626 112 192.001S126.375 160.001 144 160.001S176 174.376 176 192.001S161.625 224.001 144 224.001ZM343.125 416.001H232.875C227.375 406.501 224 395.751 224 384.001C224 348.626 252.625 320.001 288 320.001C293.625 320.001 299 321.001 304.25 322.376L412.75 177.626C420.75 167.001 435.75 164.876 446.375 172.751C457 180.751 459.125 195.751 451.25 206.376L342.625 351.126C348.5 360.751 352 371.876 352 384.001C352 395.751 348.625 406.501 343.125 416.001ZM480 384.001C462.375 384.001 448 369.626 448 352.001S462.375 320.001 480 320.001S512 334.376 512 352.001S497.625 384.001 480 384.001Z" />
            <path d="M343.125 416.001H232.875C227.375 406.501 224 395.751 224 384.001C224 348.626 252.625 320.001 288 320.001C293.625 320.001 299 321.001 304.25 322.376L412.75 177.626C420.75 167.001 435.75 164.876 446.375 172.751C457 180.751 459.125 195.751 451.25 206.376L342.625 351.126C348.5 360.751 352 371.876 352 384.001C352 395.751 348.625 406.501 343.125 416.001Z" />
    </Icon>
);

export default Gauge;