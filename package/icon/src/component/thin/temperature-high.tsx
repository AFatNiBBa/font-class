
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-high` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-high?s=thin temperature-high}
 * @preview ![temperature-high](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgODBDMjU2IDM1LjgxNiAyMjAuMTg0IDAgMTc2IDBTOTYgMzUuODE2IDk2IDgwVjMyMi40OTJDNzYuNDIyIDM0Mi42MjMgNjQgMzY5LjY5NyA2NCA0MDBDNjQgNDYxLjg1NSAxMTQuMTQ1IDUxMiAxNzYgNTEyUzI4OCA0NjEuODU1IDI4OCA0MDBDMjg4IDM2OS42OTcgMjc1LjU3OCAzNDIuNjIzIDI1NiAzMjIuNDkyVjgwWk0yNzIgNDAwQzI3MiA0NTIuOTM0IDIyOC45MzYgNDk2IDE3NiA0OTZTODAgNDUyLjkzNCA4MCA0MDBDODAgMzc1LjQyNiA4OS43NTYgMzUxLjg2MSAxMDcuNDcxIDMzMy42NDZMMTEyIDMyOC45ODhWODBDMTEyIDQ0LjcxMSAxNDAuNzExIDE2IDE3NiAxNlMyNDAgNDQuNzExIDI0MCA4MFYzMjguOTg4TDI0NC41MjkgMzMzLjY0NkMyNjIuMjQ0IDM1MS44NjEgMjcyIDM3NS40MjYgMjcyIDQwMFpNMzg0IDMyQzM0OC42NTQgMzIgMzIwIDYwLjY1MiAzMjAgOTZDMzIwIDEzMS4zNDYgMzQ4LjY1NCAxNjAgMzg0IDE2MFM0NDggMTMxLjM0NiA0NDggOTZDNDQ4IDYwLjY1MiA0MTkuMzQ2IDMyIDM4NCAzMlpNMzg0IDE0NEMzNTcuNTMzIDE0NCAzMzYgMTIyLjQ2NyAzMzYgOTZTMzU3LjUzMyA0OCAzODQgNDhTNDMyIDY5LjUzMyA0MzIgOTZTNDEwLjQ2NyAxNDQgMzg0IDE0NFpNMTg0IDM1Mi44MDdWNzJDMTg0IDY3LjU3OCAxODAuNDA2IDY0IDE3NiA2NFMxNjggNjcuNTc4IDE2OCA3MlYzNTIuODA3QzE0NS4zMiAzNTYuNjMxIDEyOCAzNzYuMjMgMTI4IDQwMEMxMjggNDI2LjUxIDE0OS40OSA0NDggMTc2IDQ0OFMyMjQgNDI2LjUxIDIyNCA0MDBDMjI0IDM3Ni4yMyAyMDYuNjggMzU2LjYzMSAxODQgMzUyLjgwN1pNMTc2IDQzMkMxNTguMzU1IDQzMiAxNDQgNDE3LjY0NSAxNDQgNDAwUzE1OC4zNTUgMzY4IDE3NiAzNjhTMjA4IDM4Mi4zNTUgMjA4IDQwMFMxOTMuNjQ1IDQzMiAxNzYgNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TemperatureHigh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 80C256 35.816 220.184 0 176 0S96 35.816 96 80V322.492C76.422 342.623 64 369.697 64 400C64 461.855 114.145 512 176 512S288 461.855 288 400C288 369.697 275.578 342.623 256 322.492V80ZM272 400C272 452.934 228.936 496 176 496S80 452.934 80 400C80 375.426 89.756 351.861 107.471 333.646L112 328.988V80C112 44.711 140.711 16 176 16S240 44.711 240 80V328.988L244.529 333.646C262.244 351.861 272 375.426 272 400ZM384 32C348.654 32 320 60.652 320 96C320 131.346 348.654 160 384 160S448 131.346 448 96C448 60.652 419.346 32 384 32ZM384 144C357.533 144 336 122.467 336 96S357.533 48 384 48S432 69.533 432 96S410.467 144 384 144ZM184 352.807V72C184 67.578 180.406 64 176 64S168 67.578 168 72V352.807C145.32 356.631 128 376.23 128 400C128 426.51 149.49 448 176 448S224 426.51 224 400C224 376.23 206.68 356.631 184 352.807ZM176 432C158.355 432 144 417.645 144 400S158.355 368 176 368S208 382.355 208 400S193.645 432 176 432Z" />
        </Icon>
    </>
}