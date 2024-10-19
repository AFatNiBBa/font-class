
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=thin wave-square}
 * @preview ![wave-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMjU2QzY0MCAyNjAuNDA2IDYzNi40MDYgMjY0IDYzMiAyNjRINTEyQzQ5OC43ODEgMjY0IDQ4OCAyNzQuNzgxIDQ4OCAyODhWNDE2QzQ4OCA0MzguMDYyIDQ3MC4wNjIgNDU2IDQ0OCA0NTZIMzUyQzMyOS45MzggNDU2IDMxMiA0MzguMDYyIDMxMiA0MTZWOTZDMzEyIDgyLjc4MSAzMDEuMjE5IDcyIDI4OCA3MkgxOTJDMTc4Ljc4MSA3MiAxNjggODIuNzgxIDE2OCA5NlYyMjRDMTY4IDI0Ni4wNjIgMTUwLjA2MiAyNjQgMTI4IDI2NEg4QzMuNTk0IDI2NCAwIDI2MC40MDYgMCAyNTZTMy41OTQgMjQ4IDggMjQ4SDEyOEMxNDEuMjE5IDI0OCAxNTIgMjM3LjIxOSAxNTIgMjI0Vjk2QzE1MiA3My45MzggMTY5LjkzOCA1NiAxOTIgNTZIMjg4QzMxMC4wNjIgNTYgMzI4IDczLjkzOCAzMjggOTZWNDE2QzMyOCA0MjkuMjE5IDMzOC43ODEgNDQwIDM1MiA0NDBINDQ4QzQ2MS4yMTkgNDQwIDQ3MiA0MjkuMjE5IDQ3MiA0MTZWMjg4QzQ3MiAyNjUuOTM4IDQ4OS45MzggMjQ4IDUxMiAyNDhINjMyQzYzNi40MDYgMjQ4IDY0MCAyNTEuNTk0IDY0MCAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WaveSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 256C640 260.406 636.406 264 632 264H512C498.781 264 488 274.781 488 288V416C488 438.062 470.062 456 448 456H352C329.938 456 312 438.062 312 416V96C312 82.781 301.219 72 288 72H192C178.781 72 168 82.781 168 96V224C168 246.062 150.062 264 128 264H8C3.594 264 0 260.406 0 256S3.594 248 8 248H128C141.219 248 152 237.219 152 224V96C152 73.938 169.938 56 192 56H288C310.062 56 328 73.938 328 96V416C328 429.219 338.781 440 352 440H448C461.219 440 472 429.219 472 416V288C472 265.938 489.938 248 512 248H632C636.406 248 640 251.594 640 256Z" />
        </Icon>
    </>
}