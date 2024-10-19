
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `drum` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/drum?s=thin drum}
 * @preview ![drum](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDQuNTA4IDExMy45MUw1MDguMzM3IDQ2LjcyNUM1MTIuMDU2IDQ0LjMxOSA1MTMuMTE4IDM5LjM4MiA1MTAuNzEyIDM1LjY2M0M1MDguMzM3IDMxLjk0NCA1MDMuMzY4IDMwLjg4MiA0OTkuNjUgMzMuMjg4TDM4My4wNDggMTA4LjczNkMzNDUuNTgxIDEwMC42OCAzMDIuMjgzIDk2LjAwNiAyNTUuOTk3IDk2LjAwNkMxMTQuNjE0IDk2LjAwNiAwIDEzOC45ODYgMCAxOTIuMDA0VjM4NC4wMDFDMCA0MzcuMDIgMTE0LjYxNCA0ODAgMjU1Ljk5NyA0ODBTNTExLjk5MyA0MzcuMDIgNTExLjk5MyAzODQuMDAxVjE5Mi4wMDRDNTExLjk5MyAxNTkuNzcyIDQ2OS40OSAxMzEuMzIgNDA0LjUwOCAxMTMuOTFaTTQ5NS45OTMgMzg0LjAwMUM0OTUuOTkzIDQwMy4zNzQgNDY4Ljg0OSA0MjMuODg2IDQyMy45OTQgNDM5LjMwN1YzMjguMDAyQzQyMy45OTQgMzIzLjU5NiA0MjAuNDAxIDMyMC4wMDIgNDE1Ljk5NCAzMjAuMDAyUzQwNy45OTUgMzIzLjU5NiA0MDcuOTk1IDMyOC4wMDJWNDQ0LjM4MUMzNjkuMTEgNDU1LjY2OCAzMTkuNTY2IDQ2My4xNzQgMjYzLjk5NiA0NjMuODQ4VjM1Mi4wMDJDMjYzLjk5NiAzNDcuNTk2IDI2MC40MDMgMzQ0LjAwMiAyNTUuOTk3IDM0NC4wMDJDMjUxLjU5IDM0NC4wMDIgMjQ3Ljk5NyAzNDcuNTk2IDI0Ny45OTcgMzUyLjAwMlY0NjMuODQ4QzE5Mi40MjcgNDYzLjE3NCAxNDIuODgzIDQ1NS42NjggMTAzLjk5OSA0NDQuMzgxVjMyOC4wMDJDMTAzLjk5OSAzMjMuNTk2IDEwMC40MDUgMzIwLjAwMiA5NS45OTkgMzIwLjAwMkM5MS41OTMgMzIwLjAwMiA4Ny45OTkgMzIzLjU5NiA4Ny45OTkgMzI4LjAwMlY0MzkuMzA3QzQzLjE0NCA0MjMuODg2IDE2IDQwMy4zNzQgMTYgMzg0LjAwMVYyMjUuMTUyQzUyLjAyOSAyNjEuODEgMTQ1LjczMiAyODguMDAzIDI1NS45OTcgMjg4LjAwM1M0NTkuOTY1IDI2MS44MSA0OTUuOTkzIDIyNS4xNTJWMzg0LjAwMVpNMjU1Ljk5NyAyNzIuMDAzQzExOC42MzcgMjcyLjAwMyAxNiAyMjkuNzY3IDE2IDE5Mi4wMDRTMTE4LjYzNyAxMTIuMDA2IDI1NS45OTcgMTEyLjAwNkMyOTUuMjY2IDExMi4wMDYgMzMxLjU0MiAxMTUuNTQxIDM2My41NDggMTIxLjM1M0wyMjcuNjUzIDIwOS4yODVDMjIzLjkzNSAyMTEuNjkyIDIyMi44NzIgMjE2LjYyOSAyMjUuMjc4IDIyMC4zNDhDMjI2LjgwOSAyMjIuNzIzIDIyOS4zNzIgMjI0LjAwNCAyMzEuOTk3IDIyNC4wMDRDMjMzLjQ5NyAyMjQuMDA0IDIzNC45OTcgMjIzLjU5OCAyMzYuMzQxIDIyMi43MjNMMzg1LjkxNyAxMjUuOTM5QzQ1My4xMjEgMTQxLjQ4MiA0OTUuOTkzIDE2Ny42NDEgNDk1Ljk5MyAxOTIuMDA0QzQ5NS45OTMgMjI5Ljc2NyAzOTMuMzU2IDI3Mi4wMDMgMjU1Ljk5NyAyNzIuMDAzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Drum(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M404.508 113.91L508.337 46.725C512.056 44.319 513.118 39.382 510.712 35.663C508.337 31.944 503.368 30.882 499.65 33.288L383.048 108.736C345.581 100.68 302.283 96.006 255.997 96.006C114.614 96.006 0 138.986 0 192.004V384.001C0 437.02 114.614 480 255.997 480S511.993 437.02 511.993 384.001V192.004C511.993 159.772 469.49 131.32 404.508 113.91ZM495.993 384.001C495.993 403.374 468.849 423.886 423.994 439.307V328.002C423.994 323.596 420.401 320.002 415.994 320.002S407.995 323.596 407.995 328.002V444.381C369.11 455.668 319.566 463.174 263.996 463.848V352.002C263.996 347.596 260.403 344.002 255.997 344.002C251.59 344.002 247.997 347.596 247.997 352.002V463.848C192.427 463.174 142.883 455.668 103.999 444.381V328.002C103.999 323.596 100.405 320.002 95.999 320.002C91.593 320.002 87.999 323.596 87.999 328.002V439.307C43.144 423.886 16 403.374 16 384.001V225.152C52.029 261.81 145.732 288.003 255.997 288.003S459.965 261.81 495.993 225.152V384.001ZM255.997 272.003C118.637 272.003 16 229.767 16 192.004S118.637 112.006 255.997 112.006C295.266 112.006 331.542 115.541 363.548 121.353L227.653 209.285C223.935 211.692 222.872 216.629 225.278 220.348C226.809 222.723 229.372 224.004 231.997 224.004C233.497 224.004 234.997 223.598 236.341 222.723L385.917 125.939C453.121 141.482 495.993 167.641 495.993 192.004C495.993 229.767 393.356 272.003 255.997 272.003Z" />
        </Icon>
    </>
}