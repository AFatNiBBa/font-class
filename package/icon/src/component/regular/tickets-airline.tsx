
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tickets-airline` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-airline?s=regular tickets-airline}
 * @preview ![tickets-airline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCA0MDBWOTZDMjEuNSA5NiAwIDExNy41IDAgMTQ0VjQxNkMwIDQ1MS4zMTIgMjguNjQxIDQ4MCA2NCA0ODBINDk2QzUyMi41IDQ4MCA1NDQgNDU4LjUgNTQ0IDQzMkg4MEM2Mi4zNDQgNDMyIDQ4IDQxNy42NTYgNDggNDAwWk01MTIgMjI0QzUwMy4xNjQgMjI0IDQ5NiAyMzEuMTYyIDQ5NiAyNDBDNDk2IDI0OC44MzYgNTAzLjE2NCAyNTYgNTEyIDI1NlM1MjggMjQ4LjgzNiA1MjggMjQwQzUyOCAyMzEuMTYyIDUyMC44MzYgMjI0IDUxMiAyMjRaTTUxMiAyODhDNTAzLjE2NCAyODggNDk2IDI5NS4xNjIgNDk2IDMwNEM0OTYgMzEyLjgzNiA1MDMuMTY0IDMyMCA1MTIgMzIwUzUyOCAzMTIuODM2IDUyOCAzMDRDNTI4IDI5NS4xNjIgNTIwLjgzNiAyODggNTEyIDI4OFpNNTEyIDE2MEM1MDMuMTY0IDE2MCA0OTYgMTY3LjE2MiA0OTYgMTc2QzQ5NiAxODQuODM2IDUwMy4xNjQgMTkyIDUxMiAxOTJTNTI4IDE4NC44MzYgNTI4IDE3NkM1MjggMTY3LjE2MiA1MjAuODM2IDE2MCA1MTIgMTYwWk01MTIgOTZDNTAzLjE2NCA5NiA0OTYgMTAzLjE2MiA0OTYgMTEyQzQ5NiAxMjAuODM2IDUwMy4xNjQgMTI4IDUxMiAxMjhTNTI4IDEyMC44MzYgNTI4IDExMkM1MjggMTAzLjE2MiA1MjAuODM2IDk2IDUxMiA5NlpNNDIyLjAwMiAxODBIMzc4TDMyOS4yNCA5OS43NEMzMjguMDUzIDk3LjY3NCAzMjUuMTY4IDk2IDMyMi43ODkgOTZIMjkyLjRDMjg3LjQ3MSA5NiAyODMuOTA0IDEwMC43MTkgMjg1LjI2OCAxMDUuNDU5TDMwOC4wMTQgMTgwTDI1Ni45OTQgMTgwLjAwMlYxODBMMjM4LjEwMiAxNTQuODAzQzIzNi43NzUgMTUzLjAzNyAyMzQuNjk1IDE1MiAyMzIuNDk2IDE1MkgyMTQuOTk2QzIxMC40NDMgMTUyIDIwNy4xMDcgMTU2LjI3NyAyMDguMjE1IDE2MC42OTNMMjIxLjk5NCAyMDhMMjA4LjIxMyAyNTUuMzAzQzIwNy4xMDUgMjU5LjcxOSAyMTAuNDQzIDI2NCAyMTQuOTk2IDI2NEgyMzIuNDk2QzIzNC42OTcgMjYzLjk5OCAyMzYuNzc1IDI2Mi45NjEgMjM4LjEwMiAyNjEuMTk1TDI1Ni45OTQgMjM2SDMwOC4wMTZMMjg1LjI2OCAzMTAuNTI5QzI4My45MDQgMzE1LjI3MSAyODcuNDczIDMxOS45OTggMjkyLjQgMzIwSDMyMi43ODlDMzI1LjQ0MyAzMjAgMzI3LjkwNiAzMTguNTcgMzI5LjIyNyAzMTYuMjU4TDM3Ny45OTggMjM2SDQyMkM0MzcuNDYzIDIzNi4wMDIgNDY0IDIyMy40NjMgNDY0IDIwOFM0MzcuNDYzIDE4MCA0MjIuMDAyIDE4MFpNNjQwIDE2OS42MTVWOTZDNjQwIDYwLjY1MiA2MTEuMzQ4IDMyIDU3NiAzMkgxNjBDMTI0LjY1NCAzMiA5NiA2MC42NTIgOTYgOTZWMzIwQzk2IDM1NS4zNDYgMTI0LjY1NCAzODQgMTYwIDM4NEg1NzZDNjExLjM0OCAzODQgNjQwIDM1NS4zNDYgNjQwIDMyMFYyNDYuMzg1QzYyMS44ODEgMjQyLjU3MiA2MDggMjI3LjI1NCA2MDggMjA4UzYyMS44ODEgMTczLjQyOCA2NDAgMTY5LjYxNVpNNTkyIDE0MC42NTRDNTcyLjE2NCAxNTYuNzMgNTYwIDE4MS4wMDIgNTYwIDIwOFM1NzIuMTY0IDI1OS4yNyA1OTIgMjc1LjM0NlYzMjBDNTkyIDMyOC44MjIgNTg0LjgyMiAzMzYgNTc2IDMzNkgxNjBDMTUxLjE3OCAzMzYgMTQ0IDMyOC44MjIgMTQ0IDMyMFY5NkMxNDQgODcuMTc4IDE1MS4xNzggODAgMTYwIDgwSDU3NkM1ODQuODIyIDgwIDU5MiA4Ny4xNzggNTkyIDk2VjE0MC42NTRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TicketsAirline(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M48 400V96C21.5 96 0 117.5 0 144V416C0 451.312 28.641 480 64 480H496C522.5 480 544 458.5 544 432H80C62.344 432 48 417.656 48 400ZM512 224C503.164 224 496 231.162 496 240C496 248.836 503.164 256 512 256S528 248.836 528 240C528 231.162 520.836 224 512 224ZM512 288C503.164 288 496 295.162 496 304C496 312.836 503.164 320 512 320S528 312.836 528 304C528 295.162 520.836 288 512 288ZM512 160C503.164 160 496 167.162 496 176C496 184.836 503.164 192 512 192S528 184.836 528 176C528 167.162 520.836 160 512 160ZM512 96C503.164 96 496 103.162 496 112C496 120.836 503.164 128 512 128S528 120.836 528 112C528 103.162 520.836 96 512 96ZM422.002 180H378L329.24 99.74C328.053 97.674 325.168 96 322.789 96H292.4C287.471 96 283.904 100.719 285.268 105.459L308.014 180L256.994 180.002V180L238.102 154.803C236.775 153.037 234.695 152 232.496 152H214.996C210.443 152 207.107 156.277 208.215 160.693L221.994 208L208.213 255.303C207.105 259.719 210.443 264 214.996 264H232.496C234.697 263.998 236.775 262.961 238.102 261.195L256.994 236H308.016L285.268 310.529C283.904 315.271 287.473 319.998 292.4 320H322.789C325.443 320 327.906 318.57 329.227 316.258L377.998 236H422C437.463 236.002 464 223.463 464 208S437.463 180 422.002 180ZM640 169.615V96C640 60.652 611.348 32 576 32H160C124.654 32 96 60.652 96 96V320C96 355.346 124.654 384 160 384H576C611.348 384 640 355.346 640 320V246.385C621.881 242.572 608 227.254 608 208S621.881 173.428 640 169.615ZM592 140.654C572.164 156.73 560 181.002 560 208S572.164 259.27 592 275.346V320C592 328.822 584.822 336 576 336H160C151.178 336 144 328.822 144 320V96C144 87.178 151.178 80 160 80H576C584.822 80 592 87.178 592 96V140.654Z" />
        </Icon>
    </>
}