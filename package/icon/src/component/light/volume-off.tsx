
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume-off` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=light volume-off}
 * @preview ![volume-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDEuMTA5IDM0LjgxNkMyOTYuOTA4IDMyLjkyMiAyOTIuNDQ1IDMyIDI4OC4wMTQgMzJDMjgwLjMxNiAzMiAyNzIuNzE1IDM0Ljc4MyAyNjYuNzM0IDQwLjFMMTMxLjg0IDE2MC4wMDRINDhDMjEuNDkgMTYwLjAwNCAwIDE4MS40OTYgMCAyMDguMDAyVjMwNC4wMDJDMCAzMzAuNTEgMjEuNDkgMzUyIDQ4IDM1MkgxMzEuODRMMjY2LjczNCA0NzEuOTA2QzI3Mi43MTkgNDc3LjIxOSAyODAuMzEyIDQ4MCAyODggNDgwQzI5Mi40MzggNDgwIDI5Ni45MDYgNDc5LjA5NCAzMDEuMTA5IDQ3Ny4xODhDMzEyLjYwOSA0NzIuMDMxIDMyMCA0NjAuNTk0IDMyMCA0NDhWNjQuMDA2QzMyMCA1MS40MSAzMTIuNjA5IDM5Ljk3MyAzMDEuMTA5IDM0LjgxNlpNMjg3Ljk4IDQ0Ny45NTFMMTUzLjA4NiAzMjguMDQzTDE0My45OTYgMzE5Ljk2M0g0OEMzOS4xNzggMzE5Ljk2MyAzMiAzMTIuODAzIDMyIDMwNC4wMDJWMjA4LjAwMkMzMiAxOTkuMjAxIDM5LjE3OCAxOTIuMDQxIDQ4IDE5Mi4wNDFIMTQzLjk5NkwxNTMuMDg2IDE4My45NjFMMjg3Ljk4IDY0LjA1N0MyODcuOTg4IDY0LjA0OSAyODcuOTk2IDY0LjA0NSAyODggNjQuMDQxTDI4Ny45OCA0NDcuOTUxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function VolumeOff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M301.109 34.816C296.908 32.922 292.445 32 288.014 32C280.316 32 272.715 34.783 266.734 40.1L131.84 160.004H48C21.49 160.004 0 181.496 0 208.002V304.002C0 330.51 21.49 352 48 352H131.84L266.734 471.906C272.719 477.219 280.312 480 288 480C292.438 480 296.906 479.094 301.109 477.188C312.609 472.031 320 460.594 320 448V64.006C320 51.41 312.609 39.973 301.109 34.816ZM287.98 447.951L153.086 328.043L143.996 319.963H48C39.178 319.963 32 312.803 32 304.002V208.002C32 199.201 39.178 192.041 48 192.041H143.996L153.086 183.961L287.98 64.057C287.988 64.049 287.996 64.045 288 64.041L287.98 447.951Z" />
        </Icon>
    </>
}