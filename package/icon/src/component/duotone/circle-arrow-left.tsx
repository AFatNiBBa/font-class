
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-arrow-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=duotone circle-arrow-left}
 * @preview ![circle-arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIyIDE2IDE2IDEyMy40MjIgMTYgMjU2UzEyMy40MjIgNDk2IDI1NiA0OTZTNDk2IDM4OC41NzggNDk2IDI1NlMzODguNTc4IDE2IDI1NiAxNlpNMzg0IDI4OEgyMDUuMjVMMjU0LjYyNSAzMzcuMzc1QzI2Ny4xMjUgMzQ5Ljg3NSAyNjcuMTI1IDM3MC4xMjUgMjU0LjYyNSAzODIuNjI1UzIyMS44NzUgMzk1LjEyNSAyMDkuMzc1IDM4Mi42MjVMMTA1LjM5OCAyNzguNjQ4Qzk3LjQgMjcwLjY2NCA5NiAyNjAuODk4IDk2IDI1NkM5NiAyNTEuMTE3IDk3LjM5MSAyNDEuMzQ0IDEwNS4zOTggMjMzLjM1MkwyMDkuMzc1IDEyOS4zNzVDMjIxLjg3NSAxMTYuODc1IDI0Mi4xMjUgMTE2Ljg3NSAyNTQuNjI1IDEyOS4zNzVTMjY3LjEyNSAxNjIuMTI1IDI1NC42MjUgMTc0LjYyNUwyMDUuMjUgMjI0SDM4NEM0MDEuNjg4IDIyNCA0MTYgMjM4LjMyOCA0MTYgMjU2UzQwMS42ODggMjg4IDM4NCAyODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM4NCAyODhIMjA1LjI1TDI1NC42MjUgMzM3LjM3NUMyNjcuMTI1IDM0OS44NzUgMjY3LjEyNSAzNzAuMTI1IDI1NC42MjUgMzgyLjYyNVMyMjEuODc1IDM5NS4xMjUgMjA5LjM3NSAzODIuNjI1TDEwNS4zOTggMjc4LjY0OEM5Ny40IDI3MC42NjQgOTYgMjYwLjg5OCA5NiAyNTZDOTYgMjUxLjExNyA5Ny4zOTEgMjQxLjM0NCAxMDUuMzk4IDIzMy4zNTJMMjA5LjM3NSAxMjkuMzc1QzIyMS44NzUgMTE2Ljg3NSAyNDIuMTI1IDExNi44NzUgMjU0LjYyNSAxMjkuMzc1UzI2Ny4xMjUgMTYyLjEyNSAyNTQuNjI1IDE3NC42MjVMMjA1LjI1IDIyNEgzODRDNDAxLjY4OCAyMjQgNDE2IDIzOC4zMjggNDE2IDI1NlM0MDEuNjg4IDI4OCAzODQgMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleArrowLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM384 288H205.25L254.625 337.375C267.125 349.875 267.125 370.125 254.625 382.625S221.875 395.125 209.375 382.625L105.398 278.648C97.4 270.664 96 260.898 96 256C96 251.117 97.391 241.344 105.398 233.352L209.375 129.375C221.875 116.875 242.125 116.875 254.625 129.375S267.125 162.125 254.625 174.625L205.25 224H384C401.688 224 416 238.328 416 256S401.688 288 384 288Z" />
            <path d="M384 288H205.25L254.625 337.375C267.125 349.875 267.125 370.125 254.625 382.625S221.875 395.125 209.375 382.625L105.398 278.648C97.4 270.664 96 260.898 96 256C96 251.117 97.391 241.344 105.398 233.352L209.375 129.375C221.875 116.875 242.125 116.875 254.625 129.375S267.125 162.125 254.625 174.625L205.25 224H384C401.688 224 416 238.328 416 256S401.688 288 384 288Z" />
        </Icon>
    </>
}