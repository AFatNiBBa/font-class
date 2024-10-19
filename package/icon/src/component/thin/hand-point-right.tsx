
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-point-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-right?s=thin hand-point-right}
 * @preview ![hand-point-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTUuNjg5IDI3NS4xMDRDMTk3LjM2MSAyODEuODY1IDE4NC4xODggMjk5LjM1MiAxODQuMTg4IDMyMEMxODQuMTg4IDMzMi44OTYgMTg5LjM1OSAzNDQuNTY4IDE5Ny42NjQgMzUzLjIwMUMxNzYuMTg2IDM1Ny45NjkgMTYwLjA0NyAzNzcuMTA1IDE2MC4wNDcgNDAwQzE2MC4wNDcgNDI2LjQ2OSAxODEuNTc4IDQ0OCAyMDguMDQ3IDQ0OEgyNzkuODQ0QzMwNi4zMTIgNDQ4IDMyNy44NDQgNDI2LjQ2OSAzMjcuODQ0IDQwMEMzMjcuODQ0IDM4Ny4xMDUgMzIyLjY3MiAzNzUuNDM2IDMxNC4zNzEgMzY2LjgwM0MzMzUuODU3IDM2Mi4wNDEgMzUyIDM0Mi45IDM1MiAzMjBDMzUyIDMwNy4wODYgMzQ2LjgxOCAyOTUuMzk4IDMzOC40OTYgMjg2Ljc2NEMzNTkuOTE4IDI4MS45NTMgMzc2IDI2Mi44NTQgMzc2IDI0MEMzNzYgMjI3LjY2MiAzNzEuMTkxIDIxNi41MTIgMzYzLjUxNiAyMDhINDY0QzQ5MC40NjkgMjA4IDUxMiAxODYuNDY5IDUxMiAxNjBTNDkwLjQ2OSAxMTIgNDY0IDExMkgyMzEuMTkxQzIyNy4yNyA4NC45MzIgMjA0LjEzNyA2NCAxNzYgNjRIOTcuMDc4Qzc3LjE3MiA2NCA1OC44NDQgNzQuODQ0IDQ5LjIzNCA5Mi4yNUwxNC4xNDEgMTU1Ljg3NUM0Ljg5MSAxNzIuNjI1IDAgMTkxLjYyNSAwIDIxMC43NVYzMzguNjg4QzAgMzk4LjY1NiA0OC43ODEgNDQ3LjY4OCAxMDguNzk3IDQ0OEgxMzZDMTQwLjQyMiA0NDggMTQ0IDQ0NC40MDYgMTQ0IDQ0MFMxNDAuNDIyIDQzMiAxMzYgNDMySDEwOC44NDRDNTcuNjQxIDQzMS43NSAxNiAzODkuODc1IDE2IDMzOC42ODhWMjEwLjc1QzE2IDE5NC4zMTIgMjAuMjAzIDE3OCAyOC4xNDEgMTYzLjYyNUw2My4yMzQgMTAwQzcwLjAzMSA4Ny42NTYgODMgODAgOTcuMDc4IDgwSDE3NkMxOTguMDYyIDgwIDIxNiA5Ny45MzggMjE2IDEyMFYyMDhDMjE2IDIyNS42NTYgMjAxLjY0MSAyNDAgMTg0IDI0MFMxNTIgMjI1LjY1NiAxNTIgMjA4VjE2MEMxNTIgMTU1LjU5NCAxNDguNDIyIDE1MiAxNDQgMTUyUzEzNiAxNTUuNTk0IDEzNiAxNjBWMjA4QzEzNiAyMzQuNDY5IDE1Ny41MzEgMjU2IDE4NCAyNTZDMTkwLjM4MSAyNTYgMTk2LjQ0OSAyNTQuNjkxIDIwMi4wMjMgMjUyLjQyMkMyMDQuNDA4IDI2MS4yNTQgMjA5LjE2NCAyNjkuMDU5IDIxNS42ODkgMjc1LjEwNFpNMzExLjg0NCA0MDBDMzExLjg0NCA0MTcuNjU2IDI5Ny40ODQgNDMyIDI3OS44NDQgNDMySDIwOC4wNDdDMTkwLjQwNiA0MzIgMTc2LjA0NyA0MTcuNjU2IDE3Ni4wNDcgNDAwUzE5MC40MDYgMzY4IDIwOC4wNDcgMzY4SDI3OS44NDRDMjk3LjQ4NCAzNjggMzExLjg0NCAzODIuMzQ0IDMxMS44NDQgNDAwWk0zMzYgMzIwQzMzNiAzMzcuNjU2IDMyMS42NDEgMzUyIDMwNCAzNTJIMjMyLjE4OEMyMTQuNTQ3IDM1MiAyMDAuMTg4IDMzNy42NTYgMjAwLjE4OCAzMjBTMjE0LjU0NyAyODggMjMyLjE4OCAyODhIMzA0QzMyMS42NDEgMjg4IDMzNiAzMDIuMzQ0IDMzNiAzMjBaTTQ2NCAxMjhDNDgxLjY0MSAxMjggNDk2IDE0Mi4zNDQgNDk2IDE2MFM0ODEuNjQxIDE5MiA0NjQgMTkySDI0OC4xODhDMjQyLjU2MiAxOTIgMjM3LjE1IDE5My4xIDIzMiAxOTQuOTUzVjEyOEg0NjRaTTIxNi43NyAyNDIuODc5QzIyNC45MDggMjM1LjIyNyAyMzAuMjI3IDIyNC43OTUgMjMxLjQ4NCAyMTMuMDk4QzIzNi41MzEgMjA5Ljk2NSAyNDIuMTU4IDIwOCAyNDguMTg4IDIwOEgzMjhDMzQ1LjY0MSAyMDggMzYwIDIyMi4zNDQgMzYwIDI0MFMzNDUuNjQxIDI3MiAzMjggMjcySDI0OC4xODhDMjMxLjU2NiAyNzIgMjE4LjI5OSAyNTkuMTE5IDIxNi43NyAyNDIuODc5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandPointRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M215.689 275.104C197.361 281.865 184.188 299.352 184.188 320C184.188 332.896 189.359 344.568 197.664 353.201C176.186 357.969 160.047 377.105 160.047 400C160.047 426.469 181.578 448 208.047 448H279.844C306.312 448 327.844 426.469 327.844 400C327.844 387.105 322.672 375.436 314.371 366.803C335.857 362.041 352 342.9 352 320C352 307.086 346.818 295.398 338.496 286.764C359.918 281.953 376 262.854 376 240C376 227.662 371.191 216.512 363.516 208H464C490.469 208 512 186.469 512 160S490.469 112 464 112H231.191C227.27 84.932 204.137 64 176 64H97.078C77.172 64 58.844 74.844 49.234 92.25L14.141 155.875C4.891 172.625 0 191.625 0 210.75V338.688C0 398.656 48.781 447.688 108.797 448H136C140.422 448 144 444.406 144 440S140.422 432 136 432H108.844C57.641 431.75 16 389.875 16 338.688V210.75C16 194.312 20.203 178 28.141 163.625L63.234 100C70.031 87.656 83 80 97.078 80H176C198.062 80 216 97.938 216 120V208C216 225.656 201.641 240 184 240S152 225.656 152 208V160C152 155.594 148.422 152 144 152S136 155.594 136 160V208C136 234.469 157.531 256 184 256C190.381 256 196.449 254.691 202.023 252.422C204.408 261.254 209.164 269.059 215.689 275.104ZM311.844 400C311.844 417.656 297.484 432 279.844 432H208.047C190.406 432 176.047 417.656 176.047 400S190.406 368 208.047 368H279.844C297.484 368 311.844 382.344 311.844 400ZM336 320C336 337.656 321.641 352 304 352H232.188C214.547 352 200.188 337.656 200.188 320S214.547 288 232.188 288H304C321.641 288 336 302.344 336 320ZM464 128C481.641 128 496 142.344 496 160S481.641 192 464 192H248.188C242.562 192 237.15 193.1 232 194.953V128H464ZM216.77 242.879C224.908 235.227 230.227 224.795 231.484 213.098C236.531 209.965 242.158 208 248.188 208H328C345.641 208 360 222.344 360 240S345.641 272 328 272H248.188C231.566 272 218.299 259.119 216.77 242.879Z" />
        </Icon>
    </>
}