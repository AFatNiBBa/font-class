
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `yin-yang` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=solid yin-yang}
 * @preview ![yin-yang](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTI4QzIzOC4zMiAxMjggMjI0LjAzMSAxNDIuMzc1IDIyNC4wMzEgMTYwUzIzOC4zMiAxOTIgMjU2IDE5MlMyODcuOTY5IDE3Ny42MjUgMjg3Ljk2OSAxNjBTMjczLjY4IDEyOCAyNTYgMTI4Wk0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE4IDE2IDI1NkMxNiAzODguNTc4IDEyMy40NjEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NzggNDk2IDI1NkM0OTYgMTIzLjQxOCAzODguNTM5IDE2IDI1NiAxNlpNMjU2IDM4NEMyMzguMzIgMzg0IDIyNC4wMzEgMzY5LjYyNSAyMjQuMDMxIDM1MlMyMzguMzIgMzIwIDI1NiAzMjBTMjg3Ljk2OSAzMzQuMzc1IDI4Ny45NjkgMzUyUzI3My42OCAzODQgMjU2IDM4NFpNMjU2IDI1NkMyMDIuOTYxIDI1NiAxNTkuOTczIDI5OSAxNTkuOTczIDM1MlMyMDIuOTYxIDQ0OCAyNTYgNDQ4QzE0OS45MjIgNDQ4IDYzLjk0NSAzNjIgNjMuOTQ1IDI1NkM2My45NDUgMTUwIDE0OS45MjIgNjQgMjU2IDY0QzMwOS4wMzkgNjQgMzUyLjAyNyAxMDcgMzUyLjAyNyAxNjBTMzA5LjAzOSAyNTYgMjU2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function YinYang(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 128C238.32 128 224.031 142.375 224.031 160S238.32 192 256 192S287.969 177.625 287.969 160S273.68 128 256 128ZM256 16C123.461 16 16 123.418 16 256C16 388.578 123.461 496 256 496S496 388.578 496 256C496 123.418 388.539 16 256 16ZM256 384C238.32 384 224.031 369.625 224.031 352S238.32 320 256 320S287.969 334.375 287.969 352S273.68 384 256 384ZM256 256C202.961 256 159.973 299 159.973 352S202.961 448 256 448C149.922 448 63.945 362 63.945 256C63.945 150 149.922 64 256 64C309.039 64 352.027 107 352.027 160S309.039 256 256 256Z" />
        </Icon>
    </>
}