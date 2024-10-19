
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shop-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shop-slash?s=duotone shop-slash}
 * @preview ![shop-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIzLjU0IDExNS4xMjNMNS40NyAxNDIuMjU2Qy04Ljc4IDE2My41MDUgNi40NyAxOTIuMDA1IDMyLjA5NSAxOTIuMDA1SDEyMS42MzFMMjMuNTQgMTE1LjEyM1pNMzE5Ljk2OSAzODQuMDAySDEyNy45NjlWMjI0LjAwNEg2My45N1Y0ODBDNjMuOTcgNDk3Ljc1IDc4LjIyIDUxMiA5NS45NjkgNTEySDM1MS45NjhDMzY5LjcxOCA1MTIgMzgzLjk2OCA0OTcuNzUgMzgzLjk2OCA0ODBWMzk3LjYxOUwzMTkuOTY5IDM0Ny40NThWMzg0LjAwMlpNMzE5Ljk2OSAyMjUuNDcxTDM4My45NjggMjc1LjYzM1YyMjQuMDA0SDMxOS45NjlWMjI1LjQ3MVpNNTExLjk2OCAzNzUuOTU1TDU3NS45NjggNDI2LjExN1YyMjQuMDA0SDUxMS45NjhWMzc1Ljk1NVpNNjM0LjU5MiAxNDIuMjU2TDU0OS4yMTggMTQuMjU4QzU0My4yMTggNS4yNTggNTMzLjIxOCAwLjAwOCA1MjIuNTkzIDAuMDA4SDExNy4zNDRDMTA2LjcxOSAwLjAwOCA5Ni43MTkgNS4yNTggOTAuNzE5IDE0LjI1OEw3Ni45MjEgMzQuOTc2TDI3Ny4yNyAxOTIuMDA1SDYwNy45NjhDNjMzLjQ2NyAxOTIuMDA1IDY0OC43MTcgMTYzLjUwNSA2MzQuNTkyIDE0Mi4yNTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYzNC44NzQgNTAyLjgwNUM2MjYuNzQ5IDUxMy4yMTEgNjExLjY4NiA1MTUuMDg2IDYwMS4xODYgNTA2Ljg4M0w5LjE4OSA0Mi44OUMtMS4yNDkgMzQuNzE4IC0zLjA2MSAxOS42MjUgNS4xMjYgOS4xODdDOS44NDUgMy4xNTYgMTYuOTA3IDAgMjQuMDMyIDBDMjkuMTg5IDAgMzQuNDA3IDEuNjcyIDM4LjgxNCA1LjEwOUw2MzAuODExIDQ2OS4xMDJDNjQxLjI0OSA0NzcuMjc0IDY0My4wNjEgNDkyLjM2NyA2MzQuODc0IDUwMi44MDVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShopSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M23.54 115.123L5.47 142.256C-8.78 163.505 6.47 192.005 32.095 192.005H121.631L23.54 115.123ZM319.969 384.002H127.969V224.004H63.97V480C63.97 497.75 78.22 512 95.969 512H351.968C369.718 512 383.968 497.75 383.968 480V397.619L319.969 347.458V384.002ZM319.969 225.471L383.968 275.633V224.004H319.969V225.471ZM511.968 375.955L575.968 426.117V224.004H511.968V375.955ZM634.592 142.256L549.218 14.258C543.218 5.258 533.218 0.008 522.593 0.008H117.344C106.719 0.008 96.719 5.258 90.719 14.258L76.921 34.976L277.27 192.005H607.968C633.467 192.005 648.717 163.505 634.592 142.256Z" />
            <path d="M634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805Z" />
        </Icon>
    </>
}