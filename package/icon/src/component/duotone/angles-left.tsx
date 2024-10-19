
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `angles-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angles-left?s=duotone angles-left}
 * @preview ![angles-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwNS4wMTQgMzgwLjVMMjg3LjA4NiAyNTZMNDA1LjAxNCAxMzEuNUM0MjAuMjMgMTE1LjUgNDE5LjU0MyA5MC4wOTQgNDAzLjQ4MiA3NC45NjlDMzg3LjQ1MyA1OS43ODEgMzYyLjE0MyA2MC40MzcgMzQ2Ljk1NSA3Ni41TDIwMi45NjcgMjI4LjVDMTk1LjY1NiAyMzYuMjE5IDE5MiAyNDYuMDk0IDE5MiAyNTZTMTk1LjY1NiAyNzUuNzgxIDIwMi45NjcgMjgzLjVMMzQ2Ljk1NSA0MzUuNUMzNjIuMTQzIDQ1MS41NjIgMzg3LjQ1MyA0NTIuMjE5IDQwMy40ODIgNDM3LjAzMUM0MTkuNTc0IDQyMS44MTIgNDIwLjI2MiAzOTYuNDY5IDQwNS4wMTQgMzgwLjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTk1LjA4NiAyNTZMMjEzLjAxNCAxMzEuNUMyMjguMjMgMTE1LjUgMjI3LjU0MyA5MC4wOTQgMjExLjQ4MiA3NC45NjlDMTk1LjQ1MyA1OS43ODEgMTcwLjE0MyA2MC40MzcgMTU0Ljk1NSA3Ni41TDEwLjk2OSAyMjguNUMzLjY1NiAyMzYuMjE5IDAgMjQ2LjA5NCAwIDI1NlMzLjY1NiAyNzUuNzgxIDEwLjk2OSAyODMuNUwxNTQuOTU1IDQzNS41QzE3MC4xNDMgNDUxLjU2MiAxOTUuNDUzIDQ1Mi4yMTkgMjExLjQ4MiA0MzcuMDMxQzIyNy41NzQgNDIxLjgxMyAyMjguMjYyIDM5Ni40NjkgMjEzLjAxNCAzODAuNUw5NS4wODYgMjU2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AnglesLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M405.014 380.5L287.086 256L405.014 131.5C420.23 115.5 419.543 90.094 403.482 74.969C387.453 59.781 362.143 60.437 346.955 76.5L202.967 228.5C195.656 236.219 192 246.094 192 256S195.656 275.781 202.967 283.5L346.955 435.5C362.143 451.562 387.453 452.219 403.482 437.031C419.574 421.812 420.262 396.469 405.014 380.5Z" />
            <path d="M95.086 256L213.014 131.5C228.23 115.5 227.543 90.094 211.482 74.969C195.453 59.781 170.143 60.437 154.955 76.5L10.969 228.5C3.656 236.219 0 246.094 0 256S3.656 275.781 10.969 283.5L154.955 435.5C170.143 451.562 195.453 452.219 211.482 437.031C227.574 421.813 228.262 396.469 213.014 380.5L95.086 256Z" />
        </Icon>
    </>
}