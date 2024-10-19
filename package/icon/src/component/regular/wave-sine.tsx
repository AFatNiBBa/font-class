
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wave-sine` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wave-sine?s=regular wave-sine}
 * @preview ![wave-sine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzguOTExIDI3OC4yNEM2MzIuODY0IDI5Ny4yNTQgNTc2LjY4MSA0NjQgNDY3LjIwNCA0NjRDMzcxLjk2MyA0NjQgMzMyLjEzOCAzNTcuNjk3IDI5Ni45OTkgMjYzLjkwNkMyNjcuMzI0IDE4NC42MjcgMjMzLjY4OCA5NC43NyAxNzIuNzk0IDk0Ljc3QzExNi43MDggOTQuNzcgNjcuMzA3IDE4Ni4wMjEgNDcuNzkyIDI0Ny4zNEM0My45MTcgMjU5LjYwMiAzMi43MzIgMjYzLjk1MSAyNC4zMzIgMjYzLjk1MUMyMS44MDEgMjYzLjk1MSAxOS4zNTQgMjYzLjU4MiAxNy42NTIgMjYzLjAwNkMxMS4xMzUgMjYxLjIwOSA1LjgzNCAyNTcuMDQ1IDIuNzI5IDI1MS4yNzlDLTAuMjIyIDI0NS44MDMgLTAuNzk4IDIzOS41NTkgMS4wOSAyMzMuNzM2QzcuMTM1IDIxNC43MjUgNjMuMzIzIDQ4IDE3Mi43OTQgNDhDMjY4LjAzNyA0OCAzMDcuODYyIDE1NC4zMDMgMzQyLjk5OSAyNDguMDk2QzM3Mi42NzQgMzI3LjM3NSA0MDYuMzA5IDQxNy4yMyA0NjcuMjA0IDQxNy4yM0M1MjMuMjg4IDQxNy4yMyA1NzIuNjg5IDMyNS45NjUgNTkyLjIwNiAyNjQuNjM1QzU5Ni4wNzUgMjUyLjQgNjA3LjMyNCAyNDguMDU5IDYxNS43ODMgMjQ4LjA1OUM2MTguMjU1IDI0OC4wNTkgNjIwLjY0NiAyNDguNDEgNjIyLjM0NSAyNDguOTcxQzYyOC43NjkgMjUwLjc0IDYzNC4yMDggMjU1LjAxNCA2MzcuMjcgMjYwLjY5N0M2NDAuMjIyIDI2Ni4xNzIgNjQwLjc5OCAyNzIuNDE4IDYzOC45MTEgMjc4LjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WaveSine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M638.911 278.24C632.864 297.254 576.681 464 467.204 464C371.963 464 332.138 357.697 296.999 263.906C267.324 184.627 233.688 94.77 172.794 94.77C116.708 94.77 67.307 186.021 47.792 247.34C43.917 259.602 32.732 263.951 24.332 263.951C21.801 263.951 19.354 263.582 17.652 263.006C11.135 261.209 5.834 257.045 2.729 251.279C-0.222 245.803 -0.798 239.559 1.09 233.736C7.135 214.725 63.323 48 172.794 48C268.037 48 307.862 154.303 342.999 248.096C372.674 327.375 406.309 417.23 467.204 417.23C523.288 417.23 572.689 325.965 592.206 264.635C596.075 252.4 607.324 248.059 615.783 248.059C618.255 248.059 620.646 248.41 622.345 248.971C628.769 250.74 634.208 255.014 637.27 260.697C640.222 266.172 640.798 272.418 638.911 278.24Z" />
        </Icon>
    </>
}