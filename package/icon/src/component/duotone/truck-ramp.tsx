
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-ramp` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=duotone truck-ramp}
 * @preview ![truck-ramp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCA0MTZDNjQwIDQ2OS4wMiA1OTcuMDIgNTEyIDU0NCA1MTJTNDQ4IDQ2OS4wMiA0NDggNDE2UzQ5MC45OCAzMjAgNTQ0IDMyMFM2NDAgMzYyLjk4IDY0MCA0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTY0MCAwVjMzMi4xNDVDNjE2LjUzNyAzMDUuMzA1IDU4Mi40NTEgMjg4IDU0NCAyODhDNDc3LjQyNCAyODggNDIzLjU1NCAzMzkuMDcyIDQxNy40MjYgNDA0LjA0NUwyMi43NjkgNTExLjczQzE4LjUxOSA1MTIuODU1IDE0LjE0NCA1MTAuMzU1IDEyLjg5NCA1MDYuMTA1TDAuMjY5IDQ1OS43MzJDLTAuODU2IDQ1NS42MDcgMS42NDQgNDUxLjIzMiA1Ljg5NCA0NDkuOTgyTDM1Mi4wMDggMzU1LjYxMVY2NEMzNTIuMDA4IDI4LjY1NCAzODAuNjYxIDAgNDE2LjAwOCAwSDY0MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function TruckRamp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M640 416C640 469.02 597.02 512 544 512S448 469.02 448 416S490.98 320 544 320S640 362.98 640 416Z" />
            <path d="M640 0V332.145C616.537 305.305 582.451 288 544 288C477.424 288 423.554 339.072 417.426 404.045L22.769 511.73C18.519 512.855 14.144 510.355 12.894 506.105L0.269 459.732C-0.856 455.607 1.644 451.232 5.894 449.982L352.008 355.611V64C352.008 28.654 380.661 0 416.008 0H640Z" />
        </Icon>
    </>
}