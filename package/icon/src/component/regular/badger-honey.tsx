
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `badger-honey` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/badger-honey?s=regular badger-honey}
 * @preview ![badger-honey](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjIuMjUgMTQyLjVDNTk2LjYyNSAxMjggNTc5LjUgMTE2IDU1MS42MjUgOTcuMTI1QzUzNy4zNzUgODcuNSA1MjEuODc1IDc5LjEyNSA1MDYuNzUgNzIuNUM0OTMuMzc1IDY2Ljc1IDQ3OS4zNzUgNjQgNDY1LjUgNjRDNDQ2LjM3NSA2NCA0MjcuMzc1IDY5LjI1IDQwOS45OTkgNzkuMjVDMzkyLjg3NSA4OSAzNzMuOTk5IDk2IDM1NSA5NkgxMjhDNTcuMjUgOTYgMCAxNTMuMjUgMCAyMjRWMjQwQzAgMjQ4Ljg3NSA3LjEyNSAyNTYgMTYgMjU2SDM2QzQzLjEyNSAyODYuMzc1IDU5Ljg3NSAzMTEuODc1IDgxLjk5OSAzMjkuMTI1TDY5LjYyNSAzNjIuMTI1QzYzLjM3NSAzNzkgNjIuMjUgMzk3IDY3LjYyNSA0MTcuMzc1TDgxLjI1IDQ1MS42MjVDODYuMzc1IDQ2OC4zNzUgMTAxLjc1IDQ4MCAxMTkuNSA0ODBIMTgyLjYyNUMxOTQuODc1IDQ4MCAyMDYuNjI1IDQ3NC43NSAyMTQuMzc1IDQ2NS4yNUMyMjIuMzc1IDQ1NS4zNzUgMjI1LjEyNSA0NDIuNSAyMjIuMTI1IDQzMC4yNUwyMDkuMzc1IDM5Ni4xMjVMMjMxLjEyNSAzNTJIMjg2LjI1TDMwNS4zNzUgNDQ3Ljg3NUMzMDkuMTI1IDQ2Ni41IDMyNS42MjUgNDgwIDM0NC42MjUgNDgwSDQwNy4yNUM0MTkgNDgwIDQzMC4zNzUgNDc1LjEyNSA0MzguMTI1IDQ2Ni4zNzVDNDQ2LjI1IDQ1Ni44NzUgNDQ5LjYyNSA0NDQuMzc1IDQ0Ny4yNSA0MzIuMTI1TDQyMS43NSAzMDQuODc1QzQ3NC43NSAyNzMuMTI1IDUxMi44NzUgMjU4IDU0MS4xMjUgMjUwLjI1TDU2MCAyODhMNTgzIDI0MS44NzVDNjA1LjUgMjM5LjEyNSA2MTYgMjM5LjEyNSA2MjMuODc1IDIyMi44NzVDNjMxLjEyNSAyMDcuNzUgNjQwIDE4Ny4xMjUgNjQwIDE3NS4yNUM2NDAgMTYxLjM3NSA2MzMuMTI1IDE0OC42MjUgNjIyLjI1IDE0Mi41Wk0xMjggMTQ0SDM1NUMzODAuNjI1IDE0NCA0MDcuMjUgMTM2LjI1IDQzMy44NzUgMTIwLjc1QzQ0NCAxMTUgNDU0Ljg3NSAxMTIgNDY1LjUgMTEyQzQ3My4xMjUgMTEyIDQ4MC42MjUgMTEzLjUgNDg3LjYyNSAxMTYuNjI1QzUxMi4xMjUgMTI3LjEyNSA1MjEuMjUgMTM1LjI1IDUzNi4xMjUgMTQ0SDQ2MEM0MjguMjUgMTQ0IDM5OC41IDE1NyAzNjYuODc1IDE3Mi4zNzVMMjY2LjI1IDIzMy4zNzVDMjU3IDIzNy43NSAyNDcuMzc1IDI0MCAyMzcuNSAyNDBIMTkyQzE1NSAyNDAgMTIwLjI1IDE5NiAxMTMuMzc1IDE0NS4zNzVDMTE4LjEyNSAxNDQuNSAxMjMgMTQ0IDEyOCAxNDRaTTU4NC42MjUgMTkzLjM3NUM0ODUuOTk5IDIwNS42MjUgNDIxLjc1IDI0OC44NzUgMzY4LjEyNSAyODEuMTI1QzM3Ni44NzUgMzI1LjUgMzczIDMwNS43NSAzOTguMjUgNDMySDM1MS4xMjVDMzI4Ljg3NSAzMjAuMjUgMzM1LjUgMzUzLjYyNSAzMjUuNjI1IDMwNEgyMDEuMjVDMTcwLjUgMzY2LjM3NSAxNzcuMzc1IDM1Mi4zNzUgMTU3LjEyNSAzOTMuNUMxNjUgNDE0LjYyNSAxNjIuMjUgNDA3LjEyNSAxNzEuNSA0MzJIMTI1LjEyNUwxMTMuMzc1IDQwMi43NUMxMTAuODc1IDM5MS4xMjUgMTEyLjYyNSAzODMuODc1IDExNC41IDM3OUMxMjkuMzc1IDMzOS4yNSAxMjIuODc1IDM1Ni43NSAxMzkuMjUgMzEyLjg3NUwxMTEuMzc1IDI5MS4xMjVDOTcuMzc1IDI4MC4yNSA4Ny4xMjUgMjYzLjg3NSA4Mi43NSAyNDUuMTI1TDc0LjEyNSAyMDhINDkuNjI1QzUzLjg3NSAxODcuMjUgNjYuMjUgMTY5LjYyNSA4My4xMjUgMTU4LjEyNUM5NC4xMjUgMjE2LjYyNSAxMzUuNjI1IDI3MiAxOTIgMjcySDIzNy41QzI1Mi4yNSAyNzIgMjY2LjUgMjY4Ljc1IDI4MS41IDI2MS41TDM4Mi4xMjUgMjAwLjM3NUM0MDguODc1IDE4Ny41IDQzNSAxNzYgNDYwIDE3Nkg0NzYuNzVDNDc4Ljc1IDE4NSA0ODYuMzc1IDE5MiA0OTYgMTkyUzUxMy4yNSAxODUgNTE1LjI1IDE3Nkg1OTUuNjI1QzU5Mi4yNSAxODEuMjUgNTg2LjYyNSAxODguODc1IDU4NC42MjUgMTkzLjM3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BadgerHoney(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M622.25 142.5C596.625 128 579.5 116 551.625 97.125C537.375 87.5 521.875 79.125 506.75 72.5C493.375 66.75 479.375 64 465.5 64C446.375 64 427.375 69.25 409.999 79.25C392.875 89 373.999 96 355 96H128C57.25 96 0 153.25 0 224V240C0 248.875 7.125 256 16 256H36C43.125 286.375 59.875 311.875 81.999 329.125L69.625 362.125C63.375 379 62.25 397 67.625 417.375L81.25 451.625C86.375 468.375 101.75 480 119.5 480H182.625C194.875 480 206.625 474.75 214.375 465.25C222.375 455.375 225.125 442.5 222.125 430.25L209.375 396.125L231.125 352H286.25L305.375 447.875C309.125 466.5 325.625 480 344.625 480H407.25C419 480 430.375 475.125 438.125 466.375C446.25 456.875 449.625 444.375 447.25 432.125L421.75 304.875C474.75 273.125 512.875 258 541.125 250.25L560 288L583 241.875C605.5 239.125 616 239.125 623.875 222.875C631.125 207.75 640 187.125 640 175.25C640 161.375 633.125 148.625 622.25 142.5ZM128 144H355C380.625 144 407.25 136.25 433.875 120.75C444 115 454.875 112 465.5 112C473.125 112 480.625 113.5 487.625 116.625C512.125 127.125 521.25 135.25 536.125 144H460C428.25 144 398.5 157 366.875 172.375L266.25 233.375C257 237.75 247.375 240 237.5 240H192C155 240 120.25 196 113.375 145.375C118.125 144.5 123 144 128 144ZM584.625 193.375C485.999 205.625 421.75 248.875 368.125 281.125C376.875 325.5 373 305.75 398.25 432H351.125C328.875 320.25 335.5 353.625 325.625 304H201.25C170.5 366.375 177.375 352.375 157.125 393.5C165 414.625 162.25 407.125 171.5 432H125.125L113.375 402.75C110.875 391.125 112.625 383.875 114.5 379C129.375 339.25 122.875 356.75 139.25 312.875L111.375 291.125C97.375 280.25 87.125 263.875 82.75 245.125L74.125 208H49.625C53.875 187.25 66.25 169.625 83.125 158.125C94.125 216.625 135.625 272 192 272H237.5C252.25 272 266.5 268.75 281.5 261.5L382.125 200.375C408.875 187.5 435 176 460 176H476.75C478.75 185 486.375 192 496 192S513.25 185 515.25 176H595.625C592.25 181.25 586.625 188.875 584.625 193.375Z" />
        </Icon>
    </>
}