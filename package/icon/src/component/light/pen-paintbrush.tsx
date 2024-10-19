
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pen-paintbrush` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-paintbrush?s=light pen-paintbrush}
 * @preview ![pen-paintbrush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjIuMTE1IDIwOC42MTlMNDEuNTg3IDg4LjA5MkMyOC43NzUgNzUuMjc5IDI4Ljc3NSA1NC40MDIgNDEuNTg3IDQxLjU4OEM1NC40MDIgMjguNzc1IDc1LjI3OSAyOC43NzUgODguMDkxIDQxLjU4OEwyMDguNjE3IDE2Mi4xMTVMMjMxLjI0NCAxMzkuNDg2TDExMC43MTggMTguOTYxQzg1LjQzNSAtNi4zMiA0NC4yNzcgLTYuMzIgMTguOTYyIDE4Ljk2MUMtNi4zMjEgNDQuMjYgLTYuMzIxIDg1LjQyIDE4Ljk2MiAxMTAuNzE5TDEzOS40ODggMjMxLjI0NkwxNjIuMTE1IDIwOC42MTlaTTU0My45OTggNDQ3Ljk5NEM1MTEuOTk2IDQ0Ny45OTQgNDkyLjc3MSA0MjYuODE2IDQ5NS4wMjEgNDAwLjk4OEM0OTcuNTkzIDM3MS40OTYgNDg3LjY4NSAzNDEuMTA3IDQ2NS4zMDggMzE4LjU5NEM0NTMuNTI5IDMwNi43MjkgNDM5LjIyIDI5OC41MjMgNDIzLjc2NSAyOTMuNTAyTDM5Ni43ODUgMzIwLjQ4QzQxNC4xMDkgMzIxLjY5NSA0MzAuMjY1IDMyOC43MTkgNDQyLjU5NyAzNDEuMTQxQzQ1Ny41MTMgMzU2LjE0NiA0NjQuOTk2IDM3Ni45NDEgNDYzLjE0IDM5OC4yMDdDNDYxLjI5OCA0MTkuMzU0IDQ2Ny45NDEgNDM5LjM1IDQ4MS44NDUgNDU0LjUxOEM0OTYuOTA0IDQ3MC45NDcgNTE4Ljk3OCA0NzkuOTk2IDU0My45OTggNDc5Ljk5Nkg0OTAuMjc5QzQxOC45OTIgNDc5Ljk5NiAzNjQuNTM3IDQ2Ni4zMzggMzQwLjg3NiA0NDIuNTIxQzMyOC42MzQgNDMwLjE4NCAzMjEuOTQ1IDQxMy42NTQgMzIwLjk5OCAzOTYuMjYyTDI5My43ODcgNDIzLjQ2OUMyOTguMzI2IDQzOC42NjggMzA2LjIwMSA0NTMuMDEyIDMxOC4xNzMgNDY1LjA3NkMzNTcuMjY5IDUwNC40MyA0MzUuNzQ0IDUxMiA0OTAuMjc5IDUxMkM1MTUuODcxIDUxMiA1NDMuOTk4IDUxMiA1NDMuOTk4IDUxMkM1NjEuNjczIDUxMiA1NzYgNDk3LjY3IDU3NiA0NzkuOTk2UzU2MS42NzMgNDQ3Ljk5NCA1NDMuOTk4IDQ0Ny45OTRaTTUyNS4yNTcgNTYuMjYyTDQ4Ny43NDYgMTguNzQ2QzQ3NS4yNSA2LjI0OCA0NTguODY3IC0wLjAwMiA0NDIuNDkgLTAuMDAyQzQyNi4xMDcgLTAuMDAyIDQwOS43MjggNi4yNDYgMzk3LjIzIDE4Ljc0OEw2Ni40NTggMzQ5LjUzM0M2My40NzggMzU1LjEwNCA2MC42ODkgMzYwLjMxNCA1Ny43MDcgMzY1Ljg4NUwzMi4zMTggNDkyLjg1NUMzMC4yOTYgNTAyLjk2OSAzOC4xNTYgNTEyIDQ3Ljk0NyA1MTJDNDguOTk0IDUxMiA1MC4wNjIgNTExLjg5NiA1MS4xNDQgNTExLjY4MkwxNzguMTA5IDQ4Ni4yODVDMTgzLjY3NyA0ODMuMzA1IDE4OC44OSA0ODAuNTE2IDE5NC40NTkgNDc3LjUzNUw1MjUuMjUxIDE0Ni43NzFDNTUwLjI0OCAxMjEuNzc5IDU1MC4yNSA4MS4yNTYgNTI1LjI1NyA1Ni4yNjJaTTE3NS4xODMgNDUxLjU1N0wxNjkuMjgxIDQ1NC43MTVMMTY3LjE4NyA0NTUuODM2TDY4LjQwNCA0NzUuNTk0TDg4LjE1OCAzNzYuODA3TDkyLjE3MSAzNjkuMzA1TDkyLjQzNyAzNjguODA5TDM0Ny4zMDYgMTEzLjkzMkw0MzAuMDY4IDE5Ni42OTNMMTc1LjE4MyA0NTEuNTU3Wk01MDIuNjI2IDEyNC4xNDNMNDUyLjY5NSAxNzQuMDdMMzY5LjkyOSA5MS4zMDVMNDE5Ljg1OSA0MS4zNzVDNDI1LjkwNCAzNS4zMjggNDMzLjk0MSAzMiA0NDIuNDkgMzJDNDUxLjAzNyAzMiA0NTkuMDc0IDM1LjMyOCA0NjUuMTE5IDQxLjM3M0w1MDIuNjI4IDc4Ljg4N0M1MDguNjcxIDg0LjkzMiA1MTIgOTIuOTY3IDUxMiAxMDEuNTE2QzUxMiAxMTAuMDYyIDUwOC42NjkgMTE4LjA5OCA1MDIuNjI2IDEyNC4xNDNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PenPaintbrush(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M162.115 208.619L41.587 88.092C28.775 75.279 28.775 54.402 41.587 41.588C54.402 28.775 75.279 28.775 88.091 41.588L208.617 162.115L231.244 139.486L110.718 18.961C85.435 -6.32 44.277 -6.32 18.962 18.961C-6.321 44.26 -6.321 85.42 18.962 110.719L139.488 231.246L162.115 208.619ZM543.998 447.994C511.996 447.994 492.771 426.816 495.021 400.988C497.593 371.496 487.685 341.107 465.308 318.594C453.529 306.729 439.22 298.523 423.765 293.502L396.785 320.48C414.109 321.695 430.265 328.719 442.597 341.141C457.513 356.146 464.996 376.941 463.14 398.207C461.298 419.354 467.941 439.35 481.845 454.518C496.904 470.947 518.978 479.996 543.998 479.996H490.279C418.992 479.996 364.537 466.338 340.876 442.521C328.634 430.184 321.945 413.654 320.998 396.262L293.787 423.469C298.326 438.668 306.201 453.012 318.173 465.076C357.269 504.43 435.744 512 490.279 512C515.871 512 543.998 512 543.998 512C561.673 512 576 497.67 576 479.996S561.673 447.994 543.998 447.994ZM525.257 56.262L487.746 18.746C475.25 6.248 458.867 -0.002 442.49 -0.002C426.107 -0.002 409.728 6.246 397.23 18.748L66.458 349.533C63.478 355.104 60.689 360.314 57.707 365.885L32.318 492.855C30.296 502.969 38.156 512 47.947 512C48.994 512 50.062 511.896 51.144 511.682L178.109 486.285C183.677 483.305 188.89 480.516 194.459 477.535L525.251 146.771C550.248 121.779 550.25 81.256 525.257 56.262ZM175.183 451.557L169.281 454.715L167.187 455.836L68.404 475.594L88.158 376.807L92.171 369.305L92.437 368.809L347.306 113.932L430.068 196.693L175.183 451.557ZM502.626 124.143L452.695 174.07L369.929 91.305L419.859 41.375C425.904 35.328 433.941 32 442.49 32C451.037 32 459.074 35.328 465.119 41.373L502.628 78.887C508.671 84.932 512 92.967 512 101.516C512 110.062 508.669 118.098 502.626 124.143Z" />
        </Icon>
    </>
}