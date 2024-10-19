
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `up-long` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=duotone up-long}
 * @preview ![up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyMCAxNTkuOTk5SDIwMFY0NzEuOTg3QzIwMCA0OTQuMDg3IDE4Mi4wOTQgNTExLjk5OSAxNjAgNTExLjk5OVMxMjAgNDk0LjA4NyAxMjAgNDcxLjk4N1YxNTkuOTk5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNzcuNTk0IDcuNjc5TDI4MS41OTQgMTE5Ljc0OUMyODguMDc4IDEyNi43NDEgMjg5LjgxMiAxMzYuOTMzIDI4NiAxNDUuNjg2QzI4Mi4yODUgMTU0LjIxOCAyNzMuOTY5IDE1OS43MTYgMjY0LjcxNSAxNTkuOTk5SDU1LjI4MUM0Ni4wMzEgMTU5LjcxNiAzNy43MTEgMTU0LjIxOCAzMy45OTYgMTQ1LjY4NkMzMC4xODcgMTM2LjkzMyAzMS45MjIgMTI2Ljc0MSAzOC40MDYgMTE5Ljc0OUwxNDIuNDA2IDcuNjc5QzE1MS45MDYgLTIuNTYgMTY4LjA5NCAtMi41NiAxNzcuNTk0IDcuNjc5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UpLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M120 159.999H200V471.987C200 494.087 182.094 511.999 160 511.999S120 494.087 120 471.987V159.999Z" />
            <path d="M177.594 7.679L281.594 119.749C288.078 126.741 289.812 136.933 286 145.686C282.285 154.218 273.969 159.716 264.715 159.999H55.281C46.031 159.716 37.711 154.218 33.996 145.686C30.187 136.933 31.922 126.741 38.406 119.749L142.406 7.679C151.906 -2.56 168.094 -2.56 177.594 7.679Z" />
        </Icon>
    </>
}