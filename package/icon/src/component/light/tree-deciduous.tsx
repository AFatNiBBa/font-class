
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tree-deciduous` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-deciduous?s=light tree-deciduous}
 * @preview ![tree-deciduous](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjM1QzQ4NS4zNzUgMjE5IDQ1NCAyMDAgNDU0IDIwMEM0NjIuNjI1IDE4NCA0NjUuODc1IDE2Ny41IDQ2My41IDE1MC41UzQ1NC4zNzUgMTE4Ljg3NSA0NDMgMTA2LjVTNDE3Ljg3NSA4NiA0MDEuNSA4MkMzOTUuNzAxIDgwLjU4MiAzODkuODg3IDc5Ljg3MSAzODQuMDU1IDc5Ljg3MUMzNzMuNDIyIDc5Ljg3MSAzNjIuNzM2IDgyLjIzNiAzNTIgODdDMzQ5LjM3NSA2Mi4zNzUgMzM4Ljg3NSA0MS42MjUgMzIwLjUgMjVTMjgwLjYyNSAwIDI1NiAwUzIwOS44NzUgOC4zNzUgMTkxLjUgMjVTMTYyLjYyNSA2Mi4zNzUgMTYwIDg3QzE0OS4yNjIgODIuMjM2IDEzOC41NzggNzkuODcxIDEyNy45NDUgNzkuODcxQzEyMi4xMTUgNzkuODcxIDExNi4yOTkgODAuNTg0IDExMC41IDgyQzk0LjEyNSA4NiA4MC4zNzUgOTQuMTI1IDY5IDEwNi41UzUwLjg3NSAxMzMuNSA0OC41IDE1MC41UzQ5LjYyNSAxODQgNTkgMjAwQzQxIDIwNy4zNzUgMjYuNjI1IDIxOSAxNiAyMzVTMCAyNjguNjI1IDAgMjg4QzAgMzE0LjYyNSA5LjM3NSAzMzcuMzc1IDI4IDM1NlM2OS4zNzUgMzg0IDk2IDM4NEMxNDEuMTUyIDM4NCAxOTAuMzI2IDM4NCAyNDAgMzg0VjQ5NkMyNDAgNTA0Ljg0NCAyNDcuMTU2IDUxMiAyNTYgNTEyUzI3MiA1MDQuODQ0IDI3MiA0OTZWMzg0QzMyMS4zMjggMzg0IDM3MC40NjMgMzg0IDQxNiAzODRDNDQyLjYyNSAzODQgNDY1LjM3NSAzNzQuNjI1IDQ4NCAzNTZTNTEyIDMxNC42MjUgNTEyIDI4OEM1MTIgMjY4LjYyNSA1MDYuNjI1IDI1MSA0OTYgMjM1Wk00NjEuMzczIDMzMy4zNzFDNDQ4LjY2NCAzNDYuMDggNDM0LjI0NiAzNTIgNDE2IDM1MkgyNzJWMzI2LjYyNUwzMzEuMzEyIDI2Ny4zMTJDMzM3LjU2MiAyNjEuMDYyIDMzNy41NjIgMjUwLjkzNyAzMzEuMzEyIDI0NC42ODhTMzE0LjkzNyAyMzguNDM4IDMwOC42ODggMjQ0LjY4OEwyNzIgMjgxLjM3NVYxNDRDMjcyIDEzNS4xNTYgMjY0Ljg0NCAxMjggMjU2IDEyOFMyNDAgMTM1LjE1NiAyNDAgMTQ0VjIyNi4zNzVMMjA0LjUgMTgyQzE5OC45NjkgMTc1LjE1NiAxODguOTIyIDE3NCAxODIgMTc5LjVDMTc1LjEwOSAxODUuMDMxIDE3My45ODQgMTk1LjA5NCAxNzkuNSAyMDJMMjQwIDI3Ny42MjVWMzUySDk2Qzc3Ljc1NCAzNTIgNjMuMzM2IDM0Ni4wOCA1MC42MjcgMzMzLjM3MUMzNy45MiAzMjAuNjY0IDMyIDMwNi4yNDYgMzIgMjg4QzMyIDI3NS4wNDcgMzUuNDg2IDI2My41MDIgNDIuNjU4IDI1Mi43MDFDNDkuNjcyIDI0Mi4xNDEgNTguOTg0IDIzNC41ODggNzEuMTMzIDIyOS42MTFMMTA1LjI0OCAyMTUuNjMzTDg2LjYwOSAxODMuODIyQzgwLjg1MiAxNzMuOTkyIDc4LjgxMiAxNjQuODEyIDgwLjE5MyAxNTQuOTI2QzgxLjY4OSAxNDQuMjEzIDg1LjYxOSAxMzUuNzA1IDkyLjU1OSAxMjguMTU0Qzk5LjcwMSAxMjAuMzg1IDEwNy44MTYgMTE1LjU5NiAxMTguMDk0IDExMy4wODZDMTIxLjQzOCAxMTIuMjcgMTI0LjY2IDExMS44NzEgMTI3Ljk0NSAxMTEuODcxQzEzNC4xNDEgMTExLjg3MSAxNDAuMzgzIDExMy4zMDUgMTQ3LjAyNSAxMTYuMjVMMTg3LjE2NiAxMzQuMDU3TDE5MS44MiA5MC4zOTFDMTkzLjYwNyA3My42MTUgMjAwLjUyNSA1OS45ODYgMjEyLjk3MSA0OC43MjlDMjI1LjU4NCAzNy4zMTQgMjM5LjI1OCAzMiAyNTYgMzJTMjg2LjQxNiAzNy4zMTQgMjk5LjAzMSA0OC43MjlDMzExLjQ3NSA1OS45ODYgMzE4LjM5MyA3My42MTUgMzIwLjE4IDkwLjM5MUwzMjQuODM2IDEzNC4wNTdMMzY0Ljk3NyAxMTYuMjVDMzcxLjYxOSAxMTMuMzA1IDM3Ny44NTkgMTExLjg3MSAzODQuMDU5IDExMS44NzFDMzg3LjM0MiAxMTEuODcxIDM5MC41NjIgMTEyLjI3IDM5My45MDYgMTEzLjA4NkM0MDQuMTg0IDExNS41OTYgNDEyLjI5OSAxMjAuMzg1IDQxOS40NDEgMTI4LjE1NEM0MjYuMzgxIDEzNS43MDUgNDMwLjMxMSAxNDQuMjEzIDQzMS44MDkgMTU0LjkyNkM0MzMuMjExIDE2NC45NzUgNDMxLjI1OCAxNzQuNzUyIDQyNS44MzIgMTg0LjgxNEw0MTEuNDQ1IDIxMS41N0w0MzcuMzk4IDIyNy4zNTVDNDQ5LjM5MSAyMzQuNjQ4IDQ2NS40NTcgMjQ2Ljg1MiA0NjkuMzQyIDI1Mi43MDFDNDc2LjUxNCAyNjMuNTAyIDQ4MCAyNzUuMDQ3IDQ4MCAyODhDNDgwIDMwNi4yNDYgNDc0LjA4MiAzMjAuNjY0IDQ2MS4zNzMgMzMzLjM3MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TreeDeciduous(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 235C485.375 219 454 200 454 200C462.625 184 465.875 167.5 463.5 150.5S454.375 118.875 443 106.5S417.875 86 401.5 82C395.701 80.582 389.887 79.871 384.055 79.871C373.422 79.871 362.736 82.236 352 87C349.375 62.375 338.875 41.625 320.5 25S280.625 0 256 0S209.875 8.375 191.5 25S162.625 62.375 160 87C149.262 82.236 138.578 79.871 127.945 79.871C122.115 79.871 116.299 80.584 110.5 82C94.125 86 80.375 94.125 69 106.5S50.875 133.5 48.5 150.5S49.625 184 59 200C41 207.375 26.625 219 16 235S0 268.625 0 288C0 314.625 9.375 337.375 28 356S69.375 384 96 384C141.152 384 190.326 384 240 384V496C240 504.844 247.156 512 256 512S272 504.844 272 496V384C321.328 384 370.463 384 416 384C442.625 384 465.375 374.625 484 356S512 314.625 512 288C512 268.625 506.625 251 496 235ZM461.373 333.371C448.664 346.08 434.246 352 416 352H272V326.625L331.312 267.312C337.562 261.062 337.562 250.937 331.312 244.688S314.937 238.438 308.688 244.688L272 281.375V144C272 135.156 264.844 128 256 128S240 135.156 240 144V226.375L204.5 182C198.969 175.156 188.922 174 182 179.5C175.109 185.031 173.984 195.094 179.5 202L240 277.625V352H96C77.754 352 63.336 346.08 50.627 333.371C37.92 320.664 32 306.246 32 288C32 275.047 35.486 263.502 42.658 252.701C49.672 242.141 58.984 234.588 71.133 229.611L105.248 215.633L86.609 183.822C80.852 173.992 78.812 164.812 80.193 154.926C81.689 144.213 85.619 135.705 92.559 128.154C99.701 120.385 107.816 115.596 118.094 113.086C121.438 112.27 124.66 111.871 127.945 111.871C134.141 111.871 140.383 113.305 147.025 116.25L187.166 134.057L191.82 90.391C193.607 73.615 200.525 59.986 212.971 48.729C225.584 37.314 239.258 32 256 32S286.416 37.314 299.031 48.729C311.475 59.986 318.393 73.615 320.18 90.391L324.836 134.057L364.977 116.25C371.619 113.305 377.859 111.871 384.059 111.871C387.342 111.871 390.562 112.27 393.906 113.086C404.184 115.596 412.299 120.385 419.441 128.154C426.381 135.705 430.311 144.213 431.809 154.926C433.211 164.975 431.258 174.752 425.832 184.814L411.445 211.57L437.398 227.355C449.391 234.648 465.457 246.852 469.342 252.701C476.514 263.502 480 275.047 480 288C480 306.246 474.082 320.664 461.373 333.371Z" />
        </Icon>
    </>
}