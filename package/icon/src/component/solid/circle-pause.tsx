
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-pause` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-pause?s=solid circle-pause}
 * @preview ![circle-pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTIyNCAxOTJWMzIwQzIyNCAzMzcuNjczIDIwOS42NzMgMzUyIDE5MiAzNTJIMTkyQzE3NC4zMjcgMzUyIDE2MCAzMzcuNjczIDE2MCAzMjBWMTkyQzE2MCAxNzQuMzI3IDE3NC4zMjcgMTYwIDE5MiAxNjBIMTkyQzIwOS42NzMgMTYwIDIyNCAxNzQuMzI3IDIyNCAxOTJaTTM1MiAxOTJWMzIwQzM1MiAzMzcuNjczIDMzNy42NzMgMzUyIDMyMCAzNTJIMzIwQzMwMi4zMjcgMzUyIDI4OCAzMzcuNjczIDI4OCAzMjBWMTkyQzI4OCAxNzQuMzI3IDMwMi4zMjcgMTYwIDMyMCAxNjBIMzIwQzMzNy42NzMgMTYwIDM1MiAxNzQuMzI3IDM1MiAxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CirclePause(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM224 192V320C224 337.673 209.673 352 192 352H192C174.327 352 160 337.673 160 320V192C160 174.327 174.327 160 192 160H192C209.673 160 224 174.327 224 192ZM352 192V320C352 337.673 337.673 352 320 352H320C302.327 352 288 337.673 288 320V192C288 174.327 302.327 160 320 160H320C337.673 160 352 174.327 352 192Z" />
        </Icon>
    </>
}