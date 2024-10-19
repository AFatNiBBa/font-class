
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sensor-cloud` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-cloud?s=duotone sensor-cloud}
 * @preview ![sensor-cloud](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwNC42MTcgMjkyLjVDMzEwLjQ5MiAyMzUuMzc1IDM1OC42MTYgMTkyLjEyNSA0MTUuOTkgMTkyQzQyNy4xMTQgMTkyIDQzNy43MzkgMTk0LjEyNSA0NDcuOTg5IDE5Ny4yNVY5NkM0NDcuOTg5IDYwLjYyNSA0MTkuMzY1IDMyIDM4My45OSAzMkg2My45OThDMjguNjI0IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjQgNDgwIDYzLjk5OCA0ODBIMjU3Ljg2OUMyMjkuMzY5IDQ1Mi4yNSAyMTcuNzQ1IDQxMS4zNzUgMjI3LjM2OSAzNzIuNzVDMjM2Ljk5NCAzMzQuMTI1IDI2Ni4zNjggMzAzLjYyNSAzMDQuNjE3IDI5Mi41Wk05NS45OTggMjcyQzk1Ljk5OCAyODAuODc1IDg4Ljg3MyAyODggNzkuOTk4IDI4OFM2My45OTggMjgwLjg3NSA2My45OTggMjcyVjExMkM2My45OTggMTAzLjEyNSA3MS4xMjMgOTYgNzkuOTk4IDk2Uzk1Ljk5OCAxMDMuMTI1IDk1Ljk5OCAxMTJWMjcyWk0xNTkuOTk2IDI3MkMxNTkuOTk2IDI4MC44NzUgMTUyLjg3MSAyODggMTQzLjk5NiAyODhDMTM1LjEyMiAyODggMTI3Ljk5NyAyODAuODc1IDEyNy45OTcgMjcyVjExMkMxMjcuOTk3IDEwMy4xMjUgMTM1LjEyMiA5NiAxNDMuOTk2IDk2QzE1Mi44NzEgOTYgMTU5Ljk5NiAxMDMuMTI1IDE1OS45OTYgMTEyVjI3MlpNMjA3Ljk5NSAyODhDMTk5LjEyIDI4OCAxOTEuOTk1IDI4MC44NzUgMTkxLjk5NSAyNzJWMTEyQzE5MS45OTUgMTAzLjEyNSAxOTkuMTIgOTYgMjA3Ljk5NSA5NkMyMTYuODcgOTYgMjIzLjk5NCAxMDMuMTI1IDIyMy45OTQgMTEyVjI3MkMyMjMuOTk0IDI4MC44NzUgMjE2Ljg3IDI4OCAyMDcuOTk1IDI4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTcyLjYxMiAzMjEuMjVDNTgxLjM2MiAyOTkuMTI1IDU3Mi40ODcgMjczLjg3NSA1NTEuNzM4IDI2Mi4xMjVDNTMwLjk4OCAyNTAuNSA1MDQuNzM5IDI1NS43NSA0OTAuMjM5IDI3NC42MjVDNDc0Ljk5IDIzNi4xMjUgNDMyLjg2NiAyMTUuNjI1IDM5My4xMTcgMjI3LjVTMzI5LjI0MyAyNzkuNjI1IDMzNy42MTggMzIwLjEyNUMzMzcuMTE4IDMyMC4xMjUgMzM2LjQ5MyAzMjAgMzM1Ljk5MyAzMjBDMjkxLjg2OSAzMjAgMjU1Ljk5NSAzNTUuODc1IDI1NS45OTUgNDAwUzI5MS44NjkgNDgwIDMzNS45OTMgNDgwSDU1OS45ODhDNjAxLjczNyA0ODAuMTI1IDYzNi40ODYgNDQ4LjEyNSA2MzkuNzM2IDQwNi41QzY0My4xMTEgMzY0Ljg3NSA2MTMuODYxIDMyNy43NSA1NzIuNjEyIDMyMS4yNVpNODAgOTZDNzEuMTI1IDk2IDY0IDEwMy4xMjUgNjQgMTEyVjI3MkM2NCAyODAuODc1IDcxLjEyNSAyODggODAgMjg4Uzk1Ljk5OSAyODAuODc1IDk1Ljk5OSAyNzJWMTEyQzk1Ljk5OSAxMDMuMTI1IDg4Ljg3NCA5NiA4MCA5NlpNMTQzLjk5OCA5NkMxMzUuMTIzIDk2IDEyNy45OTggMTAzLjEyNSAxMjcuOTk4IDExMlYyNzJDMTI3Ljk5OCAyODAuODc1IDEzNS4xMjMgMjg4IDE0My45OTggMjg4QzE1Mi44NzMgMjg4IDE1OS45OTggMjgwLjg3NSAxNTkuOTk4IDI3MlYxMTJDMTU5Ljk5OCAxMDMuMTI1IDE1Mi44NzMgOTYgMTQzLjk5OCA5NlpNMjA3Ljk5NiA5NkMxOTkuMTIyIDk2IDE5MS45OTcgMTAzLjEyNSAxOTEuOTk3IDExMlYyNzJDMTkxLjk5NyAyODAuODc1IDE5OS4xMjIgMjg4IDIwNy45OTYgMjg4QzIxNi44NzEgMjg4IDIyMy45OTYgMjgwLjg3NSAyMjMuOTk2IDI3MlYxMTJDMjIzLjk5NiAxMDMuMTI1IDIxNi44NzEgOTYgMjA3Ljk5NiA5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SensorCloud(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M304.617 292.5C310.492 235.375 358.616 192.125 415.99 192C427.114 192 437.739 194.125 447.989 197.25V96C447.989 60.625 419.365 32 383.99 32H63.998C28.624 32 0 60.625 0 96V416C0 451.375 28.624 480 63.998 480H257.869C229.369 452.25 217.745 411.375 227.369 372.75C236.994 334.125 266.368 303.625 304.617 292.5ZM95.998 272C95.998 280.875 88.873 288 79.998 288S63.998 280.875 63.998 272V112C63.998 103.125 71.123 96 79.998 96S95.998 103.125 95.998 112V272ZM159.996 272C159.996 280.875 152.871 288 143.996 288C135.122 288 127.997 280.875 127.997 272V112C127.997 103.125 135.122 96 143.996 96C152.871 96 159.996 103.125 159.996 112V272ZM207.995 288C199.12 288 191.995 280.875 191.995 272V112C191.995 103.125 199.12 96 207.995 96C216.87 96 223.994 103.125 223.994 112V272C223.994 280.875 216.87 288 207.995 288Z" />
            <path d="M572.612 321.25C581.362 299.125 572.487 273.875 551.738 262.125C530.988 250.5 504.739 255.75 490.239 274.625C474.99 236.125 432.866 215.625 393.117 227.5S329.243 279.625 337.618 320.125C337.118 320.125 336.493 320 335.993 320C291.869 320 255.995 355.875 255.995 400S291.869 480 335.993 480H559.988C601.737 480.125 636.486 448.125 639.736 406.5C643.111 364.875 613.861 327.75 572.612 321.25ZM80 96C71.125 96 64 103.125 64 112V272C64 280.875 71.125 288 80 288S95.999 280.875 95.999 272V112C95.999 103.125 88.874 96 80 96ZM143.998 96C135.123 96 127.998 103.125 127.998 112V272C127.998 280.875 135.123 288 143.998 288C152.873 288 159.998 280.875 159.998 272V112C159.998 103.125 152.873 96 143.998 96ZM207.996 96C199.122 96 191.997 103.125 191.997 112V272C191.997 280.875 199.122 288 207.996 288C216.871 288 223.996 280.875 223.996 272V112C223.996 103.125 216.871 96 207.996 96Z" />
        </Icon>
    </>
}