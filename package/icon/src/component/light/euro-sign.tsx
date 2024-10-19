
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `euro-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/euro-sign?s=light euro-sign}
 * @preview ![euro-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzUuNjI2IDQ1NS41NzJDMzM3LjUxNiA0NjQuMjI1IDMzMi4wNjMgNDcyLjc1MyAzMjMuNDIyIDQ3NC42MjdDMzA2Ljk1NCA0NzguMjUxIDI5MC4zNiA0ODAgMjczLjkyMiA0ODBDMjE0LjY0MSA0ODAgMTU3LjM5MSA0NTYuOTc4IDExNC4zNDQgNDE0LjQzMkM4Ny4yNzkgMzg3LjY3NCA2Ny45NjUgMzU1LjMwOCA1Ny4zODMgMzE5Ljk5OUgzMkMyMy4xNTYgMzE5Ljk5OSAxNiAzMTIuODQ2IDE2IDMwNC4wMDZDMTYgMjk1LjE2NSAyMy4xNTYgMjg4LjAxMiAzMiAyODguMDEySDUwLjU0OUM0OS4wMzMgMjc3LjQ4NyA0OCAyNjYuODQ2IDQ4IDI1Ni4wMjRDNDggMjQ1LjIwMiA0OS4wMzMgMjM0LjU2MiA1MC41NDkgMjI0LjAzN0gzMkMyMy4xNTYgMjI0LjAzNyAxNiAyMTYuODgzIDE2IDIwOC4wNDNDMTYgMTk5LjIwMyAyMy4xNTYgMTkyLjA0OSAzMiAxOTIuMDQ5SDU3LjM4M0M2Ny45NjUgMTU2Ljc0IDg3LjI3OSAxMjQuMzc0IDExNC4zNDQgOTcuNjE3QzE2OS4zMTMgNDMuMjYzIDI0Ny40ODUgMjAuNjc4IDMyMy40MjIgMzcuNDIxQzMzMi4wNjMgMzkuMjk2IDMzNy41MTYgNDcuODI0IDMzNS42MjYgNTYuNDc3QzMzMy43MTkgNjUuMDk4IDMyNS4xNzIgNzAuNDQgMzE2LjU3OSA2OC42NTlDMjUxLjIwNCA1NC40MTUgMTg0LjA2MyA3My42NTcgMTM2Ljg0NCAxMjAuMzU4QzExNi4wNDUgMTQwLjkzNiAxMDAuNzY0IDE2NS40MjUgOTEuMjUgMTkyLjA0OUgyNzJDMjgwLjg0NCAxOTIuMDQ5IDI4OCAxOTkuMjAzIDI4OCAyMDguMDQzQzI4OCAyMTYuODgzIDI4MC44NDQgMjI0LjAzNyAyNzIgMjI0LjAzN0g4Mi44NzFDODEuMDk4IDIzNC41MjMgODAgMjQ1LjE4MSA4MCAyNTYuMDI0QzgwIDI2Ni44NjggODEuMDk4IDI3Ny41MjYgODIuODcxIDI4OC4wMTJIMjcyQzI4MC44NDQgMjg4LjAxMiAyODggMjk1LjE2NSAyODggMzA0LjAwNkMyODggMzEyLjg0NiAyODAuODQ0IDMxOS45OTkgMjcyIDMxOS45OTlIOTEuMjVDMTAwLjc2NCAzNDYuNjI0IDExNi4wNDUgMzcxLjExMiAxMzYuODQ0IDM5MS42OUMxODQuMDYzIDQzOC4zNiAyNTEuMjE5IDQ1Ny42MzQgMzE2LjU3OSA0NDMuMzg5QzMyNS4yMDQgNDQxLjU0NiAzMzMuNzE5IDQ0Ni45NSAzMzUuNjI2IDQ1NS41NzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EuroSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M335.626 455.572C337.516 464.225 332.063 472.753 323.422 474.627C306.954 478.251 290.36 480 273.922 480C214.641 480 157.391 456.978 114.344 414.432C87.279 387.674 67.965 355.308 57.383 319.999H32C23.156 319.999 16 312.846 16 304.006C16 295.165 23.156 288.012 32 288.012H50.549C49.033 277.487 48 266.846 48 256.024C48 245.202 49.033 234.562 50.549 224.037H32C23.156 224.037 16 216.883 16 208.043C16 199.203 23.156 192.049 32 192.049H57.383C67.965 156.74 87.279 124.374 114.344 97.617C169.313 43.263 247.485 20.678 323.422 37.421C332.063 39.296 337.516 47.824 335.626 56.477C333.719 65.098 325.172 70.44 316.579 68.659C251.204 54.415 184.063 73.657 136.844 120.358C116.045 140.936 100.764 165.425 91.25 192.049H272C280.844 192.049 288 199.203 288 208.043C288 216.883 280.844 224.037 272 224.037H82.871C81.098 234.523 80 245.181 80 256.024C80 266.868 81.098 277.526 82.871 288.012H272C280.844 288.012 288 295.165 288 304.006C288 312.846 280.844 319.999 272 319.999H91.25C100.764 346.624 116.045 371.112 136.844 391.69C184.063 438.36 251.219 457.634 316.579 443.389C325.204 441.546 333.719 446.95 335.626 455.572Z" />
        </Icon>
    </>
}