
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `a` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=duotone a}
 * @preview ![a](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4MC40MSA0MTMuNzg0TDIzNi40MTkgNjEuODFDMjI5LjA0NSA0My43OCAyMTEuNDgzIDMyIDE5MiAzMlMxNTQuOTU1IDQzLjc4IDE0Ny41ODEgNjEuODFMMy41OSA0MTMuNzg0Qy02LjQ1NiA0MzguMzQ0IDUuMzA4IDQ2Ni4zNDIgMjkuODM4IDQ3Ni40MDRDNTQuNDE1IDQ4Ni40NjYgODIuMzk3IDQ3NC42ODUgOTIuNDI4IDQ1MC4xNTZMMTA2LjQxMyA0MTUuOTcxSDI3Ny41ODdMMjkxLjU3MiA0NTAuMTU2QzI5OS4xNjUgNDY4LjcxNyAzMTcuMTAyIDQ3OS45NjYgMzM2LjAwNyA0NzkuOTY2QzM0Mi4wNTMgNDc5Ljk2NiAzNDguMjA5IDQ3OC44NDEgMzU0LjE2MiA0NzYuNDA0QzM3OC42OTIgNDY2LjM0MiAzOTAuNDU2IDQzOC4zNDQgMzgwLjQxIDQxMy43ODRaTTE0NS42ODUgMzE5Ljk3OEwxOTIgMjA2Ljc2OEwyMzguMzE1IDMxOS45NzhIMTQ1LjY4NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function A(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M380.41 413.784L236.419 61.81C229.045 43.78 211.483 32 192 32S154.955 43.78 147.581 61.81L3.59 413.784C-6.456 438.344 5.308 466.342 29.838 476.404C54.415 486.466 82.397 474.685 92.428 450.156L106.413 415.971H277.587L291.572 450.156C299.165 468.717 317.102 479.966 336.007 479.966C342.053 479.966 348.209 478.841 354.162 476.404C378.692 466.342 390.456 438.344 380.41 413.784ZM145.685 319.978L192 206.768L238.315 319.978H145.685Z" />
        </Icon>
    </>
}