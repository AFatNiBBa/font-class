
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ram` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ram?s=regular ram}
 * @preview ![ram](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQuMzQ0IDEwMC43Nkw1NzEuMjM4IDQ3LjY1NEM1NjEuMjE1IDM3LjYzMSA1NDcuNjIxIDMyIDUzMy40NDUgMzJINDUwLjc0NkM0MzEuODE0IDEyLjM1MiA0MDUuMzcxIDAgMzc2IDBDMzI2Ljg3MyAwIDI4NS44MjYgMzQuMzQgMjc1LjAwNiA4MC4yMTFDMjU1LjkxOCA3OS42NjIgMjM2LjU3MiA4NS40NzMgMjIxLjQ2OSA5Ni45MzhDMTk2LjI2NiA4OS43MTkgMTY4Ljc1IDk1LjM0NCAxNDguNTMxIDExMC43NUMxNDEuMjAzIDEwOC42NTYgMTMzLjcxOSAxMDcuNjI1IDEyNi4xMjUgMTA3LjYyNUM4MS4wMTYgMTA3LjYyNSA0NC4yNjYgMTQyLjcxOSA0My43NjYgMTg2LjAzMUMxNy40ODQgMTk5LjUgMCAyMjYuMjUgMCAyNTZTMTcuNDg0IDMxMi41IDQzLjc2NiAzMjUuOTY5QzQ0LjIyOSAzNjYuMTQ1IDc2IDM5OC44NjUgMTE2LjU4MiA0MDMuNDUzTDE1My45NjUgNDk2LjkxNEMxNTcuNjA5IDUwNi4wMjUgMTY2LjQzNiA1MTIgMTc2LjI0OCA1MTJIMjAwQzIxMy4yNTQgNTEyIDIyNCA1MDEuMjU0IDIyNCA0ODhWNDE2LjY4QzIzNy44ODcgNDI2LjQ2MSAyNTQuNTMxIDQzMiAyNzIgNDMyUzMwNi4xMTMgNDI2LjQ2MSAzMjAgNDE2LjY4VjQ4OEMzMjAgNTAxLjI1NCAzMzAuNzQ2IDUxMiAzNDQgNTEySDM2Ny43NTJDMzc3LjU2NCA1MTIgMzg2LjM5MSA1MDYuMDI1IDM5MC4wMzUgNDk2LjkxNEw0MjcuNDE4IDQwMy40NTNDNDY4IDM5OC44NjUgNDk5Ljc3MSAzNjYuMTQ1IDUwMC4yMzQgMzI1Ljk2OUM1MjYuNTE2IDMxMi41IDU0NCAyODUuNzUgNTQ0IDI1NkM1NDQgMjI5LjgwOSA1MzAuODExIDIwNi40OTYgNTA5LjkxNiAxOTJINTg2LjU1M0M2MDYuNzk3IDE5MiA2MjUuMzAzIDE4MC41NjIgNjM0LjM1NSAxNjIuNDU1QzY0NC42NDUgMTQxLjg3OSA2NDAuNjExIDExNy4wMjcgNjI0LjM0NCAxMDAuNzZaTTQ2OS4wNjIgMjg2LjVDNDYyLjQyMiAyODcuODEyIDQ1Ni42NTYgMjkxLjg3NSA0NTMuMTg3IDI5Ny42ODhDNDQ5LjcwMyAzMDMuNSA0NDguODI4IDMxMC41IDQ1MC43OTcgMzE2Ljk2OUM0NTEuNzgxIDMyMC4yMTkgNDUyLjIzNCAzMjIuODEzIDQ1Mi4yMzQgMzI1LjA5NEM0NTIuMjE5IDM0Ny40NTEgNDI1LjEzNyAzNjQuMzc5IDQwMS4yMjkgMzUyLjE1MkMzOTEuNTMzIDM0Ny4xOTUgMzc4LjM5OCAzNTAuNzM4IDM3MS4wNjggMzU4Ljc5M0MzNjAuNzQyIDM3MC4xMzkgMzQzLjUwMiAzNzMuNzkxIDMyOC4yMzQgMzY1LjkzOEMzMTguMzI4IDM2MC43ODEgMzA2LjE3MiAzNjMuMjE5IDI5OC45MzggMzcxLjY4OEMyODUuNjI1IDM4Ny4zNzUgMjU4LjM3NSAzODcuMzc1IDI0NS4wNjIgMzcxLjY4OEMyMzcuODEyIDM2My4xODggMjI1LjY1NiAzNjAuNzgxIDIxNS43NjYgMzY1LjkzOEMyMDAuNDkgMzczLjc1IDE4My4yNzkgMzcwLjExOSAxNzIuOTc1IDM1OC44NEMxNjUuNjE3IDM1MC43ODcgMTUyLjQ4OCAzNDcuMTk3IDE0Mi43NzEgMzUyLjE1MkMxMTguODAxIDM2NC4zNzkgOTEuNzY2IDM0Ny40MiA5MS43NjYgMzI1LjA5NEM5MS43NjYgMzIyLjgxMiA5Mi4yMTkgMzIwLjIxOSA5My4yMDMgMzE2Ljk2OUM5NS4xNzIgMzEwLjUgOTQuMjk3IDMwMy41IDkwLjgxMiAyOTcuNjg4Qzg3LjM0NCAyOTEuODc1IDgxLjU3OCAyODcuODEyIDc0LjkzOCAyODYuNUM1OS4zMjggMjgzLjM3NSA0OCAyNzAuNTYyIDQ4IDI1NlM1OS4zMjggMjI4LjYyNSA3NC45MzggMjI1LjVDODEuNTc4IDIyNC4xODggODcuMzQ0IDIyMC4xMjUgOTAuODEzIDIxNC4zMTJDOTQuMjk3IDIwOC41IDk1LjE3MiAyMDEuNSA5My4yMDMgMTk1LjAzMUM5Mi4yMTkgMTkxLjc4MSA5MS43NjYgMTg5LjE4OCA5MS43NjYgMTg2LjkwNkM5MS43NjYgMTY0LjU0OSAxMTguODE2IDE0Ny41NTkgMTQyLjc3MSAxNTkuODQ2QzE1Mi40NjUgMTY0LjgxOCAxNjUuNTkgMTYxLjI0OCAxNzIuOTM2IDE1My4yMDNDMTgzLjI2NiAxNDEuODkxIDIwMC41MTYgMTM4LjI0IDIxNS43NjYgMTQ2LjA2MkMyMjUuNjg4IDE1MS4yMTkgMjM3Ljg0NCAxNDguODEyIDI0NS4wNjIgMTQwLjMxMkMyNTIuNDE4IDEzMS42NTggMjY0LjEgMTI3LjYzOSAyNzUuMjMyIDEyOC41MTZDMjg2LjMyNCAxNzQuMDA4IDMyNy4xNDEgMjA4IDM3NiAyMDhDMzg5LjI1IDIwOCA0MDAgMTk3LjI1IDQwMCAxODRTMzg5LjI1IDE2MCAzNzYgMTYwQzM0NS4xMjUgMTYwIDMyMCAxMzQuODc1IDMyMCAxMDRDMzIwIDcwLjAyIDM1MC40MzQgNDMuMDA0IDM4NS40NzEgNDguNzgxQzQxMy4wMDYgNTMuMzIyIDQzMiA3OS4yNTQgNDMyIDEwNy4xNlYxNjkuNzI3QzQzMiAxNzkuMDI5IDQzNi41MzcgMTg3LjM1NCA0NDMuMTkxIDE5My44NTJDNDQ3LjEzMSAxOTcuNjk3IDQ1MC4wMjMgMjAyLjQ0NSA0NTEuMzI4IDIwNy44NDRDNDUzLjQ4NCAyMTYuNzgxIDQ2MC41NzggMjIzLjcxOSA0NjkuNTc4IDIyNS42ODhDNDg1LjEyNSAyMjkuMDMxIDQ5NiAyNDEuNTMxIDQ5NiAyNTZDNDk2IDI3MC41NjIgNDg0LjY3MiAyODMuMzc1IDQ2OS4wNjIgMjg2LjVaTTUxMiAxMTJDNTAzLjE2NCAxMTIgNDk2IDEwNC44MzYgNDk2IDk2UzUwMy4xNjQgODAgNTEyIDgwUzUyOCA4Ny4xNjQgNTI4IDk2UzUyMC44MzYgMTEyIDUxMiAxMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Ram(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624.344 100.76L571.238 47.654C561.215 37.631 547.621 32 533.445 32H450.746C431.814 12.352 405.371 0 376 0C326.873 0 285.826 34.34 275.006 80.211C255.918 79.662 236.572 85.473 221.469 96.938C196.266 89.719 168.75 95.344 148.531 110.75C141.203 108.656 133.719 107.625 126.125 107.625C81.016 107.625 44.266 142.719 43.766 186.031C17.484 199.5 0 226.25 0 256S17.484 312.5 43.766 325.969C44.229 366.145 76 398.865 116.582 403.453L153.965 496.914C157.609 506.025 166.436 512 176.248 512H200C213.254 512 224 501.254 224 488V416.68C237.887 426.461 254.531 432 272 432S306.113 426.461 320 416.68V488C320 501.254 330.746 512 344 512H367.752C377.564 512 386.391 506.025 390.035 496.914L427.418 403.453C468 398.865 499.771 366.145 500.234 325.969C526.516 312.5 544 285.75 544 256C544 229.809 530.811 206.496 509.916 192H586.553C606.797 192 625.303 180.562 634.355 162.455C644.645 141.879 640.611 117.027 624.344 100.76ZM469.062 286.5C462.422 287.812 456.656 291.875 453.187 297.688C449.703 303.5 448.828 310.5 450.797 316.969C451.781 320.219 452.234 322.813 452.234 325.094C452.219 347.451 425.137 364.379 401.229 352.152C391.533 347.195 378.398 350.738 371.068 358.793C360.742 370.139 343.502 373.791 328.234 365.938C318.328 360.781 306.172 363.219 298.938 371.688C285.625 387.375 258.375 387.375 245.062 371.688C237.812 363.188 225.656 360.781 215.766 365.938C200.49 373.75 183.279 370.119 172.975 358.84C165.617 350.787 152.488 347.197 142.771 352.152C118.801 364.379 91.766 347.42 91.766 325.094C91.766 322.812 92.219 320.219 93.203 316.969C95.172 310.5 94.297 303.5 90.812 297.688C87.344 291.875 81.578 287.812 74.938 286.5C59.328 283.375 48 270.562 48 256S59.328 228.625 74.938 225.5C81.578 224.188 87.344 220.125 90.813 214.312C94.297 208.5 95.172 201.5 93.203 195.031C92.219 191.781 91.766 189.188 91.766 186.906C91.766 164.549 118.816 147.559 142.771 159.846C152.465 164.818 165.59 161.248 172.936 153.203C183.266 141.891 200.516 138.24 215.766 146.062C225.688 151.219 237.844 148.812 245.062 140.312C252.418 131.658 264.1 127.639 275.232 128.516C286.324 174.008 327.141 208 376 208C389.25 208 400 197.25 400 184S389.25 160 376 160C345.125 160 320 134.875 320 104C320 70.02 350.434 43.004 385.471 48.781C413.006 53.322 432 79.254 432 107.16V169.727C432 179.029 436.537 187.354 443.191 193.852C447.131 197.697 450.023 202.445 451.328 207.844C453.484 216.781 460.578 223.719 469.578 225.688C485.125 229.031 496 241.531 496 256C496 270.562 484.672 283.375 469.062 286.5ZM512 112C503.164 112 496 104.836 496 96S503.164 80 512 80S528 87.164 528 96S520.836 112 512 112Z" />
        </Icon>
    </>
}