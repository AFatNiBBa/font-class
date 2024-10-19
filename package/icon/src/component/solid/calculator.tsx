
import { Icon } from "../../index";

/**
 * A component that renders the `calculator` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calculator?s=solid calculator}
 * @preview ![calculator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEg0OEMyMi4zNzUgMCAwIDIyLjM3NSAwIDQ4VjQ2NEMwIDQ4OS42MjUgMjIuMzc1IDUxMiA0OCA1MTJIMzM2QzM2MS42MjUgNTEyIDM4NCA0ODkuNjI1IDM4NCA0NjRWNDhDMzg0IDIyLjM3NSAzNjEuNjI1IDAgMzM2IDBaTTY0IDIwOEM2NCAxOTkuMTk5IDcxLjIwMSAxOTIgODAgMTkySDExMkMxMjAuODAxIDE5MiAxMjggMTk5LjE5OSAxMjggMjA4VjI0MEMxMjggMjQ4LjgwMSAxMjAuODAxIDI1NiAxMTIgMjU2SDgwQzcxLjIwMSAyNTYgNjQgMjQ4LjgwMSA2NCAyNDBWMjA4Wk02NCAzMDRDNjQgMjk1LjE5OSA3MS4yMDEgMjg4IDgwIDI4OEgxMTJDMTIwLjgwMSAyODggMTI4IDI5NS4xOTkgMTI4IDMwNFYzMzZDMTI4IDM0NC44MDEgMTIwLjgwMSAzNTIgMTEyIDM1Mkg4MEM3MS4yMDEgMzUyIDY0IDM0NC44MDEgNjQgMzM2VjMwNFpNMjI0IDQzMkMyMjQgNDQwLjgwMSAyMTYuODAxIDQ0OCAyMDggNDQ4SDgwQzcxLjIwMSA0NDggNjQgNDQwLjgwMSA2NCA0MzJWNDAwQzY0IDM5MS4xOTkgNzEuMjAxIDM4NCA4MCAzODRIMjA4QzIxNi44MDEgMzg0IDIyNCAzOTEuMTk5IDIyNCA0MDBWNDMyWk0yMjQgMzM2QzIyNCAzNDQuODAxIDIxNi44MDEgMzUyIDIwOCAzNTJIMTc2QzE2Ny4yMDEgMzUyIDE2MCAzNDQuODAxIDE2MCAzMzZWMzA0QzE2MCAyOTUuMTk5IDE2Ny4yMDEgMjg4IDE3NiAyODhIMjA4QzIxNi44MDEgMjg4IDIyNCAyOTUuMTk5IDIyNCAzMDRWMzM2Wk0yMjQgMjQwQzIyNCAyNDguODAxIDIxNi44MDEgMjU2IDIwOCAyNTZIMTc2QzE2Ny4yMDEgMjU2IDE2MCAyNDguODAxIDE2MCAyNDBWMjA4QzE2MCAxOTkuMTk5IDE2Ny4yMDEgMTkyIDE3NiAxOTJIMjA4QzIxNi44MDEgMTkyIDIyNCAxOTkuMTk5IDIyNCAyMDhWMjQwWk0zMjAgNDMyQzMyMCA0NDAuODAxIDMxMi44MDEgNDQ4IDMwNCA0NDhIMjcyQzI2My4yMDEgNDQ4IDI1NiA0NDAuODAxIDI1NiA0MzJWNDAwQzI1NiAzOTEuMTk5IDI2My4yMDEgMzg0IDI3MiAzODRIMzA0QzMxMi44MDEgMzg0IDMyMCAzOTEuMTk5IDMyMCA0MDBWNDMyWk0zMjAgMzM2QzMyMCAzNDQuODAxIDMxMi44MDEgMzUyIDMwNCAzNTJIMjcyQzI2My4yMDEgMzUyIDI1NiAzNDQuODAxIDI1NiAzMzZWMzA0QzI1NiAyOTUuMTk5IDI2My4yMDEgMjg4IDI3MiAyODhIMzA0QzMxMi44MDEgMjg4IDMyMCAyOTUuMTk5IDMyMCAzMDRWMzM2Wk0zMjAgMjQwQzMyMCAyNDguODAxIDMxMi44MDEgMjU2IDMwNCAyNTZIMjcyQzI2My4yMDEgMjU2IDI1NiAyNDguODAxIDI1NiAyNDBWMjA4QzI1NiAxOTkuMTk5IDI2My4yMDEgMTkyIDI3MiAxOTJIMzA0QzMxMi44MDEgMTkyIDMyMCAxOTkuMTk5IDMyMCAyMDhWMjQwWk0zMjAgMTQ0QzMyMCAxNTIuODAxIDMxMi44MDEgMTYwIDMwNCAxNjBIODBDNzEuMjAxIDE2MCA2NCAxNTIuODAxIDY0IDE0NFY4MEM2NCA3MS4xOTkgNzEuMjAxIDY0IDgwIDY0SDMwNEMzMTIuODAxIDY0IDMyMCA3MS4xOTkgMzIwIDgwVjE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Calculator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 0H48C22.375 0 0 22.375 0 48V464C0 489.625 22.375 512 48 512H336C361.625 512 384 489.625 384 464V48C384 22.375 361.625 0 336 0ZM64 208C64 199.199 71.201 192 80 192H112C120.801 192 128 199.199 128 208V240C128 248.801 120.801 256 112 256H80C71.201 256 64 248.801 64 240V208ZM64 304C64 295.199 71.201 288 80 288H112C120.801 288 128 295.199 128 304V336C128 344.801 120.801 352 112 352H80C71.201 352 64 344.801 64 336V304ZM224 432C224 440.801 216.801 448 208 448H80C71.201 448 64 440.801 64 432V400C64 391.199 71.201 384 80 384H208C216.801 384 224 391.199 224 400V432ZM224 336C224 344.801 216.801 352 208 352H176C167.201 352 160 344.801 160 336V304C160 295.199 167.201 288 176 288H208C216.801 288 224 295.199 224 304V336ZM224 240C224 248.801 216.801 256 208 256H176C167.201 256 160 248.801 160 240V208C160 199.199 167.201 192 176 192H208C216.801 192 224 199.199 224 208V240ZM320 432C320 440.801 312.801 448 304 448H272C263.201 448 256 440.801 256 432V400C256 391.199 263.201 384 272 384H304C312.801 384 320 391.199 320 400V432ZM320 336C320 344.801 312.801 352 304 352H272C263.201 352 256 344.801 256 336V304C256 295.199 263.201 288 272 288H304C312.801 288 320 295.199 320 304V336ZM320 240C320 248.801 312.801 256 304 256H272C263.201 256 256 248.801 256 240V208C256 199.199 263.201 192 272 192H304C312.801 192 320 199.199 320 208V240ZM320 144C320 152.801 312.801 160 304 160H80C71.201 160 64 152.801 64 144V80C64 71.199 71.201 64 80 64H304C312.801 64 320 71.199 320 80V144Z" />
    </Icon>
);

export default Calculator;