
import { Icon } from "../../index";

/**
 * A component that renders the `border-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-right?s=regular border-right}
 * @preview ![border-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzYgMjMySDEyMEMxMTEuMTY0IDIzMiAxMDQgMjM5LjE2MiAxMDQgMjQ4VjI2NEMxMDQgMjcyLjgzNiAxMTEuMTY0IDI4MCAxMjAgMjgwSDEzNkMxNDQuODM2IDI4MCAxNTIgMjcyLjgzNiAxNTIgMjY0VjI0OEMxNTIgMjM5LjE2MiAxNDQuODM2IDIzMiAxMzYgMjMyWk00MCA0MEgyNEMxNS4xNjQgNDAgOCA0Ny4xNjIgOCA1NlY3MkM4IDgwLjgzNiAxNS4xNjQgODggMjQgODhINDBDNDguODM2IDg4IDU2IDgwLjgzNiA1NiA3MlY1NkM1NiA0Ny4xNjIgNDguODM2IDQwIDQwIDQwWk0xMzYgNDI0SDEyMEMxMTEuMTY0IDQyNCAxMDQgNDMxLjE2MiAxMDQgNDQwVjQ1NkMxMDQgNDY0LjgzNiAxMTEuMTY0IDQ3MiAxMjAgNDcySDEzNkMxNDQuODM2IDQ3MiAxNTIgNDY0LjgzNiAxNTIgNDU2VjQ0MEMxNTIgNDMxLjE2MiAxNDQuODM2IDQyNCAxMzYgNDI0Wk0xMzYgNDBIMTIwQzExMS4xNjQgNDAgMTA0IDQ3LjE2MiAxMDQgNTZWNzJDMTA0IDgwLjgzNiAxMTEuMTY0IDg4IDEyMCA4OEgxMzZDMTQ0LjgzNiA4OCAxNTIgODAuODM2IDE1MiA3MlY1NkMxNTIgNDcuMTYyIDE0NC44MzYgNDAgMTM2IDQwWk00MCA0MjRIMjRDMTUuMTY0IDQyNCA4IDQzMS4xNjIgOCA0NDBWNDU2QzggNDY0LjgzNiAxNS4xNjQgNDcyIDI0IDQ3Mkg0MEM0OC44MzYgNDcyIDU2IDQ2NC44MzYgNTYgNDU2VjQ0MEM1NiA0MzEuMTYyIDQ4LjgzNiA0MjQgNDAgNDI0Wk00MCAzMjhIMjRDMTUuMTY0IDMyOCA4IDMzNS4xNjIgOCAzNDRWMzYwQzggMzY4LjgzNiAxNS4xNjQgMzc2IDI0IDM3Nkg0MEM0OC44MzYgMzc2IDU2IDM2OC44MzYgNTYgMzYwVjM0NEM1NiAzMzUuMTYyIDQ4LjgzNiAzMjggNDAgMzI4Wk00MCAxMzZIMjRDMTUuMTY0IDEzNiA4IDE0My4xNjIgOCAxNTJWMTY4QzggMTc2LjgzNiAxNS4xNjQgMTg0IDI0IDE4NEg0MEM0OC44MzYgMTg0IDU2IDE3Ni44MzYgNTYgMTY4VjE1MkM1NiAxNDMuMTYyIDQ4LjgzNiAxMzYgNDAgMTM2Wk00MCAyMzJIMjRDMTUuMTY0IDIzMiA4IDIzOS4xNjIgOCAyNDhWMjY0QzggMjcyLjgzNiAxNS4xNjQgMjgwIDI0IDI4MEg0MEM0OC44MzYgMjgwIDU2IDI3Mi44MzYgNTYgMjY0VjI0OEM1NiAyMzkuMTYyIDQ4LjgzNiAyMzIgNDAgMjMyWk0yMzIgNDI0SDIxNkMyMDcuMTY0IDQyNCAyMDAgNDMxLjE2MiAyMDAgNDQwVjQ1NkMyMDAgNDY0LjgzNiAyMDcuMTY0IDQ3MiAyMTYgNDcySDIzMkMyNDAuODM2IDQ3MiAyNDggNDY0LjgzNiAyNDggNDU2VjQ0MEMyNDggNDMxLjE2MiAyNDAuODM2IDQyNCAyMzIgNDI0Wk0zMjggMjMySDMxMkMzMDMuMTY0IDIzMiAyOTYgMjM5LjE2MiAyOTYgMjQ4VjI2NEMyOTYgMjcyLjgzNiAzMDMuMTY0IDI4MCAzMTIgMjgwSDMyOEMzMzYuODM2IDI4MCAzNDQgMjcyLjgzNiAzNDQgMjY0VjI0OEMzNDQgMjM5LjE2MiAzMzYuODM2IDIzMiAzMjggMjMyWk0zMjggNDI0SDMxMkMzMDMuMTY0IDQyNCAyOTYgNDMxLjE2MiAyOTYgNDQwVjQ1NkMyOTYgNDY0LjgzNiAzMDMuMTY0IDQ3MiAzMTIgNDcySDMyOEMzMzYuODM2IDQ3MiAzNDQgNDY0LjgzNiAzNDQgNDU2VjQ0MEMzNDQgNDMxLjE2MiAzMzYuODM2IDQyNCAzMjggNDI0Wk0zMjggNDBIMzEyQzMwMy4xNjQgNDAgMjk2IDQ3LjE2MiAyOTYgNTZWNzJDMjk2IDgwLjgzNiAzMDMuMTY0IDg4IDMxMiA4OEgzMjhDMzM2LjgzNiA4OCAzNDQgODAuODM2IDM0NCA3MlY1NkMzNDQgNDcuMTYyIDMzNi44MzYgNDAgMzI4IDQwWk0yMzIgMzI4SDIxNkMyMDcuMTY0IDMyOCAyMDAgMzM1LjE2MiAyMDAgMzQ0VjM2MEMyMDAgMzY4LjgzNiAyMDcuMTY0IDM3NiAyMTYgMzc2SDIzMkMyNDAuODM2IDM3NiAyNDggMzY4LjgzNiAyNDggMzYwVjM0NEMyNDggMzM1LjE2MiAyNDAuODM2IDMyOCAyMzIgMzI4Wk0yMzIgNDBIMjE2QzIwNy4xNjQgNDAgMjAwIDQ3LjE2MiAyMDAgNTZWNzJDMjAwIDgwLjgzNiAyMDcuMTY0IDg4IDIxNiA4OEgyMzJDMjQwLjgzNiA4OCAyNDggODAuODM2IDI0OCA3MlY1NkMyNDggNDcuMTYyIDI0MC44MzYgNDAgMjMyIDQwWk0yMzIgMjMySDIxNkMyMDcuMTY0IDIzMiAyMDAgMjM5LjE2MiAyMDAgMjQ4VjI2NEMyMDAgMjcyLjgzNiAyMDcuMTY0IDI4MCAyMTYgMjgwSDIzMkMyNDAuODM2IDI4MCAyNDggMjcyLjgzNiAyNDggMjY0VjI0OEMyNDggMjM5LjE2MiAyNDAuODM2IDIzMiAyMzIgMjMyWk0yMzIgMTM2SDIxNkMyMDcuMTY0IDEzNiAyMDAgMTQzLjE2MiAyMDAgMTUyVjE2OEMyMDAgMTc2LjgzNiAyMDcuMTY0IDE4NCAyMTYgMTg0SDIzMkMyNDAuODM2IDE4NCAyNDggMTc2LjgzNiAyNDggMTY4VjE1MkMyNDggMTQzLjE2MiAyNDAuODM2IDEzNiAyMzIgMTM2Wk00MzIgMzJINDE2QzQwNy4xMjUgMzIgNDAwIDM5LjEyNSA0MDAgNDhWNDY0QzQwMCA0NzIuODc1IDQwNy4xMjUgNDgwIDQxNiA0ODBINDMyQzQ0MC44NzUgNDgwIDQ0OCA0NzIuODc1IDQ0OCA0NjRWNDhDNDQ4IDM5LjEyNSA0NDAuODc1IDMyIDQzMiAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
const BorderRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M136 232H120C111.164 232 104 239.162 104 248V264C104 272.836 111.164 280 120 280H136C144.836 280 152 272.836 152 264V248C152 239.162 144.836 232 136 232ZM40 40H24C15.164 40 8 47.162 8 56V72C8 80.836 15.164 88 24 88H40C48.836 88 56 80.836 56 72V56C56 47.162 48.836 40 40 40ZM136 424H120C111.164 424 104 431.162 104 440V456C104 464.836 111.164 472 120 472H136C144.836 472 152 464.836 152 456V440C152 431.162 144.836 424 136 424ZM136 40H120C111.164 40 104 47.162 104 56V72C104 80.836 111.164 88 120 88H136C144.836 88 152 80.836 152 72V56C152 47.162 144.836 40 136 40ZM40 424H24C15.164 424 8 431.162 8 440V456C8 464.836 15.164 472 24 472H40C48.836 472 56 464.836 56 456V440C56 431.162 48.836 424 40 424ZM40 328H24C15.164 328 8 335.162 8 344V360C8 368.836 15.164 376 24 376H40C48.836 376 56 368.836 56 360V344C56 335.162 48.836 328 40 328ZM40 136H24C15.164 136 8 143.162 8 152V168C8 176.836 15.164 184 24 184H40C48.836 184 56 176.836 56 168V152C56 143.162 48.836 136 40 136ZM40 232H24C15.164 232 8 239.162 8 248V264C8 272.836 15.164 280 24 280H40C48.836 280 56 272.836 56 264V248C56 239.162 48.836 232 40 232ZM232 424H216C207.164 424 200 431.162 200 440V456C200 464.836 207.164 472 216 472H232C240.836 472 248 464.836 248 456V440C248 431.162 240.836 424 232 424ZM328 232H312C303.164 232 296 239.162 296 248V264C296 272.836 303.164 280 312 280H328C336.836 280 344 272.836 344 264V248C344 239.162 336.836 232 328 232ZM328 424H312C303.164 424 296 431.162 296 440V456C296 464.836 303.164 472 312 472H328C336.836 472 344 464.836 344 456V440C344 431.162 336.836 424 328 424ZM328 40H312C303.164 40 296 47.162 296 56V72C296 80.836 303.164 88 312 88H328C336.836 88 344 80.836 344 72V56C344 47.162 336.836 40 328 40ZM232 328H216C207.164 328 200 335.162 200 344V360C200 368.836 207.164 376 216 376H232C240.836 376 248 368.836 248 360V344C248 335.162 240.836 328 232 328ZM232 40H216C207.164 40 200 47.162 200 56V72C200 80.836 207.164 88 216 88H232C240.836 88 248 80.836 248 72V56C248 47.162 240.836 40 232 40ZM232 232H216C207.164 232 200 239.162 200 248V264C200 272.836 207.164 280 216 280H232C240.836 280 248 272.836 248 264V248C248 239.162 240.836 232 232 232ZM232 136H216C207.164 136 200 143.162 200 152V168C200 176.836 207.164 184 216 184H232C240.836 184 248 176.836 248 168V152C248 143.162 240.836 136 232 136ZM432 32H416C407.125 32 400 39.125 400 48V464C400 472.875 407.125 480 416 480H432C440.875 480 448 472.875 448 464V48C448 39.125 440.875 32 432 32Z" />
    </Icon>
);

export default BorderRight;