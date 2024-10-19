
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=solid chess-rook}
 * @preview ![chess-rook](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMzJIMzEyQzMwMy4xMjUgMzIgMjk2IDM5LjEyNSAyOTYgNDhWOTZIMjQ4VjQ4QzI0OCAzOS4xMjUgMjQwLjg3NSAzMiAyMzIgMzJIMTUyQzE0My4xMjUgMzIgMTM2IDM5LjEyNSAxMzYgNDhWOTZIODguMTI1VjQ4Qzg4LjEyNSAzOS4xMjUgODAuODc1IDMyIDcyLjEyNSAzMkgxNkM3LjEyNSAzMiAwIDM5LjEyNSAwIDQ4VjIyNEw2NCAyNTZDNjQgMzA0LjM3NSA2Mi41IDM1MSA1MC43NSA0MTZIMzMzLjI1QzMyMS41IDM1MSAzMjAgMzAzLjc1IDMyMCAyNTZMMzg0IDIyNFY0OEMzODQgMzkuMTI1IDM3Ni44NzUgMzIgMzY4IDMyWk0yMjQgMzIwSDE2MFYyNTZDMTYwIDIzOC4zNzUgMTc0LjM3NSAyMjQgMTkyIDIyNFMyMjQgMjM4LjM3NSAyMjQgMjU2VjMyMFpNMzM2IDQ0OEg0OEMyMS40OSA0NDggMCA0NjkuNDkgMCA0OTZWNDk2QzAgNTA0LjgzNyA3LjE2MyA1MTIgMTYgNTEySDM2OEMzNzYuODM3IDUxMiAzODQgNTA0LjgzNyAzODQgNDk2VjQ5NkMzODQgNDY5LjQ5IDM2Mi41MSA0NDggMzM2IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChessRook(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 32H312C303.125 32 296 39.125 296 48V96H248V48C248 39.125 240.875 32 232 32H152C143.125 32 136 39.125 136 48V96H88.125V48C88.125 39.125 80.875 32 72.125 32H16C7.125 32 0 39.125 0 48V224L64 256C64 304.375 62.5 351 50.75 416H333.25C321.5 351 320 303.75 320 256L384 224V48C384 39.125 376.875 32 368 32ZM224 320H160V256C160 238.375 174.375 224 192 224S224 238.375 224 256V320ZM336 448H48C21.49 448 0 469.49 0 496V496C0 504.837 7.163 512 16 512H368C376.837 512 384 504.837 384 496V496C384 469.49 362.51 448 336 448Z" />
        </Icon>
    </>
}