
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=duotone chevron-right}
 * @preview ![chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwOC45MDIgMjI4LjM0M0wxMzIuOTA0IDQ0LjM0MkMxMTcuNjM4IDI4LjM3MyA5Mi4yOTUgMjcuODQyIDc2LjM0MiA0My4wOTJDNjAuMzg5IDU4LjM3MyA1OS44MjYgODMuNjg2IDc1LjA5MiA5OS42NTRMMjI0LjYzNyAyNTUuOTk5TDc1LjA5MiA0MTIuMzQzQzU5LjgyNiA0MjguMzEyIDYwLjM4OSA0NTMuNjI1IDc2LjM0MiA0NjguOTA2Qzg0LjA5MiA0NzYuMzEyIDk0LjA0NSA0ODAgMTAzLjk5OCA0ODBDMTE0LjUyOSA0ODAgMTI1LjA0NSA0NzUuODc1IDEzMi45MDQgNDY3LjY1NkwzMDguOTAyIDI4My42NTVDMzIzLjY5OSAyNjguMTg2IDMyMy42OTkgMjQzLjgxMSAzMDguOTAyIDIyOC4zNDNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M308.902 228.343L132.904 44.342C117.638 28.373 92.295 27.842 76.342 43.092C60.389 58.373 59.826 83.686 75.092 99.654L224.637 255.999L75.092 412.343C59.826 428.312 60.389 453.625 76.342 468.906C84.092 476.312 94.045 480 103.998 480C114.529 480 125.045 475.875 132.904 467.656L308.902 283.655C323.699 268.186 323.699 243.811 308.902 228.343Z" />
        </Icon>
    </>
}