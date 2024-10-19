
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-snooze` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-snooze?s=duotone alarm-snooze}
 * @preview ![alarm-snooze](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiA2My45OTJDMTE4LjY0NSA2My45OTIgMzIgMTc2LjE5MiAzMiAyODcuOTY1QzMyIDMzNi4zMzQgNDcuNzUgMzgzLjMyOCA3Ni43NSA0MjEuOTQ5TDQxLjMyOCA0NTcuNDdDMzUuMTEgNDYzLjcwNyAzMiA0NzEuODcyIDMyIDQ4MC4wMzhDMzIgNDg4LjE5IDM1LjEgNDk2LjM0MyA0MS4zMDEgNTAyLjU3OEw0MS4zMTQgNTAyLjU5MkM0Ny41NTIgNTA4Ljg2NCA1NS43OCA1MTIgNjQuMDA3IDUxMkM3Mi4yMjIgNTEyIDgwLjQzNyA1MDguODczIDg2LjY3MiA1MDIuNjE5TDEyMS45OTkgNDY3LjE5M0MxNjEuNjg3IDQ5Ny4wNjQgMjA4Ljg0NCA1MTIgMjU2IDUxMlMzNTAuMzEyIDQ5Ny4wNjQgMzg5Ljk5OSA0NjcuMTkzTDQyNS40NTQgNTAyLjY2OEM0MzEuNjk1IDUwOC44ODkgNDM5Ljg2NSA1MTIgNDQ4LjAzNSA1MTJDNDU2LjE5MyA1MTIgNDY0LjM1MSA1MDguODk5IDQ3MC41ODkgNTAyLjY5NUw0NzAuNTg5IDUwMi42OTVDNDc2Ljg2MyA0OTYuNDU3IDQ4MCA0ODguMjMgNDgwIDQ4MC4wMDJDNDgwIDQ3MS43ODggNDc2Ljg3MyA0NjMuNTczIDQ3MC42MTcgNDU3LjMzN0w0MzUuMjUgNDIxLjk0OUM0NjQuMzc1IDM4My4zMjggNDgwIDMzNi4zMzQgNDgwIDI4Ny45NjVDNDgwIDE2NC4yMyAzNzkuNzUgNjMuOTkyIDI1NiA2My45OTJaTTM0My45OTcgMjA3Ljk1NEMzNDMuOTk3IDIxMy4yOTMgMzQyLjIxMiAyMTguNjA5IDMzOC43NSAyMjIuOTczTDI0MS44NzUgMzQzLjk1OEgzMjBDMzI4Ljg3NSAzNDMuOTU4IDMzNiAzNTEuMDgyIDMzNiAzNTkuOTU2VjM3NS45NTRDMzM2IDM4NC44MjggMzI4Ljg3NSAzOTEuOTUyIDMyMCAzOTEuOTUySDE5MkMxNzMuMDA5IDM5MS45NTIgMTY4LjAwMyAzNzQuODE4IDE2OC4wMDMgMzY3Ljk3NkMxNjguMDAzIDM2Mi42MzcgMTY5Ljc4OCAzNTcuMzIxIDE3My4yNSAzNTIuOTU3TDI2OS45OTkgMjMxLjk3MkgxOTJDMTgzLjEyNSAyMzEuOTcyIDE3NiAyMjQuODQ4IDE3NiAyMTUuOTc0VjE5OS45NzZDMTc2IDE5MS4xMDIgMTgzLjEyNSAxODMuOTc4IDE5MiAxODMuOTc4SDMyMEMzMzguOTkxIDE4My45NzggMzQzLjk5NyAyMDEuMTEyIDM0My45OTcgMjA3Ljk1NFogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PHBhdGggZD0iTTk2IDBDNDMgMCAwIDQyLjk5NSAwIDk1Ljk4OEMwLjEyNSAxMTQuMjM2IDUuMzc1IDEzMS45ODQgMTUuMjUgMTQ3LjIzMkwxNjEuMjUgMjUuNjIyQzE0My41IDkuMTI0IDEyMC4yNSAwIDk2IDBaTTQxNiAwQzM5MS43NSAwIDM2OC41IDkuMTI0IDM1MC44NzUgMjUuNjIyTDQ5Ni43NSAxNDcuMjMyQzUwNi42MjUgMTMxLjk4NCA1MTEuODc1IDExNC4yMzYgNTEyIDk1Ljk4OEM1MTIgNDIuOTk1IDQ2OSAwIDQxNiAwWk0zNDMuOTk3IDIwNy45NTRDMzQzLjk5NyAyMTMuMjkzIDM0Mi4yMTIgMjE4LjYwOSAzMzguNzUgMjIyLjk3M0wyNDEuODc1IDM0My45NThIMzIwQzMyOC44NzUgMzQzLjk1OCAzMzYgMzUxLjA4MiAzMzYgMzU5Ljk1NlYzNzUuOTU0QzMzNiAzODQuODI4IDMyOC44NzUgMzkxLjk1MiAzMjAgMzkxLjk1MkgxOTJDMTczLjAwOSAzOTEuOTUyIDE2OC4wMDMgMzc0LjgxOCAxNjguMDAzIDM2Ny45NzZDMTY4LjAwMyAzNjIuNjM3IDE2OS43ODggMzU3LjMyMSAxNzMuMjUgMzUyLjk1N0wyNjkuOTk5IDIzMS45NzJIMTkyQzE4My4xMjUgMjMxLjk3MiAxNzYgMjI0Ljg0OCAxNzYgMjE1Ljk3NFYxOTkuOTc2QzE3NiAxOTEuMTAyIDE4My4xMjUgMTgzLjk3OCAxOTIgMTgzLjk3OEgzMjBDMzM4Ljk5MSAxODMuOTc4IDM0My45OTcgMjAxLjExMiAzNDMuOTk3IDIwNy45NTRaICIgY2xhc3M9ImZhLXByaW1hcnkiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function AlarmSnooze(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 63.992C118.645 63.992 32 176.192 32 287.965C32 336.334 47.75 383.328 76.75 421.949L41.328 457.47C35.11 463.707 32 471.872 32 480.038C32 488.19 35.1 496.343 41.301 502.578L41.314 502.592C47.552 508.864 55.78 512 64.007 512C72.222 512 80.437 508.873 86.672 502.619L121.999 467.193C161.687 497.064 208.844 512 256 512S350.312 497.064 389.999 467.193L425.454 502.668C431.695 508.889 439.865 512 448.035 512C456.193 512 464.351 508.899 470.589 502.695L470.589 502.695C476.863 496.457 480 488.23 480 480.002C480 471.788 476.873 463.573 470.617 457.337L435.25 421.949C464.375 383.328 480 336.334 480 287.965C480 164.23 379.75 63.992 256 63.992ZM343.997 207.954C343.997 213.293 342.212 218.609 338.75 222.973L241.875 343.958H320C328.875 343.958 336 351.082 336 359.956V375.954C336 384.828 328.875 391.952 320 391.952H192C173.009 391.952 168.003 374.818 168.003 367.976C168.003 362.637 169.788 357.321 173.25 352.957L269.999 231.972H192C183.125 231.972 176 224.848 176 215.974V199.976C176 191.102 183.125 183.978 192 183.978H320C338.991 183.978 343.997 201.112 343.997 207.954Z " />
            <path d="M96 0C43 0 0 42.995 0 95.988C0.125 114.236 5.375 131.984 15.25 147.232L161.25 25.622C143.5 9.124 120.25 0 96 0ZM416 0C391.75 0 368.5 9.124 350.875 25.622L496.75 147.232C506.625 131.984 511.875 114.236 512 95.988C512 42.995 469 0 416 0ZM343.997 207.954C343.997 213.293 342.212 218.609 338.75 222.973L241.875 343.958H320C328.875 343.958 336 351.082 336 359.956V375.954C336 384.828 328.875 391.952 320 391.952H192C173.009 391.952 168.003 374.818 168.003 367.976C168.003 362.637 169.788 357.321 173.25 352.957L269.999 231.972H192C183.125 231.972 176 224.848 176 215.974V199.976C176 191.102 183.125 183.978 192 183.978H320C338.991 183.978 343.997 201.112 343.997 207.954Z " />
        </Icon>
    </>
}