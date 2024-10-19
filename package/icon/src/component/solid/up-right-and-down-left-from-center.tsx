
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `up-right-and-down-left-from-center` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-and-down-left-from-center?s=solid up-right-and-down-left-from-center}
 * @preview ![up-right-and-down-left-from-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDguMDEgMjgxLjM3NEMxOTUuNTE0IDI2OC44NzYgMTc1LjI1IDI2OC44NzQgMTYyLjc1MiAyODEuMzcyTDg0LjY4OCAzNTkuNDM5TDU0LjYyNiAzMjkuMzc3QzQ4LjUwMSAzMjMuMjUyIDQwLjMxMyAzMjAuMDAyIDMyIDMyMC4wMDJDMjcuODc1IDMyMC4wMDIgMjMuNzE5IDMyMC43OTkgMTkuNzUgMzIyLjQ0QzcuNzgxIDMyNy4zOTMgMCAzMzkuMDY0IDAgMzUyLjAwMlY0ODhDMCA1MDEuMjU0IDEwLjc0NCA1MTIgMjQgNTEySDE2MC4wMDJDMTcyLjkzOSA1MTIgMTg0LjYyNyA1MDQuMjAzIDE4OS41NjUgNDkyLjI1QzE5NC41MzMgNDgwLjI4MiAxOTEuNzgzIDQ2Ni41MzIgMTgyLjYyNyA0NTcuMzc2TDE1Mi41NjQgNDI3LjMxM0wyMzAuNjI4IDM0OS4yNDZDMjQzLjEyNCAzMzYuNzUyIDI0My4xMjQgMzE2LjQ5MiAyMzAuNjMgMzAzLjk5N0wyMDguMDEgMjgxLjM3NFpNNDg4IDBIMzUxLjk5OEMzMzkuMDYxIDAgMzI3LjM3MyA3Ljc5NyAzMjIuNDM1IDE5Ljc1QzMxNy40NjcgMzEuNzE4IDMyMC4yMTcgNDUuNDY4IDMyOS4zNzMgNTQuNjI0TDM1OS40MzYgODQuNjg3TDI4MS4zNzIgMTYyLjc1MkMyNjguODc2IDE3NS4yNDggMjY4Ljg3NiAxOTUuNTA5IDI4MS4zNzIgMjA4LjAwN0wzMDMuOTkgMjMwLjYyNkMzMTYuNDg4IDI0My4xMjQgMzM2Ljc1IDI0My4xMjQgMzQ5LjI0OCAyMzAuNjI2TDQyNy4zMTIgMTUyLjU2MUw0NTcuMzc0IDE4Mi42MjNDNDY2LjUzMSAxOTEuNzYzIDQ4MC4yNSAxOTQuNDY3IDQ5Mi4yNSAxODkuNTZDNTA0LjIxOSAxODQuNjA3IDUxMiAxNzIuOTM2IDUxMiAxNTkuOTk4VjI0QzUxMiAxMC43NDQgNTAxLjI1NCAwIDQ4OCAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UpRightAndDownLeftFromCenter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M208.01 281.374C195.514 268.876 175.25 268.874 162.752 281.372L84.688 359.439L54.626 329.377C48.501 323.252 40.313 320.002 32 320.002C27.875 320.002 23.719 320.799 19.75 322.44C7.781 327.393 0 339.064 0 352.002V488C0 501.254 10.744 512 24 512H160.002C172.939 512 184.627 504.203 189.565 492.25C194.533 480.282 191.783 466.532 182.627 457.376L152.564 427.313L230.628 349.246C243.124 336.752 243.124 316.492 230.63 303.997L208.01 281.374ZM488 0H351.998C339.061 0 327.373 7.797 322.435 19.75C317.467 31.718 320.217 45.468 329.373 54.624L359.436 84.687L281.372 162.752C268.876 175.248 268.876 195.509 281.372 208.007L303.99 230.626C316.488 243.124 336.75 243.124 349.248 230.626L427.312 152.561L457.374 182.623C466.531 191.763 480.25 194.467 492.25 189.56C504.219 184.607 512 172.936 512 159.998V24C512 10.744 501.254 0 488 0Z" />
        </Icon>
    </>
}