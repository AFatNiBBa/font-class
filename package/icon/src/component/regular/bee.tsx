
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bee` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bee?s=regular bee}
 * @preview ![bee](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDguMDQ5IDk2SDQ0OEM0MjAuMjY2IDk2IDM5Mi42OTUgMTA1LjU1OSAzNjcuMzExIDExOC44MzRDMzY3LjUwOCAxMTYuNTQ1IDM2OCAxMTQuMzQyIDM2OCAxMTJDMzY4IDkxLjYwMiAzNjAuMTMxIDczLjE5MSAzNDcuNTY0IDU5LjA2MUwzNzkuMzEzIDI3LjMxMkMzODUuNTYzIDIxLjA2MiAzODUuNTYzIDEwLjkzNyAzNzkuMzEzIDQuNjg3UzM2Mi45MzggLTEuNTYzIDM1Ni42ODggNC42ODdMMzIxLjY5OSAzOS42NzZDMzExLjQyOCAzNC44NzcgMzAwLjA4NiAzMiAyODggMzJTMjY0LjU3MiAzNC44NzcgMjU0LjMwMSAzOS42NzZMMjE5LjMxMiA0LjY4N0MyMTMuMDYyIC0xLjU2MyAyMDIuOTM3IC0xLjU2MyAxOTYuNjg4IDQuNjg3UzE5MC40MzggMjEuMDYzIDE5Ni42ODggMjcuMzEyTDIyOC40MzYgNTkuMDYxQzIxNS44NjkgNzMuMTkxIDIwOCA5MS42MDIgMjA4IDExMkMyMDggMTE0LjM0MiAyMDguNDkyIDExNi41NDUgMjA4LjY4OSAxMTguODM0QzE4My4zMDUgMTA1LjU1OSAxNTUuNzM0IDk2IDEyOCA5NkgxMjcuOTUxQzU3LjI5MSA5Ni4wMDIgMCAxNDYuMTI1IDAgMjA3Ljk1OVYyMDguMDQxQzAgMjY5Ljg3OSA1Ny4yODMgMzIwIDEyNy45NTEgMzIwSDEyOEMxMzQuODgxIDMyMCAxNDEuNzUgMzE5LjI1IDE0OC41OSAzMTguMTcyQzE2Mi40IDQxNy42NzIgMjg4IDUxMiAyODggNTEyUzQxMy42IDQxNy42NzIgNDI3LjQxIDMxOC4xNzJDNDM0LjI1IDMxOS4yNSA0NDEuMTE5IDMyMCA0NDggMzIwSDQ0OC4wNDlDNTE4LjcxMSAzMjAgNTc2IDI2OS44NzUgNTc2IDIwOC4wNDFWMjA3Ljk1OUM1NzYgMTQ2LjEyMSA1MTguNzE3IDk1Ljk5NCA0NDguMDQ5IDk2Wk0xOTUuNTkyIDMwNEgzODAuNDFDMzc5Ljk3MyAzMTQuMzk2IDM3Ny40MDIgMzI1LjEzOSAzNzMuMjY0IDMzNkgyMDIuNzRDMTk4LjYwMiAzMjUuMTQxIDE5Ni4wMzEgMzE0LjM5OCAxOTUuNTkyIDMwNFpNMjA3LjE1NiAyNTZDMjExLjMwOSAyNDguNTI1IDIxNi4xNDEgMjQxLjM5MyAyMjIuMzU0IDIzNS4xNzhDMjM5Ljg3MyAyMTcuNjUyIDI2My4xNjggMjA4IDI4Ny45NDcgMjA4SDI4OC4wNTNDMzEyLjgzMiAyMDggMzM2LjEyNyAyMTcuNjUyIDM1My42NDYgMjM1LjE3OEMzNTkuODU5IDI0MS4zOTMgMzY0LjY5MSAyNDguNTI1IDM2OC44NDQgMjU2SDIwNy4xNTZaTTE1MS4yMjkgMjY4LjYyNUMxNDMuMzY1IDI3MC42MzUgMTM1LjU1MyAyNzIgMTI3Ljk1MSAyNzJDODMuODY1IDI3MiA0OCAyNDMuMzA5IDQ4IDIwNy45NTlDNDggMTcyLjY5MSA4My44NjcgMTQ0IDEyNy45NTEgMTQ0SDEyOEMxNTcuMTY0IDE0NCAxODkuMTM5IDE2MC4xNjIgMjE3LjAxMiAxNzkuODI4QzE4NC4zNDYgMTk5LjAzOSAxNjAuMTIxIDIzMC43MDEgMTUxLjIyOSAyNjguNjI1Wk0yODggNDQ5LjE0MUMyNjkuMzU1IDQzMS44ODMgMjQ3LjQ0NyA0MDguODU3IDIyOS41MzcgMzg0SDM0Ni40NjVDMzI4LjU1NSA0MDguODU3IDMwNi42NDUgNDMxLjg4MyAyODggNDQ5LjE0MVpNNDQ4IDI3MkM0NDAuNDE0IDI3MiA0MzIuNjE5IDI3MC42MzcgNDI0Ljc3MyAyNjguNjMzQzQxNS44ODMgMjMwLjcwNSAzOTEuNjU2IDE5OS4wNDEgMzU4Ljk4OCAxNzkuODI4QzM4Ni44NjEgMTYwLjE2MiA0MTguODM2IDE0NCA0NDggMTQ0SDQ0OC4wNTlDNDkyLjEzOSAxNDQgNTI4IDE3Mi42OTEgNTI4IDIwOC4wNDFDNTI4IDI0My4zMDkgNDkyLjEzNSAyNzIgNDQ4IDI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bee(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M448.049 96H448C420.266 96 392.695 105.559 367.311 118.834C367.508 116.545 368 114.342 368 112C368 91.602 360.131 73.191 347.564 59.061L379.313 27.312C385.563 21.062 385.563 10.937 379.313 4.687S362.938 -1.563 356.688 4.687L321.699 39.676C311.428 34.877 300.086 32 288 32S264.572 34.877 254.301 39.676L219.312 4.687C213.062 -1.563 202.937 -1.563 196.688 4.687S190.438 21.063 196.688 27.312L228.436 59.061C215.869 73.191 208 91.602 208 112C208 114.342 208.492 116.545 208.689 118.834C183.305 105.559 155.734 96 128 96H127.951C57.291 96.002 0 146.125 0 207.959V208.041C0 269.879 57.283 320 127.951 320H128C134.881 320 141.75 319.25 148.59 318.172C162.4 417.672 288 512 288 512S413.6 417.672 427.41 318.172C434.25 319.25 441.119 320 448 320H448.049C518.711 320 576 269.875 576 208.041V207.959C576 146.121 518.717 95.994 448.049 96ZM195.592 304H380.41C379.973 314.396 377.402 325.139 373.264 336H202.74C198.602 325.141 196.031 314.398 195.592 304ZM207.156 256C211.309 248.525 216.141 241.393 222.354 235.178C239.873 217.652 263.168 208 287.947 208H288.053C312.832 208 336.127 217.652 353.646 235.178C359.859 241.393 364.691 248.525 368.844 256H207.156ZM151.229 268.625C143.365 270.635 135.553 272 127.951 272C83.865 272 48 243.309 48 207.959C48 172.691 83.867 144 127.951 144H128C157.164 144 189.139 160.162 217.012 179.828C184.346 199.039 160.121 230.701 151.229 268.625ZM288 449.141C269.355 431.883 247.447 408.857 229.537 384H346.465C328.555 408.857 306.645 431.883 288 449.141ZM448 272C440.414 272 432.619 270.637 424.773 268.633C415.883 230.705 391.656 199.041 358.988 179.828C386.861 160.162 418.836 144 448 144H448.059C492.139 144 528 172.691 528 208.041C528 243.309 492.135 272 448 272Z" />
        </Icon>
    </>
}