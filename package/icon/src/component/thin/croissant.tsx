
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `croissant` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/croissant?s=thin croissant}
 * @preview ![croissant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuNDIyIDE4Ny4xODhDNDkyLjg2MiAxNTMuNDQzIDQ3Mi44NTkgMTIyLjEwNSA0NDguMTU4IDkzLjg2N0M0NTEuMzY4IDc1LjY5OSA0NDIuNDg4IDYyLjk1NyA0MzQuMTI0IDU2LjczNEMzODAuNDg3IDE1Ljg0MiAzMTguMTQ2IDQuMzE4IDI0OC44MjUgMjEuNzI5QzI0MC40OTEgOC41MDQgMjI2LjE4OCAwIDIwOS45MTMgMEMyMDYuMTI1IDAgMjAyLjMzNCAwLjQ2OSAxOTguNjQxIDEuMzkzQzEwMS4yNTcgMjUuNjY4IDI1LjY2OCAxMDEuMjQ2IDEuMzgzIDE5OC42MjlDLTMuNTk0IDIxOC41NDEgNS4yMzYgMjM4LjY1MiAyMS44ODMgMjQ5LjA2NkM0LjU0OSAzMTguMjc3IDE2LjEgMzgwLjU0NyA1Ni44ODUgNDM0LjA2MkM2My4yNTIgNDQyLjYxMiA3NS45NDEgNDUxLjQxOSA5NC4xMTggNDQ4LjE4OUMxMjIuMzE4IDQ3Mi44NTUgMTUzLjY0MiA0OTIuODUyIDE4Ny40MDMgNTA3LjQyMkMxOTQuNDk2IDUxMC41IDIwMS44ODcgNTEyIDIwOS4wOSA1MTJDMjE5Ljk2NiA1MTIgMjMwLjM4OCA1MDguNTYyIDIzOC42NjkgNTAxLjg0NEMyNTIuNzMyIDQ5MC42NDEgMjU4Ljg3MiA0NzIuMTA5IDI1NC43MzIgNDUzLjQ2OUwyMzAuNzA2IDM0Ni4xNTJDMjM0LjQzOCAzNDIuMTUyIDIzNy41MjIgMzM3LjQ2NyAyMzkuNDY2IDMzMS4yODFDMjM5LjQ2NiAzMzEuMjgxIDI0Mi41MDkgMzIyLjAzNSAyNDQuMjE2IDMxNi45OEMyNTYuMjc1IDMxNi44NTkgMjY4LjA2NCAzMTEuOTUzIDI3Ni42MTMgMzAzLjQwNEwzMDMuNDM3IDI3Ni41ODZDMzEyLjI2MiAyNjcuNzYyIDMxNi44NTcgMjU2LjAyNyAzMTYuOTEyIDI0NC4wMjNDMzIxLjk5NiAyNDIuMzA1IDMzMS4yNzkgMjM5LjI1IDMzMS4yNzkgMjM5LjI1QzMzNy40NjkgMjM3LjMwNyAzNDIuMTU3IDIzNC4yMjMgMzQ2LjE1MSAyMzAuNDlMNDUzLjQ4NCAyNTQuNTE2QzQ1Ny4zMjggMjU1LjM3NSA0NjEuMTcyIDI1NS43ODEgNDY0Ljk1MyAyNTUuNzgxQzQ3OS40NjkgMjU1Ljc4MSA0OTIuOTY5IDI0OS42MDkgNTAxLjgxMyAyMzguNUM1MTIuOTg1IDIyNC42ODggNTE1LjE0MSAyMDUuMDE2IDUwNy40MjIgMTg3LjE4OFpNODQuOTY0IDQzMy4xMDlDNzguOTMyIDQzMi4zMjggNzMuMDg5IDQyOS4wMzEgNjkuNjUxIDQyNC40MzhDMzIuNDMgMzc1LjU4IDIxLjYzNSAzMTguNzMyIDM2LjgxMyAyNTUuNDc5TDIyOC4yMzEgMzE0LjM2NUMyMjYuMzg0IDMxOS44NTUgMjI1LjAxNCAzMjQuMDA0IDIyNC4zNzIgMzI2LjU2M0wyMjQuMTg0IDMyNi41QzIyMi42MzcgMzMxLjQ2OSAyMjAuNDgxIDMzNC45MDYgMjE3LjM4NyAzMzcuMzEyTDEwMS4xMzYgNDI4LjQ4NEM5NS4xOTggNDMzLjI1IDg5LjEzNiA0MzMuNjQxIDg0Ljk2NCA0MzMuMTA5Wk0yMjguNjUzIDQ4OS4zNzVDMjE5LjQ1IDQ5Ni43OTcgMjA2LjEwNiA0OTguMDQ3IDE5My43NDYgNDkyLjczNEMxNjMuOTA0IDQ3OS44NDggMTM2LjEzNCA0NjIuMzk2IDExMC43NzEgNDQxLjIwMUMxMTAuODY1IDQ0MS4xMjkgMTEwLjk4MiA0NDEuMTA1IDExMS4wNzMgNDQxLjAzMUwyMTYuOTUgMzU3Ljk5OEwyMzkuMTA2IDQ1Ni45NTNDMjQxLjkxOSA0NjkuNTc4IDIzNy45MzQgNDgxLjk4NCAyMjguNjUzIDQ4OS4zNzVaTTI5Mi4xMjMgMjY1LjI3MUwyNjUuMzAyIDI5Mi4wOUMyNjAuOTA2IDI5Ni40ODQgMjQ5LjU2NyAzMDQuMjM3IDIzNC45MjEgMjk5LjY4NEwzNy40NCAyMzguOTNDMjIuMDEyIDIzNC4xODIgMTIuOTkyIDIxOC4xNjQgMTYuOTA4IDIwMi41QzM5LjY5NCAxMTEuMTMxIDExMS4xMzggMzkuNjk1IDIwMi41MjIgMTYuOTE0QzIxOS4zNTEgMTIuNzEgMjM0LjU3IDIzLjE4OSAyMzguOTU2IDM3LjQ0MUwyOTkuNzE4IDIzNC44OTVDMzAzLjA0MSAyNDUuNTc0IDMwMC4wNzQgMjU3LjMyMiAyOTIuMTIzIDI2NS4yNzFaTTMyNi40OTggMjIzLjk2OUwzMjYuNTYxIDIyNC4xNTZDMzI0IDIyNC43OTkgMzE5Ljg0NiAyMjYuMTcgMzE0LjM0NCAyMjguMDIxTDI1NS40MzcgMzYuNjAyQzMxOC43MDcgMjEuMzc1IDM3NS41NzMgMzIuMTk5IDQyNC40OTkgNjkuNTE2QzQyOS4wMzEgNzIuODkxIDQzMi4zMjggNzguNzE5IDQzMy4xMDkgODQuNzVDNDMzLjYyNCA4OC44NDQgNDMzLjI0OSA5NC45NjkgNDI4LjQzNyAxMDAuOTg0TDMzNy4yOTUgMjE3LjE4OEMzMzQuOTA0IDIyMC4yNjYgMzMxLjQ2NyAyMjIuNDIyIDMyNi40OTggMjIzLjk2OVpNNDg5LjMyOCAyMjguNDg0QzQ4MiAyMzcuNzUgNDY5LjYyNSAyNDEuNzE5IDQ1Ni45NjkgMjM4Ljg5MUwzNTcuOTk1IDIxNi43MzJMNDQwLjk4NCAxMTAuOTIyQzQ0MS4wNzYgMTEwLjgwNyA0NDEuMDg5IDExMC42NTYgNDQxLjE4MSAxMTAuNTQxQzQ2Mi4zODggMTM1LjkzNCA0NzkuODU3IDE2My43MDkgNDkyLjczNSAxOTMuNTMxQzQ5OC4wNzggMjA1Ljg5MSA0OTYuNzk3IDIxOS4yNjYgNDg5LjMyOCAyMjguNDg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Croissant(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.422 187.188C492.862 153.443 472.859 122.105 448.158 93.867C451.368 75.699 442.488 62.957 434.124 56.734C380.487 15.842 318.146 4.318 248.825 21.729C240.491 8.504 226.188 0 209.913 0C206.125 0 202.334 0.469 198.641 1.393C101.257 25.668 25.668 101.246 1.383 198.629C-3.594 218.541 5.236 238.652 21.883 249.066C4.549 318.277 16.1 380.547 56.885 434.062C63.252 442.612 75.941 451.419 94.118 448.189C122.318 472.855 153.642 492.852 187.403 507.422C194.496 510.5 201.887 512 209.09 512C219.966 512 230.388 508.562 238.669 501.844C252.732 490.641 258.872 472.109 254.732 453.469L230.706 346.152C234.438 342.152 237.522 337.467 239.466 331.281C239.466 331.281 242.509 322.035 244.216 316.98C256.275 316.859 268.064 311.953 276.613 303.404L303.437 276.586C312.262 267.762 316.857 256.027 316.912 244.023C321.996 242.305 331.279 239.25 331.279 239.25C337.469 237.307 342.157 234.223 346.151 230.49L453.484 254.516C457.328 255.375 461.172 255.781 464.953 255.781C479.469 255.781 492.969 249.609 501.813 238.5C512.985 224.688 515.141 205.016 507.422 187.188ZM84.964 433.109C78.932 432.328 73.089 429.031 69.651 424.438C32.43 375.58 21.635 318.732 36.813 255.479L228.231 314.365C226.384 319.855 225.014 324.004 224.372 326.563L224.184 326.5C222.637 331.469 220.481 334.906 217.387 337.312L101.136 428.484C95.198 433.25 89.136 433.641 84.964 433.109ZM228.653 489.375C219.45 496.797 206.106 498.047 193.746 492.734C163.904 479.848 136.134 462.396 110.771 441.201C110.865 441.129 110.982 441.105 111.073 441.031L216.95 357.998L239.106 456.953C241.919 469.578 237.934 481.984 228.653 489.375ZM292.123 265.271L265.302 292.09C260.906 296.484 249.567 304.237 234.921 299.684L37.44 238.93C22.012 234.182 12.992 218.164 16.908 202.5C39.694 111.131 111.138 39.695 202.522 16.914C219.351 12.71 234.57 23.189 238.956 37.441L299.718 234.895C303.041 245.574 300.074 257.322 292.123 265.271ZM326.498 223.969L326.561 224.156C324 224.799 319.846 226.17 314.344 228.021L255.437 36.602C318.707 21.375 375.573 32.199 424.499 69.516C429.031 72.891 432.328 78.719 433.109 84.75C433.624 88.844 433.249 94.969 428.437 100.984L337.295 217.188C334.904 220.266 331.467 222.422 326.498 223.969ZM489.328 228.484C482 237.75 469.625 241.719 456.969 238.891L357.995 216.732L440.984 110.922C441.076 110.807 441.089 110.656 441.181 110.541C462.388 135.934 479.857 163.709 492.735 193.531C498.078 205.891 496.797 219.266 489.328 228.484Z" />
        </Icon>
    </>
}