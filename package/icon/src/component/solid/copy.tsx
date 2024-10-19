
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `copy` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=solid copy}
 * @preview ![copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgOTZWMEgyNzJDMjQ1LjQ5IDAgMjI0IDIxLjQ5MiAyMjQgNDhWMzM2QzIyNCAzNjIuNTA4IDI0NS40OSAzODQgMjcyIDM4NEg0NjRDNDkwLjUxIDM4NCA1MTIgMzYyLjUwOCA1MTIgMzM2VjEyOEg0MTZDMzk4LjQgMTI4IDM4NCAxMTMuNjAyIDM4NCA5NlpNNDE2IDBWOTZINTEyTDQxNiAwWk0xOTIgMzUyVjEyOEg0OEMyMS40OSAxMjggMCAxNDkuNDkgMCAxNzZWNDY0QzAgNDkwLjUxIDIxLjQ5IDUxMiA0OCA1MTJIMjQwQzI2Ni41MSA1MTIgMjg4IDQ5MC41MSAyODggNDY0VjQxNkgyNTZDMjIwLjY1NCA0MTYgMTkyIDM4Ny4zNDYgMTkyIDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Copy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M384 96V0H272C245.49 0 224 21.492 224 48V336C224 362.508 245.49 384 272 384H464C490.51 384 512 362.508 512 336V128H416C398.4 128 384 113.602 384 96ZM416 0V96H512L416 0ZM192 352V128H48C21.49 128 0 149.49 0 176V464C0 490.51 21.49 512 48 512H240C266.51 512 288 490.51 288 464V416H256C220.654 416 192 387.346 192 352Z" />
        </Icon>
    </>
}