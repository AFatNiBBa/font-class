
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `airplay` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=thin airplay}
 * @preview ![airplay](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgMzJINzJDMzIuMzEyIDMyIDAgNjQuMzEyIDAgMTA0VjM0NEMwIDM4My42ODggMzIuMzEyIDQxNiA3MiA0MTZIOTZDMTAwLjQwNiA0MTYgMTA0IDQxMi40MDYgMTA0IDQwOFMxMDAuNDA2IDQwMCA5NiA0MDBINzJDNDEuMTI1IDQwMCAxNiAzNzQuODc1IDE2IDM0NFYxMDRDMTYgNzMuMTI1IDQxLjEyNSA0OCA3MiA0OEg1MDRDNTM0Ljg3NSA0OCA1NjAgNzMuMTI1IDU2MCAxMDRWMzQ0QzU2MCAzNzQuODc1IDUzNC44NzUgNDAwIDUwNCA0MDBINDgwQzQ3NS41OTQgNDAwIDQ3MiA0MDMuNTk0IDQ3MiA0MDhTNDc1LjU5NCA0MTYgNDgwIDQxNkg1MDRDNTQzLjY4OCA0MTYgNTc2IDM4My42ODggNTc2IDM0NFYxMDRDNTc2IDY0LjMxMiA1NDMuNjg4IDMyIDUwNCAzMlpNMzA3LjU1MyAyOTYuMTA5QzMwMi4xNDYgMjkwLjcwMyAyOTUuMDggMjg4IDI4OC4wMjcgMjg4QzI4MC45NzMgMjg4IDI3My45MzQgMjkwLjcwMyAyNjguNTgyIDI5Ni4xMDlMMTM2LjExOSA0MzIuODc1QzExOC43NzEgNDUwLjIyNyAxMzEuMDU1IDQ4MCAxNTUuNjU4IDQ4MEg0MjAuMzQyQzQ0NC45NDUgNDgwIDQ1Ny4yMjkgNDUwLjIyNyA0MzkuODgxIDQzMi44NzVMMzA3LjU1MyAyOTYuMTA5Wk00MzEuMDU3IDQ1Ni44MjhDNDMwLjE2NCA0NTguOTg0IDQyNy4zMzIgNDY0IDQyMC4zNDIgNDY0SDE1NS42NThDMTQ4LjY2OCA0NjQgMTQ1LjgzNiA0NTguOTg0IDE0NC45NDMgNDU2LjgyOEMxNDQuMDQ5IDQ1NC42NzIgMTQyLjUwMiA0NDkuMTIxIDE0Ny42MTEgNDQ0LjAwOEwyNzkuOTUzIDMwNy4zNjNDMjgyLjEgMzA1LjE5NSAyODQuOTY5IDMwNCAyODguMDI3IDMwNEMyOTEuMTE3IDMwNCAyOTQuMDMzIDMwNS4yMTUgMjk2LjA1NSAzMDcuMjM0TDQyOC41NjYgNDQ0LjE4OEM0MzMuNDk4IDQ0OS4xMjEgNDMxLjk1MSA0NTQuNjcyIDQzMS4wNTcgNDU2LjgyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Airplay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M504 32H72C32.312 32 0 64.312 0 104V344C0 383.688 32.312 416 72 416H96C100.406 416 104 412.406 104 408S100.406 400 96 400H72C41.125 400 16 374.875 16 344V104C16 73.125 41.125 48 72 48H504C534.875 48 560 73.125 560 104V344C560 374.875 534.875 400 504 400H480C475.594 400 472 403.594 472 408S475.594 416 480 416H504C543.688 416 576 383.688 576 344V104C576 64.312 543.688 32 504 32ZM307.553 296.109C302.146 290.703 295.08 288 288.027 288C280.973 288 273.934 290.703 268.582 296.109L136.119 432.875C118.771 450.227 131.055 480 155.658 480H420.342C444.945 480 457.229 450.227 439.881 432.875L307.553 296.109ZM431.057 456.828C430.164 458.984 427.332 464 420.342 464H155.658C148.668 464 145.836 458.984 144.943 456.828C144.049 454.672 142.502 449.121 147.611 444.008L279.953 307.363C282.1 305.195 284.969 304 288.027 304C291.117 304 294.033 305.215 296.055 307.234L428.566 444.188C433.498 449.121 431.951 454.672 431.057 456.828Z" />
        </Icon>
    </>
}