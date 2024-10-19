
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `fire-flame-simple` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire-flame-simple?s=solid fire-flame-simple}
 * @preview ![fire-flame-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDMuMTEzIDQuMzY1QzE5Ni45MzcgLTEuNDU2IDE4Ny4wNTggLTEuNDU0IDE4MC44NzkgNC4zNjRDNzQuNTE5IDEwNC41MDggMCAyMzQuMTM3IDAgMzEyQzAgNDM3Ljk0NSA3OSA1MTIgMTkyIDUxMlMzODQgNDM3Ljk0NSAzODQgMzEyQzM4NCAyMzMuOTAyIDMwOS4wMzIgMTA0LjE2NiAyMDMuMTEzIDQuMzY1Wk0xOTIgNDMyQzEzNS41IDQzMiA5NiAzOTQuMjM5IDk2IDM0MC4yNTlDOTYgMzI3Ljc5MyAxMDAuMjA3IDI4NC45NDEgMTc5Ljg2OCAxOTcuMjE1QzE4Ni4xODEgMTkwLjI2MiAxOTcuODE5IDE5MC4yNjIgMjA0LjEzMiAxOTcuMjE1QzI4My43OTMgMjg0Ljk0MSAyODggMzI3Ljc5MyAyODggMzQwLjI1OUMyODggMzk0LjIzOSAyNDguNSA0MzIgMTkyIDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FireFlameSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M203.113 4.365C196.937 -1.456 187.058 -1.454 180.879 4.364C74.519 104.508 0 234.137 0 312C0 437.945 79 512 192 512S384 437.945 384 312C384 233.902 309.032 104.166 203.113 4.365ZM192 432C135.5 432 96 394.239 96 340.259C96 327.793 100.207 284.941 179.868 197.215C186.181 190.262 197.819 190.262 204.132 197.215C283.793 284.941 288 327.793 288 340.259C288 394.239 248.5 432 192 432Z" />
        </Icon>
    </>
}