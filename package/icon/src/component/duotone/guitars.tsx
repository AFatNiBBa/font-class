
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `guitars` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/guitars?s=duotone guitars}
 * @preview ![guitars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNS40OTQgNDAwLjg3NUw0NzguNDk0IDMyNy4zNzVDNDcxLjg2OSAzMDkuMTI1IDQ3Mi43NDQgMjg5LjEyNSA0ODEuMTE5IDI3MS42MjVDNDg1Ljc0NCAyNjEuODc1IDQ4OC4xMTkgMjUxLjM3NSA0ODguMTE5IDI0MC42MjVWMjEyLjM3NUM0ODguMTE5IDIwMy43NSA0ODIuMjQ0IDE5Ni4zNzUgNDczLjk5NCAxOTQuMzc1UzQ1Ny4xMTkgMTk2LjI1IDQ1My4yNDQgMjAzLjg3NUw0NDIuNjE5IDIyNC4zNzVDNDM3LjI0NiAyMzQuNzUgNDI3LjI0NiAyNDEuMzc1IDQxNS45OTYgMjQzLjM3NUwzNTEuOTk2IDI0Mi41QzM0MC43NDYgMjM5LjUgMzMxLjEyMSAyMzEuNSAzMjYuOTk2IDIyMC4xMjVMMzEzLjk5NiAxODQuMzc1QzMxMS4xMjEgMTc2LjUgMzAyLjg3MyAxNzEuNzUgMjk0LjQ5OCAxNzMuMjVDMjg2LjEyMyAxNzQuNjI1IDI4MC4xMjMgMTgxLjg3NSAyODAuMTIzIDE5MC4zNzVWMjQwLjc1QzI4MC4xMjMgMjUxLjUgMjgyLjQ5OCAyNjIgMjg3LjEyMyAyNzEuNjI1QzI5NS4zNzMgMjg5LjEyNSAyOTYuMjQ4IDMwOS4yNSAyODkuNjIzIDMyNy41TDI2Mi42MjMgNDAxQzIzOS45OTggNDUzLjUgMjc4LjQ5OCA1MTIgMzM1Ljc0NiA1MTJINDMyLjEyMUM0ODkuMzY5IDUxMiA1MjcuOTk0IDQ1My4zNzUgNTA1LjQ5NCA0MDAuODc1Wk00MzEuOTk2IDM5MkM0MzEuOTk2IDM5Ni4zNzUgNDI4LjM3MSA0MDAgNDIzLjk5NiA0MDBIMzQzLjk5NkMzMzkuNjIxIDQwMCAzMzUuOTk2IDM5Ni4zNzUgMzM1Ljk5NiAzOTJWMzc2QzMzNS45OTYgMzcxLjYyNSAzMzkuNjIxIDM2OCAzNDMuOTk2IDM2OEg0MjMuOTk2QzQyOC4zNzEgMzY4IDQzMS45OTYgMzcxLjYyNSA0MzEuOTk2IDM3NlYzOTJaTTQzMS45OTYgMzI3Ljg3NUM0MzEuOTk2IDMzMi4yNSA0MjguMzcxIDMzNS44NzUgNDIzLjk5NiAzMzUuODc1SDM0My45OTZDMzM5LjYyMSAzMzUuODc1IDMzNS45OTYgMzMyLjI1IDMzNS45OTYgMzI3Ljg3NVYzMTEuODc1QzMzNS45OTYgMzA3LjUgMzM5LjYyMSAzMDMuODc1IDM0My45OTYgMzAzLjg3NUg0MjMuOTk2QzQyOC4zNzEgMzAzLjg3NSA0MzEuOTk2IDMwNy41IDQzMS45OTYgMzExLjg3NVYzMjcuODc1Wk0yMjkuMjQ4IDMwMC4yNUMyMzQuNzQ4IDI4OS42MjUgMjM3LjYyMyAyNzcuODc1IDIzNy43NDggMjY2QzIzNy43NDggMjM2Ljg3NSAyMjAuNzQ4IDIxMS4xMjUgMTk0LjQ5OCAxOTQuODc1QzE4MS43NjcgMTg2Ljg4NyAxNjcuMDQgMTgyLjg5NSAxNTIuMDY0IDE4MS4wMTZWMjI0QzE1Mi4wNjQgMjMyLjgzNyAxNDQuOSAyNDAgMTM2LjA2NCAyNDBIMTIwLjA2NEMxMTEuMjI3IDI0MCAxMDQuMDY0IDIzMi44MzcgMTA0LjA2NCAyMjRWMTgxSDEwMy45OTlDODguOTk5IDE4Mi44NzUgNzQuMjQ5IDE4Ni44NzUgNjEuMzc0IDE5NC44NzVDNTQuNjI0IDE5OSA0OC40OTkgMjAzLjg3NSA0Mi44NzQgMjA5LjVDMjcuNTAxIDIyNC44NzUgMTguMjUxIDI0NC41IDE4LjI1MSAyNjYuMTI1QzE4LjI1MSAyNzggMjEuMTI2IDI4OS43NSAyNi42MjYgMzAwLjI1QzM0LjYyNCAzMTUuODc1IDMyLjYyNCAzMzUuODc1IDIxLjc1MSAzNDlDOC4xMjYgMzY1LjUgLTAuMTI0IDM4NS4zNzUgMC4wMDEgNDA3Qy0wLjEyNCA0NjUgNTcuMzc0IDUxMiAxMjcuOTk5IDUxMkMxNjkuNzY0IDUxMiAyMDYuODY0IDQ5NS41NDUgMjMwLjI1NCA0NzAuMTAyQzIzMC4yOTcgNDY5Ljg4NCAyMzAuMzMgNDY5LjcxNiAyMzAuMzczIDQ2OS40OThDMjIxLjEyMyA0NDMuMzczIDIyMS45OTggNDE0Ljc0OSAyMzIuNzQ4IDM4OS4xMjVMMjQyLjk5OCAzNjEuMzc1QzI0MC4zNzMgMzU3LjEyNSAyMzcuMzczIDM1Mi44NzUgMjM0LjI0OCAzNDlDMjIzLjI0OCAzMzUuODc1IDIyMS4yNDggMzE1Ljg3NSAyMjkuMjQ4IDMwMC4yNVpNMTU2LjI0OSAzMzIuMjVDMTQwLjYyNCAzNDcuODc1IDExNS4zNzQgMzQ3Ljg3NSA5OS43NDkgMzMyLjI1Uzg0LjEyNCAyOTEuMzc1IDk5Ljc0OSAyNzUuNzVTMTQwLjYyNCAyNjAuMTI1IDE1Ni4yNDkgMjc1Ljc1QzE3MS44NzIgMjkxLjM3NSAxNzEuODcyIDMxNi42MjUgMTU2LjI0OSAzMzIuMjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE0NC45OTggMEgxMTAuNUM5NS45MjQgMCA4NCAxMS45MjYgODQgMjYuNVY4MC41Qzg0IDg0LjkzOSA4NS4wMzMgODkuMzE2IDg3LjAxOCA5My4yODdMMTAzLjc1IDEyNi43NVYyMjRDMTAzLjc1IDIzMi44MzYgMTEwLjkxNCAyNDAgMTE5Ljc1IDI0MEgxMzUuNzVDMTQ0LjU4NiAyNDAgMTUxLjc1IDIzMi44MzYgMTUxLjc1IDIyNFYxMjYuNzVMMTY4LjI0MiA5My43NkMxNzAuMzAxIDg5LjY0MyAxNzEuMzczIDg1LjEwNCAxNzEuMzczIDgwLjVWMjYuMzc1QzE3MS4zNzMgMTEuODA5IDE1OS41NjQgMCAxNDQuOTk4IDBaTTM1OC42NTIgMTUxVjI0Mi42MjVMNDA2LjY1MiAyNDMuMjVWNzMuMzc1QzQwOC40MDIgNzIuMjUgNDEwLjE1MiA3MSA0MTEuNzc3IDY5LjYyNUM0MjYuNTI3IDU0Ljc1IDQyNy43NzcgMzEuMTI1IDQxNC40MDIgMTQuODc1QzQwMS4xNTIgLTEuMjUgMzc3Ljc3NyAtNC43NSAzNjAuMjc3IDYuODc1QzM0My45MDIgMTggMzQ2LjI3NyAyMC4xMjUgMzI4LjQwMiAxMDMuMTI1QzMyNi41MjcgMTEyLjEyNSAzMjkuMjc3IDEyMS41IDMzNS43NzcgMTI4LjEyNUwzNTguNjUyIDE1MVpNNDIzLjY4MiAzNjhIMzQzLjY4NEMzMzkuMzA5IDM2OCAzMzUuNjg0IDM3MS42MjUgMzM1LjY4NCAzNzZWMzkyQzMzNS42ODQgMzk2LjM3NSAzMzkuMzA5IDQwMCAzNDMuNjg0IDQwMEg0MjMuNjgyQzQyOC4wNTcgNDAwIDQzMS42ODIgMzk2LjM3NSA0MzEuNjgyIDM5MlYzNzZDNDMxLjY4MiAzNzEuNjI1IDQyOC4wNTcgMzY4IDQyMy42ODIgMzY4Wk00MjMuNjgyIDMwMy44NzVIMzQzLjY4NEMzMzkuMzA5IDMwMy44NzUgMzM1LjY4NCAzMDcuNSAzMzUuNjg0IDMxMS44NzVWMzI3Ljg3NUMzMzUuNjg0IDMzMi4yNSAzMzkuMzA5IDMzNS44NzUgMzQzLjY4NCAzMzUuODc1SDQyMy42ODJDNDI4LjA1NyAzMzUuODc1IDQzMS42ODIgMzMyLjI1IDQzMS42ODIgMzI3Ljg3NVYzMTEuODc1QzQzMS42ODIgMzA3LjUgNDI4LjA1NyAzMDMuODc1IDQyMy42ODIgMzAzLjg3NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Guitars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M505.494 400.875L478.494 327.375C471.869 309.125 472.744 289.125 481.119 271.625C485.744 261.875 488.119 251.375 488.119 240.625V212.375C488.119 203.75 482.244 196.375 473.994 194.375S457.119 196.25 453.244 203.875L442.619 224.375C437.246 234.75 427.246 241.375 415.996 243.375L351.996 242.5C340.746 239.5 331.121 231.5 326.996 220.125L313.996 184.375C311.121 176.5 302.873 171.75 294.498 173.25C286.123 174.625 280.123 181.875 280.123 190.375V240.75C280.123 251.5 282.498 262 287.123 271.625C295.373 289.125 296.248 309.25 289.623 327.5L262.623 401C239.998 453.5 278.498 512 335.746 512H432.121C489.369 512 527.994 453.375 505.494 400.875ZM431.996 392C431.996 396.375 428.371 400 423.996 400H343.996C339.621 400 335.996 396.375 335.996 392V376C335.996 371.625 339.621 368 343.996 368H423.996C428.371 368 431.996 371.625 431.996 376V392ZM431.996 327.875C431.996 332.25 428.371 335.875 423.996 335.875H343.996C339.621 335.875 335.996 332.25 335.996 327.875V311.875C335.996 307.5 339.621 303.875 343.996 303.875H423.996C428.371 303.875 431.996 307.5 431.996 311.875V327.875ZM229.248 300.25C234.748 289.625 237.623 277.875 237.748 266C237.748 236.875 220.748 211.125 194.498 194.875C181.767 186.887 167.04 182.895 152.064 181.016V224C152.064 232.837 144.9 240 136.064 240H120.064C111.227 240 104.064 232.837 104.064 224V181H103.999C88.999 182.875 74.249 186.875 61.374 194.875C54.624 199 48.499 203.875 42.874 209.5C27.501 224.875 18.251 244.5 18.251 266.125C18.251 278 21.126 289.75 26.626 300.25C34.624 315.875 32.624 335.875 21.751 349C8.126 365.5 -0.124 385.375 0.001 407C-0.124 465 57.374 512 127.999 512C169.764 512 206.864 495.545 230.254 470.102C230.297 469.884 230.33 469.716 230.373 469.498C221.123 443.373 221.998 414.749 232.748 389.125L242.998 361.375C240.373 357.125 237.373 352.875 234.248 349C223.248 335.875 221.248 315.875 229.248 300.25ZM156.249 332.25C140.624 347.875 115.374 347.875 99.749 332.25S84.124 291.375 99.749 275.75S140.624 260.125 156.249 275.75C171.872 291.375 171.872 316.625 156.249 332.25Z" />
            <path d="M144.998 0H110.5C95.924 0 84 11.926 84 26.5V80.5C84 84.939 85.033 89.316 87.018 93.287L103.75 126.75V224C103.75 232.836 110.914 240 119.75 240H135.75C144.586 240 151.75 232.836 151.75 224V126.75L168.242 93.76C170.301 89.643 171.373 85.104 171.373 80.5V26.375C171.373 11.809 159.564 0 144.998 0ZM358.652 151V242.625L406.652 243.25V73.375C408.402 72.25 410.152 71 411.777 69.625C426.527 54.75 427.777 31.125 414.402 14.875C401.152 -1.25 377.777 -4.75 360.277 6.875C343.902 18 346.277 20.125 328.402 103.125C326.527 112.125 329.277 121.5 335.777 128.125L358.652 151ZM423.682 368H343.684C339.309 368 335.684 371.625 335.684 376V392C335.684 396.375 339.309 400 343.684 400H423.682C428.057 400 431.682 396.375 431.682 392V376C431.682 371.625 428.057 368 423.682 368ZM423.682 303.875H343.684C339.309 303.875 335.684 307.5 335.684 311.875V327.875C335.684 332.25 339.309 335.875 343.684 335.875H423.682C428.057 335.875 431.682 332.25 431.682 327.875V311.875C431.682 307.5 428.057 303.875 423.682 303.875Z" />
        </Icon>
    </>
}