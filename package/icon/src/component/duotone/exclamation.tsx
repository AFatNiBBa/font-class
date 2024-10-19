
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `exclamation` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=duotone exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDM3NkMzMy4wNzIgMzc2IDggNDAxLjA3MiA4IDQzMlMzMy4wNzIgNDg4IDY0IDQ4OFMxMjAgNDYyLjkyOCAxMjAgNDMyUzk0LjkyOCAzNzYgNjQgMzc2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02Mi40NzUgMzM1Ljk2OUM4NC41OTIgMzM2LjgzNCAxMDMuMjA3IDMxOS4xMzcgMTA0LjA0NyAyOTYuNDM5TDExMS45NjkgODMuMTM3QzExMi4wMDggODEuOTM0IDExMi4wMTIgODAuNjA1IDExMS45NjkgNzkuMzg1QzExMC45NTkgNTIuMTk5IDg4LjY2NiAzMSA2Mi4xNzQgMzIuMDM3QzM1LjY4NCAzMy4wNzIgMTUuMDI4IDU1Ljk1MSAxNi4wMzUgODMuMTM3TDIzLjk1NSAyOTYuNDM5QzI0Ljc5OSAzMTcuNjY0IDQxLjQzNiAzMzUuMTQ2IDYyLjQ3NSAzMzUuOTY5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Exclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 128 512" {...props}>
            <path class={generic.secondary} d="M64 376C33.072 376 8 401.072 8 432S33.072 488 64 488S120 462.928 120 432S94.928 376 64 376Z" />
            <path d="M62.475 335.969C84.592 336.834 103.207 319.137 104.047 296.439L111.969 83.137C112.008 81.934 112.012 80.605 111.969 79.385C110.959 52.199 88.666 31 62.174 32.037C35.684 33.072 15.028 55.951 16.035 83.137L23.955 296.439C24.799 317.664 41.436 335.146 62.475 335.969Z" />
        </Icon>
    </>
}