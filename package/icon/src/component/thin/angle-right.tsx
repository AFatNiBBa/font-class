
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=thin angle-right}
 * @preview ![angle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2LjAwMUMyMjQgMjU4LjAwMSAyMjMuMjY2IDI1OS45NyAyMjEuNzgxIDI2MS41MzJMNzcuNzc0IDQxMy41MjlDNzQuNzI3IDQxNi43MTcgNjkuNjQ5IDQxNi44NDIgNjYuNDYxIDQxMy43NzlDNjMuMjczIDQxMC42ODYgNjMuMTggNDA1LjYyMyA2Ni4yMTEgNDAyLjQ2N0wyMDQuOTIxIDI1Ni4wMDFMNjYuMjA5IDEwOS41MzNDNjMuMTc4IDEwNi4zMTQgNjMuMjcxIDEwMS4yNTIgNjYuNDU5IDk4LjIyMUM2OS42NDYgOTUuMTU4IDc0LjcyNSA5NS4yODMgNzcuNzcyIDk4LjQ3MUwyMjEuNzgxIDI1MC40N0MyMjMuMjY2IDI1Mi4wMzIgMjI0IDI1NC4wMDEgMjI0IDI1Ni4wMDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function AngleRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M224 256.001C224 258.001 223.266 259.97 221.781 261.532L77.774 413.529C74.727 416.717 69.649 416.842 66.461 413.779C63.273 410.686 63.18 405.623 66.211 402.467L204.921 256.001L66.209 109.533C63.178 106.314 63.271 101.252 66.459 98.221C69.646 95.158 74.725 95.283 77.772 98.471L221.781 250.47C223.266 252.032 224 254.001 224 256.001Z" />
        </Icon>
    </>
}