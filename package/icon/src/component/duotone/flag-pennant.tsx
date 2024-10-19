
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=duotone flag-pennant}
 * @preview ![flag-pennant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi4yNjQgMjA4QzUxMi4yNjQgMjE4LjA2MiA1MDUuOTk4IDIyNy4wMzEgNDk2LjU2MSAyMzAuNTMxTDY0LjI2NCAzODkuODAxVjMyQzY0LjI2NCAyOS43NzcgNjMuNDMyIDI3LjgyOCA2MyAyNS43MzRMNDk2LjU2MSAxODUuNDY5QzUwNS45OTggMTg4Ljk2OSA1MTIuMjY0IDE5Ny45MzggNTEyLjI2NCAyMDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyIDBDMTQuMzI2IDAgMCAxNC4zMjggMCAzMlY0OTZDMCA1MDQuODM2IDcuMTY0IDUxMiAxNiA1MTJINDhDNTYuODM2IDUxMiA2NCA1MDQuODM2IDY0IDQ5NlYzMkM2NCAxNC4zMjggNDkuNjc0IDAgMzIgMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FlagPennant(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512.264 208C512.264 218.062 505.998 227.031 496.561 230.531L64.264 389.801V32C64.264 29.777 63.432 27.828 63 25.734L496.561 185.469C505.998 188.969 512.264 197.938 512.264 208Z" />
            <path d="M32 0C14.326 0 0 14.328 0 32V496C0 504.836 7.164 512 16 512H48C56.836 512 64 504.836 64 496V32C64 14.328 49.674 0 32 0Z" />
        </Icon>
    </>
}