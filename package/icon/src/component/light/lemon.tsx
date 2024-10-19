
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lemon` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lemon?s=light lemon}
 * @preview ![lemon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjcuODk3IDUyLjEwMkM0MTQuNTk4IDM4LjczNCAzOTguMDk4IDMyIDM4My4yMjcgMzJDMzc1LjU5MiAzMiAzNjguMzg3IDMzLjc3MyAzNjIuMjY0IDM3LjMzNkMzMzYuMzU5IDUyLjQyNyAyOTYuNTE5IDQwLjY3OCAyNDcuNzgzIDQwLjY3MkMxOTkuMzg5IDQwLjY2OCAxNDIuMjQ0IDUyLjI1OCA4MS4yNTIgMTEzLjI1Qy00MS4xNTIgMjM1LjY1NiAzNS40MTggMzQyLjYzMyA1LjMzOCAzOTQuMjY2Qy01LjE2NCA0MTIuMzEyIC0wLjEzMyA0MzkuNzY2IDIwLjEwNCA0NTkuODk1QzMzLjQwMiA0NzMuMjY2IDQ5LjkwMiA0ODAgNjQuNzc0IDQ4MEM3Mi40MDggNDgwIDc5LjYxMyA0NzguMjI3IDg1LjczNiA0NzQuNjY0QzExMS42NTcgNDU5LjU2NCAxNTEuNDkxIDQ3MS4zMjggMjAwLjIxNyA0NzEuMzI4QzI0OC42MTEgNDcxLjMyOCAzMDUuNzU2IDQ1OS43NDIgMzY2Ljc0OCAzOTguNzVDNDg5LjE1MiAyNzYuMzQ0IDQxMi41ODIgMTY5LjM2NyA0NDIuNjYyIDExNy43MzRDNDUzLjE2NCA5OS42ODggNDQ4LjEzMyA3Mi4yMyA0MjcuODk3IDUyLjEwMlpNNDE1LjAxMiAxMDEuNjI3QzM5OS43NzkgMTI3Ljc3NSA0MDIuMzIgMTU4LjAyNyA0MDUuMDE0IDE5MC4wNTVDNDA5LjU2MSAyNDQuMTggNDE0LjcxNyAzMDUuNTI1IDM0NC4xMjEgMzc2LjEyM0MyODguMSA0MzIuMTQ1IDIzNy43ODkgNDM5LjMyOCAyMDAuMjE3IDQzOS4zMjhDMTcyLjA4NSA0MzkuMzI4IDE0Ni4yMDMgNDM0Ljk2NSAxMjIuMjA5IDQzNC45NjVDMTA4LjUxNiA0MzQuOTY1IDg4LjE2OCA0MzYuMjEzIDY5LjY0MyA0NDcuMDA0QzY2LjY0NSA0NDguNzUxIDU0Ljg3NSA0NDkuNDc1IDQyLjY3IDQzNy4yMDdDMzEuNDg2IDQyNi4wODIgMzAuODUyIDQxNC4wNDUgMzIuOTg4IDQxMC4zNzNDNDguMjIzIDM4NC4yMjUgNDUuNjggMzUzLjk3MyA0Mi45ODggMzIxLjk0M0MzOC40NCAyNjcuODIgMzMuMjgzIDIwNi40NzUgMTAzLjg3OSAxMzUuODc3QzE1OS45MDYgNzkuODUgMjEwLjIxMyA3Mi42NjggMjQ3Ljc3OSA3Mi42NzJDMjc1LjkyMyA3Mi42NzYgMzAxLjgzMiA3Ny4wMzUgMzI1Ljc5MSA3Ny4wMzVDMzM5LjQ4NCA3Ny4wMzUgMzU5LjgzMiA3NS43ODUgMzc4LjM1OCA2NC45OTRDMzgxLjM1NyA2My4yNTIgMzkzLjEyOSA2Mi41MjQgNDA1LjMzIDc0Ljc4OUM0MTYuNTE2IDg1LjkxNCA0MTcuMTQ5IDk3Ljk1MyA0MTUuMDEyIDEwMS42MjdaTTIyNy42NzQgMTA0LjYwNUMxNjUuMzI4IDEyMC4zMDEgODguMjY0IDE5Ny4zODMgNzIuNDkyIDI2MC4xMTFDNzAuMzE1IDI2OC42MjUgNzUuNDc1IDI3Ny4zODIgODQuMTQ5IDI3OS41MThDOTEuMjMyIDI4MS41NzQgMTAxLjEyNiAyNzcuNSAxMDMuNTE2IDI2Ny44NjFDMTE2LjQzNiAyMTYuNTA2IDE4NC40OTggMTQ4LjQ1OSAyMzUuOTIyIDEzNS41MDhDMjQ0LjQ0IDEzMy4zOTcgMjQ5LjY5OSAxMjQuNzE5IDI0Ny41MDYgMTE2LjA2NEMyNDYuMTk2IDExMC45IDIzOS4wNjEgMTAxLjA5NyAyMjcuNjc0IDEwNC42MDVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Lemon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M427.897 52.102C414.598 38.734 398.098 32 383.227 32C375.592 32 368.387 33.773 362.264 37.336C336.359 52.427 296.519 40.678 247.783 40.672C199.389 40.668 142.244 52.258 81.252 113.25C-41.152 235.656 35.418 342.633 5.338 394.266C-5.164 412.312 -0.133 439.766 20.104 459.895C33.402 473.266 49.902 480 64.774 480C72.408 480 79.613 478.227 85.736 474.664C111.657 459.564 151.491 471.328 200.217 471.328C248.611 471.328 305.756 459.742 366.748 398.75C489.152 276.344 412.582 169.367 442.662 117.734C453.164 99.688 448.133 72.23 427.897 52.102ZM415.012 101.627C399.779 127.775 402.32 158.027 405.014 190.055C409.561 244.18 414.717 305.525 344.121 376.123C288.1 432.145 237.789 439.328 200.217 439.328C172.085 439.328 146.203 434.965 122.209 434.965C108.516 434.965 88.168 436.213 69.643 447.004C66.645 448.751 54.875 449.475 42.67 437.207C31.486 426.082 30.852 414.045 32.988 410.373C48.223 384.225 45.68 353.973 42.988 321.943C38.44 267.82 33.283 206.475 103.879 135.877C159.906 79.85 210.213 72.668 247.779 72.672C275.923 72.676 301.832 77.035 325.791 77.035C339.484 77.035 359.832 75.785 378.358 64.994C381.357 63.252 393.129 62.524 405.33 74.789C416.516 85.914 417.149 97.953 415.012 101.627ZM227.674 104.605C165.328 120.301 88.264 197.383 72.492 260.111C70.315 268.625 75.475 277.382 84.149 279.518C91.232 281.574 101.126 277.5 103.516 267.861C116.436 216.506 184.498 148.459 235.922 135.508C244.44 133.397 249.699 124.719 247.506 116.064C246.196 110.9 239.061 101.097 227.674 104.605Z" />
        </Icon>
    </>
}