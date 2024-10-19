
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=thin flag-pennant}
 * @preview ![flag-pennant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYuNTE2IDIwMS43OTNMMjEuNTIzIDI3LjA1MUwxNiAyNS4wMlY4QzE2IDMuNTgyIDEyLjQxOCAwIDggMFMwIDMuNTgyIDAgOFY1MDRDMCA1MDguNDA2IDMuNTk0IDUxMiA4IDUxMlMxNiA1MDguNDA2IDE2IDUwNFY0MjMuMjQ2TDIxLjUzMSA0MjEuMjA3TDQ5Ni41MTQgMjQ2LjIxMUM1MDYuMDcgMjQyLjY4NCA1MTIgMjM0LjE3MiA1MTIgMjIzLjk5NkM1MTIgMjEzLjk3MyA1MDUuOTIyIDIwNS4yNTggNDk2LjUxNiAyMDEuNzkzWk00OTAuOTgyIDIzMS4xOTlMMTYgNDA2LjE5NVY0Mi4wNjZMNDkwLjk4NCAyMTYuODA1QzQ5NS41MTIgMjE4LjQ3MyA0OTYgMjIyLjM5MSA0OTYgMjIzLjk5NkM0OTYgMjI1LjYwNSA0OTUuNTEyIDIyOS41MjcgNDkwLjk4MiAyMzEuMTk5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FlagPennant(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496.516 201.793L21.523 27.051L16 25.02V8C16 3.582 12.418 0 8 0S0 3.582 0 8V504C0 508.406 3.594 512 8 512S16 508.406 16 504V423.246L21.531 421.207L496.514 246.211C506.07 242.684 512 234.172 512 223.996C512 213.973 505.922 205.258 496.516 201.793ZM490.982 231.199L16 406.195V42.066L490.984 216.805C495.512 218.473 496 222.391 496 223.996C496 225.605 495.512 229.527 490.982 231.199Z" />
        </Icon>
    </>
}