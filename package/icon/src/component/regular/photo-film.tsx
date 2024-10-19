
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `photo-film` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=regular photo-film}
 * @preview ![photo-film](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgNDQ4QzQ2NCA0NTYuODIyIDQ1Ni44MjIgNDY0IDQ0OCA0NjRINDAwVjM4NEgzNTJWNDY0SDE2MFYxMjhINjRDMjguNjU0IDEyOCAwIDE1Ni42NTQgMCAxOTJWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkg0NDhDNDgzLjM0NiA1MTIgNTEyIDQ4My4zNDYgNTEyIDQ0OFYzODRINDY0VjQ0OFpNMTEyIDQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjIgNDggNDQ4VjQwMEgxMTJWNDY0Wk0xMTIgMzUySDQ4VjI4OEgxMTJWMzUyWk0xMTIgMjQwSDQ4VjE5MkM0OCAxODMuMTc4IDU1LjE3OCAxNzYgNjQgMTc2SDExMlYyNDBaTTU3NiAwSDI1NkMyMjAuNjUyIDAgMTkyIDI4LjY1MiAxOTIgNjRWMjg4QzE5MiAzMjMuMzQ2IDIyMC42NTIgMzUyIDI1NiAzNTJINTc2QzYxMS4zNDggMzUyIDY0MCAzMjMuMzQ2IDY0MCAyODhWNjRDNjQwIDI4LjY1MiA2MTEuMzQ4IDAgNTc2IDBaTTU5MiAyODhDNTkyIDI5Ni44MjIgNTg0LjgyMiAzMDQgNTc2IDMwNEw0NjYuNjUgMTQzLjEyNUM0NjMuNjgyIDEzOC42NzIgNDU4LjY4NiAxMzYgNDUzLjMzOCAxMzZDNDQ3Ljk4NiAxMzYgNDQyLjk5IDEzOC42NzIgNDQwLjAyNSAxNDMuMTI1TDM3Ny4yODEgMjM3LjIzNEwzNTQuOTMgMjA2LjU3NEMzNTEuOTE0IDIwMi40NDEgMzQ3LjEwOSAyMDAgMzQxLjk5OCAyMDBDMzM2Ljg4OSAyMDAgMzMyLjA4NCAyMDIuNDQxIDMyOS4wNjggMjA2LjU3NEwyNTYgMzA0QzI0Ny4xNzggMzA0IDI0MCAyOTYuODIyIDI0MCAyODhWNjRDMjQwIDU1LjE3OCAyNDcuMTc4IDQ4IDI1NiA0OEg1NzZDNTg0LjgyMiA0OCA1OTIgNTUuMTc4IDU5MiA2NFYyODhaTTMwMy45OTYgODBDMjg2LjMyNCA4MCAyNzEuOTk2IDk0LjMyOCAyNzEuOTk2IDExMlMyODYuMzI0IDE0NCAzMDMuOTk2IDE0NEMzMjEuNjc0IDE0NCAzMzUuOTk4IDEyOS42NzIgMzM1Ljk5OCAxMTJTMzIxLjY3NCA4MCAzMDMuOTk2IDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PhotoFilm(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M464 448C464 456.822 456.822 464 448 464H400V384H352V464H160V128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H448C483.346 512 512 483.346 512 448V384H464V448ZM112 464H64C55.178 464 48 456.822 48 448V400H112V464ZM112 352H48V288H112V352ZM112 240H48V192C48 183.178 55.178 176 64 176H112V240ZM576 0H256C220.652 0 192 28.652 192 64V288C192 323.346 220.652 352 256 352H576C611.348 352 640 323.346 640 288V64C640 28.652 611.348 0 576 0ZM592 288C592 296.822 584.822 304 576 304L466.65 143.125C463.682 138.672 458.686 136 453.338 136C447.986 136 442.99 138.672 440.025 143.125L377.281 237.234L354.93 206.574C351.914 202.441 347.109 200 341.998 200C336.889 200 332.084 202.441 329.068 206.574L256 304C247.178 304 240 296.822 240 288V64C240 55.178 247.178 48 256 48H576C584.822 48 592 55.178 592 64V288ZM303.996 80C286.324 80 271.996 94.328 271.996 112S286.324 144 303.996 144C321.674 144 335.998 129.672 335.998 112S321.674 80 303.996 80Z" />
        </Icon>
    </>
}