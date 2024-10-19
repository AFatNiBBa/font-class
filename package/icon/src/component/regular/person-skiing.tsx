
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-skiing` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-skiing?s=regular person-skiing}
 * @preview ![person-skiing](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIuMDQ2IDk2LjAyM0M0NTguNTUyIDk2LjAyMyA0ODAuMDU2IDc0LjUxOCA0ODAuMDU2IDQ4LjAxMlM0NTguNTUyIDAgNDMyLjA0NiAwQzQwNS41NDEgMCAzODQuMDM2IDIxLjUwNSAzODQuMDM2IDQ4LjAxMlM0MDUuNTQxIDk2LjAyMyA0MzIuMDQ2IDk2LjAyM1pNMTE5Ljk4MiA5MS42NDdMMTA4LjQ4IDExNC4xNTNDMTIyLjg1OCAxMjEuNDA1IDEzOS42MTEgMTE5LjAyOSAxNTEuMjM5IDEwOS4yNzdMMjg0LjAxNiAxNzUuNTQzTDM0NS4xNTMgMTUxLjE2MkwzNTkuMjgxIDE5My40MjJDMzYyLjY1NyAyMDMuNTUgMzY5Ljc4MyAyMTEuODAyIDM3OS4yODUgMjE2LjU1M0w0MzcuNDIyIDI0NS41NkM0NDkuMyAyNTEuNTYxIDQ2My44MDMgMjQ2LjY4NSA0NjkuNjc5IDIzNC44MDdDNDc1LjU1NSAyMjIuOTI5IDQ3MC44MDQgMjA4LjU1MSA0NTguODAyIDIwMi42NzRMNDAzLjY2NSAxNzUuMDQzTDM4NS41MzcgMTIwLjY1NEMzODAuNjYxIDEwNi4wMjYgMzY5LjkwOCA5NC4wMjMgMzU1LjkwNiA4Ny41MjFDMzQxLjkwMyA4MS4wMiAzMjUuNzc0IDgwLjY0NSAzMTEuNjQ3IDg2LjI3MUwyMzcuMTMxIDExNi4xNTNMMTY0Ljg2NyA4MC4yN0MxNjUuMjQyIDY1Ljc2NiAxNTcuNzQgNTEuNzYzIDE0My45ODcgNDQuNzYxTDEzMi44NiA2Ni4zOTFIMTMyLjYxTDk4LjIyOCA1OS4zOUM5Ni4zNTMgNTkuMDE0IDk0LjQ3NyA1OS42NCA5My4yMjcgNjEuMTRDOTEuMjI2IDYzLjI2NSA5MS40NzcgNjYuNjQxIDkzLjcyNyA2OC41MTdMMTE5Ljk4MiA5MS42NDdaTTUwNS4wNjEgNDUyLjExQzQ5NS42ODQgNDQyLjczMyA0ODAuNDMxIDQ0Mi44NTggNDcxLjE3OSA0NTIuMTFDNDU5LjA1MiA0NjQuMjM4IDQ0MC40MjMgNDY3LjM2NCA0MjYuMDQ1IDQ2MC44NjNMMjgzLjAxNiAzODYuODQ0TDMzMi43NzYgMzEyLjMyNkMzNDMuMjc4IDI5Ni40NDcgMzQxLjI3OCAyNzUuMTkyIDMyNy43NzUgMjYxLjgxNEwyNzAuNTEzIDIwNC41NUwxOTMuNjIyIDE2Ni40MTZDMTkxLjk5NyAxODMuMDQ1IDE5Ny4zNzMgMTk5LjQyNCAyMDkuMjUxIDIxMS4zMDJMMjg5LjE0MiAyOTEuMTk2TDI0MC4wMDcgMzY0LjgzOUwzNC45NjUgMjU4LjgxM0MyMy4wODggMjUyLjY4NyA4LjcxIDI1Ny4zMTMgMi43MDggMjY5LjA2NkMtMy40MTggMjgwLjgxOSAxLjIwOCAyOTUuMzIyIDEyLjk2MSAzMDEuMzI0TDQwNC45MTYgNTAzLjg3M0M0MTYuNzkzIDUwOS4zNzQgNDI5LjQyMSA1MTIgNDQyLjA0OCA1MTJDNDY1LjMwMyA1MTIgNDg4LjE4MyA1MDIuOTk4IDUwNS4wNjEgNDg1Ljk5NEM1MTQuMzEzIDQ3Ni43NDEgNTE0LjMxMyA0NjEuNDg4IDUwNS4wNjEgNDUyLjExWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonSkiing(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M432.046 96.023C458.552 96.023 480.056 74.518 480.056 48.012S458.552 0 432.046 0C405.541 0 384.036 21.505 384.036 48.012S405.541 96.023 432.046 96.023ZM119.982 91.647L108.48 114.153C122.858 121.405 139.611 119.029 151.239 109.277L284.016 175.543L345.153 151.162L359.281 193.422C362.657 203.55 369.783 211.802 379.285 216.553L437.422 245.56C449.3 251.561 463.803 246.685 469.679 234.807C475.555 222.929 470.804 208.551 458.802 202.674L403.665 175.043L385.537 120.654C380.661 106.026 369.908 94.023 355.906 87.521C341.903 81.02 325.774 80.645 311.647 86.271L237.131 116.153L164.867 80.27C165.242 65.766 157.74 51.763 143.987 44.761L132.86 66.391H132.61L98.228 59.39C96.353 59.014 94.477 59.64 93.227 61.14C91.226 63.265 91.477 66.641 93.727 68.517L119.982 91.647ZM505.061 452.11C495.684 442.733 480.431 442.858 471.179 452.11C459.052 464.238 440.423 467.364 426.045 460.863L283.016 386.844L332.776 312.326C343.278 296.447 341.278 275.192 327.775 261.814L270.513 204.55L193.622 166.416C191.997 183.045 197.373 199.424 209.251 211.302L289.142 291.196L240.007 364.839L34.965 258.813C23.088 252.687 8.71 257.313 2.708 269.066C-3.418 280.819 1.208 295.322 12.961 301.324L404.916 503.873C416.793 509.374 429.421 512 442.048 512C465.303 512 488.183 502.998 505.061 485.994C514.313 476.741 514.313 461.488 505.061 452.11Z" />
        </Icon>
    </>
}