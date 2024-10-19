
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=regular square-right}
 * @preview ![square-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDguMTU2IDE1MC4yNDJDMjQxLjEyNSAxNDMuODM2IDIzMC45NjkgMTQyLjIxMSAyMjIuMjgxIDE0Ni4wNTVTMjA4IDE1OC40OTIgMjA4IDE2Ny45OTJWMjIzLjk5MkwxMjAgMjI0QzEwNi43NSAyMjQgOTYgMjM0Ljc1IDk2IDI0OFYyNjRDOTYgMjc3LjI1IDEwNi43NSAyODggMTIwIDI4OEwyMDggMjg3Ljk5MlYzNDMuOTkyQzIwOCAzNTMuNTIzIDIxMy42NTYgMzYyLjE0OCAyMjIuMzc1IDM2NS45OTJDMjMxLjEyNSAzNjkuODA1IDI0MS4yODEgMzY4LjA4NiAyNDguMjgxIDM2MS42MTdMMzQ0LjI4MSAyNzIuODY3QzM0OS4yMTkgMjY4LjMzNiAzNTIgMjYxLjkzIDM1MiAyNTUuMjQyQzM1MS42ODggMjQ3LjQ2MSAzNDkuMTI1IDI0MS45OTIgMzQ0LjE1NiAyMzcuNDkyTDI0OC4xNTYgMTUwLjI0MlpNMzg0IDMySDY0QzI4LjY1NiAzMiAwIDYwLjY1NiAwIDk2VjQxNkMwIDQ1MS4zNDQgMjguNjU2IDQ4MCA2NCA0ODBIMzg0QzQxOS4zNDQgNDgwIDQ0OCA0NTEuMzQ0IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1NiA0MTkuMzQ0IDMyIDM4NCAzMlpNNDAwIDQxNkM0MDAgNDI0LjgyIDM5Mi44MiA0MzIgMzg0IDQzMkg2NEM1NS4xOCA0MzIgNDggNDI0LjgyIDQ4IDQxNlY5NkM0OCA4Ny4xOCA1NS4xOCA4MCA2NCA4MEgzODRDMzkyLjgyIDgwIDQwMCA4Ny4xOCA0MDAgOTZWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M248.156 150.242C241.125 143.836 230.969 142.211 222.281 146.055S208 158.492 208 167.992V223.992L120 224C106.75 224 96 234.75 96 248V264C96 277.25 106.75 288 120 288L208 287.992V343.992C208 353.523 213.656 362.148 222.375 365.992C231.125 369.805 241.281 368.086 248.281 361.617L344.281 272.867C349.219 268.336 352 261.93 352 255.242C351.688 247.461 349.125 241.992 344.156 237.492L248.156 150.242ZM384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM400 416C400 424.82 392.82 432 384 432H64C55.18 432 48 424.82 48 416V96C48 87.18 55.18 80 64 80H384C392.82 80 400 87.18 400 96V416Z" />
        </Icon>
    </>
}