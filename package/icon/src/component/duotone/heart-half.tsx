
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `heart-half` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=duotone heart-half}
 * @preview ![heart-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiA5Ni4yNDFMMjc1LjY4IDc1LjkyNEMzMjUuNjI5IDI0LjM1OCA0MDguNjg0IDE1Ljg4NSA0NjIuOTU5IDYyLjg2MkM1MjUuMTA0IDExNi42NTMgNTI4LjE5NyAyMTIuNTE2IDQ3Mi4xNzYgMjcwLjQ4NUwyNzkuMDI1IDQ3MC4xOTdDMjcyLjY5NSA0NzYuNzQ0IDI2NC4zNDYgNDgwLjAwNSAyNTYgNDc5Ljk5NFY5Ni4yNDFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiA0NzkuOTkyQzI0Ny42NTQgNDgwLjAwNCAyMzkuMzA1IDQ3Ni43NDIgMjMyLjk3NCA0NzAuMTk1TDM5LjgyNCAyNzAuNDg0Qy0xNi4xOTcgMjEyLjUxNiAtMTMuMTA0IDExNi42NTIgNDkuMDQxIDYyLjg2MUMxMDMuMzE2IDE1Ljg4NSAxODYuMzcxIDI0LjM1NyAyMzYuMzIgNzUuOTI0TDI1NiA5Ni4yNFY0NzkuOTkyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HeartHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 96.241L275.68 75.924C325.629 24.358 408.684 15.885 462.959 62.862C525.104 116.653 528.197 212.516 472.176 270.485L279.025 470.197C272.695 476.744 264.346 480.005 256 479.994V96.241Z" />
            <path d="M256 479.992C247.654 480.004 239.305 476.742 232.974 470.195L39.824 270.484C-16.197 212.516 -13.104 116.652 49.041 62.861C103.316 15.885 186.371 24.357 236.32 75.924L256 96.24V479.992Z" />
        </Icon>
    </>
}