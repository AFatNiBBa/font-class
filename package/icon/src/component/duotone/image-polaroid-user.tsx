
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid-user` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid-user?s=duotone image-polaroid-user}
 * @preview ![image-polaroid-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCAzMkg0OEMyMS42IDMyIDAgNTMuNjAyIDAgODBWNDMyQzAgNDU4LjM5OCAyMS42IDQ4MCA0OCA0ODBINDAwQzQyNi40IDQ4MCA0NDggNDU4LjM5OCA0NDggNDMyVjgwQzQ0OCA1My42MDIgNDI2LjQgMzIgNDAwIDMyWk0zODQgMzUySDY0Vjk2SDM4NFYzNTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIyNCAyNTZDMjU5LjM0NiAyNTYgMjg4IDIyNy4zNDQgMjg4IDE5MlMyNTkuMzQ2IDEyOCAyMjQgMTI4UzE2MCAxNTYuNjU2IDE2MCAxOTJTMTg4LjY1NCAyNTYgMjI0IDI1NlpNMzg0IDM1MkgzMzZWMzUyQzMzNiAzMTYuNjU0IDMwNy4zNDYgMjg4IDI3MiAyODhIMTc2QzE0MC42NTQgMjg4IDExMiAzMTYuNjU0IDExMiAzNTJWMzUySDY0Vjk2SDM4NFYzNTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ImagePolaroidUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M400 32H48C21.6 32 0 53.602 0 80V432C0 458.398 21.6 480 48 480H400C426.4 480 448 458.398 448 432V80C448 53.602 426.4 32 400 32ZM384 352H64V96H384V352Z" />
            <path d="M224 256C259.346 256 288 227.344 288 192S259.346 128 224 128S160 156.656 160 192S188.654 256 224 256ZM384 352H336V352C336 316.654 307.346 288 272 288H176C140.654 288 112 316.654 112 352V352H64V96H384V352Z" />
        </Icon>
    </>
}