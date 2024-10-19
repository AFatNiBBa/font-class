
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=thin circle-up-left}
 * @preview ![circle-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNiAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODQgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0yODQuNDQ5IDIxNi41NjZMMzE2LjA0NSAxODQuOTY5QzMzMS4xNjYgMTY5Ljg1MiAzMjAuNDU3IDE0NCAyOTkuMDc0IDE0NEgxNjhDMTYxLjM3MyAxNDQgMTU1LjM3MyAxNDYuNjg4IDE1MS4wMjkgMTUxLjAzMVMxNDQuMDAyIDE2MS4zNzEgMTQ0IDE2OFYyOTkuMDc0QzE0NCAzMjAuNDUzIDE2OS44NTIgMzMxLjE2NCAxODQuOTcxIDMxNi4wNDdMMjE2LjU2NiAyODQuNDQ5TDI5MC4xMDUgMzU3Ljk4OEMyOTkuNDc5IDM2Ny4zNTkgMzE0LjY3NiAzNjcuMzU5IDMyNC4wNDcgMzU3Ljk4OEwzNTcuOTg4IDMyNC4wNDdDMzY3LjM1OSAzMTQuNjcyIDM2Ny4zNjEgMjk5LjQ3NyAzNTcuOTg4IDI5MC4xMDVMMjg0LjQ0OSAyMTYuNTY2Wk0zNDYuNjc0IDMxMi43MzRMMzEyLjczMiAzNDYuNjcyQzMwOS42MTMgMzQ5Ljc5MyAzMDQuNTM5IDM0OS43OTMgMzAxLjQyIDM0Ni42NzJMMjE2LjU2NiAyNjEuODJMMTczLjY1NiAzMDQuNzNDMTcwLjI0NiAzMDguMTQxIDE2Ni40MjQgMzA3LjA4MiAxNjQuOTM4IDMwNi40NjlDMTYzLjQ1MyAzMDUuODUyIDE2MC4wMDIgMzAzLjg5OCAxNjAuMDAyIDI5OS4wNzRWMTY4QzE2MC4wMDIgMTY1LjExNyAxNjEuNDY3IDE2My4yMTkgMTYyLjM0NCAxNjIuMzQ0QzE2My4yMTkgMTYxLjQ2OSAxNjUuMTE3IDE2MCAxNjggMTYwSDI5OS4wNzRDMzAzLjkgMTYwIDMwNS44NSAxNjMuNDUzIDMwNi40NjcgMTY0LjkzOEMzMDcuMDgyIDE2Ni40MjIgMzA4LjE0MyAxNzAuMjQ2IDMwNC43MzIgMTczLjY1NkwyNjEuODIyIDIxNi41NjZMMzQ2LjY3NCAzMDEuNDIyQzM0OS43OTUgMzA0LjUzOSAzNDkuNzk1IDMwOS42MTMgMzQ2LjY3NCAzMTIuNzM0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM284.449 216.566L316.045 184.969C331.166 169.852 320.457 144 299.074 144H168C161.373 144 155.373 146.688 151.029 151.031S144.002 161.371 144 168V299.074C144 320.453 169.852 331.164 184.971 316.047L216.566 284.449L290.105 357.988C299.479 367.359 314.676 367.359 324.047 357.988L357.988 324.047C367.359 314.672 367.361 299.477 357.988 290.105L284.449 216.566ZM346.674 312.734L312.732 346.672C309.613 349.793 304.539 349.793 301.42 346.672L216.566 261.82L173.656 304.73C170.246 308.141 166.424 307.082 164.938 306.469C163.453 305.852 160.002 303.898 160.002 299.074V168C160.002 165.117 161.467 163.219 162.344 162.344C163.219 161.469 165.117 160 168 160H299.074C303.9 160 305.85 163.453 306.467 164.938C307.082 166.422 308.143 170.246 304.732 173.656L261.822 216.566L346.674 301.422C349.795 304.539 349.795 309.613 346.674 312.734Z" />
    </Icon>
);

export default CircleUpLeft;