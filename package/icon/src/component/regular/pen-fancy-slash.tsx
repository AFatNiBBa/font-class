
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pen-fancy-slash` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy-slash?s=regular pen-fancy-slash}
 * @preview ![pen-fancy-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuODEgNDY5LjEwMkwzOTcuNDY2IDI4Ni4yMTNMNTQ3LjA5NSAxNTAuNzVDNjA4LjQ3IDk2LjM3NSA1NjQuMDk1IDAgNDg4Ljg0NSAwQzQ2NS4zNDUgMCA0NDEuOTcgOS42MjUgNDI1LjA5NSAyOC43NUwyNzcuMjg0IDE5Mi4wMThMMzguODE0IDUuMTA5QzM0LjQwNyAxLjY3MiAyOS4xODkgMCAyNC4wMzIgMEMxNi45MDcgMCA5Ljg0NSAzLjE1NiA1LjEyNiA5LjE4OEMtMy4wNjEgMTkuNjI1IC0xLjI0OSAzNC43MTcgOS4xODkgNDIuODg5TDYwMS4xODUgNTA2Ljg4M0M2MTEuNjg1IDUxNS4wODYgNjI2Ljc0NyA1MTMuMjExIDYzNC44NzIgNTAyLjgwNUM2NDMuMDYgNDkyLjM2NyA2NDEuMjQ3IDQ3Ny4yNzMgNjMwLjgxIDQ2OS4xMDJaTTMxNS4xNTkgMjIxLjcwMUw0NjEuMDg3IDYwLjUwOEM0NjguMjA0IDUyLjQ0MSA0NzguMDYyIDQ4IDQ4OC44NDUgNDhDNTA4LjM0NyA0OCA1MjAuNzEgNjIuMzUgNTI1LjM3IDc0LjYzOUM1MjguNjgxIDgzLjM2OSA1MzEuNzcxIDEwMC4xOTkgNTE0Ljg4IDExNS4xNjZMMzU5LjEzNCAyNTYuMTY4TDMxNS4xNTkgMjIxLjcwMVpNMjkwLjk1MiAzMjQuODkxTDI5MC4zMDggMzI2LjgyTDI2My44NDUgNDA2LjIwOUwxNTIuOTk3IDQ0NS42MjdMMTk4Ljg1NSAzOTkuNzdDMTk5LjI1NSAzOTkuNzg5IDE5OS41OTMgNDAwIDE5OS45OTkgNDAwQzIxMy4yNTUgNDAwIDIyMy45OTkgMzg5LjI1NCAyMjMuOTk5IDM3NkMyMjMuOTk5IDM2Mi43NDQgMjEzLjI1NSAzNTIgMTk5Ljk5OSAzNTJDMTg2Ljc0NSAzNTIgMTc1Ljk5OSAzNjIuNzQ0IDE3NS45OTkgMzc2QzE3NS45OTkgMzc2LjQwNiAxNzYuMjEgMzc2Ljc0NCAxNzYuMjMgMzc3LjE0NUwxMzAuMzM5IDQyMy4wMzVMMTY5Ljc1NSAzMTEuOTk4TDI0My4zNjMgMjg3LjQyNkwxOTguMDgzIDI1MS45MzhMMTQ4LjA4MSAyNjguNjI5QzEzNy45MzcgMjcyLjAxNiAxMjkuOTc4IDI3OS45NzkgMTI2LjU5NSAyOTAuMTI1TDY1Ljk5NyA0NjAuODAzQzYxLjMzNyA0NzQuNzc5IDY0Ljk3NiA0OTAuMTg5IDc1LjM5NCA1MDAuNjA3QzgyLjgwNiA1MDguMDIgOTIuNzQ3IDUxMiAxMDIuOTAyIDUxMkMxMDcuMDE5IDUxMiAxMTEuMTcxIDUxMS4zNDYgMTE1LjIwMiA1MTBMMjg1LjcyNiA0NDkuMzczQzI5NS44NzQgNDQ1Ljk4OCAzMDMuODM3IDQzOC4wMjMgMzA3LjIyIDQyNy44NzVMMzMxLjExMSAzNTYuMjAzTDI5MC4xOTcgMzI0LjEzM0wyOTAuOTUyIDMyNC44OTFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PenFancySlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.81 469.102L397.466 286.213L547.095 150.75C608.47 96.375 564.095 0 488.845 0C465.345 0 441.97 9.625 425.095 28.75L277.284 192.018L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM315.159 221.701L461.087 60.508C468.204 52.441 478.062 48 488.845 48C508.347 48 520.71 62.35 525.37 74.639C528.681 83.369 531.771 100.199 514.88 115.166L359.134 256.168L315.159 221.701ZM290.952 324.891L290.308 326.82L263.845 406.209L152.997 445.627L198.855 399.77C199.255 399.789 199.593 400 199.999 400C213.255 400 223.999 389.254 223.999 376C223.999 362.744 213.255 352 199.999 352C186.745 352 175.999 362.744 175.999 376C175.999 376.406 176.21 376.744 176.23 377.145L130.339 423.035L169.755 311.998L243.363 287.426L198.083 251.938L148.081 268.629C137.937 272.016 129.978 279.979 126.595 290.125L65.997 460.803C61.337 474.779 64.976 490.189 75.394 500.607C82.806 508.02 92.747 512 102.902 512C107.019 512 111.171 511.346 115.202 510L285.726 449.373C295.874 445.988 303.837 438.023 307.22 427.875L331.111 356.203L290.197 324.133L290.952 324.891Z" />
        </Icon>
    </>
}