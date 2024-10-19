
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `note-medical` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/note-medical?s=thin note-medical}
 * @preview ![note-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgyOTAuNzQ2QzI5OS4yMzIgNDgwIDMwNy4zNzEgNDc2LjYyOSAzMTMuMzczIDQ3MC42MjdMNDM4LjYyNyAzNDUuMzczQzQ0NC42MjkgMzM5LjM3MSA0NDggMzMxLjIzMiA0NDggMzIyLjc0NlY5NkM0NDggNjAuNjU0IDQxOS4zNDggMzIgMzg0IDMyWk0zMDQgNDU3LjM3M1YzNjBDMzA0IDM0Ni43NjYgMzE0Ljc4MSAzMzYgMzI4IDMzNkg0MjUuMzczTDMwNCA0NTcuMzczWk00MzIgMzIwSDMyOEMzMDUuOTM4IDMyMCAyODggMzM3LjkzOCAyODggMzYwVjQ2NEg2NEMzNy41MzMgNDY0IDE2IDQ0Mi40NjcgMTYgNDE2Vjk2QzE2IDY5LjUzMyAzNy41MzMgNDggNjQgNDhIMzg0QzQxMC40NjcgNDggNDMyIDY5LjUzMyA0MzIgOTZWMzIwWk0zMjAgMTc2SDI3MlYxMjhDMjcyIDExOS4xNjQgMjY0LjgzOCAxMTIgMjU2IDExMkgxOTJDMTgzLjE2NCAxMTIgMTc2IDExOS4xNjQgMTc2IDEyOFYxNzZIMTI4QzExOS4xNjQgMTc2IDExMiAxODMuMTY0IDExMiAxOTJWMjU2QzExMiAyNjQuODM2IDExOS4xNjQgMjcyIDEyOCAyNzJIMTc2VjMyMEMxNzYgMzI4LjgzNiAxODMuMTY0IDMzNiAxOTIgMzM2SDI1NkMyNjQuODM4IDMzNiAyNzIgMzI4LjgzNiAyNzIgMzIwVjI3MkgzMjBDMzI4LjgzOCAyNzIgMzM2IDI2NC44MzYgMzM2IDI1NlYxOTJDMzM2IDE4My4xNjQgMzI4LjgzOCAxNzYgMzIwIDE3NlpNMzIwIDI1NkgyNTZWMzIwSDE5MlYyNTZIMTI4VjE5MkgxOTJWMTI4SDI1NlYxOTJIMzIwVjI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function NoteMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H290.746C299.232 480 307.371 476.629 313.373 470.627L438.627 345.373C444.629 339.371 448 331.232 448 322.746V96C448 60.654 419.348 32 384 32ZM304 457.373V360C304 346.766 314.781 336 328 336H425.373L304 457.373ZM432 320H328C305.938 320 288 337.938 288 360V464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V320ZM320 176H272V128C272 119.164 264.838 112 256 112H192C183.164 112 176 119.164 176 128V176H128C119.164 176 112 183.164 112 192V256C112 264.836 119.164 272 128 272H176V320C176 328.836 183.164 336 192 336H256C264.838 336 272 328.836 272 320V272H320C328.838 272 336 264.836 336 256V192C336 183.164 328.838 176 320 176ZM320 256H256V320H192V256H128V192H192V128H256V192H320V256Z" />
        </Icon>
    </>
}