
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=regular circle-microphone-lines}
 * @preview ![circle-microphone-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzA0QzI4Mi41MTYgMzA0IDMwNCAyODIuNTE2IDMwNCAyNTZWMjI0SDI4MEMyNzUuNTgyIDIyNCAyNzIgMjIwLjQxOCAyNzIgMjE2UzI3NS41ODIgMjA4IDI4MCAyMDhIMzA0VjE3NkgyODBDMjc1LjU4MiAxNzYgMjcyIDE3Mi40MTggMjcyIDE2OFMyNzUuNTgyIDE2MCAyODAgMTYwSDMwNFYxNDRDMzA0IDExNy40ODQgMjgyLjUxNiA5NiAyNTYgOTZTMjA4IDExNy40ODQgMjA4IDE0NFYyNTZDMjA4IDI4Mi41MTYgMjI5LjQ4NCAzMDQgMjU2IDMwNFpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDQ4QzE1MC4xMzEgNDQ4IDY0IDM2MS44NjkgNjQgMjU2UzE1MC4xMzEgNjQgMjU2IDY0UzQ0OCAxNTAuMTMxIDQ0OCAyNTZTMzYxLjg2OSA0NDggMjU2IDQ0OFpNMzYwIDIzMkMzNDYuNzUgMjMyIDMzNiAyNDIuNzUgMzM2IDI1NkMzMzYgMzAwLjEwOSAzMDAuMTA5IDMzNiAyNTYgMzM2UzE3NiAzMDAuMTA5IDE3NiAyNTZDMTc2IDI0Mi43NSAxNjUuMjUgMjMyIDE1MiAyMzJTMTI4IDI0Mi43NSAxMjggMjU2QzEyOCAzMTguMzU5IDE3Mi44NzcgMzcwLjI4NyAyMzIgMzgxLjU3MlYzOTJDMjMyIDQwNS4yNSAyNDIuNzUgNDE2IDI1NiA0MTZTMjgwIDQwNS4yNSAyODAgMzkyVjM4MS41NzJDMzM5LjEyMyAzNzAuMjg3IDM4NCAzMTguMzU5IDM4NCAyNTZDMzg0IDI0Mi43NSAzNzMuMjUgMjMyIDM2MCAyMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleMicrophoneLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 304C282.516 304 304 282.516 304 256V224H280C275.582 224 272 220.418 272 216S275.582 208 280 208H304V176H280C275.582 176 272 172.418 272 168S275.582 160 280 160H304V144C304 117.484 282.516 96 256 96S208 117.484 208 144V256C208 282.516 229.484 304 256 304ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM360 232C346.75 232 336 242.75 336 256C336 300.109 300.109 336 256 336S176 300.109 176 256C176 242.75 165.25 232 152 232S128 242.75 128 256C128 318.359 172.877 370.287 232 381.572V392C232 405.25 242.75 416 256 416S280 405.25 280 392V381.572C339.123 370.287 384 318.359 384 256C384 242.75 373.25 232 360 232Z" />
        </Icon>
    </>
}