
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `monitor-waveform` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=duotone monitor-waveform}
 * @preview ![monitor-waveform](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA5NlY0MTZINjRWMjg4SDE4Mi4xMjVMMjA5Ljc1IDM0My4xMjVDMjE1LjYyNSAzNTUgMjMyLjM3NSAzNTUgMjM4LjI1IDM0My4xMjVMMjg4IDI0My43NUwzMTAuMTI1IDI4OEg0MDBDNDA4Ljg3NSAyODggNDE2IDI4MC44NzUgNDE2IDI3MlM0MDguODc1IDI1NiA0MDAgMjU2SDMyOS44NzVMMzAyLjI1IDIwMC44NzVDMjk2LjM3NSAxODkgMjc5LjYyNSAxODkgMjczLjc1IDIwMC44NzVMMjI0IDMwMC4yNUwyMDQuMTI1IDI2MC4zNzVDMjAyLjc1IDI1Ny43NSAyMDAgMjU2IDE5NyAyNTZINjRWOTZINTEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MjggMzJINDhDMjEuNSAzMiAwIDUzLjUgMCA4MFY0MzJDMCA0NTguNSAyMS41IDQ4MCA0OCA0ODBINTI4QzU1NC41IDQ4MCA1NzYgNDU4LjUgNTc2IDQzMlY4MEM1NzYgNTMuNSA1NTQuNSAzMiA1MjggMzJaTTUxMiA0MTZINjRWOTZINTEyVjQxNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function MonitorWaveform(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M512 96V416H64V288H182.125L209.75 343.125C215.625 355 232.375 355 238.25 343.125L288 243.75L310.125 288H400C408.875 288 416 280.875 416 272S408.875 256 400 256H329.875L302.25 200.875C296.375 189 279.625 189 273.75 200.875L224 300.25L204.125 260.375C202.75 257.75 200 256 197 256H64V96H512Z" />
            <path d="M528 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H528C554.5 480 576 458.5 576 432V80C576 53.5 554.5 32 528 32ZM512 416H64V96H512V416Z" />
        </Icon>
    </>
}