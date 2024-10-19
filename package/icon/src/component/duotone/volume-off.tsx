
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume-off` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=duotone volume-off}
 * @preview ![volume-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA2NC4wMDZWNDQ4QzMyMCA0NjAuNTk0IDMxMi42MDkgNDcyLjAzMSAzMDEuMTA5IDQ3Ny4xODhDMjk2LjkwNiA0NzkuMDk0IDI5Mi40MzggNDgwIDI4OCA0ODBDMjgwLjMxMiA0ODAgMjcyLjcxOSA0NzcuMjE5IDI2Ni43MzQgNDcxLjkwNkwxMzEuODQgMzUyLjAwMkg0OEMyMS40OSAzNTIuMDAyIDAgMzMwLjUxIDAgMzA0LjAwMlYyMDguMDA0QzAgMTgxLjQ5NiAyMS40OSAxNjAuMDA1IDQ4IDE2MC4wMDVIMTMxLjg0TDI2Ni43MzQgNDAuMUMyNzYuMTU2IDMxLjcyNSAyODkuNjA5IDI5LjYzMSAzMDEuMTA5IDM0LjgxOUMzMTIuNjA5IDM5Ljk3NSAzMjAgNTEuNDEyIDMyMCA2NC4wMDZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function VolumeOff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M320 64.006V448C320 460.594 312.609 472.031 301.109 477.188C296.906 479.094 292.438 480 288 480C280.312 480 272.719 477.219 266.734 471.906L131.84 352.002H48C21.49 352.002 0 330.51 0 304.002V208.004C0 181.496 21.49 160.005 48 160.005H131.84L266.734 40.1C276.156 31.725 289.609 29.631 301.109 34.819C312.609 39.975 320 51.412 320 64.006Z" />
        </Icon>
    </>
}