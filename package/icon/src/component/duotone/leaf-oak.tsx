
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `leaf-oak` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/leaf-oak?s=duotone leaf-oak}
 * @preview ![leaf-oak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5OC4wMDIgMjMyLjcyN0M0OTEuNzU2IDIzOS40NzcgNDgzLjM4MyAyNDQuNDc3IDQ3NS4zODcgMjQ5LjM0OEM0NjIuNzY1IDI1Ny4yMTkgNDQ5Ljc3MSAyNjQuMzQ0IDQzNS41MjUgMjcyLjQ2NUM0MzkuOTgyIDI3Ny45MzQgNDQzLjYxNyAyODIuMTcyIDQ0Ni45NjMgMjg2LjMwOUM0NjkuMjg3IDMxMy45MTQgNDYyLjgxNCAzNTEuNDEgNDMxLjQ3MiAzNjguMDgyQzQwOS4zOTggMzc5LjgyIDM4NS45NTkgMzc4LjMyIDM2Mi4wNTMgMzc1LjMwNUMzNDkuMzA2IDM3My42OCAzMzYuMzEyIDM3Mi42OCAzMTkuODE4IDM3MC45M0MzMjQuMDY2IDM3Ny4wNTUgMzI2LjA2NCAzNzkuNTUxIDMyNy41NjYgMzgyLjE3NkMzNDIuNTU4IDQwOC4yODkgMzMxLjgxMiA0MzcuNTMxIDMwMi45NDkgNDQ1LjM5OEMyOTEuMDc4IDQ0OC41MjcgMjc3LjMzMiA0NDguODk4IDI2NS4zMzYgNDQ2LjE1MkMyNDguMDk0IDQ0Mi4yNzcgMjMxLjk3NCA0MzMuMjgxIDIxNC43MyA0MjguNjU2QzE5NC4wNTEgNDIyLjg3MyAxODQuNjk3IDQyOC4wNzYgMTc5LjA2MiA0MjkuOTIyQzE1OS41NTYgNDM2LjM0NCAxMzkuMDUxIDQzMy42OCAxMjEuMzA4IDQyNC42MjlMMzEyLjk2OSAyMzIuOTY5QzMyMi4zNDQgMjIzLjU5NCAzMjIuMzQ0IDIwOC40MDYgMzEyLjk2OSAxOTkuMDMxUzI4OC40MDYgMTg5LjY1NiAyNzkuMDMxIDE5OS4wMzFMODcuMzY3IDM5MC42OTVDNzguMzE4IDM3Mi45NTEgNzUuNjU2IDM1Mi40NDUgODIuMDc4IDMzMi45MzhDODMuOTM1IDMyNy4yOTEgODkuMTU0IDMxOC4wMzkgODMuMzQyIDI5Ny4yN0M3OC43MTkgMjgwLjAyMyA2OS43MjEgMjYzLjkwNiA2NS44NDcgMjQ2LjY2NEM2My4wOTkgMjM0LjY2NCA2My40NzIgMjIwLjkyMiA2Ni41OTcgMjA5LjA1MUM3NC40NjkgMTgwLjE4OCAxMDMuNzA5IDE2OS40NDEgMTI5LjgyNCAxODQuNDM0QzEzMi40NDkgMTg1LjkzNCAxMzQuOTQ3IDE4Ny45MzQgMTQxLjA3IDE5Mi4xOEMxMzkuMzIyIDE3NS42ODggMTM4LjMyIDE2Mi42OTUgMTM2LjY5NyAxNDkuOTQ1QzEzMy42NzggMTI2LjAzOSAxMzIuMTc2IDEwMi42MDIgMTQzLjkxOCA4MC41MjdDMTYwLjU5IDQ5LjE4NCAxOTguMDg4IDQyLjcxMSAyMjUuNjkxIDY1LjAzOUMyMjkuODI4IDY4LjM4MyAyMzQuMDY2IDcyLjAxNiAyMzkuNTM1IDc2LjQ3M0MyNDcuNjU2IDYyLjIyNyAyNTQuNzc3IDQ5LjIzNCAyNjIuNjUyIDM2LjYxM0MyNjcuNTIzIDI4LjYxNyAyNzIuNTIzIDIwLjI0MiAyNzkuMjcxIDEzLjk5NkMzMDMuMDEyIC04LjEyMSAzMzguMzc1IC0zLjM3MSAzNTcuMTE3IDIzLjYxN0MzNjMuOTE2IDMzLjk4NCAzNjcuNDcxIDQ4LjkwNCAzODMuOTgyIDQ0LjEwOUM0MTYuOTcxIDM0LjM2NyA0NDAuOTYxIDQxLjIzNCA0NTUuNDU3IDU2LjQ4TDQ1NS4zOTYgNTYuNjAyTDQ1NS41MTcgNTYuNTM5QzQ3MC43NjIgNzEuMDM5IDQ3Ny42MzUgOTUuMDMxIDQ2Ny44ODggMTI4LjAxNkM0NjMuMTUgMTQ0LjM1NCA0NzcuNjE1IDE0Ny44MTQgNDg4LjM4MSAxNTQuODgzQzUxNS4zNzEgMTczLjYyNSA1MjAuMTIxIDIwOC45ODQgNDk4LjAwMiAyMzIuNzI3WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMTIuOTY5IDIzMi45NjlMNDAuOTY5IDUwNC45NjlDMzYuMjgxIDUwOS42NTYgMzAuMTQxIDUxMiAyNCA1MTJTMTEuNzE5IDUwOS42NTYgNy4wMzEgNTA0Ljk2OUMtMi4zNDQgNDk1LjU5NCAtMi4zNDQgNDgwLjQwNiA3LjAzMSA0NzEuMDMxTDI3OS4wMzEgMTk5LjAzMUMyODguNDA2IDE4OS42NTYgMzAzLjU5NCAxODkuNjU2IDMxMi45NjkgMTk5LjAzMVMzMjIuMzQ0IDIyMy41OTQgMzEyLjk2OSAyMzIuOTY5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LeafOak(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M498.002 232.727C491.756 239.477 483.383 244.477 475.387 249.348C462.765 257.219 449.771 264.344 435.525 272.465C439.982 277.934 443.617 282.172 446.963 286.309C469.287 313.914 462.814 351.41 431.472 368.082C409.398 379.82 385.959 378.32 362.053 375.305C349.306 373.68 336.312 372.68 319.818 370.93C324.066 377.055 326.064 379.551 327.566 382.176C342.558 408.289 331.812 437.531 302.949 445.398C291.078 448.527 277.332 448.898 265.336 446.152C248.094 442.277 231.974 433.281 214.73 428.656C194.051 422.873 184.697 428.076 179.062 429.922C159.556 436.344 139.051 433.68 121.308 424.629L312.969 232.969C322.344 223.594 322.344 208.406 312.969 199.031S288.406 189.656 279.031 199.031L87.367 390.695C78.318 372.951 75.656 352.445 82.078 332.938C83.935 327.291 89.154 318.039 83.342 297.27C78.719 280.023 69.721 263.906 65.847 246.664C63.099 234.664 63.472 220.922 66.597 209.051C74.469 180.188 103.709 169.441 129.824 184.434C132.449 185.934 134.947 187.934 141.07 192.18C139.322 175.688 138.32 162.695 136.697 149.945C133.678 126.039 132.176 102.602 143.918 80.527C160.59 49.184 198.088 42.711 225.691 65.039C229.828 68.383 234.066 72.016 239.535 76.473C247.656 62.227 254.777 49.234 262.652 36.613C267.523 28.617 272.523 20.242 279.271 13.996C303.012 -8.121 338.375 -3.371 357.117 23.617C363.916 33.984 367.471 48.904 383.982 44.109C416.971 34.367 440.961 41.234 455.457 56.48L455.396 56.602L455.517 56.539C470.762 71.039 477.635 95.031 467.888 128.016C463.15 144.354 477.615 147.814 488.381 154.883C515.371 173.625 520.121 208.984 498.002 232.727Z" />
            <path d="M312.969 232.969L40.969 504.969C36.281 509.656 30.141 512 24 512S11.719 509.656 7.031 504.969C-2.344 495.594 -2.344 480.406 7.031 471.031L279.031 199.031C288.406 189.656 303.594 189.656 312.969 199.031S322.344 223.594 312.969 232.969Z" />
        </Icon>
    </>
}