
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lights-holiday` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lights-holiday?s=thin lights-holiday}
 * @preview ![lights-holiday](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzQuMDk4IDI2Mi4zMDlDMTM0LjEgMjYyLjMwNSAxMzQuMTA2IDI2Mi4zMDEgMTM0LjEwOCAyNjIuMjk3TDE2Ny40MzcgMTc4Ljk0NUMxNjkuMDc3IDE3NC44NTIgMTY3LjA5MyAxNzAuMTk1IDE2Mi45ODMgMTY4LjUzOUMxNTguODU4IDE2Ni45NDUgMTU0LjIzMyAxNjguOTE0IDE1Mi41OTMgMTczLjAwOEwxMTkuMjY0IDI1Ni4zNTlDMTE5LjEzIDI1Ni42OTUgMTE5LjM2MiAyNTcuMDE2IDExOS4yNzYgMjU3LjM1OUM5MS42MTYgMjUyIDYzLjg0NiAyNjUuMzU5IDU0LjU5MiAyOTAuMjk3QzQzLjY1NCAzMjAuNzA3IDQ2LjYyMyAzODkuNTg2IDYwLjQ2NyA0MjYuNzgxQzYxLjI5NSA0MjkgNjMuMDMgNDMwLjcxOSA2NS4yMzMgNDMxLjUzMUM2Ni4xMjMgNDMxLjg0NCA2Ny4wNDUgNDMyIDY3Ljk2NyA0MzJDNjkuMzQyIDQzMiA3MC43MDIgNDMxLjY1NiA3MS45MiA0MzAuOTM4QzEwNy4wNzcgNDEwLjkzNCAxNTQuNDgzIDM1OS45NjEgMTY1Ljg0MyAzMjkuOTkyQzE2NS44NDMgMzI5Ljk2MSAxNjUuODQzIDMyOS45NjEgMTY1Ljg0MyAzMjkuOTYxQzE3MC40NjggMzE3LjYxMyAxNjkuNzk2IDMwMy44OTEgMTYzLjkzNiAyOTEuMjk3QzE1OC4wNCAyNzguNjAyIDE0Ny4yNTEgMjY4LjQ0NSAxMzQuMDk4IDI2Mi4zMDlaTTE1MC44NzQgMzI0LjMzMkMxNDIuNDgzIDM0Ni40NjEgMTA0LjgyNyAzODkuODk4IDcyLjQyIDQxMS44MDlDNjEuOTgzIDM3NC44NjcgNjEuNTkyIDMxOC4xMTMgNjkuNjIzIDI5NS43OTdDNzUuMTA4IDI4MC45ODQgOTAuMjggMjcxLjk4NCAxMDcuMDQ1IDI3MS45ODRDMTEyLjM1OCAyNzEuOTg0IDExNy44NTggMjcyLjg5MSAxMjMuMjMzIDI3NC43OTdDMTM0Ljk1MiAyNzguOTg0IDE0NC40OTkgMjg3LjQ1MyAxNDkuNDM2IDI5OC4wNDdDMTUzLjQ1MiAzMDYuNzA3IDE1My45NjggMzE2LjA1MSAxNTAuODc0IDMyNC4zMzJaTTMyNy43MzQgMjcyLjY2NEMzMjcuNzYgMjcyLjQwNiAzMjguMDE2IDI3Mi4yNSAzMjguMDE2IDI3MS45ODRWMTkxLjk3N0MzMjguMDE2IDE4Ny41NyAzMjQuNDM4IDE4My45NzcgMzIwLjAxNiAxODMuOTc3UzMxMi4wMTYgMTg3LjU3IDMxMi4wMTYgMTkxLjk3N1YyNzEuOTg0QzMxMi4wMTYgMjcyLjI1IDMxMi4yNzEgMjcyLjQwNiAzMTIuMjk3IDI3Mi42NjRDMjgzLjQxNCAyNzYuMDA4IDI2MC45ODQgMjk3LjM5MSAyNjAuOTg0IDMyMy40ODhDMjYwLjk4NCAzNTQuMTggMjg3Ljc2NSA0MTUuNjUyIDMxNC4wNDcgNDQ1LjMxMkMzMTUuNTYyIDQ0Ny4wMzEgMzE3Ljc1IDQ0OCAzMjAuMDMxIDQ0OEMzMjIuMzI4IDQ0OCAzMjQuNSA0NDcuMDMxIDMyNi4wMTUgNDQ1LjMxMkMzNTIuMjk3IDQxNS42NTIgMzc5LjA3OSAzNTQuMTQ4IDM3OS4wNzkgMzIzLjQ4OEMzNzkuMDc5IDI5Ny4zODMgMzU2LjYzMSAyNzUuOTkyIDMyNy43MzQgMjcyLjY2NFpNMzIwLjAxNiA0MjcuMzQ0QzI5Ny4xMjUgMzk3LjEyMSAyNzYuOTg0IDM0NS45NjEgMjc2Ljk4NCAzMjMuNDg4QzI3Ni45ODQgMzAzLjkyMiAyOTYuMjk3IDI4Ny45ODQgMzIwLjAzMSAyODcuOTg0UzM2My4wNzggMzAzLjkyMiAzNjMuMDc4IDMyMy40ODhDMzYzLjA3OCAzNDcuODY3IDM0MS41NzggMzk4LjY4NCAzMjAuMDE2IDQyNy4zNDRaTTYzOC44NDYgNjcuODEyQzYzNi41NjUgNjQuMDYyIDYzMS42MTEgNjIuOTA2IDYyNy44NjEgNjUuMTI1QzU0NC4wMTcgMTE1Ljk2OSA0MzQuNjg4IDE0My45NzMgMzIwIDE0My45NzNDMjA1LjMyNyAxNDMuOTczIDk1Ljk5OSAxMTUuOTY5IDEyLjEzOSA2NS4xMjVDOC40MiA2Mi45MDYgMy40NTEgNjQuMDYyIDEuMTU0IDY3LjgxMkMtMS4xMjcgNzEuNTk0IDAuMDc2IDc2LjUzMSAzLjg1NyA3OC44MTJDOTAuMTcgMTMxLjE2IDIwMi40NTIgMTU5Ljk3NyAzMjAgMTU5Ljk3N0M0MzcuNTYzIDE1OS45NzcgNTQ5Ljg0NSAxMzEuMTYgNjM2LjE0MyA3OC44MTJDNjM5LjkyNCA3Ni41MzEgNjQxLjEyNyA3MS41OTQgNjM4Ljg0NiA2Ny44MTJaTTUyMC43NTUgMjU3LjM2N0M1MjAuNjY5IDI1Ny4wMjMgNTIwLjkwMiAyNTYuNjk1IDUyMC43NjcgMjU2LjM1OUw0ODcuNDM5IDE3My4wMDhDNDg1Ljc4MiAxNjguOTE0IDQ4MS4xMjYgMTY2Ljk0NSA0NzcuMDQ4IDE2OC41MzlDNDcyLjkzOCAxNzAuMTk1IDQ3MC45NTQgMTc0Ljg1MiA0NzIuNTk1IDE3OC45NDVMNTA1LjkyMyAyNjIuMjk3QzUwNS45MjUgMjYyLjMwMSA1MDUuOTMxIDI2Mi4zMDUgNTA1LjkzMyAyNjIuMzA5QzQ5Mi43OCAyNjguNDQ1IDQ4MS45OTEgMjc4LjYwMiA0NzYuMDk1IDI5MS4yOTdDNDcwLjIzNSAzMDMuODkxIDQ2OS41NjMgMzE3LjYxMyA0NzQuMTg5IDMyOS45OTJDNDg1LjU0OCAzNTkuOTYxIDUzMi45NTUgNDEwLjkzNCA1NjguMTExIDQzMC45MzhDNTY5LjMzIDQzMS42NTYgNTcwLjY4OSA0MzIgNTcyLjA2NCA0MzJDNTcyLjk4NiA0MzIgNTczLjkwOCA0MzEuODQ0IDU3NC43OTkgNDMxLjUzMUM1NzcuMDAyIDQzMC43MTkgNTc4LjczNiA0MjkgNTc5LjU2NCA0MjYuNzgxQzU5My40MDggMzg5LjU4NiA1OTYuMzc3IDMyMC43MDcgNTg1LjQwOCAyOTAuMjM0QzU3Ni4xOTMgMjY1LjM0NCA1NDguNDk4IDI1MS45OTIgNTIwLjc1NSAyNTcuMzY3Wk01NjcuNjExIDQxMS44MDlDNTM1LjE4OSAzODkuODk4IDQ5Ny41NDggMzQ2LjQ2MSA0ODkuMTU3IDMyNC4zMzJDNDg2LjA2NCAzMTYuMDUxIDQ4Ni41NjQgMzA2LjcwNyA0OTAuNTk1IDI5OC4wNDdDNDk1LjUzMiAyODcuNDUzIDUwNS4wNzkgMjc4Ljk4NCA1MTYuNzk4IDI3NC43OTdDNTIyLjE4OSAyNzIuODkxIDUyNy42NzMgMjcxLjk4NCA1MzMuMDAxIDI3MS45ODRDNTQ5Ljc1MSAyNzEuOTg0IDU2NC45MjMgMjgwLjk1MyA1NzAuMzc3IDI5NS43MzRDNTc4LjQzOSAzMTguMTEzIDU3OC4wNDkgMzc0Ljg2NyA1NjcuNjExIDQxMS44MDlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LightsHoliday(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M134.098 262.309C134.1 262.305 134.106 262.301 134.108 262.297L167.437 178.945C169.077 174.852 167.093 170.195 162.983 168.539C158.858 166.945 154.233 168.914 152.593 173.008L119.264 256.359C119.13 256.695 119.362 257.016 119.276 257.359C91.616 252 63.846 265.359 54.592 290.297C43.654 320.707 46.623 389.586 60.467 426.781C61.295 429 63.03 430.719 65.233 431.531C66.123 431.844 67.045 432 67.967 432C69.342 432 70.702 431.656 71.92 430.938C107.077 410.934 154.483 359.961 165.843 329.992C165.843 329.961 165.843 329.961 165.843 329.961C170.468 317.613 169.796 303.891 163.936 291.297C158.04 278.602 147.251 268.445 134.098 262.309ZM150.874 324.332C142.483 346.461 104.827 389.898 72.42 411.809C61.983 374.867 61.592 318.113 69.623 295.797C75.108 280.984 90.28 271.984 107.045 271.984C112.358 271.984 117.858 272.891 123.233 274.797C134.952 278.984 144.499 287.453 149.436 298.047C153.452 306.707 153.968 316.051 150.874 324.332ZM327.734 272.664C327.76 272.406 328.016 272.25 328.016 271.984V191.977C328.016 187.57 324.438 183.977 320.016 183.977S312.016 187.57 312.016 191.977V271.984C312.016 272.25 312.271 272.406 312.297 272.664C283.414 276.008 260.984 297.391 260.984 323.488C260.984 354.18 287.765 415.652 314.047 445.312C315.562 447.031 317.75 448 320.031 448C322.328 448 324.5 447.031 326.015 445.312C352.297 415.652 379.079 354.148 379.079 323.488C379.079 297.383 356.631 275.992 327.734 272.664ZM320.016 427.344C297.125 397.121 276.984 345.961 276.984 323.488C276.984 303.922 296.297 287.984 320.031 287.984S363.078 303.922 363.078 323.488C363.078 347.867 341.578 398.684 320.016 427.344ZM638.846 67.812C636.565 64.062 631.611 62.906 627.861 65.125C544.017 115.969 434.688 143.973 320 143.973C205.327 143.973 95.999 115.969 12.139 65.125C8.42 62.906 3.451 64.062 1.154 67.812C-1.127 71.594 0.076 76.531 3.857 78.812C90.17 131.16 202.452 159.977 320 159.977C437.563 159.977 549.845 131.16 636.143 78.812C639.924 76.531 641.127 71.594 638.846 67.812ZM520.755 257.367C520.669 257.023 520.902 256.695 520.767 256.359L487.439 173.008C485.782 168.914 481.126 166.945 477.048 168.539C472.938 170.195 470.954 174.852 472.595 178.945L505.923 262.297C505.925 262.301 505.931 262.305 505.933 262.309C492.78 268.445 481.991 278.602 476.095 291.297C470.235 303.891 469.563 317.613 474.189 329.992C485.548 359.961 532.955 410.934 568.111 430.938C569.33 431.656 570.689 432 572.064 432C572.986 432 573.908 431.844 574.799 431.531C577.002 430.719 578.736 429 579.564 426.781C593.408 389.586 596.377 320.707 585.408 290.234C576.193 265.344 548.498 251.992 520.755 257.367ZM567.611 411.809C535.189 389.898 497.548 346.461 489.157 324.332C486.064 316.051 486.564 306.707 490.595 298.047C495.532 287.453 505.079 278.984 516.798 274.797C522.189 272.891 527.673 271.984 533.001 271.984C549.751 271.984 564.923 280.953 570.377 295.734C578.439 318.113 578.049 374.867 567.611 411.809Z" />
        </Icon>
    </>
}