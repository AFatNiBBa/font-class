
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-meh-blank` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-meh-blank?s=solid face-meh-blank}
 * @preview ![face-meh-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE5IDE2IDI1NlMxMjMuNDYxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTgxIDQ5NiAyNTZTMzg4LjUzOSAxNiAyNTYgMTZaTTE3NS45NTcgMjQwQzE1OC4yNzcgMjQwIDE0My45ODggMjI1Ljc1IDE0My45ODggMjA4UzE1OC4yNzcgMTc2IDE3NS45NTcgMTc2QzE5My43NTggMTc2IDIwOC4wNDcgMTkwLjI1IDIwOC4wNDcgMjA4UzE5My43NTggMjQwIDE3NS45NTcgMjQwWk0zMzYuMDQzIDI0MEMzMTguMjQyIDI0MCAzMDMuOTUzIDIyNS43NSAzMDMuOTUzIDIwOFMzMTguMjQyIDE3NiAzMzYuMDQzIDE3NkMzNTMuNzIzIDE3NiAzNjguMDEyIDE5MC4yNSAzNjguMDEyIDIwOFMzNTMuNzIzIDI0MCAzMzYuMDQzIDI0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceMehBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM175.957 240C158.277 240 143.988 225.75 143.988 208S158.277 176 175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240ZM336.043 240C318.242 240 303.953 225.75 303.953 208S318.242 176 336.043 176C353.723 176 368.012 190.25 368.012 208S353.723 240 336.043 240Z" />
        </Icon>
    </>
}