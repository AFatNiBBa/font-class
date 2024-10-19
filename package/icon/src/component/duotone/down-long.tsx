
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-long` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=duotone down-long}
 * @preview ![down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwMCAzNTJIMTIwVjQwLjAxMkMxMjAgMTcuOTEyIDEzNy45MDYgMCAxNjAgMFMyMDAgMTcuOTEyIDIwMCA0MC4wMTJWMzUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNDIuNDA1IDUwNC4zMkwzOC40MDUgMzkyLjI1QzMxLjkyMSAzODUuMjU4IDMwLjE4NiAzNzUuMDY2IDMzLjk5OSAzNjYuMzEyQzM3LjcxNCAzNTcuNzgxIDQ2LjAzIDM1Mi4yODMgNTUuMjg0IDM1MkgyNjQuNzE4QzI3My45NjggMzUyLjI4MyAyODIuMjg4IDM1Ny43ODEgMjg2LjAwMyAzNjYuMzEyQzI4OS44MTEgMzc1LjA2NiAyODguMDc3IDM4NS4yNTggMjgxLjU5MyAzOTIuMjVMMTc3LjU5MyA1MDQuMzJDMTY4LjA5MyA1MTQuNTU5IDE1MS45MDUgNTE0LjU1OSAxNDIuNDA1IDUwNC4zMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function DownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M200 352H120V40.012C120 17.912 137.906 0 160 0S200 17.912 200 40.012V352Z" />
            <path d="M142.405 504.32L38.405 392.25C31.921 385.258 30.186 375.066 33.999 366.312C37.714 357.781 46.03 352.283 55.284 352H264.718C273.968 352.283 282.288 357.781 286.003 366.312C289.811 375.066 288.077 385.258 281.593 392.25L177.593 504.32C168.093 514.559 151.905 514.559 142.405 504.32Z" />
        </Icon>
    </>
}