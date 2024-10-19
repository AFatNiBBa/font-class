
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-arrow-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=thin book-arrow-up}
 * @preview ![book-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTMuMDcgMjQ4LjQ4NEMzNTYuMTk1IDI0NS4zNTkgMzU2LjE5NSAyNDAuMjk3IDM1My4wNyAyMzcuMTcyTDI0Ni4yNDIgMTMwLjM0NEMyNDMuMTE3IDEyNy4yMTkgMjM4LjA1NSAxMjcuMjE5IDIzNC45MyAxMzAuMzQ0TDEyNi45MyAyMzguMzQ0QzEyNS4zNjcgMjM5LjkwNiAxMjQuNTg2IDI0MS45MzggMTI0LjU4NiAyNDRTMTI1LjM2NyAyNDguMDk0IDEyNi45MyAyNDkuNjU2QzEzMC4wNTUgMjUyLjc4MSAxMzUuMTE3IDI1Mi43ODEgMTM4LjI0MiAyNDkuNjU2TDIzMi41ODYgMTU1LjMxMlY1MDRDMjMyLjU4NiA1MDguNDA2IDIzNi4xNjQgNTEyIDI0MC41ODYgNTEyUzI0OC41ODYgNTA4LjQwNiAyNDguNTg2IDUwNFYxNTUuMzEyTDM0MS43NTggMjQ4LjQ4NEMzNDQuODgzIDI1MS42MDkgMzQ5Ljk0NSAyNTEuNjA5IDM1My4wNyAyNDguNDg0Wk00NDggMzg0LjAwNlYzMkM0NDggMTQuMzI2IDQzMy42NzIgMCA0MTYgMEg2NEMyOC42NTYgMCAwIDI4LjY1MiAwIDY0VjQ1NS45OUMwIDQ4Ni45MTggMjUuMDcgNTExLjk5MiA1NiA1MTEuOTkyTDE4NCA1MTEuOTk0QzE4OC40MTggNTExLjk5NCAxOTIgNTA4LjQxMiAxOTIgNTAzLjk5NFY1MDMuOTlDMTkyIDQ5OS41NzIgMTg4LjQxOCA0OTUuOTkyIDE4NCA0OTUuOTkySDU2QzMyLjYyNSA0OTUuOTkyIDEzLjg3NSA0NzUuODQ4IDE2LjE5NSA0NTIuMDAyQzE4LjIxOSA0MzEuMjE5IDM2Ljg5OCA0MTUuOTg4IDU3Ljc4MSA0MTUuOTlMMTg0IDQxNS45OTZDMTg4LjQxOCA0MTUuOTk2IDE5MiA0MTIuNDE0IDE5MiA0MDcuOTk2UzE4OC40MTggMzk5Ljk5OCAxODQgMzk5Ljk5OEw1NiAzOTkuOTk0QzQwLjMyNCAzOTkuOTk0IDI2LjE3NiA0MDYuNTEgMTYgNDE2LjkyOFY2NEMxNiAzNy40OSAzNy40OTIgMTYgNjQgMTZINDE2QzQyNC44MzYgMTYgNDMyIDIzLjE2MiA0MzIgMzJWMzg0LjAwNkM0MzIgMzkyLjg0MiA0MjQuODM2IDQwMC4wMDYgNDE2IDQwMC4wMDZMMjk2IDQwMC4wMDJDMjkxLjU4MiA0MDAuMDAyIDI4OCA0MDMuNTgyIDI4OCA0MDhTMjkxLjU3OCA0MTYgMjk2IDQxNkw0MDAgNDE2LjAwNlY0OTUuOTkySDI5NkMyOTEuNTgyIDQ5NS45OTIgMjg4IDQ5OS41NzIgMjg4IDUwMy45OVY1MDMuOTk2QzI4OCA1MDguNDE0IDI5MS41ODIgNTExLjk5NiAyOTYgNTExLjk5Nkw0MzkuOTkyIDUxMkM0NDQuNDE0IDUxMi4wMDQgNDQ4IDUwOC40MTggNDQ4IDUwNEM0NDggNDk5LjU3OCA0NDQuNDE0IDQ5NS45OTIgNDM5Ljk5MiA0OTUuOTkySDQxNlY0MTYuMDA2QzQzMy42NzIgNDE2LjAwNiA0NDggNDAxLjY3OCA0NDggMzg0LjAwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M353.07 248.484C356.195 245.359 356.195 240.297 353.07 237.172L246.242 130.344C243.117 127.219 238.055 127.219 234.93 130.344L126.93 238.344C125.367 239.906 124.586 241.938 124.586 244S125.367 248.094 126.93 249.656C130.055 252.781 135.117 252.781 138.242 249.656L232.586 155.312V504C232.586 508.406 236.164 512 240.586 512S248.586 508.406 248.586 504V155.312L341.758 248.484C344.883 251.609 349.945 251.609 353.07 248.484ZM448 384.006V32C448 14.326 433.672 0 416 0H64C28.656 0 0 28.652 0 64V455.99C0 486.918 25.07 511.992 56 511.992L184 511.994C188.418 511.994 192 508.412 192 503.994V503.99C192 499.572 188.418 495.992 184 495.992H56C32.625 495.992 13.875 475.848 16.195 452.002C18.219 431.219 36.898 415.988 57.781 415.99L184 415.996C188.418 415.996 192 412.414 192 407.996S188.418 399.998 184 399.998L56 399.994C40.324 399.994 26.176 406.51 16 416.928V64C16 37.49 37.492 16 64 16H416C424.836 16 432 23.162 432 32V384.006C432 392.842 424.836 400.006 416 400.006L296 400.002C291.582 400.002 288 403.582 288 408S291.578 416 296 416L400 416.006V495.992H296C291.582 495.992 288 499.572 288 503.99V503.996C288 508.414 291.582 511.996 296 511.996L439.992 512C444.414 512.004 448 508.418 448 504C448 499.578 444.414 495.992 439.992 495.992H416V416.006C433.672 416.006 448 401.678 448 384.006Z" />
        </Icon>
    </>
}