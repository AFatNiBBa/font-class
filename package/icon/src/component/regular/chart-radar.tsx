
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-radar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-radar?s=regular chart-radar}
 * @preview ![chart-radar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuODI0IDIzMy4zNjVMNDAwLjQzNyA1NC4xNjZDMzkyLjMyMiA0MC41MTYgMzc3LjUwMiAzMiAzNjEuMzg3IDMySDE1MC42MTNDMTM0LjQ5OCAzMiAxMTkuNjc4IDQwLjUxNiAxMTEuNTYzIDU0LjE2Nkw2LjE3NiAyMzMuMzY1Qy0yLjA1OSAyNDcuMzY1IC0yLjA1OSAyNjQuNjMzIDYuMTc2IDI3OC42MzNMMTExLjU2MyA0NTcuODMyQzExOS42NzggNDcxLjQ4MiAxMzQuNDk4IDQ4MCAxNTAuNjEzIDQ4MEgzNjEuMzg3QzM3Ny41MDIgNDgwIDM5Mi4zMjIgNDcxLjQ4MiA0MDAuNDM3IDQ1Ny44MzJMNTA1LjgyNCAyNzguNjMzQzUxNC4wNTkgMjY0LjYzMyA1MTQuMDU5IDI0Ny4zNjUgNTA1LjgyNCAyMzMuMzY1Wk0zNTkuOTQ1IDQzMkgxNTIuMDU3TDQ4LjU1MSAyNTUuOTk4TDE1Mi4wNTUgODBIMzU5Ljk0NUw0NjMuNDUxIDI1NS45OThMMzU5Ljk0NSA0MzJaTTMzMC43MTMgMjgyLjE3MkwyODkuODQyIDE3OS45OTZDMjkzLjQgMTc0LjAyIDI5NiAxNjcuNDM2IDI5NiAxNjBDMjk2IDEzNy45NjkgMjc4LjAzMSAxMjAgMjU2IDEyMFMyMTYgMTM3Ljk2OSAyMTYgMTYwQzIxNiAxNjMuNzIxIDIxNy4xNzIgMTY3LjA4IDIxOC4xMzEgMTcwLjUwNEwxNjAuMDA2IDI0OC4wMDJDMTYwLjAwNCAyNDguMDAyIDE2MC4wMDIgMjQ4IDE2MCAyNDhDMTM3Ljk2OSAyNDggMTIwIDI2NS45NjkgMTIwIDI4OFMxMzcuOTY5IDMyOCAxNjAgMzI4QzE3MC4wOTIgMzI4IDE3OS4wOCAzMjMuOTA2IDE4Ni4xMzEgMzE3LjcwMUwyODQuMzcxIDMzNy4zNUMyOTAuODkxIDM1MC42MjUgMzA0LjI1OCAzNjAgMzIwIDM2MEMzNDIuMDMxIDM2MCAzNjAgMzQyLjAzMSAzNjAgMzIwQzM2MCAzMDEuNzY0IDM0Ny40NDcgMjg2Ljk1NSAzMzAuNzEzIDI4Mi4xNzJaTTIwMi4wNjMgMjcxLjkzOEwyNDkuNTYzIDIwOC41NjJMMjgxLjI1IDI4Ny43ODFMMjAyLjA2MyAyNzEuOTM4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChartRadar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM359.945 432H152.057L48.551 255.998L152.055 80H359.945L463.451 255.998L359.945 432ZM330.713 282.172L289.842 179.996C293.4 174.02 296 167.436 296 160C296 137.969 278.031 120 256 120S216 137.969 216 160C216 163.721 217.172 167.08 218.131 170.504L160.006 248.002C160.004 248.002 160.002 248 160 248C137.969 248 120 265.969 120 288S137.969 328 160 328C170.092 328 179.08 323.906 186.131 317.701L284.371 337.35C290.891 350.625 304.258 360 320 360C342.031 360 360 342.031 360 320C360 301.764 347.447 286.955 330.713 282.172ZM202.063 271.938L249.563 208.562L281.25 287.781L202.063 271.938Z" />
        </Icon>
    </>
}