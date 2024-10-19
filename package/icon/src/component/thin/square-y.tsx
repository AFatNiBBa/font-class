
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-y` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=thin square-y}
 * @preview ![square-y](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMzM3LjkyMiAxMzAuNzk3TDIyNCAyNjMuNzAzTDExMC4wNzggMTMwLjc5N0MxMDcuMjAzIDEyNy40NTMgMTAyLjE1NiAxMjcuMDk0IDk4Ljc5NyAxMjkuOTIyQzk1LjQzOCAxMzIuNzk3IDk1LjA0NyAxMzcuODU5IDk3LjkyMiAxNDEuMjAzTDIxNiAyNzguOTYxVjM3NkMyMTYgMzgwLjQyMiAyMTkuNTc4IDM4NCAyMjQgMzg0UzIzMiAzODAuNDIyIDIzMiAzNzZWMjc4Ljk2MUwzNTAuMDc4IDE0MS4yMDNDMzUyLjk1MyAxMzcuODU5IDM1Mi41NjIgMTMyLjc5NyAzNDkuMjAzIDEyOS45MjJDMzQ1Ljg3NSAxMjcuMDQ3IDM0MC44MjggMTI3LjQ1MyAzMzcuOTIyIDEzMC43OTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareY(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM337.922 130.797L224 263.703L110.078 130.797C107.203 127.453 102.156 127.094 98.797 129.922C95.438 132.797 95.047 137.859 97.922 141.203L216 278.961V376C216 380.422 219.578 384 224 384S232 380.422 232 376V278.961L350.078 141.203C352.953 137.859 352.562 132.797 349.203 129.922C345.875 127.047 340.828 127.453 337.922 130.797Z" />
        </Icon>
    </>
}