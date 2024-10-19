
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-puck` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-puck?s=regular hockey-puck}
 * @preview ![hockey-puck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNjRDMTI4LjU4OCA2NCAwIDk2LjI3MyAwIDE3Ny44NDhWMzE1LjA3OEMwIDQwMi4zMDkgMTI4LjcwNSA0NDggMjU2IDQ0OFM1MTIgNDAyLjMwOSA1MTIgMzE1LjA3OFYxODRDNTEyIDEwMi40MjYgMzgzLjQxMiA2NCAyNTYgNjRaTTQ2NCAzMTUuMDc4QzQ2NCAzNjEuMTA5IDM2OC43NDggNDAwIDI1NiA0MDBTNDggMzYxLjEwOSA0OCAzMTUuMDc4VjI1OC45MjZDODcuNTYxIDI4NS4wMzUgMTUzLjgzOCAzMDQgMjU2IDMwNFM0MjQuNDM5IDI4NS4wMzUgNDY0IDI1OC45MjZWMzE1LjA3OFpNMjU2IDI1NkMxNDEuMDkgMjU2IDQ4IDIyMy44MjQgNDggMTg0QzQ4IDE1MC4xMjEgMTMxLjU4IDExMiAyNTYgMTEyUzQ2NCAxNTAuMTIxIDQ2NCAxODRDNDY0IDIyMy44MjQgMzcwLjkxIDI1NiAyNTYgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HockeyPuck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 64C128.588 64 0 96.273 0 177.848V315.078C0 402.309 128.705 448 256 448S512 402.309 512 315.078V184C512 102.426 383.412 64 256 64ZM464 315.078C464 361.109 368.748 400 256 400S48 361.109 48 315.078V258.926C87.561 285.035 153.838 304 256 304S424.439 285.035 464 258.926V315.078ZM256 256C141.09 256 48 223.824 48 184C48 150.121 131.58 112 256 112S464 150.121 464 184C464 223.824 370.91 256 256 256Z" />
        </Icon>
    </>
}