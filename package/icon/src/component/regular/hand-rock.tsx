
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-rock` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-rock?s=regular hand-rock}
 * @preview ![hand-rock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzcuOTU5IDY4LjA0N0MzNjQuNDQxIDUwLjY1NCAzNDMuNzIxIDQwIDMyMS4yMTkgNDBIMzA3LjY4N0MzMDQuMTcgNDAgMzAwLjY0OCA0MC4yNzUgMjk3LjE1NiA0MC44MThDMjg0LjgzIDMxLjMzIDI2OS42MjcgMjYgMjUzLjUzMSAyNkgyNDBDMjM2LjAyMyAyNiAyMzIuMDk2IDI2LjM2OSAyMjguMjU0IDI3LjA4NEMyMTYuNjUgMTAuNzA5IDE5Ny41NTMgMCAxNzYgMEgxNjBDMTI0LjY1NCAwIDk2IDI4LjY1NCA5NiA2NFYxMTMuNzA5TDc5Ljk2MSAxMjguMDg2TDYzLjAzNyAxNDMuMjU2QzQzLjI5OSAxNjAuMDE4IDMyIDE4NC42MDcgMzIgMjEwLjkwNlYyODkuODc1QzMyIDMyMS45NzcgNDkuMTExIDM1MS41MjUgNzYuNjU0IDM2Ni45OTJMMTEyIDM4Ni44NTRWNDg4QzExMiA1MDEuMjU1IDEyMi43NDUgNTEyIDEzNiA1MTJIMTM2QzE0OS4yNTUgNTEyIDE2MCA1MDEuMjU1IDE2MCA0ODhWMzU4LjEyM0MxNTguNjg0IDM1Ny40NjkgMTU3LjIyNSAzNTcuMjAzIDE1NS45MzggMzU2LjQ4NEwxMDAuMTU2IDMyNS4xNDFDODcuNzE5IDMxOC4xNTYgODAgMzA0LjY0MSA4MCAyODkuODc1VjIxMC45MDZDODAgMTk4LjU5NCA4NS4yODEgMTg3LjE0MSA5NC41IDE3OS41MTZMMTEyIDE2My44MjhWMjA4QzExMiAyMTYuODQ0IDExOS4xNTYgMjI0IDEyOCAyMjRTMTQ0IDIxNi44NDQgMTQ0IDIwOFY2NEMxNDQgNTUuMTcyIDE1MS4xODggNDggMTYwIDQ4SDE3NkMxODQuODEyIDQ4IDE5MiA1NS4xNzIgMTkyIDY0VjgwQzE5MiA4OS41NzggMTk5Ljk0MiA5Ni4wNDEgMjA4LjE0NiA5Ni4wNDFDMjE0LjU3OCA5Ni4wNDEgMjIwLjQ1MyA5Mi4wMjMgMjIyLjg3NSA4NS44NzVDMjIzLjM0NCA4NC44NDQgMjI4LjMxMiA3NCAyNDAgNzRIMjUzLjUzMUMyNzQuNDk3IDc0IDI3MS40NTQgOTMuNTg0IDI4Ny44MDUgOTMuNTg0QzI5NS45ODIgOTMuNTg0IDI5Ny43MDUgODggMzA3LjY4OCA4OEgzMjEuMjE5QzM0Ni43NjMgODggMzM5LjQ4NyAxMTYuMjI3IDM1OS44NzcgMTE2LjIyN0MzNjAuMDMzIDExNi4yMjcgMzYwLjE4OSAxMTYuMjI1IDM2MC4zNDQgMTE2LjIxOUwzNzUuMzc1IDExNkMzODguOTY5IDExNiA0MDAgMTI3LjY1NiA0MDAgMTQyVjI3MkM0MDAgMzA4LjE1MiAzODAuNDYxIDMzOS4zMTggMzUyIDM1NS42ODlWNDg4QzM1MiA1MDEuMjU1IDM2Mi43NDUgNTEyIDM3NiA1MTJIMzc2QzM4OS4yNTUgNTEyIDQwMCA1MDEuMjU1IDQwMCA0ODhWMzc5Ljg2MUM0MzAuMTMxIDM1Mi44MDkgNDQ4IDMxMy42MDQgNDQ4IDI3MlYxNDJDNDQ4IDEwMi4wNzggNDE2LjgxMSA2OS40MzggMzc3Ljk1OSA2OC4wNDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandRock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M377.959 68.047C364.441 50.654 343.721 40 321.219 40H307.687C304.17 40 300.648 40.275 297.156 40.818C284.83 31.33 269.627 26 253.531 26H240C236.023 26 232.096 26.369 228.254 27.084C216.65 10.709 197.553 0 176 0H160C124.654 0 96 28.654 96 64V113.709L79.961 128.086L63.037 143.256C43.299 160.018 32 184.607 32 210.906V289.875C32 321.977 49.111 351.525 76.654 366.992L112 386.854V488C112 501.255 122.745 512 136 512H136C149.255 512 160 501.255 160 488V358.123C158.684 357.469 157.225 357.203 155.938 356.484L100.156 325.141C87.719 318.156 80 304.641 80 289.875V210.906C80 198.594 85.281 187.141 94.5 179.516L112 163.828V208C112 216.844 119.156 224 128 224S144 216.844 144 208V64C144 55.172 151.188 48 160 48H176C184.812 48 192 55.172 192 64V80C192 89.578 199.942 96.041 208.146 96.041C214.578 96.041 220.453 92.023 222.875 85.875C223.344 84.844 228.312 74 240 74H253.531C274.497 74 271.454 93.584 287.805 93.584C295.982 93.584 297.705 88 307.688 88H321.219C346.763 88 339.487 116.227 359.877 116.227C360.033 116.227 360.189 116.225 360.344 116.219L375.375 116C388.969 116 400 127.656 400 142V272C400 308.152 380.461 339.318 352 355.689V488C352 501.255 362.745 512 376 512H376C389.255 512 400 501.255 400 488V379.861C430.131 352.809 448 313.604 448 272V142C448 102.078 416.811 69.438 377.959 68.047Z" />
        </Icon>
    </>
}