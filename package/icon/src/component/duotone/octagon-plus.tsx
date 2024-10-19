
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-plus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-plus?s=duotone octagon-plus}
 * @preview ![octagon-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4Mi43NTggMTU3LjA5NEwzNTQuNzg5IDI5LjI0MkMzNDYuMzUyIDIwLjgwNSAzMzQuOTg0IDE2IDMyMy4wMzEgMTZIMTg4Ljg1MkMxNzcuMDE2IDE2IDE2NS41MzEgMjAuODA1IDE1Ny4wOTQgMjkuMjQyTDI5LjI0MiAxNTcuMjExQzIwLjgwNSAxNjUuNjQ4IDE2IDE3Ny4wMTYgMTYgMTg4Ljk2OVYzMjMuMTQ4QzE2IDMzNC45ODQgMjAuODA1IDM0Ni40NjkgMjkuMjQyIDM1NC45MDZMMTU3LjIxMSA0ODIuNzU4QzE2NS42NDggNDkxLjE5NSAxNzcuMDE2IDQ5NiAxODguOTY5IDQ5NkgzMjMuMTQ4QzMzNC45ODQgNDk2IDM0Ni40NjkgNDkxLjE5NSAzNTQuOTA2IDQ4Mi43NThMNDgyLjc1OCAzNTQuNzg5QzQ5MS4xOTUgMzQ2LjM1MiA0OTYgMzM0Ljk4NCA0OTYgMzIzLjAzMVYxODguODUyQzQ5NiAxNzcuMDE2IDQ5MS4xOTUgMTY1LjUzMSA0ODIuNzU4IDE1Ny4wOTRaTTM1MS45OTggMjgwSDI3OS45OTZWMzUyQzI3OS45OTYgMzY1LjE5NyAyNjkuMTk1IDM3NiAyNTUuOTk4IDM3NkMyNDIuNzk3IDM3NiAyMzEuOTk2IDM2NS4xOTcgMjMxLjk5NiAzNTJWMjgwSDE1OS45OThDMTQ2Ljc5NyAyODAgMTM1Ljk5NiAyNjkuMTk3IDEzNS45OTYgMjU2QzEzNS45OTYgMjQyLjc5OSAxNDYuNzk3IDIzMiAxNTkuOTk4IDIzMkgyMzEuOTk2VjE2MEMyMzEuOTk2IDE0Ni43OTkgMjQyLjc5NyAxMzYgMjU1Ljk5OCAxMzZDMjY5LjE5NSAxMzYgMjc5Ljk5NiAxNDYuNzk5IDI3OS45OTYgMTYwVjIzMkgzNTEuOTk4QzM2NS4xOTUgMjMyIDM3NS45OTYgMjQyLjc5OSAzNzUuOTk2IDI1NkMzNzUuOTk2IDI2OS4xOTcgMzY1LjE5NSAyODAgMzUxLjk5OCAyODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM1Mi4wMDIgMjgwSDI4MFYzNTJDMjgwIDM2NS4xOTcgMjY5LjE5OSAzNzYgMjU2LjAwMiAzNzZDMjQyLjgwMSAzNzYgMjMyIDM2NS4xOTcgMjMyIDM1MlYyODBIMTYwLjAwMkMxNDYuODAxIDI4MCAxMzYgMjY5LjE5NyAxMzYgMjU2QzEzNiAyNDIuNzk5IDE0Ni44MDEgMjMyIDE2MC4wMDIgMjMySDIzMlYxNjBDMjMyIDE0Ni43OTkgMjQyLjgwMSAxMzYgMjU2LjAwMiAxMzZDMjY5LjE5OSAxMzYgMjgwIDE0Ni43OTkgMjgwIDE2MFYyMzJIMzUyLjAwMkMzNjUuMTk5IDIzMiAzNzYgMjQyLjc5OSAzNzYgMjU2QzM3NiAyNjkuMTk3IDM2NS4xOTkgMjgwIDM1Mi4wMDIgMjgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const OctagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M482.758 157.094L354.789 29.242C346.352 20.805 334.984 16 323.031 16H188.852C177.016 16 165.531 20.805 157.094 29.242L29.242 157.211C20.805 165.648 16 177.016 16 188.969V323.148C16 334.984 20.805 346.469 29.242 354.906L157.211 482.758C165.648 491.195 177.016 496 188.969 496H323.148C334.984 496 346.469 491.195 354.906 482.758L482.758 354.789C491.195 346.352 496 334.984 496 323.031V188.852C496 177.016 491.195 165.531 482.758 157.094ZM351.998 280H279.996V352C279.996 365.197 269.195 376 255.998 376C242.797 376 231.996 365.197 231.996 352V280H159.998C146.797 280 135.996 269.197 135.996 256C135.996 242.799 146.797 232 159.998 232H231.996V160C231.996 146.799 242.797 136 255.998 136C269.195 136 279.996 146.799 279.996 160V232H351.998C365.195 232 375.996 242.799 375.996 256C375.996 269.197 365.195 280 351.998 280Z" />
            <path d="M352.002 280H280V352C280 365.197 269.199 376 256.002 376C242.801 376 232 365.197 232 352V280H160.002C146.801 280 136 269.197 136 256C136 242.799 146.801 232 160.002 232H232V160C232 146.799 242.801 136 256.002 136C269.199 136 280 146.799 280 160V232H352.002C365.199 232 376 242.799 376 256C376 269.197 365.199 280 352.002 280Z" />
    </Icon>
);

export default OctagonPlus;