
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `key` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=regular key}
 * @preview ![key](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjguNSAwQzIyNy4zMTIgMCAxNDUgODIuMzEyIDE0NSAxODMuNUMxNDUgMTkzLjYyNSAxNDUuOTA2IDIwMy45MzggMTQ3LjcxOSAyMTQuMzEyTDE1LjUzMSAzNDYuNTMxQzUuNSAzNTYuNTMxIDAgMzY5Ljg0NCAwIDM4NFY0NzMuNUMwIDQ5NC43MTkgMTcuMjgxIDUxMiAzOC41IDUxMkgxMjUuNUMxNDYuNzE5IDUxMiAxNjQgNDk0LjcxOSAxNjQgNDczLjVWNDU0SDE4My41QzIwNC43MTkgNDU0IDIyMiA0MzYuNzE5IDIyMiA0MTUuNVYzOTZIMjUwQzI2MC4yODEgMzk2IDI2OS45MzggMzkyIDI3Ny4yMTkgMzg0LjcxOUwyOTcuNjg4IDM2NC4yODFDNDExLjg3NSAzODQuMzEyIDUxMiAyOTQuODEyIDUxMiAxODMuNUM1MTIgODIuMzEyIDQyOS42ODggMCAzMjguNSAwWk0yOTUuNzE5IDMxNC44MTJMMjgyLjUzMSAzMTEuNUwyNDYuMDYyIDM0OEgxNzRWNDA2SDExNlY0NjRINDhWMzg0QzQ4IDM4Mi42ODggNDguNTMxIDM4MS40MDYgNDkuNDY5IDM4MC40NjlMMjAwLjUgMjI5LjQ2OUwxOTcuMTg4IDIxNi4yODFDMTk0LjQwNiAyMDUuMTU2IDE5MyAxOTQuMTI1IDE5MyAxODMuNUMxOTMgMTA4Ljc4MSAyNTMuNzgxIDQ4IDMyOC41IDQ4UzQ2NCAxMDguNzgxIDQ2NCAxODMuNUM0NjQgMjY4Ljg0NCAzODUuMTI1IDMzNy4xMjUgMjk1LjcxOSAzMTQuODEyWk0zNjggMTEyQzM1MC4zMjYgMTEyIDMzNiAxMjYuMzI2IDMzNiAxNDRDMzM2IDE2MS42NzIgMzUwLjMyNiAxNzYgMzY4IDE3NlM0MDAgMTYxLjY3MiA0MDAgMTQ0QzQwMCAxMjYuMzI2IDM4NS42NzQgMTEyIDM2OCAxMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Key(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M328.5 0C227.312 0 145 82.312 145 183.5C145 193.625 145.906 203.938 147.719 214.312L15.531 346.531C5.5 356.531 0 369.844 0 384V473.5C0 494.719 17.281 512 38.5 512H125.5C146.719 512 164 494.719 164 473.5V454H183.5C204.719 454 222 436.719 222 415.5V396H250C260.281 396 269.938 392 277.219 384.719L297.688 364.281C411.875 384.312 512 294.812 512 183.5C512 82.312 429.688 0 328.5 0ZM295.719 314.812L282.531 311.5L246.062 348H174V406H116V464H48V384C48 382.688 48.531 381.406 49.469 380.469L200.5 229.469L197.188 216.281C194.406 205.156 193 194.125 193 183.5C193 108.781 253.781 48 328.5 48S464 108.781 464 183.5C464 268.844 385.125 337.125 295.719 314.812ZM368 112C350.326 112 336 126.326 336 144C336 161.672 350.326 176 368 176S400 161.672 400 144C400 126.326 385.674 112 368 112Z" />
        </Icon>
    </>
}