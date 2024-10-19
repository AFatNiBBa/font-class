
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=duotone chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0My42NTggNDMuMTE0QzIyNy42OSAyNy44MzQgMjAyLjM2MiAyOC4zNjUgMTg3LjA5NiA0NC4zNjRMMTEuMDk4IDIyOC4zNTZDLTMuNjk5IDI0My44MjQgLTMuNjk5IDI2OC4xOTggMTEuMDk4IDI4My42NjZMMTg3LjA5NiA0NjcuNjU3QzE5NC45NTUgNDc1Ljg3NSAyMDUuNDcxIDQ4MCAyMTYuMDAyIDQ4MEMyMjUuOTQgNDgwIDIzNS45MDggNDc2LjMxMyAyNDMuNjU4IDQ2OC45MDdDMjU5LjYxMSA0NTMuNjI2IDI2MC4xNzQgNDI4LjMxNSAyNDQuOTA4IDQxMi4zNDdMOTUuMzYzIDI1Ni4wMTFMMjQ0LjkwOCA5OS42NzRDMjYwLjE3NCA4My43MDYgMjU5LjYxMSA1OC4zOTUgMjQzLjY1OCA0My4xMTRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M243.658 43.114C227.69 27.834 202.362 28.365 187.096 44.364L11.098 228.356C-3.699 243.824 -3.699 268.198 11.098 283.666L187.096 467.657C194.955 475.875 205.471 480 216.002 480C225.94 480 235.908 476.313 243.658 468.907C259.611 453.626 260.174 428.315 244.908 412.347L95.363 256.011L244.908 99.674C260.174 83.706 259.611 58.395 243.658 43.114Z" />
        </Icon>
    </>
}