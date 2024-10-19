
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `album` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=solid album}
 * @preview ![album](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjI0QzIwNi4zNzUgMjI0IDE5MiAyMzguMzc1IDE5MiAyNTZTMjA2LjM3NSAyODggMjI0IDI4OFMyNTYgMjczLjYyNSAyNTYgMjU2UzI0MS42MjUgMjI0IDIyNCAyMjRaTTM4NCAzMkg2NEMyOC44IDMyIDAgNjAuOCAwIDk2VjQxNkMwIDQ1MS4yIDI4LjggNDgwIDY0IDQ4MEgzODRDNDE5LjIgNDgwIDQ0OCA0NTEuMiA0NDggNDE2Vjk2QzQ0OCA2MC44IDQxOS4yIDMyIDM4NCAzMlpNMjI0IDQxNkMxMzUuNjI1IDQxNiA2NCAzNDQuMzc1IDY0IDI1NlMxMzUuNjI1IDk2IDIyNCA5NlMzODQgMTY3LjYyNSAzODQgMjU2UzMxMi4zNzUgNDE2IDIyNCA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Album(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 224C206.375 224 192 238.375 192 256S206.375 288 224 288S256 273.625 256 256S241.625 224 224 224ZM384 32H64C28.8 32 0 60.8 0 96V416C0 451.2 28.8 480 64 480H384C419.2 480 448 451.2 448 416V96C448 60.8 419.2 32 384 32ZM224 416C135.625 416 64 344.375 64 256S135.625 96 224 96S384 167.625 384 256S312.375 416 224 416Z" />
        </Icon>
    </>
}