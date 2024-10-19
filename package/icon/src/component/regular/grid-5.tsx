
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `grid-5` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grid-5?s=regular grid-5}
 * @preview ![grid-5](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjggMTEySDEyMEMxMTUuNTgyIDExMiAxMTIgMTE1LjU4MiAxMTIgMTIwVjE2OEMxMTIgMTcyLjQxOCAxMTUuNTgyIDE3NiAxMjAgMTc2SDE2OEMxNzIuNDE4IDE3NiAxNzYgMTcyLjQxOCAxNzYgMTY4VjEyMEMxNzYgMTE1LjU4MiAxNzIuNDE4IDExMiAxNjggMTEyWk0xNjggMjI0SDEyMEMxMTUuNTgyIDIyNCAxMTIgMjI3LjU4MiAxMTIgMjMyVjI4MEMxMTIgMjg0LjQxOCAxMTUuNTgyIDI4OCAxMjAgMjg4SDE2OEMxNzIuNDE4IDI4OCAxNzYgMjg0LjQxOCAxNzYgMjgwVjIzMkMxNzYgMjI3LjU4MiAxNzIuNDE4IDIyNCAxNjggMjI0Wk0xNjggMzM2SDEyMEMxMTUuNTgyIDMzNiAxMTIgMzM5LjU4MiAxMTIgMzQ0VjM5MkMxMTIgMzk2LjQxOCAxMTUuNTgyIDQwMCAxMjAgNDAwSDE2OEMxNzIuNDE4IDQwMCAxNzYgMzk2LjQxOCAxNzYgMzkyVjM0NEMxNzYgMzM5LjU4MiAxNzIuNDE4IDMzNiAxNjggMzM2Wk0yODAgMjI0SDIzMkMyMjcuNTgyIDIyNCAyMjQgMjI3LjU4MiAyMjQgMjMyVjI4MEMyMjQgMjg0LjQxOCAyMjcuNTgyIDI4OCAyMzIgMjg4SDI4MEMyODQuNDE4IDI4OCAyODggMjg0LjQxOCAyODggMjgwVjIzMkMyODggMjI3LjU4MiAyODQuNDE4IDIyNCAyODAgMjI0Wk0yODAgNDQ4SDIzMkMyMjcuNTgyIDQ0OCAyMjQgNDUxLjU4MiAyMjQgNDU2VjUwNEMyMjQgNTA4LjQxOCAyMjcuNTgyIDUxMiAyMzIgNTEySDI4MEMyODQuNDE4IDUxMiAyODggNTA4LjQxOCAyODggNTA0VjQ1NkMyODggNDUxLjU4MiAyODQuNDE4IDQ0OCAyODAgNDQ4Wk0yODAgMzM2SDIzMkMyMjcuNTgyIDMzNiAyMjQgMzM5LjU4MiAyMjQgMzQ0VjM5MkMyMjQgMzk2LjQxOCAyMjcuNTgyIDQwMCAyMzIgNDAwSDI4MEMyODQuNDE4IDQwMCAyODggMzk2LjQxOCAyODggMzkyVjM0NEMyODggMzM5LjU4MiAyODQuNDE4IDMzNiAyODAgMzM2Wk0xNjggMEgxMjBDMTE1LjU4MiAwIDExMiAzLjU4MiAxMTIgOFY1NkMxMTIgNjAuNDE4IDExNS41ODIgNjQgMTIwIDY0SDE2OEMxNzIuNDE4IDY0IDE3NiA2MC40MTggMTc2IDU2VjhDMTc2IDMuNTgyIDE3Mi40MTggMCAxNjggMFpNMTY4IDQ0OEgxMjBDMTE1LjU4MiA0NDggMTEyIDQ1MS41ODIgMTEyIDQ1NlY1MDRDMTEyIDUwOC40MTggMTE1LjU4MiA1MTIgMTIwIDUxMkgxNjhDMTcyLjQxOCA1MTIgMTc2IDUwOC40MTggMTc2IDUwNFY0NTZDMTc2IDQ1MS41ODIgMTcyLjQxOCA0NDggMTY4IDQ0OFpNNTYgNDQ4SDhDMy41ODIgNDQ4IDAgNDUxLjU4MiAwIDQ1NlY1MDRDMCA1MDguNDE4IDMuNTgyIDUxMiA4IDUxMkg1NkM2MC40MTggNTEyIDY0IDUwOC40MTggNjQgNTA0VjQ1NkM2NCA0NTEuNTgyIDYwLjQxOCA0NDggNTYgNDQ4Wk01NiAzMzZIOEMzLjU4MiAzMzYgMCAzMzkuNTgyIDAgMzQ0VjM5MkMwIDM5Ni40MTggMy41ODIgNDAwIDggNDAwSDU2QzYwLjQxOCA0MDAgNjQgMzk2LjQxOCA2NCAzOTJWMzQ0QzY0IDMzOS41ODIgNjAuNDE4IDMzNiA1NiAzMzZaTTU2IDExMkg4QzMuNTgyIDExMiAwIDExNS41ODIgMCAxMjBWMTY4QzAgMTcyLjQxOCAzLjU4MiAxNzYgOCAxNzZINTZDNjAuNDE4IDE3NiA2NCAxNzIuNDE4IDY0IDE2OFYxMjBDNjQgMTE1LjU4MiA2MC40MTggMTEyIDU2IDExMlpNNTYgMEg4QzMuNTgyIDAgMCAzLjU4MiAwIDhWNTZDMCA2MC40MTggMy41ODIgNjQgOCA2NEg1NkM2MC40MTggNjQgNjQgNjAuNDE4IDY0IDU2VjhDNjQgMy41ODIgNjAuNDE4IDAgNTYgMFpNNTYgMjI0SDhDMy41ODIgMjI0IDAgMjI3LjU4MiAwIDIzMlYyODBDMCAyODQuNDE4IDMuNTgyIDI4OCA4IDI4OEg1NkM2MC40MTggMjg4IDY0IDI4NC40MTggNjQgMjgwVjIzMkM2NCAyMjcuNTgyIDYwLjQxOCAyMjQgNTYgMjI0Wk0zOTIgMEgzNDRDMzM5LjU4MiAwIDMzNiAzLjU4MiAzMzYgOFY1NkMzMzYgNjAuNDE4IDMzOS41ODIgNjQgMzQ0IDY0SDM5MkMzOTYuNDE4IDY0IDQwMCA2MC40MTggNDAwIDU2VjhDNDAwIDMuNTgyIDM5Ni40MTggMCAzOTIgMFpNNTA0IDQ0OEg0NTZDNDUxLjU4MiA0NDggNDQ4IDQ1MS41ODIgNDQ4IDQ1NlY1MDRDNDQ4IDUwOC40MTggNDUxLjU4MiA1MTIgNDU2IDUxMkg1MDRDNTA4LjQxOCA1MTIgNTEyIDUwOC40MTggNTEyIDUwNFY0NTZDNTEyIDQ1MS41ODIgNTA4LjQxOCA0NDggNTA0IDQ0OFpNNTA0IDIyNEg0NTZDNDUxLjU4MiAyMjQgNDQ4IDIyNy41ODIgNDQ4IDIzMlYyODBDNDQ4IDI4NC40MTggNDUxLjU4MiAyODggNDU2IDI4OEg1MDRDNTA4LjQxOCAyODggNTEyIDI4NC40MTggNTEyIDI4MFYyMzJDNTEyIDIyNy41ODIgNTA4LjQxOCAyMjQgNTA0IDIyNFpNNTA0IDMzNkg0NTZDNDUxLjU4MiAzMzYgNDQ4IDMzOS41ODIgNDQ4IDM0NFYzOTJDNDQ4IDM5Ni40MTggNDUxLjU4MiA0MDAgNDU2IDQwMEg1MDRDNTA4LjQxOCA0MDAgNTEyIDM5Ni40MTggNTEyIDM5MlYzNDRDNTEyIDMzOS41ODIgNTA4LjQxOCAzMzYgNTA0IDMzNlpNNTA0IDBINDU2QzQ1MS41ODIgMCA0NDggMy41ODIgNDQ4IDhWNTZDNDQ4IDYwLjQxOCA0NTEuNTgyIDY0IDQ1NiA2NEg1MDRDNTA4LjQxOCA2NCA1MTIgNjAuNDE4IDUxMiA1NlY4QzUxMiAzLjU4MiA1MDguNDE4IDAgNTA0IDBaTTUwNCAxMTJINDU2QzQ1MS41ODIgMTEyIDQ0OCAxMTUuNTgyIDQ0OCAxMjBWMTY4QzQ0OCAxNzIuNDE4IDQ1MS41ODIgMTc2IDQ1NiAxNzZINTA0QzUwOC40MTggMTc2IDUxMiAxNzIuNDE4IDUxMiAxNjhWMTIwQzUxMiAxMTUuNTgyIDUwOC40MTggMTEyIDUwNCAxMTJaTTM5MiA0NDhIMzQ0QzMzOS41ODIgNDQ4IDMzNiA0NTEuNTgyIDMzNiA0NTZWNTA0QzMzNiA1MDguNDE4IDMzOS41ODIgNTEyIDM0NCA1MTJIMzkyQzM5Ni40MTggNTEyIDQwMCA1MDguNDE4IDQwMCA1MDRWNDU2QzQwMCA0NTEuNTgyIDM5Ni40MTggNDQ4IDM5MiA0NDhaTTI4MCAwSDIzMkMyMjcuNTgyIDAgMjI0IDMuNTgyIDIyNCA4VjU2QzIyNCA2MC40MTggMjI3LjU4MiA2NCAyMzIgNjRIMjgwQzI4NC40MTggNjQgMjg4IDYwLjQxOCAyODggNTZWOEMyODggMy41ODIgMjg0LjQxOCAwIDI4MCAwWk0zOTIgMTEySDM0NEMzMzkuNTgyIDExMiAzMzYgMTE1LjU4MiAzMzYgMTIwVjE2OEMzMzYgMTcyLjQxOCAzMzkuNTgyIDE3NiAzNDQgMTc2SDM5MkMzOTYuNDE4IDE3NiA0MDAgMTcyLjQxOCA0MDAgMTY4VjEyMEM0MDAgMTE1LjU4MiAzOTYuNDE4IDExMiAzOTIgMTEyWk0yODAgMTEySDIzMkMyMjcuNTgyIDExMiAyMjQgMTE1LjU4MiAyMjQgMTIwVjE2OEMyMjQgMTcyLjQxOCAyMjcuNTgyIDE3NiAyMzIgMTc2SDI4MEMyODQuNDE4IDE3NiAyODggMTcyLjQxOCAyODggMTY4VjEyMEMyODggMTE1LjU4MiAyODQuNDE4IDExMiAyODAgMTEyWk0zOTIgMzM2SDM0NEMzMzkuNTgyIDMzNiAzMzYgMzM5LjU4MiAzMzYgMzQ0VjM5MkMzMzYgMzk2LjQxOCAzMzkuNTgyIDQwMCAzNDQgNDAwSDM5MkMzOTYuNDE4IDQwMCA0MDAgMzk2LjQxOCA0MDAgMzkyVjM0NEM0MDAgMzM5LjU4MiAzOTYuNDE4IDMzNiAzOTIgMzM2Wk0zOTIgMjI0SDM0NEMzMzkuNTgyIDIyNCAzMzYgMjI3LjU4MiAzMzYgMjMyVjI4MEMzMzYgMjg0LjQxOCAzMzkuNTgyIDI4OCAzNDQgMjg4SDM5MkMzOTYuNDE4IDI4OCA0MDAgMjg0LjQxOCA0MDAgMjgwVjIzMkM0MDAgMjI3LjU4MiAzOTYuNDE4IDIyNCAzOTIgMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Grid_5(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M168 112H120C115.582 112 112 115.582 112 120V168C112 172.418 115.582 176 120 176H168C172.418 176 176 172.418 176 168V120C176 115.582 172.418 112 168 112ZM168 224H120C115.582 224 112 227.582 112 232V280C112 284.418 115.582 288 120 288H168C172.418 288 176 284.418 176 280V232C176 227.582 172.418 224 168 224ZM168 336H120C115.582 336 112 339.582 112 344V392C112 396.418 115.582 400 120 400H168C172.418 400 176 396.418 176 392V344C176 339.582 172.418 336 168 336ZM280 224H232C227.582 224 224 227.582 224 232V280C224 284.418 227.582 288 232 288H280C284.418 288 288 284.418 288 280V232C288 227.582 284.418 224 280 224ZM280 448H232C227.582 448 224 451.582 224 456V504C224 508.418 227.582 512 232 512H280C284.418 512 288 508.418 288 504V456C288 451.582 284.418 448 280 448ZM280 336H232C227.582 336 224 339.582 224 344V392C224 396.418 227.582 400 232 400H280C284.418 400 288 396.418 288 392V344C288 339.582 284.418 336 280 336ZM168 0H120C115.582 0 112 3.582 112 8V56C112 60.418 115.582 64 120 64H168C172.418 64 176 60.418 176 56V8C176 3.582 172.418 0 168 0ZM168 448H120C115.582 448 112 451.582 112 456V504C112 508.418 115.582 512 120 512H168C172.418 512 176 508.418 176 504V456C176 451.582 172.418 448 168 448ZM56 448H8C3.582 448 0 451.582 0 456V504C0 508.418 3.582 512 8 512H56C60.418 512 64 508.418 64 504V456C64 451.582 60.418 448 56 448ZM56 336H8C3.582 336 0 339.582 0 344V392C0 396.418 3.582 400 8 400H56C60.418 400 64 396.418 64 392V344C64 339.582 60.418 336 56 336ZM56 112H8C3.582 112 0 115.582 0 120V168C0 172.418 3.582 176 8 176H56C60.418 176 64 172.418 64 168V120C64 115.582 60.418 112 56 112ZM56 0H8C3.582 0 0 3.582 0 8V56C0 60.418 3.582 64 8 64H56C60.418 64 64 60.418 64 56V8C64 3.582 60.418 0 56 0ZM56 224H8C3.582 224 0 227.582 0 232V280C0 284.418 3.582 288 8 288H56C60.418 288 64 284.418 64 280V232C64 227.582 60.418 224 56 224ZM392 0H344C339.582 0 336 3.582 336 8V56C336 60.418 339.582 64 344 64H392C396.418 64 400 60.418 400 56V8C400 3.582 396.418 0 392 0ZM504 448H456C451.582 448 448 451.582 448 456V504C448 508.418 451.582 512 456 512H504C508.418 512 512 508.418 512 504V456C512 451.582 508.418 448 504 448ZM504 224H456C451.582 224 448 227.582 448 232V280C448 284.418 451.582 288 456 288H504C508.418 288 512 284.418 512 280V232C512 227.582 508.418 224 504 224ZM504 336H456C451.582 336 448 339.582 448 344V392C448 396.418 451.582 400 456 400H504C508.418 400 512 396.418 512 392V344C512 339.582 508.418 336 504 336ZM504 0H456C451.582 0 448 3.582 448 8V56C448 60.418 451.582 64 456 64H504C508.418 64 512 60.418 512 56V8C512 3.582 508.418 0 504 0ZM504 112H456C451.582 112 448 115.582 448 120V168C448 172.418 451.582 176 456 176H504C508.418 176 512 172.418 512 168V120C512 115.582 508.418 112 504 112ZM392 448H344C339.582 448 336 451.582 336 456V504C336 508.418 339.582 512 344 512H392C396.418 512 400 508.418 400 504V456C400 451.582 396.418 448 392 448ZM280 0H232C227.582 0 224 3.582 224 8V56C224 60.418 227.582 64 232 64H280C284.418 64 288 60.418 288 56V8C288 3.582 284.418 0 280 0ZM392 112H344C339.582 112 336 115.582 336 120V168C336 172.418 339.582 176 344 176H392C396.418 176 400 172.418 400 168V120C400 115.582 396.418 112 392 112ZM280 112H232C227.582 112 224 115.582 224 120V168C224 172.418 227.582 176 232 176H280C284.418 176 288 172.418 288 168V120C288 115.582 284.418 112 280 112ZM392 336H344C339.582 336 336 339.582 336 344V392C336 396.418 339.582 400 344 400H392C396.418 400 400 396.418 400 392V344C400 339.582 396.418 336 392 336ZM392 224H344C339.582 224 336 227.582 336 232V280C336 284.418 339.582 288 344 288H392C396.418 288 400 284.418 400 280V232C400 227.582 396.418 224 392 224Z" />
        </Icon>
    </>
}