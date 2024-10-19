
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-from-line` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-line?s=duotone arrow-down-from-line}
 * @preview ![arrow-down-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDk2SDM1MkMzNjkuNjg4IDk2IDM4NCA4MS42ODggMzg0IDY0UzM2OS42ODggMzIgMzUyIDMySDMyQzE0LjMxMiAzMiAwIDQ2LjMxMiAwIDY0UzE0LjMxMiA5NiAzMiA5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzQyLjYyNSAyOTcuMzc1QzM1NS4xMjUgMzA5Ljg3NSAzNTUuMTI1IDMzMC4xMjUgMzQyLjYyNSAzNDIuNjI1TDIxNC42MjUgNDcwLjYyNUMyMDIuMTI1IDQ4My4xMjUgMTgxLjg3NSA0ODMuMTI1IDE2OS4zNzUgNDcwLjYyNUw0MS4zNzUgMzQyLjYyNUMyOC44NzUgMzMwLjEyNSAyOC44NzUgMzA5Ljg3NSA0MS4zNzUgMjk3LjM3NUM0Ny42MjUgMjkxLjEyNSA1NS44MTMgMjg4IDY0IDI4OFM4MC4zNzUgMjkxLjEyNSA4Ni42MjUgMjk3LjM3NUwxNjAgMzcwLjc1VjE5MkMxNjAgMTc0LjMxMiAxNzQuMzEzIDE2MCAxOTIgMTYwUzIyNCAxNzQuMzEyIDIyNCAxOTJWMzcwLjc1TDI5Ny4zNzUgMjk3LjM3NUMzMDkuODc1IDI4NC44NzUgMzMwLjEyNSAyODQuODc1IDM0Mi42MjUgMjk3LjM3NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M32 96H352C369.688 96 384 81.688 384 64S369.688 32 352 32H32C14.312 32 0 46.312 0 64S14.312 96 32 96Z" />
            <path d="M342.625 297.375C355.125 309.875 355.125 330.125 342.625 342.625L214.625 470.625C202.125 483.125 181.875 483.125 169.375 470.625L41.375 342.625C28.875 330.125 28.875 309.875 41.375 297.375C47.625 291.125 55.813 288 64 288S80.375 291.125 86.625 297.375L160 370.75V192C160 174.312 174.313 160 192 160S224 174.312 224 192V370.75L297.375 297.375C309.875 284.875 330.125 284.875 342.625 297.375Z" />
        </Icon>
    </>
}