
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=light floppy-disks}
 * @preview ![floppy-disks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgNDgwSDk2QzYwLjY1NCA0ODAgMzIgNDUxLjM0NiAzMiA0MTZWMTEyQzMyIDEwMy4xNjQgMjQuODM2IDk2IDE2IDk2UzAgMTAzLjE2NCAwIDExMlY0MTZDMCA0NjkuMDIgNDIuOTggNTEyIDk2IDUxMkg0MDBDNDA4LjgzNiA1MTIgNDE2IDUwNC44MzYgNDE2IDQ5NlM0MDguODM2IDQ4MCA0MDAgNDgwWk00ODguNTYyIDk3LjkzOEw0MTQuMDYyIDIzLjQzOEMzOTguOTM4IDguMzI4IDM3OC44NzUgMCAzNTcuNSAwSDE3NkMxMzEuODc1IDAgOTYgMzUuODkxIDk2IDgwVjMzNkM5NiAzODAuMTA5IDEzMS44NzUgNDE2IDE3NiA0MTZINDMyQzQ3Ni4xMjUgNDE2IDUxMiAzODAuMTA5IDUxMiAzMzZWMTU0LjUxNkM1MTIgMTMzLjE0MSA1MDMuNjg4IDExMy4wNDcgNDg4LjU2MiA5Ny45MzhaTTE5MiAzMkgzNTJWMTEySDE5MlYzMlpNNDgwIDMzNkM0ODAgMzYyLjQ2OSA0NTguNDY5IDM4NCA0MzIgMzg0SDE3NkMxNDkuNTMxIDM4NCAxMjggMzYyLjQ2OSAxMjggMzM2VjgwQzEyOCA1OS4xNjggMTQxLjQxNiA0MS41NzQgMTYwIDM0Ljk0N1YxMTJDMTYwIDEyOS42NzIgMTc0LjMyNiAxNDQgMTkyIDE0NEgzNTJDMzY5LjY3NCAxNDQgMzg0IDEyOS42NzIgMzg0IDExMlY0MC4wMkMzODYuNjY0IDQxLjc3NyAzODkuMTY2IDQzLjc5MSAzOTEuNDM4IDQ2LjA2M0w0NjUuOTM4IDEyMC41NjNDNDc1IDEyOS42NDEgNDgwIDE0MS42ODggNDgwIDE1NC41MTZWMzM2Wk0yOTYgMTkyQzI1Ni4zMTIgMTkyIDIyNCAyMjQuMjk3IDIyNCAyNjRTMjU2LjMxMiAzMzYgMjk2IDMzNlMzNjggMzAzLjcwMyAzNjggMjY0UzMzNS42ODggMTkyIDI5NiAxOTJaTTI5NiAzMDRDMjczLjkzOCAzMDQgMjU2IDI4Ni4wNjIgMjU2IDI2NFMyNzMuOTM4IDIyNCAyOTYgMjI0UzMzNiAyNDEuOTM4IDMzNiAyNjRTMzE4LjA2MiAzMDQgMjk2IDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FloppyDisks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M400 480H96C60.654 480 32 451.346 32 416V112C32 103.164 24.836 96 16 96S0 103.164 0 112V416C0 469.02 42.98 512 96 512H400C408.836 512 416 504.836 416 496S408.836 480 400 480ZM488.562 97.938L414.062 23.438C398.938 8.328 378.875 0 357.5 0H176C131.875 0 96 35.891 96 80V336C96 380.109 131.875 416 176 416H432C476.125 416 512 380.109 512 336V154.516C512 133.141 503.688 113.047 488.562 97.938ZM192 32H352V112H192V32ZM480 336C480 362.469 458.469 384 432 384H176C149.531 384 128 362.469 128 336V80C128 59.168 141.416 41.574 160 34.947V112C160 129.672 174.326 144 192 144H352C369.674 144 384 129.672 384 112V40.02C386.664 41.777 389.166 43.791 391.438 46.063L465.938 120.563C475 129.641 480 141.688 480 154.516V336ZM296 192C256.312 192 224 224.297 224 264S256.312 336 296 336S368 303.703 368 264S335.688 192 296 192ZM296 304C273.938 304 256 286.062 256 264S273.938 224 296 224S336 241.938 336 264S318.062 304 296 304Z" />
        </Icon>
    </>
}