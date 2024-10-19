
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dial-max` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dial-max?s=regular dial-max}
 * @preview ![dial-max](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjkuNjA3IDEyOS42MDlDMTQyLjEwNCAxMTcuMTEzIDE0Mi4xMDQgOTYuODUyIDEyOS42MDcgODQuMzU1QzExNy4xMDkgNzEuODU3IDk2Ljg0OCA3MS44NTcgODQuMzUyIDg0LjM1NUM3MS44NTUgOTYuODUyIDcxLjg1NSAxMTcuMTEzIDg0LjM1MiAxMjkuNjA5Qzk2Ljg0OCAxNDIuMTA3IDExNy4xMDkgMTQyLjEwNyAxMjkuNjA3IDEyOS42MDlaTTg0LjM1MiA0NDYuMzk1QzcxLjg1NSA0NTguODkxIDcxLjg1NSA0NzkuMTUyIDg0LjM1MiA0OTEuNjVDOTYuODQ4IDUwNC4xNDYgMTE3LjEwOSA1MDQuMTQ2IDEyOS42MDcgNDkxLjY1QzE0Mi4xMDQgNDc5LjE1MiAxNDIuMTA0IDQ1OC44OTEgMTI5LjYwNyA0NDYuMzk1QzExNy4xMDkgNDMzLjg5OCA5Ni44NDggNDMzLjg5OCA4NC4zNTIgNDQ2LjM5NVpNMzIgMjU2LjAwMkMxNC4zMjYgMjU2LjAwMiAwIDI3MC4zMjggMCAyODguMDAyQzAgMzA1LjY3NCAxNC4zMjYgMzIwLjAwMiAzMiAzMjAuMDAyUzY0IDMwNS42NzQgNjQgMjg4LjAwMkM2NCAyNzAuMzI4IDQ5LjY3NCAyNTYuMDAyIDMyIDI1Ni4wMDJaTTI4OCA2NC4wMDJDMzA1LjY3MiA2NC4wMDIgMzIwIDQ5LjY3NCAzMjAgMzIuMDAyQzMyMCAxNC4zMjggMzA1LjY3MiAwLjAwMiAyODggMC4wMDJDMjcwLjMyNiAwLjAwMiAyNTYgMTQuMzI4IDI1NiAzMi4wMDJDMjU2IDQ5LjY3NCAyNzAuMzI2IDY0LjAwMiAyODggNjQuMDAyWk00NDYuMzkxIDg0LjM1NUM0MzMuODk1IDk2Ljg1MiA0MzMuODk1IDExNy4xMTMgNDQ2LjM5MSAxMjkuNjA5QzQ1OC44ODkgMTQyLjEwNyA0NzkuMTUgMTQyLjEwNyA0OTEuNjQ2IDEyOS42MDlDNTA0LjE0MyAxMTcuMTEzIDUwNC4xNDMgOTYuODUyIDQ5MS42NDYgODQuMzU1QzQ3OS4xNSA3MS44NTcgNDU4Ljg4OSA3MS44NTcgNDQ2LjM5MSA4NC4zNTVaTTU0NCAyNTYuMDAyQzUyNi4zMjYgMjU2LjAwMiA1MTIgMjcwLjMzIDUxMiAyODguMDAyQzUxMiAzMDUuNjc2IDUyNi4zMjYgMzIwLjAwMiA1NDQgMzIwLjAwMlM1NzYgMzA1LjY3NiA1NzYgMjg4LjAwMkM1NzYgMjcwLjMzIDU2MS42NzQgMjU2LjAwMiA1NDQgMjU2LjAwMlpNNDAxLjEzNyAxNzQuODY1QzMzOC42NTIgMTEyLjM4MSAyMzcuMzQ2IDExMi4zODEgMTc0Ljg2MSAxNzQuODY1UzExMi4zNzcgMzM4LjY1NiAxNzQuODYxIDQwMS4xNDFTMzM4LjY1MiA0NjMuNjI1IDQwMS4xMzcgNDAxLjE0MVM0NjMuNjIxIDIzNy4zNSA0MDEuMTM3IDE3NC44NjVaTTM4Mi4yMzQgMzQ4LjI5N0wzMDQuOTY5IDI3MS4wMzNDMjk1LjYgMjYxLjY2NCAyODAuMzk4IDI2MS42NjQgMjcxLjAyOSAyNzEuMDMzUzI2MS42NiAyOTUuNjA1IDI3MS4wMjkgMzA0Ljk3NUwzNDguMjkzIDM4Mi4yMzhDMzA0Ljk2NyA0MDkuOTU3IDI0Ni42MzUgNDA1LjAzMSAyMDguODAzIDM2Ny4xOTlDMTY1LjEzMyAzMjMuNTMxIDE2NS4xMzMgMjUyLjQ3NSAyMDguODAxIDIwOC44MDdDMjUyLjQ3MSAxNjUuMTM3IDMyMy41MjcgMTY1LjEzNyAzNjcuMTk3IDIwOC44MDdDNDA1LjAyNyAyNDYuNjM5IDQwOS45NTMgMzA0Ljk3MSAzODIuMjM0IDM0OC4yOTdaTTQ0Ni4zOTEgNDQ2LjM5NUM0MzMuODk1IDQ1OC44OTEgNDMzLjg5NSA0NzkuMTUyIDQ0Ni4zOTEgNDkxLjY1QzQ1OC44ODkgNTA0LjE0NiA0NzkuMTUgNTA0LjE0NiA0OTEuNjQ2IDQ5MS42NUM1MDQuMTQzIDQ3OS4xNTIgNTA0LjE0MyA0NTguODkxIDQ5MS42NDYgNDQ2LjM5NVM0NTguODg5IDQzMy44OTggNDQ2LjM5MSA0NDYuMzk1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DialMax(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M129.607 129.609C142.104 117.113 142.104 96.852 129.607 84.355C117.109 71.857 96.848 71.857 84.352 84.355C71.855 96.852 71.855 117.113 84.352 129.609C96.848 142.107 117.109 142.107 129.607 129.609ZM84.352 446.395C71.855 458.891 71.855 479.152 84.352 491.65C96.848 504.146 117.109 504.146 129.607 491.65C142.104 479.152 142.104 458.891 129.607 446.395C117.109 433.898 96.848 433.898 84.352 446.395ZM32 256.002C14.326 256.002 0 270.328 0 288.002C0 305.674 14.326 320.002 32 320.002S64 305.674 64 288.002C64 270.328 49.674 256.002 32 256.002ZM288 64.002C305.672 64.002 320 49.674 320 32.002C320 14.328 305.672 0.002 288 0.002C270.326 0.002 256 14.328 256 32.002C256 49.674 270.326 64.002 288 64.002ZM446.391 84.355C433.895 96.852 433.895 117.113 446.391 129.609C458.889 142.107 479.15 142.107 491.646 129.609C504.143 117.113 504.143 96.852 491.646 84.355C479.15 71.857 458.889 71.857 446.391 84.355ZM544 256.002C526.326 256.002 512 270.33 512 288.002C512 305.676 526.326 320.002 544 320.002S576 305.676 576 288.002C576 270.33 561.674 256.002 544 256.002ZM401.137 174.865C338.652 112.381 237.346 112.381 174.861 174.865S112.377 338.656 174.861 401.141S338.652 463.625 401.137 401.141S463.621 237.35 401.137 174.865ZM382.234 348.297L304.969 271.033C295.6 261.664 280.398 261.664 271.029 271.033S261.66 295.605 271.029 304.975L348.293 382.238C304.967 409.957 246.635 405.031 208.803 367.199C165.133 323.531 165.133 252.475 208.801 208.807C252.471 165.137 323.527 165.137 367.197 208.807C405.027 246.639 409.953 304.971 382.234 348.297ZM446.391 446.395C433.895 458.891 433.895 479.152 446.391 491.65C458.889 504.146 479.15 504.146 491.646 491.65C504.143 479.152 504.143 458.891 491.646 446.395S458.889 433.898 446.391 446.395Z" />
        </Icon>
    </>
}