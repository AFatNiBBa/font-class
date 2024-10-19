
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-snow` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-snow?s=duotone temperature-snow}
 * @preview ![temperature-snow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0My45OTIgMjc4LjUwMVYxMTIuMDAxQzU0My45OTIgNTAuMTI2IDQ5My44NjggMC4wMDEgNDMxLjk5NSAwLjAwMVMzMTkuOTk5IDUwLjEyNiAzMTkuOTk5IDExMi4wMDFWMjc4LjUwMUMzMDAuMjUgMzAzLjEyNiAyODggMzM0LjAwMSAyODggMzY4LjAwMUMyODggNDQ3LjUwMSAzNTIuNDk4IDUxMi4wMDEgNDMxLjk5NSA1MTIuMDAxUzU3NS45OTEgNDQ3LjUwMSA1NzUuOTkxIDM2OC4wMDFDNTc1Ljk5MSAzMzQuMDAxIDU2My43NDEgMzAzLjEyNiA1NDMuOTkyIDI3OC41MDFaTTQzMS45OTUgNDQ4LjAwMUMzODcuODcyIDQ0OC4wMDEgMzUxLjk5OCA0MTIuMTI2IDM1MS45OTggMzY4LjAwMUMzNTEuOTk4IDM0Mi41MDEgMzY0LjI0OCAzMTkuMTI2IDM4My45OTcgMzA0LjI1MVYxMTIuMDAxQzM4My45OTcgODUuNTAxIDQwNS40OTYgNjQuMDAxIDQzMS45OTUgNjQuMDAxUzQ3OS45OTQgODUuNTAxIDQ3OS45OTQgMTEyLjAwMVYzMDQuMjUxQzQ5OS43NDMgMzE5LjAwMSA1MTEuOTkzIDM0Mi41MDEgNTExLjk5MyAzNjguMDAxQzUxMS45OTMgNDEyLjEyNiA0NzYuMTE5IDQ0OC4wMDEgNDMxLjk5NSA0NDguMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMDAuMDExIDEyNS4yNUwyNDAuMjYxIDg1QzI0NC44ODQgODAuMjUgMjQ0Ljg4NCA3Mi43NSAyNDAuMjYxIDY4TDIzMS43NjEgNTkuNUMyMjcuMDExIDU0Ljc1IDIxOS4zODYgNTQuNzUgMjE0Ljc2MSA1OS41TDIwMC4wMTEgNzQuMjVWNDRDMjAwLjAxMSAzNy4zNzUgMTk0LjYzNiAzMiAxODguMDExIDMySDE2NC4wMTNDMTU3LjM4OCAzMiAxNTIuMDEzIDM3LjM3NSAxNTIuMDEzIDQ0Vjc0LjI1TDEzNy4yNjMgNTkuNUMxMzIuNTEzIDU0Ljc1IDEyNC44ODggNTQuNzUgMTIwLjI2NSA1OS41TDExMS43NjUgNjhDMTA3LjAxNSA3Mi43NSAxMDcuMDE1IDgwLjI1IDExMS43NjUgODVMMTUxLjg4OCAxMjUuMjVWMTgyLjEyNUwxMDEuNjQgMTUzTDg2LjY0IDk3LjI1Qzg0Ljg5IDkwLjc1IDc4LjI2NSA4NyA3MS43NjUgODguNzVMNjAuMDE3IDkxLjg3NUM1My41MTcgOTMuNjI1IDQ5Ljc2NyAxMDAuMjUgNTEuMzkyIDEwNi43NUw1Ni44OTIgMTI3LjI1TDMwLjI2NyAxMTEuODc1QzI0LjUxNyAxMDguNSAxNy4xNDIgMTEwLjUgMTMuNzY3IDExNi4yNUwxLjY0NCAxMzcuMjVDLTEuNzMxIDE0My4xMjUgMC4yNjkgMTUwLjUgNi4wMTcgMTUzLjg3NUwzMi42NDIgMTY5LjI1TDEyLjI2NyAxNzQuNzVDNS43NjcgMTc2LjM3NSAxLjg5NCAxODMuMTI1IDMuNjQyIDE4OS42MjVMNi43NjcgMjAxLjI1QzguMzkyIDIwNy43NSAxNS4xNDIgMjExLjYyNSAyMS42NDIgMjA5Ljg3NUw3Ny4yNjUgMTk1TDEyNy41MTMgMjI0TDc3LjI2NSAyNTNMMjEuNjQyIDIzOEMxNS4xNDIgMjM2LjI1IDguNTE3IDI0MC4xMjUgNi43NjcgMjQ2LjYyNUwzLjY0MiAyNTguMjVDMS44OTQgMjY0Ljc1IDUuNzY3IDI3MS4zNzUgMTIuMjY3IDI3My4yNUwzMi42NDIgMjc4Ljc1TDYuMTQyIDI5NC4xMjVDMC4yNjkgMjk3LjUgLTEuNzMxIDMwNC44NzUgMS43NjkgMzEwLjc1TDEzLjc2NyAzMzEuNzVDMTcuMjY3IDMzNy41IDI0LjY0MiAzMzkuNSAzMC4zOTIgMzM2LjEyNUw1Ny4wMTcgMzIwLjc1TDUxLjUxNyAzNDEuMjVDNDkuNzY3IDM0Ny43NSA1My42NDIgMzU0LjI1IDYwLjE0MiAzNTYuMTI1TDcxLjc2NSAzNTkuMjVDNzguMjY1IDM2MC44NzUgODQuODkgMzU3LjEyNSA4Ni43NjUgMzUwLjYyNUwxMDEuNjQgMjk1TDE1Mi4wMTMgMjY1Ljg3NVYzMjIuNzVMMTExLjc2NSAzNjNDMTA3LjE0IDM2Ny43NSAxMDcuMTQgMzc1LjI1IDExMS43NjUgMzgwTDEyMC4yNjUgMzg4LjVDMTI1LjAxMyAzOTMuMjUgMTMyLjYzOCAzOTMuMjUgMTM3LjI2MyAzODguNUwxNTIuMTM4IDM3My43NVY0MDRDMTUyLjEzOCA0MTAuNjI1IDE1Ny41MTMgNDE2IDE2NC4xMzggNDE2SDE4OC4xMzZDMTk0Ljc2MSA0MTYgMjAwLjEzNiA0MTAuNjI1IDIwMC4xMzYgNDA0VjM3My43NUwyMTQuODg2IDM4OC41QzIxOS42MzYgMzkzLjI1IDIyNy4yNjEgMzkzLjI1IDIzMS44ODYgMzg4LjVMMjQwLjM4NiAzODBDMjQ1LjEzNCAzNzUuMjUgMjQ1LjEzNCAzNjcuNzUgMjQwLjM4NiAzNjNMMjAwLjAxMSAzMjIuNzVWMjY1Ljg3NUwyNjguMjU5IDMwNS4zNzVDMjczLjM4NCAyOTIuMzc1IDI3OS43NTkgMjc5Ljc1IDI4OC4wMDkgMjY3Ljg3NVYyNjAuNzVMMjI0LjYzNiAyMjRMMjg4LjAwOSAxODcuMzc1VjEzMS4yNUwyMDAuMDExIDE4Mi4xMjVWMTI1LjI1Wk00NDguMDAzIDMyMi44NzVWMzA0QzQ0OC4wMDMgMjk1LjI1IDQ0MC43NTMgMjg4IDQzMi4wMDMgMjg4QzQyMy4yNTUgMjg4IDQxNi4wMDUgMjk1LjI1IDQxNi4wMDUgMzA0VjMyMi44NzVDMzk3LjM4IDMyOS41IDM4NC4wMDUgMzQ3LjEyNSAzODQuMDA1IDM2OEMzODQuMDA1IDM5NC41IDQwNS41MDUgNDE2IDQzMi4wMDMgNDE2QzQ1OC41MDMgNDE2IDQ4MC4wMDMgMzk0LjUgNDgwLjAwMyAzNjhDNDgwLjAwMyAzNDcuMTI1IDQ2Ni42MjggMzI5LjUgNDQ4LjAwMyAzMjIuODc1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TemperatureSnow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M543.992 278.501V112.001C543.992 50.126 493.868 0.001 431.995 0.001S319.999 50.126 319.999 112.001V278.501C300.25 303.126 288 334.001 288 368.001C288 447.501 352.498 512.001 431.995 512.001S575.991 447.501 575.991 368.001C575.991 334.001 563.741 303.126 543.992 278.501ZM431.995 448.001C387.872 448.001 351.998 412.126 351.998 368.001C351.998 342.501 364.248 319.126 383.997 304.251V112.001C383.997 85.501 405.496 64.001 431.995 64.001S479.994 85.501 479.994 112.001V304.251C499.743 319.001 511.993 342.501 511.993 368.001C511.993 412.126 476.119 448.001 431.995 448.001Z" />
            <path d="M200.011 125.25L240.261 85C244.884 80.25 244.884 72.75 240.261 68L231.761 59.5C227.011 54.75 219.386 54.75 214.761 59.5L200.011 74.25V44C200.011 37.375 194.636 32 188.011 32H164.013C157.388 32 152.013 37.375 152.013 44V74.25L137.263 59.5C132.513 54.75 124.888 54.75 120.265 59.5L111.765 68C107.015 72.75 107.015 80.25 111.765 85L151.888 125.25V182.125L101.64 153L86.64 97.25C84.89 90.75 78.265 87 71.765 88.75L60.017 91.875C53.517 93.625 49.767 100.25 51.392 106.75L56.892 127.25L30.267 111.875C24.517 108.5 17.142 110.5 13.767 116.25L1.644 137.25C-1.731 143.125 0.269 150.5 6.017 153.875L32.642 169.25L12.267 174.75C5.767 176.375 1.894 183.125 3.642 189.625L6.767 201.25C8.392 207.75 15.142 211.625 21.642 209.875L77.265 195L127.513 224L77.265 253L21.642 238C15.142 236.25 8.517 240.125 6.767 246.625L3.642 258.25C1.894 264.75 5.767 271.375 12.267 273.25L32.642 278.75L6.142 294.125C0.269 297.5 -1.731 304.875 1.769 310.75L13.767 331.75C17.267 337.5 24.642 339.5 30.392 336.125L57.017 320.75L51.517 341.25C49.767 347.75 53.642 354.25 60.142 356.125L71.765 359.25C78.265 360.875 84.89 357.125 86.765 350.625L101.64 295L152.013 265.875V322.75L111.765 363C107.14 367.75 107.14 375.25 111.765 380L120.265 388.5C125.013 393.25 132.638 393.25 137.263 388.5L152.138 373.75V404C152.138 410.625 157.513 416 164.138 416H188.136C194.761 416 200.136 410.625 200.136 404V373.75L214.886 388.5C219.636 393.25 227.261 393.25 231.886 388.5L240.386 380C245.134 375.25 245.134 367.75 240.386 363L200.011 322.75V265.875L268.259 305.375C273.384 292.375 279.759 279.75 288.009 267.875V260.75L224.636 224L288.009 187.375V131.25L200.011 182.125V125.25ZM448.003 322.875V304C448.003 295.25 440.753 288 432.003 288C423.255 288 416.005 295.25 416.005 304V322.875C397.38 329.5 384.005 347.125 384.005 368C384.005 394.5 405.505 416 432.003 416C458.503 416 480.003 394.5 480.003 368C480.003 347.125 466.628 329.5 448.003 322.875Z" />
        </Icon>
    </>
}