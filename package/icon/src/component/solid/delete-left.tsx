
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=solid delete-left}
 * @preview ![delete-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjRIMjA1LjI1QzE4OC4yNSA2NCAxNzIgNzAuNzUgMTYwIDgyLjc1TDkuMzc1IDIzMy4zNzVDLTMuMTI1IDI0NS44NzUgLTMuMTI1IDI2Ni4xMjUgOS4zNzUgMjc4LjYyNUwxNjAgNDI5LjI1QzE3MiA0NDEuMjUgMTg4LjI1IDQ0OCAyMDUuMjUgNDQ4SDUxMkM1NDcuMzc1IDQ0OCA1NzYgNDE5LjM3NSA1NzYgMzg0VjEyOEM1NzYgOTIuNjI1IDU0Ny4zNzUgNjQgNTEyIDY0Wk00MzIuOTY5IDMwMy4wMjlDNDQyLjM0NCAzMTIuNDA0IDQ0Mi4zNDQgMzI3LjU5MiA0MzIuOTY5IDMzNi45NjdDNDIzLjU4OCAzNDYuMzQ4IDQwOC40MDQgMzQ2LjM0IDM5OS4wMzEgMzM2Ljk2N0wzNTIgMjg5LjkzNkwzMDQuOTY5IDMzNi45NjdDMjk1LjU4OCAzNDYuMzQ4IDI4MC40MDQgMzQ2LjM0IDI3MS4wMzEgMzM2Ljk2N0MyNjEuNjU2IDMyNy41OTIgMjYxLjY1NiAzMTIuNDA0IDI3MS4wMzEgMzAzLjAyOUwzMTguMDYyIDI1NS45OThMMjcxLjAzMSAyMDguOTY5QzI2MS42NTYgMTk5LjU5NCAyNjEuNjU2IDE4NC40MDYgMjcxLjAzMSAxNzUuMDMxUzI5NS41OTQgMTY1LjY1NiAzMDQuOTY5IDE3NS4wMzFMMzUyIDIyMi4wNjJMMzk5LjAzMSAxNzUuMDMxQzQwOC40MDYgMTY1LjY1NiA0MjMuNTk0IDE2NS42NTYgNDMyLjk2OSAxNzUuMDMxUzQ0Mi4zNDQgMTk5LjU5NCA0MzIuOTY5IDIwOC45NjlMMzg1LjkzNyAyNTUuOTk4TDQzMi45NjkgMzAzLjAyOVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DeleteLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 64H205.25C188.25 64 172 70.75 160 82.75L9.375 233.375C-3.125 245.875 -3.125 266.125 9.375 278.625L160 429.25C172 441.25 188.25 448 205.25 448H512C547.375 448 576 419.375 576 384V128C576 92.625 547.375 64 512 64ZM432.969 303.029C442.344 312.404 442.344 327.592 432.969 336.967C423.588 346.348 408.404 346.34 399.031 336.967L352 289.936L304.969 336.967C295.588 346.348 280.404 346.34 271.031 336.967C261.656 327.592 261.656 312.404 271.031 303.029L318.062 255.998L271.031 208.969C261.656 199.594 261.656 184.406 271.031 175.031S295.594 165.656 304.969 175.031L352 222.062L399.031 175.031C408.406 165.656 423.594 165.656 432.969 175.031S442.344 199.594 432.969 208.969L385.937 255.998L432.969 303.029Z" />
        </Icon>
    </>
}