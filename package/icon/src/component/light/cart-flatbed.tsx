
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=light cart-flatbed}
 * @preview ![cart-flatbed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMzg0SDExMlY0OEMxMTIgMjEuNTMxIDkwLjQ2OSAwIDY0IDBIMTZDNy4xNTYgMCAwIDcuMTU2IDAgMTZTNy4xNTYgMzIgMTYgMzJINjRDNzIuODEyIDMyIDgwIDM5LjE3MiA4MCA0OFY0MDBDODAgNDA4Ljg0NCA4Ny4xNTYgNDE2IDk2IDQxNkgxNjguODc3QzE2My4zNzkgNDI1LjQ0NyAxNjAgNDM2LjI4MyAxNjAgNDQ4QzE2MCA0ODMuMzQ2IDE4OC42NTQgNTEyIDIyNCA1MTJDMjU5LjM0OCA1MTIgMjg4IDQ4My4zNDYgMjg4IDQ0OEMyODggNDM2LjI4MyAyODQuNjIxIDQyNS40NDcgMjc5LjEyMyA0MTZINDU2Ljg3N0M0NTEuMzc5IDQyNS40NDcgNDQ4IDQzNi4yODMgNDQ4IDQ0OEM0NDggNDgzLjM0NiA0NzYuNjU0IDUxMiA1MTIgNTEyQzU0Ny4zNDggNTEyIDU3NiA0ODMuMzQ2IDU3NiA0NDhDNTc2IDQzNi4yODMgNTcyLjYyMSA0MjUuNDQ3IDU2Ny4xMjMgNDE2SDY0MEM2NDguODQ0IDQxNiA2NTYgNDA4Ljg0NCA2NTYgNDAwUzY0OC44NDQgMzg0IDY0MCAzODRaTTIyNCA0ODBDMjA2LjM1NSA0ODAgMTkyIDQ2NS42NDUgMTkyIDQ0OFMyMDYuMzU1IDQxNiAyMjQgNDE2UzI1NiA0MzAuMzU1IDI1NiA0NDhTMjQxLjY0NSA0ODAgMjI0IDQ4MFpNNTEyIDQ4MEM0OTQuMzU1IDQ4MCA0ODAgNDY1LjY0NSA0ODAgNDQ4UzQ5NC4zNTUgNDE2IDUxMiA0MTZTNTQ0IDQzMC4zNTUgNTQ0IDQ0OFM1MjkuNjQ1IDQ4MCA1MTIgNDgwWk0yNDAgMzIwSDUyOEM1NjMuMzQ4IDMyMCA1OTIgMjkxLjM0NiA1OTIgMjU2Vjk2QzU5MiA2MC42NTIgNTYzLjM0OCAzMiA1MjggMzJIMjQwQzIwNC42NTQgMzIgMTc2IDYwLjY1MiAxNzYgOTZWMjU2QzE3NiAyOTEuMzQ2IDIwNC42NTQgMzIwIDI0MCAzMjBaTTM1MiA2NEg0MTZWMTQ2LjEwOUwzOTIuODc1IDEzMC42ODhDMzg3LjUgMTI3LjA5NCAzODAuNSAxMjcuMDk0IDM3NS4xMjUgMTMwLjY4OEwzNTIgMTQ2LjEwOVY2NFpNMjA4IDk2QzIwOCA3OC4zNTUgMjIyLjM1NSA2NCAyNDAgNjRIMzIwVjE3NkMzMjAgMTgxLjkwNiAzMjMuMjUgMTg3LjMyOCAzMjguNDUzIDE5MC4xMDlDMzMzLjY0MSAxOTIuODkxIDMzOS45NjkgMTkyLjU3OCAzNDQuODc1IDE4OS4zMTNMMzg0IDE2My4yMzRMNDIzLjEyNSAxODkuMzEyQzQyNS43OTcgMTkxLjA5NCA0MjguODkxIDE5MiA0MzIgMTkyQzQzNC41OTQgMTkyIDQzNy4xODggMTkxLjM3NSA0MzkuNTQ3IDE5MC4xMDlDNDQ0Ljc1IDE4Ny4zMjggNDQ4IDE4MS45MDYgNDQ4IDE3NlY2NEg1MjhDNTQ1LjY0NSA2NCA1NjAgNzguMzU1IDU2MCA5NlYyNTZDNTYwIDI3My42NDUgNTQ1LjY0NSAyODggNTI4IDI4OEgyNDBDMjIyLjM1NSAyODggMjA4IDI3My42NDUgMjA4IDI1NlY5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CartFlatbed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 384H112V48C112 21.531 90.469 0 64 0H16C7.156 0 0 7.156 0 16S7.156 32 16 32H64C72.812 32 80 39.172 80 48V400C80 408.844 87.156 416 96 416H168.877C163.379 425.447 160 436.283 160 448C160 483.346 188.654 512 224 512C259.348 512 288 483.346 288 448C288 436.283 284.621 425.447 279.123 416H456.877C451.379 425.447 448 436.283 448 448C448 483.346 476.654 512 512 512C547.348 512 576 483.346 576 448C576 436.283 572.621 425.447 567.123 416H640C648.844 416 656 408.844 656 400S648.844 384 640 384ZM224 480C206.355 480 192 465.645 192 448S206.355 416 224 416S256 430.355 256 448S241.645 480 224 480ZM512 480C494.355 480 480 465.645 480 448S494.355 416 512 416S544 430.355 544 448S529.645 480 512 480ZM240 320H528C563.348 320 592 291.346 592 256V96C592 60.652 563.348 32 528 32H240C204.654 32 176 60.652 176 96V256C176 291.346 204.654 320 240 320ZM352 64H416V146.109L392.875 130.688C387.5 127.094 380.5 127.094 375.125 130.688L352 146.109V64ZM208 96C208 78.355 222.355 64 240 64H320V176C320 181.906 323.25 187.328 328.453 190.109C333.641 192.891 339.969 192.578 344.875 189.313L384 163.234L423.125 189.312C425.797 191.094 428.891 192 432 192C434.594 192 437.188 191.375 439.547 190.109C444.75 187.328 448 181.906 448 176V64H528C545.645 64 560 78.355 560 96V256C560 273.645 545.645 288 528 288H240C222.355 288 208 273.645 208 256V96Z" />
        </Icon>
    </>
}