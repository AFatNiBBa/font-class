
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tree-decorated` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=thin tree-decorated}
 * @preview ![tree-decorated](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzEuOTk4IDEyOEMyNjMuMTY2IDEyOCAyNTYgMTM1LjE2NiAyNTYgMTQ0QzI1NiAxNTIuODMyIDI2My4xNjYgMTYwIDI3MS45OTggMTYwQzI4MC44MzIgMTYwIDI4Ny45OTggMTUyLjgzMiAyODcuOTk4IDE0NEMyODcuOTk4IDEzNS4xNjYgMjgwLjgzMiAxMjggMjcxLjk5OCAxMjhaTTIwOCAyNTZDMTk5LjE2NiAyNTYgMTkyIDI2My4xNjYgMTkyIDI3MkMxOTIgMjgwLjgzMiAxOTkuMTY2IDI4OCAyMDggMjg4UzIyNCAyODAuODMyIDIyNCAyNzJDMjI0IDI2My4xNjYgMjE2LjgzNCAyNTYgMjA4IDI1NlpNMzAzLjk5OCAzODRDMjk1LjE2NiAzODQgMjg4IDM5MS4xNjYgMjg4IDQwMEMyODggNDA4LjgzMiAyOTUuMTY2IDQxNiAzMDMuOTk4IDQxNkMzMTIuODMyIDQxNiAzMTkuOTk4IDQwOC44MzIgMzE5Ljk5OCA0MDBDMzE5Ljk5OCAzOTEuMTY2IDMxMi44MzIgMzg0IDMwMy45OTggMzg0Wk00NzEuNjM3IDQ1NS42MjVMMzgxLjc2OSAzNTJINDE3Ljc2NkM0NDMuMzg5IDM1MiA0NTcuMjY0IDMyMi43NSA0NDEuMDE0IDMwMy41TDM0Ni4xNDYgMTkySDM5MC44OTNDNDEyLjI2OCAxOTIgNDIzLjc2NiAxNjkuNSA0MTAuMjY4IDE1NC43NUwyNzUuMjc3IDguMjVDMjcwLjI3OSAyLjc1IDI2My4xNTQgMCAyNTYuMDI5IDBTMjQxLjc4MSAyLjc1IDIzNi43ODEgOC4yNUwxMDEuOTE4IDE1NC43NUM4OC4yOTMgMTY5LjUgOTkuOTE4IDE5MiAxMjEuMjkxIDE5MkgxNjYuMDM3TDcxLjA0NSAzMDMuNUM1NC43OTUgMzIyLjc1IDY4LjY3IDM1MiA5NC4yOTMgMzUySDEzMC4yODlMNDAuNDIyIDQ1NS42MjVDMjEuNDI0IDQ3Ny41IDM2LjY3MiA1MTIgNjUuMTcgNTEySDQ0Ni43NjRDNDc1LjM4NyA1MTIgNDkwLjUxIDQ3Ny4zNzUgNDcxLjYzNyA0NTUuNjI1Wk00NjIuMjU0IDQ4NS43NzdDNDYxLjE1OCA0ODguMTc2IDQ1Ni44MDkgNDk2IDQ0Ni43NjQgNDk2SDY1LjE3QzU1LjE2MiA0OTYgNTAuODI0IDQ4OC4xOTUgNDkuNzM0IDQ4NS44MDNDNDguNTc2IDQ4My4yNjYgNDUuMzU1IDQ3NC4zNDQgNTIuNTEgNDY2LjEwN0wxNjUuMzQ0IDMzNkg5NC4yOTNDODUuNzUgMzM2IDgyLjIyMSAzMjkuODMgODEuMzQyIDMyNy45MzlDODAuMjc1IDMyNS42NDUgNzguMzMgMzE5LjY3NCA4My4yMjMgMzEzLjg3NUwyMDAuNjg3IDE3NkgxMjEuMjkxQzExNi4zNzMgMTc2IDExMy41MjcgMTczLjUwMiAxMTIuNTA0IDE3MS4xNjRDMTExLjM2MSAxNjguNTUzIDExMi42MjEgMTY2Ljc0IDExMy42ODkgMTY1LjU4NkwyNDguNjIxIDE5LjAxMkMyNTAuMzYxIDE3LjA5OCAyNTMuMDYgMTYgMjU2LjAyOSAxNlMyNjEuNjk5IDE3LjA5OCAyNjMuNTEyIDE5LjA5MkwzOTguNDY1IDE2NS41NTNDMzk5LjUxOCAxNjYuNzA1IDQwMC43ODUgMTY4LjU0NSAzOTkuNjExIDE3MS4yMDdDMzk4LjU5MiAxNzMuNTIzIDM5NS43NjYgMTc2IDM5MC44OTMgMTc2SDMxMS41MjVMNDI4Ljc4NyAzMTMuODJDNDMzLjczIDMxOS42NzQgNDMxLjc4MyAzMjUuNjQ1IDQzMC43MTcgMzI3LjkzOUM0MjkuODQgMzI5LjgzIDQyNi4zMDkgMzM2IDQxNy43NjYgMzM2SDM0Ni43MTVMNDU5LjU1MyA0NjYuMTExQzQ2Ni42NTIgNDc0LjI5MyA0NjMuNDE0IDQ4My4yMzIgNDYyLjI1NCA0ODUuNzc3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TreeDecorated(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M271.998 128C263.166 128 256 135.166 256 144C256 152.832 263.166 160 271.998 160C280.832 160 287.998 152.832 287.998 144C287.998 135.166 280.832 128 271.998 128ZM208 256C199.166 256 192 263.166 192 272C192 280.832 199.166 288 208 288S224 280.832 224 272C224 263.166 216.834 256 208 256ZM303.998 384C295.166 384 288 391.166 288 400C288 408.832 295.166 416 303.998 416C312.832 416 319.998 408.832 319.998 400C319.998 391.166 312.832 384 303.998 384ZM471.637 455.625L381.769 352H417.766C443.389 352 457.264 322.75 441.014 303.5L346.146 192H390.893C412.268 192 423.766 169.5 410.268 154.75L275.277 8.25C270.279 2.75 263.154 0 256.029 0S241.781 2.75 236.781 8.25L101.918 154.75C88.293 169.5 99.918 192 121.291 192H166.037L71.045 303.5C54.795 322.75 68.67 352 94.293 352H130.289L40.422 455.625C21.424 477.5 36.672 512 65.17 512H446.764C475.387 512 490.51 477.375 471.637 455.625ZM462.254 485.777C461.158 488.176 456.809 496 446.764 496H65.17C55.162 496 50.824 488.195 49.734 485.803C48.576 483.266 45.355 474.344 52.51 466.107L165.344 336H94.293C85.75 336 82.221 329.83 81.342 327.939C80.275 325.645 78.33 319.674 83.223 313.875L200.687 176H121.291C116.373 176 113.527 173.502 112.504 171.164C111.361 168.553 112.621 166.74 113.689 165.586L248.621 19.012C250.361 17.098 253.06 16 256.029 16S261.699 17.098 263.512 19.092L398.465 165.553C399.518 166.705 400.785 168.545 399.611 171.207C398.592 173.523 395.766 176 390.893 176H311.525L428.787 313.82C433.73 319.674 431.783 325.645 430.717 327.939C429.84 329.83 426.309 336 417.766 336H346.715L459.553 466.111C466.652 474.293 463.414 483.232 462.254 485.777Z" />
        </Icon>
    </>
}