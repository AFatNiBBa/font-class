
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tshirt` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tshirt?s=thin tshirt}
 * @preview ![tshirt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjIuMjIxIDk2TDQzNi41MzYgMEM0MTYuNDExIDI3Ljc1IDM3MS45MTEgNDcuMjUgMzIwLjAzNiA0Ny4yNUMzMjAuMDI0IDQ3LjI1IDMyMC4wMTIgNDcuMjQ4IDMyMC4wMDEgNDcuMjQ4UzMxOS45NzcgNDcuMjUgMzE5Ljk2NSA0Ny4yNUMyNjguMDkgNDcuMjUgMjIzLjU5IDI3Ljc1IDIwMy40NjUgMEwxNy43OCA5NkMxLjk0NiAxMDMuODQ2IC00LjUzNyAxMjMuMTkzIDMuMzc0IDEzOC45OTZMNDYuNDE4IDIyNC45OTRDNTIuMDI0IDIzNi4xOTMgNjMuMzE5IDI0Mi42NzggNzUuMDU3IDI0Mi42NzhDNzkuNzg2IDI0Mi42NzggODQuNTg2IDI0MS42MjUgODkuMTE2IDIzOS40MDZMMTYwLjEgMjAwLjU5OEwxNjAgNDgwQzE1OS45OTUgNDk3LjY3IDE3NC4zMTcgNTEyIDE5MS45ODkgNTEySDQ0OC4wMTJDNDY1LjY4NCA1MTIgNDgwLjAwNiA0OTcuNjcgNDgwIDQ4MEw0NzkuOTAxIDIwMC41OThMNTUwLjg4NSAyMzkuNDA2QzU1NS40MTUgMjQxLjYyNSA1NjAuMjE1IDI0Mi42NzggNTY0Ljk0NCAyNDIuNjc4QzU3Ni42ODIgMjQyLjY3OCA1ODcuOTc3IDIzNi4xOTMgNTkzLjU4MyAyMjQuOTk0TDYzNi42MjcgMTM4Ljk5NkM2NDQuNTM4IDEyMy4xOTMgNjM4LjA1NSAxMDMuODQ2IDYyMi4yMjEgOTZaTTYyMi4zMTkgMTMxLjgzNEw1NzkuMjc0IDIxNy44MzJDNTc2LjU0MyAyMjMuMjg5IDU3MS4wNTMgMjI2LjY3OCA1NjQuOTQ0IDIyNi42NzhDNTYyLjUwNiAyMjYuNjc4IDU2MC4xNDUgMjI2LjEyNSA1NTguNTYxIDIyNS4zNjdMNDg3LjU3NyAxODYuNTU5TDQ2My44OTEgMTczLjYwOUw0NjMuOTAxIDIwMC42MDRMNDY0IDQ4MC4wMDRDNDY0LjAwMiA0ODQuMjc3IDQ2Mi4zNCA0ODguMjkzIDQ1OS4zMTkgNDkxLjMxNEM0NTYuMjk5IDQ5NC4zMzYgNDUyLjI4NCA0OTYgNDQ4LjAxMiA0OTZIMTkxLjk4OUMxODcuNzE3IDQ5NiAxODMuNzAyIDQ5NC4zMzYgMTgwLjY4MiA0OTEuMzE0QzE3Ny42NjEgNDg4LjI5MyAxNzUuOTk5IDQ4NC4yNzcgMTc2IDQ4MC4wMDZMMTc2LjEgMjAwLjYwNEwxNzYuMTEgMTczLjYwOUwxNTIuNDI0IDE4Ni41NTlMODIuMDc1IDIyNS4wMzlDNzkuODU2IDIyNi4xMjUgNzcuNDk1IDIyNi42NzggNzUuMDU3IDIyNi42NzhDNjguOTQ4IDIyNi42NzggNjMuNDU4IDIyMy4yODkgNjAuNzI3IDIxNy44MzJMMTcuNjgyIDEzMS44MzRDMTUuNzc0IDEyOC4wMjMgMTUuNDc3IDEyMy42NzggMTYuODQ0IDExOS41OTZDMTguMjExIDExNS41MTYgMjEuMDY3IDExMi4yMjcgMjUuMTI3IDExMC4yMTNMMTk5LjUyMiAyMC4wNTFDMjI1Ljc3MiA0Ni45NzEgMjcwLjQ0OCA2My4yNSAzMjAuMDM2IDYzLjI1QzM2OS41NjEgNjMuMjUgNDE0LjIzMSA0Ni45NzEgNDQwLjQ3OSAyMC4wNTFMNjE1LjExOCAxMTAuMzM2QzYxOC45MzQgMTEyLjIyNyA2MjEuNzkgMTE1LjUxNiA2MjMuMTU3IDExOS41OTZDNjI0LjUyNCAxMjMuNjc4IDYyNC4yMjcgMTI4LjAyMyA2MjIuMzE5IDEzMS44MzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Tshirt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M622.221 96L436.536 0C416.411 27.75 371.911 47.25 320.036 47.25C320.024 47.25 320.012 47.248 320.001 47.248S319.977 47.25 319.965 47.25C268.09 47.25 223.59 27.75 203.465 0L17.78 96C1.946 103.846 -4.537 123.193 3.374 138.996L46.418 224.994C52.024 236.193 63.319 242.678 75.057 242.678C79.786 242.678 84.586 241.625 89.116 239.406L160.1 200.598L160 480C159.995 497.67 174.317 512 191.989 512H448.012C465.684 512 480.006 497.67 480 480L479.901 200.598L550.885 239.406C555.415 241.625 560.215 242.678 564.944 242.678C576.682 242.678 587.977 236.193 593.583 224.994L636.627 138.996C644.538 123.193 638.055 103.846 622.221 96ZM622.319 131.834L579.274 217.832C576.543 223.289 571.053 226.678 564.944 226.678C562.506 226.678 560.145 226.125 558.561 225.367L487.577 186.559L463.891 173.609L463.901 200.604L464 480.004C464.002 484.277 462.34 488.293 459.319 491.314C456.299 494.336 452.284 496 448.012 496H191.989C187.717 496 183.702 494.336 180.682 491.314C177.661 488.293 175.999 484.277 176 480.006L176.1 200.604L176.11 173.609L152.424 186.559L82.075 225.039C79.856 226.125 77.495 226.678 75.057 226.678C68.948 226.678 63.458 223.289 60.727 217.832L17.682 131.834C15.774 128.023 15.477 123.678 16.844 119.596C18.211 115.516 21.067 112.227 25.127 110.213L199.522 20.051C225.772 46.971 270.448 63.25 320.036 63.25C369.561 63.25 414.231 46.971 440.479 20.051L615.118 110.336C618.934 112.227 621.79 115.516 623.157 119.596C624.524 123.678 624.227 128.023 622.319 131.834Z" />
        </Icon>
    </>
}