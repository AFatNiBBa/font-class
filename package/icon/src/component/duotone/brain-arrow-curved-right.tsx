
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brain-arrow-curved-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brain-arrow-curved-right?s=duotone brain-arrow-curved-right}
 * @preview ![brain-arrow-curved-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwMy43MzQgMEMxNzYuNzYyIDAgMTU0LjgyMiAyMC41MDggMTUyLjAyNSA0Ni43NDJDMTI2LjAxOCA1My4xOTkgMTA2LjY2OCA3Ni41MjMgMTA2LjY2OCAxMDQuNTMxQzEwNi42NjggMTEwLjM4MyAxMDcuNzcxIDExNS45MjYgMTA5LjM0IDEyMS4yNzNDODIuMzA1IDEyNi45NDkgNjEuODY3IDE1MC40NjkgNjEuODY3IDE3OS4xOTlDNjEuODY3IDE5My4yODkgNjYuOTQ5IDIwNi4wNyA3NS4xMTMgMjE2LjI4NUM0OS43MDkgMjI4LjE5OSAzMiAyNTMuODIgMzIgMjgzLjczNEMzMiAzMTUuNzExIDUyLjIwMSAzNDIuNzgxIDgwLjQ1OSAzNTMuNDE4Qzc4LjIzNCAzNTkuNjcyIDc2LjgwMSAzNjYuMzEyIDc2LjgwMSAzNzMuMzM2Qzc2LjgwMSA0MDYuMzIgMTAzLjU0NSA0MzMuMDY2IDEzNi41MzMgNDMzLjA2NkMxNDEuOTE2IDQzMy4wNjYgMTQ3LjAyOSA0MzIuMTI1IDE1MS45OSA0MzAuNzg5QzE1NC42MzEgNDU3LjE4IDE3Ni42NDYgNDc3Ljg2NyAyMDMuNzM0IDQ3Ny44NjdDMjMyLjYgNDc3Ljg2NyAyNTYgNDU0LjQ2OSAyNTYgNDI1LjYwMlY1Mi4yNjZDMjU2IDIzLjM5OCAyMzIuNiAwIDIwMy43MzQgMFpNNDgyLjEzNSAxNzkuMTk5QzQ4Mi4xMzUgMTUwLjQ2OSA0NjEuNjk3IDEyNi45NDkgNDM0LjY2MiAxMjEuMjczQzQzNi4yMjkgMTE1LjkyNiA0MzcuMzM0IDExMC4zODMgNDM3LjMzNCAxMDQuNTMxQzQzNy4zMzQgNzYuNTIzIDQxNy45ODQgNTMuMTk5IDM5MS45NzcgNDYuNzQyQzM4OS4xOCAyMC41MDggMzY3LjIzOCAwIDM0MC4yNjggMEMzMTEuNCAwIDI4OCAyMy4zOTggMjg4IDUyLjI2NlYzMjUuNDFDMzEwLjIwMyAyOTcuOTIyIDM0Mi4wOTIgMjc4LjM5MSAzNzguMjA3IDI3My4wMjNDMzg1IDI3MS45OTIgMzkxLjA5NCAyNzEuOTA2IDM5Ni4yNzEgMjcxLjkwNkgzOTguMjI1TDQwMC4wMiAyNzEuOTFINDQ3Ljg5NVYyNTYuNjZDNDQ3Ljg5NSAyMzkuOTIyIDQ1Ni4yODEgMjI1LjE0MSA0NjkuMDE0IDIxNi4zNjdDNDY4Ljk2OSAyMTYuMzQ0IDQ2OC45MzQgMjE2LjMwNSA0NjguODg5IDIxNi4yODVDNDc3LjA1MSAyMDYuMDcgNDgyLjEzNSAxOTMuMjg5IDQ4Mi4xMzUgMTc5LjE5OVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjAyLjkyMSAzMzkuNjZMNTA2LjkxMyAyNDQuNTM1QzQ5Ni43ODYgMjM0LjUzNSA0NzkuOTA5IDI0MS45MSA0NzkuOTA5IDI1Ni42NlYzMDMuOTFINDAwLjAyOUMzOTQuNDA0IDMwMy45MSAzODguNzc3IDMwMy43ODUgMzgzLjAyNyAzMDQuNjZDMzM1Ljg5OCAzMTEuNjYgMjk3LjM5NCAzNDkuMTYgMjg5LjY0NCAzOTYuMTZDMjgxLjc2OSA0NDIuOTEgMzAyLjg5NiA0ODYuNjYgMzM3Ljg5OCA1MDkuOTFDMzQ3LjY1IDUxNi40MSAzNTkuNTI1IDUwNi42NiAzNTUuNjUgNDk1LjUzNUMzNDYuNjUgNDY4LjkxIDM1MC4xNSA0MDAuMDM1IDQxNi4wMyA0MDAuMDM1SDQ4MC4wMzRWNDQ3LjE2QzQ4MC4wMzQgNDYyLjAzNSA0OTYuOTExIDQ2OS40MSA1MDcuMDM4IDQ1OS40MUw2MDMuMDQ2IDM2NC4xNkM2MDkuNjcxIDM1Ny41MzUgNjA5LjY3MSAzNDYuMjg1IDYwMi45MjEgMzM5LjY2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BrainArrowCurvedRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M203.734 0C176.762 0 154.822 20.508 152.025 46.742C126.018 53.199 106.668 76.523 106.668 104.531C106.668 110.383 107.771 115.926 109.34 121.273C82.305 126.949 61.867 150.469 61.867 179.199C61.867 193.289 66.949 206.07 75.113 216.285C49.709 228.199 32 253.82 32 283.734C32 315.711 52.201 342.781 80.459 353.418C78.234 359.672 76.801 366.312 76.801 373.336C76.801 406.32 103.545 433.066 136.533 433.066C141.916 433.066 147.029 432.125 151.99 430.789C154.631 457.18 176.646 477.867 203.734 477.867C232.6 477.867 256 454.469 256 425.602V52.266C256 23.398 232.6 0 203.734 0ZM482.135 179.199C482.135 150.469 461.697 126.949 434.662 121.273C436.229 115.926 437.334 110.383 437.334 104.531C437.334 76.523 417.984 53.199 391.977 46.742C389.18 20.508 367.238 0 340.268 0C311.4 0 288 23.398 288 52.266V325.41C310.203 297.922 342.092 278.391 378.207 273.023C385 271.992 391.094 271.906 396.271 271.906H398.225L400.02 271.91H447.895V256.66C447.895 239.922 456.281 225.141 469.014 216.367C468.969 216.344 468.934 216.305 468.889 216.285C477.051 206.07 482.135 193.289 482.135 179.199Z" />
            <path d="M602.921 339.66L506.913 244.535C496.786 234.535 479.909 241.91 479.909 256.66V303.91H400.029C394.404 303.91 388.777 303.785 383.027 304.66C335.898 311.66 297.394 349.16 289.644 396.16C281.769 442.91 302.896 486.66 337.898 509.91C347.65 516.41 359.525 506.66 355.65 495.535C346.65 468.91 350.15 400.035 416.03 400.035H480.034V447.16C480.034 462.035 496.911 469.41 507.038 459.41L603.046 364.16C609.671 357.535 609.671 346.285 602.921 339.66Z" />
        </Icon>
    </>
}