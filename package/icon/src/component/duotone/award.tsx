
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `award` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/award?s=duotone award}
 * @preview ![award](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk1LjkzOSAzNTguMjg3QzgxLjk1OSAzNTAuMTkzIDc4LjQxNiAzMjguMjQgNjcuMDY0IDMxNi44OTFDNjMuMzAzIDMxMy4xMjcgNTguMzAxIDMxMC4yNzEgNTMuMDk4IDMwNy41NTlMMS43MDEgNDMzLjIxOUMtMS41NDkgNDQxLjQwNiAtMC4wOCA0NTAuNzAzIDUuNTc2IDQ1Ny40NjlDMTEuMjMyIDQ2NC4yMTkgMjAuMTA3IDQ2Ny4zNTkgMjguNzAxIDQ2NS42MDlMNzMuODg5IDQ1Ni41NzhMOTUuMzI2IDQ5OC44NDRDOTkuNDUxIDUwNy4wMzEgMTA3LjU3NiA1MTIgMTE2LjY3IDUxMkMxMTcuMDE0IDUxMiAxMTcuMzI2IDUxMS45ODQgMTE3LjY3IDUxMS45NjlDMTI3LjE3IDUxMS41OTQgMTM1LjMyNiA1MDUuODkxIDEzOC45MiA0OTcuMDk0TDE4NS45ODIgMzgyLjYxNUMxNzIuMDM1IDM3OS4yNDggMTU5LjU0MyAzNjYuMjE5IDE0Ni4yMjEgMzYyLjY1NkMxMzAuNDc1IDM1OC40NDUgMTA5LjcyOSAzNjYuMjY2IDk1LjkzOSAzNTguMjg3Wk0zODIuMjY0IDQzMy4yMTlMMzMwLjg3MyAzMDcuNTc0QzMyNS42NTggMzEwLjI5MSAzMjAuNjQ1IDMxMy4xNDggMzE2Ljg3MyAzMTYuOTE4QzMwNS41MjkgMzI4LjI2NCAzMDEuOTgyIDM1MC4yMTcgMjg3Ljk5OCAzNTguMzA1QzI3NC4yMDkgMzY2LjI4MSAyNTMuNDY3IDM1OC40NTUgMjM3LjcyMSAzNjIuNjY0QzIyNC40MSAzNjYuMjIxIDIxMS45MiAzNzkuMjQ4IDE5Ny45ODIgMzgyLjYxNUwyNDUuMDQ1IDQ5Ny4wOTRDMjQ4LjYzOSA1MDUuODkxIDI1Ni43OTUgNTExLjU5NCAyNjYuMjk1IDUxMS45NjlDMjY2LjYzOSA1MTEuOTg0IDI2Ni45NTEgNTEyIDI2Ny4yOTUgNTEyQzI3Ni4zODkgNTEyIDI4NC41MTQgNTA3LjAzMSAyODguNjM5IDQ5OC44NTlMMzEwLjA3NiA0NTYuNTc4TDM1NS4yNjQgNDY1LjYwOUMzNjMuODU3IDQ2Ny4zNTkgMzcyLjczMiA0NjQuMjE5IDM3OC4zODkgNDU3LjQ2OUMzODQuMDQ1IDQ1MC43MDMgMzg1LjUxNCA0NDEuNDA2IDM4Mi4yNjQgNDMzLjIxOVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDE5MkMzODQgMTc1LjQ5OCAzNjYuNzM0IDE2MS40ODQgMzYyLjY2NCAxNDYuMjY2QzM1OC40NTcgMTMwLjUyIDM2Ni4yODEgMTA5Ljc3MyAzNTguMzA1IDk1Ljk4NkMzNTAuMjE5IDgyLjAwNiAzMjguMjY2IDc4LjQ1OSAzMTYuOTIyIDY3LjEwOUMzMDUuNTcgNTUuNzYgMzAyLjAyNyAzMy44MDcgMjg4LjA0NyAyNS43MTNDMjc0LjI1OCAxNy43MzQgMjUzLjUwOCAyNS41NTUgMjM3Ljc2NiAyMS4zNDRDMjIyLjUzNSAxNy4yNzEgMjA4LjUxNiAwIDE5MiAwQzE3NS41IDAgMTYxLjQ4NCAxNy4yNyAxNDYuMjY2IDIxLjMzNkMxMzAuNTIzIDI1LjU0NSAxMDkuNzczIDE3LjcxOSA5NS45ODggMjUuNjk1QzgyLjAwOCAzMy43ODMgNzguNDYxIDU1LjczNiA2Ny4xMTMgNjcuMDgyQzU1Ljc2NiA3OC40MzIgMzMuODA5IDgxLjk3MyAyNS43MTkgOTUuOTU3QzE3LjczNCAxMDkuNzQ0IDI1LjU1NSAxMzAuNDkgMjEuMzQ4IDE0Ni4yMzZDMTcuMjczIDE2MS40NjUgMCAxNzUuNDg2IDAgMTkyQzAgMjA4LjUwMiAxNy4yNzMgMjIyLjUxNiAyMS4zNCAyMzcuNzM0QzI1LjU0NyAyNTMuNDggMTcuNzE5IDI3NC4yMjcgMjUuNjk1IDI4OC4wMTRDMzMuNzg5IDMwMS45OTQgNTUuNzM4IDMwNS41NDEgNjcuMDgyIDMxNi44OTFDNzguNDM0IDMyOC4yNCA4MS45NzcgMzUwLjE5MyA5NS45NTcgMzU4LjI4N0MxMDkuNzQ2IDM2Ni4yNjYgMTMwLjQ5MiAzNTguNDQ1IDE0Ni4yMzggMzYyLjY1NkMxNjEuNDY5IDM2Ni43MjkgMTc1LjQ4OCAzODQgMTkyIDM4NEMyMDguNSAzODQgMjIyLjUyIDM2Ni43MyAyMzcuNzM4IDM2Mi42NjRDMjUzLjQ4NCAzNTguNDU1IDI3NC4yMjcgMzY2LjI4MSAyODguMDE2IDM1OC4zMDVDMzAxLjk5OSAzNTAuMjE3IDMwNS41NDcgMzI4LjI2NCAzMTYuODkxIDMxNi45MThDMzI4LjI0MiAzMDUuNTY4IDM1MC4xOTUgMzAyLjAyNyAzNTguMjg5IDI4OC4wNDNDMzY2LjI3IDI3NC4yNTYgMzU4LjQ0OSAyNTMuNTEgMzYyLjY1NiAyMzcuNzY0QzM2Ni43MyAyMjIuNTM1IDM4NCAyMDguNTE0IDM4NCAxOTJaTTE5MiAyNzJDMTQ3LjgxMiAyNzIgMTEyIDIzNi4xNjYgMTEyIDE5MkMxMTIgMTQ3LjcyOSAxNDcuODEyIDExMiAxOTIgMTEyUzI3MiAxNDcuNzI5IDI3MiAxOTJDMjcyIDIzNi4xNjYgMjM2LjE4OCAyNzIgMTkyIDI3MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Award(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M95.939 358.287C81.959 350.193 78.416 328.24 67.064 316.891C63.303 313.127 58.301 310.271 53.098 307.559L1.701 433.219C-1.549 441.406 -0.08 450.703 5.576 457.469C11.232 464.219 20.107 467.359 28.701 465.609L73.889 456.578L95.326 498.844C99.451 507.031 107.576 512 116.67 512C117.014 512 117.326 511.984 117.67 511.969C127.17 511.594 135.326 505.891 138.92 497.094L185.982 382.615C172.035 379.248 159.543 366.219 146.221 362.656C130.475 358.445 109.729 366.266 95.939 358.287ZM382.264 433.219L330.873 307.574C325.658 310.291 320.645 313.148 316.873 316.918C305.529 328.264 301.982 350.217 287.998 358.305C274.209 366.281 253.467 358.455 237.721 362.664C224.41 366.221 211.92 379.248 197.982 382.615L245.045 497.094C248.639 505.891 256.795 511.594 266.295 511.969C266.639 511.984 266.951 512 267.295 512C276.389 512 284.514 507.031 288.639 498.859L310.076 456.578L355.264 465.609C363.857 467.359 372.732 464.219 378.389 457.469C384.045 450.703 385.514 441.406 382.264 433.219Z" />
            <path d="M384 192C384 175.498 366.734 161.484 362.664 146.266C358.457 130.52 366.281 109.773 358.305 95.986C350.219 82.006 328.266 78.459 316.922 67.109C305.57 55.76 302.027 33.807 288.047 25.713C274.258 17.734 253.508 25.555 237.766 21.344C222.535 17.271 208.516 0 192 0C175.5 0 161.484 17.27 146.266 21.336C130.523 25.545 109.773 17.719 95.988 25.695C82.008 33.783 78.461 55.736 67.113 67.082C55.766 78.432 33.809 81.973 25.719 95.957C17.734 109.744 25.555 130.49 21.348 146.236C17.273 161.465 0 175.486 0 192C0 208.502 17.273 222.516 21.34 237.734C25.547 253.48 17.719 274.227 25.695 288.014C33.789 301.994 55.738 305.541 67.082 316.891C78.434 328.24 81.977 350.193 95.957 358.287C109.746 366.266 130.492 358.445 146.238 362.656C161.469 366.729 175.488 384 192 384C208.5 384 222.52 366.73 237.738 362.664C253.484 358.455 274.227 366.281 288.016 358.305C301.999 350.217 305.547 328.264 316.891 316.918C328.242 305.568 350.195 302.027 358.289 288.043C366.27 274.256 358.449 253.51 362.656 237.764C366.73 222.535 384 208.514 384 192ZM192 272C147.812 272 112 236.166 112 192C112 147.729 147.812 112 192 112S272 147.729 272 192C272 236.166 236.188 272 192 272Z" />
        </Icon>
    </>
}