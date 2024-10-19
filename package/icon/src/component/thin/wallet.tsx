
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=thin wallet}
 * @preview ![wallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDAgMTEySDcyQzY3LjU5NCAxMTIgNjQgMTE1LjU5NCA2NCAxMjBTNjcuNTk0IDEyOCA3MiAxMjhINDQwQzQ3MC44NzUgMTI4IDQ5NiAxNTMuMTI1IDQ5NiAxODRWNDA4QzQ5NiA0MzguODc1IDQ3MC44NzUgNDY0IDQ0MCA0NjRINzJDNDEuMTI1IDQ2NCAxNiA0MzguODc1IDE2IDQwOFYxMDRDMTYgNzMuMTI1IDQxLjEyNSA0OCA3MiA0OEg0NzJDNDc2LjQwNiA0OCA0ODAgNDQuNDA2IDQ4MCA0MFM0NzYuNDA2IDMyIDQ3MiAzMkg3MkMzMi4zMTIgMzIgMCA2NC4zMTIgMCAxMDRWNDA4QzAgNDQ3LjY4OCAzMi4zMTIgNDgwIDcyIDQ4MEg0NDBDNDc5LjY4OCA0ODAgNTEyIDQ0Ny42ODggNTEyIDQwOFYxODRDNTEyIDE0NC4zMTIgNDc5LjY4OCAxMTIgNDQwIDExMlpNNDQwIDI5NkM0NDAgMjczLjkzOCA0MjIuMDYyIDI1NiA0MDAgMjU2UzM2MCAyNzMuOTM4IDM2MCAyOTZTMzc3LjkzOCAzMzYgNDAwIDMzNlM0NDAgMzE4LjA2MiA0NDAgMjk2Wk0zNzYgMjk2QzM3NiAyODIuNzgxIDM4Ni43ODEgMjcyIDQwMCAyNzJTNDI0IDI4Mi43ODEgNDI0IDI5NlM0MTMuMjE5IDMyMCA0MDAgMzIwUzM3NiAzMDkuMjE5IDM3NiAyOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Wallet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M440 112H72C67.594 112 64 115.594 64 120S67.594 128 72 128H440C470.875 128 496 153.125 496 184V408C496 438.875 470.875 464 440 464H72C41.125 464 16 438.875 16 408V104C16 73.125 41.125 48 72 48H472C476.406 48 480 44.406 480 40S476.406 32 472 32H72C32.312 32 0 64.312 0 104V408C0 447.688 32.312 480 72 480H440C479.688 480 512 447.688 512 408V184C512 144.312 479.688 112 440 112ZM440 296C440 273.938 422.062 256 400 256S360 273.938 360 296S377.938 336 400 336S440 318.062 440 296ZM376 296C376 282.781 386.781 272 400 272S424 282.781 424 296S413.219 320 400 320S376 309.219 376 296Z" />
        </Icon>
    </>
}