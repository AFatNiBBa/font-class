
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tire` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tire?s=thin tire}
 * @preview ![tire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMEMxMTQuNjE1IDAgMCAxMTQuNjE1IDAgMjU2UzExNC42MTUgNTEyIDI1NiA1MTJTNTEyIDM5Ny4zODUgNTEyIDI1NlMzOTcuMzg1IDAgMjU2IDBaTTI1NiA0OTZDMTIzLjY2NCA0OTYgMTYgMzg4LjMzNiAxNiAyNTZTMTIzLjY2NCAxNiAyNTYgMTZTNDk2IDEyMy42NjQgNDk2IDI1NlMzODguMzM2IDQ5NiAyNTYgNDk2Wk0yNTYgOTZDMTY3LjYzNSA5NiA5NiAxNjcuNjM1IDk2IDI1NlMxNjcuNjM1IDQxNiAyNTYgNDE2UzQxNiAzNDQuMzY1IDQxNiAyNTZTMzQ0LjM2NSA5NiAyNTYgOTZaTTI1Ni4wMzcgMTExLjk1N0MyODQuNDk2IDExMS45NTcgMzExLjE4MiAxMjAuNTcyIDMzMy44NzUgMTM1LjIwOUwyODYuNDE2IDIwMC41MUMyNzcuMTA1IDE5NS40MTIgMjY2Ljg3OSAxOTEuOTgyIDI1Ni4wMTQgMTkxLjk4MkMyNDEuMzAxIDE5MS45ODIgMjMwLjg1IDE5Ni44ODUgMjI1LjIwMSAxOTkuOTg0TDE3OC4yODUgMTM1LjQzQzE4OC41NjYgMTI4Ljc5MyAyMTQuODg1IDExMS45NTcgMjU2LjAzNyAxMTEuOTU3Wk0xNjUuMjI3IDE0NC42N0wyMTIuMzIyIDIwOS40NzFDMTk2LjcwNyAyMjQuMTU4IDE4OS4yNDYgMjQ2LjA0NSAxOTMuNDMgMjY3LjkyOEwxMTcuMzQ0IDI5Mi42MzlDMTAyLjY0MyAyMzYuOTQzIDEyMi41ODQgMTc5LjUyOSAxNjUuMjI3IDE0NC42N1pNMjQ4IDM5OS40MDhDMTkxLjUwOCAzOTYuMjg1IDE0Mi41NyAzNjAuNzE1IDEyMi4xMjMgMzA3LjkxTDE5OC44NDQgMjgyLjk5MkMyMDguMzI4IDMwMy4wMjEgMjI2Ljg0NCAzMTYuMDIxIDI0OCAzMTguNzU0VjM5OS40MDhaTTI1NS45ODYgMzA0LjAxOEMyMzUuMTM5IDMwNC4wMTggMjE2Ljc5OSAyOTAuNjgyIDIxMC4zNSAyNzAuODMyQzIwNi4zODcgMjU4LjYzOSAyMDcuNDEgMjQ1LjYzMyAyMTMuMjMyIDIzNC4yMDlDMjE5LjA1MyAyMjIuNzg1IDIyOC45NzMgMjE0LjMxMSAyNDEuMTY4IDIxMC4zNUMyNDUuOTk5IDIwOC43NzkgMjUwLjk5NiAyMDcuOTgyIDI1Ni4wMTYgMjA3Ljk4MkMyNzYuODYzIDIwNy45ODIgMjk1LjIwMSAyMjEuMzE4IDMwMS42NSAyNDEuMTY4QzMwNS42MTMgMjUzLjM2MSAzMDQuNTkgMjY2LjM2NyAyOTguNzY4IDI3Ny43OTFDMjkyLjk0NyAyODkuMjE1IDI4My4wMjcgMjk3LjY4NyAyNzAuODMyIDMwMS42NUMyNjUuOTk5IDMwMy4yMjEgMjYxLjAwNCAzMDQuMDE4IDI1NS45ODYgMzA0LjAxOFpNMjY0IDM5OS40MDZWMzE4Ljc0MkMyNjcuOTM0IDMxOC4yNDIgMjcxLjg2NyAzMTguMTM3IDI3NS43NzcgMzE2Ljg2N0MyOTMuMjcxIDMxMS4xODQgMzA2LjUgMjk4LjYxMyAzMTMuNzYyIDI4My4xODlMMzg5LjU4NCAzMDcuODE0QzM1Ni43NyAzOTIuMTU2IDI3OC45NjMgMzk4LjU2MSAyNjQgMzk5LjQwNlpNMzk0LjkzMiAyOTIuNzI5TDMxOC41ODYgMjY3LjkzNEMzMjAuNTU1IDI1Ny42NzQgMzIwLjMyNCAyNDYuODU5IDMxNi44NjcgMjM2LjIyM0MzMTMuNDE2IDIyNS41OTggMzA2Ljk0OSAyMTcuMDcyIDI5OS4zNCAyMDkuOTM0TDM0Ni44MTEgMTQ0LjYxN0M0MDguNDM2IDE5NC45MjggNDAyLjcwMyAyNjMuNTIzIDM5NC45MzIgMjkyLjcyOVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 0C114.615 0 0 114.615 0 256S114.615 512 256 512S512 397.385 512 256S397.385 0 256 0ZM256 496C123.664 496 16 388.336 16 256S123.664 16 256 16S496 123.664 496 256S388.336 496 256 496ZM256 96C167.635 96 96 167.635 96 256S167.635 416 256 416S416 344.365 416 256S344.365 96 256 96ZM256.037 111.957C284.496 111.957 311.182 120.572 333.875 135.209L286.416 200.51C277.105 195.412 266.879 191.982 256.014 191.982C241.301 191.982 230.85 196.885 225.201 199.984L178.285 135.43C188.566 128.793 214.885 111.957 256.037 111.957ZM165.227 144.67L212.322 209.471C196.707 224.158 189.246 246.045 193.43 267.928L117.344 292.639C102.643 236.943 122.584 179.529 165.227 144.67ZM248 399.408C191.508 396.285 142.57 360.715 122.123 307.91L198.844 282.992C208.328 303.021 226.844 316.021 248 318.754V399.408ZM255.986 304.018C235.139 304.018 216.799 290.682 210.35 270.832C206.387 258.639 207.41 245.633 213.232 234.209C219.053 222.785 228.973 214.311 241.168 210.35C245.999 208.779 250.996 207.982 256.016 207.982C276.863 207.982 295.201 221.318 301.65 241.168C305.613 253.361 304.59 266.367 298.768 277.791C292.947 289.215 283.027 297.687 270.832 301.65C265.999 303.221 261.004 304.018 255.986 304.018ZM264 399.406V318.742C267.934 318.242 271.867 318.137 275.777 316.867C293.271 311.184 306.5 298.613 313.762 283.189L389.584 307.814C356.77 392.156 278.963 398.561 264 399.406ZM394.932 292.729L318.586 267.934C320.555 257.674 320.324 246.859 316.867 236.223C313.416 225.598 306.949 217.072 299.34 209.934L346.811 144.617C408.436 194.928 402.703 263.523 394.932 292.729Z" />
        </Icon>
    </>
}