
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `left-long` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=duotone left-long}
 * @preview ![left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCAyOTUuOTk5VjIxNS45OTlINDcxLjk4OEM0OTQuMDg5IDIxNS45OTkgNTEyIDIzMy45MDUgNTEyIDI1NS45OTlTNDk0LjA4OCAyOTUuOTk5IDQ3MS45ODggMjk1Ljk5OUgxNjBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTcuNjc5IDIzOC40MDVMMTE5Ljc0OSAxMzQuNDA1QzEyNi43NDEgMTI3LjkyMSAxMzYuOTMzIDEyNi4xODYgMTQ1LjY4NyAxMjkuOTk5QzE1NC4yMTggMTMzLjcxNCAxNTkuNzE2IDE0Mi4wMyAxNTkuOTk5IDE1MS4yODRWMzYwLjcxOEMxNTkuNzE2IDM2OS45NjggMTU0LjIxOCAzNzguMjg4IDE0NS42ODcgMzgyLjAwM0MxMzYuOTMzIDM4NS44MTEgMTI2Ljc0MSAzODQuMDc3IDExOS43NDkgMzc3LjU5M0w3LjY3OSAyNzMuNTkzQy0yLjU2IDI2NC4wOTMgLTIuNTYgMjQ3LjkwNSA3LjY3OSAyMzguNDA1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LeftLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M160 295.999V215.999H471.988C494.089 215.999 512 233.905 512 255.999S494.088 295.999 471.988 295.999H160Z" />
            <path d="M7.679 238.405L119.749 134.405C126.741 127.921 136.933 126.186 145.687 129.999C154.218 133.714 159.716 142.03 159.999 151.284V360.718C159.716 369.968 154.218 378.288 145.687 382.003C136.933 385.811 126.741 384.077 119.749 377.593L7.679 273.593C-2.56 264.093 -2.56 247.905 7.679 238.405Z" />
        </Icon>
    </>
}