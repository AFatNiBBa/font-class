
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=light chess-clock-flip}
 * @preview ![chess-clock-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgODBDMjU2IDcxLjE1NiAyNDguODQ0IDY0IDI0MCA2NEgxMTJDMTAzLjE1NiA2NCA5NiA3MS4xNTYgOTYgODBTMTAzLjE1NiA5NiAxMTIgOTZIMjQwQzI0OC44NDQgOTYgMjU2IDg4Ljg0NCAyNTYgODBaTTQ2NCAxOTJDNDAyLjE0NSAxOTIgMzUyIDI0Mi4xNDUgMzUyIDMwNFM0MDIuMTQ1IDQxNiA0NjQgNDE2UzU3NiAzNjUuODU1IDU3NiAzMDRTNTI1Ljg1NSAxOTIgNDY0IDE5MlpNNDY0IDM4NEM0MTkuODg5IDM4NCAzODQgMzQ4LjExMSAzODQgMzA0QzM4NCAyNjUuMzY3IDQxMS41MjkgMjMzLjA1MyA0NDggMjI1LjYxOVYzMDRDNDQ4IDMxMi44NDQgNDU1LjE1NiAzMjAgNDY0IDMyMFM0ODAgMzEyLjg0NCA0ODAgMzA0VjIyNS42MTlDNTE2LjQ3MSAyMzMuMDUzIDU0NCAyNjUuMzY3IDU0NCAzMDRDNTQ0IDM0OC4xMTEgNTA4LjExMSAzODQgNDY0IDM4NFpNMCAxOTJMMCA0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDU3NkM2MTEuMzQ2IDQ4MCA2NDAgNDUxLjM0NiA2NDAgNDE2VjE5MkM2NDAgMTU2LjY1NCA2MTEuMzQ2IDEyOCA1NzYgMTI4SDQ4MFY2NEg1MjhDNTM2Ljg0NCA2NCA1NDQgNTYuODQ0IDU0NCA0OFM1MzYuODQ0IDMyIDUyOCAzMkg0MDBDMzkxLjE1NiAzMiAzODQgMzkuMTU2IDM4NCA0OFMzOTEuMTU2IDY0IDQwMCA2NEg0NDhWMTI4SDY0QzI4LjY1NCAxMjggMCAxNTYuNjU0IDAgMTkyWk0zMiAxOTJDMzIgMTc0LjM1NSA0Ni4zNTUgMTYwIDY0IDE2MEg1NzZDNTkzLjY0NSAxNjAgNjA4IDE3NC4zNTUgNjA4IDE5MlY0MTZDNjA4IDQzMy42NDUgNTkzLjY0NSA0NDggNTc2IDQ0OEg2NEM0Ni4zNTUgNDQ4IDMyIDQzMy42NDUgMzIgNDE2VjE5MlpNMTc2IDE5MkMxMTQuMTQ1IDE5MiA2NCAyNDIuMTQ1IDY0IDMwNFMxMTQuMTQ1IDQxNiAxNzYgNDE2UzI4OCAzNjUuODU1IDI4OCAzMDRTMjM3Ljg1NSAxOTIgMTc2IDE5MlpNMjMyLjU2OCAzNjAuNTY4QzIwMS4zNzcgMzkxLjc2IDE1MC42MjMgMzkxLjc2IDExOS40MzIgMzYwLjU2OFM4OC4yNCAyNzguNjIzIDExOS40MzIgMjQ3LjQzMkMxNDYuNzQ4IDIyMC4xMTMgMTg5LjA2NCAyMTYuNzMgMjIwLjEwOSAyMzcuMjYyTDE2NC42ODYgMjkyLjY4NkMxNTguNDM0IDI5OC45MzkgMTU4LjQzNCAzMDkuMDYxIDE2NC42ODYgMzE1LjMxMkMxNzAuOTM5IDMyMS41NjYgMTgxLjA2MSAzMjEuNTY2IDE4Ny4zMTQgMzE1LjMxMkwyNDIuNzM4IDI1OS44ODlDMjYzLjI3IDI5MC45MzYgMjU5Ljg4NyAzMzMuMjUgMjMyLjU2OCAzNjAuNTY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 80C256 71.156 248.844 64 240 64H112C103.156 64 96 71.156 96 80S103.156 96 112 96H240C248.844 96 256 88.844 256 80ZM464 192C402.145 192 352 242.145 352 304S402.145 416 464 416S576 365.855 576 304S525.855 192 464 192ZM464 384C419.889 384 384 348.111 384 304C384 265.367 411.529 233.053 448 225.619V304C448 312.844 455.156 320 464 320S480 312.844 480 304V225.619C516.471 233.053 544 265.367 544 304C544 348.111 508.111 384 464 384ZM0 192L0 416C0 451.346 28.654 480 64 480H576C611.346 480 640 451.346 640 416V192C640 156.654 611.346 128 576 128H480V64H528C536.844 64 544 56.844 544 48S536.844 32 528 32H400C391.156 32 384 39.156 384 48S391.156 64 400 64H448V128H64C28.654 128 0 156.654 0 192ZM32 192C32 174.355 46.355 160 64 160H576C593.645 160 608 174.355 608 192V416C608 433.645 593.645 448 576 448H64C46.355 448 32 433.645 32 416V192ZM176 192C114.145 192 64 242.145 64 304S114.145 416 176 416S288 365.855 288 304S237.855 192 176 192ZM232.568 360.568C201.377 391.76 150.623 391.76 119.432 360.568S88.24 278.623 119.432 247.432C146.748 220.113 189.064 216.73 220.109 237.262L164.686 292.686C158.434 298.939 158.434 309.061 164.686 315.312C170.939 321.566 181.061 321.566 187.314 315.312L242.738 259.889C263.27 290.936 259.887 333.25 232.568 360.568Z" />
    </Icon>
);

export default ChessClockFlip;