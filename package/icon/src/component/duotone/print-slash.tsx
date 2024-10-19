
import { Icon, generic } from "../../index";

/**
 * A component that renders the `print-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/print-slash?s=duotone print-slash}
 * @preview ![print-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA0NDhIMTkyVjM1MkgzMjUuNzY0TDEyMi4zNTIgMTkyLjU3Qzg5LjY5NSAxOTUuNDczIDY0IDIyMi41OSA2NCAyNTZWMzUyQzY0IDM2OS42NzQgNzguMzI2IDM4NCA5NiAzODRIMTI4VjQ4MEMxMjggNDk3LjY3NCAxNDIuMzI2IDUxMiAxNjAgNTEySDQ4MEM0OTIuMjUgNTEyIDUwMi41NDUgNTA0Ljg4MSA1MDcuOTI0IDQ5NC43NzNMNDQ4IDQ0Ny44MDVWNDQ4Wk0xOTIgNjRINDIxLjQ5TDQ0OCA5MC41MVYxNjBINTEyVjc3LjI1QzUxMiA2OC43NjYgNTA4LjYyNSA2MC42MjUgNTAyLjYyNSA1NC42MjVMNDU3LjM3NSA5LjM3NUM0NTEuMzc1IDMuMzc1IDQ0My4yMTkgMCA0MzQuNzUgMEgxNjBDMTQyLjM0NCAwIDEyOCAxNC4zMjggMTI4IDMyVjc1LjAxMkwxOTIgMTI1LjE3NFY2NFpNNTEyIDE5MkgyNzcuMjYyTDUyMi4yMyAzODRINTQ0QzU2MS42NzQgMzg0IDU3NiAzNjkuNjc0IDU3NiAzNTJWMjU2QzU3NiAyMjAuNjU0IDU0Ny4zNDYgMTkyIDUxMiAxOTJaTTQ5NiAyOTZDNDgyLjc1IDI5NiA0NzIgMjg1LjI1IDQ3MiAyNzJDNDcyIDI1OC43MzQgNDgyLjc1IDI0OCA0OTYgMjQ4UzUyMCAyNTguNzM0IDUyMCAyNzJDNTIwIDI4NS4yNSA1MDkuMjUgMjk2IDQ5NiAyOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYzNC44NzQgNTAyLjgwNUM2MjYuNzQ5IDUxMy4yMTEgNjExLjY4NiA1MTUuMDg2IDYwMS4xODYgNTA2Ljg4M0w5LjE4OSA0Mi44OUMtMS4yNDkgMzQuNzE4IC0zLjA2MSAxOS42MjUgNS4xMjYgOS4xODdDOS44NDUgMy4xNTYgMTYuOTA3IDAgMjQuMDMyIDBDMjkuMTg5IDAgMzQuNDA3IDEuNjcyIDM4LjgxNCA1LjEwOUw2MzAuODExIDQ2OS4xMDJDNjQxLjI0OSA0NzcuMjc0IDY0My4wNjEgNDkyLjM2NyA2MzQuODc0IDUwMi44MDVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const PrintSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M448 448H192V352H325.764L122.352 192.57C89.695 195.473 64 222.59 64 256V352C64 369.674 78.326 384 96 384H128V480C128 497.674 142.326 512 160 512H480C492.25 512 502.545 504.881 507.924 494.773L448 447.805V448ZM192 64H421.49L448 90.51V160H512V77.25C512 68.766 508.625 60.625 502.625 54.625L457.375 9.375C451.375 3.375 443.219 0 434.75 0H160C142.344 0 128 14.328 128 32V75.012L192 125.174V64ZM512 192H277.262L522.23 384H544C561.674 384 576 369.674 576 352V256C576 220.654 547.346 192 512 192ZM496 296C482.75 296 472 285.25 472 272C472 258.734 482.75 248 496 248S520 258.734 520 272C520 285.25 509.25 296 496 296Z" />
            <path d="M634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805Z" />
    </Icon>
);

export default PrintSlash;