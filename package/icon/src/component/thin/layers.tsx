
import { Icon } from "../../index";

/**
 * A component that renders the `layers` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/layers?s=thin layers}
 * @preview ![layers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNi43NjYgMTc1LjA0MkwyNDIuNTE2IDI2Ny4xMzFDMjQ2Ljc5NyAyNjguODQzIDI1MS4zOTEgMjY5LjcxNCAyNTUuOTg0IDI2OS43MTRDMjYwLjU5NCAyNjkuNzE0IDI2NS4yMDMgMjY4Ljg0MyAyNjkuNTE2IDI2Ny4xMDJMNDk1LjIzNCAxNzUuMDQyQzUwNS41NzggMTcwLjgzNCA1MTIgMTYxLjU0NiA1MTIgMTUwLjgzN0M1MTIgMTQwLjEyOCA1MDUuNTc4IDEzMC44NCA0OTUuMjM0IDEyNi42MzJMMjY5LjQyMiAzNC40ODVDMjYwLjkwNiAzMS4xNzYgMjUxLjEyNSAzMS4xNDcgMjQyLjQ4NCAzNC41NDNMMTYuNzY2IDEyNi42MzJDNi40MjIgMTMwLjg0IDAgMTQwLjEyOCAwIDE1MC44MzdDMCAxNjEuNTQ2IDYuNDIyIDE3MC44MzQgMTYuNzY2IDE3NS4wNDJaTTIzLjIwMyAxNDAuMjE1TDI0OC44MjggNDguMTg0QzI1My4zOTEgNDYuMzI2IDI1OC42MDkgNDYuMzg0IDI2My4wNzggNDguMTI2TDQ4OC43OTcgMTQwLjIxNUM0OTMuMzEyIDE0Mi4wNzIgNDk2IDE0Ni4wNDggNDk2IDE1MC44MzdDNDk2IDE1NS42MjYgNDkzLjMxMiAxNTkuNjAyIDQ4OC43OTcgMTYxLjQ1OUwyNjMuMTA5IDI1My40OUMyNTguNjA5IDI1NS4zMTkgMjUzLjQyMiAyNTUuMzQ4IDI0OC45MjIgMjUzLjUxOUwyMy4yMDMgMTYxLjQ1OUMxOC42ODggMTU5LjYwMiAxNiAxNTUuNjI2IDE2IDE1MC44MzdDMTYgMTQ2LjA0OCAxOC42ODggMTQyLjA3MiAyMy4yMDMgMTQwLjIxNVpNNDk1LjIzNCAyMTUuNzlDNDkxLjIzNCAyMTQuMTM1IDQ4Ni41IDIxNS44NDggNDg0LjY4OCAyMTkuNTkyQzQ4Mi45MDYgMjIzLjMzNiA0ODQuNzUgMjI3LjcxOCA0ODguNzk3IDIyOS4zNzJDNDkzLjMxMiAyMzEuMjMgNDk2IDIzNS4yMDYgNDk2IDIzOS45OTVTNDkzLjMxMiAyNDguNzU5IDQ4OC43OTcgMjUwLjYxN0wyNjMuMTA5IDM0Mi42NDhDMjU4LjYwOSAzNDQuNDc2IDI1My40MjIgMzQ0LjUwNSAyNDguOTIyIDM0Mi42NzdMMjMuMjAzIDI1MC42MTdDMTguNjg4IDI0OC43NTkgMTYgMjQ0Ljc4MyAxNiAyMzkuOTk1UzE4LjY4OCAyMzEuMjMgMjMuMjAzIDIyOS4zNzJDMjcuMjUgMjI3LjcxOCAyOS4wOTQgMjIzLjMzNiAyNy4zMTMgMjE5LjU5MlMyMC43OTcgMjE0LjEzNSAxNi43NjYgMjE1Ljc5QzYuNDIyIDIxOS45OTggMCAyMjkuMjg1IDAgMjM5Ljk5NVM2LjQyMiAyNTkuOTkxIDE2Ljc2NiAyNjQuMTk5TDI0Mi41MTYgMzU2LjI4OEMyNDYuNzk3IDM1OC4wMDEgMjUxLjM5MSAzNTguODcxIDI1NS45ODQgMzU4Ljg3MUMyNjAuNTk0IDM1OC44NzEgMjY1LjIwMyAzNTguMDAxIDI2OS41MTYgMzU2LjI1OUw0OTUuMjM0IDI2NC4xOTlDNTA1LjU3OCAyNTkuOTkxIDUxMiAyNTAuNzA0IDUxMiAyMzkuOTk1UzUwNS41NzggMjE5Ljk5OCA0OTUuMjM0IDIxNS43OVpNNDk1LjIzNCAzMDQuOTQ3QzQ5MS4yMzQgMzAzLjMyMiA0ODYuNSAzMDUuMDA1IDQ4NC42ODggMzA4Ljc0OUM0ODIuOTA2IDMxMi40OTMgNDg0Ljc1IDMxNi44NzYgNDg4Ljc5NyAzMTguNTNDNDkzLjMxMiAzMjAuMzg3IDQ5NiAzMjQuMzYzIDQ5NiAzMjkuMTUyUzQ5My4zMTIgMzM3LjkxNyA0ODguNzk3IDMzOS43NzRMMjYzLjE0MSA0MzEuODA1QzI1OC41NzggNDMzLjYwNSAyNTMuMzkxIDQzMy41NzYgMjQ4LjkyMiA0MzEuODM0TDIzLjIwMyAzMzkuNzc0QzE4LjY4OCAzMzcuOTE3IDE2IDMzMy45NDEgMTYgMzI5LjE1MlMxOC42ODggMzIwLjM4NyAyMy4yMDMgMzE4LjUzQzI3LjI1IDMxNi44NzYgMjkuMDk0IDMxMi40OTMgMjcuMzEzIDMwOC43NDlTMjAuNzk3IDMwMy4zMjIgMTYuNzY2IDMwNC45NDdDNi40MjIgMzA5LjE1NiAwIDMxOC40NDMgMCAzMjkuMTUyUzYuNDIyIDM0OS4xNDkgMTYuNzY2IDM1My4zNTdMMjQyLjU0NyA0NDUuNDQ2QzI0Ni44MTIgNDQ3LjE1OCAyNTEuMzkxIDQ0OCAyNTUuOTg0IDQ0OEMyNjAuNTk0IDQ0OCAyNjUuMjAzIDQ0Ny4xNTggMjY5LjUxNiA0NDUuNDE3TDQ5NS4yMzQgMzUzLjM1N0M1MDUuNTc4IDM0OS4xNDkgNTEyIDMzOS44NjIgNTEyIDMyOS4xNTJTNTA1LjU3OCAzMDkuMTU2IDQ5NS4yMzQgMzA0Ljk0N1oiLz48L3N2Zz4=|width=32|height=32)
 */
const Layers: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16.766 175.042L242.516 267.131C246.797 268.843 251.391 269.714 255.984 269.714C260.594 269.714 265.203 268.843 269.516 267.102L495.234 175.042C505.578 170.834 512 161.546 512 150.837C512 140.128 505.578 130.84 495.234 126.632L269.422 34.485C260.906 31.176 251.125 31.147 242.484 34.543L16.766 126.632C6.422 130.84 0 140.128 0 150.837C0 161.546 6.422 170.834 16.766 175.042ZM23.203 140.215L248.828 48.184C253.391 46.326 258.609 46.384 263.078 48.126L488.797 140.215C493.312 142.072 496 146.048 496 150.837C496 155.626 493.312 159.602 488.797 161.459L263.109 253.49C258.609 255.319 253.422 255.348 248.922 253.519L23.203 161.459C18.688 159.602 16 155.626 16 150.837C16 146.048 18.688 142.072 23.203 140.215ZM495.234 215.79C491.234 214.135 486.5 215.848 484.688 219.592C482.906 223.336 484.75 227.718 488.797 229.372C493.312 231.23 496 235.206 496 239.995S493.312 248.759 488.797 250.617L263.109 342.648C258.609 344.476 253.422 344.505 248.922 342.677L23.203 250.617C18.688 248.759 16 244.783 16 239.995S18.688 231.23 23.203 229.372C27.25 227.718 29.094 223.336 27.313 219.592S20.797 214.135 16.766 215.79C6.422 219.998 0 229.285 0 239.995S6.422 259.991 16.766 264.199L242.516 356.288C246.797 358.001 251.391 358.871 255.984 358.871C260.594 358.871 265.203 358.001 269.516 356.259L495.234 264.199C505.578 259.991 512 250.704 512 239.995S505.578 219.998 495.234 215.79ZM495.234 304.947C491.234 303.322 486.5 305.005 484.688 308.749C482.906 312.493 484.75 316.876 488.797 318.53C493.312 320.387 496 324.363 496 329.152S493.312 337.917 488.797 339.774L263.141 431.805C258.578 433.605 253.391 433.576 248.922 431.834L23.203 339.774C18.688 337.917 16 333.941 16 329.152S18.688 320.387 23.203 318.53C27.25 316.876 29.094 312.493 27.313 308.749S20.797 303.322 16.766 304.947C6.422 309.156 0 318.443 0 329.152S6.422 349.149 16.766 353.357L242.547 445.446C246.812 447.158 251.391 448 255.984 448C260.594 448 265.203 447.158 269.516 445.417L495.234 353.357C505.578 349.149 512 339.862 512 329.152S505.578 309.156 495.234 304.947Z" />
    </Icon>
);

export default Layers;