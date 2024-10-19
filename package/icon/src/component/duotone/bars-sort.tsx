
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-sort` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=duotone bars-sort}
 * @preview ![bars-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAyMjRIMzJDMTQuMzI3IDIyNCAwIDIzOC4zMjcgMCAyNTZWMjU2QzAgMjczLjY3MyAxNC4zMjcgMjg4IDMyIDI4OEgyODhDMzA1LjY3MyAyODggMzIwIDI3My42NzMgMzIwIDI1NlYyNTZDMzIwIDIzOC4zMjcgMzA1LjY3MyAyMjQgMjg4IDIyNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTYwIDM4NEgzMkMxNC4zMjcgMzg0IDAgMzk4LjMyNyAwIDQxNlY0MTZDMCA0MzMuNjczIDE0LjMyNyA0NDggMzIgNDQ4SDE2MEMxNzcuNjczIDQ0OCAxOTIgNDMzLjY3MyAxOTIgNDE2VjQxNkMxOTIgMzk4LjMyNyAxNzcuNjczIDM4NCAxNjAgMzg0Wk00MTYgNjRIMzJDMTQuMzI3IDY0IDAgNzguMzI3IDAgOTZWOTZDMCAxMTMuNjczIDE0LjMyNyAxMjggMzIgMTI4SDQxNkM0MzMuNjczIDEyOCA0NDggMTEzLjY3MyA0NDggOTZWOTZDNDQ4IDc4LjMyNyA0MzMuNjczIDY0IDQxNiA2NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BarsSort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M288 224H32C14.327 224 0 238.327 0 256V256C0 273.673 14.327 288 32 288H288C305.673 288 320 273.673 320 256V256C320 238.327 305.673 224 288 224Z" />
            <path d="M160 384H32C14.327 384 0 398.327 0 416V416C0 433.673 14.327 448 32 448H160C177.673 448 192 433.673 192 416V416C192 398.327 177.673 384 160 384ZM416 64H32C14.327 64 0 78.327 0 96V96C0 113.673 14.327 128 32 128H416C433.673 128 448 113.673 448 96V96C448 78.327 433.673 64 416 64Z" />
        </Icon>
    </>
}