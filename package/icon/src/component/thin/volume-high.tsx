
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume-high` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-high?s=thin volume-high}
 * @preview ![volume-high](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDEuMzc1IDM0LjkzMkMyOTcuMDg2IDMyLjk2MyAyOTIuNTIgMzIgMjg3Ljk4NCAzMkMyODAuNDg4IDMyIDI3My4wODYgMzQuNjMxIDI2Ny4xODggMzkuNzEzTDE2NC4yMDMgMTU5Ljk5NkgzMkMxNC4zMjggMTU5Ljk5NiAwIDE3NC4zMjIgMCAxOTEuOTk2VjMxOS45OThDMCAzMzcuNjcgMTQuMzI4IDM1MS45OTggMzIgMzUxLjk5OEgxNjQuMjAzTDI2Ny4xODggNDcyLjI4MUMyNzMuMDk0IDQ3Ny4zNzUgMjgwLjUgNDgwIDI4OCA0ODBDMjkyLjUzMSA0ODAgMjk3LjA5NCA0NzkuMDMxIDMwMS4zNzUgNDc3LjA2MkMzMTIuNzE5IDQ3MS44NDQgMzIwIDQ2MC41IDMyMCA0NDhWNjMuOTk1QzMyMCA1MS40OTQgMzEyLjcxOSA0MC4xNSAzMDEuMzc1IDM0LjkzMlpNMzA0IDQ0OEMzMDQgNDU0LjIyMiAzMDAuMzQ0IDQ1OS45MjQgMjk0LjY5MSA0NjIuNTI1QzI5Mi41NjIgNDYzLjUwNCAyOTAuMzEyIDQ2NCAyODggNDY0QzI4NC41MjMgNDY0IDI4MS4xNTYgNDYyLjg2NyAyNzguNDE4IDQ2MC43OTNMMTc2LjM1NSAzNDEuNTkyTDE3MS41NjYgMzM1Ljk5OEgxNjQuMjAzSDMyQzIzLjE3NiAzMzUuOTk4IDE2IDMyOC44MiAxNiAzMTkuOTk4VjE5MS45OTZDMTYgMTgzLjE3NCAyMy4xNzYgMTc1Ljk5NiAzMiAxNzUuOTk2SDE2NC4yMDNIMTcxLjU2NkwxNzYuMzU1IDE3MC40MDJMMjc4LjQxNCA1MS4yMDNDMjgxLjE1NiA0OS4xMzEgMjg0LjUxNiA0OCAyODcuOTg0IDQ4QzI5MC4zMDkgNDggMjkyLjU3IDQ4LjQ5NiAyOTQuNjg4IDQ5LjQ2N0MzMDAuMzQ0IDUyLjA2OSAzMDQgNTcuNzcyIDMwNCA2My45OTVWNDQ4Wk01NDAuMjE5IDQ1LjUyNkM1MzYuODQ0IDQyLjc0NCA1MzEuNzgxIDQzLjIxMyA1MjguOTY5IDQ2LjY1MUM1MjYuMTU2IDUwLjA1NyA1MjYuNjU2IDU1LjA4OCA1MzAuMDk0IDU3LjkwMUM1ODkuNzgxIDEwNi43NzYgNjI0IDE3OC45OTYgNjI0IDI1NS45OTdTNTg5Ljc4MSA0MDUuMjE4IDUzMC4wOTQgNDU0LjA5M0M1MjYuNjU2IDQ1Ni45MDYgNTI2LjE1NiA0NjEuOTM3IDUyOC45NjkgNDY1LjM0NEM1MzAuNTYzIDQ2Ny4yODEgNTMyLjg0NCA0NjguMjgxIDUzNS4xNTYgNDY4LjI4MUM1MzYuOTM4IDQ2OC4yODEgNTM4Ljc1IDQ2Ny42ODcgNTQwLjIxOSA0NjYuNDY5QzYwMy42MjUgNDE0LjUzIDY0MCAzMzcuODExIDY0MCAyNTUuOTk3UzYwMy42MjUgOTcuNDY0IDU0MC4yMTkgNDUuNTI2Wk00NzguOTY5IDEyMC4zN0M0NzUuNjI1IDExNy41ODkgNDcwLjUzMSAxMTguMDU4IDQ2Ny43MTkgMTIxLjQ5NUM0NjQuOTA2IDEyNC45MDIgNDY1LjQwNiAxMjkuOTMzIDQ2OC44NDQgMTMyLjc0NUM1MDYuNDM4IDE2My41NTggNTI4IDIwOC40OTYgNTI4IDI1NS45OTdTNTA2LjQzOCAzNDguNDM2IDQ2OC44NDQgMzc5LjI0OUM0NjUuNDA2IDM4Mi4wNjEgNDY0LjkwNiAzODcuMDkzIDQ2Ny43MTkgMzkwLjQ5OUM0NjkuMzEzIDM5Mi40MzYgNDcxLjU5NCAzOTMuNDM2IDQ3My45MDYgMzkzLjQzNkM0NzUuNjg4IDM5My40MzYgNDc3LjUgMzkyLjg0MyA0NzguOTY5IDM5MS42MjRDNTIwLjMxMiAzNTcuNzQ4IDU0NCAzMDguMzEgNTQ0IDI1NS45OTdTNTIwLjMxMiAxNTQuMjQ2IDQ3OC45NjkgMTIwLjM3Wk00MDcuMTg4IDE5NS40NjVDNDA0LjM3NSAxOTguODcxIDQwNC44NzUgMjAzLjkzNCA0MDguMzEyIDIwNi43MTVDNDIzLjM3NSAyMTkuMDI4IDQzMiAyMzYuOTk3IDQzMiAyNTUuOTk3UzQyMy4zNzUgMjkyLjk2NiA0MDguMzEyIDMwNS4yNzlDNDA0Ljg3NSAzMDguMDYgNDA0LjM3NSAzMTMuMTIzIDQwNy4xODggMzE2LjUyOUM0MDguNzUgMzE4LjQ2NyA0MTEuMDYzIDMxOS40NjcgNDEzLjM3NSAzMTkuNDY3QzQxNS4xNTYgMzE5LjQ2NyA0MTYuOTY5IDMxOC44NzMgNDE4LjQzOCAzMTcuNjU0QzQzNy4yMTkgMzAyLjMxIDQ0OCAyNzkuODEgNDQ4IDI1NS45OTdTNDM3LjIxOSAyMDkuNjg0IDQxOC40MzggMTk0LjM0QzQxNSAxOTEuNTU5IDQwOS45MzggMTkyLjAyNyA0MDcuMTg4IDE5NS40NjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function VolumeHigh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M301.375 34.932C297.086 32.963 292.52 32 287.984 32C280.488 32 273.086 34.631 267.188 39.713L164.203 159.996H32C14.328 159.996 0 174.322 0 191.996V319.998C0 337.67 14.328 351.998 32 351.998H164.203L267.188 472.281C273.094 477.375 280.5 480 288 480C292.531 480 297.094 479.031 301.375 477.062C312.719 471.844 320 460.5 320 448V63.995C320 51.494 312.719 40.15 301.375 34.932ZM304 448C304 454.222 300.344 459.924 294.691 462.525C292.562 463.504 290.312 464 288 464C284.523 464 281.156 462.867 278.418 460.793L176.355 341.592L171.566 335.998H164.203H32C23.176 335.998 16 328.82 16 319.998V191.996C16 183.174 23.176 175.996 32 175.996H164.203H171.566L176.355 170.402L278.414 51.203C281.156 49.131 284.516 48 287.984 48C290.309 48 292.57 48.496 294.688 49.467C300.344 52.069 304 57.772 304 63.995V448ZM540.219 45.526C536.844 42.744 531.781 43.213 528.969 46.651C526.156 50.057 526.656 55.088 530.094 57.901C589.781 106.776 624 178.996 624 255.997S589.781 405.218 530.094 454.093C526.656 456.906 526.156 461.937 528.969 465.344C530.563 467.281 532.844 468.281 535.156 468.281C536.938 468.281 538.75 467.687 540.219 466.469C603.625 414.53 640 337.811 640 255.997S603.625 97.464 540.219 45.526ZM478.969 120.37C475.625 117.589 470.531 118.058 467.719 121.495C464.906 124.902 465.406 129.933 468.844 132.745C506.438 163.558 528 208.496 528 255.997S506.438 348.436 468.844 379.249C465.406 382.061 464.906 387.093 467.719 390.499C469.313 392.436 471.594 393.436 473.906 393.436C475.688 393.436 477.5 392.843 478.969 391.624C520.312 357.748 544 308.31 544 255.997S520.312 154.246 478.969 120.37ZM407.188 195.465C404.375 198.871 404.875 203.934 408.312 206.715C423.375 219.028 432 236.997 432 255.997S423.375 292.966 408.312 305.279C404.875 308.06 404.375 313.123 407.188 316.529C408.75 318.467 411.063 319.467 413.375 319.467C415.156 319.467 416.969 318.873 418.438 317.654C437.219 302.31 448 279.81 448 255.997S437.219 209.684 418.438 194.34C415 191.559 409.938 192.027 407.188 195.465Z" />
        </Icon>
    </>
}