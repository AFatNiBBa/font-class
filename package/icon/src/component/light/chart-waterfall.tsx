
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chart-waterfall` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-waterfall?s=light chart-waterfall}
 * @preview ![chart-waterfall](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjU2QzI2NC44MjggMjU2IDI3MiAyNDguODI4IDI3MiAyNDBWMTQ0QzI3MiAxMzUuMTcyIDI2NC44MjggMTI4IDI1NiAxMjhTMjQwIDEzNS4xNzIgMjQwIDE0NFYyNDBDMjQwIDI0OC44MjggMjQ3LjE3MiAyNTYgMjU2IDI1NlpNMzUyIDE5MkMzNjAuODI4IDE5MiAzNjggMTg0LjgyOCAzNjggMTc2VjgwQzM2OCA3MS4xNzIgMzYwLjgyOCA2NCAzNTIgNjRTMzM2IDcxLjE3MiAzMzYgODBWMTc2QzMzNiAxODQuODI4IDM0My4xNzIgMTkyIDM1MiAxOTJaTTE2MCAzNTJDMTY4LjgyOCAzNTIgMTc2IDM0NC44MjggMTc2IDMzNlYyNDBDMTc2IDIzMS4xNzIgMTY4LjgyOCAyMjQgMTYwIDIyNFMxNDQgMjMxLjE3MiAxNDQgMjQwVjMzNkMxNDQgMzQ0LjgyOCAxNTEuMTcyIDM1MiAxNjAgMzUyWk00OTYgNDQ4SDgwQzUzLjUzMSA0NDggMzIgNDI2LjQ2OSAzMiA0MDBWNDhDMzIgMzkuMTcyIDI0LjgyOCAzMiAxNiAzMlMwIDM5LjE3MiAwIDQ4VjQwMEMwIDQ0NC4xMjUgMzUuODc1IDQ4MCA4MCA0ODBINDk2QzUwNC44MjggNDgwIDUxMiA0NzIuODI4IDUxMiA0NjRTNTA0LjgyOCA0NDggNDk2IDQ0OFpNNDQ4IDM1MkM0NTYuODI4IDM1MiA0NjQgMzQ0LjgyOCA0NjQgMzM2VjgwQzQ2NCA3MS4xNzIgNDU2LjgyOCA2NCA0NDggNjRTNDMyIDcxLjE3MiA0MzIgODBWMzM2QzQzMiAzNDQuODI4IDQzOS4xNzIgMzUyIDQ0OCAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChartWaterfall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 256C264.828 256 272 248.828 272 240V144C272 135.172 264.828 128 256 128S240 135.172 240 144V240C240 248.828 247.172 256 256 256ZM352 192C360.828 192 368 184.828 368 176V80C368 71.172 360.828 64 352 64S336 71.172 336 80V176C336 184.828 343.172 192 352 192ZM160 352C168.828 352 176 344.828 176 336V240C176 231.172 168.828 224 160 224S144 231.172 144 240V336C144 344.828 151.172 352 160 352ZM496 448H80C53.531 448 32 426.469 32 400V48C32 39.172 24.828 32 16 32S0 39.172 0 48V400C0 444.125 35.875 480 80 480H496C504.828 480 512 472.828 512 464S504.828 448 496 448ZM448 352C456.828 352 464 344.828 464 336V80C464 71.172 456.828 64 448 64S432 71.172 432 80V336C432 344.828 439.172 352 448 352Z" />
        </Icon>
    </>
}