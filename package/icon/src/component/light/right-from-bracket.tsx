
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `right-from-bracket` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-bracket?s=light right-from-bracket}
 * @preview ![right-from-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgNDQ4SDgwQzUzLjUzMSA0NDggMzIgNDI2LjQ2OSAzMiA0MDBWMTEyQzMyIDg1LjUzMSA1My41MzEgNjQgODAgNjRIMTc2QzE4NC44NDQgNjQgMTkyIDU2Ljg0NCAxOTIgNDhTMTg0Ljg0NCAzMiAxNzYgMzJIODBDMzUuODc1IDMyIDAgNjcuODc1IDAgMTEyVjQwMEMwIDQ0NC4xMjUgMzUuODc1IDQ4MCA4MCA0ODBIMTc2QzE4NC44NDQgNDgwIDE5MiA0NzIuODQ0IDE5MiA0NjRTMTg0Ljg0NCA0NDggMTc2IDQ0OFpNNTAyLjYyNSAyMzMuMzc1TDM3NC42MjUgMTA1LjM3NUMzNjUuNDY5IDk2LjIxOSAzNTEuNzE5IDkzLjQ2OSAzMzkuNzUgOTguNDM4QzMyNy43OTcgMTAzLjM3NSAzMjAgMTE1LjA2MiAzMjAgMTI4VjE5MkgxNzZDMTQ5LjQ5MiAxOTIgMTI4IDIxMy40OTIgMTI4IDI0MFYyNzJDMTI4IDI5OC41MDggMTQ5LjQ5MiAzMjAgMTc2IDMyMEgzMjBWMzg0QzMyMCAzOTYuOTM4IDMyNy43OTcgNDA4LjYyNSAzMzkuNzUgNDEzLjU2MkMzNTEuNzE5IDQxOC41MzEgMzY1LjQ2OSA0MTUuNzgxIDM3NC42MjUgNDA2LjYyNUw1MDIuNjI1IDI3OC42MjVDNTA4Ljg3NSAyNzIuMzc1IDUxMiAyNjQuMTg4IDUxMiAyNTZTNTA4Ljg3NSAyMzkuNjI1IDUwMi42MjUgMjMzLjM3NVpNMzUyIDM4NFYyODhIMTc2QzE2Ny4xNzYgMjg4IDE2MCAyODAuODIgMTYwIDI3MlYyNDBDMTYwIDIzMS4xOCAxNjcuMTc2IDIyNCAxNzYgMjI0SDM1MlYxOTJMMzUxLjk5NiAxMjhMNDc5Ljk5NiAyNTZMMzUyIDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RightFromBracket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M176 448H80C53.531 448 32 426.469 32 400V112C32 85.531 53.531 64 80 64H176C184.844 64 192 56.844 192 48S184.844 32 176 32H80C35.875 32 0 67.875 0 112V400C0 444.125 35.875 480 80 480H176C184.844 480 192 472.844 192 464S184.844 448 176 448ZM502.625 233.375L374.625 105.375C365.469 96.219 351.719 93.469 339.75 98.438C327.797 103.375 320 115.062 320 128V192H176C149.492 192 128 213.492 128 240V272C128 298.508 149.492 320 176 320H320V384C320 396.938 327.797 408.625 339.75 413.562C351.719 418.531 365.469 415.781 374.625 406.625L502.625 278.625C508.875 272.375 512 264.188 512 256S508.875 239.625 502.625 233.375ZM352 384V288H176C167.176 288 160 280.82 160 272V240C160 231.18 167.176 224 176 224H352V192L351.996 128L479.996 256L352 384Z" />
        </Icon>
    </>
}