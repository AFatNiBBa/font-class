
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=regular hurricane}
 * @preview ![hurricane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgOTZDMjEwLjc1IDk2IDIwMCAxMDYuNzUgMjAwIDEyMFMyMTAuNzUgMTQ0IDIyNCAxNDRDMzEyLjIxOSAxNDQgMzg0IDIxNS43ODEgMzg0IDMwNFMzMTIuMjE5IDQ2NCAyMjQgNDY0QzIxMC43NSA0NjQgMjAwIDQ3NC43NSAyMDAgNDg4UzIxMC43NSA1MTIgMjI0IDUxMkMzMzguNjg4IDUxMiA0MzIgNDE4LjY4OCA0MzIgMzA0UzMzOC42ODggOTYgMjI0IDk2Wk0yNjQgMzkyQzI2NCAzNzguNzUgMjUzLjI1IDM2OCAyNDAgMzY4QzE1MS43ODEgMzY4IDgwIDI5Ni4yMTkgODAgMjA4UzE1MS43ODEgNDggMjQwIDQ4QzI1My4yNSA0OCAyNjQgMzcuMjUgMjY0IDI0UzI1My4yNSAwIDI0MCAwQzEyNS4zMTIgMCAzMiA5My4zMTIgMzIgMjA4UzEyNS4zMTIgNDE2IDI0MCA0MTZDMjUzLjI1IDQxNiAyNjQgNDA1LjI1IDI2NCAzOTJaTTI1NiAyNTZDMjU2IDIzOC4zMjYgMjQxLjY3NCAyMjQgMjI0IDIyNFMxOTIgMjM4LjMyNiAxOTIgMjU2QzE5MiAyNzMuNjcyIDIwNi4zMjYgMjg4IDIyNCAyODhTMjU2IDI3My42NzIgMjU2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Hurricane(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 96C210.75 96 200 106.75 200 120S210.75 144 224 144C312.219 144 384 215.781 384 304S312.219 464 224 464C210.75 464 200 474.75 200 488S210.75 512 224 512C338.688 512 432 418.688 432 304S338.688 96 224 96ZM264 392C264 378.75 253.25 368 240 368C151.781 368 80 296.219 80 208S151.781 48 240 48C253.25 48 264 37.25 264 24S253.25 0 240 0C125.312 0 32 93.312 32 208S125.312 416 240 416C253.25 416 264 405.25 264 392ZM256 256C256 238.326 241.674 224 224 224S192 238.326 192 256C192 273.672 206.326 288 224 288S256 273.672 256 256Z" />
        </Icon>
    </>
}