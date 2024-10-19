
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-clock` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-clock?s=thin trash-can-clock}
 * @preview ![trash-can-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNzJDNDQ4IDY3LjU3OCA0NDQuNDA2IDY0IDQ0MCA2NEgzMjMuMzgzTDMwMi40MzggMjIuMTI1QzI5NS42MjUgOC40NjkgMjgxLjkzOCAwIDI2Ni42NTYgMEgxODEuMzQ0QzE2Ni4wNjIgMCAxNTIuMzc1IDguNDY5IDE0NS41NjIgMjIuMTA5TDEyNC42MTcgNjRIOEMzLjU5NCA2NCAwIDY3LjU3OCAwIDcyUzMuNTk0IDgwIDggODBINDQwQzQ0NC40MDYgODAgNDQ4IDc2LjQyMiA0NDggNzJaTTE0Mi41MDggNjRMMTU5Ljg3NSAyOS4yNUMxNjMuOTY5IDIxLjA3OCAxNzIuMTg4IDE2IDE4MS4zNDQgMTZIMjY2LjY1NkMyNzUuODEyIDE2IDI4NC4wMzEgMjEuMDc4IDI4OC4xMjUgMjkuMjY2TDMwNS40OTIgNjRIMTQyLjUwOFpNNDg4IDM2MEg0NDBWMjk2QzQ0MCAyOTEuNTk0IDQzNi40MDYgMjg4IDQzMiAyODhTNDI0IDI5MS41OTQgNDI0IDI5NlYzNjhDNDI0IDM3Mi40MDYgNDI3LjU5NCAzNzYgNDMyIDM3Nkg0ODhDNDkyLjQwNiAzNzYgNDk2IDM3Mi40MDYgNDk2IDM2OFM0OTIuNDA2IDM2MCA0ODggMzYwWk00MzIgMjI0QzM1Mi4zNzUgMjI0IDI4OCAyODguMzc1IDI4OCAzNjhTMzUyLjM3NSA1MTIgNDMyIDUxMlM1NzYgNDQ3LjYyNSA1NzYgMzY4UzUxMS42MjUgMjI0IDQzMiAyMjRaTTQzMiA0OTZDMzYxLjQyIDQ5NiAzMDQgNDM4LjU3OCAzMDQgMzY4QzMwNCAyOTcuNDIgMzYxLjQyIDI0MCA0MzIgMjQwUzU2MCAyOTcuNDIgNTYwIDM2OEM1NjAgNDM4LjU3OCA1MDIuNTggNDk2IDQzMiA0OTZaTTMxMiAxNzZWMjE2QzMxMiAyMjAuNDE4IDMxNS41ODIgMjI0IDMyMCAyMjRTMzI4IDIyMC40MTggMzI4IDIxNlYxNzZDMzI4IDE3MS41NzggMzI0LjQwNiAxNjggMzIwIDE2OFMzMTIgMTcxLjU3OCAzMTIgMTc2Wk00MDAgMTI4VjE4NEM0MDAgMTg4LjQxOCA0MDMuNTgyIDE5MiA0MDggMTkyUzQxNiAxODguNDE4IDQxNiAxODRWMTI4QzQxNiAxMjMuNTc4IDQxMi40MDYgMTIwIDQwOCAxMjBTNDAwIDEyMy41NzggNDAwIDEyOFpNMjk2IDQ5NkgxMDRDNzMuMDcyIDQ5NiA0OCA0NzAuOTI4IDQ4IDQ0MFYxMjhDNDggMTIzLjU3OCA0NC40MDYgMTIwIDQwIDEyMFMzMiAxMjMuNTc4IDMyIDEyOFY0NDBDMzIgNDc5Ljc2NCA2NC4yMzYgNTEyIDEwNCA1MTJIMjk2QzMwMC40MTggNTEyIDMwNCA1MDguNDE4IDMwNCA1MDRTMzAwLjQxOCA0OTYgMjk2IDQ5NlpNMTIwIDE3NlY0MzJDMTIwIDQzNi40MjIgMTIzLjU5NCA0NDAgMTI4IDQ0MFMxMzYgNDM2LjQyMiAxMzYgNDMyVjE3NkMxMzYgMTcxLjU3OCAxMzIuNDA2IDE2OCAxMjggMTY4UzEyMCAxNzEuNTc4IDEyMCAxNzZaTTIxNiAxNzZWNDMyQzIxNiA0MzYuNDIyIDIxOS41OTQgNDQwIDIyNCA0NDBTMjMyIDQzNi40MjIgMjMyIDQzMlYxNzZDMjMyIDE3MS41NzggMjI4LjQwNiAxNjggMjI0IDE2OFMyMTYgMTcxLjU3OCAyMTYgMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrashCanClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M448 72C448 67.578 444.406 64 440 64H323.383L302.438 22.125C295.625 8.469 281.938 0 266.656 0H181.344C166.062 0 152.375 8.469 145.562 22.109L124.617 64H8C3.594 64 0 67.578 0 72S3.594 80 8 80H440C444.406 80 448 76.422 448 72ZM142.508 64L159.875 29.25C163.969 21.078 172.188 16 181.344 16H266.656C275.812 16 284.031 21.078 288.125 29.266L305.492 64H142.508ZM488 360H440V296C440 291.594 436.406 288 432 288S424 291.594 424 296V368C424 372.406 427.594 376 432 376H488C492.406 376 496 372.406 496 368S492.406 360 488 360ZM432 224C352.375 224 288 288.375 288 368S352.375 512 432 512S576 447.625 576 368S511.625 224 432 224ZM432 496C361.42 496 304 438.578 304 368C304 297.42 361.42 240 432 240S560 297.42 560 368C560 438.578 502.58 496 432 496ZM312 176V216C312 220.418 315.582 224 320 224S328 220.418 328 216V176C328 171.578 324.406 168 320 168S312 171.578 312 176ZM400 128V184C400 188.418 403.582 192 408 192S416 188.418 416 184V128C416 123.578 412.406 120 408 120S400 123.578 400 128ZM296 496H104C73.072 496 48 470.928 48 440V128C48 123.578 44.406 120 40 120S32 123.578 32 128V440C32 479.764 64.236 512 104 512H296C300.418 512 304 508.418 304 504S300.418 496 296 496ZM120 176V432C120 436.422 123.594 440 128 440S136 436.422 136 432V176C136 171.578 132.406 168 128 168S120 171.578 120 176ZM216 176V432C216 436.422 219.594 440 224 440S232 436.422 232 432V176C232 171.578 228.406 168 224 168S216 171.578 216 176Z" />
        </Icon>
    </>
}