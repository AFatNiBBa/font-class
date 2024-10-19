
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `award` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/award?s=solid award}
 * @preview ![award](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODguMDE2IDM1OC4zMDVDMzAyIDM1MC4yMTcgMzA1LjU0NyAzMjguMjY0IDMxNi44OTEgMzE2LjkxOEMzMjguMjQyIDMwNS41NjggMzUwLjE5NSAzMDIuMDI3IDM1OC4yODkgMjg4LjA0M0MzNjYuMjcgMjc0LjI1NiAzNTguNDQ5IDI1My41MSAzNjIuNjU2IDIzNy43NjRDMzY2LjczIDIyMi41MzUgMzg0IDIwOC41MTQgMzg0IDE5MkMzODQgMTc1LjQ5OCAzNjYuNzM0IDE2MS40ODQgMzYyLjY2NCAxNDYuMjY2QzM1OC40NTcgMTMwLjUyIDM2Ni4yODEgMTA5Ljc3MyAzNTguMzA1IDk1Ljk4NkMzNTAuMjE5IDgyLjAwNiAzMjguMjY2IDc4LjQ1OSAzMTYuOTIyIDY3LjEwOUMzMDUuNTcgNTUuNzYgMzAyLjAyNyAzMy44MDcgMjg4LjA0NyAyNS43MTNDMjc0LjI1OCAxNy43MzQgMjUzLjUwOCAyNS41NTUgMjM3Ljc2NiAyMS4zNDRDMjIyLjUzNSAxNy4yNzEgMjA4LjUxNiAwIDE5MiAwQzE3NS41IDAgMTYxLjQ4NCAxNy4yNyAxNDYuMjY2IDIxLjMzNkMxMzAuNTIzIDI1LjU0NSAxMDkuNzczIDE3LjcxOSA5NS45ODggMjUuNjk1QzgyLjAwOCAzMy43ODMgNzguNDYxIDU1LjczNiA2Ny4xMTMgNjcuMDgyQzU1Ljc2NiA3OC40MzIgMzMuODA5IDgxLjk3MyAyNS43MTkgOTUuOTU3QzE3LjczNCAxMDkuNzQ0IDI1LjU1NSAxMzAuNDkgMjEuMzQ4IDE0Ni4yMzZDMTcuMjczIDE2MS40NjUgMCAxNzUuNDg2IDAgMTkyQzAgMjA4LjUwMiAxNy4yNzMgMjIyLjUxNiAyMS4zNCAyMzcuNzM0QzI1LjU0NyAyNTMuNDggMTcuNzE5IDI3NC4yMjcgMjUuNjk1IDI4OC4wMTRDMzMuNzg5IDMwMS45OTQgNTUuNzM4IDMwNS41NDEgNjcuMDgyIDMxNi44OTFDNzguNDM0IDMyOC4yNCA4MS45NzcgMzUwLjE5MyA5NS45NTcgMzU4LjI4N0MxMDkuNzQ2IDM2Ni4yNjYgMTMwLjQ5MiAzNTguNDQ1IDE0Ni4yMzggMzYyLjY1NkMxNjEuNDY5IDM2Ni43MjkgMTc1LjQ4OCAzODQgMTkyIDM4NEMyMDguNSAzODQgMjIyLjUyIDM2Ni43MyAyMzcuNzM4IDM2Mi42NjRDMjUzLjQ4NCAzNTguNDU1IDI3NC4yMjcgMzY2LjI4MSAyODguMDE2IDM1OC4zMDVaTTExMiAxOTJDMTEyIDE0Ny43MjkgMTQ3LjgxMiAxMTIgMTkyIDExMlMyNzIgMTQ3LjcyOSAyNzIgMTkyQzI3MiAyMzYuMTY2IDIzNi4xODggMjcyIDE5MiAyNzJTMTEyIDIzNi4xNjYgMTEyIDE5MlpNMS43MTkgNDMzLjIxOUMtMS41MzEgNDQxLjQwNiAtMC4wNjMgNDUwLjcwMyA1LjU5NCA0NTcuNDY5QzExLjI1IDQ2NC4yMTkgMjAuMTI1IDQ2Ny4zNTkgMjguNzE5IDQ2NS42MDlMNzMuOTA2IDQ1Ni41NzhMOTUuMzQ0IDQ5OC44NDRDOTkuNDY5IDUwNy4wMzEgMTA3LjU5NCA1MTIgMTE2LjY4OCA1MTJDMTE3LjAzMSA1MTIgMTE3LjM0NCA1MTEuOTg0IDExNy42ODggNTExLjk2OUMxMjcuMTg4IDUxMS41OTQgMTM1LjM0NCA1MDUuODkxIDEzOC45MzggNDk3LjA5NEwxNzIuNTE2IDQxNS4wMTZDMTE4LjgwNSA0MTAuMzc3IDcwLjUwNCAzODYuODk1IDM0LjM1NSAzNTEuMDY4TDEuNzE5IDQzMy4yMTlaTTM0OS42NDUgMzUxLjA3QzMxMy40OTYgMzg2Ljg5NiAyNjUuMTk1IDQxMC4zNzcgMjExLjQ4NCA0MTUuMDE2TDI0NS4wNjIgNDk3LjA5NEMyNDguNjU2IDUwNS44OTEgMjU2LjgxMiA1MTEuNTk0IDI2Ni4zMTIgNTExLjk2OUMyNjYuNjU2IDUxMS45ODQgMjY2Ljk2OSA1MTIgMjY3LjMxMiA1MTJDMjc2LjQwNiA1MTIgMjg0LjUzMSA1MDcuMDMxIDI4OC42NTYgNDk4Ljg1OUwzMTAuMDk0IDQ1Ni41NzhMMzU1LjI4MSA0NjUuNjA5QzM2My44NzUgNDY3LjM1OSAzNzIuNzUgNDY0LjIxOSAzNzguNDA2IDQ1Ny40NjlDMzg0LjA2MiA0NTAuNzAzIDM4NS41MzEgNDQxLjQwNiAzODIuMjgxIDQzMy4yMTlMMzQ5LjY0NSAzNTEuMDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Award(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M288.016 358.305C302 350.217 305.547 328.264 316.891 316.918C328.242 305.568 350.195 302.027 358.289 288.043C366.27 274.256 358.449 253.51 362.656 237.764C366.73 222.535 384 208.514 384 192C384 175.498 366.734 161.484 362.664 146.266C358.457 130.52 366.281 109.773 358.305 95.986C350.219 82.006 328.266 78.459 316.922 67.109C305.57 55.76 302.027 33.807 288.047 25.713C274.258 17.734 253.508 25.555 237.766 21.344C222.535 17.271 208.516 0 192 0C175.5 0 161.484 17.27 146.266 21.336C130.523 25.545 109.773 17.719 95.988 25.695C82.008 33.783 78.461 55.736 67.113 67.082C55.766 78.432 33.809 81.973 25.719 95.957C17.734 109.744 25.555 130.49 21.348 146.236C17.273 161.465 0 175.486 0 192C0 208.502 17.273 222.516 21.34 237.734C25.547 253.48 17.719 274.227 25.695 288.014C33.789 301.994 55.738 305.541 67.082 316.891C78.434 328.24 81.977 350.193 95.957 358.287C109.746 366.266 130.492 358.445 146.238 362.656C161.469 366.729 175.488 384 192 384C208.5 384 222.52 366.73 237.738 362.664C253.484 358.455 274.227 366.281 288.016 358.305ZM112 192C112 147.729 147.812 112 192 112S272 147.729 272 192C272 236.166 236.188 272 192 272S112 236.166 112 192ZM1.719 433.219C-1.531 441.406 -0.063 450.703 5.594 457.469C11.25 464.219 20.125 467.359 28.719 465.609L73.906 456.578L95.344 498.844C99.469 507.031 107.594 512 116.688 512C117.031 512 117.344 511.984 117.688 511.969C127.188 511.594 135.344 505.891 138.938 497.094L172.516 415.016C118.805 410.377 70.504 386.895 34.355 351.068L1.719 433.219ZM349.645 351.07C313.496 386.896 265.195 410.377 211.484 415.016L245.062 497.094C248.656 505.891 256.812 511.594 266.312 511.969C266.656 511.984 266.969 512 267.312 512C276.406 512 284.531 507.031 288.656 498.859L310.094 456.578L355.281 465.609C363.875 467.359 372.75 464.219 378.406 457.469C384.062 450.703 385.531 441.406 382.281 433.219L349.645 351.07Z" />
        </Icon>
    </>
}