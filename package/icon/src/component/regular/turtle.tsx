
import { Icon } from "../../index";

/**
 * A component that renders the `turtle` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=regular turtle}
 * @preview ![turtle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzcuMTI5IDE2MC41QzYzMS44NzkgMTM5Ljc1IDYxOC4yNTQgMTIyLjI1IDYwMS4wMDQgMTA5Ljg3NUM1NTYuMjU0IDc4IDU0NS4xMjkgNjQgNTA3LjYyOCA2NEM0NjguMDAzIDY0IDQzNC4xMjggODcuNjI1IDQyMS4zNzggMTIxLjg3NUMzODAuNzUzIDcxLjUgMzE3Ljc1MiAzMiAyNDguMzc3IDMyQzIzMi4yNTIgMzIgODQuNjI2IDQzLjg3NSAzNS41IDE5MS41QzMwLjEyNSAyMDcuNjI1IDMxIDIyNC42MjUgMzcuNSAyNDBIMzJDMTQuMzc1IDI0MCAwIDI1NC4zNzUgMCAyNzJWMjg4QzAgMjk5Ljg3NSA2LjYyNSAzMTAuNzUgMTcuMTI1IDMxNi4zNzVMOTguNjI2IDM1OS4xMjVMNzAuNSA0MDhDNjEuODc1IDQyMi43NSA2MS44NzUgNDQxLjI1IDcwLjUgNDU2Qzc5LjAwMSA0NzAuNzUgOTQuODc2IDQ4MCAxMTIuMDAxIDQ4MEgxNDkuMDAxQzE2Ni4xMjYgNDgwIDE4Mi4wMDEgNDcwLjg3NSAxOTAuNTAxIDQ1NkwyMTguMjUxIDQwOC4xMjVDMjU4LjUwMiA0MTguNSAzMTUuNzUyIDQxOSAzNTcuODc3IDQwOC4xMjVMMzg1LjUwMyA0NTZDMzk0LjAwMiA0NzAuODc1IDQwOS44NzggNDgwIDQyNy4wMDMgNDgwSDQ2NC4wMDNDNDgxLjEyOCA0ODAgNDk3LjAwMyA0NzAuNzUgNTA1LjUwMyA0NTZDNTE0LjEyOCA0NDEuMjUgNTE0LjEyOCA0MjIuNzUgNTA1LjUwMyA0MDhMNDc0Ljg3OCAzNTQuODc1QzUwNS41MDMgMzM0LjEyNSA1MjYuMTI5IDMwNC44NzUgNTM2LjM3OSAyNzJINTUxLjM3OUM2MDcuNzU0IDI3MiA2NTEuODc5IDIxOS4xMjUgNjM3LjEyOSAxNjAuNVpNODEuMTI2IDIwNi42MjVDMTAwLjI1MSAxNDkuMTI1IDE2Ny41MDEgODAgMjQ3LjYyNyA4MEgyNDguMzc3QzMyOC41MDIgODAgMzk1Ljc1MyAxNDkuMTI1IDQxNC44NzggMjA2LjYyNUM0MTguMTI4IDIxNi41IDQwOC4yNTMgMjM5IDM4NC4xMjggMjM5Ljc1QzM4My4yNTMgMjM5Ljc1IDExNC42MjYgMjQwIDExNC42MjYgMjQwQzkyLjEyNiAyNDAgNzUuNTAxIDIyMy41IDgxLjEyNiAyMDYuNjI1Wk01NTEuMzc5IDIyNEg1MDQuMDAzQzQ5Mi43NTMgMzE0LjM3NSA0MjkuMTI4IDMyNS42MjUgNDA3LjUwMyAzMzQuMjVMNDY0LjAwMyA0MzJINDI3LjAwM0wzODAuMjUzIDM1MUMzMTMuMzc3IDM3Mi44NzUgMjcxLjUwMiAzNzUuNzUgMTk1Ljc1MSAzNTFMMTQ5LjAwMSA0MzJIMTEyLjAwMUwxNjUuMjUxIDMzOS44NzVMNjYuMzc1IDI4OEgzODMuMDAzQzQxNS4xMjggMjg4IDQ2My44NzggMjY2LjI1IDQ2NC4wMDMgMjA4LjI1VjE1M0M0NjQuMDAzIDEzMy4xMjUgNDc1LjYyOCAxMjIuNSA0ODUuNzUzIDExNy4yNUM1MTcuMjUzIDEwMS4xMjUgNTMyLjg3OSAxMjAuMjUgNTc1LjAwNCAxNTAuMjVDNTg1LjYyOSAxNTcuODc1IDU5Mi4wMDQgMTcwLjI1IDU5Mi4wMDQgMTgzLjM3NUM1OTIuMDA0IDIwNS43NSA1NzMuNzU0IDIyNCA1NTEuMzc5IDIyNFpNNTEyLjAwMyAxNDRDNTAzLjEyOCAxNDQgNDk2LjAwMyAxNTEuMTI1IDQ5Ni4wMDMgMTYwUzUwMy4xMjggMTc2IDUxMi4wMDMgMTc2UzUyOC4wMDQgMTY4Ljg3NSA1MjguMDA0IDE2MFM1MjAuODc4IDE0NCA1MTIuMDAzIDE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M637.129 160.5C631.879 139.75 618.254 122.25 601.004 109.875C556.254 78 545.129 64 507.628 64C468.003 64 434.128 87.625 421.378 121.875C380.753 71.5 317.752 32 248.377 32C232.252 32 84.626 43.875 35.5 191.5C30.125 207.625 31 224.625 37.5 240H32C14.375 240 0 254.375 0 272V288C0 299.875 6.625 310.75 17.125 316.375L98.626 359.125L70.5 408C61.875 422.75 61.875 441.25 70.5 456C79.001 470.75 94.876 480 112.001 480H149.001C166.126 480 182.001 470.875 190.501 456L218.251 408.125C258.502 418.5 315.752 419 357.877 408.125L385.503 456C394.002 470.875 409.878 480 427.003 480H464.003C481.128 480 497.003 470.75 505.503 456C514.128 441.25 514.128 422.75 505.503 408L474.878 354.875C505.503 334.125 526.129 304.875 536.379 272H551.379C607.754 272 651.879 219.125 637.129 160.5ZM81.126 206.625C100.251 149.125 167.501 80 247.627 80H248.377C328.502 80 395.753 149.125 414.878 206.625C418.128 216.5 408.253 239 384.128 239.75C383.253 239.75 114.626 240 114.626 240C92.126 240 75.501 223.5 81.126 206.625ZM551.379 224H504.003C492.753 314.375 429.128 325.625 407.503 334.25L464.003 432H427.003L380.253 351C313.377 372.875 271.502 375.75 195.751 351L149.001 432H112.001L165.251 339.875L66.375 288H383.003C415.128 288 463.878 266.25 464.003 208.25V153C464.003 133.125 475.628 122.5 485.753 117.25C517.253 101.125 532.879 120.25 575.004 150.25C585.629 157.875 592.004 170.25 592.004 183.375C592.004 205.75 573.754 224 551.379 224ZM512.003 144C503.128 144 496.003 151.125 496.003 160S503.128 176 512.003 176S528.004 168.875 528.004 160S520.878 144 512.003 144Z" />
    </Icon>
);

export default Turtle;