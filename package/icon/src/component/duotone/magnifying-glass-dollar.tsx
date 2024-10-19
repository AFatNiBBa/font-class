
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `magnifying-glass-dollar` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-dollar?s=duotone magnifying-glass-dollar}
 * @preview ![magnifying-glass-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOCAwQzkzLjEyNSAwIDAgOTMuMTI1IDAgMjA4UzkzLjEyNSA0MTYgMjA4IDQxNlM0MTYgMzIyLjg3NSA0MTYgMjA4UzMyMi44NzUgMCAyMDggMFpNMjczLjY1NiAyNTMuODQ0QzI2OS43NjYgMjc2LjM3NSAyNTIuNTUzIDI5MS4zMiAyMjggMjk2LjA1MVYzMDRDMjI4IDMxNS4wMzEgMjE5LjA0NyAzMjQgMjA4IDMyNFMxODggMzE1LjAzMSAxODggMzA0VjI5NS4xODhDMTc4LjIzIDI5My4xNzIgMTY4LjQyOCAyODkuOTMgMTU5LjY0MSAyODYuNzgxTDE1NC43OTcgMjg1LjA2MkMxNDQuMzkxIDI4MS4zNzUgMTM4LjkyMiAyNjkuOTM4IDE0Mi41OTQgMjU5LjUzMUMxNDYuMjM0IDI0OS4wOTQgMTU3LjYwOSAyNDMuNjg4IDE2OC4xMDkgMjQ3LjMxMkwxNzMuMTcyIDI0OS4xMjVDMTgxLjczNCAyNTIuMjE5IDE5MS40MjIgMjU1LjY4NyAxOTkuMDc4IDI1Ni44NDRDMjE1LjMxMiAyNTkuMzQ0IDIzMi41NDcgMjU2LjgxMiAyMzQuMjUgMjQ3LjAzMUMyMzUuNDY5IDIzOS45MzcgMjM0LjY1NiAyMzYuNDA2IDIwMi40NTMgMjI3LjE4N0wxOTYuMTg4IDIyNS4zNzVDMTc3Ljc1IDIxOS45NjkgMTM0LjUxNiAyMDcuMzEyIDE0Mi4zNDQgMTYyLjE1NkMxNDYuMjI5IDEzOS42NDEgMTYzLjQ2OSAxMjQuNzg5IDE4OCAxMjAuMDQzVjExMkMxODggMTAwLjk2OSAxOTYuOTUzIDkyIDIwOCA5MlMyMjggMTAwLjk2OSAyMjggMTEyVjEyMC42OTVDMjM0LjI1MiAxMjEuOTY5IDI0MS4wNTcgMTIzLjc2NiAyNDkuNDY5IDEyNi42ODhDMjU5Ljg5MSAxMzAuMzEyIDI2NS40MjIgMTQxLjcxOSAyNjEuNzk3IDE1Mi4xNTZDMjU4LjE3MiAxNjIuNTYyIDI0Ni43ODEgMTY4LjA5NCAyMzYuMzQ0IDE2NC41QzIyOC4xODggMTYxLjY1NiAyMjEuNzk3IDE1OS45MDYgMjE2LjgyOCAxNTkuMTU2QzIwMC43MTkgMTU2LjU2MiAxODMuNDUzIDE1OS4xODggMTgxLjc1IDE2OC45NjlDMTgwLjc1IDE3NC43ODEgMTgwLjAzMSAxNzguOTY5IDIwNy40NTMgMTg3TDIxMy40NTMgMTg4LjcxOUMyMzguOTIyIDE5Ni4wMzEgMjgxLjU0NyAyMDguMjE5IDI3My42NTYgMjUzLjg0NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTA0LjU2NCA0NDguNDAyTDM4MC4yMTcgMzI0LjA1NUMzNjUuMTg4IDM0Ni4zNTkgMzQ1Ljk1NSAzNjUuNTk0IDMyMy42NDcgMzgwLjYyNUw0NDcuOTk2IDUwNC45NjlDNDU3LjM2OSA1MTQuMzQ0IDQ3Mi41NjQgNTE0LjM0NCA0ODEuOTM4IDUwNC45NjlMNTA0LjU2NCA0ODIuMzQ0QzUxMy45MzggNDcyLjk2OSA1MTMuOTM4IDQ1Ny43NzMgNTA0LjU2NCA0NDguNDAyWk0yMTMuMDQ3IDE4OC43MTlMMjA3LjA0NyAxODdDMTc5LjYyNSAxNzguOTY5IDE4MC4zNDQgMTc0Ljc4MSAxODEuMzQ0IDE2OC45NjlDMTgzLjA0NyAxNTkuMTg3IDIwMC4zMTMgMTU2LjU2MiAyMTYuNDIyIDE1OS4xNTZDMjIxLjM5MSAxNTkuOTA2IDIyNy43ODEgMTYxLjY1NiAyMzUuOTM4IDE2NC41QzI0Ni4zNzUgMTY4LjA5NCAyNTcuNzY2IDE2Mi41NjIgMjYxLjM5MSAxNTIuMTU2QzI2NS4wMTYgMTQxLjcxOSAyNTkuNDg0IDEzMC4zMTIgMjQ5LjA2MyAxMjYuNjg4QzI0MC42NSAxMjMuNzY2IDIzMy44NDYgMTIxLjk2OSAyMjcuNTk0IDEyMC42OTVWMTEyQzIyNy41OTQgMTAwLjk2OSAyMTguNjQxIDkyIDIwNy41OTQgOTJTMTg3LjU5NCAxMDAuOTY5IDE4Ny41OTQgMTEyVjEyMC4wNDNDMTYzLjA2MyAxMjQuNzg5IDE0NS44MjIgMTM5LjY0MSAxNDEuOTM4IDE2Mi4xNTZDMTM0LjEwOSAyMDcuMzEyIDE3Ny4zNDQgMjE5Ljk2OSAxOTUuNzgxIDIyNS4zNzVMMjAyLjA0NyAyMjcuMTg4QzIzNC4yNSAyMzYuNDA2IDIzNS4wNjMgMjM5LjkzOCAyMzMuODQ0IDI0Ny4wMzFDMjMyLjE0MSAyNTYuODEyIDIxNC45MDYgMjU5LjM0NCAxOTguNjcyIDI1Ni44NDRDMTkxLjAxNiAyNTUuNjg4IDE4MS4zMjggMjUyLjIxOSAxNzIuNzY2IDI0OS4xMjVMMTY3LjcwMyAyNDcuMzEyQzE1Ny4yMDMgMjQzLjY4OCAxNDUuODI4IDI0OS4wOTQgMTQyLjE4OCAyNTkuNTMxQzEzOC41MTYgMjY5LjkzOCAxNDMuOTg0IDI4MS4zNzUgMTU0LjM5MSAyODUuMDYyTDE1OS4yMzQgMjg2Ljc4MUMxNjguMDIyIDI4OS45MyAxNzcuODI0IDI5My4xNzIgMTg3LjU5NCAyOTUuMTg4VjMwNEMxODcuNTk0IDMxNS4wMzEgMTk2LjU0NyAzMjQgMjA3LjU5NCAzMjRTMjI3LjU5NCAzMTUuMDMxIDIyNy41OTQgMzA0VjI5Ni4wNTFDMjUyLjE0NyAyOTEuMzIgMjY5LjM1OSAyNzYuMzc1IDI3My4yNSAyNTMuODQ0QzI4MS4xNDEgMjA4LjIxOSAyMzguNTE2IDE5Ni4wMzEgMjEzLjA0NyAxODguNzE5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MagnifyingGlassDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M208 0C93.125 0 0 93.125 0 208S93.125 416 208 416S416 322.875 416 208S322.875 0 208 0ZM273.656 253.844C269.766 276.375 252.553 291.32 228 296.051V304C228 315.031 219.047 324 208 324S188 315.031 188 304V295.188C178.23 293.172 168.428 289.93 159.641 286.781L154.797 285.062C144.391 281.375 138.922 269.938 142.594 259.531C146.234 249.094 157.609 243.688 168.109 247.312L173.172 249.125C181.734 252.219 191.422 255.687 199.078 256.844C215.312 259.344 232.547 256.812 234.25 247.031C235.469 239.937 234.656 236.406 202.453 227.187L196.188 225.375C177.75 219.969 134.516 207.312 142.344 162.156C146.229 139.641 163.469 124.789 188 120.043V112C188 100.969 196.953 92 208 92S228 100.969 228 112V120.695C234.252 121.969 241.057 123.766 249.469 126.688C259.891 130.312 265.422 141.719 261.797 152.156C258.172 162.562 246.781 168.094 236.344 164.5C228.188 161.656 221.797 159.906 216.828 159.156C200.719 156.562 183.453 159.188 181.75 168.969C180.75 174.781 180.031 178.969 207.453 187L213.453 188.719C238.922 196.031 281.547 208.219 273.656 253.844Z" />
            <path d="M504.564 448.402L380.217 324.055C365.188 346.359 345.955 365.594 323.647 380.625L447.996 504.969C457.369 514.344 472.564 514.344 481.938 504.969L504.564 482.344C513.938 472.969 513.938 457.773 504.564 448.402ZM213.047 188.719L207.047 187C179.625 178.969 180.344 174.781 181.344 168.969C183.047 159.187 200.313 156.562 216.422 159.156C221.391 159.906 227.781 161.656 235.938 164.5C246.375 168.094 257.766 162.562 261.391 152.156C265.016 141.719 259.484 130.312 249.063 126.688C240.65 123.766 233.846 121.969 227.594 120.695V112C227.594 100.969 218.641 92 207.594 92S187.594 100.969 187.594 112V120.043C163.063 124.789 145.822 139.641 141.938 162.156C134.109 207.312 177.344 219.969 195.781 225.375L202.047 227.188C234.25 236.406 235.063 239.938 233.844 247.031C232.141 256.812 214.906 259.344 198.672 256.844C191.016 255.688 181.328 252.219 172.766 249.125L167.703 247.312C157.203 243.688 145.828 249.094 142.188 259.531C138.516 269.938 143.984 281.375 154.391 285.062L159.234 286.781C168.022 289.93 177.824 293.172 187.594 295.188V304C187.594 315.031 196.547 324 207.594 324S227.594 315.031 227.594 304V296.051C252.147 291.32 269.359 276.375 273.25 253.844C281.141 208.219 238.516 196.031 213.047 188.719Z" />
        </Icon>
    </>
}