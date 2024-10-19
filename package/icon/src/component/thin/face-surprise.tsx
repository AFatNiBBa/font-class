
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-surprise` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-surprise?s=thin face-surprise}
 * @preview ![face-surprise](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0xNzYgMTkyQzE2Ny4xNjQgMTkyIDE2MCAxOTkuMTYyIDE2MCAyMDhDMTYwIDIxNi44MzYgMTY3LjE2NCAyMjQgMTc2IDIyNFMxOTIgMjE2LjgzNiAxOTIgMjA4QzE5MiAxOTkuMTYyIDE4NC44MzYgMTkyIDE3NiAxOTJaTTMzNiAxOTJDMzI3LjE2NCAxOTIgMzIwIDE5OS4xNjIgMzIwIDIwOEMzMjAgMjE2LjgzNiAzMjcuMTY0IDIyNCAzMzYgMjI0UzM1MiAyMTYuODM2IDM1MiAyMDhDMzUyIDE5OS4xNjIgMzQ0LjgzNiAxOTIgMzM2IDE5MlpNMjU2IDI4OEMyMjAuNjU0IDI4OCAxOTIgMzE2LjY1MiAxOTIgMzUyQzE5MiAzODcuMzQ2IDIyMC42NTQgNDE2IDI1NiA0MTZTMzIwIDM4Ny4zNDYgMzIwIDM1MkMzMjAgMzE2LjY1MiAyOTEuMzQ2IDI4OCAyNTYgMjg4Wk0yNTYgNDAwQzIyOS41MzMgNDAwIDIwOCAzNzguNDY3IDIwOCAzNTJTMjI5LjUzMyAzMDQgMjU2IDMwNFMzMDQgMzI1LjUzMyAzMDQgMzUyUzI4Mi40NjcgNDAwIDI1NiA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceSurprise(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM176 192C167.164 192 160 199.162 160 208C160 216.836 167.164 224 176 224S192 216.836 192 208C192 199.162 184.836 192 176 192ZM336 192C327.164 192 320 199.162 320 208C320 216.836 327.164 224 336 224S352 216.836 352 208C352 199.162 344.836 192 336 192ZM256 288C220.654 288 192 316.652 192 352C192 387.346 220.654 416 256 416S320 387.346 320 352C320 316.652 291.346 288 256 288ZM256 400C229.533 400 208 378.467 208 352S229.533 304 256 304S304 325.533 304 352S282.467 400 256 400Z" />
        </Icon>
    </>
}