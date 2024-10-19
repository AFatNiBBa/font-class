
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=light play}
 * @preview ![play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODkuMDMxIDIxNS4wNDdMMjAxLjAzMSAzOS4wNDdDMTkzLjM2NSAzNC4zNjcgMTg0LjY5NyAzMi4wMTYgMTc2LjAxMiAzMi4wMTZDMTQ4LjM5NiAzMi4wMTYgMTI4IDU0LjYxOSAxMjggODBWNDMyQzEyOCA0NTcuNjA3IDE0OC42MTUgNDgwIDE3NiA0ODBDMTg0LjY4OCA0ODAgMTkzLjM1OSA0NzcuNjQxIDIwMS4wMzEgNDcyLjk1M0w0ODkuMDMxIDI5Ni45NTNDNTAzLjI5NyAyODguMjM0IDUxMiAyNzIuNzE5IDUxMiAyNTZTNTAzLjI5NyAyMjMuNzY2IDQ4OS4wMzEgMjE1LjA0N1pNNDcyLjM0NiAyNjkuNjQ4TDE4NC4zNDggNDQ1LjY0NkMxODEuODI4IDQ0Ny4xODYgMTc4Ljk0MSA0NDggMTc2IDQ0OEMxNjYuMTE3IDQ0OCAxNjAgNDM5LjY5NSAxNjAgNDMyVjgwQzE2MCA3Mi4zMTIgMTY2LjEyMSA2NC4wMTYgMTc2LjAxMiA2NC4wMTZDMTc4Ljk2MSA2NC4wMTYgMTgxLjg0OCA2NC44MjYgMTg0LjM0NiA2Ni4zNTJMNDcyLjM0NCAyNDIuMzUyQzQ3Ny4wNjYgMjQ1LjIzNiA0ODAgMjUwLjQ2NyA0ODAgMjU2QzQ4MCAyNjEuNTMxIDQ3Ny4wNjYgMjY2Ljc2MiA0NzIuMzQ2IDI2OS42NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Play(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M489.031 215.047L201.031 39.047C193.365 34.367 184.697 32.016 176.012 32.016C148.396 32.016 128 54.619 128 80V432C128 457.607 148.615 480 176 480C184.688 480 193.359 477.641 201.031 472.953L489.031 296.953C503.297 288.234 512 272.719 512 256S503.297 223.766 489.031 215.047ZM472.346 269.648L184.348 445.646C181.828 447.186 178.941 448 176 448C166.117 448 160 439.695 160 432V80C160 72.312 166.121 64.016 176.012 64.016C178.961 64.016 181.848 64.826 184.346 66.352L472.344 242.352C477.066 245.236 480 250.467 480 256C480 261.531 477.066 266.762 472.346 269.648Z" />
        </Icon>
    </>
}