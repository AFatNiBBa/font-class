
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-person-digging` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-person-digging?s=duotone triangle-person-digging}
 * @preview ![triangle-person-digging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCA0NjMuODhDNjQwIDQ1NC42ODIgNjM3LjM3MyA0NDUuNTA5IDYzMi4xNzMgNDM3LjUzMUwzNjAuMTcyIDIwLjM5OEMzNTEuMzEzIDYuNzk5IDMzNS42NTYgLTAuMDAxIDMyMCAtMC4wMDFTMjg4LjY4NyA2Ljc5OSAyNzkuODI4IDIwLjM5OEw3LjgyNyA0MzcuNTMxQzIuNjI3IDQ0NS41MDkgMCA0NTQuNjgyIDAgNDYzLjg4QzAgNDg5LjQxOSAyMC41MjggNTEyIDQ3Ljk5OSA1MTJINTkyLjAwMUM2MTkuMjQzIDUxMiA2NDAgNDg5Ljc1NyA2NDAgNDYzLjg4Wk0yOTIuMDM5IDE1OS45NjlDMzA3LjUzOSAxNTkuOTY5IDMyMC4wMzkgMTcyLjQ2OSAzMjAuMDM5IDE4Ny45NjlTMzA3LjUzOSAyMTUuOTY5IDI5Mi4wMzkgMjE1Ljk2OUMyNzYuNTM5IDIxNS45NjkgMjY0LjAzOSAyMDMuNDY5IDI2NC4wMzkgMTg3Ljk2OVMyNzYuNTM5IDE1OS45NjkgMjkyLjAzOSAxNTkuOTY5Wk0yODguMDM5IDQzMS45NjlDMjg4LjAzOSA0NDAuODQ0IDI4MC45MTQgNDQ3Ljk2OSAyNzIuMDM5IDQ0Ny45NjlDMjYzLjE2NCA0NDcuOTY5IDI1Ni4wMzkgNDQwLjg0NCAyNTYuMDM5IDQzMS45NjlWMzk5LjIxOUwyMDkuNzg5IDM2OS4yMTlMMTkxLjUzOSA0MzYuMjE5QzE4OS41MzkgNDQzLjA5NCAxODMuMjg5IDQ0Ny45NjkgMTc2LjAzOSA0NDcuOTY5QzE2My44NzQgNDQ3Ljk2OSAxNjAgNDM3LjE2OSAxNjAgNDMxLjg5MkMxNjAgNDMwLjUxNiAxNjAuMTc0IDQyOS4xMTYgMTYwLjUzOSA0MjcuNzE5TDE5MC4yODkgMzE4LjcxOUwyNzMuNDE0IDM3Mi4zNDRDMjgyLjUzOSAzNzguMjE5IDI4OC4wMzkgMzg4LjM0NCAyODguMDM5IDM5OS4yMTlWNDMxLjk2OVpNMzM2LjAzOSA0NDcuOTY5TDM0OC4wMzkgNDE3Ljk2OUMzNTAuNDE0IDQxMS45NjkgMzU2LjI4OSA0MDcuOTY5IDM2Mi45MTQgNDA3Ljk2OUgzOTguNTM5TDMwMy42NjQgMzQ5LjU5NEMzMDMuNjY0IDM0OS41OTQgMzAzLjY2NCAzNDkuNTk0IDMwMy41MzkgMzQ5LjU5NEwxOTkuNjY0IDI4NS41OTRDMTk4LjIzMSAyODQuNzE2IDE5Mi4wNDggMjgwLjUyMyAxOTIuMDQ4IDI3Mi4wODVDMTkyLjA0OCAyNjguNTggMTkzLjEyOCAyNjUuMTkyIDE5NS4yODkgMjYyLjM0NEwyMDYuNzg5IDI0Ni44NDRDMjE1Ljk5OSAyMzQuNTk3IDIzMC4yOTEgMjI3LjY3NyAyNDUuMTUyIDIyNy42NzdDMjQ4LjY0NCAyMjcuNjc3IDI1Mi4xNjggMjI4LjA1OSAyNTUuNjY0IDIyOC44NDRMMjgwLjI4OSAyMzYuMDk0QzI5Ny42NjQgMjM5Ljk2OSAzMTIuMDM5IDI1NC43MTkgMzE1Ljc4OSAyNzMuMjE5TDMyNi40MTQgMzI1Ljk2OUw0MTQuMDM5IDM3OS45NjlMNDM1LjE2NCAzMzcuNDY5QzQzNy44MzIgMzMyLjI2IDQ0My4xMjYgMzI4LjY4NiA0NDkuNjY5IDMyOC42ODZDNDU1LjA0OSAzMjguNjg2IDQ2MC4wOTcgMzMxLjQ5NiA0NjMuMDM5IDMzNS45NjlMNTM0Ljc5IDQ0Ny45NjlIMzM2LjAzOVogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PHBhdGggZD0iTTI5Mi4wMzkgMjE1Ljk2OUMzMDcuNTM5IDIxNS45NjkgMzIwLjAzOSAyMDMuNDY5IDMyMC4wMzkgMTg3Ljk2OVMzMDcuNTM5IDE1OS45NjkgMjkyLjAzOSAxNTkuOTY5QzI3Ni41MzkgMTU5Ljk2OSAyNjQuMDM5IDE3Mi40NjkgMjY0LjAzOSAxODcuOTY5UzI3Ni41MzkgMjE1Ljk2OSAyOTIuMDM5IDIxNS45NjlaTTI3My40MTQgMzcyLjM0NEwxOTAuMjg5IDMxOC43MTlMMTYwLjUzOSA0MjcuNzE5QzE2MC4xNzQgNDI5LjExNiAxNjAgNDMwLjUxNiAxNjAgNDMxLjg5MkMxNjAgNDM3LjE0NSAxNjMuODYyIDQ0Ny45NjkgMTc2LjAzOSA0NDcuOTY5QzE4My4yODkgNDQ3Ljk2OSAxODkuNTM5IDQ0My4wOTQgMTkxLjUzOSA0MzYuMjE5TDIwOS43ODkgMzY5LjIxOUwyNTYuMDM5IDM5OS4yMTlWNDMxLjk2OUMyNTYuMDM5IDQ0MC44NDQgMjYzLjE2NCA0NDcuOTY5IDI3Mi4wMzkgNDQ3Ljk2OUMyODAuOTE0IDQ0Ny45NjkgMjg4LjAzOSA0NDAuODQ0IDI4OC4wMzkgNDMxLjk2OVYzOTkuMjE5QzI4OC4wMzkgMzg4LjM0NCAyODIuNTM5IDM3OC4yMTkgMjczLjQxNCAzNzIuMzQ0Wk0zNDguMDM5IDQxNy45NjlMMzM2LjAzOSA0NDcuOTY5SDUzNC43OUw0NjMuMDQgMzM1Ljk2OUM0NjAuMDk3IDMzMS40OTYgNDU1LjA0OSAzMjguNjg2IDQ0OS42NjkgMzI4LjY4NkM0NDMuMTQ2IDMyOC42ODYgNDM3Ljg0IDMzMi4yNDUgNDM1LjE2NCAzMzcuNDY5TDQxNC4wMzkgMzc5Ljk2OUwzMjYuNDE0IDMyNS45NjlMMzE1Ljc4OSAyNzMuMjE5QzMxMi4wMzkgMjU0LjcxOSAyOTcuNjY0IDIzOS45NjkgMjgwLjI4OSAyMzYuMDk0TDI1NS42NjQgMjI4Ljg0NEMyNTIuMTY4IDIyOC4wNTkgMjQ4LjY0NCAyMjcuNjc3IDI0NS4xNTIgMjI3LjY3N0MyMzAuMjkxIDIyNy42NzcgMjE1Ljk5OSAyMzQuNTk3IDIwNi43ODkgMjQ2Ljg0NEwxOTUuMjg5IDI2Mi4zNDRDMTkzLjEyOCAyNjUuMTkyIDE5Mi4wNDggMjY4LjU4IDE5Mi4wNDggMjcyLjA4NUMxOTIuMDQ4IDI4MC41MjMgMTk4LjIzMSAyODQuNzE2IDE5OS42NjQgMjg1LjU5NEwzMDMuNTM5IDM0OS41OTRDMzAzLjY2NCAzNDkuNTk0IDMwMy42NjQgMzQ5LjU5NCAzMDMuNjY0IDM0OS41OTRMMzk4LjUzOSA0MDcuOTY5SDM2Mi45MTRDMzU2LjI4OSA0MDcuOTY5IDM1MC40MTQgNDExLjk2OSAzNDguMDM5IDQxNy45NjlaICIgY2xhc3M9ImZhLXByaW1hcnkiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function TrianglePersonDigging(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M640 463.88C640 454.682 637.373 445.509 632.173 437.531L360.172 20.398C351.313 6.799 335.656 -0.001 320 -0.001S288.687 6.799 279.828 20.398L7.827 437.531C2.627 445.509 0 454.682 0 463.88C0 489.419 20.528 512 47.999 512H592.001C619.243 512 640 489.757 640 463.88ZM292.039 159.969C307.539 159.969 320.039 172.469 320.039 187.969S307.539 215.969 292.039 215.969C276.539 215.969 264.039 203.469 264.039 187.969S276.539 159.969 292.039 159.969ZM288.039 431.969C288.039 440.844 280.914 447.969 272.039 447.969C263.164 447.969 256.039 440.844 256.039 431.969V399.219L209.789 369.219L191.539 436.219C189.539 443.094 183.289 447.969 176.039 447.969C163.874 447.969 160 437.169 160 431.892C160 430.516 160.174 429.116 160.539 427.719L190.289 318.719L273.414 372.344C282.539 378.219 288.039 388.344 288.039 399.219V431.969ZM336.039 447.969L348.039 417.969C350.414 411.969 356.289 407.969 362.914 407.969H398.539L303.664 349.594C303.664 349.594 303.664 349.594 303.539 349.594L199.664 285.594C198.231 284.716 192.048 280.523 192.048 272.085C192.048 268.58 193.128 265.192 195.289 262.344L206.789 246.844C215.999 234.597 230.291 227.677 245.152 227.677C248.644 227.677 252.168 228.059 255.664 228.844L280.289 236.094C297.664 239.969 312.039 254.719 315.789 273.219L326.414 325.969L414.039 379.969L435.164 337.469C437.832 332.26 443.126 328.686 449.669 328.686C455.049 328.686 460.097 331.496 463.039 335.969L534.79 447.969H336.039Z " />
            <path d="M292.039 215.969C307.539 215.969 320.039 203.469 320.039 187.969S307.539 159.969 292.039 159.969C276.539 159.969 264.039 172.469 264.039 187.969S276.539 215.969 292.039 215.969ZM273.414 372.344L190.289 318.719L160.539 427.719C160.174 429.116 160 430.516 160 431.892C160 437.145 163.862 447.969 176.039 447.969C183.289 447.969 189.539 443.094 191.539 436.219L209.789 369.219L256.039 399.219V431.969C256.039 440.844 263.164 447.969 272.039 447.969C280.914 447.969 288.039 440.844 288.039 431.969V399.219C288.039 388.344 282.539 378.219 273.414 372.344ZM348.039 417.969L336.039 447.969H534.79L463.04 335.969C460.097 331.496 455.049 328.686 449.669 328.686C443.146 328.686 437.84 332.245 435.164 337.469L414.039 379.969L326.414 325.969L315.789 273.219C312.039 254.719 297.664 239.969 280.289 236.094L255.664 228.844C252.168 228.059 248.644 227.677 245.152 227.677C230.291 227.677 215.999 234.597 206.789 246.844L195.289 262.344C193.128 265.192 192.048 268.58 192.048 272.085C192.048 280.523 198.231 284.716 199.664 285.594L303.539 349.594C303.664 349.594 303.664 349.594 303.664 349.594L398.539 407.969H362.914C356.289 407.969 350.414 411.969 348.039 417.969Z " />
        </Icon>
    </>
}