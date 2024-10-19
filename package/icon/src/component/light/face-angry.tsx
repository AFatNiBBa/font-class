
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-angry` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-angry?s=light face-angry}
 * @preview ![face-angry](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDAgMjQwQzIwMCAyMzYuMTg4IDE5OC45MiAyMzIuNzExIDE5Ny4zMzggMjI5LjUwOEMyMDIuODczIDIzMS4xNjggMjA0Ljc5NyAyMzIgMjA4IDIzMkMyMTQuODc1IDIzMiAyMjEuMjUgMjI3LjUzMSAyMjMuMzEyIDIyMC41OTRDMjI1Ljg3NSAyMTIuMTQxIDIyMS4wNjIgMjAzLjIxOSAyMTIuNTk0IDIwMC42NzJMMTMyLjU5NCAxNzYuNjcyQzEyNC4xODggMTc0LjIzNCAxMTUuMjE5IDE3OC45MzggMTEyLjY4OCAxODcuNDA2QzExMC4xMjUgMTk1Ljg1OSAxMTQuOTM4IDIwNC43ODEgMTIzLjQwNiAyMDcuMzI4TDE2NC4xNzggMjE5LjU1OUMxNTcuMDI5IDIyMy43MTUgMTUyIDIzMS4xMzcgMTUyIDI0MEMxNTIgMjUzLjI1NCAxNjIuNzQ2IDI2NCAxNzYgMjY0UzIwMCAyNTMuMjU0IDIwMCAyNDBaTTI1NiAzMzZDMjI0Ljc1OCAzMzYgMTk1LjQ1MyAzNDkuNzUgMTc1LjM1MiAzNzMuNzVDMTY5LjY2IDM4MC42MjUgMTcwLjYyOSAzOTAuNzUgMTc3LjQxIDM5Ni4yNUMxODQuMTkxIDQwMS44NzUgMTk0LjI0MiA0MDEuMTI1IDE5OS45MzQgMzk0LjI1QzIyNy43ODUgMzYwLjg3NSAyODQuMDk0IDM2MC44NzUgMzExLjk0NSAzOTQuMjVDMzE3LjI3MyA0MDAuNzUgMzI3LjQ0NSA0MDIuMjUgMzM0LjQ2OSAzOTYuMjVDMzQxLjI1IDM5MC42MjUgMzQyLjIxOSAzODAuNSAzMzYuNTI3IDM3My43NUMzMTYuNTQ3IDM0OS43NSAyODcuMjQyIDMzNiAyNTYgMzM2Wk0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDIgMTYgMjU2UzEyMy40NjEgNDk2IDI1NiA0OTZTNDk2IDM4OC41OCA0OTYgMjU2UzM4OC41MzkgMTYgMjU2IDE2Wk0yNTYgNDY0QzE0MS4zMDkgNDY0IDQ4IDM3MC42OTEgNDggMjU2UzE0MS4zMDkgNDggMjU2IDQ4UzQ2NCAxNDEuMzA5IDQ2NCAyNTZTMzcwLjY5MSA0NjQgMjU2IDQ2NFpNMzc5LjQwNiAxNzYuNjcyTDI5OS40MDYgMjAwLjY3MkMyOTAuOTM4IDIwMy4yMTkgMjg2LjEyNSAyMTIuMTQxIDI4OC42ODggMjIwLjU5NEMyOTAuNzUgMjI3LjUzMSAyOTcuMTI1IDIzMiAzMDQgMjMyQzMwNy4yMyAyMzIgMzA5LjI1NiAyMzEuMTI5IDMxNC42NjIgMjI5LjUwOEMzMTMuMDggMjMyLjcxMSAzMTIgMjM2LjE4OCAzMTIgMjQwQzMxMiAyNTMuMjU0IDMyMi43NDYgMjY0IDMzNiAyNjRTMzYwIDI1My4yNTQgMzYwIDI0MEMzNjAgMjMxLjEzNyAzNTQuOTcxIDIyMy43MTUgMzQ3LjgyMiAyMTkuNTU5TDM4OC41OTQgMjA3LjMyOEMzOTcuMDYyIDIwNC43ODEgNDAxLjg3NSAxOTUuODU5IDM5OS4zMTIgMTg3LjQwNkMzOTYuNzgxIDE3OC45MjIgMzg3Ljg0NCAxNzQuMjE5IDM3OS40MDYgMTc2LjY3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceAngry(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M200 240C200 236.188 198.92 232.711 197.338 229.508C202.873 231.168 204.797 232 208 232C214.875 232 221.25 227.531 223.312 220.594C225.875 212.141 221.062 203.219 212.594 200.672L132.594 176.672C124.188 174.234 115.219 178.938 112.688 187.406C110.125 195.859 114.938 204.781 123.406 207.328L164.178 219.559C157.029 223.715 152 231.137 152 240C152 253.254 162.746 264 176 264S200 253.254 200 240ZM256 336C224.758 336 195.453 349.75 175.352 373.75C169.66 380.625 170.629 390.75 177.41 396.25C184.191 401.875 194.242 401.125 199.934 394.25C227.785 360.875 284.094 360.875 311.945 394.25C317.273 400.75 327.445 402.25 334.469 396.25C341.25 390.625 342.219 380.5 336.527 373.75C316.547 349.75 287.242 336 256 336ZM256 16C123.461 16 16 123.42 16 256S123.461 496 256 496S496 388.58 496 256S388.539 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM379.406 176.672L299.406 200.672C290.938 203.219 286.125 212.141 288.688 220.594C290.75 227.531 297.125 232 304 232C307.23 232 309.256 231.129 314.662 229.508C313.08 232.711 312 236.188 312 240C312 253.254 322.746 264 336 264S360 253.254 360 240C360 231.137 354.971 223.715 347.822 219.559L388.594 207.328C397.062 204.781 401.875 195.859 399.312 187.406C396.781 178.922 387.844 174.219 379.406 176.672Z" />
        </Icon>
    </>
}