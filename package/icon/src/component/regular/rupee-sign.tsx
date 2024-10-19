
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rupee-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rupee-sign?s=regular rupee-sign}
 * @preview ![rupee-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjguMDQzIDMxMy4zODlMMzU5Ljc2NiAzMTAuMzg5QzMyNC43NDYgMjk3LjUxNCAzMTcuNDA2IDI4OS4yOTcgMzIwLjU5MiAyNjYuMzYxQzMyMS44MTEgMjU3LjM5MyAzMjUuMzcxIDI1MC45MjQgMzMxLjQ2MyAyNDYuNTgyQzM0MC40NTkgMjQwLjExMyAzNTUuMDQ5IDIzOC4zMzIgMzcxLjY5OSAyNDEuNjEzQzM3OC40NzkgMjQyLjkyNiAzODcuMjI1IDI0NS45NTcgMzk4LjQzOSAyNTAuNzk5QzQxMC41MjkgMjU2LjA0OSA0MjQuNzExIDI1MC40ODYgNDI5Ljk5IDIzOC4zMDFDNDM1LjIzOCAyMjYuMTQ1IDQyOS42NzggMjEyLjAyMSA0MTcuNDk0IDIwNi43NEM0MDIuOTA2IDIwMC40MyAzOTEuMjg1IDE5Ni41MjMgMzgwLjg4MyAxOTQuNDkyQzM1MS4wMTggMTg4LjU4NiAzMjMuNDk2IDE5My4yNzMgMzAzLjU5OCAyMDcuNTIxQzI4Ni42NjYgMjE5LjU4NCAyNzYuMTA3IDIzNy42NzYgMjczLjA0NyAyNTkuNzk5QzI2My44NjEgMzI2LjI5MyAzMTcuNDY5IDM0NS45NzkgMzQzLjIwOSAzNTUuNDQ3TDM1MS44OTMgMzU4LjU3MkMzOTMuMDA0IDM3My4yNTggNDAyLjg3NSAzODAuMzUyIDM5OS4zNzcgNDA1LjY2MkMzOTguMTU4IDQxNC42MzEgMzk0LjU5OCA0MjEuMDk4IDM4OC41MDYgNDI1LjQ0MUMzNzkuNTM5IDQzMS44NDggMzY0Ljk1MSA0MzMuNzIzIDM0OC4xMTMgNDMwLjM3OUMzMzcuNTg2IDQyOC40MSAzMjQuMTUyIDQyMi4zNDggMzEyLjI4MyA0MTcuMDA0TDMwNS43MjMgNDE0LjA2OEMyOTMuNjY0IDQwOC42OTMgMjc5LjQ0OSA0MTQuMTYyIDI3NC4wNzYgNDI2LjI4NUMyNjguNzAzIDQzOC40MSAyNzQuMTcgNDUyLjU5NiAyODYuMjkxIDQ1Ny45MzlMMjkyLjYwMiA0NjAuNzgzQzMwNi44NzcgNDY3LjIxOSAzMjMuMDkyIDQ3NC41IDMzOS4wODYgNDc3LjUzMUMzNDcuNTIgNDc5LjE4OCAzNTUuNzk5IDQ4MCAzNjMuNzMyIDQ4MEMzODMuOTE0IDQ4MCA0MDIuMDk0IDQ3NC43MTkgNDE2LjM3MSA0NjQuNUM0MzMuMzAzIDQ1Mi40MzkgNDQzLjg2MSA0MzQuMzQ4IDQ0Ni45MjIgNDEyLjIyNUM0NTYuMjMgMzQ0LjkxNiA0MDMuMTU2IDMyNS45MTggMzY4LjA0MyAzMTMuMzg5Wk0yNTUuOTczIDE2OEMyNTUuOTczIDkzIDE5NC45OCAzMiAxMTkuOTg4IDMySDIzLjk5OEMxMC43NDggMzIgMCA0Mi43NSAwIDU2VjQ1NkMwIDQ2OS4yNSAxMC43NDggNDgwIDIzLjk5OCA0ODBDMzcuMjQ2IDQ4MCA0Ny45OTQgNDY5LjI1IDQ3Ljk5NCA0NTZWMzA0SDExOS45ODhDMTIzLjg1NSAzMDQgMTI3LjQ5NiAzMDMuMTc2IDEzMS4yODUgMzAyLjg1N0wxNzYuOTE4IDQ2Mi41OTRDMTc5LjkxOCA0NzMuMTI1IDE4OS41MTIgNDgwIDE5OS45NzkgNDgwQzIwMi4xMzUgNDgwIDIwNC4zNTQgNDc5LjcxOSAyMDYuNTcyIDQ3OS4wNjJDMjE5LjMyIDQ3NS40MzggMjI2LjY5NSA0NjIuMTU2IDIyMy4wMzkgNDQ5LjQwNkwxNzcuNjkxIDI5MC42NzhDMjIzLjc5MSAyNjguODg5IDI1NS45NzMgMjIyLjI5MyAyNTUuOTczIDE2OFpNMTE5Ljk4OCAyNTZINDcuOTk0VjgwSDExOS45ODhDMTY4LjUxNCA4MCAyMDcuOTc5IDExOS40NjkgMjA3Ljk3OSAxNjhTMTY4LjUxNCAyNTYgMTE5Ljk4OCAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function RupeeSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368.043 313.389L359.766 310.389C324.746 297.514 317.406 289.297 320.592 266.361C321.811 257.393 325.371 250.924 331.463 246.582C340.459 240.113 355.049 238.332 371.699 241.613C378.479 242.926 387.225 245.957 398.439 250.799C410.529 256.049 424.711 250.486 429.99 238.301C435.238 226.145 429.678 212.021 417.494 206.74C402.906 200.43 391.285 196.523 380.883 194.492C351.018 188.586 323.496 193.273 303.598 207.521C286.666 219.584 276.107 237.676 273.047 259.799C263.861 326.293 317.469 345.979 343.209 355.447L351.893 358.572C393.004 373.258 402.875 380.352 399.377 405.662C398.158 414.631 394.598 421.098 388.506 425.441C379.539 431.848 364.951 433.723 348.113 430.379C337.586 428.41 324.152 422.348 312.283 417.004L305.723 414.068C293.664 408.693 279.449 414.162 274.076 426.285C268.703 438.41 274.17 452.596 286.291 457.939L292.602 460.783C306.877 467.219 323.092 474.5 339.086 477.531C347.52 479.188 355.799 480 363.732 480C383.914 480 402.094 474.719 416.371 464.5C433.303 452.439 443.861 434.348 446.922 412.225C456.23 344.916 403.156 325.918 368.043 313.389ZM255.973 168C255.973 93 194.98 32 119.988 32H23.998C10.748 32 0 42.75 0 56V456C0 469.25 10.748 480 23.998 480C37.246 480 47.994 469.25 47.994 456V304H119.988C123.855 304 127.496 303.176 131.285 302.857L176.918 462.594C179.918 473.125 189.512 480 199.979 480C202.135 480 204.354 479.719 206.572 479.062C219.32 475.438 226.695 462.156 223.039 449.406L177.691 290.678C223.791 268.889 255.973 222.293 255.973 168ZM119.988 256H47.994V80H119.988C168.514 80 207.979 119.469 207.979 168S168.514 256 119.988 256Z" />
        </Icon>
    </>
}