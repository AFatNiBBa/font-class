
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=regular arrow-left}
 * @preview ![arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuOTg0IDI1Ni4wMDhDNDQ3Ljk4NCAyNjkuMjU4IDQzNy4yMzQgMjgwLjAwOCA0MjMuOTg0IDI4MC4wMDhIODMuODk1TDIxNi41NjIgNDA2LjYzM0MyMjYuMTg3IDQxNS43ODkgMjI2LjUzMSA0MzEuMDM5IDIxNy4zNzUgNDQwLjU3QzIwOC4yMTkgNDUwLjE2NCAxOTMuMDMxIDQ1MC41MDggMTgzLjQzNyA0NDEuMzgzTDcuNDM3IDI3My4zODNDMi42ODggMjY4Ljg1MiAwIDI2Mi41NyAwIDI1Ni4wMDhTMi42ODggMjQzLjE2NCA3LjQzOCAyMzguNjMzTDE4My40MzggNzAuNjMzQzE5My4wMzEgNjEuNTA4IDIwOC4yMTkgNjEuODUyIDIxNy4zNzUgNzEuNDQ1QzIyNi41MzEgODAuOTQ1IDIyNi4xODggOTYuMTk1IDIxNi41NjMgMTA1LjM4M0w4My44OTUgMjMyLjAwOEg0MjMuOTg0QzQzNy4yMzQgMjMyLjAwOCA0NDcuOTg0IDI0Mi43NTggNDQ3Ljk4NCAyNTYuMDA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M447.984 256.008C447.984 269.258 437.234 280.008 423.984 280.008H83.895L216.562 406.633C226.187 415.789 226.531 431.039 217.375 440.57C208.219 450.164 193.031 450.508 183.437 441.383L7.437 273.383C2.688 268.852 0 262.57 0 256.008S2.688 243.164 7.438 238.633L183.438 70.633C193.031 61.508 208.219 61.852 217.375 71.445C226.531 80.945 226.188 96.195 216.563 105.383L83.895 232.008H423.984C437.234 232.008 447.984 242.758 447.984 256.008Z" />
        </Icon>
    </>
}