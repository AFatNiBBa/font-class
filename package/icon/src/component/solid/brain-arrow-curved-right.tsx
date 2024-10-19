
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `brain-arrow-curved-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brain-arrow-curved-right?s=solid brain-arrow-curved-right}
 * @preview ![brain-arrow-curved-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDIuOTIyIDMzOS42Nkw1MDYuOTE0IDI0NC41MzVDNDk2Ljc4NyAyMzQuNTM1IDQ3OS45MSAyNDEuOTEgNDc5LjkxIDI1Ni42NlYzMDMuOTFINDAwLjAyOUMzOTQuNDA0IDMwMy45MSAzODguNzc3IDMwMy43ODUgMzgzLjAyNyAzMDQuNjZDMzM1Ljg5OCAzMTEuNjYgMjk3LjM5NSAzNDkuMTYgMjg5LjY0NSAzOTYuMTZDMjgxLjc3IDQ0Mi45MSAzMDIuODk2IDQ4Ni42NiAzMzcuODk4IDUwOS45MUMzNDcuNjUgNTE2LjQxIDM1OS41MjUgNTA2LjY2IDM1NS42NSA0OTUuNTM1QzM0Ni42NSA0NjguOTEgMzUwLjE1IDQwMC4wMzUgNDE2LjAzMSA0MDAuMDM1SDQ4MC4wMzVWNDQ3LjE2QzQ4MC4wMzUgNDYyLjAzNSA0OTYuOTEyIDQ2OS40MSA1MDcuMDM5IDQ1OS40MUw2MDMuMDQ3IDM2NC4xNkM2MDkuNjcyIDM1Ny41MzUgNjA5LjY3MiAzNDYuMjg1IDYwMi45MjIgMzM5LjY2Wk0yMDMuNzM0IDBDMTc2Ljc2MiAwIDE1NC44MjIgMjAuNTEgMTUyLjAyNSA0Ni43NEMxMjYuMDE4IDUzLjE5OSAxMDYuNjY4IDc2LjUyNSAxMDYuNjY4IDEwNC41MzNDMTA2LjY2OCAxMTAuMzg1IDEwNy43NzEgMTE1LjkyNiAxMDkuMzQgMTIxLjI3MUM4Mi4zMDUgMTI2Ljk0OSA2MS44NjcgMTUwLjQ2OSA2MS44NjcgMTc5LjE5OUM2MS44NjcgMTkzLjI5MSA2Ni45NDkgMjA2LjA3IDc1LjExMyAyMTYuMjg1QzQ5LjcwOSAyMjguMTk5IDMyIDI1My44MTggMzIgMjgzLjczMkMzMiAzMTUuNzExIDUyLjIwMSAzNDIuNzc5IDgwLjQ1OSAzNTMuNDE4Qzc4LjIzNCAzNTkuNjc0IDc2LjgwMSAzNjYuMzEyIDc2LjgwMSAzNzMuMzM0Qzc2LjgwMSA0MDYuMzIyIDEwMy41NDUgNDMzLjA2NiAxMzYuNTMzIDQzMy4wNjZDMTQxLjkxNiA0MzMuMDY2IDE0Ny4wMjkgNDMyLjEyNyAxNTEuOTkgNDMwLjc5MUMxNTQuNjMxIDQ1Ny4xODIgMTc2LjY0NiA0NzcuODY3IDIwMy43MzQgNDc3Ljg2N0MyMzIuNiA0NzcuODY3IDI1NiA0NTQuNDY3IDI1NiA0MjUuNlY1Mi4yNjhDMjU2IDIzLjQgMjMyLjYgMCAyMDMuNzM0IDBaTTM3OC4yMDcgMjczLjAyM0MzODUgMjcxLjk5IDM5MS4wOTQgMjcxLjkwNCAzOTYuMjcxIDI3MS45MDRMMzk4LjIyNSAyNzEuOTA2TDQwMC4wMiAyNzEuOTFINDQ3Ljg5NVYyNTYuNjZDNDQ3Ljg5NSAyMzkuOTIyIDQ1Ni4yODEgMjI1LjE0MSA0NjkuMDE0IDIxNi4zNjdDNDY4Ljk2OSAyMTYuMzQ2IDQ2OC45MzQgMjE2LjMwNyA0NjguODg5IDIxNi4yODVDNDc3LjA1MSAyMDYuMDcgNDgyLjEzNSAxOTMuMjkxIDQ4Mi4xMzUgMTc5LjE5OUM0ODIuMTM1IDE1MC40NjkgNDYxLjY5NyAxMjYuOTQ5IDQzNC42NjIgMTIxLjI3MUM0MzYuMjI5IDExNS45MjYgNDM3LjMzNCAxMTAuMzg1IDQzNy4zMzQgMTA0LjUzM0M0MzcuMzM0IDc2LjUyNSA0MTcuOTg0IDUzLjE5OSAzOTEuOTc3IDQ2Ljc0QzM4OS4xOCAyMC41MSAzNjcuMjM4IDAgMzQwLjI2OCAwQzMxMS40IDAgMjg4IDIzLjQgMjg4IDUyLjI2OFYzMjUuNDFDMzEwLjIwMyAyOTcuOTIgMzQyLjA5MiAyNzguMzg5IDM3OC4yMDcgMjczLjAyM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BrainArrowCurvedRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M602.922 339.66L506.914 244.535C496.787 234.535 479.91 241.91 479.91 256.66V303.91H400.029C394.404 303.91 388.777 303.785 383.027 304.66C335.898 311.66 297.395 349.16 289.645 396.16C281.77 442.91 302.896 486.66 337.898 509.91C347.65 516.41 359.525 506.66 355.65 495.535C346.65 468.91 350.15 400.035 416.031 400.035H480.035V447.16C480.035 462.035 496.912 469.41 507.039 459.41L603.047 364.16C609.672 357.535 609.672 346.285 602.922 339.66ZM203.734 0C176.762 0 154.822 20.51 152.025 46.74C126.018 53.199 106.668 76.525 106.668 104.533C106.668 110.385 107.771 115.926 109.34 121.271C82.305 126.949 61.867 150.469 61.867 179.199C61.867 193.291 66.949 206.07 75.113 216.285C49.709 228.199 32 253.818 32 283.732C32 315.711 52.201 342.779 80.459 353.418C78.234 359.674 76.801 366.312 76.801 373.334C76.801 406.322 103.545 433.066 136.533 433.066C141.916 433.066 147.029 432.127 151.99 430.791C154.631 457.182 176.646 477.867 203.734 477.867C232.6 477.867 256 454.467 256 425.6V52.268C256 23.4 232.6 0 203.734 0ZM378.207 273.023C385 271.99 391.094 271.904 396.271 271.904L398.225 271.906L400.02 271.91H447.895V256.66C447.895 239.922 456.281 225.141 469.014 216.367C468.969 216.346 468.934 216.307 468.889 216.285C477.051 206.07 482.135 193.291 482.135 179.199C482.135 150.469 461.697 126.949 434.662 121.271C436.229 115.926 437.334 110.385 437.334 104.533C437.334 76.525 417.984 53.199 391.977 46.74C389.18 20.51 367.238 0 340.268 0C311.4 0 288 23.4 288 52.268V325.41C310.203 297.92 342.092 278.389 378.207 273.023Z" />
        </Icon>
    </>
}