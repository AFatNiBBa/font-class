
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `microphone` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=light microphone}
 * @preview ![microphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTkyQzMyNy4xOTkgMTkyIDMyMCAxOTkuMTk5IDMyMCAyMDhWMjU2QzMyMCAzMjkuNSAyNTcuNzUgMzg4LjYyNSAxODMuMjUgMzgzLjc1QzExNS4yNSAzNzkuMTI1IDY0IDMxOS42MjUgNjQgMjUxLjVWMjA4QzY0IDE5OS4xOTkgNTYuODAxIDE5MiA0OCAxOTJTMzIgMTk5LjE5OSAzMiAyMDhWMjUwLjM3NUMzMiAzMzMuNzUgOTMuNjI1IDQwNi41IDE3NiA0MTQuNzVWNDgwSDExMkMxMDMuMTk5IDQ4MCA5NiA0ODcuMTk5IDk2IDQ5NkM5NiA1MDQuNzk5IDEwMy4xOTkgNTEyIDExMiA1MTJIMjcyQzI4MC44MDEgNTEyIDI4OCA1MDQuNzk5IDI4OCA0OTZDMjg4IDQ4Ny4xOTkgMjgwLjgwMSA0ODAgMjcyIDQ4MEgyMDhWNDE1QzI4OC43NSA0MDYuODc1IDM1MiAzMzguNzUgMzUyIDI1NlYyMDhDMzUyIDE5OS4xOTkgMzQ0LjgwMSAxOTIgMzM2IDE5MlpNMTkyIDM1MkMyNDUgMzUyIDI4OCAzMDkgMjg4IDI1NlY5NkMyODggNDMgMjQ1IDAgMTkyIDBTOTYgNDMgOTYgOTZWMjU2Qzk2IDMwOSAxMzkgMzUyIDE5MiAzNTJaTTEyOCA5NkMxMjggNjAuNzUgMTU2Ljc1IDMyIDE5MiAzMlMyNTYgNjAuNzUgMjU2IDk2VjI1NkMyNTYgMjkxLjI1IDIyNy4yNSAzMjAgMTkyIDMyMFMxMjggMjkxLjI1IDEyOCAyNTZWOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Microphone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 192C327.199 192 320 199.199 320 208V256C320 329.5 257.75 388.625 183.25 383.75C115.25 379.125 64 319.625 64 251.5V208C64 199.199 56.801 192 48 192S32 199.199 32 208V250.375C32 333.75 93.625 406.5 176 414.75V480H112C103.199 480 96 487.199 96 496C96 504.799 103.199 512 112 512H272C280.801 512 288 504.799 288 496C288 487.199 280.801 480 272 480H208V415C288.75 406.875 352 338.75 352 256V208C352 199.199 344.801 192 336 192ZM192 352C245 352 288 309 288 256V96C288 43 245 0 192 0S96 43 96 96V256C96 309 139 352 192 352ZM128 96C128 60.75 156.75 32 192 32S256 60.75 256 96V256C256 291.25 227.25 320 192 320S128 291.25 128 256V96Z" />
        </Icon>
    </>
}