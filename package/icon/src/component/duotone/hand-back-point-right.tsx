
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-back-point-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-point-right?s=duotone hand-back-point-right}
 * @preview ![hand-back-point-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3MiA0MTZDMjcyIDQwNi44NTIgMjY5LjMwMyAzOTguMzg1IDI2NC44NTcgMzkxLjEwN0MyODcuMTMxIDM4Ni45NDEgMzA0IDM2Ny40NjcgMzA0IDM0NEMzMDQgMzI2LjYyMSAyOTQuNjcgMzExLjUzNSAyODAuODMyIDMwMy4xMTFDMzAzLjExNyAyOTguOTU1IDMyMCAyNzkuNDc3IDMyMCAyNTZDMzIwIDI0My42NTIgMzE1LjIwMyAyMzIuNTA2IDMwNy41NDEgMjI0SDQ3MkM0OTQuMDk0IDIyNCA1MTIgMjA2LjA5NCA1MTIgMTg0UzQ5NC4wOTQgMTQ0IDQ3MiAxNDRIMjQ3LjA4NEwyNDcuMDc0IDE0My45ODhIMTc2LjAwNkMxNjcuMTcgMTQzLjk4OCAxNjAuMDA2IDEzNi44MjQgMTYwLjAwNiAxMjcuOTg4QzE2MC4wMDYgMTE5LjE1IDE2Ny4xNyAxMTEuOTg4IDE3Ni4wMDYgMTExLjk4OEgyMjEuNDc1TDE5Ny40ODQgODJDMTg4LjM3NSA3MC42MjUgMTc0LjU3OCA2NCAxNjAgNjRIMTEyQzEwMS42MjUgNjQgOTEuNTE2IDY3LjM3NSA4My4yMDMgNzMuNTk0TDU3LjYwOSA5Mi43ODFDMjEuNTMxIDExOS44NDQgMCAxNjIuOTA2IDAgMjA4VjMyMEMwIDMyMy4zMTggMC4zMzggMzI2LjU1NyAwLjk3OSAzMjkuNjg2QzYuMDY0IDQwNC41MDYgNjcuOTEgNDY0IDE0NCA0NjRIMjI0QzI1MC41MTYgNDY0IDI3MiA0NDIuNSAyNzIgNDE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandBackPointRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M272 416C272 406.852 269.303 398.385 264.857 391.107C287.131 386.941 304 367.467 304 344C304 326.621 294.67 311.535 280.832 303.111C303.117 298.955 320 279.477 320 256C320 243.652 315.203 232.506 307.541 224H472C494.094 224 512 206.094 512 184S494.094 144 472 144H247.084L247.074 143.988H176.006C167.17 143.988 160.006 136.824 160.006 127.988C160.006 119.15 167.17 111.988 176.006 111.988H221.475L197.484 82C188.375 70.625 174.578 64 160 64H112C101.625 64 91.516 67.375 83.203 73.594L57.609 92.781C21.531 119.844 0 162.906 0 208V320C0 323.318 0.338 326.557 0.979 329.686C6.064 404.506 67.91 464 144 464H224C250.516 464 272 442.5 272 416Z" />
        </Icon>
    </>
}