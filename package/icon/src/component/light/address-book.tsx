
import { Icon } from "../../index";

/**
 * A component that renders the `address-book` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=light address-book}
 * @preview ![address-book](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIgMjg4SDIwOEMxNjMuODE3IDI4OCAxMjggMzIzLjgxNyAxMjggMzY4QzEyOCAzNzYuODM2IDEzNS4xNjQgMzg0IDE0NCAzODRDMTUyLjgzNyAzODQgMTYwIDM3Ni44MzYgMTYwIDM2OEMxNjAgMzQxLjQ5IDE4MS40OSAzMjAgMjA4IDMyMEgyNzJDMjk4LjUxIDMyMCAzMjAgMzQxLjQ5IDMyMCAzNjhDMzIwIDM3Ni44MzYgMzI3LjE2NCAzODQgMzM2IDM4NEMzNDQuODM3IDM4NCAzNTIgMzc2LjgzNiAzNTIgMzY4QzM1MiAzMjMuODE3IDMxNi4xODMgMjg4IDI3MiAyODhaTTQ5NiAxOTJINDgwVjI4OEg0OTZDNTA0LjgzNyAyODggNTEyIDI4MC44MzYgNTEyIDI3MlYyMDhDNTEyIDE5OS4xNjQgNTA0LjgzNyAxOTIgNDk2IDE5MlpNMjQwIDI1NkMyNzUuMzQ2IDI1NiAzMDQgMjI3LjM0NiAzMDQgMTkyUzI3NS4zNDYgMTI4IDI0MCAxMjhTMTc2IDE1Ni42NTQgMTc2IDE5MlMyMDQuNjU0IDI1NiAyNDAgMjU2Wk0yNDAgMTYwQzI1Ny42NDUgMTYwIDI3MiAxNzQuMzU1IDI3MiAxOTJTMjU3LjY0NSAyMjQgMjQwIDIyNFMyMDggMjA5LjY0NSAyMDggMTkyUzIyMi4zNTUgMTYwIDI0MCAxNjBaTTQ5NiAzMjBINDgwVjQxNkg0OTZDNTA0LjgzNyA0MTYgNTEyIDQwOC44MzYgNTEyIDQwMFYzMzZDNTEyIDMyNy4xNjQgNTA0LjgzNyAzMjAgNDk2IDMyMFpNNDk2IDY0SDQ4MFYxNjBINDk2QzUwNC44MzcgMTYwIDUxMiAxNTIuODM2IDUxMiAxNDRWODBDNTEyIDcxLjE2NCA1MDQuODM3IDY0IDQ5NiA2NFpNMzg0IDBIOTZDNjAuNjU0IDAgMzIgMjguNjU0IDMyIDY0VjQ0OEMzMiA0ODMuMzQ4IDYwLjY1NCA1MTIgOTYgNTEySDM4NEM0MTkuMzQ4IDUxMiA0NDggNDgzLjM0OCA0NDggNDQ4VjY0QzQ0OCAyOC42NTQgNDE5LjM0OCAwIDM4NCAwWk00MTYgNDQ4QzQxNiA0NjUuNjQ1IDQwMS42NDUgNDgwIDM4NCA0ODBIOTZDNzguMzU1IDQ4MCA2NCA0NjUuNjQ1IDY0IDQ0OFY2NEM2NCA0Ni4zNTUgNzguMzU1IDMyIDk2IDMySDM4NEM0MDEuNjQ1IDMyIDQxNiA0Ni4zNTUgNDE2IDY0VjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 288H208C163.817 288 128 323.817 128 368C128 376.836 135.164 384 144 384C152.837 384 160 376.836 160 368C160 341.49 181.49 320 208 320H272C298.51 320 320 341.49 320 368C320 376.836 327.164 384 336 384C344.837 384 352 376.836 352 368C352 323.817 316.183 288 272 288ZM496 192H480V288H496C504.837 288 512 280.836 512 272V208C512 199.164 504.837 192 496 192ZM240 256C275.346 256 304 227.346 304 192S275.346 128 240 128S176 156.654 176 192S204.654 256 240 256ZM240 160C257.645 160 272 174.355 272 192S257.645 224 240 224S208 209.645 208 192S222.355 160 240 160ZM496 320H480V416H496C504.837 416 512 408.836 512 400V336C512 327.164 504.837 320 496 320ZM496 64H480V160H496C504.837 160 512 152.836 512 144V80C512 71.164 504.837 64 496 64ZM384 0H96C60.654 0 32 28.654 32 64V448C32 483.348 60.654 512 96 512H384C419.348 512 448 483.348 448 448V64C448 28.654 419.348 0 384 0ZM416 448C416 465.645 401.645 480 384 480H96C78.355 480 64 465.645 64 448V64C64 46.355 78.355 32 96 32H384C401.645 32 416 46.355 416 64V448Z" />
    </Icon>
);

export default AddressBook;