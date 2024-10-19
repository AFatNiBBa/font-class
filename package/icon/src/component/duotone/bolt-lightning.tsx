
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=duotone bolt-lightning}
 * @preview ![bolt-lightning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4MS4yMiAxNzIuODEyQzM3Ny4wNjMgMTY0LjkzOCAzNjguOTA3IDE2MCAzNjAuMDAxIDE2MEgyMDMuNDM4TDI1NC4yODIgMzIuOTA2QzI1Ny4yNTEgMjUuNTMxIDI1Ni4zNDUgMTcuMTI1IDI1MS44NzYgMTAuNTMxUzIzOS45NyAwIDIzMi4wMDEgMEg1Ni4wMDFDNDMuOTcgMCAzMy44MTMgOC45MDYgMzIuMjIgMjAuODQ0TDAuMjIgMjYwLjg0NEMtMC43MTggMjY3LjY4OCAxLjM3NiAyNzQuNTk0IDUuOTM4IDI3OS44MTJDMTAuNTAxIDI4NSAxNy4wOTUgMjg4IDI0LjAwMSAyODhIMTcwLjMxM0wxMjguNTMyIDQ4Mi45NjlDMTI2LjEyNiA0OTQuMTg3IDEzMi4wMDEgNTA1LjUzMSAxNDIuNTMyIDUxMC4wNjJDMTQ1LjU5NSA1MTEuMzc1IDE0OC44MTMgNTEyIDE1Mi4wMDEgNTEyQzE1OS43MiA1MTIgMTY3LjIyIDUwOC4yNSAxNzEuODEzIDUwMS41NjJMMzc5LjgxMyAxOTcuNTYyQzM4NC44NDUgMTkwLjIxOSAzODUuMzc2IDE4MC42ODggMzgxLjIyIDE3Mi44MTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BoltLightning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M381.22 172.812C377.063 164.938 368.907 160 360.001 160H203.438L254.282 32.906C257.251 25.531 256.345 17.125 251.876 10.531S239.97 0 232.001 0H56.001C43.97 0 33.813 8.906 32.22 20.844L0.22 260.844C-0.718 267.688 1.376 274.594 5.938 279.812C10.501 285 17.095 288 24.001 288H170.313L128.532 482.969C126.126 494.187 132.001 505.531 142.532 510.062C145.595 511.375 148.813 512 152.001 512C159.72 512 167.22 508.25 171.813 501.562L379.813 197.562C384.845 190.219 385.376 180.688 381.22 172.812Z" />
        </Icon>
    </>
}