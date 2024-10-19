
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-star` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=regular square-star}
 * @preview ![square-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMzU5LjI5OSAyMDAuNDYzTDI3Ni45NzEgMTg4LjQ4NEwyNDAuMTY2IDExNC4wMTZDMjM2Ljg2MyAxMDcuMzU3IDIzMC40MSAxMDMuOTk4IDIyMy45NjEgMTA0QzIxNy41NTEgMTA0IDIxMS4xNDMgMTA3LjMxOCAyMDcuODM0IDExNC4wMTZMMTcxLjAyOSAxODguNDg0TDg4LjcwMSAyMDAuNDYzQzczLjkyNiAyMDIuNTk4IDY4LjAxIDIyMC43NjQgNzguNzE3IDIzMS4xNjhMMTM4LjI5MSAyODkuMUwxMjQuMjAzIDM3MC45MzRDMTIyLjE5OSAzODIuNjMxIDEzMS41MjMgMzkyIDE0MS45ODIgMzkyQzE0NC43NTYgMzkyIDE0Ny42MTEgMzkxLjM0IDE1MC4zNTQgMzg5Ljg5MUwyMjQgMzUxLjI0OEwyOTcuNjQ2IDM4OS44OTFDMzAwLjM4MyAzOTEuMzI2IDMwMy4yMjkgMzkxLjk3OSAzMDUuOTk4IDM5MS45NzlDMzE2LjQ2MyAzOTEuOTc5IDMyNS44MDMgMzgyLjYzOSAzMjMuNzk3IDM3MC45MzRMMzA5LjcwOSAyODkuMUwzNjkuMjgzIDIzMS4xNjhDMzc5Ljk5IDIyMC43NjQgMzc0LjA3NCAyMDIuNTk4IDM1OS4yOTkgMjAwLjQ2M1pNMjY0LjE1OSAyNjYuNDQxQzI2MC4zNzYgMjcwLjEyIDI1OC42NSAyNzUuNDI3IDI1OS41NDYgMjgwLjYyNkwyNjYuMTgyIDMxOS4xNzRMMjMxLjQzNCAzMDAuOTQyQzIyNi43NzkgMjk4LjQ5OSAyMjEuMjIxIDI5OC40OTkgMjE2LjU2NiAzMDAuOTQyTDE4MS44MiAzMTkuMTc0TDE4OC40NTYgMjgwLjYyNkMxODkuMzUyIDI3NS40MjcgMTg3LjYyNiAyNzAuMTIgMTgzLjg0MyAyNjYuNDQxTDE1NS44MyAyMzkuMjAxTDE5NC41NzQgMjMzLjU2NEMxOTkuNzgxIDIzMi44MDYgMjA0LjI4MyAyMjkuNTM3IDIwNi42MTQgMjI0LjgxOUwyMjQgMTg5LjY0MUwyNDEuMzg2IDIyNC44MTlDMjQzLjcxNyAyMjkuNTM3IDI0OC4yMTkgMjMyLjgwNiAyNTMuNDI2IDIzMy41NjRMMjkyLjE3MiAyMzkuMjAxTDI2NC4xNTkgMjY2LjQ0MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareStar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM359.299 200.463L276.971 188.484L240.166 114.016C236.863 107.357 230.41 103.998 223.961 104C217.551 104 211.143 107.318 207.834 114.016L171.029 188.484L88.701 200.463C73.926 202.598 68.01 220.764 78.717 231.168L138.291 289.1L124.203 370.934C122.199 382.631 131.523 392 141.982 392C144.756 392 147.611 391.34 150.354 389.891L224 351.248L297.646 389.891C300.383 391.326 303.229 391.979 305.998 391.979C316.463 391.979 325.803 382.639 323.797 370.934L309.709 289.1L369.283 231.168C379.99 220.764 374.074 202.598 359.299 200.463ZM264.159 266.441C260.376 270.12 258.65 275.427 259.546 280.626L266.182 319.174L231.434 300.942C226.779 298.499 221.221 298.499 216.566 300.942L181.82 319.174L188.456 280.626C189.352 275.427 187.626 270.12 183.843 266.441L155.83 239.201L194.574 233.564C199.781 232.806 204.283 229.537 206.614 224.819L224 189.641L241.386 224.819C243.717 229.537 248.219 232.806 253.426 233.564L292.172 239.201L264.159 266.441Z" />
        </Icon>
    </>
}