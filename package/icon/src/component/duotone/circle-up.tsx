
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=duotone circle-up}
 * @preview ![circle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIgMTYgMTYgMTIzLjQyIDE2IDI1NlMxMjMuNDIgNDk2IDI1NiA0OTZDMzg4LjU4MiA0OTYgNDk2IDM4OC41OCA0OTYgMjU2UzM4OC41ODIgMTYgMjU2IDE2Wk0zODIuNzgxIDI0Ni4xMjVDMzgwLjMxMiAyNTIuMTA5IDM3NC40NjkgMjU2IDM2OCAyNTZIMzA0VjM1MkMzMDQgMzY5LjY3MyAyODkuNjczIDM4NCAyNzIgMzg0SDI0MEMyMjIuMzI3IDM4NCAyMDggMzY5LjY3MyAyMDggMzUyVjI1NkgxNDRDMTM3LjUzMSAyNTYgMTMxLjY4OCAyNTIuMTA5IDEyOS4yMTkgMjQ2LjEyNUMxMjYuNzM0IDI0MC4xNDEgMTI4LjEwOSAyMzMuMjY2IDEzMi42ODggMjI4LjY4OEwyNDQuNjg4IDExNi42ODhDMjUwLjkzNSAxMTAuNDQgMjYxLjA2NSAxMTAuNDQgMjY3LjMxMiAxMTYuNjg4TDM3OS4zMTIgMjI4LjY4OEMzODMuODkxIDIzMy4yNjYgMzg1LjI2NiAyNDAuMTQxIDM4Mi43ODEgMjQ2LjEyNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzgyLjc4NSAyNDYuMTI1QzM4MC4zMTYgMjUyLjEwOSAzNzQuNDcyIDI1NiAzNjguMDA0IDI1NkgzMDQuMDA0VjM1MkMzMDQuMDA0IDM2OS42NzMgMjg5LjY3NyAzODQgMjcyLjAwNCAzODRIMjQwLjAwNEMyMjIuMzMgMzg0IDIwOC4wMDQgMzY5LjY3MyAyMDguMDA0IDM1MlYyNTZIMTQ0LjAwNEMxMzcuNTM1IDI1NiAxMzEuNjkxIDI1Mi4xMDkgMTI5LjIyMiAyNDYuMTI1QzEyNi43MzggMjQwLjE0MSAxMjguMTEzIDIzMy4yNjYgMTMyLjY5MSAyMjguNjg4TDI0NC42OTEgMTE2LjY4OEMyNTAuOTM5IDExMC40NCAyNjEuMDY4IDExMC40NCAyNjcuMzE2IDExNi42ODhMMzc5LjMxNiAyMjguNjg4QzM4My44OTQgMjMzLjI2NiAzODUuMjY5IDI0MC4xNDEgMzgyLjc4NSAyNDYuMTI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM382.781 246.125C380.312 252.109 374.469 256 368 256H304V352C304 369.673 289.673 384 272 384H240C222.327 384 208 369.673 208 352V256H144C137.531 256 131.688 252.109 129.219 246.125C126.734 240.141 128.109 233.266 132.688 228.688L244.688 116.688C250.935 110.44 261.065 110.44 267.312 116.688L379.312 228.688C383.891 233.266 385.266 240.141 382.781 246.125Z" />
            <path d="M382.785 246.125C380.316 252.109 374.472 256 368.004 256H304.004V352C304.004 369.673 289.677 384 272.004 384H240.004C222.33 384 208.004 369.673 208.004 352V256H144.004C137.535 256 131.691 252.109 129.222 246.125C126.738 240.141 128.113 233.266 132.691 228.688L244.691 116.688C250.939 110.44 261.068 110.44 267.316 116.688L379.316 228.688C383.894 233.266 385.269 240.141 382.785 246.125Z" />
        </Icon>
    </>
}