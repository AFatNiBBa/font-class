
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pear` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=thin pear}
 * @preview ![pear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgOEM1MTIgMy40MyA1MDguMjY0IDAgNTA0IDBDNTAxLjk1MyAwIDQ5OS45MDYgMC43ODEgNDk4LjM0NCAyLjM0NEw0NDkuNzcxIDUwLjkxNkM0NDguMDc0IDQ5LjM3NSA0MTcuMjE1IDE2IDM1OS44NTUgMTZDMzIxLjg3MyAxNiAyODMuNjAyIDMxLjI0MiAyNTUuMTc0IDU5Ljc2NEMyMjUuMTA1IDg5LjkzIDE4Ni45NDUgMTEwLjI2NCAxNDUuOTI2IDEyMS41MDZDMTExLjc2IDEzMC44NjkgMCAxODEuNDk0IDAgMzEzLjExOUMwIDQyMy41NyA5MC4wMzMgNTEyIDE5OC42NTQgNTEyQzIzNy41OTYgNTEyIDM1My43MjMgNDkxLjU2MiAzODguOTU1IDM2OC41MjNDNDI1LjM3MSAyNDEuMzM4IDQ5NS43MjMgMjUxLjQzOSA0OTUuNzIzIDE1My43OTdDNDk1LjcyMyAxMjAuMjA1IDQ4My4yMTMgODcuNzQgNDYwLjkzOSA2Mi4zNzNMNTA5LjY1NiAxMy42NTZDNTExLjIxOSAxMi4wOTQgNTEyIDEwLjA0NyA1MTIgOFpNNDc5LjcyMyAxNTMuNzk3QzQ3OS43MjMgMTk4LjMwOSA0NjQuNTY4IDIxNS43NzkgNDQxLjYzMSAyNDIuMjI3QzQxOS41OCAyNjcuNjQ4IDM5Mi4xMzcgMjk5LjI4NyAzNzMuNTc0IDM2NC4xMTlDMzM2LjIzOCA0OTQuNSAyMDQuMjU0IDQ5NiAxOTguNjU0IDQ5NkM5Ny45MzkgNDk2IDE2IDQxMy45NjEgMTYgMzEzLjExOUMxNiAxNzUuMjk5IDE0OC44MTIgMTM3LjMwNSAxNTAuMTU0IDEzNi45MzdDMTk1Ljc3NyAxMjQuNDM0IDIzNS45NTUgMTAxLjcwOSAyNjYuNTA2IDcxLjA1OUMyOTEuMjQ2IDQ2LjIzNiAzMjUuMjcxIDMyIDM1OS44NTUgMzJDNDAzLjYzNSAzMiA0MjkuOTEyIDUzLjk0NSA0MzguNDQ3IDYyLjIzMkw0MDIuMzQ0IDk4LjM0NEMzOTkuMjE5IDEwMS40NjkgMzk5LjIxOSAxMDYuNTMxIDQwMi4zNDQgMTA5LjY1NkM0MDMuOTA2IDExMS4yMTkgNDA1LjkzOCAxMTIgNDA4IDExMlM0MTIuMDk0IDExMS4yMTkgNDEzLjY1NiAxMDkuNjU2TDQ0OS41MzMgNzMuNzczQzQ2OC45NTkgOTYuMjc1IDQ3OS43MjMgMTI0LjYxOSA0NzkuNzIzIDE1My43OTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Pear(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 8C512 3.43 508.264 0 504 0C501.953 0 499.906 0.781 498.344 2.344L449.771 50.916C448.074 49.375 417.215 16 359.855 16C321.873 16 283.602 31.242 255.174 59.764C225.105 89.93 186.945 110.264 145.926 121.506C111.76 130.869 0 181.494 0 313.119C0 423.57 90.033 512 198.654 512C237.596 512 353.723 491.562 388.955 368.523C425.371 241.338 495.723 251.439 495.723 153.797C495.723 120.205 483.213 87.74 460.939 62.373L509.656 13.656C511.219 12.094 512 10.047 512 8ZM479.723 153.797C479.723 198.309 464.568 215.779 441.631 242.227C419.58 267.648 392.137 299.287 373.574 364.119C336.238 494.5 204.254 496 198.654 496C97.939 496 16 413.961 16 313.119C16 175.299 148.812 137.305 150.154 136.937C195.777 124.434 235.955 101.709 266.506 71.059C291.246 46.236 325.271 32 359.855 32C403.635 32 429.912 53.945 438.447 62.232L402.344 98.344C399.219 101.469 399.219 106.531 402.344 109.656C403.906 111.219 405.938 112 408 112S412.094 111.219 413.656 109.656L449.533 73.773C468.959 96.275 479.723 124.619 479.723 153.797Z" />
        </Icon>
    </>
}