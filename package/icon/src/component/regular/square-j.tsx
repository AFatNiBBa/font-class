
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-j` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-j?s=regular square-j}
 * @preview ![square-j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMjgwIDEyOEMyNjYuNzUgMTI4IDI1NiAxMzguNzUgMjU2IDE1MlYyOTAuNjcyQzI1NiAzMTUuNjcyIDIzNC40NjkgMzM2IDIwOCAzMzZTMTYwIDMxNS42NzIgMTYwIDI5MC42NzJWMjgwQzE2MCAyNjYuNzUgMTQ5LjI1IDI1NiAxMzYgMjU2UzExMiAyNjYuNzUgMTEyIDI4MFYyOTAuNjcyQzExMiAzNDIuMTQxIDE1NS4wNjIgMzg0IDIwOCAzODRTMzA0IDM0Mi4xNDEgMzA0IDI5MC42NzJWMTUyQzMwNCAxMzguNzUgMjkzLjI1IDEyOCAyODAgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareJ(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM280 128C266.75 128 256 138.75 256 152V290.672C256 315.672 234.469 336 208 336S160 315.672 160 290.672V280C160 266.75 149.25 256 136 256S112 266.75 112 280V290.672C112 342.141 155.062 384 208 384S304 342.141 304 290.672V152C304 138.75 293.25 128 280 128Z" />
        </Icon>
    </>
}