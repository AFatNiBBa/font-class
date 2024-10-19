
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=thin pen-fancy}
 * @preview ![pen-fancy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjcuNDE5IDBDNDA3LjUyMSAwIDM4Ni45NzIgOC4zMDcgMzY5LjI1MiAyOC4zNzVMMTYwLjAwMiAyNTZMOTUuMjQ4IDI3Ny41ODRDNzUuNjQgMjg0LjExOSA2MC4zOTQgMjk5LjcyMyA1NC4zMTYgMzE5LjQ3OUwwLjgzMiA0ODcuNjg0Qy0xLjIxNSA0OTQuMzM2IDAuNTgyIDUwMS41NzQgNS41MDMgNTA2LjQ5Nkg1LjUwNUMxMC40MjUgNTExLjQxOCAxNy42NjYgNTEzLjIxNSAyNC4zMTggNTExLjE2OEwxOTIuNTIzIDQ1Ny42ODZDMjEyLjI3OSA0NTEuNjA3IDIyNy44ODIgNDM2LjM2MSAyMzQuNDE4IDQxNi43NTRMMjU2LjAwMiAzNTJMNDgzLjUwMiAxNDIuNUM1NDguMTg5IDg1LjM0IDQ5MS4xNzcgMCA0MjcuNDE5IDBaTTIxOS4yMzggNDExLjY5NUMyMTQuMzQ3IDQyNi4zNjkgMjAyLjYwMSA0MzcuODQ0IDE4Ny44MTggNDQyLjM5M0wzMC45MTIgNDkyLjRMMTA2LjQ3NCA0MTYuODRDMTEyLjc3OSA0MjAuOTg4IDExOS44OSA0MjQgMTI4LjAwMiA0MjRDMTUwLjA5MyA0MjQgMTY4LjAwMiA0MDYuMDkyIDE2OC4wMDIgMzg0UzE1MC4wOTMgMzQ0IDEyOC4wMDIgMzQ0Uzg4LjAwMiAzNjEuOTA4IDg4LjAwMiAzODRDODguMDAyIDM5Mi4xMTEgOTEuMDEzIDM5OS4yMjMgOTUuMTYyIDQwNS41MjdMMTkuNTk5IDQ4MS4wODhMNjkuNjA5IDMyNC4xODRDNzQuMTU4IDMwOS40IDg1LjYzNCAyOTcuNjU0IDEwMC4zMDYgMjkyLjc2NEwxNjQuMTY4IDI3MS40NzlMMjQwLjUyNSAzNDcuODM2TDIxOS4yMzggNDExLjY5NVpNMTA0LjAwMiAzODRDMTA0LjAwMiAzNzAuNzY2IDExNC43NjkgMzYwIDEyOC4wMDIgMzYwQzE0MS4yMzYgMzYwIDE1Mi4wMDIgMzcwLjc2NiAxNTIuMDAyIDM4NFMxNDEuMjM2IDQwOCAxMjguMDAyIDQwOEMxMTQuNzY5IDQwOCAxMDQuMDAyIDM5Ny4yMzQgMTA0LjAwMiAzODRaTTQ3Mi42NjQgMTMwLjczTDI1MC41NjggMzM1LjI1NEwxNzYuNzQ0IDI2MS40M0wzODEuMjQ2IDM4Ljk2NUMzOTQuNzAxIDIzLjcyNyA0MTAuMjM2IDE2IDQyNy40MTkgMTZDNDU0LjUwNSAxNiA0ODEuNjY2IDM1LjgxNiA0OTIgNjMuMTE5QzQ5Ny4zNTEgNzcuMjU4IDUwMS45ODggMTA0LjgxMiA0NzIuNjY0IDEzMC43M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PenFancy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M427.419 0C407.521 0 386.972 8.307 369.252 28.375L160.002 256L95.248 277.584C75.64 284.119 60.394 299.723 54.316 319.479L0.832 487.684C-1.215 494.336 0.582 501.574 5.503 506.496H5.505C10.425 511.418 17.666 513.215 24.318 511.168L192.523 457.686C212.279 451.607 227.882 436.361 234.418 416.754L256.002 352L483.502 142.5C548.189 85.34 491.177 0 427.419 0ZM219.238 411.695C214.347 426.369 202.601 437.844 187.818 442.393L30.912 492.4L106.474 416.84C112.779 420.988 119.89 424 128.002 424C150.093 424 168.002 406.092 168.002 384S150.093 344 128.002 344S88.002 361.908 88.002 384C88.002 392.111 91.013 399.223 95.162 405.527L19.599 481.088L69.609 324.184C74.158 309.4 85.634 297.654 100.306 292.764L164.168 271.479L240.525 347.836L219.238 411.695ZM104.002 384C104.002 370.766 114.769 360 128.002 360C141.236 360 152.002 370.766 152.002 384S141.236 408 128.002 408C114.769 408 104.002 397.234 104.002 384ZM472.664 130.73L250.568 335.254L176.744 261.43L381.246 38.965C394.701 23.727 410.236 16 427.419 16C454.505 16 481.666 35.816 492 63.119C497.351 77.258 501.988 104.812 472.664 130.73Z" />
        </Icon>
    </>
}