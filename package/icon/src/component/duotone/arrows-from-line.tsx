
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrows-from-line` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-from-line?s=duotone arrows-from-line}
 * @preview ![arrows-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDI4Ny45NzlINDE2QzQzMy42ODggMjg3Ljk3OSA0NDggMjczLjY2NyA0NDggMjU1Ljk3OVM0MzMuNjg4IDIyMy45NzkgNDE2IDIyMy45NzlIMzJDMTQuMzEyIDIyMy45NzkgMCAyMzguMjkyIDAgMjU1Ljk3OVMxNC4zMTIgMjg3Ljk3OSAzMiAyODcuOTc5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNjAgMTI3Ljk2OUMxNjguMTg4IDEyNy45NjkgMTc2LjM3NSAxMjQuODQ0IDE4Mi42MjUgMTE4LjU5M0wxOTIgMTA5LjIxOFYxNTkuOTcyQzE5MiAxNzcuNjYxIDIwNi4zMTIgMTkxLjk3NCAyMjQgMTkxLjk3NFMyNTYgMTc3LjY2MSAyNTYgMTU5Ljk3MlYxMDkuMjE4TDI2NS4zNzUgMTE4LjU5M0MyNzEuNjI1IDEyNC44NDQgMjc5LjgxMiAxMjcuOTY5IDI4OCAxMjcuOTY5QzMwNi4yNzkgMTI3Ljk2OSAzMjAgMTEzLjAyMiAzMjAgOTUuOTY3QzMyMCA4Ny43NzkgMzE2Ljg3NSA3OS41OSAzMTAuNjI1IDczLjM0TDI0Ni42NjYgOS4zNzRDMjM4LjYyMSAxLjMwMiAyMjguOTQ0IDAgMjIzLjk5OSAwQzIxOS4xMDIgMCAyMDkuNDA1IDEuMjc2IDIwMS4zMzQgOS4zNzRMMTM3LjM3NSA3My4zNEMxMzEuMTI1IDc5LjU5IDEyOCA4Ny43NzkgMTI4IDk1Ljk2N0MxMjggMTEzLjAyMSAxNDEuNzMxIDEyNy45NjkgMTYwIDEyNy45NjlaTTI4OCAzODMuOTlDMjc5LjgxMiAzODMuOTkgMjcxLjYyNSAzODcuMTE1IDI2NS4zNzUgMzkzLjM2NkwyNTYgNDAyLjc0MVYzNTEuOTg3QzI1NiAzMzQuMjk4IDI0MS42ODggMzE5Ljk4NSAyMjQgMzE5Ljk4NVMxOTIgMzM0LjI5OCAxOTIgMzUxLjk4N1Y0MDIuNzQxTDE4Mi42MjUgMzkzLjM2NkMxNzYuMzc1IDM4Ny4xMTUgMTY4LjE4OCAzODMuOTkgMTYwIDM4My45OUMxNDEuNzIxIDM4My45OSAxMjggMzk4LjkzNyAxMjggNDE1Ljk5MkMxMjggNDI0LjE4IDEzMS4xMjUgNDMyLjM2OSAxMzcuMzc1IDQzOC42MTlMMjAxLjMzNCA1MDIuNTg1QzIwOS4zNDQgNTEwLjYyOCAyMTkuMTQ0IDUxMiAyMjQgNTEyQzIyOC44NDcgNTEyIDIzOC42NTQgNTEwLjYyOSAyNDYuNjY2IDUwMi41ODVMMzEwLjYyNSA0MzguNjE5QzMxNi44NzUgNDMyLjM2OSAzMjAgNDI0LjE4IDMyMCA0MTUuOTkyQzMyMCAzOTguOTM4IDMwNi4yNjkgMzgzLjk5IDI4OCAzODMuOTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowsFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M32 287.979H416C433.688 287.979 448 273.667 448 255.979S433.688 223.979 416 223.979H32C14.312 223.979 0 238.292 0 255.979S14.312 287.979 32 287.979Z" />
            <path d="M160 127.969C168.188 127.969 176.375 124.844 182.625 118.593L192 109.218V159.972C192 177.661 206.312 191.974 224 191.974S256 177.661 256 159.972V109.218L265.375 118.593C271.625 124.844 279.812 127.969 288 127.969C306.279 127.969 320 113.022 320 95.967C320 87.779 316.875 79.59 310.625 73.34L246.666 9.374C238.621 1.302 228.944 0 223.999 0C219.102 0 209.405 1.276 201.334 9.374L137.375 73.34C131.125 79.59 128 87.779 128 95.967C128 113.021 141.731 127.969 160 127.969ZM288 383.99C279.812 383.99 271.625 387.115 265.375 393.366L256 402.741V351.987C256 334.298 241.688 319.985 224 319.985S192 334.298 192 351.987V402.741L182.625 393.366C176.375 387.115 168.188 383.99 160 383.99C141.721 383.99 128 398.937 128 415.992C128 424.18 131.125 432.369 137.375 438.619L201.334 502.585C209.344 510.628 219.144 512 224 512C228.847 512 238.654 510.629 246.666 502.585L310.625 438.619C316.875 432.369 320 424.18 320 415.992C320 398.938 306.269 383.99 288 383.99Z" />
        </Icon>
    </>
}