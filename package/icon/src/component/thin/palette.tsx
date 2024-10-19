
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `palette` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=thin palette}
 * @preview ![palette](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuOTQxIDBDMjM5LjA3IDAuMDAyIDIyMS43OTcgMS42MzEgMjA0LjMxMyA1LjAzN0MxMDQuOTA2IDI0LjQ0MyAyNC44MTMgMTA0LjM1MiA1LjE4OCAyMDMuNDQ3Qy0yOS40NjkgMzc4LjYwNCAxMTYuMzQ4IDUxMiAyMzkuNDAyIDUxMkMyNDcuNzIzIDUxMiAyNTUuOTQ5IDUxMS4zOTEgMjY0IDUxMC4xNDFDMzA1LjE4OCA1MDMuNzM0IDMyNS40MDYgNDU1LjU0NSAzMDYuNSA0MTguNDUxQzI4My40MDYgMzczLjA0MyAzMTYuNDA2IDMyMC4wNDMgMzY3LjQwNiAzMjAuMDQzSDQ0Ny4wOTRDNDgyLjkwNiAzMjAuMDQzIDUxMS45MDYgMjkwLjQ0OSA1MTIgMjU0LjcyOUM1MTEuNTU1IDExMy45NTcgMzk3LjEwNiAtMC4wMTQgMjU1Ljk0MSAwWk00NDcuMDk0IDMwNC4wNDNIMzY3LjQwNkMzMzcuNjg4IDMwNC4wNDMgMzEwLjc1IDMxOS4wMzUgMjk1LjM0OCAzNDQuMTQ1QzI4MC4wODYgMzY5LjAzMyAyNzguOTIyIDM5OS41MjEgMjkyLjI0NiA0MjUuNzE3QzI5OS41MiA0MzkuOTkgMjk5LjQ2OSA0NTcuMTA5IDI5Mi4xMDYgNDcxLjUxMkMyODguMzU5IDQ3OC44NDIgMjc5LjQwNiA0OTEuNTUzIDI2MS41NDcgNDk0LjMzQzI1NC40MDIgNDk1LjQzOCAyNDYuOTQ5IDQ5NiAyMzkuNDAyIDQ5NkMxODAuMTkxIDQ5NiAxMTUuODg3IDQ2Mi40OTggNzEuNTgyIDQwOC41NjhDMjQuNDYxIDM1MS4yMTMgNi40NTcgMjc5LjQ2OSAyMC44ODMgMjA2LjU1NUMzOS4yOTMgMTEzLjU5NiAxMTQuMjM4IDM4LjkyNCAyMDcuMzcxIDIwLjc0MkMyMjMuNTE2IDE3LjU5OCAyMzkuODYzIDE2LjAwMiAyNTUuOTY1IDE2QzM4Ny45MDIgMTYgNDk1LjU4MiAxMjMuMTE1IDQ5NiAyNTQuNjg2QzQ5NS45MyAyODEuOTAyIDQ3My45ODggMzA0LjA0MyA0NDcuMDk0IDMwNC4wNDNaTTk2IDI0OC4wMzFDNzMuOTM4IDI0OC4wMzEgNTYgMjY1Ljk2OSA1NiAyODguMDMxUzczLjkzOCAzMjguMDMxIDk2IDMyOC4wMzFTMTM2IDMxMC4wOTQgMTM2IDI4OC4wMzFTMTE4LjA2MyAyNDguMDMxIDk2IDI0OC4wMzFaTTk2IDMxMi4wMzFDODIuNzgxIDMxMi4wMzEgNzIgMzAxLjI1IDcyIDI4OC4wMzFTODIuNzgxIDI2NC4wMzEgOTYgMjY0LjAzMVMxMjAgMjc0LjgxMyAxMjAgMjg4LjAzMVMxMDkuMjE5IDMxMi4wMzEgOTYgMzEyLjAzMVpNMTI4IDEyMC4wMzFDMTA1LjkzOCAxMjAuMDMxIDg4IDEzNy45NjkgODggMTYwLjAzMVMxMDUuOTM4IDIwMC4wMzEgMTI4IDIwMC4wMzFTMTY4IDE4Mi4wOTQgMTY4IDE2MC4wMzFTMTUwLjA2MyAxMjAuMDMxIDEyOCAxMjAuMDMxWk0xMjggMTg0LjAzMUMxMTQuNzgxIDE4NC4wMzEgMTA0IDE3My4yNSAxMDQgMTYwLjAzMVMxMTQuNzgxIDEzNi4wMzEgMTI4IDEzNi4wMzFTMTUyIDE0Ni44MTMgMTUyIDE2MC4wMzFTMTQxLjIxOSAxODQuMDMxIDEyOCAxODQuMDMxWk0yNTYgNTYuMDMxQzIzMy45MzggNTYuMDMxIDIxNiA3My45NjkgMjE2IDk2LjAzMVMyMzMuOTM4IDEzNi4wMzEgMjU2IDEzNi4wMzFTMjk2IDExOC4wOTQgMjk2IDk2LjAzMVMyNzguMDYzIDU2LjAzMSAyNTYgNTYuMDMxWk0yNTYgMTIwLjAzMUMyNDIuNzgxIDEyMC4wMzEgMjMyIDEwOS4yNSAyMzIgOTYuMDMxUzI0Mi43ODEgNzIuMDMxIDI1NiA3Mi4wMzFTMjgwIDgyLjgxMyAyODAgOTYuMDMxUzI2OS4yMTkgMTIwLjAzMSAyNTYgMTIwLjAzMVpNMzg0IDEyMC4wMzFDMzYxLjkzOCAxMjAuMDMxIDM0NCAxMzcuOTY5IDM0NCAxNjAuMDMxUzM2MS45MzggMjAwLjAzMSAzODQgMjAwLjAzMVM0MjQgMTgyLjA5NCA0MjQgMTYwLjAzMVM0MDYuMDYzIDEyMC4wMzEgMzg0IDEyMC4wMzFaTTM4NCAxODQuMDMxQzM3MC43ODEgMTg0LjAzMSAzNjAgMTczLjI1IDM2MCAxNjAuMDMxUzM3MC43ODEgMTM2LjAzMSAzODQgMTM2LjAzMVM0MDggMTQ2LjgxMyA0MDggMTYwLjAzMVMzOTcuMjE5IDE4NC4wMzEgMzg0IDE4NC4wMzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Palette(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M255.941 0C239.07 0.002 221.797 1.631 204.313 5.037C104.906 24.443 24.813 104.352 5.188 203.447C-29.469 378.604 116.348 512 239.402 512C247.723 512 255.949 511.391 264 510.141C305.188 503.734 325.406 455.545 306.5 418.451C283.406 373.043 316.406 320.043 367.406 320.043H447.094C482.906 320.043 511.906 290.449 512 254.729C511.555 113.957 397.106 -0.014 255.941 0ZM447.094 304.043H367.406C337.688 304.043 310.75 319.035 295.348 344.145C280.086 369.033 278.922 399.521 292.246 425.717C299.52 439.99 299.469 457.109 292.106 471.512C288.359 478.842 279.406 491.553 261.547 494.33C254.402 495.438 246.949 496 239.402 496C180.191 496 115.887 462.498 71.582 408.568C24.461 351.213 6.457 279.469 20.883 206.555C39.293 113.596 114.238 38.924 207.371 20.742C223.516 17.598 239.863 16.002 255.965 16C387.902 16 495.582 123.115 496 254.686C495.93 281.902 473.988 304.043 447.094 304.043ZM96 248.031C73.938 248.031 56 265.969 56 288.031S73.938 328.031 96 328.031S136 310.094 136 288.031S118.063 248.031 96 248.031ZM96 312.031C82.781 312.031 72 301.25 72 288.031S82.781 264.031 96 264.031S120 274.813 120 288.031S109.219 312.031 96 312.031ZM128 120.031C105.938 120.031 88 137.969 88 160.031S105.938 200.031 128 200.031S168 182.094 168 160.031S150.063 120.031 128 120.031ZM128 184.031C114.781 184.031 104 173.25 104 160.031S114.781 136.031 128 136.031S152 146.813 152 160.031S141.219 184.031 128 184.031ZM256 56.031C233.938 56.031 216 73.969 216 96.031S233.938 136.031 256 136.031S296 118.094 296 96.031S278.063 56.031 256 56.031ZM256 120.031C242.781 120.031 232 109.25 232 96.031S242.781 72.031 256 72.031S280 82.813 280 96.031S269.219 120.031 256 120.031ZM384 120.031C361.938 120.031 344 137.969 344 160.031S361.938 200.031 384 200.031S424 182.094 424 160.031S406.063 120.031 384 120.031ZM384 184.031C370.781 184.031 360 173.25 360 160.031S370.781 136.031 384 136.031S408 146.813 408 160.031S397.219 184.031 384 184.031Z" />
        </Icon>
    </>
}