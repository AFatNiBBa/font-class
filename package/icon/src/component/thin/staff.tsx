
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `staff` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/staff?s=thin staff}
 * @preview ![staff](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIuMDA0IDBIMzU1Ljc2QzMyNS41MTIgMCAyOTcuNzY0IDE3LjEyMyAyODQuMjY0IDQ0LjI0OEwyNjguMjY2IDc2LjI0NkMyNjQuMjY2IDg0LjExOSAyNjcuNTE2IDkzLjc0NCAyNzUuMzg5IDk3LjYxOUwzMzIuNjM3IDEyNi4yNDJDMzM0LjkzIDEyNy40MDYgMzM3LjM3MSAxMjcuOTU3IDMzOS43NzkgMTI3Ljk1N0MzNDUuNjM5IDEyNy45NTcgMzUxLjMwMSAxMjQuNjk5IDM1NC4xMzUgMTE5LjExN0wzNjUuNjM1IDk1Ljk5NEg0MTYuMDA2VjE3MS43NEwyNTguNzY2IDIxNi43MzZDMjMwLjAxOCAyMjQuOTg2IDIwMy43NyAyNDAuMzU5IDE4Mi42NDUgMjYxLjQ4NEwxNTYuMTQ2IDI4Ny45ODJIMTEyLjAyM0MxMDMuMTUgMjg3Ljk4MiA5Ni4wMjUgMjk1LjEwNyA5Ni4wMjUgMzAzLjk4MlYzNDguMTA0TDcuMDMxIDQzNy4wOThDLTIuMzQ0IDQ0Ni40NzMgLTIuMzQ0IDQ2MS41OTggNy4wMzEgNDcwLjk3MUw0MS4wMjkgNTA0Ljk2OUM0NS43MTcgNTA5LjY1NiA1MS44NCA1MTIgNTcuOTY1IDUxMlM3MC4yMTUgNTA5LjY1NiA3NC45MDIgNTA0Ljk2OUwyNTAuNTE2IDMyOS4zNTVDMjYwLjE0MSAzMTkuNzMgMjcyLjAxNCAzMTIuNzMgMjg1LjEzOSAzMDguOThMMzY5Ljg4MyAyODQuNzMyTDQwMi4xMzEgMzAzLjM1N0M0MDQuNjY0IDMwNC44NTIgNDA3LjQ0NSAzMDUuNTYxIDQxMC4xOTEgMzA1LjU2MUM0MTUuNzExIDMwNS41NjEgNDIxLjA4NCAzMDIuNjk3IDQyNC4wMDYgMjk3LjYwN0w0NDMuNTA0IDI2My43MzRMNDU0LjAwNCAyNjAuNzM0QzQ4OC4yNTIgMjUwLjk4NCA1MTIgMjE5LjYxMSA1MTIgMTgzLjg2M1Y3OS45OTZDNTEyIDM1Ljg3MyA0NzYuMTI3IDAgNDMyLjAwNCAwWk00OTYgMTgzLjg2M0M0OTYgMjEyLjQxMiA0NzcuMDc0IDIzNy41MDQgNDQ5LjYyMSAyNDUuMzQ2TDQzMi44NzMgMjUwLjEzMUw0MTAuMTMzIDI4OS41MDJMMzcyLjAwOCAyNjcuNDgyTDI4MC43MTcgMjkzLjYwNEMyNjUuMDI5IDI5OC4wOTIgMjUwLjc0MiAzMDYuNTAyIDIzOS4yMDMgMzE4LjA0MUw2My41OSA0OTMuNjU0QzYwLjQ4NCA0OTYuNzYgNTUuNDQ5IDQ5Ni43NiA1Mi4zNDQgNDkzLjY1NEwxOC4zNDQgNDU5LjY1NEMxNS4yNCA0NTYuNTUxIDE1LjI0IDQ1MS41MTYgMTguMzQ0IDQ0OC40MTJMMTEyLjAyNSAzNTQuNzNMMTEyLjAyMyAzMDMuOTgySDE2Mi43NzVMMTkzLjk1OSAyNzIuNzk5QzIxMy4wNTkgMjUzLjY5NyAyMzYuOTk2IDIzOS42MjkgMjYzLjE2OCAyMzIuMTE5TDQyMC40MDggMTg3LjEyM0M0MjcuMjczIDE4NS4xNTggNDMyLjAwNiAxNzguODgzIDQzMi4wMDYgMTcxLjc0Vjk1Ljk5NEM0MzIuMDA2IDg3LjE1OCA0MjQuODQyIDc5Ljk5NCA0MTYuMDA2IDc5Ljk5NEgzNjUuNjIxQzM1OS41NTcgNzkuOTk0IDM1NC4wMTIgODMuNDI0IDM1MS4zMDUgODguODU0TDMzOS43OTMgMTExLjkzMkwyODIuNTc2IDgzLjRMMjk4LjYxOSA1MS4zMTRDMzA5LjQ0MSAyOS42NzIgMzMxLjU2MyAxNiAzNTUuNzYgMTZINDMyLjAwNEM0NjcuMzQ4IDE2IDQ5NiA0NC42NTIgNDk2IDc5Ljk5NlYxODMuODYzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Staff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M432.004 0H355.76C325.512 0 297.764 17.123 284.264 44.248L268.266 76.246C264.266 84.119 267.516 93.744 275.389 97.619L332.637 126.242C334.93 127.406 337.371 127.957 339.779 127.957C345.639 127.957 351.301 124.699 354.135 119.117L365.635 95.994H416.006V171.74L258.766 216.736C230.018 224.986 203.77 240.359 182.645 261.484L156.146 287.982H112.023C103.15 287.982 96.025 295.107 96.025 303.982V348.104L7.031 437.098C-2.344 446.473 -2.344 461.598 7.031 470.971L41.029 504.969C45.717 509.656 51.84 512 57.965 512S70.215 509.656 74.902 504.969L250.516 329.355C260.141 319.73 272.014 312.73 285.139 308.98L369.883 284.732L402.131 303.357C404.664 304.852 407.445 305.561 410.191 305.561C415.711 305.561 421.084 302.697 424.006 297.607L443.504 263.734L454.004 260.734C488.252 250.984 512 219.611 512 183.863V79.996C512 35.873 476.127 0 432.004 0ZM496 183.863C496 212.412 477.074 237.504 449.621 245.346L432.873 250.131L410.133 289.502L372.008 267.482L280.717 293.604C265.029 298.092 250.742 306.502 239.203 318.041L63.59 493.654C60.484 496.76 55.449 496.76 52.344 493.654L18.344 459.654C15.24 456.551 15.24 451.516 18.344 448.412L112.025 354.73L112.023 303.982H162.775L193.959 272.799C213.059 253.697 236.996 239.629 263.168 232.119L420.408 187.123C427.273 185.158 432.006 178.883 432.006 171.74V95.994C432.006 87.158 424.842 79.994 416.006 79.994H365.621C359.557 79.994 354.012 83.424 351.305 88.854L339.793 111.932L282.576 83.4L298.619 51.314C309.441 29.672 331.563 16 355.76 16H432.004C467.348 16 496 44.652 496 79.996V183.863Z" />
        </Icon>
    </>
}