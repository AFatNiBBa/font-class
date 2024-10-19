
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=duotone pen-to-square}
 * @preview ![pen-to-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5Ny45NDEgNDIuMTkzTDQ2OS44MDkgMTQuMDU5QzQ1MS4wNjIgLTQuNjg3IDQyMC42NzIgLTQuNjg3IDQwMS45MjggMTQuMDU5TDM2My4zMDcgNTIuNjkxTDQ1OS4zMTggMTQ4LjcwNUw0OTcuOTM3IDExMC4wNzhDNTE2LjY4NiA5MS4zMzQgNTE2LjY4OCA2MC45MzkgNDk3Ljk0MSA0Mi4xOTNaTTM4My45OSA0NDhINjMuOTk4VjEyOEgyMjAuMTI1TDI4NC4xMjUgNjRINjMuOTk4QzI4LjY1NCA2NCAwIDkyLjY1MiAwIDEyOFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjMuOTk4IDUxMkgzODMuOTlDNDE5LjMzNCA1MTIgNDQ3Ljk4OCA0ODMuMzQ2IDQ0Ny45ODggNDQ4VjIyNy44OTZMMzgzLjk5IDI5MS44OTFWNDQ4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNTMuODQ1IDI2Mi4xNTRMMzYzLjMwOCA1Mi42OUw0NTkuMzE5IDE0OC43MDNMMjQ5Ljg0NyAzNTguMTUxQzI0Ni40OTcgMzYxLjUwMSAyNDIuMjMgMzYzLjc4NCAyMzcuNTg1IDM2NC43MTNMMTQyLjM1OCAzODMuNzZDMTMzLjk2MyAzODUuNDM5IDEyNi41NjEgMzc4LjAzNyAxMjguMjQgMzY5LjY0MUwxNDcuMjgyIDI3NC40MThDMTQ4LjIxMSAyNjkuNzcxIDE1MC40OTUgMjY1LjUwNCAxNTMuODQ1IDI2Mi4xNTRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PenToSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M497.941 42.193L469.809 14.059C451.062 -4.687 420.672 -4.687 401.928 14.059L363.307 52.691L459.318 148.705L497.937 110.078C516.686 91.334 516.688 60.939 497.941 42.193ZM383.99 448H63.998V128H220.125L284.125 64H63.998C28.654 64 0 92.652 0 128V448C0 483.346 28.654 512 63.998 512H383.99C419.334 512 447.988 483.346 447.988 448V227.896L383.99 291.891V448Z" />
            <path d="M153.845 262.154L363.308 52.69L459.319 148.703L249.847 358.151C246.497 361.501 242.23 363.784 237.585 364.713L142.358 383.76C133.963 385.439 126.561 378.037 128.24 369.641L147.282 274.418C148.211 269.771 150.495 265.504 153.845 262.154Z" />
        </Icon>
    </>
}