
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `podcast` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/podcast?s=solid podcast}
 * @preview ![podcast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMEMxMDAuMjg5IDAgMCAxMDAuMjg5IDAgMjI0QzAgMzE2LjIyMyA1NS43NjYgMzk1LjM2NSAxMzUuMzg5IDQyOS43MTNDMTMxLjkwOCA0MDguOTYzIDEyOS4yMTkgMzg4LjEyNSAxMjguMzkxIDM3MS41NTlDODAuMDgyIDM0MC4xNDggNDggMjg1Ljc5MyA0OCAyMjRDNDggMTI2Ljk1MyAxMjYuOTUzIDQ4IDIyNCA0OFM0MDAgMTI2Ljk1MyA0MDAgMjI0QzQwMCAyODUuNzk1IDM2Ny45MTggMzQwLjE0OCAzMTkuNjA3IDM3MS41NTlDMzE4Ljc3MyAzODguMDU1IDMxNi4wNjYgNDA4LjkyNCAzMTIuNTcyIDQyOS43M0MzOTIuMjE1IDM5NS4zOTMgNDQ4IDMxNi4yMzggNDQ4IDIyNEM0NDggMTAwLjI4OSAzNDcuNzEzIDAgMjI0IDBaTTIyNCAzMTJDMTkxLjEyNSAzMTIgMTYwIDMyMC42MjUgMTYwIDM1NS43NUMxNjAgMzg4Ljg3NSAxNzIuODc1IDQ2MC4xMjUgMTgwLjYyNSA0ODguNjI1QzE4NS43NSA1MDcuNjI1IDIwNS4xMjUgNTEyIDIyNCA1MTJTMjYyLjI1IDUwNy42MjUgMjY3LjM3NSA0ODguNjI1QzI3NS4xMjUgNDU5Ljg3NSAyODggMzg4Ljc1IDI4OCAzNTUuNzVDMjg4IDMyMC42MjUgMjU2Ljg3NSAzMTIgMjI0IDMxMlpNMjI0IDI4MEMyNTQuOTUzIDI4MCAyODAgMjU0Ljk1MyAyODAgMjI0UzI1NC45NTMgMTY4IDIyNCAxNjhTMTY4IDE5My4wNDcgMTY4IDIyNFMxOTMuMDQ3IDI4MCAyMjQgMjgwWk0zNjggMjI0QzM2OCAxNDQuNDcxIDMwMy41MjkgODAgMjI0IDgwUzgwIDE0NC40NzEgODAgMjI0QzgwIDI2OC44MzQgMTAwLjkyIDMwOC4zODEgMTMzLjA0NSAzMzQuNzkxQzEzNy45MDIgMzIyLjEzNyAxNDcuMTcyIDMwOC45MTYgMTY1LjA5OCAyOTkuNzU2QzE2NS4wNjQgMjk5LjczIDE2NS40NDEgMjk5LjcwNyAxNjUuNTcgMjk5LjY4MkMxNDIuODcxIDI4Mi4xMjUgMTI4IDI1NC45MiAxMjggMjI0QzEyOCAxNzAuOTggMTcwLjk4IDEyOCAyMjQgMTI4UzMyMCAxNzAuOTggMzIwIDIyNEMzMjAgMjU0LjkxOCAzMDUuMTI5IDI4Mi4xMjUgMjgyLjQzIDI5OS42ODJDMjgyLjU2MSAyOTkuNzA3IDI4Mi45MzcgMjk5LjczIDI4Mi45MDQgMjk5Ljc1NkMzMDAuODMgMzA4LjkxNiAzMTAuMDk4IDMyMi4xMzcgMzE0Ljk1NSAzMzQuNzkxQzM0Ny4wOCAzMDguMzgxIDM2OCAyNjguODM0IDM2OCAyMjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Podcast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 0C100.289 0 0 100.289 0 224C0 316.223 55.766 395.365 135.389 429.713C131.908 408.963 129.219 388.125 128.391 371.559C80.082 340.148 48 285.793 48 224C48 126.953 126.953 48 224 48S400 126.953 400 224C400 285.795 367.918 340.148 319.607 371.559C318.773 388.055 316.066 408.924 312.572 429.73C392.215 395.393 448 316.238 448 224C448 100.289 347.713 0 224 0ZM224 312C191.125 312 160 320.625 160 355.75C160 388.875 172.875 460.125 180.625 488.625C185.75 507.625 205.125 512 224 512S262.25 507.625 267.375 488.625C275.125 459.875 288 388.75 288 355.75C288 320.625 256.875 312 224 312ZM224 280C254.953 280 280 254.953 280 224S254.953 168 224 168S168 193.047 168 224S193.047 280 224 280ZM368 224C368 144.471 303.529 80 224 80S80 144.471 80 224C80 268.834 100.92 308.381 133.045 334.791C137.902 322.137 147.172 308.916 165.098 299.756C165.064 299.73 165.441 299.707 165.57 299.682C142.871 282.125 128 254.92 128 224C128 170.98 170.98 128 224 128S320 170.98 320 224C320 254.918 305.129 282.125 282.43 299.682C282.561 299.707 282.937 299.73 282.904 299.756C300.83 308.916 310.098 322.137 314.955 334.791C347.08 308.381 368 268.834 368 224Z" />
        </Icon>
    </>
}