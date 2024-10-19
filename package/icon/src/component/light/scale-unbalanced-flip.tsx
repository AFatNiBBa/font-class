
import { Icon } from "../../index";

/**
 * A component that renders the `scale-unbalanced-flip` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scale-unbalanced-flip?s=light scale-unbalanced-flip}
 * @preview ![scale-unbalanced-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzQuMzk3IDM3NS4xMjlMNTI1LjM4NSAxOTkuMTMzQzUyMi4xMzUgMTk0LjM4MyA1MTcuMTMzIDE5Mi4wMDggNTEyLjAwOCAxOTIuMDA4QzUwNi44ODEgMTkyLjAwOCA1MDEuODgxIDE5NC4zODMgNDk4LjYzMSAxOTkuMTMzTDM4OS42MTkgMzc1LjEyOUMzODUuNzQ0IDM4MC44NzkgMzgzLjQ5NCAzODcuNzUyIDM4NC4xMTkgMzk0Ljc1MkMzODkuNDk0IDQ2MC4zNzcgNDQ0Ljc1IDUxMiA1MTIuMDA4IDUxMlM2MzQuNTIyIDQ2MC4zNzcgNjM5Ljg5NyAzOTQuNzUyQzY0MC41MjIgMzg3Ljc1MiA2MzguMjcyIDM4MC44NzkgNjM0LjM5NyAzNzUuMTI5Wk01MTIuMDA4IDIzOC4yNTZMNjAyLjI2OCAzODQuMDA0SDQyMC45OThMNTEyLjAwOCAyMzguMjU2Wk01MTIuMDA4IDQ4MEM0NzAuNzU0IDQ4MCA0MzUgNDUzLjI1MiA0MjEuNjIzIDQxNi4wMDJINjAyLjc2OEM1ODkuNTE2IDQ1Mi44NzcgNTUzLjYzNyA0ODAgNTEyLjAwOCA0ODBaTTI1NS44ODEgMjY2Ljc1NkMyNTYuNTA2IDI1OS43NTYgMjU0LjI1NiAyNTIuODgxIDI1MC4zODEgMjQ3LjEzMUwxNDEuMzY5IDcxLjEzNUMxMzguMTE5IDY2LjM4NSAxMzMuMTE5IDY0LjAxIDEyNy45OTIgNjQuMDFDMTIyLjg2NyA2NC4wMSAxMTcuODY1IDY2LjM4NSAxMTQuNjE1IDcxLjEzNUw1LjYwNCAyNDcuMTMxQzEuNzI5IDI1Mi44ODEgLTAuNTIxIDI1OS43NTYgMC4xMDQgMjY2Ljc1NkM1LjQ3OSAzMzIuMzc5IDYwLjczNCAzODQuMDA0IDEyNy45OTIgMzg0LjAwNFMyNTAuNTA2IDMzMi4zNzkgMjU1Ljg4MSAyNjYuNzU2Wk0xMjcuOTkyIDExMC4yNkwyMTguMjUgMjU2LjAwNkgzNi45ODJMMTI3Ljk5MiAxMTAuMjZaTTM3LjYwNyAyODguMDA2SDIxOC43NTJDMjA1LjUgMzI0Ljg3OSAxNjkuNjIxIDM1Mi4wMDQgMTI3Ljk5MiAzNTIuMDA0Qzg2LjczOCAzNTIuMDA0IDUwLjk4NCAzMjUuMjU0IDM3LjYwNyAyODguMDA2Wk01MTIuMDIgMTYwLjAwOEM1MTguNzI1IDE2MC4wMDggNTI0Ljk1OSAxNTUuNzczIDUyNy4xOTMgMTQ5LjA3QzUyOS45OSAxNDAuNjggNTI1LjQ1OSAxMzEuNjE5IDUxNy4wODIgMTI4LjgzOEwzODAuNzA3IDgzLjM4MUMzODIuNjcyIDc3LjIzNCAzODQuMDE2IDcwLjgwOSAzODQuMDE2IDY0LjAxQzM4NC4wMTYgMjguNjY0IDM1NS4zNTkgMC4wMTIgMzIwLjAxNCAwLjAxMkMyOTIuMDM3IDAuMDEyIDI2OC41MDggMTguMDc0IDI1OS44MDMgNDMuMDg0TDEzMy4wNjggMC44NEMxMjQuNjE1IC0xLjk4OCAxMTUuNjEzIDIuNTU5IDExMi44MzIgMTAuOTQ5QzExMC4wMzUgMTkuMzQgMTE0LjU2NiAyOC40MDIgMTIyLjk0MyAzMS4xODRMMjU3LjIxMyA3NS45MzhDMjYxLjgxNiAxMDAuMzAxIDI4MC4yMzQgMTE5LjU4OCAzMDQuMDEyIDEyNS43NDZWNDgwSDExMi4wMDRDMTAzLjE2IDQ4MCA5Ni4wMDQgNDg3LjE1NiA5Ni4wMDQgNDk2UzEwMy4xNiA1MTIgMTEyLjAwNCA1MTJIMzIwLjAxNEMzMjguODU3IDUxMiAzMzYuMDE0IDUwNC44NDQgMzM2LjAxNCA0OTZWMTI1Ljc0NkMzNDYuMjE5IDEyMy4xMDQgMzU1LjM4NSAxMTguMDY0IDM2Mi45NDUgMTExLjE4TDUwNi45NTcgMTU5LjE4QzUwOC42NDUgMTU5Ljc0MiA1MTAuMzQ4IDE2MC4wMDggNTEyLjAyIDE2MC4wMDhaTTMyMCA5NkMzMDIuMzU2IDk2IDI4OCA4MS42NDUgMjg4IDY0UzMwMi4zNTYgMzIgMzIwIDMyUzM1MiA0Ni4zNTUgMzUyIDY0UzMzNy42NDUgOTYgMzIwIDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ScaleUnbalancedFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M634.397 375.129L525.385 199.133C522.135 194.383 517.133 192.008 512.008 192.008C506.881 192.008 501.881 194.383 498.631 199.133L389.619 375.129C385.744 380.879 383.494 387.752 384.119 394.752C389.494 460.377 444.75 512 512.008 512S634.522 460.377 639.897 394.752C640.522 387.752 638.272 380.879 634.397 375.129ZM512.008 238.256L602.268 384.004H420.998L512.008 238.256ZM512.008 480C470.754 480 435 453.252 421.623 416.002H602.768C589.516 452.877 553.637 480 512.008 480ZM255.881 266.756C256.506 259.756 254.256 252.881 250.381 247.131L141.369 71.135C138.119 66.385 133.119 64.01 127.992 64.01C122.867 64.01 117.865 66.385 114.615 71.135L5.604 247.131C1.729 252.881 -0.521 259.756 0.104 266.756C5.479 332.379 60.734 384.004 127.992 384.004S250.506 332.379 255.881 266.756ZM127.992 110.26L218.25 256.006H36.982L127.992 110.26ZM37.607 288.006H218.752C205.5 324.879 169.621 352.004 127.992 352.004C86.738 352.004 50.984 325.254 37.607 288.006ZM512.02 160.008C518.725 160.008 524.959 155.773 527.193 149.07C529.99 140.68 525.459 131.619 517.082 128.838L380.707 83.381C382.672 77.234 384.016 70.809 384.016 64.01C384.016 28.664 355.359 0.012 320.014 0.012C292.037 0.012 268.508 18.074 259.803 43.084L133.068 0.84C124.615 -1.988 115.613 2.559 112.832 10.949C110.035 19.34 114.566 28.402 122.943 31.184L257.213 75.938C261.816 100.301 280.234 119.588 304.012 125.746V480H112.004C103.16 480 96.004 487.156 96.004 496S103.16 512 112.004 512H320.014C328.857 512 336.014 504.844 336.014 496V125.746C346.219 123.104 355.385 118.064 362.945 111.18L506.957 159.18C508.645 159.742 510.348 160.008 512.02 160.008ZM320 96C302.356 96 288 81.645 288 64S302.356 32 320 32S352 46.355 352 64S337.645 96 320 96Z" />
    </Icon>
);

export default ScaleUnbalancedFlip;