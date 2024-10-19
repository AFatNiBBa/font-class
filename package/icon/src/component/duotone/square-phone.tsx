
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-phone` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=duotone square-phone}
 * @preview ![square-phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ4IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0OCAzMiAzODQgMzJaTTM1MS42MDIgMzIxLjVMMzM5Ljk3NyAzNzEuODkxQzMzOC4zNDQgMzc5LjAxNiAzMzIuMDc2IDM4NCAzMjQuNzQgMzg0QzE5OC42MTUgMzg0IDk1Ljk5NiAyODEuMzkxIDk1Ljk5NiAxNTUuMjQ4Qzk1Ljk5NiAxNDcuOTIgMTAwLjk4IDE0MS42NTQgMTA4LjEwNSAxNDAuMDI5TDE1OC40ODIgMTI4LjQwNEMxNjUuODI2IDEyNi43MDEgMTczLjM2NSAxMzAuNTE0IDE3Ni40MTIgMTM3LjQ2N0wxOTkuNjc4IDE5MS43NDhDMjAyLjM5NiAxOTguMTM5IDIwMC41NjEgMjA1LjU3NiAxOTUuMTg2IDIwOS45NjdMMTY4LjI3MSAyMzIuMDE2QzE4NS4yNjQgMjY2LjYyNSAyMTMuNDEyIDI5NC43NjYgMjQ4LjAzNyAzMTEuNzY2TDI3MC4wNjEgMjg0Ljg1OUMyNzQuNDA0IDI3OS40NjkgMjgxLjkxMiAyNzcuNjA5IDI4OC4zMDMgMjgwLjM3NUwzNDIuNTQ3IDMwMy42MjVDMzQ5LjUgMzA2LjYyNSAzNTMuMjg5IDMxNC4yMDMgMzUxLjYwMiAzMjEuNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUxLjYwNSAzMjEuNUwzMzkuOTggMzcxLjg5MUMzMzguMzQ4IDM3OS4wMTYgMzMyLjA4IDM4NCAzMjQuNzQ0IDM4NEMxOTguNjE5IDM4NCA5NiAyODEuMzkgOTYgMTU1LjI0N0M5NiAxNDcuOTE5IDEwMC45ODQgMTQxLjY1NCAxMDguMTA5IDE0MC4wMjlMMTU4LjQ4NiAxMjguNDA0QzE2NS44MyAxMjYuNyAxNzMuMzY5IDEzMC41MTMgMTc2LjQxNiAxMzcuNDY2TDE5OS42ODIgMTkxLjc0OEMyMDIuNCAxOTguMTM4IDIwMC41NjQgMjA1LjU3NiAxOTUuMTg5IDIwOS45NjZMMTY4LjI3NSAyMzIuMDE1QzE4NS4yNjggMjY2LjYyNSAyMTMuNDE2IDI5NC43NjUgMjQ4LjA0MSAzMTEuNzY1TDI3MC4wNjQgMjg0Ljg1OUMyNzQuNDA4IDI3OS40NjggMjgxLjkxNiAyNzcuNjA5IDI4OC4zMDcgMjgwLjM3NUwzNDIuNTUxIDMwMy42MjVDMzQ5LjUwNCAzMDYuNjI1IDM1My4yOTMgMzE0LjIwMyAzNTEuNjA1IDMyMS41WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquarePhone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM351.602 321.5L339.977 371.891C338.344 379.016 332.076 384 324.74 384C198.615 384 95.996 281.391 95.996 155.248C95.996 147.92 100.98 141.654 108.105 140.029L158.482 128.404C165.826 126.701 173.365 130.514 176.412 137.467L199.678 191.748C202.396 198.139 200.561 205.576 195.186 209.967L168.271 232.016C185.264 266.625 213.412 294.766 248.037 311.766L270.061 284.859C274.404 279.469 281.912 277.609 288.303 280.375L342.547 303.625C349.5 306.625 353.289 314.203 351.602 321.5Z" />
            <path d="M351.605 321.5L339.98 371.891C338.348 379.016 332.08 384 324.744 384C198.619 384 96 281.39 96 155.247C96 147.919 100.984 141.654 108.109 140.029L158.486 128.404C165.83 126.7 173.369 130.513 176.416 137.466L199.682 191.748C202.4 198.138 200.564 205.576 195.189 209.966L168.275 232.015C185.268 266.625 213.416 294.765 248.041 311.765L270.064 284.859C274.408 279.468 281.916 277.609 288.307 280.375L342.551 303.625C349.504 306.625 353.293 314.203 351.605 321.5Z" />
        </Icon>
    </>
}