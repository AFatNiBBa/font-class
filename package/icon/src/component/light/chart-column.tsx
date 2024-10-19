
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chart-column` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-column?s=light chart-column}
 * @preview ![chart-column](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDQ4SDgwQzUzLjUzMSA0NDggMzIgNDI2LjQ2OSAzMiA0MDBWNDhDMzIgMzkuMTU2IDI0Ljg0NCAzMiAxNiAzMlMwIDM5LjE1NiAwIDQ4VjQwMEMwIDQ0NC4xMjUgMzUuODc1IDQ4MCA4MCA0ODBINDk2QzUwNC44NDQgNDgwIDUxMiA0NzIuODQ0IDUxMiA0NjRTNTA0Ljg0NCA0NDggNDk2IDQ0OFpNMTYwIDM2OEMxNjguODQ0IDM2OCAxNzYgMzYwLjg0NCAxNzYgMzUyVjI1NkMxNzYgMjQ3LjE1NiAxNjguODQ0IDI0MCAxNjAgMjQwUzE0NCAyNDcuMTU2IDE0NCAyNTZWMzUyQzE0NCAzNjAuODQ0IDE1MS4xNTYgMzY4IDE2MCAzNjhaTTI1NiAzNjhDMjY0Ljg0NCAzNjggMjcyIDM2MC44NDQgMjcyIDM1MlYxMjhDMjcyIDExOS4xNTYgMjY0Ljg0NCAxMTIgMjU2IDExMlMyNDAgMTE5LjE1NiAyNDAgMTI4VjM1MkMyNDAgMzYwLjg0NCAyNDcuMTU2IDM2OCAyNTYgMzY4Wk0zNTIgMzY4QzM2MC44NDQgMzY4IDM2OCAzNjAuODQ0IDM2OCAzNTJWMTkyQzM2OCAxODMuMTU2IDM2MC44NDQgMTc2IDM1MiAxNzZTMzM2IDE4My4xNTYgMzM2IDE5MlYzNTJDMzM2IDM2MC44NDQgMzQzLjE1NiAzNjggMzUyIDM2OFpNNDQ4IDM2OEM0NTYuODQ0IDM2OCA0NjQgMzYwLjg0NCA0NjQgMzUyVjk2QzQ2NCA4Ny4xNTYgNDU2Ljg0NCA4MCA0NDggODBTNDMyIDg3LjE1NiA0MzIgOTZWMzUyQzQzMiAzNjAuODQ0IDQzOS4xNTYgMzY4IDQ0OCAzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChartColumn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 448H80C53.531 448 32 426.469 32 400V48C32 39.156 24.844 32 16 32S0 39.156 0 48V400C0 444.125 35.875 480 80 480H496C504.844 480 512 472.844 512 464S504.844 448 496 448ZM160 368C168.844 368 176 360.844 176 352V256C176 247.156 168.844 240 160 240S144 247.156 144 256V352C144 360.844 151.156 368 160 368ZM256 368C264.844 368 272 360.844 272 352V128C272 119.156 264.844 112 256 112S240 119.156 240 128V352C240 360.844 247.156 368 256 368ZM352 368C360.844 368 368 360.844 368 352V192C368 183.156 360.844 176 352 176S336 183.156 336 192V352C336 360.844 343.156 368 352 368ZM448 368C456.844 368 464 360.844 464 352V96C464 87.156 456.844 80 448 80S432 87.156 432 96V352C432 360.844 439.156 368 448 368Z" />
        </Icon>
    </>
}