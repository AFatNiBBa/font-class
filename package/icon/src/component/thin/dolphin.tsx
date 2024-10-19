
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dolphin` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dolphin?s=thin dolphin}
 * @preview ![dolphin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQuMDA0IDEyOEMxMzUuMTI5IDEyOCAxMjguMDA0IDEzNS4xMjUgMTI4LjAwNCAxNDRTMTM1LjEyOSAxNjAgMTQ0LjAwNCAxNjBDMTUyLjg3NSAxNjAgMTYwIDE1Mi44NzUgMTYwIDE0NFMxNTIuODc1IDEyOCAxNDQuMDA0IDEyOFpNNDM4LjM2NyAxMjkuNTIzTDQyNC40NjMgMTE3LjYwNUM0MzMuNDc5IDkzLjM1NSA0NTAuNjkzIDYzLjQ2OSA0NzYuNzcxIDI3LjcxMUM0ODIuMDgyIDIwLjM4MyA0ODAuMDUzIDEyLjY3NiA0NzYuMzM4IDcuODk1QzQ3Mi40NTkgMi44NzEgNDY2Ljc1IDAuMDA0IDQ1OS45ODIgMC4wMDRDNDU4LjY5MSAwLjAwNCA0NTcuMzYzIDAuMTA1IDQ1Ni4wMDIgMC4zMkM0MDQuMjQ4IDguNDM4IDM2Mi4zODcgMjQuOTUzIDMzMi4wOCA0MC40MDJDMjk2LjU3OCAxNC42OCAyNTQuMTc0IDAgMjEwLjA0NSAwSDE3NkM5Ni40NzEgMCAzMiA2NC40NzMgMzIgMTQ0QzMyIDE2Mi4zODMgMzUuNzcxIDE3OS44MDUgNDIuMDQ5IDE5NS45NjlMMTQuMjUgMjE0LjUwNEM1LjM0OCAyMjAuNDM4IDAgMjMwLjQzIDAgMjQxLjEyOVYyNTYuMDA0QzAgMjczLjY3NiAxNC4zMjYgMjg4LjAwNCAzMiAyODguMDA0SDE5MkwxOTEuOTk4IDI4OEgxOTIuOTQzTDI5NS43NjggMzQ5LjY5NUMyOTguNDA4IDM1MS4yNzcgMzAxLjIyNyAzNTIgMzAzLjk3MSAzNTJDMzEyLjMxOCAzNTIgMzIwIDM0NS4zMzYgMzIwIDMzNS45NzdWMjg4QzMyMCAyODggMzI3LjA4MiAyODggMzI4IDI4OEMzNTguOTI4IDI4OCAzODQgMzEzLjA3IDM4NCAzNDRTMzU4LjkyOCA0MDAgMzI4IDQwMEgyNjUuNzc5TDI1Mi43MTMgMzc4LjY4OEMyNDguMzA3IDM3Mi4wMzUgMjQwLjgwOSAzNjggMjMyLjc0NiAzNjhIMTcxLjk5NEMxNjIuNDM0IDM2OCAxNTYuNzI5IDM3OC42NTIgMTYyLjAyOSAzODYuNjEzTDE5Ny41ODIgNDM5Ljk4OFY0NDAuMDEyTDE2Mi4wNTcgNDkzLjM0QzE1Ni43NDQgNTAxLjMyIDE2Mi40NjMgNTEyIDE3Mi4wNDcgNTEySDIzMi43NDRDMjQwLjgwOSA1MTEuOTk2IDI0OC4zMDcgNTA3Ljk2OSAyNTIuNzEzIDUwMS4zMDlMMjY1Ljc3OSA0ODBIMzIwQzQyNS45MiA0ODAgNTEyLjQxIDM5My45MTggNTEyIDI4OEM1MTIgMjAyLjI3IDQ2MC4zMTQgMTQ4LjMzNiA0MzguMzY3IDEyOS41MjNaTTQ0NC45MDQgNDEyLjA2MkM0MTEuNTQxIDQ0NS41NTUgMzY3LjE4MiA0NjQgMzIwIDQ2NEgyNTYuODJMMjM5LjM2OSA0OTIuNDhDMjM3LjkxMiA0OTQuNjg0IDIzNS40MzIgNDk2IDIzMi43NDQgNDk2SDE3OS41MDhMMjE2LjgwNSA0MzkuOTg4TDE3OS41MTQgMzg0SDIzMi43NDZDMjM1LjQzNCAzODQgMjM3LjkxMiAzODUuMzE2IDIzOS4wNzIgMzg3LjA1MUwyNTYuODIgNDE2SDMyOEMzNjcuNzAxIDQxNiA0MDAgMzgzLjY5OSA0MDAgMzQ0UzM2Ny43MDEgMjcyIDMyOCAyNzJIMzIwVjI1NkMzMjAgMjUxLjU4MiAzMTYuNDE4IDI0OCAzMTIgMjQ4UzMwNCAyNTEuNTgyIDMwNCAyNTZWMzM1Ljk3N0wyMDEuMTc2IDI3NC4yODFMMTk2LjQzMiAyNzIuMDA0SDMyQzIzLjE3OCAyNzIuMDA0IDE2IDI2NC44MjggMTYgMjU2LjAwNFYyNDEuMTI5QzE2IDIzNS43NjYgMTguNjY0IDIzMC43ODkgMjMuMTI3IDIyNy44MTZMNjEuNjE1IDIwMi4xNTJDNTguMTk3IDE5My4zNTIgNDggMTcyLjA2NiA0OCAxNDRDNDggNzMuNDIyIDEwNS40MjIgMTYgMTc2IDE2SDIxMC4wNDVDMjE2LjU1NSAxNiAyNjUuOTUxIDEyLjI0MiAzMzAuNjIzIDU5LjEwNUwzMzkuMzQ4IDU0LjY1NkMzNzYuNjU4IDM1LjYzNyA0MTYuNzQyIDIyLjY3MiA0NTkuOTgyIDE2LjAwNEM0NjIuMDk0IDE2LjAwNCA0NjMuMDA2IDE2LjgwNSA0NjMuODQ0IDE4LjI4NUM0MzcuNDE2IDU0LjUyMyA0MTkuMTE5IDg2LjA2MyA0MDkuNDY3IDExMi4wMzFMNDA1LjU3OCAxMjIuNDkyQzQxNi40NDEgMTMxLjgwNSA0MTAuMzU5IDEyNi41OSA0MjcuOTU1IDE0MS42NzJDNDQ4LjQxNCAxNTkuMjA3IDQ5NiAyMDguNTc0IDQ5NiAyODguMDYyQzQ5Ni4xODIgMzM0Ljc2NiA0NzguMDM1IDM3OC44MDEgNDQ0LjkwNCA0MTIuMDYyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Dolphin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M144.004 128C135.129 128 128.004 135.125 128.004 144S135.129 160 144.004 160C152.875 160 160 152.875 160 144S152.875 128 144.004 128ZM438.367 129.523L424.463 117.605C433.479 93.355 450.693 63.469 476.771 27.711C482.082 20.383 480.053 12.676 476.338 7.895C472.459 2.871 466.75 0.004 459.982 0.004C458.691 0.004 457.363 0.105 456.002 0.32C404.248 8.438 362.387 24.953 332.08 40.402C296.578 14.68 254.174 0 210.045 0H176C96.471 0 32 64.473 32 144C32 162.383 35.771 179.805 42.049 195.969L14.25 214.504C5.348 220.438 0 230.43 0 241.129V256.004C0 273.676 14.326 288.004 32 288.004H192L191.998 288H192.943L295.768 349.695C298.408 351.277 301.227 352 303.971 352C312.318 352 320 345.336 320 335.977V288C320 288 327.082 288 328 288C358.928 288 384 313.07 384 344S358.928 400 328 400H265.779L252.713 378.688C248.307 372.035 240.809 368 232.746 368H171.994C162.434 368 156.729 378.652 162.029 386.613L197.582 439.988V440.012L162.057 493.34C156.744 501.32 162.463 512 172.047 512H232.744C240.809 511.996 248.307 507.969 252.713 501.309L265.779 480H320C425.92 480 512.41 393.918 512 288C512 202.27 460.314 148.336 438.367 129.523ZM444.904 412.062C411.541 445.555 367.182 464 320 464H256.82L239.369 492.48C237.912 494.684 235.432 496 232.744 496H179.508L216.805 439.988L179.514 384H232.746C235.434 384 237.912 385.316 239.072 387.051L256.82 416H328C367.701 416 400 383.699 400 344S367.701 272 328 272H320V256C320 251.582 316.418 248 312 248S304 251.582 304 256V335.977L201.176 274.281L196.432 272.004H32C23.178 272.004 16 264.828 16 256.004V241.129C16 235.766 18.664 230.789 23.127 227.816L61.615 202.152C58.197 193.352 48 172.066 48 144C48 73.422 105.422 16 176 16H210.045C216.555 16 265.951 12.242 330.623 59.105L339.348 54.656C376.658 35.637 416.742 22.672 459.982 16.004C462.094 16.004 463.006 16.805 463.844 18.285C437.416 54.523 419.119 86.063 409.467 112.031L405.578 122.492C416.441 131.805 410.359 126.59 427.955 141.672C448.414 159.207 496 208.574 496 288.062C496.182 334.766 478.035 378.801 444.904 412.062Z" />
        </Icon>
    </>
}