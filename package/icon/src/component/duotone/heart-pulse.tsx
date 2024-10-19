
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `heart-pulse` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-pulse?s=duotone heart-pulse}
 * @preview ![heart-pulse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4LjE2NiAyNTZDLTE1LjEyNiAxOTcuNTQ5IC04LjY5NSAxMTIuNDgyIDQ4LjcyNCA2Mi44NjFDMTAzLjA4NCAxNS44ODUgMTg2LjI2NSAyNC4zNTcgMjM2LjI5IDc1LjkyNEwyNTYuMDA3IDk2LjI0OEwyNzUuNzI0IDc1LjkyNEMzMjUuNzQ5IDI0LjM1OSA0MDguOTMgMTUuODgzIDQ2My4yODYgNjIuODU5QzUyMC43MDggMTEyLjQ3OSA1MjcuMTQgMTk3LjU0OSA0ODMuNzc0IDI1NkgzNjIuMjkzTDMzNC42MjYgMjAwLjc1QzMyOC43NDIgMTg5IDMxMS44NDEgMTg5IDMwNS45NTggMjAwLjc1TDI1Ni44ODMgMjk4Ljc1TDE5OC42NyAxNjkuMzc1QzE5Mi43ODYgMTU2LjYyNSAxNzQuNjM0IDE1Ni44NzUgMTY5LjEyNSAxNjkuNzVMMTMzLjE5NiAyNTZIMjguMTY2Wk0zNDIuMzg4IDI4OEwzMjAuMzU0IDI0My43NUwyNzAuNTI5IDM0My4yNUMyNjQuNTIgMzU1LjI1IDI0Ny4xMTggMzU0Ljg3NSAyNDEuNjEgMzQyLjYyNUwxODQuNjQ5IDIxNi4yNUwxNTQuNjAzIDI4OEg1Ni40NTlMMjMyLjkzNyA0NzAuMTk1QzI0NS42MDEgNDgzLjI2OCAyNjYuMzE5IDQ4My4yNjggMjc4Ljk4MyA0NzAuMTk1TDQ1NS40NjEgMjg4SDM0Mi4zODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ4My42MDggMjU2QzQ3OS45NjUgMjYwLjkxMiA0NzYuNjE3IDI2NS45OTIgNDcyLjI2MiAyNzAuNDg0TDQ1NS4yOTUgMjg4SDM0Mi4yMjJMMzIwLjE4OCAyNDMuNzVMMjcwLjM2MyAzNDMuMjVDMjY0LjM1NCAzNTUuMjUgMjQ2Ljk1MyAzNTQuODc1IDI0MS40NDQgMzQyLjYyNUwxODQuNDgzIDIxNi4yNUwxNTQuNDM3IDI4OEg1Ni4yOTNMMzkuMzI2IDI3MC40ODRDMzQuOTc5IDI2NS45OTIgMzEuNjM4IDI2MC45MTIgMjggMjU2SDEzMy4wM0wxNjguOTU5IDE2OS43NUMxNzQuNDY4IDE1Ni44NzUgMTkyLjYyIDE1Ni42MjUgMTk4LjUwNCAxNjkuMzc1TDI1Ni43MTcgMjk4Ljc1TDMwNS43OTIgMjAwLjc1QzMxMS42NzYgMTg5IDMyOC41NzYgMTg5IDMzNC40NiAyMDAuNzVMMzYyLjEyNyAyNTZINDgzLjYwOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HeartPulse(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M28.166 256C-15.126 197.549 -8.695 112.482 48.724 62.861C103.084 15.885 186.265 24.357 236.29 75.924L256.007 96.248L275.724 75.924C325.749 24.359 408.93 15.883 463.286 62.859C520.708 112.479 527.14 197.549 483.774 256H362.293L334.626 200.75C328.742 189 311.841 189 305.958 200.75L256.883 298.75L198.67 169.375C192.786 156.625 174.634 156.875 169.125 169.75L133.196 256H28.166ZM342.388 288L320.354 243.75L270.529 343.25C264.52 355.25 247.118 354.875 241.61 342.625L184.649 216.25L154.603 288H56.459L232.937 470.195C245.601 483.268 266.319 483.268 278.983 470.195L455.461 288H342.388Z" />
            <path d="M483.608 256C479.965 260.912 476.617 265.992 472.262 270.484L455.295 288H342.222L320.188 243.75L270.363 343.25C264.354 355.25 246.953 354.875 241.444 342.625L184.483 216.25L154.437 288H56.293L39.326 270.484C34.979 265.992 31.638 260.912 28 256H133.03L168.959 169.75C174.468 156.875 192.62 156.625 198.504 169.375L256.717 298.75L305.792 200.75C311.676 189 328.576 189 334.46 200.75L362.127 256H483.608Z" />
        </Icon>
    </>
}