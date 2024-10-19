
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bus-simple` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bus-simple?s=thin bus-simple}
 * @preview ![bus-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMzkyQzM3NC4wNyAzOTIgMzkyIDM3NC4wOSAzOTIgMzUyUzM3NC4wNyAzMTIgMzUyIDMxMlMzMTIgMzI5LjkxIDMxMiAzNTJTMzI5LjkzIDM5MiAzNTIgMzkyWk0zNTIgMzI4QzM2NS4yMzQgMzI4IDM3NiAzMzguNzY2IDM3NiAzNTJDMzc2IDM2NS4yMzIgMzY1LjIzNCAzNzYgMzUyIDM3NlMzMjggMzY1LjIzMiAzMjggMzUyQzMyOCAzMzguNzY2IDMzOC43NjYgMzI4IDM1MiAzMjhaTTIyNCAwQzk5LjE4OCAwIDAgMzUuMjAzIDAgODBWNDE2QzAgNDMzLjY3MyAxNC4zMjcgNDQ4IDMyIDQ0OEg0OFY1MDRDNDggNTA4LjQxOCA1MS41ODIgNTEyIDU2IDUxMkg1NkM2MC40MTggNTEyIDY0IDUwOC40MTggNjQgNTA0VjQ0OEgzODRWNTA0QzM4NCA1MDguNDE4IDM4Ny41ODIgNTEyIDM5MiA1MTJMMzkyIDUxMkMzOTYuNDE4IDUxMiA0MDAgNTA4LjQxOCA0MDAgNTA0VjQ0OEg0MjIuNDA2QzQzOC40MDYgNDQ4IDQ0OCA0MzUuMjAzIDQ0OCA0MjIuNDA2VjgwQzQ0OCAzNS4yMDMgMzQ4LjgxMiAwIDIyNCAwWk00MzIgNDIyLjQwNkM0MzIgNDI1LjcyNSA0MjkuOTk2IDQzMiA0MjIuNDA2IDQzMkgzMkMyMy4xNzYgNDMyIDE2IDQyNC44MjIgMTYgNDE2VjI3Mkg0MzJWNDIyLjQwNlpNNDMyIDI1NkgxNlYxMTJINDMyVjI1NlpNNDMyIDk2SDE2VjgwQzE2IDUzLjI3NSA5NS4xMjkgMTYgMjI0IDE2UzQzMiA1My4yNzUgNDMyIDgwVjk2Wk05NiAzOTJDMTE4LjA3IDM5MiAxMzYgMzc0LjA5IDEzNiAzNTJTMTE4LjA3IDMxMiA5NiAzMTJTNTYgMzI5LjkxIDU2IDM1MlM3My45MyAzOTIgOTYgMzkyWk05NiAzMjhDMTA5LjIzNCAzMjggMTIwIDMzOC43NjYgMTIwIDM1MkMxMjAgMzY1LjIzMiAxMDkuMjM0IDM3NiA5NiAzNzZTNzIgMzY1LjIzMiA3MiAzNTJDNzIgMzM4Ljc2NiA4Mi43NjYgMzI4IDk2IDMyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BusSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 392C374.07 392 392 374.09 392 352S374.07 312 352 312S312 329.91 312 352S329.93 392 352 392ZM352 328C365.234 328 376 338.766 376 352C376 365.232 365.234 376 352 376S328 365.232 328 352C328 338.766 338.766 328 352 328ZM224 0C99.188 0 0 35.203 0 80V416C0 433.673 14.327 448 32 448H48V504C48 508.418 51.582 512 56 512H56C60.418 512 64 508.418 64 504V448H384V504C384 508.418 387.582 512 392 512L392 512C396.418 512 400 508.418 400 504V448H422.406C438.406 448 448 435.203 448 422.406V80C448 35.203 348.812 0 224 0ZM432 422.406C432 425.725 429.996 432 422.406 432H32C23.176 432 16 424.822 16 416V272H432V422.406ZM432 256H16V112H432V256ZM432 96H16V80C16 53.275 95.129 16 224 16S432 53.275 432 80V96ZM96 392C118.07 392 136 374.09 136 352S118.07 312 96 312S56 329.91 56 352S73.93 392 96 392ZM96 328C109.234 328 120 338.766 120 352C120 365.232 109.234 376 96 376S72 365.232 72 352C72 338.766 82.766 328 96 328Z" />
        </Icon>
    </>
}