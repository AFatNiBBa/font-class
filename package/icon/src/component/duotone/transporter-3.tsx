
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transporter-3` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-3?s=duotone transporter-3}
 * @preview ![transporter-3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkzLjc1IDE0MC4zNzVMNjQgMTI4TDUxLjYyNSA5OC4yNUM1MC44NzUgOTYuODc1IDQ5LjUgOTYgNDggOTZTNDUuMTI1IDk2Ljg3NSA0NC4zNzUgOTguMjVMMzIgMTI4TDIuMjUgMTQwLjM3NUMwLjg3NSAxNDEuMTI1IDAgMTQyLjUgMCAxNDRTMC44NzUgMTQ2Ljg3NSAyLjI1IDE0Ny42MjVMMzIgMTYwTDQ0LjM3NSAxODkuNzVDNDUuMTI1IDE5MS4xMjUgNDYuNSAxOTIgNDggMTkyUzUwLjg3NSAxOTEuMTI1IDUxLjYyNSAxODkuNzVMNjQgMTYwTDkzLjc1IDE0Ny42MjVDOTUuMTI1IDE0Ni44NzUgOTYgMTQ1LjUgOTYgMTQ0Uzk1LjEyNSAxNDEuMTI1IDkzLjc1IDE0MC4zNzVaTTUwOS43NSA0NC4zNzVMNDgwIDMyTDQ2Ny42MjUgMi4yNUM0NjYuODc1IDAuODc1IDQ2NS41IDAgNDY0IDBTNDYxLjEyNSAwLjg3NSA0NjAuMzc1IDIuMjVMNDQ4IDMyTDQxOC4yNSA0NC4zNzVDNDE2Ljg3NSA0NS4xMjUgNDE2IDQ2LjUgNDE2IDQ4UzQxNi44NzUgNTAuODc1IDQxOC4yNSA1MS42MjVMNDQ4IDY0TDQ2MC4zNzUgOTMuNzVDNDYxLjEyNSA5NS4xMjUgNDYyLjUgOTYgNDY0IDk2UzQ2Ni44NzUgOTUuMTI1IDQ2Ny42MjUgOTMuNzVMNDgwIDY0TDUwOS43NSA1MS42MjVDNTExLjEyNSA1MC44NzUgNTEyIDQ5LjUgNTEyIDQ4UzUxMS4xMjUgNDUuMTI1IDUwOS43NSA0NC4zNzVaTTQwMCAyNTZIMTEyQzEwMy4xNTYgMjU2IDk2IDI2My4xNTYgOTYgMjcyUzEwMy4xNTYgMjg4IDExMiAyODhINDAwQzQwOC44NDQgMjg4IDQxNiAyODAuODQ0IDQxNiAyNzJTNDA4Ljg0NCAyNTYgNDAwIDI1NlpNMTc2IDM1MkgzMzZDMzQ0Ljg0NCAzNTIgMzUyIDM0NC44NDQgMzUyIDMzNlMzNDQuODQ0IDMyMCAzMzYgMzIwSDE3NkMxNjcuMTU2IDMyMCAxNjAgMzI3LjE1NiAxNjAgMzM2UzE2Ny4xNTYgMzUyIDE3NiAzNTJaTTE3NiA0MTZIMzM2QzM0NC44NDQgNDE2IDM1MiA0MDguODQ0IDM1MiA0MDBTMzQ0Ljg0NCAzODQgMzM2IDM4NEgxNzZDMTY3LjE1NiAzODQgMTYwIDM5MS4xNTYgMTYwIDQwMFMxNjcuMTU2IDQxNiAxNzYgNDE2Wk0xNDQgMjI0SDM2OEMzNzYuODQ0IDIyNCAzODQgMjE2Ljg0NCAzODQgMjA4UzM3Ni44NDQgMTkyIDM2OCAxOTJIMTQ0QzEzNS4xNTYgMTkyIDEyOCAxOTkuMTU2IDEyOCAyMDhTMTM1LjE1NiAyMjQgMTQ0IDIyNFpNMTc2IDE2MEgzMzZDMzQ0Ljg0NCAxNjAgMzUyIDE1Mi44NDQgMzUyIDE0NFMzNDQuODQ0IDEyOCAzMzYgMTI4SDE3NkMxNjcuMTU2IDEyOCAxNjAgMTM1LjE1NiAxNjAgMTQ0UzE2Ny4xNTYgMTYwIDE3NiAxNjBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM4NCA0NDhIMTI4QzExMC4zNzUgNDQ4IDk2IDQ2Mi4zNzUgOTYgNDgwVjUxMkg0MTZWNDgwQzQxNiA0NjIuMzc1IDQwMS42MjUgNDQ4IDM4NCA0NDhaTTI1NiA5NkMyODIuNSA5NiAzMDQgNzQuNSAzMDQgNDhTMjgyLjUgMCAyNTYgMFMyMDggMjEuNSAyMDggNDhTMjI5LjUgOTYgMjU2IDk2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Transporter_3: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M93.75 140.375L64 128L51.625 98.25C50.875 96.875 49.5 96 48 96S45.125 96.875 44.375 98.25L32 128L2.25 140.375C0.875 141.125 0 142.5 0 144S0.875 146.875 2.25 147.625L32 160L44.375 189.75C45.125 191.125 46.5 192 48 192S50.875 191.125 51.625 189.75L64 160L93.75 147.625C95.125 146.875 96 145.5 96 144S95.125 141.125 93.75 140.375ZM509.75 44.375L480 32L467.625 2.25C466.875 0.875 465.5 0 464 0S461.125 0.875 460.375 2.25L448 32L418.25 44.375C416.875 45.125 416 46.5 416 48S416.875 50.875 418.25 51.625L448 64L460.375 93.75C461.125 95.125 462.5 96 464 96S466.875 95.125 467.625 93.75L480 64L509.75 51.625C511.125 50.875 512 49.5 512 48S511.125 45.125 509.75 44.375ZM400 256H112C103.156 256 96 263.156 96 272S103.156 288 112 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256ZM176 352H336C344.844 352 352 344.844 352 336S344.844 320 336 320H176C167.156 320 160 327.156 160 336S167.156 352 176 352ZM176 416H336C344.844 416 352 408.844 352 400S344.844 384 336 384H176C167.156 384 160 391.156 160 400S167.156 416 176 416ZM144 224H368C376.844 224 384 216.844 384 208S376.844 192 368 192H144C135.156 192 128 199.156 128 208S135.156 224 144 224ZM176 160H336C344.844 160 352 152.844 352 144S344.844 128 336 128H176C167.156 128 160 135.156 160 144S167.156 160 176 160Z" />
            <path d="M384 448H128C110.375 448 96 462.375 96 480V512H416V480C416 462.375 401.625 448 384 448ZM256 96C282.5 96 304 74.5 304 48S282.5 0 256 0S208 21.5 208 48S229.5 96 256 96Z" />
    </Icon>
);

export default Transporter_3;