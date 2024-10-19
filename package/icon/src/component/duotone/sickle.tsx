
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sickle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=duotone sickle}
 * @preview ![sickle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS44MjIgMTUzLjY4NEM1MTMuNDY0IDE2MS45NjcgNTAyLjYwMSAxNjYuOTEyIDQ5Ny40MjEgMTYwLjExM0M0ODQuNjYzIDE0My4yOTcgNDY4LjM2NiAxMjkuMzI2IDQ0OS42NzEgMTE5LjE4N0M0MDQuNyA5NC40NjEgMzQ3LjYwMyA5Ni4xOTEgMzA0LjAyMSAxMjMuMTQ1QzIzMi41MjMgMTY3LjI4MyAyMTcuNzQzIDI1My40NTkgMjU2LjY1IDMxNy4wMUwxOTcuNDggMzc2LjE4TDEzMy40MjUgMzEyLjIzNEwxNTkuNDA2IDI4Ni4yNTRDMTMzLjA1NiAyNDUuODExIDEyMS4zMSAxOTcuMTc4IDEzMS44NDMgMTQ5Ljg1QzE0OS45MDggNjguNDk2IDIyMC45IDAgMzE3LjkxNyAwQzQ0Ny4yNzEgMCA1MDAuOTU4IDk5LjY1MiA1MTEuODIyIDE1My42ODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEyOS45MzMgMzA4Ljc0QzEyMy42NzcgMzAyLjQ5NSAxMTMuNDQzIDMwMi40OTkgMTA3LjE5MiAzMDguNzVMODQuNjkxIDMzMS4yNUM3OC40NDEgMzM3LjUgNzguNDQxIDM0Ny43NSA4NC42OTEgMzU0TDg3LjMxNiAzNTYuNzVMOS4zNzMgNDM0Ljc1MkMtMy4xMjQgNDQ3LjI0OSAtMy4xMjQgNDY3LjUxMSA5LjM3MyA0ODAuMDA3TDMxLjk5NCA1MDIuNjI3QzQ0LjQ5MiA1MTUuMTI0IDY0Ljc1NCA1MTUuMTI0IDc3LjI1MSA1MDIuNjI3TDE1NS4zMTkgNDI0LjVMMTU4LjA2OSA0MjcuMjVDMTY0LjMyIDQzMy41IDE3NC40NDUgNDMzLjUgMTgwLjY5NSA0MjcuMjVMMjAzLjMyMSA0MDQuNjI1QzIwOS41NzMgMzk4LjM3NCAyMDkuNTY5IDM4OC4yMzcgMjAzLjMxMiAzODEuOTkxTDEyOS45MzMgMzA4Ljc0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sickle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M511.822 153.684C513.464 161.967 502.601 166.912 497.421 160.113C484.663 143.297 468.366 129.326 449.671 119.187C404.7 94.461 347.603 96.191 304.021 123.145C232.523 167.283 217.743 253.459 256.65 317.01L197.48 376.18L133.425 312.234L159.406 286.254C133.056 245.811 121.31 197.178 131.843 149.85C149.908 68.496 220.9 0 317.917 0C447.271 0 500.958 99.652 511.822 153.684Z" />
            <path d="M129.933 308.74C123.677 302.495 113.443 302.499 107.192 308.75L84.691 331.25C78.441 337.5 78.441 347.75 84.691 354L87.316 356.75L9.373 434.752C-3.124 447.249 -3.124 467.511 9.373 480.007L31.994 502.627C44.492 515.124 64.754 515.124 77.251 502.627L155.319 424.5L158.069 427.25C164.32 433.5 174.445 433.5 180.695 427.25L203.321 404.625C209.573 398.374 209.569 388.237 203.312 381.991L129.933 308.74Z" />
        </Icon>
    </>
}