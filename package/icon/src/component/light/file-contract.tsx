
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-contract` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-contract?s=light file-contract}
 * @preview ![file-contract](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk04MCA5NkgxNDRDMTUyLjg0NCA5NiAxNjAgODguODQ0IDE2MCA4MFMxNTIuODQ0IDY0IDE0NCA2NEg4MEM3MS4xNTYgNjQgNjQgNzEuMTU2IDY0IDgwUzcxLjE1NiA5NiA4MCA5NlpNODAgMTYwSDE0NEMxNTIuODQ0IDE2MCAxNjAgMTUyLjg0NCAxNjAgMTQ0UzE1Mi44NDQgMTI4IDE0NCAxMjhIODBDNzEuMTU2IDEyOCA2NCAxMzUuMTU2IDY0IDE0NFM3MS4xNTYgMTYwIDgwIDE2MFpNMTgwLjYyNSAzNjMuMzc1TDE2Ni43NSAzMjEuNzVDMTYzLjUgMzExLjg3NSAxNTQuMzc1IDMwNS4yNSAxNDQgMzA1LjI1UzEyNC41IDMxMS44NzUgMTIxLjI1IDMyMS43NUwxMDMgMzc2LjM3NUMxMDEuNSAzODAuODc1IDk3LjI1IDM4NCA5Mi4zNzUgMzg0SDgwQzcxLjEyNSAzODQgNjQgMzkxLjEyNSA2NCA0MDBTNzEuMTI1IDQxNiA4MCA0MTZIOTIuMzc1QzExMSA0MTYgMTI3LjUgNDA0LjEyNSAxMzMuMzc1IDM4Ni41TDE0NCAzNTQuNjI1TDE2MC44NzUgNDA1QzE2Mi44NzUgNDExLjI1IDE2OC4zNzUgNDE1LjUgMTc0Ljg3NSA0MTZIMTc2QzE4MiA0MTYgMTg3LjYyNSA0MTIuNjI1IDE5MC4yNSA0MDcuMTI1TDE5OCAzOTEuNzVDMjAwLjc1IDM4Ni4yNSAyMDUuODc1IDM4NS42MjUgMjA4IDM4NS42MjVTMjE1LjI1IDM4Ni4yNSAyMTguMTI1IDM5Mi4xMjVDMjI1LjUgNDA2Ljg3NSAyNDAuMzc1IDQxNiAyNTYuNzUgNDE2SDMwNEMzMTIuODc1IDQxNiAzMjAgNDA4Ljg3NSAzMjAgNDAwUzMxMi44NzUgMzg0IDMwNCAzODRIMjU2Ljc1QzI1Mi42MjUgMzg0IDI0OC42MjUgMzgxLjUgMjQ2LjYyNSAzNzcuNUMyMzQuNzUgMzUzLjYyNSAyMDAuMzc1IDM0Ny4xMjUgMTgwLjYyNSAzNjMuMzc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileContract(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM80 96H144C152.844 96 160 88.844 160 80S152.844 64 144 64H80C71.156 64 64 71.156 64 80S71.156 96 80 96ZM80 160H144C152.844 160 160 152.844 160 144S152.844 128 144 128H80C71.156 128 64 135.156 64 144S71.156 160 80 160ZM180.625 363.375L166.75 321.75C163.5 311.875 154.375 305.25 144 305.25S124.5 311.875 121.25 321.75L103 376.375C101.5 380.875 97.25 384 92.375 384H80C71.125 384 64 391.125 64 400S71.125 416 80 416H92.375C111 416 127.5 404.125 133.375 386.5L144 354.625L160.875 405C162.875 411.25 168.375 415.5 174.875 416H176C182 416 187.625 412.625 190.25 407.125L198 391.75C200.75 386.25 205.875 385.625 208 385.625S215.25 386.25 218.125 392.125C225.5 406.875 240.375 416 256.75 416H304C312.875 416 320 408.875 320 400S312.875 384 304 384H256.75C252.625 384 248.625 381.5 246.625 377.5C234.75 353.625 200.375 347.125 180.625 363.375Z" />
        </Icon>
    </>
}