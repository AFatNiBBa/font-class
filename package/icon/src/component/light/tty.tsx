
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tty` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tty?s=light tty}
 * @preview ![tty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzIuMDMgMjYzLjk4NEgxNDguMDNDMTQxLjQwNSAyNjMuOTg0IDEzNi4wMyAyNjkuMzU5IDEzNi4wMyAyNzUuOTg0VjI5OS45ODRDMTM2LjAzIDMwNi42MDkgMTQxLjQwNSAzMTEuOTg0IDE0OC4wMyAzMTEuOTg0SDE3Mi4wM0MxNzguNjU1IDMxMS45ODQgMTg0LjAzIDMwNi42MDkgMTg0LjAzIDI5OS45ODRWMjc1Ljk4NEMxODQuMDMgMjY5LjM1OSAxNzguNjU1IDI2My45ODQgMTcyLjAzIDI2My45ODRaTTI2OC4wMyAyNjMuOTg0SDI0NC4wM0MyMzcuNDA1IDI2My45ODQgMjMyLjAzIDI2OS4zNTkgMjMyLjAzIDI3NS45ODRWMjk5Ljk4NEMyMzIuMDMgMzA2LjYwOSAyMzcuNDA1IDMxMS45ODQgMjQ0LjAzIDMxMS45ODRIMjY4LjAzQzI3NC42NTUgMzExLjk4NCAyODAuMDMgMzA2LjYwOSAyODAuMDMgMjk5Ljk4NFYyNzUuOTg0QzI4MC4wMyAyNjkuMzU5IDI3NC42NTUgMjYzLjk4NCAyNjguMDMgMjYzLjk4NFpNMTM2LjAzIDM5NS45ODRWMzcxLjk4NEMxMzYuMDMgMzY1LjM1OSAxMzAuNjU1IDM1OS45ODQgMTI0LjAzIDM1OS45ODRIMTAwLjAzQzkzLjQwNSAzNTkuOTg0IDg4LjAzIDM2NS4zNTkgODguMDMgMzcxLjk4NFYzOTUuOTg0Qzg4LjAzIDQwMi42MDkgOTMuNDA1IDQwNy45ODQgMTAwLjAzIDQwNy45ODRIMTI0LjAzQzEzMC42NTUgNDA3Ljk4NCAxMzYuMDMgNDAyLjYwOSAxMzYuMDMgMzk1Ljk4NFpNMTg0LjAzIDM5NS45ODRDMTg0LjAzIDQwMi42MDkgMTg5LjQwNSA0MDcuOTg0IDE5Ni4wMyA0MDcuOTg0SDIyMC4wM0MyMjYuNjU1IDQwNy45ODQgMjMyLjAzIDQwMi42MDkgMjMyLjAzIDM5NS45ODRWMzcxLjk4NEMyMzIuMDMgMzY1LjM1OSAyMjYuNjU1IDM1OS45ODQgMjIwLjAzIDM1OS45ODRIMTk2LjAzQzE4OS40MDUgMzU5Ljk4NCAxODQuMDMgMzY1LjM1OSAxODQuMDMgMzcxLjk4NFYzOTUuOTg0Wk03Ni4wMyA0NTUuOTg0SDUyLjAzQzQ1LjQwNSA0NTUuOTg0IDQwLjAzIDQ2MS4zNTkgNDAuMDMgNDY3Ljk4NFY0OTEuOTg0QzQwLjAzIDQ5OC42MDkgNDUuNDA1IDUwMy45ODQgNTIuMDMgNTAzLjk4NEg3Ni4wM0M4Mi42NTUgNTAzLjk4NCA4OC4wMyA0OTguNjA5IDg4LjAzIDQ5MS45ODRWNDY3Ljk4NEM4OC4wMyA0NjEuMzU5IDgyLjY1NSA0NTUuOTg0IDc2LjAzIDQ1NS45ODRaTTUyLjAzIDMxMS45ODRINzYuMDNDODIuNjU1IDMxMS45ODQgODguMDMgMzA2LjYwOSA4OC4wMyAyOTkuOTg0VjI3NS45ODRDODguMDMgMjY5LjM1OSA4Mi42NTUgMjYzLjk4NCA3Ni4wMyAyNjMuOTg0SDUyLjAzQzQ1LjQwNSAyNjMuOTg0IDQwLjAzIDI2OS4zNTkgNDAuMDMgMjc1Ljk4NFYyOTkuOTg0QzQwLjAzIDMwNi42MDkgNDUuNDA1IDMxMS45ODQgNTIuMDMgMzExLjk4NFpNNDI0LjAzIDM3MS45ODRDNDI0LjAzIDM2NS4zNTkgNDE4LjY1NSAzNTkuOTg0IDQxMi4wMyAzNTkuOTg0SDM4OC4wM0MzODEuNDA1IDM1OS45ODQgMzc2LjAzIDM2NS4zNTkgMzc2LjAzIDM3MS45ODRWMzk1Ljk4NEMzNzYuMDMgNDAyLjYwOSAzODEuNDA1IDQwNy45ODQgMzg4LjAzIDQwNy45ODRINDEyLjAzQzQxOC42NTUgNDA3Ljk4NCA0MjQuMDMgNDAyLjYwOSA0MjQuMDMgMzk1Ljk4NFYzNzEuOTg0Wk0yODAuMDMgMzk1Ljk4NEMyODAuMDMgNDAyLjYwOSAyODUuNDA1IDQwNy45ODQgMjkyLjAzIDQwNy45ODRIMzE2LjAzQzMyMi42NTUgNDA3Ljk4NCAzMjguMDMgNDAyLjYwOSAzMjguMDMgMzk1Ljk4NFYzNzEuOTg0QzMyOC4wMyAzNjUuMzU5IDMyMi42NTUgMzU5Ljk4NCAzMTYuMDMgMzU5Ljk4NEgyOTIuMDNDMjg1LjQwNSAzNTkuOTg0IDI4MC4wMyAzNjUuMzU5IDI4MC4wMyAzNzEuOTg0VjM5NS45ODRaTTQ2MC4wMyA0NTUuOTg0SDQzNi4wM0M0MjkuNDA1IDQ1NS45ODQgNDI0LjAzIDQ2MS4zNTkgNDI0LjAzIDQ2Ny45ODRWNDkxLjk4NEM0MjQuMDMgNDk4LjYwOSA0MjkuNDA1IDUwMy45ODQgNDM2LjAzIDUwMy45ODRINDYwLjAzQzQ2Ni42NTUgNTAzLjk4NCA0NzIuMDMgNDk4LjYwOSA0NzIuMDMgNDkxLjk4NFY0NjcuOTg0QzQ3Mi4wMyA0NjEuMzU5IDQ2Ni42NTUgNDU1Ljk4NCA0NjAuMDMgNDU1Ljk4NFpNNDYwLjAzIDI2My45ODRINDM2LjAzQzQyOS40MDUgMjYzLjk4NCA0MjQuMDMgMjY5LjM1OSA0MjQuMDMgMjc1Ljk4NFYyOTkuOTg0QzQyNC4wMyAzMDYuNjA5IDQyOS40MDUgMzExLjk4NCA0MzYuMDMgMzExLjk4NEg0NjAuMDNDNDY2LjY1NSAzMTEuOTg0IDQ3Mi4wMyAzMDYuNjA5IDQ3Mi4wMyAyOTkuOTg0VjI3NS45ODRDNDcyLjAzIDI2OS4zNTkgNDY2LjY1NSAyNjMuOTg0IDQ2MC4wMyAyNjMuOTg0Wk01MDAuNTI4IDk3Ljk2OUMzNjUuNzE1IC0zMi41OTQgMTQ2LjM3MiAtMzIuNTk0IDExLjU1OSA5Ny45NjlDLTEuNDg4IDExMC41OTQgLTMuNzM4IDEzMCA2LjA3NSAxNDUuMTU2TDQ1LjU5IDIwNi4zNzVDNTUuNDAzIDIyMS42NTYgNzUuMDEyIDIyOCA5Mi4zNTYgMjIxLjM3NUwxNzEuNDk3IDE5MC43NUMxODcuNDUgMTg0LjUzMSAxOTcuMzcyIDE2OC40NjkgMTk1LjYwNiAxNTEuNzgxTDE5MS45OTcgMTE2LjUzMUMyMzMuNzMxIDEwNS4xNTYgMjc4LjQxOCAxMDUuMTU2IDMyMC4xODQgMTE2LjUzMUwzMTYuNTc1IDE1MS41OTRDMzE0LjY4NCAxNjguNDY5IDMyNC42MzcgMTg0LjU2MyAzNDAuNzMxIDE5MC43NUw0MTkuODA5IDIyMS40MDZDNDI0LjQwMyAyMjMuMTU2IDQyOS4xNTMgMjI0IDQzMy44NTYgMjI0QzQ0Ni43NjIgMjI0IDQ1OS4yNDcgMjE3LjYyNSA0NjYuNDgxIDIwNi40MzhMNTA2LjAyOCAxNDUuMTU2QzUxNS44MjUgMTMwIDUxMy41NTkgMTEwLjU5NCA1MDAuNTI4IDk3Ljk2OVpNNDc5LjE1MyAxMjcuNzgxTDQzOS42MDYgMTg5LjA2M0M0MzcuOTUgMTkxLjYyNSA0MzQuMzI1IDE5Mi42MjUgNDMxLjM0IDE5MS41NjNMMzUyLjI2MiAxNjAuOTA2QzM0OS43IDE1OS45MzggMzQ4LjEwNiAxNTcuNTYzIDM0OC40MDMgMTU1TDM1My4zNzIgMTA2LjY1NkMzNTQuMTM3IDk5LjE4OCAzNDkuNjA2IDkyLjE4OCAzNDIuNDY1IDg5Ljg0NEMzMTQuNjIyIDgwLjYyNSAyODUuMzU2IDc2LjAzMSAyNTYuMDkgNzYuMDMxUzE5Ny41NTkgODAuNjI1IDE2OS43MTUgODkuODQ0QzE2Mi41NzUgOTIuMTg4IDE1OC4wNDMgOTkuMTg4IDE1OC44MDkgMTA2LjY1NkwxNjMuNzc4IDE1NS4wOTRDMTY0LjAyOCAxNTcuNTMxIDE2Mi40MzQgMTU5LjkzOCAxNTkuOTAzIDE2MC45MzhMODAuODg3IDE5MS41Qzc3LjcxNSAxOTIuNzUgNzQuMTUzIDE5MS42NTYgNzIuNDgxIDE4OS4wMzFMMzIuOTM0IDEyNy43ODFDMzEuNDgxIDEyNS41IDMxLjgwOSAxMjIuOTA2IDMzLjgwOSAxMjAuOTY5QzE1Ni4zNzIgMi4yODEgMzU1LjcxNSAyLjI4MSA0NzguMjc4IDEyMC45NjlDNDgwLjI3OCAxMjIuOTA2IDQ4MC42MjIgMTI1LjUzMSA0NzkuMTUzIDEyNy43ODFaTTM2NC4wMyAzMTEuOTg0QzM3MC42NTUgMzExLjk4NCAzNzYuMDMgMzA2LjYwOSAzNzYuMDMgMjk5Ljk4NFYyNzUuOTg0QzM3Ni4wMyAyNjkuMzU5IDM3MC42NTUgMjYzLjk4NCAzNjQuMDMgMjYzLjk4NEgzNDAuMDNDMzMzLjQwNSAyNjMuOTg0IDMyOC4wMyAyNjkuMzU5IDMyOC4wMyAyNzUuOTg0VjI5OS45ODRDMzI4LjAzIDMwNi42MDkgMzMzLjQwNSAzMTEuOTg0IDM0MC4wMyAzMTEuOTg0SDM2NC4wM1pNMzY4LjA0MyA0NjRIMTQ0LjA0M0MxMzUuMiA0NjQgMTI4LjA0MyA0NzEuMTU2IDEyOC4wNDMgNDgwUzEzNS4yIDQ5NiAxNDQuMDQzIDQ5NkgzNjguMDQzQzM3Ni44ODcgNDk2IDM4NC4wNDMgNDg4Ljg0NCAzODQuMDQzIDQ4MFMzNzYuODg3IDQ2NCAzNjguMDQzIDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M172.03 263.984H148.03C141.405 263.984 136.03 269.359 136.03 275.984V299.984C136.03 306.609 141.405 311.984 148.03 311.984H172.03C178.655 311.984 184.03 306.609 184.03 299.984V275.984C184.03 269.359 178.655 263.984 172.03 263.984ZM268.03 263.984H244.03C237.405 263.984 232.03 269.359 232.03 275.984V299.984C232.03 306.609 237.405 311.984 244.03 311.984H268.03C274.655 311.984 280.03 306.609 280.03 299.984V275.984C280.03 269.359 274.655 263.984 268.03 263.984ZM136.03 395.984V371.984C136.03 365.359 130.655 359.984 124.03 359.984H100.03C93.405 359.984 88.03 365.359 88.03 371.984V395.984C88.03 402.609 93.405 407.984 100.03 407.984H124.03C130.655 407.984 136.03 402.609 136.03 395.984ZM184.03 395.984C184.03 402.609 189.405 407.984 196.03 407.984H220.03C226.655 407.984 232.03 402.609 232.03 395.984V371.984C232.03 365.359 226.655 359.984 220.03 359.984H196.03C189.405 359.984 184.03 365.359 184.03 371.984V395.984ZM76.03 455.984H52.03C45.405 455.984 40.03 461.359 40.03 467.984V491.984C40.03 498.609 45.405 503.984 52.03 503.984H76.03C82.655 503.984 88.03 498.609 88.03 491.984V467.984C88.03 461.359 82.655 455.984 76.03 455.984ZM52.03 311.984H76.03C82.655 311.984 88.03 306.609 88.03 299.984V275.984C88.03 269.359 82.655 263.984 76.03 263.984H52.03C45.405 263.984 40.03 269.359 40.03 275.984V299.984C40.03 306.609 45.405 311.984 52.03 311.984ZM424.03 371.984C424.03 365.359 418.655 359.984 412.03 359.984H388.03C381.405 359.984 376.03 365.359 376.03 371.984V395.984C376.03 402.609 381.405 407.984 388.03 407.984H412.03C418.655 407.984 424.03 402.609 424.03 395.984V371.984ZM280.03 395.984C280.03 402.609 285.405 407.984 292.03 407.984H316.03C322.655 407.984 328.03 402.609 328.03 395.984V371.984C328.03 365.359 322.655 359.984 316.03 359.984H292.03C285.405 359.984 280.03 365.359 280.03 371.984V395.984ZM460.03 455.984H436.03C429.405 455.984 424.03 461.359 424.03 467.984V491.984C424.03 498.609 429.405 503.984 436.03 503.984H460.03C466.655 503.984 472.03 498.609 472.03 491.984V467.984C472.03 461.359 466.655 455.984 460.03 455.984ZM460.03 263.984H436.03C429.405 263.984 424.03 269.359 424.03 275.984V299.984C424.03 306.609 429.405 311.984 436.03 311.984H460.03C466.655 311.984 472.03 306.609 472.03 299.984V275.984C472.03 269.359 466.655 263.984 460.03 263.984ZM500.528 97.969C365.715 -32.594 146.372 -32.594 11.559 97.969C-1.488 110.594 -3.738 130 6.075 145.156L45.59 206.375C55.403 221.656 75.012 228 92.356 221.375L171.497 190.75C187.45 184.531 197.372 168.469 195.606 151.781L191.997 116.531C233.731 105.156 278.418 105.156 320.184 116.531L316.575 151.594C314.684 168.469 324.637 184.563 340.731 190.75L419.809 221.406C424.403 223.156 429.153 224 433.856 224C446.762 224 459.247 217.625 466.481 206.438L506.028 145.156C515.825 130 513.559 110.594 500.528 97.969ZM479.153 127.781L439.606 189.063C437.95 191.625 434.325 192.625 431.34 191.563L352.262 160.906C349.7 159.938 348.106 157.563 348.403 155L353.372 106.656C354.137 99.188 349.606 92.188 342.465 89.844C314.622 80.625 285.356 76.031 256.09 76.031S197.559 80.625 169.715 89.844C162.575 92.188 158.043 99.188 158.809 106.656L163.778 155.094C164.028 157.531 162.434 159.938 159.903 160.938L80.887 191.5C77.715 192.75 74.153 191.656 72.481 189.031L32.934 127.781C31.481 125.5 31.809 122.906 33.809 120.969C156.372 2.281 355.715 2.281 478.278 120.969C480.278 122.906 480.622 125.531 479.153 127.781ZM364.03 311.984C370.655 311.984 376.03 306.609 376.03 299.984V275.984C376.03 269.359 370.655 263.984 364.03 263.984H340.03C333.405 263.984 328.03 269.359 328.03 275.984V299.984C328.03 306.609 333.405 311.984 340.03 311.984H364.03ZM368.043 464H144.043C135.2 464 128.043 471.156 128.043 480S135.2 496 144.043 496H368.043C376.887 496 384.043 488.844 384.043 480S376.887 464 368.043 464Z" />
        </Icon>
    </>
}