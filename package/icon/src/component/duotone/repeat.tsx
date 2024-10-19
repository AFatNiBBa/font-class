
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `repeat` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=duotone repeat}
 * @preview ![repeat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4NS40NDQgMjU4LjM0NEM0ODAuOTkxIDI1Ni43NSA0NzYuNDYxIDI1NiA0NzEuOTkzIDI1NkM0NTUuNTcxIDI1NiA0NDAuMTY1IDI2Ni4xODggNDM0LjMyMyAyODIuNTMxQzQxNi4wNzMgMzMzLjY1NiAzNjcuMzQgMzY4IDMxMy4wNzcgMzY4SDE5Mi4wMTRWMzI4QzE5Mi4wMTQgMzE4LjI5NyAxODYuMTY4IDMwOS41NDcgMTc3LjIgMzA1LjgyOEMxNjguMjI5IDMwMi4xMDkgMTU3LjkxNyAzMDQuMTcyIDE1MS4wNCAzMTEuMDMxTDcxLjAzIDM5MS4wMzFDNjEuNjU3IDQwMC40MDIgNjEuNjU3IDQxNS41OTggNzEuMDMgNDI0Ljk2OUwxNTEuMDQgNTA0Ljk2OUMxNTcuOTE3IDUxMS44MjggMTY4LjIyOSA1MTMuODkxIDE3Ny4yIDUxMC4xNzJDMTg2LjE2OCA1MDYuNDUzIDE5Mi4wMTQgNDk3LjcwMyAxOTIuMDE0IDQ4OFY0NDhIMzEzLjA3N0M0MDEuMDU3IDQ0OCA0ODAuMDY5IDM5Mi4zMTIgNTA5LjY2MyAzMDkuNDY5QzUxNy4wODQgMjg4LjY1NiA1MDYuMjU2IDI2NS43NSA0ODUuNDQ0IDI1OC4zNDRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ0MC45NzEgMTIwLjk2OUwzNjAuOTYyIDIwMC45NjlDMzU0LjA4NSAyMDcuODI4IDM0My43NzIgMjA5Ljg5MSAzMzQuODAzIDIwNi4xNzJDMzI1LjgzMyAyMDIuNDUzIDMxOS45ODcgMTkzLjcwMyAzMTkuOTg3IDE4NFYxNDRIMTk4LjkyNEMxNDQuNjYxIDE0NCA5NS45MjggMTc4LjM0NCA3Ny42NzggMjI5LjQ2OUM3MS44MzUgMjQ1LjgxMiA1Ni40MyAyNTYgNDAuMDA4IDI1NkMzNS41NCAyNTYgMzEuMDA4IDI1NS4yNSAyNi41NTUgMjUzLjY1NkM1Ljc0NSAyNDYuMjUgLTUuMDgzIDIyMy4zNDQgMi4zMzkgMjAyLjUzMUMzMS45MyAxMTkuNjg4IDExMC45NDIgNjQgMTk4LjkyNCA2NEgzMTkuOTg3VjI0QzMxOS45ODcgMTQuMjk3IDMyNS44MzMgNS41NDcgMzM0LjgwMyAxLjgyOEMzNDMuNzcyIC0xLjg5MSAzNTQuMDg1IDAuMTcyIDM2MC45NjIgNy4wMzFMNDQwLjk3MSA4Ny4wMzFDNDUwLjM0NCA5Ni40MDIgNDUwLjM0NCAxMTEuNTk4IDQ0MC45NzEgMTIwLjk2OVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Repeat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M485.444 258.344C480.991 256.75 476.461 256 471.993 256C455.571 256 440.165 266.188 434.323 282.531C416.073 333.656 367.34 368 313.077 368H192.014V328C192.014 318.297 186.168 309.547 177.2 305.828C168.229 302.109 157.917 304.172 151.04 311.031L71.03 391.031C61.657 400.402 61.657 415.598 71.03 424.969L151.04 504.969C157.917 511.828 168.229 513.891 177.2 510.172C186.168 506.453 192.014 497.703 192.014 488V448H313.077C401.057 448 480.069 392.312 509.663 309.469C517.084 288.656 506.256 265.75 485.444 258.344Z" />
            <path d="M440.971 120.969L360.962 200.969C354.085 207.828 343.772 209.891 334.803 206.172C325.833 202.453 319.987 193.703 319.987 184V144H198.924C144.661 144 95.928 178.344 77.678 229.469C71.835 245.812 56.43 256 40.008 256C35.54 256 31.008 255.25 26.555 253.656C5.745 246.25 -5.083 223.344 2.339 202.531C31.93 119.688 110.942 64 198.924 64H319.987V24C319.987 14.297 325.833 5.547 334.803 1.828C343.772 -1.891 354.085 0.172 360.962 7.031L440.971 87.031C450.344 96.402 450.344 111.598 440.971 120.969Z" />
        </Icon>
    </>
}