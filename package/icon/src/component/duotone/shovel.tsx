
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=duotone shovel}
 * @preview ![shovel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMi4yNTggOTkuODg1TDQxMS43NDggOS4zNzdDMzk5LjI1MiAtMy4xMTkgMzc5IC0zLjEzMSAzNjYuNDkyIDkuMzc3TDMyMS4yMzggNTQuNjMxQzI5MS43NzcgODQuMDkgMjg1Ljg2NyAxMjcuOTQzIDMwMi43NzkgMTYzLjU5NkwxOTcgMjY5LjM3NUwyNDIuMjU2IDMxNC42MzNMMzQ4LjAzMyAyMDguODU0QzM4My42ODQgMjI1Ljc2NiA0MjcuNTQzIDIxOS44NTUgNDU3LjAwMiAxOTAuMzk1TDUwMi4yNTggMTQ1LjE0MUM1MTQuNzY0IDEzMi42MzMgNTE0Ljc1NCAxMTIuMzgxIDUwMi4yNTggOTkuODg1Wk00MTEuNzQ4IDE0NS4xNDFDMzk5LjI2NCAxNTcuNjI1IDM3OC45NjcgMTU3LjYxNSAzNjYuNDkyIDE0NS4xNDFDMzU0LjAyIDEzMi42NjYgMzU0LjAwOCAxMTIuMzcxIDM2Ni40OTIgOTkuODg1TDM4OS4xMjEgNzcuMjU4TDQzNC4zNzUgMTIyLjUxNEw0MTEuNzQ4IDE0NS4xNDFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE1Mi4xMTEgMjI0LjEyMUMxMzkuNjExIDIxMS42MTcgMTE5LjM1OCAyMTEuNjE3IDEwNi44NTggMjI0LjEyMUwzOC45NzMgMjkyLjAwNEMtMTEuMDMzIDM0Mi4wMDggLTYuMjgzIDQ3My4wMjggMTYuMzQ2IDQ5NS42NTdDMzguOTczIDUxOC4yODIgMTY5Ljk4OCA1MjMuMDMyIDIxOS45OTYgNDczLjAyOEwyODcuODc5IDQwNS4xNDFDMzAwLjM4MSAzOTIuNjQxIDMwMC4zODEgMzcyLjM5MSAyODcuODc5IDM1OS44ODdMMTUyLjExMSAyMjQuMTIxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Shovel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M502.258 99.885L411.748 9.377C399.252 -3.119 379 -3.131 366.492 9.377L321.238 54.631C291.777 84.09 285.867 127.943 302.779 163.596L197 269.375L242.256 314.633L348.033 208.854C383.684 225.766 427.543 219.855 457.002 190.395L502.258 145.141C514.764 132.633 514.754 112.381 502.258 99.885ZM411.748 145.141C399.264 157.625 378.967 157.615 366.492 145.141C354.02 132.666 354.008 112.371 366.492 99.885L389.121 77.258L434.375 122.514L411.748 145.141Z" />
            <path d="M152.111 224.121C139.611 211.617 119.358 211.617 106.858 224.121L38.973 292.004C-11.033 342.008 -6.283 473.028 16.346 495.657C38.973 518.282 169.988 523.032 219.996 473.028L287.879 405.141C300.381 392.641 300.381 372.391 287.879 359.887L152.111 224.121Z" />
        </Icon>
    </>
}