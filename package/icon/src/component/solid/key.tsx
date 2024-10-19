
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `key` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=solid key}
 * @preview ![key](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEMyMzguNzk3IDAgMTYwIDc4Ljc5NyAxNjAgMTc2QzE2MCAxOTAuNzE1IDE2Mi4wMDQgMjA0LjkzIDE2NS40MDYgMjE4LjU5NEw5LjM3NSAzNzQuNjI1QzMuMzcxIDM4MC42MjkgMCAzODguNzY2IDAgMzk3LjI1NFY0OTZDMCA1MDQuODM2IDcuMTY0IDUxMiAxNiA1MTJIMTEyQzEyMC44MzYgNTEyIDEyOCA1MDQuODM2IDEyOCA0OTZWNDQ4SDE3NkMxODQuODM2IDQ0OCAxOTIgNDQwLjgzNiAxOTIgNDMyVjM4NEgyNDkuMzc1QzI1My42MTcgMzg0IDI1Ny42ODggMzgyLjMxMiAyNjAuNjg4IDM3OS4zMTJMMjkzLjQwNiAzNDYuNTk0QzMwNy4wNyAzNDkuOTkyIDMyMS4yODEgMzUyIDMzNiAzNTJDNDMzLjIwMyAzNTIgNTEyIDI3My4yMDMgNTEyIDE3NlM0MzMuMjAzIDAgMzM2IDBaTTM3NiAxNzZDMzUzLjkwNiAxNzYgMzM2IDE1OC4wOTQgMzM2IDEzNlMzNTMuOTA2IDk2IDM3NiA5NlM0MTYgMTEzLjkwNiA0MTYgMTM2UzM5OC4wOTQgMTc2IDM3NiAxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Key(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M336 0C238.797 0 160 78.797 160 176C160 190.715 162.004 204.93 165.406 218.594L9.375 374.625C3.371 380.629 0 388.766 0 397.254V496C0 504.836 7.164 512 16 512H112C120.836 512 128 504.836 128 496V448H176C184.836 448 192 440.836 192 432V384H249.375C253.617 384 257.688 382.312 260.688 379.312L293.406 346.594C307.07 349.992 321.281 352 336 352C433.203 352 512 273.203 512 176S433.203 0 336 0ZM376 176C353.906 176 336 158.094 336 136S353.906 96 376 96S416 113.906 416 136S398.094 176 376 176Z" />
        </Icon>
    </>
}