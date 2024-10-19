
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `stamp` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=thin stamp}
 * @preview ![stamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzIgNDQwQzQ2Ny41OTQgNDQwIDQ2NCA0NDMuNTk0IDQ2NCA0NDhWNDcyQzQ2NCA0ODUuMjE5IDQ1My4yMTkgNDk2IDQ0MCA0OTZINzJDNTguNzgxIDQ5NiA0OCA0ODUuMjE5IDQ4IDQ3MlY0NDhDNDggNDQzLjU5NCA0NC40MDYgNDQwIDQwIDQ0MFMzMiA0NDMuNTk0IDMyIDQ0OFY0NzJDMzIgNDk0LjA2MiA0OS45MzggNTEyIDcyIDUxMkg0NDBDNDYyLjA2MiA1MTIgNDgwIDQ5NC4wNjIgNDgwIDQ3MlY0NDhDNDgwIDQ0My41OTQgNDc2LjQwNiA0NDAgNDcyIDQ0MFpNNDE1Ljk5OCAyNTUuOTk2SDM0OS41QzMzMy4xMjUgMjU1Ljk5NiAzMjAgMjQyLjg3MSAzMjAgMjI2LjQ5NFYyMTcuMTE5QzMyMC4wMDIgMTg5LjgwOSAzMjguNzgzIDE2My43ODUgMzQxLjM5OCAxMzkuNTYyQzM1MC42ODYgMTIxLjcyOSAzNTQuNDYzIDEwMC42NzggMzUwLjM4OSA3OC4zNjFDMzQzLjMzNCAzOS43MjEgMzExLjY0NiA4LjAxNCAyNzIuOTIyIDEuNDM2QzI2Ny4yMjMgMC40NjcgMjYxLjU4OCAwIDI1Ni4wNjYgMEMyMDMuMDEyIC0wLjAwNCAxNjAgNDIuOTg4IDE2MCA5NS45OTJDMTYwIDExMC4xMTcgMTYzLjEyNSAxMjMuNDkyIDE2OC43NSAxMzUuNjE5QzE4Mi4xIDE2NC41ODYgMTkyLjE1IDE5NS4yMDMgMTkxLjk5OCAyMjcuMjE1QzE5MS45MiAyNDMuMTcyIDE3OC40NTkgMjU1Ljk5NiAxNjIuNSAyNTUuOTk2SDk2LjAwMkM0Mi45ODIgMjU1Ljk5NiAwIDI5OC45NzcgMCAzNTEuOTk4VjM4My45OThDMCA0MDEuNjcyIDE0LjMyOCA0MTUuOTk4IDMyIDQxNS45OThINDgwQzQ5Ny42NzQgNDE1Ljk5OCA1MTIgNDAxLjY3MiA1MTIgMzgzLjk5OFYzNTEuOTk4QzUxMiAyOTguOTc3IDQ2OS4wMiAyNTUuOTk2IDQxNS45OTggMjU1Ljk5NlpNNDk2IDM4My45OThDNDk2IDM5Mi44MiA0ODguODIyIDM5OS45OTggNDgwIDM5OS45OThIMzJDMjMuMTc4IDM5OS45OTggMTYgMzkyLjgyIDE2IDM4My45OThWMzUxLjk5OEMxNiAzMDcuODg1IDUxLjg4OSAyNzEuOTk2IDk2LjAwMiAyNzEuOTk2SDE2Mi41QzE4Ny40NjkgMjcxLjk5NiAyMDcuODc5IDI1MS45NDEgMjA3Ljk5OCAyMjcuMjkxQzIwOC4xNDMgMTk3LjA4NCAyMDAuMjg5IDE2NS44MjYgMTgzLjI2NiAxMjguODg1QzE3OC40NDUgMTE4LjQ5NCAxNzYgMTA3LjQyOCAxNzYgOTUuOTkyQzE3NiA3NC42MzMgMTg0LjMyOCA1NC41NDcgMTk5LjQ0NyAzOS40MzZDMjE0LjU3MiAyNC4zMjIgMjM0LjY4IDE1Ljk5OCAyNTYuMDY2IDE2QzI2MC43NTQgMTYgMjY1LjUyMyAxNi40MDYgMjcwLjI0MiAxNy4yMDlDMzAyLjI3NSAyMi42NSAzMjguNzYgNDguOTc5IDMzNC42NDggODEuMjM0QzMzNy44ODkgOTguOTg2IDMzNS4zMTYgMTE2LjYwMiAzMjcuMjA3IDEzMi4xNzRDMzExLjU5MiAxNjIuMTU4IDMwNC4wMDIgMTg5Ljk0MyAzMDQgMjE3LjExOVYyMjYuNDk0QzMwNCAyNTEuNTg0IDMyNC40MTIgMjcxLjk5NiAzNDkuNSAyNzEuOTk2SDQxNS45OThDNDYwLjExMSAyNzEuOTk2IDQ5NiAzMDcuODg1IDQ5NiAzNTEuOTk4VjM4My45OThaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Stamp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M472 440C467.594 440 464 443.594 464 448V472C464 485.219 453.219 496 440 496H72C58.781 496 48 485.219 48 472V448C48 443.594 44.406 440 40 440S32 443.594 32 448V472C32 494.062 49.938 512 72 512H440C462.062 512 480 494.062 480 472V448C480 443.594 476.406 440 472 440ZM415.998 255.996H349.5C333.125 255.996 320 242.871 320 226.494V217.119C320.002 189.809 328.783 163.785 341.398 139.562C350.686 121.729 354.463 100.678 350.389 78.361C343.334 39.721 311.646 8.014 272.922 1.436C267.223 0.467 261.588 0 256.066 0C203.012 -0.004 160 42.988 160 95.992C160 110.117 163.125 123.492 168.75 135.619C182.1 164.586 192.15 195.203 191.998 227.215C191.92 243.172 178.459 255.996 162.5 255.996H96.002C42.982 255.996 0 298.977 0 351.998V383.998C0 401.672 14.328 415.998 32 415.998H480C497.674 415.998 512 401.672 512 383.998V351.998C512 298.977 469.02 255.996 415.998 255.996ZM496 383.998C496 392.82 488.822 399.998 480 399.998H32C23.178 399.998 16 392.82 16 383.998V351.998C16 307.885 51.889 271.996 96.002 271.996H162.5C187.469 271.996 207.879 251.941 207.998 227.291C208.143 197.084 200.289 165.826 183.266 128.885C178.445 118.494 176 107.428 176 95.992C176 74.633 184.328 54.547 199.447 39.436C214.572 24.322 234.68 15.998 256.066 16C260.754 16 265.523 16.406 270.242 17.209C302.275 22.65 328.76 48.979 334.648 81.234C337.889 98.986 335.316 116.602 327.207 132.174C311.592 162.158 304.002 189.943 304 217.119V226.494C304 251.584 324.412 271.996 349.5 271.996H415.998C460.111 271.996 496 307.885 496 351.998V383.998Z" />
        </Icon>
    </>
}