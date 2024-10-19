
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-bottom-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=regular border-bottom-right}
 * @preview ![border-bottom-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTYgMTg0SDIzMkMyNDAuODM2IDE4NCAyNDggMTc2LjgzNiAyNDggMTY4VjE1MkMyNDggMTQzLjE2MiAyNDAuODM2IDEzNiAyMzIgMTM2SDIxNkMyMDcuMTY0IDEzNiAyMDAgMTQzLjE2MiAyMDAgMTUyVjE2OEMyMDAgMTc2LjgzNiAyMDcuMTY0IDE4NCAyMTYgMTg0Wk0yMTYgMjgwSDIzMkMyNDAuODM2IDI4MCAyNDggMjcyLjgzNiAyNDggMjY0VjI0OEMyNDggMjM5LjE2MiAyNDAuODM2IDIzMiAyMzIgMjMySDIxNkMyMDcuMTY0IDIzMiAyMDAgMjM5LjE2MiAyMDAgMjQ4VjI2NEMyMDAgMjcyLjgzNiAyMDcuMTY0IDI4MCAyMTYgMjgwWk0yMTYgMzc2SDIzMkMyNDAuODM2IDM3NiAyNDggMzY4LjgzNiAyNDggMzYwVjM0NEMyNDggMzM1LjE2MiAyNDAuODM2IDMyOCAyMzIgMzI4SDIxNkMyMDcuMTY0IDMyOCAyMDAgMzM1LjE2MiAyMDAgMzQ0VjM2MEMyMDAgMzY4LjgzNiAyMDcuMTY0IDM3NiAyMTYgMzc2Wk0zMTIgODhIMzI4QzMzNi44MzYgODggMzQ0IDgwLjgzNiAzNDQgNzJWNTZDMzQ0IDQ3LjE2MiAzMzYuODM2IDQwIDMyOCA0MEgzMTJDMzAzLjE2NCA0MCAyOTYgNDcuMTYyIDI5NiA1NlY3MkMyOTYgODAuODM2IDMwMy4xNjQgODggMzEyIDg4Wk0yMTYgODhIMjMyQzI0MC44MzYgODggMjQ4IDgwLjgzNiAyNDggNzJWNTZDMjQ4IDQ3LjE2MiAyNDAuODM2IDQwIDIzMiA0MEgyMTZDMjA3LjE2NCA0MCAyMDAgNDcuMTYyIDIwMCA1NlY3MkMyMDAgODAuODM2IDIwNy4xNjQgODggMjE2IDg4Wk0zMTIgMjgwSDMyOEMzMzYuODM2IDI4MCAzNDQgMjcyLjgzNiAzNDQgMjY0VjI0OEMzNDQgMjM5LjE2MiAzMzYuODM2IDIzMiAzMjggMjMySDMxMkMzMDMuMTY0IDIzMiAyOTYgMjM5LjE2MiAyOTYgMjQ4VjI2NEMyOTYgMjcyLjgzNiAzMDMuMTY0IDI4MCAzMTIgMjgwWk0yNCAxODRINDBDNDguODM2IDE4NCA1NiAxNzYuODM2IDU2IDE2OFYxNTJDNTYgMTQzLjE2MiA0OC44MzYgMTM2IDQwIDEzNkgyNEMxNS4xNjQgMTM2IDggMTQzLjE2MiA4IDE1MlYxNjhDOCAxNzYuODM2IDE1LjE2NCAxODQgMjQgMTg0Wk0yNCAyODBINDBDNDguODM2IDI4MCA1NiAyNzIuODM2IDU2IDI2NFYyNDhDNTYgMjM5LjE2MiA0OC44MzYgMjMyIDQwIDIzMkgyNEMxNS4xNjQgMjMyIDggMjM5LjE2MiA4IDI0OFYyNjRDOCAyNzIuODM2IDE1LjE2NCAyODAgMjQgMjgwWk0xMjAgODhIMTM2QzE0NC44MzYgODggMTUyIDgwLjgzNiAxNTIgNzJWNTZDMTUyIDQ3LjE2MiAxNDQuODM2IDQwIDEzNiA0MEgxMjBDMTExLjE2NCA0MCAxMDQgNDcuMTYyIDEwNCA1NlY3MkMxMDQgODAuODM2IDExMS4xNjQgODggMTIwIDg4Wk0yNCAzNzZINDBDNDguODM2IDM3NiA1NiAzNjguODM2IDU2IDM2MFYzNDRDNTYgMzM1LjE2MiA0OC44MzYgMzI4IDQwIDMyOEgyNEMxNS4xNjQgMzI4IDggMzM1LjE2MiA4IDM0NFYzNjBDOCAzNjguODM2IDE1LjE2NCAzNzYgMjQgMzc2Wk0yNCA4OEg0MEM0OC44MzYgODggNTYgODAuODM2IDU2IDcyVjU2QzU2IDQ3LjE2MiA0OC44MzYgNDAgNDAgNDBIMjRDMTUuMTY0IDQwIDggNDcuMTYyIDggNTZWNzJDOCA4MC44MzYgMTUuMTY0IDg4IDI0IDg4Wk0xMjAgMjgwSDEzNkMxNDQuODM2IDI4MCAxNTIgMjcyLjgzNiAxNTIgMjY0VjI0OEMxNTIgMjM5LjE2MiAxNDQuODM2IDIzMiAxMzYgMjMySDEyMEMxMTEuMTY0IDIzMiAxMDQgMjM5LjE2MiAxMDQgMjQ4VjI2NEMxMDQgMjcyLjgzNiAxMTEuMTY0IDI4MCAxMjAgMjgwWk00MzIgMzJINDE2QzQwNy4xMjUgMzIgNDAwIDM5LjEyNSA0MDAgNDhWNDE2QzQwMCA0MjQuODM2IDM5Mi44MzYgNDMyIDM4NCA0MzJIMTZDNy4xMjUgNDMyIDAgNDM5LjEyNSAwIDQ0OFY0NjRDMCA0NzIuODc1IDcuMTI1IDQ4MCAxNiA0ODBIMzg0QzQxOS4zNDYgNDgwIDQ0OCA0NTEuMzQ2IDQ0OCA0MTZWNDhDNDQ4IDM5LjEyNSA0NDAuODc1IDMyIDQzMiAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BorderBottomRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M216 184H232C240.836 184 248 176.836 248 168V152C248 143.162 240.836 136 232 136H216C207.164 136 200 143.162 200 152V168C200 176.836 207.164 184 216 184ZM216 280H232C240.836 280 248 272.836 248 264V248C248 239.162 240.836 232 232 232H216C207.164 232 200 239.162 200 248V264C200 272.836 207.164 280 216 280ZM216 376H232C240.836 376 248 368.836 248 360V344C248 335.162 240.836 328 232 328H216C207.164 328 200 335.162 200 344V360C200 368.836 207.164 376 216 376ZM312 88H328C336.836 88 344 80.836 344 72V56C344 47.162 336.836 40 328 40H312C303.164 40 296 47.162 296 56V72C296 80.836 303.164 88 312 88ZM216 88H232C240.836 88 248 80.836 248 72V56C248 47.162 240.836 40 232 40H216C207.164 40 200 47.162 200 56V72C200 80.836 207.164 88 216 88ZM312 280H328C336.836 280 344 272.836 344 264V248C344 239.162 336.836 232 328 232H312C303.164 232 296 239.162 296 248V264C296 272.836 303.164 280 312 280ZM24 184H40C48.836 184 56 176.836 56 168V152C56 143.162 48.836 136 40 136H24C15.164 136 8 143.162 8 152V168C8 176.836 15.164 184 24 184ZM24 280H40C48.836 280 56 272.836 56 264V248C56 239.162 48.836 232 40 232H24C15.164 232 8 239.162 8 248V264C8 272.836 15.164 280 24 280ZM120 88H136C144.836 88 152 80.836 152 72V56C152 47.162 144.836 40 136 40H120C111.164 40 104 47.162 104 56V72C104 80.836 111.164 88 120 88ZM24 376H40C48.836 376 56 368.836 56 360V344C56 335.162 48.836 328 40 328H24C15.164 328 8 335.162 8 344V360C8 368.836 15.164 376 24 376ZM24 88H40C48.836 88 56 80.836 56 72V56C56 47.162 48.836 40 40 40H24C15.164 40 8 47.162 8 56V72C8 80.836 15.164 88 24 88ZM120 280H136C144.836 280 152 272.836 152 264V248C152 239.162 144.836 232 136 232H120C111.164 232 104 239.162 104 248V264C104 272.836 111.164 280 120 280ZM432 32H416C407.125 32 400 39.125 400 48V416C400 424.836 392.836 432 384 432H16C7.125 432 0 439.125 0 448V464C0 472.875 7.125 480 16 480H384C419.346 480 448 451.346 448 416V48C448 39.125 440.875 32 432 32Z" />
        </Icon>
    </>
}