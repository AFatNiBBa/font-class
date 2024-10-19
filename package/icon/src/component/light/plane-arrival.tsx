
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plane-arrival` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plane-arrival?s=light plane-arrival}
 * @preview ![plane-arrival](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQgNDgwSDE2QzcuMTk5IDQ4MCAwIDQ4Ny4xOTkgMCA0OTZDMCA1MDQuNzk5IDcuMTk5IDUxMiAxNiA1MTJINjI0QzYzMi44MDEgNTEyIDY0MCA1MDQuNzk5IDY0MCA0OTZDNjQwIDQ4Ny4xOTkgNjMyLjgwMSA0ODAgNjI0IDQ4MFpNNDUuODc1IDIyOC4zNzdMMTM5LjI1IDMxMS41MDJDMTQ3LjYyNSAzMTkuMjUyIDE1Ny44NzUgMzI0Ljg3NyAxNjguNzUgMzI3Ljg3N0w0NjQuNjI1IDQwOS4yNUM0ODAuODc1IDQxMy43NSA0OTcgNDE2IDUxMi41IDQxNkM1MjYuMzc1IDQxNiA1MzkuNzUgNDE0LjI1IDU1Mi4yNSA0MTAuNjI1QzU4My4xMjUgNDAyIDYwMS4zNzUgMzg3LjUgNjA2LjYyNSAzNjcuNjI1QzYxMS43NSAzNDcuODc3IDYwMyAzMjUuODc3IDU4MC41IDMwMi41MDJDNTYxIDI4Mi4zNzcgNTM0LjUgMjY3LjI1MiA1MDMuODc1IDI1OC43NTJMNDA3IDIzMi4xMjdMMzEwLjUgNDYuODc5QzMwOC4yNSA0Mi42MjkgMzA2LjM3NSAzOC4yNTQgMzA0LjM3NSAzNC4wMDRDMzAxLjEyNSAyNy4yNTQgMjk1LjM3NSAyMi4yNTQgMjg4LjI1IDIwLjM3OUMyNjkuMTI1IDE1LjAwNCAyMTYuNzUgMC4wMDQgMjE2Ljc1IDAuMDA0QzIxNi41IDAuMDA0IDIwNiAtMC40OTYgMTk4LjEyNSA4LjYyOUMxOTIuNjI1IDE0Ljg3OSAxOTAuNzUgMjUuMDA0IDE5MyAzMy4wMDRMMjM1LjM3NSAxODQuODc3TDE0OCAxNjAuODc3TDEyMS4xMjUgOTMuMDA0QzExOC4yNSA4NS42MjkgMTEyIDc5Ljg3OSAxMDQuMzc1IDc3Ljc1NEM1OS44NzUgNjUuNTA0IDYxLjM3NSA2NS42MjkgNTcgNjUuNjI5QzQzLjUgNjUuNjI5IDMyLjI1IDc3LjAwNCAzMiA5MC44NzlMMzIuMjUgMTk4LjEyN0MzMi41IDIwOS43NTIgMzcuNSAyMjAuNzUyIDQ1Ljg3NSAyMjguMzc3Wk05Mi41IDEwNy43NTRMMTI0LjEyNSAxODcuMzc3TDI4MS44NzUgMjMwLjg3N0wyMjcuMzc1IDM2LjI1NEwyNzYuMjUgNTAuMjU0TDM4NSAyNTkuMjUyTDQ5NS4zNzUgMjg5LjYyN0M1MjAuNSAyOTYuNTAyIDU0MS44NzUgMzA4LjYyNyA1NTcuMzc1IDMyNC43NTJDNTcxIDMzOC44NzcgNTc3LjYyNSAzNTEuNjI3IDU3NS42MjUgMzU5LjYyNUM1NzMuNjI1IDM2Ny4zNzUgNTYxLjg3NSAzNzQuNzUgNTQzLjYyNSAzNzkuODc1QzUxMi43NSAzODguNSA0ODMuNSAzODEuMjUgNDczLjEyNSAzNzguMzc1TDE3Ny4yNSAyOTcuMDAyQzE3MS4xMjUgMjk1LjI1MiAxNjUuNSAyOTIuMTI3IDE2MC43NSAyODcuODc3TDY3LjUgMjA0Ljc1MkM2NS41IDIwMy4wMDIgNjQuMzc1IDIwMC4yNTIgNjQuMjUgMTk3LjUwMkw2NC4xMjUgOTkuODc5TDkyLjUgMTA3Ljc1NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PlaneArrival(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624 480H16C7.199 480 0 487.199 0 496C0 504.799 7.199 512 16 512H624C632.801 512 640 504.799 640 496C640 487.199 632.801 480 624 480ZM45.875 228.377L139.25 311.502C147.625 319.252 157.875 324.877 168.75 327.877L464.625 409.25C480.875 413.75 497 416 512.5 416C526.375 416 539.75 414.25 552.25 410.625C583.125 402 601.375 387.5 606.625 367.625C611.75 347.877 603 325.877 580.5 302.502C561 282.377 534.5 267.252 503.875 258.752L407 232.127L310.5 46.879C308.25 42.629 306.375 38.254 304.375 34.004C301.125 27.254 295.375 22.254 288.25 20.379C269.125 15.004 216.75 0.004 216.75 0.004C216.5 0.004 206 -0.496 198.125 8.629C192.625 14.879 190.75 25.004 193 33.004L235.375 184.877L148 160.877L121.125 93.004C118.25 85.629 112 79.879 104.375 77.754C59.875 65.504 61.375 65.629 57 65.629C43.5 65.629 32.25 77.004 32 90.879L32.25 198.127C32.5 209.752 37.5 220.752 45.875 228.377ZM92.5 107.754L124.125 187.377L281.875 230.877L227.375 36.254L276.25 50.254L385 259.252L495.375 289.627C520.5 296.502 541.875 308.627 557.375 324.752C571 338.877 577.625 351.627 575.625 359.625C573.625 367.375 561.875 374.75 543.625 379.875C512.75 388.5 483.5 381.25 473.125 378.375L177.25 297.002C171.125 295.252 165.5 292.127 160.75 287.877L67.5 204.752C65.5 203.002 64.375 200.252 64.25 197.502L64.125 99.879L92.5 107.754Z" />
        </Icon>
    </>
}