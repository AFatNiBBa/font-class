
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-k` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=regular square-k}
 * @preview ![square-k](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0OCA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDggMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMzEzLjA5NCAxMzUuMTU2QzMwMy44MjggMTI1LjczNCAyODguNjA5IDEyNS42MDkgMjc5LjE1NiAxMzQuOTA2TDE3NiAyMzYuNDk2VjE1MkMxNzYgMTM4Ljc1IDE2NS4yNSAxMjggMTUyIDEyOFMxMjggMTM4Ljc1IDEyOCAxNTJWMzYwQzEyOCAzNzMuMjUgMTM4Ljc1IDM4NCAxNTIgMzg0UzE3NiAzNzMuMjUgMTc2IDM2MFYzMDMuODU5TDIwNi44ODcgMjczLjQ0MUwyNzYuMjY2IDM3My42NTZDMjgwLjkyMiAzODAuMzkxIDI4OC40MDYgMzg0IDI5Ni4wMTYgMzg0QzMwMC43MzQgMzg0IDMwNS41IDM4Mi42MjUgMzA5LjY1NiAzNzkuNzM0QzMyMC41NjIgMzcyLjE4OCAzMjMuMjgxIDM1Ny4yMzQgMzE1LjczNCAzNDYuMzQ0TDI0My43MzQgMjQyLjM0NEMyNDMuMDAyIDI0MS4yODcgMjQxLjkzIDI0MC42ODIgMjQxLjA2OCAyMzkuNzc5TDMxMi44NDQgMTY5LjA5NEMzMjIuMjgxIDE1OS43OTcgMzIyLjQwNiAxNDQuNjA5IDMxMy4wOTQgMTM1LjE1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareK(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM313.094 135.156C303.828 125.734 288.609 125.609 279.156 134.906L176 236.496V152C176 138.75 165.25 128 152 128S128 138.75 128 152V360C128 373.25 138.75 384 152 384S176 373.25 176 360V303.859L206.887 273.441L276.266 373.656C280.922 380.391 288.406 384 296.016 384C300.734 384 305.5 382.625 309.656 379.734C320.562 372.188 323.281 357.234 315.734 346.344L243.734 242.344C243.002 241.287 241.93 240.682 241.068 239.779L312.844 169.094C322.281 159.797 322.406 144.609 313.094 135.156Z" />
        </Icon>
    </>
}