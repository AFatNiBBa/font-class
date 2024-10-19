
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=regular code-pull-request}
 * @preview ![code-pull-request](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgOTUuOTk1QzE2MCA1MS44MTEgMTI0LjE4NCAxNS45OTQgODAgMTUuOTk0QzM1LjgxOCAxNS45OTQgMCA1MS44MTEgMCA5NS45OTVDMCAxMzEuNzYxIDIzLjYyNSAxNjEuNjgzIDU2IDE3MS45MjZWMzQwLjA2OEMyMy42MjUgMzUwLjMxMSAwIDM4MC4yMzMgMCA0MTUuOTk5QzAgNDYwLjE4MyAzNS44MTggNDk2IDgwIDQ5NkMxMjQuMTg0IDQ5NiAxNjAgNDYwLjE4MyAxNjAgNDE1Ljk5OUMxNjAgMzgwLjIzMyAxMzYuMzc3IDM1MC4zMTEgMTA0IDM0MC4wNjhWMTcxLjkyNkMxMzYuMzc3IDE2MS42ODMgMTYwIDEzMS43NjEgMTYwIDk1Ljk5NVpNMTEyIDQxNS45OTlDMTEyIDQzMy42NDQgOTcuNjQ1IDQ0Ny45OTkgODAgNDQ3Ljk5OVM0OCA0MzMuNjQ0IDQ4IDQxNS45OTlDNDggMzk4LjM1NCA2Mi4zNTUgMzgzLjk5OSA4MCAzODMuOTk5UzExMiAzOTguMzU0IDExMiA0MTUuOTk5Wk04MCAxMjcuOTk1QzYyLjM1NSAxMjcuOTk1IDQ4IDExMy42NCA0OCA5NS45OTVTNjIuMzU1IDYzLjk5NCA4MCA2My45OTRTMTEyIDc4LjM1IDExMiA5NS45OTVTOTcuNjQ1IDEyNy45OTUgODAgMTI3Ljk5NVpNNDU2IDM0MC4wNjhWMTU5Ljk5NkM0NTYgMTExLjQ2NCA0MTYuNTMxIDcxLjk5NSAzNjggNzEuOTk1SDM1MlYxNS45OTRDMzUyIDkuNzc1IDM0OC40MDYgNC4xNSAzNDIuNzgxIDEuNDk0QzMzNy4xODggLTEuMSAzMzAuNTMxIC0wLjI4OCAzMjUuNzUgMy43MTJMMjI5Ljc1IDgzLjcxM0MyMjYuMDk0IDg2Ljc0NSAyMjQgOTEuMjQ1IDIyNCA5NS45OTVTMjI2LjA5NCAxMDUuMjQ1IDIyOS43NSAxMDguMjc2TDMyNS43NSAxODguMjc3QzMyOC42ODggMTkwLjc0NiAzMzIuMzEyIDE5MS45OTYgMzM2IDE5MS45OTZDMzM4LjMxMiAxOTEuOTk2IDM0MC42MjUgMTkxLjQ5NiAzNDIuNzgxIDE5MC40OTZDMzQ4LjQwNiAxODcuODQgMzUyIDE4Mi4yMTUgMzUyIDE3NS45OTZWMTE5Ljk5NUgzNjhDMzkwLjA2MiAxMTkuOTk1IDQwOCAxMzcuOTMzIDQwOCAxNTkuOTk2VjM0MC4wNjhDMzc1LjYyNSAzNTAuMzExIDM1MiAzODAuMjMzIDM1MiA0MTUuOTk5QzM1MiA0NjAuMTgzIDM4Ny44MTggNDk2IDQzMiA0OTZDNDc2LjE4NCA0OTYgNTEyIDQ2MC4xODMgNTEyIDQxNS45OTlDNTEyIDM4MC4yMzMgNDg4LjM3NyAzNTAuMzExIDQ1NiAzNDAuMDY4Wk00MzIgNDQ3Ljk5OUM0MTQuMzU1IDQ0Ny45OTkgNDAwIDQzMy42NDQgNDAwIDQxNS45OTlDNDAwIDM5OC4zNTQgNDE0LjM1NSAzODMuOTk5IDQzMiAzODMuOTk5UzQ2NCAzOTguMzU0IDQ2NCA0MTUuOTk5QzQ2NCA0MzMuNjQ0IDQ0OS42NDUgNDQ3Ljk5OSA0MzIgNDQ3Ljk5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CodePullRequest(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160 95.995C160 51.811 124.184 15.994 80 15.994C35.818 15.994 0 51.811 0 95.995C0 131.761 23.625 161.683 56 171.926V340.068C23.625 350.311 0 380.233 0 415.999C0 460.183 35.818 496 80 496C124.184 496 160 460.183 160 415.999C160 380.233 136.377 350.311 104 340.068V171.926C136.377 161.683 160 131.761 160 95.995ZM112 415.999C112 433.644 97.645 447.999 80 447.999S48 433.644 48 415.999C48 398.354 62.355 383.999 80 383.999S112 398.354 112 415.999ZM80 127.995C62.355 127.995 48 113.64 48 95.995S62.355 63.994 80 63.994S112 78.35 112 95.995S97.645 127.995 80 127.995ZM456 340.068V159.996C456 111.464 416.531 71.995 368 71.995H352V15.994C352 9.775 348.406 4.15 342.781 1.494C337.188 -1.1 330.531 -0.288 325.75 3.712L229.75 83.713C226.094 86.745 224 91.245 224 95.995S226.094 105.245 229.75 108.276L325.75 188.277C328.688 190.746 332.312 191.996 336 191.996C338.312 191.996 340.625 191.496 342.781 190.496C348.406 187.84 352 182.215 352 175.996V119.995H368C390.062 119.995 408 137.933 408 159.996V340.068C375.625 350.311 352 380.233 352 415.999C352 460.183 387.818 496 432 496C476.184 496 512 460.183 512 415.999C512 380.233 488.377 350.311 456 340.068ZM432 447.999C414.355 447.999 400 433.644 400 415.999C400 398.354 414.355 383.999 432 383.999S464 398.354 464 415.999C464 433.644 449.645 447.999 432 447.999Z" />
        </Icon>
    </>
}