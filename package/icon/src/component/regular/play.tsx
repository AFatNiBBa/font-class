
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `play` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=regular play}
 * @preview ![play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODkuMDMxIDIxNS4wNDdMMjAxLjAzMSAzOS4wNDdDMTkzLjM2NSAzNC4zNjcgMTg0LjY5NyAzMi4wMTYgMTc2LjAxMiAzMi4wMTZDMTQ4LjM5NiAzMi4wMTYgMTI4IDU0LjYxOSAxMjggODBWNDMyQzEyOCA0NTcuNjA3IDE0OC42MTUgNDgwIDE3NiA0ODBDMTg0LjY4OCA0ODAgMTkzLjM1OSA0NzcuNjQxIDIwMS4wMzEgNDcyLjk1M0w0ODkuMDMxIDI5Ni45NTNDNTAzLjI5NyAyODguMjM0IDUxMiAyNzIuNzE5IDUxMiAyNTZTNTAzLjI5NyAyMjMuNzY2IDQ4OS4wMzEgMjE1LjA0N1pNMTc2IDQzMkwxNzUuODE2IDgwLjAyNUwxNzYuMDEyIDgwLjAxNkwxNzYuMDAyIDgwLjAwNEw0NjQuMDAyIDI1NS45OTZMMTc2IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Play(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M489.031 215.047L201.031 39.047C193.365 34.367 184.697 32.016 176.012 32.016C148.396 32.016 128 54.619 128 80V432C128 457.607 148.615 480 176 480C184.688 480 193.359 477.641 201.031 472.953L489.031 296.953C503.297 288.234 512 272.719 512 256S503.297 223.766 489.031 215.047ZM176 432L175.816 80.025L176.012 80.016L176.002 80.004L464.002 255.996L176 432Z" />
        </Icon>
    </>
}