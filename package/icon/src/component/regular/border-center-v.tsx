
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `border-center-v` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-center-v?s=regular border-center-v}
 * @preview ![border-center-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzYgNDI0SDEyMEMxMTEuMTY0IDQyNCAxMDQgNDMxLjE2MiAxMDQgNDQwVjQ1NkMxMDQgNDY0LjgzNiAxMTEuMTY0IDQ3MiAxMjAgNDcySDEzNkMxNDQuODM2IDQ3MiAxNTIgNDY0LjgzNiAxNTIgNDU2VjQ0MEMxNTIgNDMxLjE2MiAxNDQuODM2IDQyNCAxMzYgNDI0Wk0xMzYgMjMySDEyMEMxMTEuMTY0IDIzMiAxMDQgMjM5LjE2MiAxMDQgMjQ4VjI2NEMxMDQgMjcyLjgzNiAxMTEuMTY0IDI4MCAxMjAgMjgwSDEzNkMxNDQuODM2IDI4MCAxNTIgMjcyLjgzNiAxNTIgMjY0VjI0OEMxNTIgMjM5LjE2MiAxNDQuODM2IDIzMiAxMzYgMjMyWk00MCA0MEgyNEMxNS4xNjQgNDAgOCA0Ny4xNjIgOCA1NlY3MkM4IDgwLjgzNiAxNS4xNjQgODggMjQgODhINDBDNDguODM2IDg4IDU2IDgwLjgzNiA1NiA3MlY1NkM1NiA0Ny4xNjIgNDguODM2IDQwIDQwIDQwWk0xMzYgNDBIMTIwQzExMS4xNjQgNDAgMTA0IDQ3LjE2MiAxMDQgNTZWNzJDMTA0IDgwLjgzNiAxMTEuMTY0IDg4IDEyMCA4OEgxMzZDMTQ0LjgzNiA4OCAxNTIgODAuODM2IDE1MiA3MlY1NkMxNTIgNDcuMTYyIDE0NC44MzYgNDAgMTM2IDQwWk00MCAzMjhIMjRDMTUuMTY0IDMyOCA4IDMzNS4xNjIgOCAzNDRWMzYwQzggMzY4LjgzNiAxNS4xNjQgMzc2IDI0IDM3Nkg0MEM0OC44MzYgMzc2IDU2IDM2OC44MzYgNTYgMzYwVjM0NEM1NiAzMzUuMTYyIDQ4LjgzNiAzMjggNDAgMzI4Wk00MCAxMzZIMjRDMTUuMTY0IDEzNiA4IDE0My4xNjIgOCAxNTJWMTY4QzggMTc2LjgzNiAxNS4xNjQgMTg0IDI0IDE4NEg0MEM0OC44MzYgMTg0IDU2IDE3Ni44MzYgNTYgMTY4VjE1MkM1NiAxNDMuMTYyIDQ4LjgzNiAxMzYgNDAgMTM2Wk00MCAyMzJIMjRDMTUuMTY0IDIzMiA4IDIzOS4xNjIgOCAyNDhWMjY0QzggMjcyLjgzNiAxNS4xNjQgMjgwIDI0IDI4MEg0MEM0OC44MzYgMjgwIDU2IDI3Mi44MzYgNTYgMjY0VjI0OEM1NiAyMzkuMTYyIDQ4LjgzNiAyMzIgNDAgMjMyWk00MCA0MjRIMjRDMTUuMTY0IDQyNCA4IDQzMS4xNjIgOCA0NDBWNDU2QzggNDY0LjgzNiAxNS4xNjQgNDcyIDI0IDQ3Mkg0MEM0OC44MzYgNDcyIDU2IDQ2NC44MzYgNTYgNDU2VjQ0MEM1NiA0MzEuMTYyIDQ4LjgzNiA0MjQgNDAgNDI0Wk00MjQgNDI0SDQwOEMzOTkuMTY0IDQyNCAzOTIgNDMxLjE2MiAzOTIgNDQwVjQ1NkMzOTIgNDY0LjgzNiAzOTkuMTY0IDQ3MiA0MDggNDcySDQyNEM0MzIuODM2IDQ3MiA0NDAgNDY0LjgzNiA0NDAgNDU2VjQ0MEM0NDAgNDMxLjE2MiA0MzIuODM2IDQyNCA0MjQgNDI0Wk00MjQgMzI4SDQwOEMzOTkuMTY0IDMyOCAzOTIgMzM1LjE2MiAzOTIgMzQ0VjM2MEMzOTIgMzY4LjgzNiAzOTkuMTY0IDM3NiA0MDggMzc2SDQyNEM0MzIuODM2IDM3NiA0NDAgMzY4LjgzNiA0NDAgMzYwVjM0NEM0NDAgMzM1LjE2MiA0MzIuODM2IDMyOCA0MjQgMzI4Wk00MjQgMjMySDQwOEMzOTkuMTY0IDIzMiAzOTIgMjM5LjE2MiAzOTIgMjQ4VjI2NEMzOTIgMjcyLjgzNiAzOTkuMTY0IDI4MCA0MDggMjgwSDQyNEM0MzIuODM2IDI4MCA0NDAgMjcyLjgzNiA0NDAgMjY0VjI0OEM0NDAgMjM5LjE2MiA0MzIuODM2IDIzMiA0MjQgMjMyWk00MjQgMTM2SDQwOEMzOTkuMTY0IDEzNiAzOTIgMTQzLjE2MiAzOTIgMTUyVjE2OEMzOTIgMTc2LjgzNiAzOTkuMTY0IDE4NCA0MDggMTg0SDQyNEM0MzIuODM2IDE4NCA0NDAgMTc2LjgzNiA0NDAgMTY4VjE1MkM0NDAgMTQzLjE2MiA0MzIuODM2IDEzNiA0MjQgMTM2Wk00MjQgNDBINDA4QzM5OS4xNjQgNDAgMzkyIDQ3LjE2MiAzOTIgNTZWNzJDMzkyIDgwLjgzNiAzOTkuMTY0IDg4IDQwOCA4OEg0MjRDNDMyLjgzNiA4OCA0NDAgODAuODM2IDQ0MCA3MlY1NkM0NDAgNDcuMTYyIDQzMi44MzYgNDAgNDI0IDQwWk0zMjggNDBIMzEyQzMwMy4xNjQgNDAgMjk2IDQ3LjE2MiAyOTYgNTZWNzJDMjk2IDgwLjgzNiAzMDMuMTY0IDg4IDMxMiA4OEgzMjhDMzM2LjgzNiA4OCAzNDQgODAuODM2IDM0NCA3MlY1NkMzNDQgNDcuMTYyIDMzNi44MzYgNDAgMzI4IDQwWk0zMjggNDI0SDMxMkMzMDMuMTY0IDQyNCAyOTYgNDMxLjE2MiAyOTYgNDQwVjQ1NkMyOTYgNDY0LjgzNiAzMDMuMTY0IDQ3MiAzMTIgNDcySDMyOEMzMzYuODM2IDQ3MiAzNDQgNDY0LjgzNiAzNDQgNDU2VjQ0MEMzNDQgNDMxLjE2MiAzMzYuODM2IDQyNCAzMjggNDI0Wk0zMjggMjMySDMxMkMzMDMuMTY0IDIzMiAyOTYgMjM5LjE2MiAyOTYgMjQ4VjI2NEMyOTYgMjcyLjgzNiAzMDMuMTY0IDI4MCAzMTIgMjgwSDMyOEMzMzYuODM2IDI4MCAzNDQgMjcyLjgzNiAzNDQgMjY0VjI0OEMzNDQgMjM5LjE2MiAzMzYuODM2IDIzMiAzMjggMjMyWk0yMzIgMzJIMjE2QzIwNy4xMjUgMzIgMjAwIDM5LjEyNSAyMDAgNDhWNDY0QzIwMCA0NzIuODc1IDIwNy4xMjUgNDgwIDIxNiA0ODBIMjMyQzI0MC44NzUgNDgwIDI0OCA0NzIuODc1IDI0OCA0NjRWNDhDMjQ4IDM5LjEyNSAyNDAuODc1IDMyIDIzMiAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BorderCenterV(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M136 424H120C111.164 424 104 431.162 104 440V456C104 464.836 111.164 472 120 472H136C144.836 472 152 464.836 152 456V440C152 431.162 144.836 424 136 424ZM136 232H120C111.164 232 104 239.162 104 248V264C104 272.836 111.164 280 120 280H136C144.836 280 152 272.836 152 264V248C152 239.162 144.836 232 136 232ZM40 40H24C15.164 40 8 47.162 8 56V72C8 80.836 15.164 88 24 88H40C48.836 88 56 80.836 56 72V56C56 47.162 48.836 40 40 40ZM136 40H120C111.164 40 104 47.162 104 56V72C104 80.836 111.164 88 120 88H136C144.836 88 152 80.836 152 72V56C152 47.162 144.836 40 136 40ZM40 328H24C15.164 328 8 335.162 8 344V360C8 368.836 15.164 376 24 376H40C48.836 376 56 368.836 56 360V344C56 335.162 48.836 328 40 328ZM40 136H24C15.164 136 8 143.162 8 152V168C8 176.836 15.164 184 24 184H40C48.836 184 56 176.836 56 168V152C56 143.162 48.836 136 40 136ZM40 232H24C15.164 232 8 239.162 8 248V264C8 272.836 15.164 280 24 280H40C48.836 280 56 272.836 56 264V248C56 239.162 48.836 232 40 232ZM40 424H24C15.164 424 8 431.162 8 440V456C8 464.836 15.164 472 24 472H40C48.836 472 56 464.836 56 456V440C56 431.162 48.836 424 40 424ZM424 424H408C399.164 424 392 431.162 392 440V456C392 464.836 399.164 472 408 472H424C432.836 472 440 464.836 440 456V440C440 431.162 432.836 424 424 424ZM424 328H408C399.164 328 392 335.162 392 344V360C392 368.836 399.164 376 408 376H424C432.836 376 440 368.836 440 360V344C440 335.162 432.836 328 424 328ZM424 232H408C399.164 232 392 239.162 392 248V264C392 272.836 399.164 280 408 280H424C432.836 280 440 272.836 440 264V248C440 239.162 432.836 232 424 232ZM424 136H408C399.164 136 392 143.162 392 152V168C392 176.836 399.164 184 408 184H424C432.836 184 440 176.836 440 168V152C440 143.162 432.836 136 424 136ZM424 40H408C399.164 40 392 47.162 392 56V72C392 80.836 399.164 88 408 88H424C432.836 88 440 80.836 440 72V56C440 47.162 432.836 40 424 40ZM328 40H312C303.164 40 296 47.162 296 56V72C296 80.836 303.164 88 312 88H328C336.836 88 344 80.836 344 72V56C344 47.162 336.836 40 328 40ZM328 424H312C303.164 424 296 431.162 296 440V456C296 464.836 303.164 472 312 472H328C336.836 472 344 464.836 344 456V440C344 431.162 336.836 424 328 424ZM328 232H312C303.164 232 296 239.162 296 248V264C296 272.836 303.164 280 312 280H328C336.836 280 344 272.836 344 264V248C344 239.162 336.836 232 328 232ZM232 32H216C207.125 32 200 39.125 200 48V464C200 472.875 207.125 480 216 480H232C240.875 480 248 472.875 248 464V48C248 39.125 240.875 32 232 32Z" />
        </Icon>
    </>
}