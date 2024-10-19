
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `x-ray` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=duotone x-ray}
 * @preview ![x-ray](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOCAzMjBDMTk5LjE2NCAzMjAgMTkyIDMyNy4xNjIgMTkyIDMzNkMxOTIgMzQ0LjgzNiAxOTkuMTY0IDM1MiAyMDggMzUyUzIyNCAzNDQuODM2IDIyNCAzMzZDMjI0IDMyNy4xNjIgMjE2LjgzNiAzMjAgMjA4IDMyMFpNMzA0IDM1MkMzMTIuODM2IDM1MiAzMjAgMzQ0LjgzNiAzMjAgMzM2QzMyMCAzMjcuMTYyIDMxMi44MzYgMzIwIDMwNCAzMjBTMjg4IDMyNy4xNjIgMjg4IDMzNkMyODggMzQ0LjgzNiAyOTUuMTY0IDM1MiAzMDQgMzUyWk0zMiA5NlY0MTZINDgwVjk2SDMyWk00MTYgMTg0QzQxNiAxODguMzk4IDQxMi40IDE5MiA0MDggMTkySDI3MlYyMjRIMzc2QzM4MC40IDIyNCAzODQgMjI3LjYgMzg0IDIzMlYyNDhDMzg0IDI1Mi4zOTggMzgwLjQgMjU2IDM3NiAyNTZIMjcyVjI4OEgzNDEuMzM0QzM2Ni44OTMgMjg4IDM4Mi4xMzcgMzE2LjQ4NCAzNjcuOTU5IDMzNy43NUwzNDYuNjI1IDM2OS43NUMzNDAuNjg5IDM3OC42NTIgMzMwLjY5OSAzODQgMzIwIDM4NEgxOTJDMTgxLjMwMyAzODQgMTcxLjMxMSAzNzguNjUyIDE2NS4zNzcgMzY5Ljc1TDE0NC4wNDEgMzM3Ljc1QzEyOS44NjMgMzE2LjQ4NCAxNDUuMTA3IDI4OCAxNzAuNjY2IDI4OEgyNDBWMjU2SDEzNkMxMzEuNiAyNTYgMTI4IDI1Mi4zOTggMTI4IDI0OFYyMzJDMTI4IDIyNy42IDEzMS42IDIyNCAxMzYgMjI0SDI0MFYxOTJIMTA0Qzk5LjYgMTkyIDk2IDE4OC4zOTggOTYgMTg0VjE2OEM5NiAxNjMuNiA5OS42IDE2MCAxMDQgMTYwSDI0MFYxMzZDMjQwIDEzMS41OCAyNDMuNTgyIDEyOCAyNDggMTI4SDI2NEMyNjguNDE4IDEyOCAyNzIgMTMxLjU4IDI3MiAxMzZWMTYwSDQwOEM0MTIuNCAxNjAgNDE2IDE2My42IDQxNiAxNjhWMTg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00OTYgNDE2SDE2QzcuMTY0IDQxNiAwIDQyMy4xNjIgMCA0MzJWNDY0QzAgNDcyLjgzNiA3LjE2NCA0ODAgMTYgNDgwSDQ5NkM1MDQuODM2IDQ4MCA1MTIgNDcyLjgzNiA1MTIgNDY0VjQzMkM1MTIgNDIzLjE2MiA1MDQuODM2IDQxNiA0OTYgNDE2Wk00OTYgMzJIMTZDNy4xNjQgMzIgMCAzOS4xNjIgMCA0OFY4MEMwIDg4LjgzNiA3LjE2NCA5NiAxNiA5Nkg0OTZDNTA0LjgzNiA5NiA1MTIgODguODM2IDUxMiA4MFY0OEM1MTIgMzkuMTYyIDUwNC44MzYgMzIgNDk2IDMyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function XRay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M208 320C199.164 320 192 327.162 192 336C192 344.836 199.164 352 208 352S224 344.836 224 336C224 327.162 216.836 320 208 320ZM304 352C312.836 352 320 344.836 320 336C320 327.162 312.836 320 304 320S288 327.162 288 336C288 344.836 295.164 352 304 352ZM32 96V416H480V96H32ZM416 184C416 188.398 412.4 192 408 192H272V224H376C380.4 224 384 227.6 384 232V248C384 252.398 380.4 256 376 256H272V288H341.334C366.893 288 382.137 316.484 367.959 337.75L346.625 369.75C340.689 378.652 330.699 384 320 384H192C181.303 384 171.311 378.652 165.377 369.75L144.041 337.75C129.863 316.484 145.107 288 170.666 288H240V256H136C131.6 256 128 252.398 128 248V232C128 227.6 131.6 224 136 224H240V192H104C99.6 192 96 188.398 96 184V168C96 163.6 99.6 160 104 160H240V136C240 131.58 243.582 128 248 128H264C268.418 128 272 131.58 272 136V160H408C412.4 160 416 163.6 416 168V184Z" />
            <path d="M496 416H16C7.164 416 0 423.162 0 432V464C0 472.836 7.164 480 16 480H496C504.836 480 512 472.836 512 464V432C512 423.162 504.836 416 496 416ZM496 32H16C7.164 32 0 39.162 0 48V80C0 88.836 7.164 96 16 96H496C504.836 96 512 88.836 512 80V48C512 39.162 504.836 32 496 32Z" />
        </Icon>
    </>
}