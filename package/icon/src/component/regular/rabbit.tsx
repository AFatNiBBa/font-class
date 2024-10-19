
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rabbit` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rabbit?s=regular rabbit}
 * @preview ![rabbit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDAuMzc4IDQyMS44NzVMNDA0LjM3OCAzMDEuMjVDNDQ3Ljc1MyAyOTAuNzUgNDgwLjAwMyAyNTEuODc1IDQ4MC4wMDMgMjA1LjYyNUM0ODAuMDAzIDE1Ny42MjUgNDQ3LjI1MyAxMzEuMjUgNDM3LjEyOCAxMjQuNjI1QzQ1OC4zNzggMTcuMTI1IDQwMS4wMDMgMCAzNzguODc3IDBDMzYyLjAwMiAwIDM0Ny43NTIgNi44NzUgMzM2LjAwMiAxNy4zNzVDMzI0LjI1MiA2Ljg3NSAzMTAuMTI3IDAgMjkzLjI1MiAwSDI5My4xMjdDMjY3LjI1MiAwIDIwNy4wMDEgMjIuODc1IDIzOS41MDEgMTQ0QzI0MC4zNzcgMTQ3Ljc1IDI0MS41MDIgMTUxLjUgMjQyLjc1MiAxNTUuMjVDMjQwLjUwMiAxNjQuMzc1IDI0MC4wMDIgMTcyLjc1IDI0MC4wMDIgMTc4LjYyNVYyMTMuNjI1QzE3Ni44NzYgMjI4LjUgMTI1LjM3NiAyNzIuNzUgOTkuMTI2IDMzMC42MjVDOTIuODc2IDMyOS4xMjUgODYuNjI2IDMyOCA4MC4wMDEgMzI4QzM1Ljc1IDMyOCAwIDM2My43NSAwIDQwOFMzNS43NSA0ODggODAuMDAxIDQ4OEM4Ny4xMjYgNDg4IDkzLjg3NiA0ODYuNzUgMTAwLjUwMSA0ODVDMTE1LjEyNiA1MDEuMzc1IDEzNi4yNTEgNTEyIDE2MC4wMDEgNTEySDMyMC4wMDJDMzQxLjAwMiA1MTIgMzU4Ljg3NyA0OTguNSAzNjUuMzc3IDQ3OS42MjVMMzczLjEyNyA0ODkuMTI1QzM4My43NTIgNTAzLjUgNDAwLjI1MiA1MTIgNDE4LjI1MyA1MTJINDU2LjAwM0M0NzYuMzc4IDUxMiA0OTUuMTI4IDUwMSA1MDUuMDAzIDQ4My4xMjVDNTE2LjI1MyA0NjIuODc1IDUxMy4zNzggNDM4LjI1IDUwMC4zNzggNDIxLjg3NVpNODAuNzUxIDQzOS44NzVDODAuNTAxIDQzOS44NzUgODAuMjUgNDQwIDgwLjAwMSA0NDBDNzEuNzUgNDQwIDYzLjYyNSA0MzYuODc1IDU3LjM3NSA0MzAuNjI1QzQ0Ljg3NSA0MTguMTI1IDQ0Ljg3NSAzOTcuODc1IDU3LjM3NSAzODUuMzc1QzY5Ljc1IDM3MyA4My4yNTEgMzc2LjYyNSA4NC4wMDEgMzc2Ljc1QzgzLjM3NiAzNzkuODc1IDc3LjYyNSA0MDcuNzUgODAuNzUxIDQzOS44NzVaTTQ1Ni4wMDMgNDY0SDQxOC4yNTNDNDE1LjUwMyA0NjQgNDEzLjAwMyA0NjIuNjI1IDQxMS41MDMgNDYwLjI1TDM0MS4wMDIgMzczLjVMMjI0LjAwMSA0MzJIMjg4LjAwMkMzMDUuNjI3IDQzMiAzMjAuMDAyIDQ0Ni4zNzUgMzIwLjAwMiA0NjRIMTYwLjAwMUMxNDIuMzc2IDQ2NCAxMjguMDAxIDQ0OS42MjUgMTI4LjAwMSA0MzJWNDE2QzEyOC4wMDEgMzI3LjYyNSAxOTkuNjI2IDI1NiAyODguMDAyIDI1NlYxNzguNjI1QzI4OC4wMDIgMTY4Ljg3NSAyOTAuMzc3IDE2MS42MjUgMjkzLjUwMiAxNTVDMjkwLjc1MiAxNDcuNzUgMjg4LjAwMiAxNDAgMjg1Ljc1MiAxMzEuNjI1QzI3NC41MDIgODkuMzc1IDI3Ni43NTIgNTIuMTI1IDI5MC43NTIgNDguMjVDMzA0LjYyNyA0NC42MjUgMzI0LjYyNyA3NC42MjUgMzM2LjAwMiAxMTUuMzc1QzM0Ny41MDIgNzQuNSAzNjcuNTAyIDQ0LjYyNSAzODEuMjUyIDQ4LjI1QzM5NS4yNTIgNTIuMTI1IDM5Ny41MDIgODkuMzc1IDM4Ni4yNTIgMTMxLjYyNUMzODQuNzUyIDEzNyAzODMuMjUyIDE0Mi4xMjUgMzgxLjUwMiAxNDdMNDEwLjYyOCAxNjQuNjI1QzQyNC4xMjggMTc0LjEyNSA0MzIuMDAzIDE4OS4zNzUgNDMyLjAwMyAyMDUuNjI1QzQzMi4wMDMgMjMzLjUgNDA5LjI1MyAyNTYgMzgxLjAwMiAyNTZIMzUyLjAwMlYzMTIuNUw0NjIuNzUzIDQ1MS43NUM0NjYuMTI4IDQ1Ny4xMjUgNDYyLjI1MyA0NjQgNDU2LjAwMyA0NjRaTTM2OC4wMDIgMTkyQzM2OC4wMDIgMTgzLjEyNSAzNjAuODc3IDE3NiAzNTIuMDAyIDE3NkMzNDMuMTI3IDE3NiAzMzYuMDAyIDE4My4xMjUgMzM2LjAwMiAxOTJTMzQzLjEyNyAyMDggMzUyLjAwMiAyMDhDMzYwLjg3NyAyMDggMzY4LjAwMiAyMDAuODc1IDM2OC4wMDIgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rabbit(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M500.378 421.875L404.378 301.25C447.753 290.75 480.003 251.875 480.003 205.625C480.003 157.625 447.253 131.25 437.128 124.625C458.378 17.125 401.003 0 378.877 0C362.002 0 347.752 6.875 336.002 17.375C324.252 6.875 310.127 0 293.252 0H293.127C267.252 0 207.001 22.875 239.501 144C240.377 147.75 241.502 151.5 242.752 155.25C240.502 164.375 240.002 172.75 240.002 178.625V213.625C176.876 228.5 125.376 272.75 99.126 330.625C92.876 329.125 86.626 328 80.001 328C35.75 328 0 363.75 0 408S35.75 488 80.001 488C87.126 488 93.876 486.75 100.501 485C115.126 501.375 136.251 512 160.001 512H320.002C341.002 512 358.877 498.5 365.377 479.625L373.127 489.125C383.752 503.5 400.252 512 418.253 512H456.003C476.378 512 495.128 501 505.003 483.125C516.253 462.875 513.378 438.25 500.378 421.875ZM80.751 439.875C80.501 439.875 80.25 440 80.001 440C71.75 440 63.625 436.875 57.375 430.625C44.875 418.125 44.875 397.875 57.375 385.375C69.75 373 83.251 376.625 84.001 376.75C83.376 379.875 77.625 407.75 80.751 439.875ZM456.003 464H418.253C415.503 464 413.003 462.625 411.503 460.25L341.002 373.5L224.001 432H288.002C305.627 432 320.002 446.375 320.002 464H160.001C142.376 464 128.001 449.625 128.001 432V416C128.001 327.625 199.626 256 288.002 256V178.625C288.002 168.875 290.377 161.625 293.502 155C290.752 147.75 288.002 140 285.752 131.625C274.502 89.375 276.752 52.125 290.752 48.25C304.627 44.625 324.627 74.625 336.002 115.375C347.502 74.5 367.502 44.625 381.252 48.25C395.252 52.125 397.502 89.375 386.252 131.625C384.752 137 383.252 142.125 381.502 147L410.628 164.625C424.128 174.125 432.003 189.375 432.003 205.625C432.003 233.5 409.253 256 381.002 256H352.002V312.5L462.753 451.75C466.128 457.125 462.253 464 456.003 464ZM368.002 192C368.002 183.125 360.877 176 352.002 176C343.127 176 336.002 183.125 336.002 192S343.127 208 352.002 208C360.877 208 368.002 200.875 368.002 192Z" />
        </Icon>
    </>
}