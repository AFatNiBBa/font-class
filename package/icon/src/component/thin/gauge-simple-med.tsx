
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gauge-simple-med` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-med?s=thin gauge-simple-med}
 * @preview ![gauge-simple-med](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTUuNjc4IDMyMC43NzVDMjk1LjcxMSAzMjAuNDggMjk2IDMyMC4zMDMgMjk2IDMyMFYxMTJDMjk2IDEwNy41NzggMjkyLjQwNiAxMDQgMjg4IDEwNFMyODAgMTA3LjU3OCAyODAgMTEyVjMyMEMyODAgMzIwLjMwMyAyODAuMjg5IDMyMC40OCAyODAuMzIyIDMyMC43NzVDMjM1LjQzNCAzMjQuNzM2IDIwMCAzNjIuMDk4IDIwMCA0MDhDMjAwIDQxMi40MjIgMjAzLjU5NCA0MTYgMjA4IDQxNlMyMTYgNDEyLjQyMiAyMTYgNDA4QzIxNiAzNjguMjk3IDI0OC4zMTIgMzM2IDI4OCAzMzZTMzYwIDM2OC4yOTcgMzYwIDQwOEMzNjAgNDEyLjQyMiAzNjMuNTk0IDQxNiAzNjggNDE2UzM3NiA0MTIuNDIyIDM3NiA0MDhDMzc2IDM2Mi4wOTggMzQwLjU2NiAzMjQuNzM2IDI5NS42NzggMzIwLjc3NVpNMjg4IDMyQzEyOS4xODggMzIgMCAxNjEuMjAzIDAgMzIwQzAgMzc1LjA5NCAxNi4yNSA0MjkuMTU2IDQ2LjkzOCA0NzYuMzU5QzQ4LjQzOCA0NzguNjI1IDUwLjkzOCA0ODAgNTMuNjU2IDQ4MEg1MjIuMzQ0QzUyNS4wNjIgNDgwIDUyNy41NjIgNDc4LjYyNSA1MjkuMDYyIDQ3Ni4zNTlDNTU5Ljc1IDQyOS4xNTYgNTc2IDM3NS4wOTQgNTc2IDMyMEM1NzYgMTYxLjIwMyA0NDYuODEyIDMyIDI4OCAzMlpNNTE3Ljk2OSA0NjRINTguMDMxQzMwLjUzMSA0MjAuMjgxIDE2IDM3MC41NzggMTYgMzIwQzE2IDE3MC4wMTYgMTM4LjAzMSA0OCAyODggNDhTNTYwIDE3MC4wMTYgNTYwIDMyMEM1NjAgMzcwLjU3OCA1NDUuNDY5IDQyMC4yODEgNTE3Ljk2OSA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GaugeSimpleMed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M295.678 320.775C295.711 320.48 296 320.303 296 320V112C296 107.578 292.406 104 288 104S280 107.578 280 112V320C280 320.303 280.289 320.48 280.322 320.775C235.434 324.736 200 362.098 200 408C200 412.422 203.594 416 208 416S216 412.422 216 408C216 368.297 248.312 336 288 336S360 368.297 360 408C360 412.422 363.594 416 368 416S376 412.422 376 408C376 362.098 340.566 324.736 295.678 320.775ZM288 32C129.188 32 0 161.203 0 320C0 375.094 16.25 429.156 46.938 476.359C48.438 478.625 50.938 480 53.656 480H522.344C525.062 480 527.562 478.625 529.062 476.359C559.75 429.156 576 375.094 576 320C576 161.203 446.812 32 288 32ZM517.969 464H58.031C30.531 420.281 16 370.578 16 320C16 170.016 138.031 48 288 48S560 170.016 560 320C560 370.578 545.469 420.281 517.969 464Z" />
        </Icon>
    </>
}