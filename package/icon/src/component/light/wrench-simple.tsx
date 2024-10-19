
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wrench-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=light wrench-simple}
 * @preview ![wrench-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMTc5LjM5NUMzODQgMjQ4LjU1NSAzNDcuNDU1IDMxMS4zOTggMjg3Ljk2MyAzNDUuNjhWNDk2QzI4Ny45NjMgNTA0Ljg0NCAyODAuODA1IDUxMiAyNzEuOTU3IDUxMlMyNTUuOTUxIDUwNC44NDQgMjU1Ljk1MSA0OTZWMzM2LjE4QzI1NS45NTEgMzMwLjE4IDI1OS4zMjYgMzI0LjY4IDI2NC42NzIgMzIxLjkzQzMxOC41MzcgMjk0LjQzIDM1MS45ODggMjM5LjgwNSAzNTEuOTg4IDE3OS4zOTVDMzUxLjk4OCAxMjEuNTU1IDMyMS4yNTggNjkuNjE3IDI3MS45NTcgNDEuMzYzVjE4MS4zMDFDMjcxLjk1NyAxODYuMzM2IDI2OS41OCAxOTEuMDg2IDI2NS41NDkgMTk0LjExN0wyMDEuNTIzIDI0Mi4xMTdDMTk4LjY5OSAyNDQuMjI3IDE5NS4zNTIgMjQ1LjI2NiAxOTIgMjQ1LjI4MUwxOTIgMjQ1LjI4MUMxODguNjQ4IDI0NS4yNjYgMTg1LjMwMSAyNDQuMjI3IDE4Mi40NzcgMjQyLjExN0wxMTguNDUxIDE5NC4xMTdDMTE0LjQyIDE5MS4wODYgMTEyLjA0MyAxODYuMzM2IDExMi4wNDMgMTgxLjMwMVY0MS4zNjNDNjIuNzQyIDY5LjYxNyAzMi4wMTIgMTIxLjU1NSAzMi4wMTIgMTc5LjM5NUMzMi4wMTIgMjM5LjgwNSA2NS40NjMgMjk0LjQzIDExOS4zMjggMzIxLjkzQzEyNC42NzQgMzI0LjY4IDEyOC4wNDkgMzMwLjE4IDEyOC4wNDkgMzM2LjE4VjQ5NkMxMjguMDQ5IDUwNC44NDQgMTIwLjg5MSA1MTIgMTEyLjA0MyA1MTJTOTYuMDM3IDUwNC44NDQgOTYuMDM3IDQ5NlYzNDUuNjhDMzYuNTQ1IDMxMS4zOTggMCAyNDguNTU1IDAgMTc5LjM5NUMwIDEwMC4xOCA0Ny45NTUgMzAuMTc2IDEyMi4yMDMgMS4wODJDMTI3LjE3NCAtMC43OTMgMTMyLjY3NiAtMC4yMyAxMzcuMDUzIDIuNzdDMTQxLjQzIDUuNzM4IDE0NC4wNTcgMTAuNzA3IDE0NC4wNTcgMTUuOTg4VjE3My4zMDFMMTkyIDIwOS4yNUwyMzkuOTQzIDE3My4zMDFWMTUuOTg4QzIzOS45NDMgMTAuNzA3IDI0Mi41NyA1LjczOCAyNDYuOTQ3IDIuNzdDMjUxLjMyNCAtMC4yMyAyNTYuODI2IC0wLjc5MyAyNjEuNzk3IDEuMDgyQzMzNi4wNDUgMzAuMTc2IDM4NCAxMDAuMTggMzg0IDE3OS4zOTVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WrenchSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 179.395C384 248.555 347.455 311.398 287.963 345.68V496C287.963 504.844 280.805 512 271.957 512S255.951 504.844 255.951 496V336.18C255.951 330.18 259.326 324.68 264.672 321.93C318.537 294.43 351.988 239.805 351.988 179.395C351.988 121.555 321.258 69.617 271.957 41.363V181.301C271.957 186.336 269.58 191.086 265.549 194.117L201.523 242.117C198.699 244.227 195.352 245.266 192 245.281L192 245.281C188.648 245.266 185.301 244.227 182.477 242.117L118.451 194.117C114.42 191.086 112.043 186.336 112.043 181.301V41.363C62.742 69.617 32.012 121.555 32.012 179.395C32.012 239.805 65.463 294.43 119.328 321.93C124.674 324.68 128.049 330.18 128.049 336.18V496C128.049 504.844 120.891 512 112.043 512S96.037 504.844 96.037 496V345.68C36.545 311.398 0 248.555 0 179.395C0 100.18 47.955 30.176 122.203 1.082C127.174 -0.793 132.676 -0.23 137.053 2.77C141.43 5.738 144.057 10.707 144.057 15.988V173.301L192 209.25L239.943 173.301V15.988C239.943 10.707 242.57 5.738 246.947 2.77C251.324 -0.23 256.826 -0.793 261.797 1.082C336.045 30.176 384 100.18 384 179.395Z" />
        </Icon>
    </>
}