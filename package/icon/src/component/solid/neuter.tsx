
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `neuter` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/neuter?s=solid neuter}
 * @preview ![neuter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTc2QzM2OCA3OC43OTcgMjg5LjIwMyAwIDE5MiAwQzk0Ljc5OSAwIDE2IDc4Ljc5NyAxNiAxNzZDMTYgMjYyLjI1OCA3OC4xIDMzMy44ODcgMTYwIDM0OC45NTNWNDk2QzE2MCA1MDQuODM2IDE2Ny4xNjQgNTEyIDE3NiA1MTJIMjA4QzIxNi44MzggNTEyIDIyNCA1MDQuODM2IDIyNCA0OTZWMzQ4Ljk1M0MzMDUuOTAyIDMzMy44ODcgMzY4IDI2Mi4yNTggMzY4IDE3NlpNMTkyIDI3MkMxMzkuMDY2IDI3MiA5NiAyMjguOTM0IDk2IDE3NkM5NiAxMjMuMDY0IDEzOS4wNjYgODAgMTkyIDgwQzI0NC45MzYgODAgMjg4IDEyMy4wNjQgMjg4IDE3NkMyODggMjI4LjkzNCAyNDQuOTM2IDI3MiAxOTIgMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Neuter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 176C368 78.797 289.203 0 192 0C94.799 0 16 78.797 16 176C16 262.258 78.1 333.887 160 348.953V496C160 504.836 167.164 512 176 512H208C216.838 512 224 504.836 224 496V348.953C305.902 333.887 368 262.258 368 176ZM192 272C139.066 272 96 228.934 96 176C96 123.064 139.066 80 192 80C244.936 80 288 123.064 288 176C288 228.934 244.936 272 192 272Z" />
        </Icon>
    </>
}