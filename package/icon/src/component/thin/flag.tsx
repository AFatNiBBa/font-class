
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flag` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=thin flag}
 * @preview ![flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTguNTI5IDYuMjNDNDkxLjcxNyAyLjA5OCA0ODQuMjU4IDAgNDc2LjM2NyAwQzQ2OS43MyAwIDQ2My4wMDggMS40NjUgNDU2LjkyOCA0LjIzOEM0MTUuMTY0IDIzLjMwMSAzODAuODk4IDMyLjE4IDM0OS4wOTIgMzIuMThDMzIwLjEzMSAzMi4xOCAyOTcuMzMyIDI0Ljg0OCAyNzMuMTk1IDE3LjA4NkMyNDcuNSA4LjgzNiAyMjAuOTU3IDAuMzE2IDE4NS4yMTEgMC4zMTJDMTU3LjA4NCAwLjMxMiAxMTkuNzMyIDMuMjg5IDMyIDM4LjgzNkwxNiA0NS4zMlY4QzE2IDMuNTgyIDEyLjQxOCAwIDggMFMwIDMuNTgyIDAgOFY1MDRDMCA1MDguNDA2IDMuNTk0IDUxMiA4IDUxMlMxNiA1MDguNDA2IDE2IDUwNFYzOTguMjE5TDIyLjUwOCAzOTUuMzJMMzIuMDAyIDM5MS4wOTRMMzYuNjgyIDM4OC45NDFDNTYuMzA1IDM3OS44MiAxMTUuODEyIDM1Mi4xNjQgMTgwLjg0NCAzNTIuMTY0QzIxNy42ODcgMzUyLjE2NCAyNDguMDAyIDM1OS44NzkgMjgwLjA5NiAzNjguMDQ3QzMxMC44MiAzNzUuODYzIDM0Mi41ODYgMzgzLjk0NSAzNzkuNCAzODMuOTQ1QzQxNC44NjEgMzgzLjk0NSA0NTEuNDg2IDM3Ni4zOTEgNDkxLjM2NSAzNjAuODQ4QzUwMy43MzIgMzU2LjA0MyA1MTEuNzM4IDM0NC4zNTIgNTExLjc1IDMzMS4wN0w1MTIgMzIuMzUyQzUxMi4wMDggMjEuMjgxIDUwNi44NDYgMTEuMjczIDQ5OC41MjkgNi4yM1pNNDk1Ljc1IDMzMS4wNTVDNDk1Ljc0NCAzMzcuNjkxIDQ5MS43NDYgMzQzLjUzNSA0ODUuNTU3IDM0NS45NDFDNDQ3LjU1NyAzNjAuNzUgNDEyLjgzMiAzNjcuOTQ1IDM3OS40IDM2Ny45NDVDMzQ0LjU4OCAzNjcuOTQ1IDMxMy44MDkgMzYwLjExMyAyODQuMDQxIDM1Mi41MzlDMjUwLjk0NSAzNDQuMTE3IDIxOS42ODQgMzM2LjE2NCAxODAuODQ0IDMzNi4xNjRDMTEyLjI2NCAzMzYuMTY0IDUwLjM0MiAzNjQuOTQ5IDI5Ljk5NCAzNzQuNDA2TDI1LjQ5NCAzNzYuNDc3TDE2IDM4MC43MDNWNjIuNTgyTDM4LjAwOCA1My42NjRDMTIzLjA3MiAxOS4xOTkgMTU4LjU5NCAxNi4zMTMgMTg1LjIwOSAxNi4zMTNDMjE4LjQ1OSAxNi4zMTYgMjQyLjY1NiAyNC4wODYgMjY4LjI5NyAzMi4zMTZDMjkyLjU1MyA0MC4xMTcgMzE3LjYzNSA0OC4xOCAzNDkuMDkyIDQ4LjE4QzM4My4yNzUgNDguMTggNDE5LjY0NiAzOC44NDQgNDYzLjU2NiAxOC43OTdDNDY3LjUyMyAxNi45OTIgNDcyLjA3IDE2IDQ3Ni4zNjcgMTZDNDgxLjM2MSAxNiA0ODUuODk2IDE3LjI4MSA0OTAuMjM2IDE5LjkxNEM0OTMuNzQyIDIyLjAzOSA0OTYuMDA0IDI2LjkxOCA0OTYgMzIuMzRMNDk1Ljc1IDMzMS4wNTVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Flag(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M498.529 6.23C491.717 2.098 484.258 0 476.367 0C469.73 0 463.008 1.465 456.928 4.238C415.164 23.301 380.898 32.18 349.092 32.18C320.131 32.18 297.332 24.848 273.195 17.086C247.5 8.836 220.957 0.316 185.211 0.312C157.084 0.312 119.732 3.289 32 38.836L16 45.32V8C16 3.582 12.418 0 8 0S0 3.582 0 8V504C0 508.406 3.594 512 8 512S16 508.406 16 504V398.219L22.508 395.32L32.002 391.094L36.682 388.941C56.305 379.82 115.812 352.164 180.844 352.164C217.687 352.164 248.002 359.879 280.096 368.047C310.82 375.863 342.586 383.945 379.4 383.945C414.861 383.945 451.486 376.391 491.365 360.848C503.732 356.043 511.738 344.352 511.75 331.07L512 32.352C512.008 21.281 506.846 11.273 498.529 6.23ZM495.75 331.055C495.744 337.691 491.746 343.535 485.557 345.941C447.557 360.75 412.832 367.945 379.4 367.945C344.588 367.945 313.809 360.113 284.041 352.539C250.945 344.117 219.684 336.164 180.844 336.164C112.264 336.164 50.342 364.949 29.994 374.406L25.494 376.477L16 380.703V62.582L38.008 53.664C123.072 19.199 158.594 16.313 185.209 16.313C218.459 16.316 242.656 24.086 268.297 32.316C292.553 40.117 317.635 48.18 349.092 48.18C383.275 48.18 419.646 38.844 463.566 18.797C467.523 16.992 472.07 16 476.367 16C481.361 16 485.896 17.281 490.236 19.914C493.742 22.039 496.004 26.918 496 32.34L495.75 331.055Z" />
        </Icon>
    </>
}