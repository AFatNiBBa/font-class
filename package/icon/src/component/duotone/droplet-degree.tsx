
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `droplet-degree` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=duotone droplet-degree}
 * @preview ![droplet-degree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM2OCAzMkMzMjMuOTM3IDMyIDI4OCA2Ny45MzggMjg4IDExMlMzMjMuOTM3IDE5MiAzNjggMTkyUzQ0Ny45OTkgMTU2LjA2MiA0NDcuOTk5IDExMlM0MTIuMDYyIDMyIDM2OCAzMlpNMzY4IDE0NEMzNTAuMjUgMTQ0IDMzNiAxMjkuNzUgMzM2IDExMlMzNTAuMjUgODAgMzY4IDgwQzM4NS43NSA4MCA0MDAgOTQuMjUgNDAwIDExMlMzODUuNzUgMTQ0IDM2OCAxNDRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMxOS45OTkgMzI0LjE0MUMzMTkuOTk5IDQxMC4yMTkgMjQ4LjQzNiA0ODAgMTU5Ljk5OSA0ODBTMCA0MTAuMjE5IDAgMzI0LjE0MUMwIDIyNi45MDYgOTAuOTM3IDE4OS4yODEgMTMzLjQzNyA1MS4zNjFDMTQxLjU2MiAyNS4wMDIgMTc5LjM3NCAyNi4wOTYgMTg2LjU2MiA1MS4zNjFDMjI5LjI3IDE5MC4wNDcgMzE5Ljk5OSAyMjYuMzU5IDMxOS45OTkgMzI0LjE0MVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function DropletDegree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M368 32C323.937 32 288 67.938 288 112S323.937 192 368 192S447.999 156.062 447.999 112S412.062 32 368 32ZM368 144C350.25 144 336 129.75 336 112S350.25 80 368 80C385.75 80 400 94.25 400 112S385.75 144 368 144Z" />
            <path d="M319.999 324.141C319.999 410.219 248.436 480 159.999 480S0 410.219 0 324.141C0 226.906 90.937 189.281 133.437 51.361C141.562 25.002 179.374 26.096 186.562 51.361C229.27 190.047 319.999 226.359 319.999 324.141Z" />
        </Icon>
    </>
}