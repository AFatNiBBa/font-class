
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-contract` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-contract?s=regular file-contract}
 * @preview ![file-contract](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDkzLjM4M0wyOTAuNjI3IDE4Ljc0NkMyNzguNjI1IDYuNzQyIDI2Mi4zNDggMCAyNDUuMzczIDBINjRDMjguNjU0IDAgMCAyOC42NTIgMCA2NEwwLjAyIDQ0OEMwLjAyIDQ4My4zNDQgMjguNjc0IDUxMiA2NC4wMiA1MTJIMzIwQzM1NS4xOTkgNTEyIDM4NCA0ODMuMTk5IDM4NCA0NDhWMTM4LjY0MUMzODQgMTIxLjY2NCAzNzcuMjU4IDEwNS4zODMgMzY1LjI1NiA5My4zODNaTTMzNi4wMDIgNDQ4QzMzNi4wMDIgNDU2LjgzNiAzMjguODM4IDQ2NCAzMjAuMDAyIDQ2NEg2NC4wMThDNTUuMTggNDY0IDQ4LjAxOCA0NTYuODM2IDQ4LjAxOCA0NDhMNDggNjQuMTI1QzQ4IDU1LjI4OSA1NS4xNjQgNDguMTI1IDY0IDQ4LjEyNUgyMjQuMDA4VjEyOEMyMjQuMDA4IDE0NS42NzIgMjM4LjMzNCAxNjAgMjU2LjAwOCAxNjBIMzM2LjAwMlY0NDhaTTk2IDEyOEgxNzZDMTg0Ljg0NCAxMjggMTkyIDEyMC44NDQgMTkyIDExMlMxODQuODQ0IDk2IDE3NiA5Nkg5NkM4Ny4xNTYgOTYgODAgMTAzLjE1NiA4MCAxMTJTODcuMTU2IDEyOCA5NiAxMjhaTTk2IDE5MkgxNzZDMTg0Ljg0NCAxOTIgMTkyIDE4NC44NDQgMTkyIDE3NlMxODQuODQ0IDE2MCAxNzYgMTYwSDk2Qzg3LjE1NiAxNjAgODAgMTY3LjE1NiA4MCAxNzZTODcuMTU2IDE5MiA5NiAxOTJaTTE5Ni42MjUgMzYzLjM3NUwxODIuNzUgMzIxLjc1QzE3OS41IDMxMS44NzUgMTcwLjM3NSAzMDUuMjUgMTYwIDMwNS4yNVMxNDAuNSAzMTEuODc1IDEzNy4yNSAzMjEuNzVMMTE5IDM3Ni4zNzVDMTE3LjUgMzgwLjg3NSAxMTMuMjUgMzg0IDEwOC4zNzUgMzg0SDk2Qzg3LjEyNSAzODQgODAgMzkxLjEyNSA4MCA0MDBTODcuMTI1IDQxNiA5NiA0MTZIMTA4LjM3NUMxMjcgNDE2IDE0My41IDQwNC4xMjUgMTQ5LjM3NSAzODYuNUwxNjAgMzU0LjYyNUwxNzYuODc1IDQwNUMxNzguODc1IDQxMS4yNSAxODQuMzc1IDQxNS41IDE5MC44NzUgNDE2SDE5MkMxOTggNDE2IDIwMy42MjUgNDEyLjYyNSAyMDYuMjUgNDA3LjEyNUwyMTQgMzkxLjc1QzIxNi43NSAzODYuMjUgMjIxLjg3NSAzODUuNjI1IDIyNCAzODUuNjI1UzIzMS4yNSAzODYuMjUgMjM0LjEyNSAzOTIuMTI1QzI0MS41IDQwNi44NzUgMjU2LjM3NSA0MTYgMjcyLjc1IDQxNkgyODhDMjk2Ljg3NSA0MTYgMzA0IDQwOC44NzUgMzA0IDQwMFMyOTYuODc1IDM4NCAyODggMzg0SDI3Mi43NUMyNjguNjI1IDM4NCAyNjQuNjI1IDM4MS41IDI2Mi42MjUgMzc3LjVDMjUwLjc1IDM1My42MjUgMjE2LjM3NSAzNDcuMTI1IDE5Ni42MjUgMzYzLjM3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileContract(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 93.383L290.627 18.746C278.625 6.742 262.348 0 245.373 0H64C28.654 0 0 28.652 0 64L0.02 448C0.02 483.344 28.674 512 64.02 512H320C355.199 512 384 483.199 384 448V138.641C384 121.664 377.258 105.383 365.256 93.383ZM336.002 448C336.002 456.836 328.838 464 320.002 464H64.018C55.18 464 48.018 456.836 48.018 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.334 160 256.008 160H336.002V448ZM96 128H176C184.844 128 192 120.844 192 112S184.844 96 176 96H96C87.156 96 80 103.156 80 112S87.156 128 96 128ZM96 192H176C184.844 192 192 184.844 192 176S184.844 160 176 160H96C87.156 160 80 167.156 80 176S87.156 192 96 192ZM196.625 363.375L182.75 321.75C179.5 311.875 170.375 305.25 160 305.25S140.5 311.875 137.25 321.75L119 376.375C117.5 380.875 113.25 384 108.375 384H96C87.125 384 80 391.125 80 400S87.125 416 96 416H108.375C127 416 143.5 404.125 149.375 386.5L160 354.625L176.875 405C178.875 411.25 184.375 415.5 190.875 416H192C198 416 203.625 412.625 206.25 407.125L214 391.75C216.75 386.25 221.875 385.625 224 385.625S231.25 386.25 234.125 392.125C241.5 406.875 256.375 416 272.75 416H288C296.875 416 304 408.875 304 400S296.875 384 288 384H272.75C268.625 384 264.625 381.5 262.625 377.5C250.75 353.625 216.375 347.125 196.625 363.375Z" />
        </Icon>
    </>
}