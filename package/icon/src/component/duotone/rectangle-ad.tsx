
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-ad` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-ad?s=duotone rectangle-ad}
 * @preview ![rectangle-ad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4Ni44MzYgMjgwSDIyOS4xNjRMMjA4IDIzNy42NzJMMTg2LjgzNiAyODBaTTUxMiAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTIgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDUxMkM1NDcuMzQ2IDQ4MCA1NzYgNDUxLjM0NiA1NzYgNDE2Vjk2QzU3NiA2MC42NTIgNTQ3LjM0NiAzMiA1MTIgMzJaTTI5MC43MTkgMzQ5LjQ2OUMyODcuMjgxIDM1MS4xODggMjgzLjYyNSAzNTIgMjgwLjAzMSAzNTJDMjcxLjIxOSAzNTIgMjYyLjc1IDM0Ny4xNDEgMjU4LjUzMSAzMzguNzM0TDI0OS4xNjQgMzIwSDE2Ni44MzZMMTU3LjQ2OSAzMzguNzM0QzE1MS41NjIgMzUwLjU5NCAxMzcuMTU2IDM1NS40MzggMTI1LjI4MSAzNDkuNDY5QzExMy40MDYgMzQzLjUzMSAxMDguNTk0IDMyOS4xMjUgMTE0LjUzMSAzMTcuMjY2TDE4Ni41MzEgMTczLjI2NkMxOTQuNjU2IDE1Ny4wMTYgMjIxLjM0NCAxNTcuMDE2IDIyOS40NjkgMTczLjI2NkwzMDEuNDY5IDMxNy4yNjZDMzA3LjQwNiAzMjkuMTI1IDMwMi41OTQgMzQzLjUzMSAyOTAuNzE5IDM0OS40NjlaTTQ2NCAzMjhDNDY0IDM0MS4yNSA0NTMuMjUgMzUyIDQ0MCAzNTJDNDMzLjI5MyAzNTIgNDI3LjI2IDM0OS4yMTkgNDIyLjkwNCAzNDQuNzc5QzQxMy41MDggMzQ5LjI3MyA0MDMuMTExIDM1MiAzOTIgMzUyQzM1Mi4yMzYgMzUyIDMyMCAzMTkuNzY0IDMyMCAyODBTMzUyLjIzNiAyMDggMzkyIDIwOEM0MDAuNDYxIDIwOCA0MDguNDU5IDIwOS43MjcgNDE2IDIxMi40MDhWMTg0QzQxNiAxNzAuNzUgNDI2Ljc1IDE2MCA0NDAgMTYwUzQ2NCAxNzAuNzUgNDY0IDE4NFYzMjhaTTM5MiAyNTZDMzc4Ljc2OCAyNTYgMzY4IDI2Ni43NjYgMzY4IDI4MFMzNzguNzY4IDMwNCAzOTIgMzA0QzQwNS4yMzQgMzA0IDQxNiAyOTMuMjM0IDQxNiAyODBTNDA1LjIzNCAyNTYgMzkyIDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQwLjAxMiAxNjBDNDI2Ljc2MiAxNjAgNDE2LjAxMiAxNzAuNzUgNDE2LjAxMiAxODRWMjEyLjQwOEM0MDguNDcxIDIwOS43MjcgNDAwLjQ3MyAyMDggMzkyLjAxMiAyMDhDMzUyLjI0OCAyMDggMzIwLjAxMiAyNDAuMjM2IDMyMC4wMTIgMjgwUzM1Mi4yNDggMzUyIDM5Mi4wMTIgMzUyQzQwMy4xMjMgMzUyIDQxMy41MiAzNDkuMjczIDQyMi45MTYgMzQ0Ljc3OUM0MjcuMjcyIDM0OS4yMTkgNDMzLjMwNSAzNTIgNDQwLjAxMiAzNTJDNDUzLjI2MiAzNTIgNDY0LjAxMiAzNDEuMjUgNDY0LjAxMiAzMjhWMTg0QzQ2NC4wMTIgMTcwLjc1IDQ1My4yNjIgMTYwIDQ0MC4wMTIgMTYwWk0zOTIuMDEyIDMwNEMzNzguNzggMzA0IDM2OC4wMTIgMjkzLjIzNCAzNjguMDEyIDI4MFMzNzguNzggMjU2IDM5Mi4wMTIgMjU2QzQwNS4yNDYgMjU2IDQxNi4wMTIgMjY2Ljc2NiA0MTYuMDEyIDI4MFM0MDUuMjQ2IDMwNCAzOTIuMDEyIDMwNFpNMjI5LjQ4MSAxNzMuMjY2QzIyMS4zNTYgMTU3LjAxNiAxOTQuNjY4IDE1Ny4wMTYgMTg2LjU0MyAxNzMuMjY2TDExNC41NDMgMzE3LjI2NkMxMDguNjA2IDMyOS4xMjUgMTEzLjQxOCAzNDMuNTMxIDEyNS4yOTMgMzQ5LjQ2OUMxMzcuMTY4IDM1NS40MzggMTUxLjU3NSAzNTAuNTk0IDE1Ny40ODEgMzM4LjczNEwxNjYuODQ4IDMyMEgyNDkuMTc2TDI1OC41NDMgMzM4LjczNEMyNjIuNzYyIDM0Ny4xNDEgMjcxLjIzMSAzNTIgMjgwLjA0MyAzNTJDMjgzLjYzNyAzNTIgMjg3LjI5MyAzNTEuMTg4IDI5MC43MzEgMzQ5LjQ2OUMzMDIuNjA2IDM0My41MzEgMzA3LjQxOCAzMjkuMTI1IDMwMS40ODEgMzE3LjI2NkwyMjkuNDgxIDE3My4yNjZaTTE4Ni44NDggMjgwTDIwOC4wMTIgMjM3LjY3MkwyMjkuMTc2IDI4MEgxODYuODQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const RectangleAd: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M186.836 280H229.164L208 237.672L186.836 280ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM290.719 349.469C287.281 351.188 283.625 352 280.031 352C271.219 352 262.75 347.141 258.531 338.734L249.164 320H166.836L157.469 338.734C151.562 350.594 137.156 355.438 125.281 349.469C113.406 343.531 108.594 329.125 114.531 317.266L186.531 173.266C194.656 157.016 221.344 157.016 229.469 173.266L301.469 317.266C307.406 329.125 302.594 343.531 290.719 349.469ZM464 328C464 341.25 453.25 352 440 352C433.293 352 427.26 349.219 422.904 344.779C413.508 349.273 403.111 352 392 352C352.236 352 320 319.764 320 280S352.236 208 392 208C400.461 208 408.459 209.727 416 212.408V184C416 170.75 426.75 160 440 160S464 170.75 464 184V328ZM392 256C378.768 256 368 266.766 368 280S378.768 304 392 304C405.234 304 416 293.234 416 280S405.234 256 392 256Z" />
            <path d="M440.012 160C426.762 160 416.012 170.75 416.012 184V212.408C408.471 209.727 400.473 208 392.012 208C352.248 208 320.012 240.236 320.012 280S352.248 352 392.012 352C403.123 352 413.52 349.273 422.916 344.779C427.272 349.219 433.305 352 440.012 352C453.262 352 464.012 341.25 464.012 328V184C464.012 170.75 453.262 160 440.012 160ZM392.012 304C378.78 304 368.012 293.234 368.012 280S378.78 256 392.012 256C405.246 256 416.012 266.766 416.012 280S405.246 304 392.012 304ZM229.481 173.266C221.356 157.016 194.668 157.016 186.543 173.266L114.543 317.266C108.606 329.125 113.418 343.531 125.293 349.469C137.168 355.438 151.575 350.594 157.481 338.734L166.848 320H249.176L258.543 338.734C262.762 347.141 271.231 352 280.043 352C283.637 352 287.293 351.188 290.731 349.469C302.606 343.531 307.418 329.125 301.481 317.266L229.481 173.266ZM186.848 280L208.012 237.672L229.176 280H186.848Z" />
    </Icon>
);

export default RectangleAd;