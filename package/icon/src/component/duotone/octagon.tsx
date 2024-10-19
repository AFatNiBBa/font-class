
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=duotone octagon}
 * @preview ![octagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4Mi43NTggMTU3LjA5NEwzNTQuNzg5IDI5LjI0MkMzNDYuMzUyIDIwLjgwNSAzMzQuOTg0IDE2IDMyMy4wMzEgMTZIMTg4Ljg1MkMxNzcuMDE2IDE2IDE2NS41MzEgMjAuODA1IDE1Ny4wOTQgMjkuMjQyTDI5LjI0MiAxNTcuMjExQzIwLjgwNSAxNjUuNjQ4IDE2IDE3Ny4wMTYgMTYgMTg4Ljk2OVYzMjMuMTQ4QzE2IDMzNC45ODQgMjAuODA1IDM0Ni40NjkgMjkuMjQyIDM1NC45MDZMMTU3LjIxMSA0ODIuNzU4QzE2NS42NDggNDkxLjE5NSAxNzcuMDE2IDQ5NiAxODguOTY5IDQ5NkgzMjMuMTQ4QzMzNC45ODQgNDk2IDM0Ni40NjkgNDkxLjE5NSAzNTQuOTA2IDQ4Mi43NThMNDgyLjc1OCAzNTQuNzg5QzQ5MS4xOTUgMzQ2LjM1MiA0OTYgMzM0Ljk4NCA0OTYgMzIzLjAzMVYxODguODUyQzQ5NiAxNzcuMDE2IDQ5MS4xOTUgMTY1LjUzMSA0ODIuNzU4IDE1Ny4wOTRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Octagon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M482.758 157.094L354.789 29.242C346.352 20.805 334.984 16 323.031 16H188.852C177.016 16 165.531 20.805 157.094 29.242L29.242 157.211C20.805 165.648 16 177.016 16 188.969V323.148C16 334.984 20.805 346.469 29.242 354.906L157.211 482.758C165.648 491.195 177.016 496 188.969 496H323.148C334.984 496 346.469 491.195 354.906 482.758L482.758 354.789C491.195 346.352 496 334.984 496 323.031V188.852C496 177.016 491.195 165.531 482.758 157.094Z" />
        </Icon>
    </>
}