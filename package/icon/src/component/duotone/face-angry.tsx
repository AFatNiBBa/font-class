
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-angry` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-angry?s=duotone face-angry}
 * @preview ![face-angry](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDYxIDE2IDE2IDEyMy40MTkgMTYgMjU2UzEyMy40NjEgNDk2IDI1NiA0OTZTNDk2IDM4OC41ODEgNDk2IDI1NlMzODguNTM5IDE2IDI1NiAxNlpNMTQzLjk4OCAyNDBDMTQzLjk4OCAyMzAuNzUgMTQ4LjEwNSAyMjIuNSAxNTQuNTIzIDIxNi42MjVMMTIzLjUyMyAyMDcuMjVDMTE1LjA0NyAyMDQuNzUgMTEwLjIwMyAxOTUuNzUgMTEyLjc0NiAxODcuMzc1QzExNS4yODkgMTc4Ljg3NSAxMjQuMjUgMTc0LjI1IDEzMi43MjcgMTc2Ljc1TDIxMi42NDggMjAwLjc1QzIyMS4yNDYgMjAzLjI1IDIyNS45NjkgMjEyLjI1IDIyMy40MjYgMjIwLjYyNUMyMjEuMjQ2IDIyNy41IDIxNC45NDkgMjMyIDIwOC4wNDcgMjMyQzIwNy41NjIgMjMyIDIwNi45NTcgMjMxLjc1IDIwNi4zNTIgMjMxLjc1QzIwNy4wNzggMjM0LjUgMjA4LjA0NyAyMzcuMTI1IDIwOC4wNDcgMjQwQzIwOC4wNDcgMjU3Ljc1IDE5My43NTggMjcyIDE3Ni4wNzggMjcyUzE0My45ODggMjU3Ljc1IDE0My45ODggMjQwWk0zMTEuOTQ1IDM5NC4yNUMyODQuMjE1IDM2MC43NSAyMjcuNzg1IDM2MC43NSAxOTkuOTM0IDM5NC4yNUMxODYuMzcxIDQxMC41IDE2MS42NjggMzkwIDE3NS4zNTIgMzczLjc1QzE5NS4zMzIgMzQ5Ljc1IDIyNC43NTggMzM1Ljg3NSAyNTUuODc5IDMzNS44NzVDMjg3LjEyMSAzMzUuODc1IDMxNi41NDcgMzQ5Ljc1IDMzNi41MjcgMzczLjc1QzM1MC4zMzIgMzkwLjI1IDMyNS4zODcgNDEwLjI1IDMxMS45NDUgMzk0LjI1Wk0zODguNTk4IDIwNy4yNUwzNTcuNTk4IDIxNi42MjVDMzYzLjg5NSAyMjIuMzc1IDM2OC4xMzMgMjMwLjc1IDM2OC4xMzMgMjQwQzM2OC4xMzMgMjU3Ljc1IDM1My44NDQgMjcyIDMzNi4wNDMgMjcyQzMxOC4zNjMgMjcyIDMwNC4wNzQgMjU3Ljc1IDMwNC4wNzQgMjQwQzMwNC4wNzQgMjM3LjEyNSAzMDUuMDQzIDIzNC4zNzUgMzA1Ljc3IDIzMS43NUMzMDUuMTY0IDIzMS44NzUgMzA0LjY4IDIzMiAzMDQuMDc0IDIzMkMyOTcuMTcyIDIzMiAyOTAuODc1IDIyNy41IDI4OC44MTYgMjIwLjYyNUMyODYuMjczIDIxMi4xMjUgMjkxLjExNyAyMDMuMjUgMjk5LjQ3MyAyMDAuNzVMMzc5LjUxNiAxNzYuNzVDMzg3Ljg3MSAxNzQuMjUgMzk2Ljk1MyAxNzkgMzk5LjM3NSAxODcuMzc1QzQwMS45MTggMTk1Ljg3NSAzOTcuMDc0IDIwNC43NSAzODguNTk4IDIwNy4yNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjEyLjU3OSAyMDAuNzVMMTMyLjY1OCAxNzYuNzVDMTI0LjE4MSAxNzQuMjUgMTE1LjIyIDE3OC44NzUgMTEyLjY3NyAxODcuMzc1QzExMC4xMzQgMTk1Ljc1IDExNC45NzggMjA0Ljc1IDEyMy40NTQgMjA3LjI1TDE1NC40NTQgMjE2LjYyNUMxNDguMDM2IDIyMi41IDE0My45MTkgMjMwLjc1IDE0My45MTkgMjQwQzE0My45MTkgMjU3Ljc1IDE1OC4zMjkgMjcyIDE3Ni4wMDkgMjcyUzIwNy45NzggMjU3Ljc1IDIwNy45NzggMjQwQzIwNy45NzggMjM3LjEyNSAyMDcuMDA5IDIzNC41IDIwNi4yODMgMjMxLjc1QzIwNi44ODggMjMxLjc1IDIwNy40OTQgMjMyIDIwNy45NzggMjMyQzIxNC44OCAyMzIgMjIxLjE3NyAyMjcuNSAyMjMuMzU3IDIyMC42MjVDMjI1LjkgMjEyLjI1IDIyMS4xNzcgMjAzLjI1IDIxMi41NzkgMjAwLjc1Wk0zOTkuMzA2IDE4Ny4zNzVDMzk2Ljg4NCAxNzkgMzg3LjgwMiAxNzQuMjUgMzc5LjQ0NyAxNzYuNzVMMjk5LjQwNCAyMDAuNzVDMjkxLjA0OCAyMDMuMjUgMjg2LjIwNCAyMTIuMTI1IDI4OC43NDcgMjIwLjYyNUMyOTAuODA2IDIyNy41IDI5Ny4xMDMgMjMyIDMwNC4wMDUgMjMyQzMwNC42MTEgMjMyIDMwNS4wOTUgMjMxLjg3NSAzMDUuNzAxIDIzMS43NUMzMDQuOTc0IDIzNC4zNzUgMzA0LjAwNSAyMzcuMTI1IDMwNC4wMDUgMjQwQzMwNC4wMDUgMjU3Ljc1IDMxOC4yOTQgMjcyIDMzNS45NzQgMjcyQzM1My43NzUgMjcyIDM2OC4wNjQgMjU3Ljc1IDM2OC4wNjQgMjQwQzM2OC4wNjQgMjMwLjc1IDM2My44MjYgMjIyLjM3NSAzNTcuNTI5IDIxNi42MjVMMzg4LjUyOSAyMDcuMjVDMzk3LjAwNSAyMDQuNzUgNDAxLjg0OSAxOTUuODc1IDM5OS4zMDYgMTg3LjM3NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FaceAngry(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM143.988 240C143.988 230.75 148.105 222.5 154.523 216.625L123.523 207.25C115.047 204.75 110.203 195.75 112.746 187.375C115.289 178.875 124.25 174.25 132.727 176.75L212.648 200.75C221.246 203.25 225.969 212.25 223.426 220.625C221.246 227.5 214.949 232 208.047 232C207.562 232 206.957 231.75 206.352 231.75C207.078 234.5 208.047 237.125 208.047 240C208.047 257.75 193.758 272 176.078 272S143.988 257.75 143.988 240ZM311.945 394.25C284.215 360.75 227.785 360.75 199.934 394.25C186.371 410.5 161.668 390 175.352 373.75C195.332 349.75 224.758 335.875 255.879 335.875C287.121 335.875 316.547 349.75 336.527 373.75C350.332 390.25 325.387 410.25 311.945 394.25ZM388.598 207.25L357.598 216.625C363.895 222.375 368.133 230.75 368.133 240C368.133 257.75 353.844 272 336.043 272C318.363 272 304.074 257.75 304.074 240C304.074 237.125 305.043 234.375 305.77 231.75C305.164 231.875 304.68 232 304.074 232C297.172 232 290.875 227.5 288.816 220.625C286.273 212.125 291.117 203.25 299.473 200.75L379.516 176.75C387.871 174.25 396.953 179 399.375 187.375C401.918 195.875 397.074 204.75 388.598 207.25Z" />
            <path d="M212.579 200.75L132.658 176.75C124.181 174.25 115.22 178.875 112.677 187.375C110.134 195.75 114.978 204.75 123.454 207.25L154.454 216.625C148.036 222.5 143.919 230.75 143.919 240C143.919 257.75 158.329 272 176.009 272S207.978 257.75 207.978 240C207.978 237.125 207.009 234.5 206.283 231.75C206.888 231.75 207.494 232 207.978 232C214.88 232 221.177 227.5 223.357 220.625C225.9 212.25 221.177 203.25 212.579 200.75ZM399.306 187.375C396.884 179 387.802 174.25 379.447 176.75L299.404 200.75C291.048 203.25 286.204 212.125 288.747 220.625C290.806 227.5 297.103 232 304.005 232C304.611 232 305.095 231.875 305.701 231.75C304.974 234.375 304.005 237.125 304.005 240C304.005 257.75 318.294 272 335.974 272C353.775 272 368.064 257.75 368.064 240C368.064 230.75 363.826 222.375 357.529 216.625L388.529 207.25C397.005 204.75 401.849 195.875 399.306 187.375Z" />
        </Icon>
    </>
}