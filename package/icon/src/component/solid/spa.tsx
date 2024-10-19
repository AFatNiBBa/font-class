
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spa` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spa?s=solid spa}
 * @preview ![spa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguMjUgMTkxLjk5OUM1MzkuMjUgMTkyLjEyNCA0MzMuMjUgMTk4LjEyNCAzNTQuMzc1IDI3NC45OTlDMzIxLjI1IDMwNC42MjQgMzAxIDMzOC4yNDkgMjg4IDM2OS44NzRDMjc1IDMzOC4yNDkgMjU0Ljc1IDMwNC42MjQgMjIxLjYyNSAyNzQuOTk5QzE0Mi43NSAxOTguMTI0IDM2Ljc1IDE5Mi4xMjQgNy43NSAxOTEuOTk5QzMuMzc1IDE5MS45OTkgMCAxOTUuMzc0IDAgMTk5Ljg3NEMwLjI1IDIyNy43NDkgNy4xMjUgMzI1Ljk5OSA4OC43NSAzOTkuMTI0QzE3Mi43NSA0ODAuOTk5IDI1NiA0NzkuOTk5IDI4OCA0NzkuOTk5UzQwMy4yNSA0ODAuOTk5IDQ4Ny4yNSAzOTkuMTI0QzU2OC44NzUgMzI1Ljk5OSA1NzUuNzUgMjI3Ljc0OSA1NzYgMTk5Ljg3NEM1NzYgMTk1LjM3NCA1NzIuNjI1IDE5MS45OTkgNTY4LjI1IDE5MS45OTlaTTI4OCAzMDIuNjI0QzMwMC43NSAyODMuNzQ5IDMxNS42MjUgMjY2Ljg3NCAzMzIuMTI1IDI1Mi4xMjRDMzUxLjEyNSAyMzMuNDk5IDM3MS42MjUgMjE4Ljc0OSAzOTIuMzc1IDIwNi44NzRDMzc1Ljg3NSAxMzYuMzc0IDM0MC42MjUgNzMuODc0IDI5NS42MjUgMzQuNjI0QzI5MS41IDMxLjEyNCAyODQuNjI1IDMxLjEyNCAyODAuNSAzNC42MjRDMjM1LjUgNzMuODc0IDIwMC4yNSAxMzYuMjQ5IDE4My43NSAyMDYuNzQ5QzIwNC4xMjUgMjE4LjQ5OSAyMjQuMjUgMjMyLjg3NCAyNDMgMjUxLjEyNEMyNjAgMjY2LjM3NCAyNzUuMTI1IDI4My43NDkgMjg4IDMwMi42MjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Spa(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568.25 191.999C539.25 192.124 433.25 198.124 354.375 274.999C321.25 304.624 301 338.249 288 369.874C275 338.249 254.75 304.624 221.625 274.999C142.75 198.124 36.75 192.124 7.75 191.999C3.375 191.999 0 195.374 0 199.874C0.25 227.749 7.125 325.999 88.75 399.124C172.75 480.999 256 479.999 288 479.999S403.25 480.999 487.25 399.124C568.875 325.999 575.75 227.749 576 199.874C576 195.374 572.625 191.999 568.25 191.999ZM288 302.624C300.75 283.749 315.625 266.874 332.125 252.124C351.125 233.499 371.625 218.749 392.375 206.874C375.875 136.374 340.625 73.874 295.625 34.624C291.5 31.124 284.625 31.124 280.5 34.624C235.5 73.874 200.25 136.249 183.75 206.749C204.125 218.499 224.25 232.874 243 251.124C260 266.374 275.125 283.749 288 302.624Z" />
        </Icon>
    </>
}