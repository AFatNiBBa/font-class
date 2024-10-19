
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=light ruler-horizontal}
 * @preview ![ruler-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMTI4SDQ4QzIxLjQ5IDEyOCAwIDE0OS40OSAwIDE3NlYzMzZDMCAzNjIuNTEgMjEuNDkgMzg0IDQ4IDM4NEg1OTJDNjE4LjUxIDM4NCA2NDAgMzYyLjUxIDY0MCAzMzZWMTc2QzY0MCAxNDkuNDkgNjE4LjUxIDEyOCA1OTIgMTI4Wk02MDggMzM2QzYwOCAzNDQuODIyIDYwMC44MjIgMzUyIDU5MiAzNTJINDhDMzkuMTc4IDM1MiAzMiAzNDQuODIyIDMyIDMzNlYxNzZDMzIgMTY3LjE3OCAzOS4xNzggMTYwIDQ4IDE2MEgxMTJWMjI0QzExMiAyMzIuODQ0IDExOS4xNTYgMjQwIDEyOCAyNDBTMTQ0IDIzMi44NDQgMTQ0IDIyNFYxNjBIMjA4VjIyNEMyMDggMjMyLjg0NCAyMTUuMTU2IDI0MCAyMjQgMjQwUzI0MCAyMzIuODQ0IDI0MCAyMjRWMTYwSDMwNFYyMjRDMzA0IDIzMi44NDQgMzExLjE1NiAyNDAgMzIwIDI0MFMzMzYgMjMyLjg0NCAzMzYgMjI0VjE2MEg0MDBWMjI0QzQwMCAyMzIuODQ0IDQwNy4xNTYgMjQwIDQxNiAyNDBTNDMyIDIzMi44NDQgNDMyIDIyNFYxNjBINDk2VjIyNEM0OTYgMjMyLjg0NCA1MDMuMTU2IDI0MCA1MTIgMjQwUzUyOCAyMzIuODQ0IDUyOCAyMjRWMTYwSDU5MkM2MDAuODIyIDE2MCA2MDggMTY3LjE3OCA2MDggMTc2VjMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RulerHorizontal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 128H48C21.49 128 0 149.49 0 176V336C0 362.51 21.49 384 48 384H592C618.51 384 640 362.51 640 336V176C640 149.49 618.51 128 592 128ZM608 336C608 344.822 600.822 352 592 352H48C39.178 352 32 344.822 32 336V176C32 167.178 39.178 160 48 160H112V224C112 232.844 119.156 240 128 240S144 232.844 144 224V160H208V224C208 232.844 215.156 240 224 240S240 232.844 240 224V160H304V224C304 232.844 311.156 240 320 240S336 232.844 336 224V160H400V224C400 232.844 407.156 240 416 240S432 232.844 432 224V160H496V224C496 232.844 503.156 240 512 240S528 232.844 528 224V160H592C600.822 160 608 167.178 608 176V336Z" />
        </Icon>
    </>
}