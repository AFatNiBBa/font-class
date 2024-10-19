
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-fist` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=thin hand-fist}
 * @preview ![hand-fist](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggNjQuMTU2QzM1NS41MTYgNjQuMTU2IDM0NC4yMzIgNjkuMDYyIDMzNS42ODggNzYuOUMzMzQuMDU3IDUxLjkgMzEzLjQwNiAzMiAyODggMzJDMjc1LjUxIDMyIDI2NC4yMTkgMzYuOTEgMjU1LjY3MiA0NC43NTZDMjUzLjk2NyAxOS44MjIgMjMzLjM1NyAwIDIwOCAwQzE4Mi43ODkgMCAxNjIuMjgzIDE5LjYgMTYwLjM3MSA0NC4zMjhDMTUxLjgxOCAzNi43NDQgMTQwLjUxIDMyIDEyOCAzMkMxMDEuNTMxIDMyIDgwIDUyLjc1IDgwIDc4LjI2NlYxNjkuNTQ3QzgwIDE3NC43NCA4MC45NzcgMTc5Ljc2MiA4Mi42ODIgMTg0LjUzOUM1NC4zMyAxODcuMjY2IDMyIDIxMC45NDcgMzIgMjQwVjMxOC45MjJDMzIgMzM4LjgyOCA0Mi44NDQgMzU3LjE1NiA2MC4yNSAzNjYuNzY2TDEyMy44NzUgNDAxLjg1OUMxMjUuMjUgNDAyLjYwOSAxMjYuNjI1IDQwMy4zMjggMTI4IDQwNC4wMzFWNTA0QzEyOCA1MDguNDIyIDEzMS41OTQgNTEyIDEzNiA1MTJTMTQ0IDUwOC40MjIgMTQ0IDUwNFYzOTguOTUzQzE0NCAzOTIuNDU3IDEzOC43MjggMzkxLjc3MSAxMzEuNjI1IDM4Ny44NTlMNjggMzUyLjc2NkM1NS42NTYgMzQ1Ljk2OSA0OCAzMzMgNDggMzE4LjkyMlYyNDBDNDggMjE3LjkzOCA2NS45MzggMjAwIDg4IDIwMEgxNzZDMTkzLjY1NiAyMDAgMjA4IDIxNC4zNTkgMjA4IDIzMlMxOTMuNjU2IDI2NCAxNzYgMjY0SDEyOEMxMjMuNTk0IDI2NCAxMjAgMjY3LjU3OCAxMjAgMjcyUzEyMy41OTQgMjgwIDEyOCAyODBIMTc2QzIwMi40NjkgMjgwIDIyNCAyNTguNDY5IDIyNCAyMzJDMjI0IDIxOS40MyAyMTkuMDM3IDIwOC4wNjQgMjExLjEwMiAxOTkuNDk4QzIyMi43NjQgMTk4LjczOCAyMzMuMzEyIDE5My45NDcgMjQxLjIzNiAxODYuMzA5QzI0Ni4wNDcgMjA3LjczIDI2NS4xNDYgMjIzLjgxMiAyODggMjIzLjgxMkMzMDEuODgxIDIyMy44MTIgMzE0LjMwMSAyMTcuNzk5IDMyMy4wNzIgMjA4LjM1QzMyOS44MDcgMjI2LjczIDM0Ny4zMTQgMjM5Ljk1MyAzNjggMjM5Ljk1M0MzOTQuNDY5IDIzOS45NTMgNDE2IDIxOC40MjIgNDE2IDE5MS45NTNWMTEyLjE1NkM0MTYgODUuNjg4IDM5NC40NjkgNjQuMTU2IDM2OCA2NC4xNTZaTTE2MCAxNjkuNTQ3QzE2MCAxNzQuNzMyIDE1OC4zMTEgMTc5LjU2OCAxNTUuNzExIDE4NEgxMDAuMjg5Qzk3LjY4OSAxNzkuNTY4IDk2IDE3NC43MzIgOTYgMTY5LjU0N1Y3OC4yNjZDOTYgNjEuNTc4IDExMC4zNDQgNDggMTI4IDQ4UzE2MCA2MS41NzggMTYwIDc4LjI2NlYxNjkuNTQ3Wk0yNDAgMTUxLjgxMkMyNDAgMTY5LjQ1MyAyMjUuNjU2IDE4My44MTIgMjA4IDE4My44MTJTMTc2IDE2OS40NTMgMTc2IDE1MS44MTJWNDhDMTc2IDMwLjM1OSAxOTAuMzQ0IDE2IDIwOCAxNlMyNDAgMzAuMzU5IDI0MCA0OFYxNTEuODEyWk0zMjAgMTc1LjgxMkMzMjAgMTkzLjQ1MyAzMDUuNjU2IDIwNy44MTIgMjg4IDIwNy44MTJTMjU2IDE5My40NTMgMjU2IDE3NS44MTJWODBDMjU2IDYyLjM1OSAyNzAuMzQ0IDQ4IDI4OCA0OFMzMjAgNjIuMzU5IDMyMCA4MFYxNzUuODEyWk00MDAgMTkxLjk1M0M0MDAgMjA5LjU5NCAzODUuNjU2IDIyMy45NTMgMzY4IDIyMy45NTNTMzM2IDIwOS41OTQgMzM2IDE5MS45NTNWMTEyLjE1NkMzMzYgOTQuNTE2IDM1MC4zNDQgODAuMTU2IDM2OCA4MC4xNTZTNDAwIDk0LjUxNiA0MDAgMTEyLjE1NlYxOTEuOTUzWk00MDggMjU2QzQwMy41OTQgMjU2IDQwMCAyNTkuNTc4IDQwMCAyNjRWMzA3LjE1NkMzOTkuODEyIDM0My41MzEgMzc2LjA2MiAzNzcuOTA2IDM0MC45MDYgMzkyLjcxOUMzMzcuOTM4IDM5My45NjkgMzM2IDM5Ni44NzUgMzM2IDQwMC4wOTRWNTA0QzMzNiA1MDguNDIyIDMzOS41OTQgNTEyIDM0NCA1MTJTMzUyIDUwOC40MjIgMzUyIDUwNFY0MDUuMjY2QzM5MC4yODEgMzg2Ljk1MyA0MTUuNzgxIDM0OC4yMDMgNDE2IDMwNy4yMDNWMjY0QzQxNiAyNTkuNTc4IDQxMi40MDYgMjU2IDQwOCAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandFist(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368 64.156C355.516 64.156 344.232 69.062 335.688 76.9C334.057 51.9 313.406 32 288 32C275.51 32 264.219 36.91 255.672 44.756C253.967 19.822 233.357 0 208 0C182.789 0 162.283 19.6 160.371 44.328C151.818 36.744 140.51 32 128 32C101.531 32 80 52.75 80 78.266V169.547C80 174.74 80.977 179.762 82.682 184.539C54.33 187.266 32 210.947 32 240V318.922C32 338.828 42.844 357.156 60.25 366.766L123.875 401.859C125.25 402.609 126.625 403.328 128 404.031V504C128 508.422 131.594 512 136 512S144 508.422 144 504V398.953C144 392.457 138.728 391.771 131.625 387.859L68 352.766C55.656 345.969 48 333 48 318.922V240C48 217.938 65.938 200 88 200H176C193.656 200 208 214.359 208 232S193.656 264 176 264H128C123.594 264 120 267.578 120 272S123.594 280 128 280H176C202.469 280 224 258.469 224 232C224 219.43 219.037 208.064 211.102 199.498C222.764 198.738 233.312 193.947 241.236 186.309C246.047 207.73 265.146 223.812 288 223.812C301.881 223.812 314.301 217.799 323.072 208.35C329.807 226.73 347.314 239.953 368 239.953C394.469 239.953 416 218.422 416 191.953V112.156C416 85.688 394.469 64.156 368 64.156ZM160 169.547C160 174.732 158.311 179.568 155.711 184H100.289C97.689 179.568 96 174.732 96 169.547V78.266C96 61.578 110.344 48 128 48S160 61.578 160 78.266V169.547ZM240 151.812C240 169.453 225.656 183.812 208 183.812S176 169.453 176 151.812V48C176 30.359 190.344 16 208 16S240 30.359 240 48V151.812ZM320 175.812C320 193.453 305.656 207.812 288 207.812S256 193.453 256 175.812V80C256 62.359 270.344 48 288 48S320 62.359 320 80V175.812ZM400 191.953C400 209.594 385.656 223.953 368 223.953S336 209.594 336 191.953V112.156C336 94.516 350.344 80.156 368 80.156S400 94.516 400 112.156V191.953ZM408 256C403.594 256 400 259.578 400 264V307.156C399.812 343.531 376.062 377.906 340.906 392.719C337.938 393.969 336 396.875 336 400.094V504C336 508.422 339.594 512 344 512S352 508.422 352 504V405.266C390.281 386.953 415.781 348.203 416 307.203V264C416 259.578 412.406 256 408 256Z" />
        </Icon>
    </>
}