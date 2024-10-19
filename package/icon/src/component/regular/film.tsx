
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `film` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=regular film}
 * @preview ![film](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk0xMTIgNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyMiA0OCA0MTZWMzQ0SDExMlY0MzJaTTExMiAyOTZINDhWMjE2SDExMlYyOTZaTTExMiAxNjhINDhWOTZDNDggODcuMTc4IDU1LjE3OCA4MCA2NCA4MEgxMTJWMTY4Wk0zNTIgNDMySDE2MFYyODBIMzUyVjQzMlpNMzUyIDIzMkgxNjBWODBIMzUyVjIzMlpNNDY0IDQxNkM0NjQgNDI0LjgyMiA0NTYuODIyIDQzMiA0NDggNDMySDQwMFYzNDRINDY0VjQxNlpNNDY0IDI5Nkg0MDBWMjE2SDQ2NFYyOTZaTTQ2NCAxNjhINDAwVjgwSDQ0OEM0NTYuODIyIDgwIDQ2NCA4Ny4xNzggNDY0IDk2VjE2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Film(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM112 432H64C55.178 432 48 424.822 48 416V344H112V432ZM112 296H48V216H112V296ZM112 168H48V96C48 87.178 55.178 80 64 80H112V168ZM352 432H160V280H352V432ZM352 232H160V80H352V232ZM464 416C464 424.822 456.822 432 448 432H400V344H464V416ZM464 296H400V216H464V296ZM464 168H400V80H448C456.822 80 464 87.178 464 96V168Z" />
        </Icon>
    </>
}