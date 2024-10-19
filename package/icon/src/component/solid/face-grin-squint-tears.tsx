
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-grin-squint-tears` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-squint-tears?s=solid face-grin-squint-tears}
 * @preview ![face-grin-squint-tears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05Ny45MzcgNDA1LjAxNkM3Ni4zMzkgNDA3Ljk4NCAyNy42OTUgNDE2LjQyMiAxMy41NTQgNDMwLjU2MkMtNC44MjUgNDQ4Ljk0NSAtNC40NDIgNDc5LjAyIDE0LjI2OSA0OTcuNzNTNjMuMDU0IDUxNi44MjQgODEuNDM3IDQ5OC40NDVDOTUuNTc4IDQ4NC4zMDUgMTAzLjkyOSA0MzUuNTcgMTA2Ljk4NCA0MTQuMDYyQzEwNy44MTIgNDA4LjcxMSAxMDMuMjg5IDQwNC4xODggOTcuOTM3IDQwNS4wMTZaTTQxOC45OCAxMzguNjA1TDQxNS4yNjUgMTM5LjA4Mkg0MTIuNzkzQzQwMS4xMjkgMTM5LjA4MiAzOTAuMDg5IDEzNC4wMDQgMzgyLjUwNCAxMjUuMTUyQzM3NC45MTggMTE2LjI5NyAzNzEuNTk3IDEwNC41ODYgMzczLjMzMiA5My40MzRDMzc1LjcxMSA3Ni42NzIgMzc4LjQwNiA2My4xODggMzgxLjE4MyA1MS40NzdDMjg4LjcyNiAtNS4yMDMgMTY2LjMzMiA2LjI1OCA4Ni4yOTYgODYuMjkzQzYuMjU0IDE2Ni4zMzYgLTUuMjA0IDI4OC43MzQgNTEuNDggMzgxLjE4OEM2My45MTQgMzc4LjIzNCA3Ny40MSAzNzUuNTM5IDkzLjAxOSAzNzMuMzk1TDk2LjczNCAzNzIuOTE4SDk5LjIwN0MxMTAuODcxIDM3Mi45MTggMTIxLjkxIDM3Ny45OTYgMTI5LjQ5NiAzODYuODQ4QzEzNy4wODIgMzk1LjcwMyAxNDAuNDAyIDQwNy40MTQgMTM4LjY2OCA0MTguNTY2QzEzNi4yODkgNDM1LjMyOCAxMzMuNTkzIDQ0OC44MTIgMTMwLjgxNiA0NjAuNTIzQzIyMy4yNzMgNTE3LjIwMyAzNDUuNjY4IDUwNS43NDIgNDI1LjcwMyA0MjUuNzAzQzUwNS43NDYgMzQ1LjY2NCA1MTcuMjAzIDIyMy4yNjYgNDYwLjUxOSAxMzAuODEyQzQ0OC4wODYgMTMzLjc2NiA0MzQuNTg5IDEzNi40NjEgNDE4Ljk4IDEzOC42MDVaTTI2MS4zNTkgMTAwLjM4M0MyNjQuNjI5IDg3LjIxMSAyODMuNzAzIDg4LjgyIDI4NC45NjEgMTAyLjIzNEwyODkuNjE3IDE1NC41TDM0MS44ODIgMTU5LjE1NkMzNTUuNDcyIDE2MC40MTQgMzU2LjczNCAxNzkuNDg0IDM0My43MzQgMTgyLjc1OEwyNTMuMTk1IDIwNS40MTRDMjQ0LjUzMSAyMDcuNTM5IDIzNi41NzggMTk5LjU4NiAyMzguNzAzIDE5MC45MjJMMjYxLjM1OSAxMDAuMzgzWk0xODIuNzU3IDM0My43MzRDMTc5LjQ4NCAzNTYuNzM0IDE2MC41IDM1NS4zODcgMTU5LjE1NiAzNDEuODgzTDE1NC41IDI4OS42MTdMMTAyLjIzNCAyODQuOTYxQzg4LjgyIDI4My43MDMgODcuMjExIDI2NC42MjkgMTAwLjM4MiAyNjEuMzU5TDE5MC45MjIgMjM4LjcwM0MxOTkuNjcyIDIzNi40OTIgMjA3LjYyNSAyNDQuNDQ1IDIwNS40MTQgMjUzLjE5NUwxODIuNzU3IDM0My43MzRaTTM4MC40NTMgMzgwLjQ1M0MzMzcuNjM2IDQyMy4yNjYgMjU4LjI3MyA0NDguNTM1IDIxMi43ODkgNDE2LjIzNEMyMDIuOTMzIDQwOS4xMjEgMjA0LjE3OSAzOTQuMjY2IDIxNC43MDMgMzg4Ljg2N0MyNDMuMDA0IDM3NC4zNTIgMjc4LjY2IDM0Ni40NzcgMzEyLjU3IDMxMi41N0MzNDYuNDc2IDI3OC42NiAzNzQuMzU1IDI0My4wMDQgMzg4Ljg2NyAyMTQuNzAzQzM5NC40MzcgMjA0LjAwOCA0MDkuMjExIDIwMy4xOTUgNDE2LjIzNCAyMTIuNzg5QzQ0OC41MzUgMjU4LjI3MyA0MjMuMjY1IDMzNy42MzcgMzgwLjQ1MyAzODAuNDUzWk00OTcuNzMgMTQuMjdDNDc5LjAxOSAtNC40NDEgNDQ4Ljk0NSAtNC44MjggNDMwLjU2MiAxMy41NTVDNDE2LjQyMiAyNy42OTUgNDA4LjA3IDc2LjQzIDQwNS4wMTUgOTcuOTM0QzQwNC4xODcgMTAzLjI4OSA0MDguNzExIDEwNy44MTIgNDE0LjA2MiAxMDYuOTg0QzQzNS42NiAxMDQuMDE2IDQ4NC4zMDQgOTUuNTc4IDQ5OC40NDUgODEuNDM4QzUxNi44MjQgNjMuMDU1IDUxNi40NDEgMzIuOTggNDk3LjczIDE0LjI3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FaceGrinSquintTears(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M97.937 405.016C76.339 407.984 27.695 416.422 13.554 430.562C-4.825 448.945 -4.442 479.02 14.269 497.73S63.054 516.824 81.437 498.445C95.578 484.305 103.929 435.57 106.984 414.062C107.812 408.711 103.289 404.188 97.937 405.016ZM418.98 138.605L415.265 139.082H412.793C401.129 139.082 390.089 134.004 382.504 125.152C374.918 116.297 371.597 104.586 373.332 93.434C375.711 76.672 378.406 63.188 381.183 51.477C288.726 -5.203 166.332 6.258 86.296 86.293C6.254 166.336 -5.204 288.734 51.48 381.188C63.914 378.234 77.41 375.539 93.019 373.395L96.734 372.918H99.207C110.871 372.918 121.91 377.996 129.496 386.848C137.082 395.703 140.402 407.414 138.668 418.566C136.289 435.328 133.593 448.812 130.816 460.523C223.273 517.203 345.668 505.742 425.703 425.703C505.746 345.664 517.203 223.266 460.519 130.812C448.086 133.766 434.589 136.461 418.98 138.605ZM261.359 100.383C264.629 87.211 283.703 88.82 284.961 102.234L289.617 154.5L341.882 159.156C355.472 160.414 356.734 179.484 343.734 182.758L253.195 205.414C244.531 207.539 236.578 199.586 238.703 190.922L261.359 100.383ZM182.757 343.734C179.484 356.734 160.5 355.387 159.156 341.883L154.5 289.617L102.234 284.961C88.82 283.703 87.211 264.629 100.382 261.359L190.922 238.703C199.672 236.492 207.625 244.445 205.414 253.195L182.757 343.734ZM380.453 380.453C337.636 423.266 258.273 448.535 212.789 416.234C202.933 409.121 204.179 394.266 214.703 388.867C243.004 374.352 278.66 346.477 312.57 312.57C346.476 278.66 374.355 243.004 388.867 214.703C394.437 204.008 409.211 203.195 416.234 212.789C448.535 258.273 423.265 337.637 380.453 380.453ZM497.73 14.27C479.019 -4.441 448.945 -4.828 430.562 13.555C416.422 27.695 408.07 76.43 405.015 97.934C404.187 103.289 408.711 107.812 414.062 106.984C435.66 104.016 484.304 95.578 498.445 81.438C516.824 63.055 516.441 32.98 497.73 14.27Z" />
        </Icon>
    </>
}