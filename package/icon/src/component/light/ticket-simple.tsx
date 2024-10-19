
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=light ticket-simple}
 * @preview ![ticket-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMjA4VjEyOEM1NzYgOTIuNjUyIDU0Ny4zNDYgNjQgNTEyIDY0SDY0QzI4LjY1NCA2NCAwIDkyLjY1MiAwIDEyOFYyMDhDMjYuNTEgMjA4IDQ4IDIyOS40OSA0OCAyNTZTMjYuNTEgMzA0IDAgMzA0VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhINTEyQzU0Ny4zNDYgNDQ4IDU3NiA0MTkuMzQ2IDU3NiAzODRWMzA0QzU0OS40OSAzMDQgNTI4IDI4Mi41MSA1MjggMjU2UzU0OS40OSAyMDggNTc2IDIwOFpNNTQ0IDMyOS4zMThWMzg0QzU0NCA0MDEuNjQ1IDUyOS42NDUgNDE2IDUxMiA0MTZINjRDNDYuMzU1IDQxNiAzMiA0MDEuNjQ1IDMyIDM4NFYzMjkuMzE4QzYwLjIzMiAzMTYuOTUxIDgwIDI4OC43NDIgODAgMjU2UzYwLjIzMiAxOTUuMDQ3IDMyIDE4Mi42OFYxMjhDMzIgMTEwLjM1NSA0Ni4zNTUgOTYgNjQgOTZINTEyQzUyOS42NDUgOTYgNTQ0IDExMC4zNTUgNTQ0IDEyOFYxODIuNjhDNTE1Ljc3IDE5NS4wNDcgNDk2IDIyMy4yNTggNDk2IDI1NlM1MTUuNzcgMzE2Ljk1MSA1NDQgMzI5LjMxOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TicketSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M576 208V128C576 92.652 547.346 64 512 64H64C28.654 64 0 92.652 0 128V208C26.51 208 48 229.49 48 256S26.51 304 0 304V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V304C549.49 304 528 282.51 528 256S549.49 208 576 208ZM544 329.318V384C544 401.645 529.645 416 512 416H64C46.355 416 32 401.645 32 384V329.318C60.232 316.951 80 288.742 80 256S60.232 195.047 32 182.68V128C32 110.355 46.355 96 64 96H512C529.645 96 544 110.355 544 128V182.68C515.77 195.047 496 223.258 496 256S515.77 316.951 544 329.318Z" />
        </Icon>
    </>
}