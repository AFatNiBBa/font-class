
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wave-triangle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=duotone wave-triangle}
 * @preview ![wave-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYzMy41OTIgMjYyLjc0NUw0ODkuNTkzIDQ1NS4wNTRDNDgzLjU2MSA0NjMuMTI5IDQ3NC4wNzcgNDY3Ljg4NyA0NjMuOTk5IDQ2Ny44ODdTNDQ0LjQzNyA0NjMuMTI5IDQzOC40MDUgNDU1LjA1NEwxNzYuMDAxIDEwNC42NDhMNTcuNTk1IDI2Mi43NDVDNDcuMDE3IDI3Ni45NTUgMjYuOTg2IDI3OS44MDQgMTIuNzk5IDI2OS4xNjJDLTEuMzQyIDI1OC41NTEgLTQuMjAxIDIzOC40NTYgNi40MDggMjI0LjMwOUwxNTAuNDA3IDMyQzE2Mi40NyAxNS44NDkgMTg5LjUzMiAxNS44NDkgMjAxLjU5NSAzMkw0NjMuOTk5IDM4Mi40MDZMNTgyLjQwNSAyMjQuMzA5QzU5Mi45OTggMjEwLjEzIDYxMy4wMjkgMjA3LjMxMiA2MjcuMjAxIDIxNy44OTJDNjQxLjM0MiAyMjguNTAzIDY0NC4yMDEgMjQ4LjU5OCA2MzMuNTkyIDI2Mi43NDVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function WaveTriangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M633.592 262.745L489.593 455.054C483.561 463.129 474.077 467.887 463.999 467.887S444.437 463.129 438.405 455.054L176.001 104.648L57.595 262.745C47.017 276.955 26.986 279.804 12.799 269.162C-1.342 258.551 -4.201 238.456 6.408 224.309L150.407 32C162.47 15.849 189.532 15.849 201.595 32L463.999 382.406L582.405 224.309C592.998 210.13 613.029 207.312 627.201 217.892C641.342 228.503 644.201 248.598 633.592 262.745Z" />
        </Icon>
    </>
}