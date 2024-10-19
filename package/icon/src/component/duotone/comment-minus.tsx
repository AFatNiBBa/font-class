
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-minus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-minus?s=duotone comment-minus}
 * @preview ![comment-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNjI1IDMyIDAgMTI1LjEyNSAwIDI0MEMwIDI4OS42MjUgMjEuMzc1IDMzNSA1NyAzNzAuNzVDNDQuNSA0MjEuMTI1IDIuNzUgNDY2IDIuMjUgNDY2LjVDMCA0NjguNzUgLTAuNjI1IDQ3Mi4yNSAwLjc1IDQ3NS4yNUMxLjk5OSA0NzguMjUgNC43NSA0ODAgOCA0ODBDNzQuMjUgNDgwIDEyNCA0NDguMjUgMTQ4LjYyNSA0MjguNjI1QzE4MS4yNSA0NDAuODc1IDIxNy42MjUgNDQ4IDI1NiA0NDhDMzk3LjM3NSA0NDggNTEyIDM1NC44NzUgNTEyIDI0MFMzOTcuMzc1IDMyIDI1NiAzMlpNMzM2IDI2My45OThIMTc2QzE2Mi43MyAyNjMuOTk4IDE1MiAyNTMuMjU2IDE1MiAyNDBDMTUyIDIyNi43NDIgMTYyLjczOCAyMTYuMDAyIDE3NiAyMTYuMDAySDMzNkMzNDkuMjYyIDIxNi4wMDIgMzYwIDIyNi43NDIgMzYwIDI0MFMzNDkuMjYyIDI2My45OTggMzM2IDI2My45OThaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM2MCAyNDBDMzYwIDI1My4yNTggMzQ5LjI2MiAyNjMuOTk4IDMzNi4wMDIgMjYzLjk5OEgxNzUuOTk4QzE2Mi43MyAyNjMuOTk4IDE1MiAyNTMuMjU2IDE1MiAyNDBDMTUyIDIyNi43NDIgMTYyLjczOCAyMTYuMDAyIDE3NS45OTggMjE2LjAwMkgzMzYuMDAyQzM0OS4yNjIgMjE2LjAwMiAzNjAgMjI2Ljc0MiAzNjAgMjQwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C1.999 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM336 263.998H176C162.73 263.998 152 253.256 152 240C152 226.742 162.738 216.002 176 216.002H336C349.262 216.002 360 226.742 360 240S349.262 263.998 336 263.998Z" />
            <path d="M360 240C360 253.258 349.262 263.998 336.002 263.998H175.998C162.73 263.998 152 253.256 152 240C152 226.742 162.738 216.002 175.998 216.002H336.002C349.262 216.002 360 226.742 360 240Z" />
        </Icon>
    </>
}