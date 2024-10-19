
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `heart` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=duotone heart}
 * @preview ![heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3Mi4wOTYgMjcwLjQ4NkwyNzguOTQ2IDQ3MC4xOTZDMjY2LjMwNCA0ODMuMjY4IDI0NS42MTYgNDgzLjI2OCAyMzIuOTc0IDQ3MC4xOTZMMzkuODI0IDI3MC40ODZDLTE2LjE5NyAyMTIuNTE3IC0xMy4xMDQgMTE2LjY1MyA0OS4wNDEgNjIuODYyQzEwMy4zMTYgMTUuODg0IDE4Ni4zNzEgMjQuMzU5IDIzNi4zMiA3NS45MjVMMjU2LjAwNyA5Ni4yNDlMMjc1LjY5NCA3NS45MjVDMzI1LjY0MSAyNC4zNiA0MDguNjk0IDE1Ljg4NCA0NjIuOTY5IDYyLjg1OUM1MjUuMTE4IDExNi42NDkgNTI4LjIxMiAyMTIuNTE1IDQ3Mi4wOTYgMjcwLjQ4NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Heart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M472.096 270.486L278.946 470.196C266.304 483.268 245.616 483.268 232.974 470.196L39.824 270.486C-16.197 212.517 -13.104 116.653 49.041 62.862C103.316 15.884 186.371 24.359 236.32 75.925L256.007 96.249L275.694 75.925C325.641 24.36 408.694 15.884 462.969 62.859C525.118 116.649 528.212 212.515 472.096 270.486Z" />
        </Icon>
    </>
}