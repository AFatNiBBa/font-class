
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-medical` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-medical?s=solid folder-medical}
 * @preview ![folder-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIwOCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwVjQzMkMwIDQ1OC41IDIxLjUgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUgNDgwIDUxMiA0NTguNSA1MTIgNDMyVjE0NEM1MTIgMTE3LjUgNDkwLjUgOTYgNDY0IDk2Wk0zNTIgMzA2LjI4NUMzNTIgMzEzLjg1OSAzNDUuODU5IDMyMCAzMzguMjg1IDMyMEgyODhWMzcwLjI4NUMyODggMzc3Ljg1OSAyODEuODU5IDM4NCAyNzQuMjg1IDM4NEgyMzcuNzE1QzIzMC4xNDEgMzg0IDIyNCAzNzcuODU5IDIyNCAzNzAuMjg1VjMyMEgxNzMuNzE1QzE2Ni4xNDEgMzIwIDE2MCAzMTMuODU5IDE2MCAzMDYuMjg1VjI2OS43MTFDMTYwIDI2Mi4xNDEgMTY2LjE0MSAyNTYgMTczLjcxNSAyNTZIMjI0VjIwNS43MTFDMjI0IDE5OC4xNDEgMjMwLjE0MSAxOTIgMjM3LjcxNSAxOTJIMjc0LjI4NUMyODEuODU5IDE5MiAyODggMTk4LjE0MSAyODggMjA1LjcxMVYyNTZIMzM4LjI4NUMzNDUuODU5IDI1NiAzNTIgMjYyLjE0MSAzNTIgMjY5LjcxMVYzMDYuMjg1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FolderMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM352 306.285C352 313.859 345.859 320 338.285 320H288V370.285C288 377.859 281.859 384 274.285 384H237.715C230.141 384 224 377.859 224 370.285V320H173.715C166.141 320 160 313.859 160 306.285V269.711C160 262.141 166.141 256 173.715 256H224V205.711C224 198.141 230.141 192 237.715 192H274.285C281.859 192 288 198.141 288 205.711V256H338.285C345.859 256 352 262.141 352 269.711V306.285Z" />
        </Icon>
    </>
}