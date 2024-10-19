
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bed-pulse` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bed-pulse?s=thin bed-pulse}
 * @preview ![bed-pulse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjMuNzUgODAuMDA0SDM0Ny4wNjJMMzkyLjg0NCAxNzEuNTc4QzM5NC4yMTkgMTc0LjI5NyAzOTYuOTY5IDE3NiA0MDAgMTc2SDQwMC4zNDRDNDAzLjQ2OSAxNzUuODU5IDQwNi4yNSAxNzMuODkxIDQwNy40MzggMTcwLjk2OUw0NjQuODEzIDI3LjUyMUw0ODguODQ0IDc1LjU4MkM0OTAuMTg4IDc4LjI4NSA0OTIuOTY5IDgwLjAwNCA0OTYgODAuMDA0SDYzMkM2MzYuNDA2IDgwLjAwNCA2NDAgNzYuNDI2IDY0MCA3Mi4wMDRTNjM2LjQwNiA2NC4wMDYgNjMyIDY0LjAwNkg1MDAuOTM4TDQ3MS4xNTYgNC40M0M0NjkuNzUgMS42MTcgNDY3LjUgLTAuMTMzIDQ2My42NTYgMC4wMDhDNDYwLjUzMSAwLjE0OCA0NTcuNzUgMi4xMTcgNDU2LjU2MiA1LjAzOUwzOTkuMTg3IDE0OC40ODZMMzU5LjE1NiA2OC40MjZDMzU3LjgxMiA2NS43MjUgMzU1LjAzMSA2NC4wMDYgMzUyIDY0LjAwNkMzNTIgNjQuMDA2IDI4My42NTYgNjQuMDA2IDIzOC42MjUgNjQuMDA2QzIxNi4xMjUgNjQuMDIxIDIwMC4yNSA2NC4yNTYgMjAwLjAzMSA2NC4wMDZDMTk3LjkwNiA2NC4wMDYgMTk1Ljg3NSA2NC44MzQgMTk0LjM3NSA2Ni4zMzRDMTkyLjg3NSA2Ny44MzIgMTkyIDY5Ljg3OSAxOTIgNzIuMDA0QzE5MiA4MC4wMDQgMTkyIDgwLjAwNCAyMjMuNzUgODAuMDA0Wk0xNDQgMzIwQzE4OC4xMjUgMzIwIDIyNCAyODQuMTI1IDIyNCAyNDBTMTg4LjEyNSAxNjAgMTQ0IDE2MFM2NCAxOTUuODc1IDY0IDI0MFM5OS44NzUgMzIwIDE0NCAzMjBaTTE0NCAxNzZDMTc5LjI4OSAxNzYgMjA4IDIwNC43MTEgMjA4IDI0MFMxNzkuMjg5IDMwNCAxNDQgMzA0UzgwIDI3NS4yODkgODAgMjQwUzEwOC43MTEgMTc2IDE0NCAxNzZaTTUyOCAxNjBINDU2QzQ1MS41ODIgMTYwIDQ0OCAxNjMuNTgyIDQ0OCAxNjhTNDUxLjU4MiAxNzYgNDU2IDE3Nkg1MjhDNTgxLjAyIDE3NiA2MjQgMjE4Ljk4IDYyNCAyNzJWMzUySDI4OFYxNzZIMzQ0QzM0OC40MTggMTc2IDM1MiAxNzIuNDE4IDM1MiAxNjhTMzQ4LjQxOCAxNjAgMzQ0IDE2MEgyODhDMjc5LjE2NCAxNjAgMjcyIDE2Ny4xNjQgMjcyIDE3NlYzNTJIMTZWNzJDMTYgNjcuNTk0IDEyLjQyMiA2NCA4IDY0UzAgNjcuNTk0IDAgNzJWNTA0QzAgNTA4LjQwNiAzLjU3OCA1MTIgOCA1MTJTMTYgNTA4LjQwNiAxNiA1MDRWNDQ4SDYyNFY1MDRDNjI0IDUwOC40MDYgNjI3LjU3OCA1MTIgNjMyIDUxMlM2NDAgNTA4LjQwNiA2NDAgNTA0VjI3MkM2NDAgMjEwLjE0NSA1ODkuODU1IDE2MCA1MjggMTYwWk02MjQgNDMySDE2VjM2OEg2MjRWNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BedPulse(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M223.75 80.004H347.062L392.844 171.578C394.219 174.297 396.969 176 400 176H400.344C403.469 175.859 406.25 173.891 407.438 170.969L464.813 27.521L488.844 75.582C490.188 78.285 492.969 80.004 496 80.004H632C636.406 80.004 640 76.426 640 72.004S636.406 64.006 632 64.006H500.938L471.156 4.43C469.75 1.617 467.5 -0.133 463.656 0.008C460.531 0.148 457.75 2.117 456.562 5.039L399.187 148.486L359.156 68.426C357.812 65.725 355.031 64.006 352 64.006C352 64.006 283.656 64.006 238.625 64.006C216.125 64.021 200.25 64.256 200.031 64.006C197.906 64.006 195.875 64.834 194.375 66.334C192.875 67.832 192 69.879 192 72.004C192 80.004 192 80.004 223.75 80.004ZM144 320C188.125 320 224 284.125 224 240S188.125 160 144 160S64 195.875 64 240S99.875 320 144 320ZM144 176C179.289 176 208 204.711 208 240S179.289 304 144 304S80 275.289 80 240S108.711 176 144 176ZM528 160H456C451.582 160 448 163.582 448 168S451.582 176 456 176H528C581.02 176 624 218.98 624 272V352H288V176H344C348.418 176 352 172.418 352 168S348.418 160 344 160H288C279.164 160 272 167.164 272 176V352H16V72C16 67.594 12.422 64 8 64S0 67.594 0 72V504C0 508.406 3.578 512 8 512S16 508.406 16 504V448H624V504C624 508.406 627.578 512 632 512S640 508.406 640 504V272C640 210.145 589.855 160 528 160ZM624 432H16V368H624V432Z" />
        </Icon>
    </>
}