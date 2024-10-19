
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=duotone tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAwQzExOCAwIDMyIDg2IDMyIDE5MlY0NDhINDE2VjE5MkM0MTYgODYgMzMwIDAgMjI0IDBaTTMyMCAxOTJDMzIwIDIwMC44NzUgMzEyLjg3NSAyMDggMzA0IDIwOEgyNDhWMzM2QzI0OCAzNDQuODc1IDI0MC44NzUgMzUyIDIzMiAzNTJIMjE2QzIwNy4xMjUgMzUyIDIwMCAzNDQuODc1IDIwMCAzMzZWMjA4SDE0NEMxMzUuMTI1IDIwOCAxMjggMjAwLjg3NSAxMjggMTkyVjE3NkMxMjggMTY3LjEyNSAxMzUuMTI1IDE2MCAxNDQgMTYwSDIwMFYxMTJDMjAwIDEwMy4xMjUgMjA3LjEyNSA5NiAyMTYgOTZIMjMyQzI0MC44NzUgOTYgMjQ4IDEwMy4xMjUgMjQ4IDExMlYxNjBIMzA0QzMxMi44NzUgMTYwIDMyMCAxNjcuMTI1IDMyMCAxNzZWMTkyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MzIgNDQ4SDE2QzcuMTI1IDQ0OCAwIDQ1NS4xMjUgMCA0NjRWNDk2QzAgNTA0Ljg3NSA3LjEyNSA1MTIgMTYgNTEySDQzMkM0NDAuODc1IDUxMiA0NDggNTA0Ljg3NSA0NDggNDk2VjQ2NEM0NDggNDU1LjEyNSA0NDAuODc1IDQ0OCA0MzIgNDQ4Wk0xNDQgMjA4SDIwMFYzMzZDMjAwIDM0NC44NzUgMjA3LjEyNSAzNTIgMjE2IDM1MkgyMzJDMjQwLjg3NSAzNTIgMjQ4IDM0NC44NzUgMjQ4IDMzNlYyMDhIMzA0QzMxMi44NzUgMjA4IDMyMCAyMDAuODc1IDMyMCAxOTJWMTc2QzMyMCAxNjcuMTI1IDMxMi44NzUgMTYwIDMwNCAxNjBIMjQ4VjExMkMyNDggMTAzLjEyNSAyNDAuODc1IDk2IDIzMiA5NkgyMTZDMjA3LjEyNSA5NiAyMDAgMTAzLjEyNSAyMDAgMTEyVjE2MEgxNDRDMTM1LjEyNSAxNjAgMTI4IDE2Ny4xMjUgMTI4IDE3NlYxOTJDMTI4IDIwMC44NzUgMTM1LjEyNSAyMDggMTQ0IDIwOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 0C118 0 32 86 32 192V448H416V192C416 86 330 0 224 0ZM320 192C320 200.875 312.875 208 304 208H248V336C248 344.875 240.875 352 232 352H216C207.125 352 200 344.875 200 336V208H144C135.125 208 128 200.875 128 192V176C128 167.125 135.125 160 144 160H200V112C200 103.125 207.125 96 216 96H232C240.875 96 248 103.125 248 112V160H304C312.875 160 320 167.125 320 176V192Z" />
            <path d="M432 448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H432C440.875 512 448 504.875 448 496V464C448 455.125 440.875 448 432 448ZM144 208H200V336C200 344.875 207.125 352 216 352H232C240.875 352 248 344.875 248 336V208H304C312.875 208 320 200.875 320 192V176C320 167.125 312.875 160 304 160H248V112C248 103.125 240.875 96 232 96H216C207.125 96 200 103.125 200 112V160H144C135.125 160 128 167.125 128 176V192C128 200.875 135.125 208 144 208Z" />
    </Icon>
);

export default Tombstone;