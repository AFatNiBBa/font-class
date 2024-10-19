
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-large-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=duotone user-large-slash}
 * @preview ![user-large-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCAxNDRDNDY0IDY0LjQ3MyAzOTkuNTMzIDAgMzIwIDBDMjUwLjM2MyAwIDE5Mi43MTEgNDkuNTcgMTc5LjM5MSAxMTUuMjgxTDM4MS4yOTMgMjczLjUzMUM0MzAuMDMzIDI1MC41MzEgNDY0IDIwMS40NzcgNDY0IDE0NFpNNTI5Ljg5OCA1MTEuOTkyTDI4NC45NDMgMzIwSDIyNC4wMDJDMTM1LjYzOSAzMjAgNjQgMzkxLjYzMyA2NCA0ODBDNjQgNDk3LjY3MiA3OC4zMyA1MTIgOTUuOTk4IDUxMkg1NDQuMDAyQzU0NC4wMTYgNTEyIDU0NC4wMjcgNTExLjk5MiA1NDQuMDQxIDUxMS45OTJINTI5Ljg5OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjMwLjgxMSA0NjkuMTAyTDM4LjgxNCA1LjEwOUMzNC40MDcgMS42NzIgMjkuMTg5IDAgMjQuMDMyIDBDMTYuOTA3IDAgOS44NDUgMy4xNTYgNS4xMjYgOS4xODdDLTMuMDYxIDE5LjYyNSAtMS4yNDkgMzQuNzE4IDkuMTg5IDQyLjg5TDYwMS4xODYgNTA2Ljg4M0M2MTEuNjg2IDUxNS4wODYgNjI2Ljc0OSA1MTMuMjExIDYzNC44NzQgNTAyLjgwNUM2NDMuMDYxIDQ5Mi4zNjcgNjQxLjI0OSA0NzcuMjc0IDYzMC44MTEgNDY5LjEwMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function UserLargeSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M464 144C464 64.473 399.533 0 320 0C250.363 0 192.711 49.57 179.391 115.281L381.293 273.531C430.033 250.531 464 201.477 464 144ZM529.898 511.992L284.943 320H224.002C135.639 320 64 391.633 64 480C64 497.672 78.33 512 95.998 512H544.002C544.016 512 544.027 511.992 544.041 511.992H529.898Z" />
            <path d="M630.811 469.102L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" />
        </Icon>
    </>
}