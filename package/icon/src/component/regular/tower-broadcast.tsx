
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tower-broadcast` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tower-broadcast?s=regular tower-broadcast}
 * @preview ![tower-broadcast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNjQuMDAyQzI1Mi42NTQgNjQuMDAyIDIyNCA5Mi42NTQgMjI0IDEyOC4wMDJDMjI0IDE1NC44NDUgMjQwLjU2NCAxNzcuNzUxIDI2NCAxODcuMjU1VjQ4OEMyNjQgNTAxLjI1IDI3NC43NSA1MTIgMjg4IDUxMlMzMTIgNTAxLjI1IDMxMiA0ODhWMTg3LjI1NUMzMzUuNDM2IDE3Ny43NTEgMzUyIDE1NC44NDUgMzUyIDEyOC4wMDJDMzUyIDkyLjY1NCAzMjMuMzQ2IDY0LjAwMiAyODggNjQuMDAyWk02NC4zMjggMy4wMDJDNTIuNzY2IC0zLjM3MyAzOC4xMjUgMC43ODMgMzEuNzAzIDEyLjM3N0MxMC45NjkgNDkuODQ2IDAgOTIuNDA4IDAgMTM1LjQzOUMwIDE3Mi42NTggNy44NzUgMjA4LjUzMyAyMy4zOTEgMjQyLjA5NUMyNy40NTMgMjUwLjg0NSAzNi4xMjUgMjU2LjAwMSA0NS4xODggMjU2LjAwMUM0OC41NjMgMjU2LjAwMSA1MS45ODQgMjU1LjI4MiA1NS4yNSAyNTMuNzgyQzY3LjI4MSAyNDguMjIgNzIuNTE2IDIzMy45MzkgNjYuOTUzIDIyMS45MDdDNTQuMzc1IDE5NC43NTEgNDggMTY1LjY1OCA0OCAxMzUuNDM5QzQ4IDEwMC41MzMgNTYuODkxIDY2LjAwMiA3My43MDMgMzUuNjI3QzgwLjEyNSAyNC4wMzMgNzUuOTIyIDkuNDA4IDY0LjMyOCAzLjAwMlpNMTYwLjg3NSA1OS4wMDJDMTQ5LjMxMiA1Mi41OTYgMTM0LjY3MiA1Ni43NTIgMTI4LjI1IDY4LjM3N0MxMTcuNjI1IDg3LjU5NiAxMTIgMTA5LjQwOCAxMTIgMTMxLjQzOUMxMTIgMTUwLjQ3IDExNi4wMzEgMTY4Ljg3NiAxMjMuOTg0IDE4Ni4wNjRDMTI4LjAzMSAxOTQuODQ1IDEzNi43MTkgMjAwLjAwMSAxNDUuNzgxIDIwMC4wMDFDMTQ5LjE1NiAyMDAuMDAxIDE1Mi41NzggMTk5LjI4MyAxNTUuODI4IDE5Ny43ODNDMTY3Ljg1OSAxOTIuMjIgMTczLjEwOSAxNzcuOTcgMTY3LjU0NyAxNjUuOTM5QzE2Mi41NDcgMTU1LjA5NSAxNjAgMTQzLjQ3IDE2MCAxMzEuNDM5QzE2MCAxMTcuNTAyIDE2My41NDcgMTAzLjc1MiAxNzAuMjUgOTEuNjI3QzE3Ni42NzIgODAuMDMzIDE3Mi40NjkgNjUuNDA4IDE2MC44NzUgNTkuMDAyWk01NTIuNjA5IDEzLjkwOEM1NDcuMDMxIDEuOTA4IDUzMi43MzQgLTMuMzQyIDUyMC43NSAyLjIyMUM1MDguNzE5IDcuNzgzIDUwMy40ODQgMjIuMDY1IDUwOS4wNDcgMzQuMDk2QzUyMS42MjUgNjEuMjUyIDUyOCA5MC4zNDYgNTI4IDEyMC41NjRDNTI4IDE1NS40NyA1MTkuMTA5IDE5MC4wMDEgNTAyLjI5NyAyMjAuMzc2QzQ5NS44NzUgMjMxLjk3IDUwMC4wNzggMjQ2LjU5NSA1MTEuNjcyIDI1My4wMDFDNTE1LjM1OSAyNTUuMDMyIDUxOS4zNDQgMjU2LjAwMSA1MjMuMjgxIDI1Ni4wMDFDNTMxLjcxOSAyNTYuMDAxIDUzOS45MjIgMjUxLjUzMiA1NDQuMjk3IDI0My42MjZDNTY1LjAzMSAyMDYuMTU4IDU3NiAxNjMuNTk1IDU3NiAxMjAuNTY0QzU3NiA4My4zNDYgNTY4LjEyNSA0Ny40NzEgNTUyLjYwOSAxMy45MDhaTTQyMC4xNzIgNTguMjIxQzQwOC4xNDEgNjMuNzgzIDQwMi44OTEgNzguMDMzIDQwOC40NTMgOTAuMDY0QzQxMy40NTMgMTAwLjkwOCA0MTYgMTEyLjUzMyA0MTYgMTI0LjU2NEM0MTYgMTM4LjUwMiA0MTIuNDUzIDE1Mi4yNTIgNDA1Ljc1IDE2NC4zNzZDMzk5LjMyOCAxNzUuOTcgNDAzLjUzMSAxOTAuNTk1IDQxNS4xMjUgMTk3LjAwMUM0MTguODEzIDE5OS4wMzMgNDIyLjc5NyAyMDAuMDAxIDQyNi43MzQgMjAwLjAwMUM0MzUuMTcyIDIwMC4wMDEgNDQzLjM3NSAxOTUuNTMzIDQ0Ny43NSAxODcuNjI2QzQ1OC4zNzUgMTY4LjQwOCA0NjQgMTQ2LjU5NSA0NjQgMTI0LjU2NEM0NjQgMTA1LjUzMyA0NTkuOTY5IDg3LjEyNyA0NTIuMDE2IDY5LjkzOUM0NDYuNDUzIDU3Ljg3NyA0MzIuMTQxIDUyLjY4OSA0MjAuMTcyIDU4LjIyMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TowerBroadcast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 64.002C252.654 64.002 224 92.654 224 128.002C224 154.845 240.564 177.751 264 187.255V488C264 501.25 274.75 512 288 512S312 501.25 312 488V187.255C335.436 177.751 352 154.845 352 128.002C352 92.654 323.346 64.002 288 64.002ZM64.328 3.002C52.766 -3.373 38.125 0.783 31.703 12.377C10.969 49.846 0 92.408 0 135.439C0 172.658 7.875 208.533 23.391 242.095C27.453 250.845 36.125 256.001 45.188 256.001C48.563 256.001 51.984 255.282 55.25 253.782C67.281 248.22 72.516 233.939 66.953 221.907C54.375 194.751 48 165.658 48 135.439C48 100.533 56.891 66.002 73.703 35.627C80.125 24.033 75.922 9.408 64.328 3.002ZM160.875 59.002C149.312 52.596 134.672 56.752 128.25 68.377C117.625 87.596 112 109.408 112 131.439C112 150.47 116.031 168.876 123.984 186.064C128.031 194.845 136.719 200.001 145.781 200.001C149.156 200.001 152.578 199.283 155.828 197.783C167.859 192.22 173.109 177.97 167.547 165.939C162.547 155.095 160 143.47 160 131.439C160 117.502 163.547 103.752 170.25 91.627C176.672 80.033 172.469 65.408 160.875 59.002ZM552.609 13.908C547.031 1.908 532.734 -3.342 520.75 2.221C508.719 7.783 503.484 22.065 509.047 34.096C521.625 61.252 528 90.346 528 120.564C528 155.47 519.109 190.001 502.297 220.376C495.875 231.97 500.078 246.595 511.672 253.001C515.359 255.032 519.344 256.001 523.281 256.001C531.719 256.001 539.922 251.532 544.297 243.626C565.031 206.158 576 163.595 576 120.564C576 83.346 568.125 47.471 552.609 13.908ZM420.172 58.221C408.141 63.783 402.891 78.033 408.453 90.064C413.453 100.908 416 112.533 416 124.564C416 138.502 412.453 152.252 405.75 164.376C399.328 175.97 403.531 190.595 415.125 197.001C418.813 199.033 422.797 200.001 426.734 200.001C435.172 200.001 443.375 195.533 447.75 187.626C458.375 168.408 464 146.595 464 124.564C464 105.533 459.969 87.127 452.016 69.939C446.453 57.877 432.141 52.689 420.172 58.221Z" />
        </Icon>
    </>
}