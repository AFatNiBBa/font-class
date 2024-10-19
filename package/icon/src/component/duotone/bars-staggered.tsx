
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-staggered` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=duotone bars-staggered}
 * @preview ![bars-staggered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAyNTZWMjU2QzUxMiAyNzMuNjczIDQ5Ny42NzMgMjg4IDQ4MCAyODhIOTZDNzguMzI3IDI4OCA2NCAyNzMuNjczIDY0IDI1NlYyNTZDNjQgMjM4LjMyNyA3OC4zMjcgMjI0IDk2IDIyNEg0ODBDNDk3LjY3MyAyMjQgNTEyIDIzOC4zMjcgNTEyIDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDE2IDM4NEgzMkMxNC4zMjcgMzg0IDAgMzk4LjMyNyAwIDQxNlY0MTZDMCA0MzMuNjczIDE0LjMyNyA0NDggMzIgNDQ4SDQxNkM0MzMuNjczIDQ0OCA0NDggNDMzLjY3MyA0NDggNDE2VjQxNkM0NDggMzk4LjMyNyA0MzMuNjczIDM4NCA0MTYgMzg0Wk00MTYgNjRIMzJDMTQuMzI3IDY0IDAgNzguMzI3IDAgOTZWOTZDMCAxMTMuNjczIDE0LjMyNyAxMjggMzIgMTI4SDQxNkM0MzMuNjczIDEyOCA0NDggMTEzLjY3MyA0NDggOTZWOTZDNDQ4IDc4LjMyNyA0MzMuNjczIDY0IDQxNiA2NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BarsStaggered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 256V256C512 273.673 497.673 288 480 288H96C78.327 288 64 273.673 64 256V256C64 238.327 78.327 224 96 224H480C497.673 224 512 238.327 512 256Z" />
            <path d="M416 384H32C14.327 384 0 398.327 0 416V416C0 433.673 14.327 448 32 448H416C433.673 448 448 433.673 448 416V416C448 398.327 433.673 384 416 384ZM416 64H32C14.327 64 0 78.327 0 96V96C0 113.673 14.327 128 32 128H416C433.673 128 448 113.673 448 96V96C448 78.327 433.673 64 416 64Z" />
        </Icon>
    </>
}