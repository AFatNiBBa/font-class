
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-paper` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper?s=duotone toilet-paper}
 * @preview ![toilet-paper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3OS45OTcgMEgxMjcuOTgxQzc0Ljk3OSAwIDMxLjk3NyA4NiAzMS45NzcgMTkyVjM2NC4xMjVDMzEuOTc3IDQwNS4yNSAyMi4yMjcgNDI2Ljg3NSAwLjg1IDQ5MUMtMi42NSA1MDEuMjUgNS4xIDUxMiAxNS45NzcgNTEySDMyOC44NzRDMzQyLjc0OSA1MTIgMzU0Ljg3NCA1MDMuMjUgMzU5LjI0OSA0OTAuMTI1QzM3Mi4xMjYgNDUxLjYyNSAzODQuMDAxIDQxNy43NSAzODQuMDAxIDM2NC4xMjVWMTkyLjMwOUMzODQuMDAxIDE5Mi4yMDUgMzgzLjk5MyAxOTIuMTA0IDM4My45OTMgMTkyQzM4My45OTMgODYgNDI2Ljk5NSAwIDQ3OS45OTcgMFpNMTExLjk5MSAyMjRDMTAzLjExNiAyMjQgOTUuOTkxIDIxNi44NzUgOTUuOTkxIDIwOFMxMDMuMTE2IDE5MiAxMTEuOTkxIDE5MkMxMjAuODY4IDE5MiAxMjcuOTkzIDE5OS4xMjUgMTI3Ljk5MyAyMDhTMTIwLjg2OCAyMjQgMTExLjk5MSAyMjRaTTE3NS45OTUgMjI0QzE2Ny4xMiAyMjQgMTU5Ljk5MyAyMTYuODc1IDE1OS45OTMgMjA4UzE2Ny4xMiAxOTIgMTc1Ljk5NSAxOTJTMTkxLjk5NSAxOTkuMTI1IDE5MS45OTUgMjA4UzE4NC44NyAyMjQgMTc1Ljk5NSAyMjRaTTIzOS45OTcgMjI0QzIzMS4xMjIgMjI0IDIyMy45OTcgMjE2Ljg3NSAyMjMuOTk3IDIwOFMyMzEuMTIyIDE5MiAyMzkuOTk3IDE5MlMyNTUuOTk5IDE5OS4xMjUgMjU1Ljk5OSAyMDhTMjQ4Ljg3MiAyMjQgMjM5Ljk5NyAyMjRaTTMwNC4wMDEgMjI0QzI5NS4xMjQgMjI0IDI4Ny45OTkgMjE2Ljg3NSAyODcuOTk5IDIwOFMyOTUuMTI0IDE5MiAzMDQuMDAxIDE5MkMzMTIuODc2IDE5MiAzMjAuMDAxIDE5OS4xMjUgMzIwLjAwMSAyMDhTMzEyLjg3NiAyMjQgMzA0LjAwMSAyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ4MC4wMDYgMEM0MjcuMDA0IDAgMzg0LjAwMiA4NiAzODQuMDAyIDE5MkMzODQuMDAyIDE5Mi4xMDQgMzg0LjAxIDE5Mi4yMDUgMzg0LjAxIDE5Mi4zMDlWMzY0LjEyNUMzODQuMDEgMzcxLjA3MiAzODMuNzk1IDM3Ny42NjIgMzgzLjQyIDM4NEg0ODAuMDFDNTMzLjAxIDM4My45OTYgNTc2LjAxIDI5Ny45OTggNTc2LjAxIDE5MkM1NzYuMDEgODYgNTMzLjAwOCAwIDQ4MC4wMDYgMFpNNDgwLjAwNiAyNTZDNDYyLjM3OSAyNTYgNDQ4LjAwNCAyMjcuMzc1IDQ0OC4wMDQgMTkyUzQ2Mi4zNzkgMTI4IDQ4MC4wMDYgMTI4QzQ5Ny42MzEgMTI4IDUxMi4wMDggMTU2LjYyNSA1MTIuMDA4IDE5MlM0OTcuNjMxIDI1NiA0ODAuMDA2IDI1NlpNMTc2LjAwNCAxOTJDMTY3LjEyOSAxOTIgMTYwLjAwMiAxOTkuMTI1IDE2MC4wMDIgMjA4UzE2Ny4xMjkgMjI0IDE3Ni4wMDQgMjI0UzE5Mi4wMDQgMjE2Ljg3NSAxOTIuMDA0IDIwOFMxODQuODc5IDE5MiAxNzYuMDA0IDE5MlpNMTEyIDE5MkMxMDMuMTI1IDE5MiA5NiAxOTkuMTI1IDk2IDIwOFMxMDMuMTI1IDIyNCAxMTIgMjI0QzEyMC44NzcgMjI0IDEyOC4wMDIgMjE2Ljg3NSAxMjguMDAyIDIwOFMxMjAuODc3IDE5MiAxMTIgMTkyWk0zMDQuMDEgMTkyQzI5NS4xMzMgMTkyIDI4OC4wMDggMTk5LjEyNSAyODguMDA4IDIwOFMyOTUuMTMzIDIyNCAzMDQuMDEgMjI0QzMxMi44ODUgMjI0IDMyMC4wMSAyMTYuODc1IDMyMC4wMSAyMDhTMzEyLjg4NSAxOTIgMzA0LjAxIDE5MlpNMjQwLjAwNiAxOTJDMjMxLjEzMSAxOTIgMjI0LjAwNiAxOTkuMTI1IDIyNC4wMDYgMjA4UzIzMS4xMzEgMjI0IDI0MC4wMDYgMjI0UzI1Ni4wMDggMjE2Ljg3NSAyNTYuMDA4IDIwOFMyNDguODgxIDE5MiAyNDAuMDA2IDE5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ToiletPaper(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M479.997 0H127.981C74.979 0 31.977 86 31.977 192V364.125C31.977 405.25 22.227 426.875 0.85 491C-2.65 501.25 5.1 512 15.977 512H328.874C342.749 512 354.874 503.25 359.249 490.125C372.126 451.625 384.001 417.75 384.001 364.125V192.309C384.001 192.205 383.993 192.104 383.993 192C383.993 86 426.995 0 479.997 0ZM111.991 224C103.116 224 95.991 216.875 95.991 208S103.116 192 111.991 192C120.868 192 127.993 199.125 127.993 208S120.868 224 111.991 224ZM175.995 224C167.12 224 159.993 216.875 159.993 208S167.12 192 175.995 192S191.995 199.125 191.995 208S184.87 224 175.995 224ZM239.997 224C231.122 224 223.997 216.875 223.997 208S231.122 192 239.997 192S255.999 199.125 255.999 208S248.872 224 239.997 224ZM304.001 224C295.124 224 287.999 216.875 287.999 208S295.124 192 304.001 192C312.876 192 320.001 199.125 320.001 208S312.876 224 304.001 224Z" />
            <path d="M480.006 0C427.004 0 384.002 86 384.002 192C384.002 192.104 384.01 192.205 384.01 192.309V364.125C384.01 371.072 383.795 377.662 383.42 384H480.01C533.01 383.996 576.01 297.998 576.01 192C576.01 86 533.008 0 480.006 0ZM480.006 256C462.379 256 448.004 227.375 448.004 192S462.379 128 480.006 128C497.631 128 512.008 156.625 512.008 192S497.631 256 480.006 256ZM176.004 192C167.129 192 160.002 199.125 160.002 208S167.129 224 176.004 224S192.004 216.875 192.004 208S184.879 192 176.004 192ZM112 192C103.125 192 96 199.125 96 208S103.125 224 112 224C120.877 224 128.002 216.875 128.002 208S120.877 192 112 192ZM304.01 192C295.133 192 288.008 199.125 288.008 208S295.133 224 304.01 224C312.885 224 320.01 216.875 320.01 208S312.885 192 304.01 192ZM240.006 192C231.131 192 224.006 199.125 224.006 208S231.131 224 240.006 224S256.008 216.875 256.008 208S248.881 192 240.006 192Z" />
        </Icon>
    </>
}