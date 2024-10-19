
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pie` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pie?s=duotone pie}
 * @preview ![pie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyOC4wNTUgMzAyLjM4M0w0ODYuNzc3IDQyNi4xMjVDNDgyLjUyNyA0MzkuMTI1IDQ3MC4yNzcgNDQ4IDQ1Ni41MjcgNDQ4SDExOC42NTJDMTA0Ljc3NyA0NDggOTIuNjUyIDQzOS4xMjUgODguMjc3IDQyNi4xMjVMNDcgMzAyLjM4M0M2OS4zMiAyOTguODc5IDgzLjY2NCAyODguOTAyIDkzLjQwMiAyODEuNjI1QzEwMi41MjcgMjc0Ljc1IDEwNi4yNzcgMjcyIDExNy4wMjcgMjcyQzEyNy42NTIgMjcyIDEzMS40MDIgMjc0Ljc1IDE0MC41MjcgMjgxLjYyNUMxNTIuNDAyIDI5MC41IDE3MC40MDIgMzA0IDIwMi40MDIgMzA0UzI1Mi40MDIgMjkwLjUgMjY0LjI3NyAyODEuNjI1QzI3My4yNzcgMjc0Ljc1IDI3Ny4xNTIgMjcyIDI4Ny43NzcgMjcyUzMwMi4xNTIgMjc0Ljc1IDMxMS4xNTIgMjgxLjYyNUMzMjMuMTUyIDI5MC41IDM0MS4wMjcgMzA0IDM3My4wMjcgMzA0UzQyMy4wMjcgMjkwLjUgNDM0LjkwMiAyODEuNjI1QzQ0My45MDIgMjc0Ljc1IDQ0Ny42NTIgMjcyIDQ1OC40MDIgMjcyQzQ2OS4wMjcgMjcyIDQ3Mi42NTIgMjc0Ljc1IDQ4MS43NzcgMjgxLjYyNUM0OTEuNDEyIDI4OC45MDIgNTA1LjczOCAyOTguODgxIDUyOC4wNTUgMzAyLjM4M1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTQ0IDI0MEM1MzcuNSAyNDAgNTMzLjYyNSAyMzguNzUgNTI5LjUgMjM2LjVDNDk0Ljg3NSAxMzYuMTI1IDQwMC4xMjUgNjQgMjg4IDY0UzgxIDEzNi4yNSA0Ni41IDIzNi41QzQyLjM3NSAyMzguODc1IDM4LjUgMjQwIDMyIDI0MEMxNC4zNzUgMjQwIDAgMjU0LjM3NSAwIDI3MlMxNC4zNzUgMzA0IDMyIDMwNEM2NCAzMDQgODIgMjkwLjUgOTMuODc1IDI4MS42MjVDMTAzIDI3NC43NSAxMDYuNzUgMjcyIDExNy41IDI3MkMxMjguMTI1IDI3MiAxMzEuODc1IDI3NC43NSAxNDEgMjgxLjYyNUMxNTIuODc1IDI5MC41IDE3MC44NzUgMzA0IDIwMi44NzUgMzA0UzI1Mi44NzUgMjkwLjUgMjY0Ljc1IDI4MS42MjVDMjczLjc1IDI3NC43NSAyNzcuNjI1IDI3MiAyODguMjUgMjcyUzMwMi42MjUgMjc0Ljc1IDMxMS42MjUgMjgxLjYyNUMzMjMuNjI1IDI5MC41IDM0MS41IDMwNCAzNzMuNSAzMDRTNDIzLjUgMjkwLjUgNDM1LjM3NSAyODEuNjI1QzQ0NC4zNzUgMjc0Ljc1IDQ0OC4xMjUgMjcyIDQ1OC44NzUgMjcyQzQ2OS41IDI3MiA0NzMuMTI1IDI3NC43NSA0ODIuMjUgMjgxLjYyNUM0OTQgMjkwLjUgNTEyIDMwNCA1NDQgMzA0QzU2MS42MjUgMzA0IDU3NiAyODkuNjI1IDU3NiAyNzJTNTYxLjYyNSAyNDAgNTQ0IDI0MFpNMjA2LjI1IDE1MS4xMjVMMTkwLjI1IDE4My4xMjVDMTgwLjg3NSAyMDIuMDAxIDE1Mi4xMjUgMTg4IDE2MS43NSAxNjguODc1TDE3Ny43NSAxMzYuODc1QzE4Ny4yNSAxMTguMDAxIDIxNS43NSAxMzIuMjUgMjA2LjI1IDE1MS4xMjVaTTMwNCAxNzZDMzA0IDE5Ny4xMjUgMjcyIDE5Ny4xMjUgMjcyIDE3NlYxNDRDMjcyIDEyMi44NzUgMzA0IDEyMi44NzUgMzA0IDE0NFYxNzZaTTM4NS43NSAxODMuMTI1TDM2OS43NSAxNTEuMTI1QzM2MC4yNSAxMzIuMjUgMzg4Ljg3NSAxMTguMDAxIDM5OC4yNSAxMzYuODc1TDQxNC4yNSAxNjguODc1QzQyMy44NzUgMTg3Ljg3NSAzOTUuMTI1IDIwMi4wMDEgMzg1Ljc1IDE4My4xMjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M528.055 302.383L486.777 426.125C482.527 439.125 470.277 448 456.527 448H118.652C104.777 448 92.652 439.125 88.277 426.125L47 302.383C69.32 298.879 83.664 288.902 93.402 281.625C102.527 274.75 106.277 272 117.027 272C127.652 272 131.402 274.75 140.527 281.625C152.402 290.5 170.402 304 202.402 304S252.402 290.5 264.277 281.625C273.277 274.75 277.152 272 287.777 272S302.152 274.75 311.152 281.625C323.152 290.5 341.027 304 373.027 304S423.027 290.5 434.902 281.625C443.902 274.75 447.652 272 458.402 272C469.027 272 472.652 274.75 481.777 281.625C491.412 288.902 505.738 298.881 528.055 302.383Z" />
            <path d="M544 240C537.5 240 533.625 238.75 529.5 236.5C494.875 136.125 400.125 64 288 64S81 136.25 46.5 236.5C42.375 238.875 38.5 240 32 240C14.375 240 0 254.375 0 272S14.375 304 32 304C64 304 82 290.5 93.875 281.625C103 274.75 106.75 272 117.5 272C128.125 272 131.875 274.75 141 281.625C152.875 290.5 170.875 304 202.875 304S252.875 290.5 264.75 281.625C273.75 274.75 277.625 272 288.25 272S302.625 274.75 311.625 281.625C323.625 290.5 341.5 304 373.5 304S423.5 290.5 435.375 281.625C444.375 274.75 448.125 272 458.875 272C469.5 272 473.125 274.75 482.25 281.625C494 290.5 512 304 544 304C561.625 304 576 289.625 576 272S561.625 240 544 240ZM206.25 151.125L190.25 183.125C180.875 202.001 152.125 188 161.75 168.875L177.75 136.875C187.25 118.001 215.75 132.25 206.25 151.125ZM304 176C304 197.125 272 197.125 272 176V144C272 122.875 304 122.875 304 144V176ZM385.75 183.125L369.75 151.125C360.25 132.25 388.875 118.001 398.25 136.875L414.25 168.875C423.875 187.875 395.125 202.001 385.75 183.125Z" />
        </Icon>
    </>
}