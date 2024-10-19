
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen-ruler` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=thin pen-ruler}
 * @preview ![pen-ruler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDMuODEzIDIzOC40MDZDMTA2LjkzOCAyNDEuNTI5IDExMi4wMDIgMjQxLjUyOSAxMTUuMTI1IDIzOC40MDZMMTE1LjEyNyAyMzguNDA0QzExOC4yNSAyMzUuMjc5IDExOC4yNSAyMzAuMjE1IDExNS4xMjcgMjI3LjA5MkwyMC42MDEgMTMyLjU2N0MxNC40NzYgMTI2LjQzNCAxNC40NzYgMTE2LjQ1NCAyMC41OTMgMTEwLjMyOUwxMTAuMzE2IDIwLjYyMUMxMTMuMjc5IDE3LjY1NCAxMTcuMjIyIDE2LjAyMSAxMjEuNDIyIDE2LjAyMUMxMjUuNjI4IDE2LjAyMSAxMjkuNTg1IDE3LjY2IDEzMi41NTYgMjAuNjI2TDE3OC4zMTggNjYuMzg5TDEyMi4zNTMgMTIyLjM1NEMxMTkuMjI4IDEyNS40NzkgMTE5LjIyOCAxMzAuNTQxIDEyMi4zNTMgMTMzLjY2NkMxMjMuOTE2IDEzNS4yMjkgMTI1Ljk0NyAxMzYuMDEgMTI4LjAwOSAxMzYuMDFTMTMyLjEwMyAxMzUuMjI5IDEzMy42NjUgMTMzLjY2NkwxODkuNjMgNzcuNzAxTDIyNy4wNzYgMTE1LjE0NUMyMzAuMjAxIDExOC4yNjggMjM1LjI2NSAxMTguMjY4IDIzOC4zODggMTE1LjE0NUMyNDEuNTEzIDExMi4wMiAyNDEuNTEzIDEwNi45NTYgMjM4LjM4OCAxMDMuODMzTDE0My44NyA5LjMxNEMxMzcuNjY3IDMuMTE5IDEyOS41NDIgMC4wMjEgMTIxLjQyMiAwLjAyMVMxMDUuMTg0IDMuMTE5IDk4Ljk5NyA5LjMxNEw5LjI4MSA5OS4wMTVDLTMuMDk0IDExMS40MDUgLTMuMDk0IDEzMS40ODMgOS4yODEgMTQzLjg3M0wxMDMuODEzIDIzOC40MDZaTTQwOC4xNTQgMjczLjZDNDA1LjAzMSAyNzAuNDc1IDM5OS45NjUgMjcwLjQ3NyAzOTYuODQyIDI3My42VjI3My42MDJDMzkzLjcxNyAyNzYuNzI1IDM5My43MTkgMjgxLjc4OSAzOTYuODQyIDI4NC45MTRMNDM0LjMwOSAzMjIuMzgyTDM3OC4zNDQgMzc4LjM0N0MzNzUuMjE5IDM4MS40NzIgMzc1LjIxOSAzODYuNTM1IDM3OC4zNDQgMzg5LjY2QzM3OS45MDcgMzkxLjIyMiAzODEuOTM4IDM5Mi4wMDMgMzg0IDM5Mi4wMDNTMzg4LjA5NCAzOTEuMjIyIDM4OS42NTYgMzg5LjY2TDQ0NS42MjEgMzMzLjY5NEw0OTEuMzgxIDM3OS40NTVDNDk3LjUwNiAzODUuNTg3IDQ5Ny41MDYgMzk1LjU2OCA0OTEuMzg5IDQwMS42OTJMNDAxLjY2NiA0OTEuNDAxQzM5OC43MDMgNDk0LjM2OCAzOTQuNzYgNDk2IDM5MC41NjEgNDk2QzM4Ni4zNTQgNDk2IDM4Mi4zOTcgNDk0LjM2MiAzNzkuNDI2IDQ5MS4zOTNMMjg0LjkgMzk2Ljg2NEMyODEuNzc3IDM5My43NDEgMjc2LjcxMyAzOTMuNzQxIDI3My41ODggMzk2Ljg2NkwyNzMuNTg2IDM5Ni44NjhDMjcwLjQ2MyAzOTkuOTkxIDI3MC40NjMgNDA1LjA1NiAyNzMuNTg4IDQwOC4xODFMMjgxLjQzNiA0MTYuMDE2TDM2OC4xMTIgNTAyLjcwN0MzNzQuMzE1IDUwOC45MDIgMzgyLjQ0IDUxMiAzOTAuNTYxIDUxMkMzOTguNjgxIDUxMiA0MDYuNzk4IDUwOC45MDIgNDEyLjk4NiA1MDIuNzA3TDUwMi43MDEgNDEzLjAwN0M1MTUuMDc2IDQwMC42MTYgNTE1LjA3NiAzODAuNTM5IDUwMi43MDEgMzY4LjE0OEw0MDguMTU0IDI3My42Wk00OTcuOTMyIDU5LjMyMUw0NTIuNjg1IDE0LjA3NEM0NDMuMjk1IDQuNjkxIDQzMC45OTkgMCA0MTguNzAyIDBTMzk0LjEwOSA0LjY5MSAzODQuNzE5IDE0LjA3NEwyNi4yNTkgMzcyLjUxOUMyMS42MDUgMzc3LjE3NSAxOC40OTkgMzgzLjE1MiAxNy4zNjUgMzg5LjYzOEwwLjMyNiA0ODcuMTA4Qy0xLjk4NiA1MDAuMzM2IDguMzI4IDUxMiAyMS4xNjUgNTEyQzIyLjM5MiA1MTIgMjMuNjQgNTExLjg5NSAyNC45MDMgNTExLjY3MkwxMjIuNDM1IDQ5NC41NjlDMTI4LjkxMiA0OTMuNDM0IDEzNC44ODIgNDkwLjMyOSAxMzkuNTMgNDg1LjY4TDQ5Ny45MzQgMTI3LjI0M0M1MTYuNjg5IDEwOC40ODUgNTE2LjY4OSA3OC4wNzYgNDk3LjkzMiA1OS4zMjFaTTEyOC4yMTYgNDc0LjM2OEMxMjUuODggNDc2LjcwNCAxMjIuOTIzIDQ3OC4yNDEgMTE5LjY2NiA0NzguODExTDIxLjE2NSA0OTZDMTkuMDM4IDQ5NiAxNy42OTUgNDk0LjY3NiAxNy4yMTggNDk0LjEwOEMxNi41MDkgNDkzLjI2NiAxNS43NCA0OTEuODQ2IDE2LjA4NyA0ODkuODY0TDMzLjEyNiAzOTIuMzkyQzMzLjY5NCAzODkuMTM0IDM1LjIzMyAzODYuMTc1IDM3LjU3NSAzODMuODMzTDMxNy4wNDggMTA0LjM2OEw0MDcuNjE5IDE5NC45NEwxMjguMjE2IDQ3NC4zNjhaTTQ4Ni42MiAxMTUuOTNMNDE4LjkzMSAxODMuNjI4TDMyOC4zNiA5My4wNTZMMzk2LjAyNyAyNS4zOTJDNDAyLjA5IDE5LjMzNSA0MTAuMTQyIDE2IDQxOC43MDIgMTZDNDI3LjI2MiAxNiA0MzUuMzE1IDE5LjMzNSA0NDEuMzcxIDI1LjM4OEw0ODYuNjIgNzAuNjM3QzQ5Mi42NjYgNzYuNjgzIDQ5NS45OTYgODQuNzI0IDQ5NS45OTYgOTMuMjgzUzQ5Mi42NjYgMTA5Ljg4NCA0ODYuNjIgMTE1LjkzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PenRuler(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M103.813 238.406C106.938 241.529 112.002 241.529 115.125 238.406L115.127 238.404C118.25 235.279 118.25 230.215 115.127 227.092L20.601 132.567C14.476 126.434 14.476 116.454 20.593 110.329L110.316 20.621C113.279 17.654 117.222 16.021 121.422 16.021C125.628 16.021 129.585 17.66 132.556 20.626L178.318 66.389L122.353 122.354C119.228 125.479 119.228 130.541 122.353 133.666C123.916 135.229 125.947 136.01 128.009 136.01S132.103 135.229 133.665 133.666L189.63 77.701L227.076 115.145C230.201 118.268 235.265 118.268 238.388 115.145C241.513 112.02 241.513 106.956 238.388 103.833L143.87 9.314C137.667 3.119 129.542 0.021 121.422 0.021S105.184 3.119 98.997 9.314L9.281 99.015C-3.094 111.405 -3.094 131.483 9.281 143.873L103.813 238.406ZM408.154 273.6C405.031 270.475 399.965 270.477 396.842 273.6V273.602C393.717 276.725 393.719 281.789 396.842 284.914L434.309 322.382L378.344 378.347C375.219 381.472 375.219 386.535 378.344 389.66C379.907 391.222 381.938 392.003 384 392.003S388.094 391.222 389.656 389.66L445.621 333.694L491.381 379.455C497.506 385.587 497.506 395.568 491.389 401.692L401.666 491.401C398.703 494.368 394.76 496 390.561 496C386.354 496 382.397 494.362 379.426 491.393L284.9 396.864C281.777 393.741 276.713 393.741 273.588 396.866L273.586 396.868C270.463 399.991 270.463 405.056 273.588 408.181L281.436 416.016L368.112 502.707C374.315 508.902 382.44 512 390.561 512C398.681 512 406.798 508.902 412.986 502.707L502.701 413.007C515.076 400.616 515.076 380.539 502.701 368.148L408.154 273.6ZM497.932 59.321L452.685 14.074C443.295 4.691 430.999 0 418.702 0S394.109 4.691 384.719 14.074L26.259 372.519C21.605 377.175 18.499 383.152 17.365 389.638L0.326 487.108C-1.986 500.336 8.328 512 21.165 512C22.392 512 23.64 511.895 24.903 511.672L122.435 494.569C128.912 493.434 134.882 490.329 139.53 485.68L497.934 127.243C516.689 108.485 516.689 78.076 497.932 59.321ZM128.216 474.368C125.88 476.704 122.923 478.241 119.666 478.811L21.165 496C19.038 496 17.695 494.676 17.218 494.108C16.509 493.266 15.74 491.846 16.087 489.864L33.126 392.392C33.694 389.134 35.233 386.175 37.575 383.833L317.048 104.368L407.619 194.94L128.216 474.368ZM486.62 115.93L418.931 183.628L328.36 93.056L396.027 25.392C402.09 19.335 410.142 16 418.702 16C427.262 16 435.315 19.335 441.371 25.388L486.62 70.637C492.666 76.683 495.996 84.724 495.996 93.283S492.666 109.884 486.62 115.93Z" />
        </Icon>
    </>
}