
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `glasses` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glasses?s=thin glasses}
 * @preview ![glasses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAuMzc1IDIxMS43OTdDNTYwLjM3NSAyMTEuNzk3IDU0Mi4zOTUgMTU4LjI3MyA1MzMuNDA2IDEzMi41MzFDNTI3Ljk2OSAxMTYuOTM3IDUyMS45MDYgOTkuNTk4IDUxNS4xODcgODAuMDM5QzUwMi44MTIgNDMuODkxIDQ2My44NzUgMjQuMDQ3IDQyNi4yODEgMzUuMDE2TDQwNS43NSA0MS4wMTZDNDAxLjUgNDIuMjY2IDM5OS4wOTQgNDYuNzAzIDQwMC4zMTMgNTAuOTQ5QzQwMS41NjMgNTUuMTk5IDQwNiA1Ny42MDUgNDEwLjI1IDU2LjM4N0w0MzAuNzgxIDUwLjM4N0M0NTkuOTY5IDQxLjg1OSA0OTAuNDM3IDU3LjE2OCA1MDAuMDYyIDg1LjIyN0w1NDAuMjg5IDIwMi41MTZDNTQ5Ljg5NSAyMzIuNTQzIDU1NS41MzEgMjU1LjUgNTU4LjExNyAyODAuNjg0QzU1My41ODYgMjc2Ljk4IDU0OC41NjIgMjczLjgyNCA1NDIuNzUgMjcxLjg5OEM1MTAuOTczIDI2MS4zNzUgNDc4LjM2MyAyNTYuMDM5IDQ0NS44MzYgMjU2LjAzOUM0MDcuODEzIDI1Ni4wMzkgMzcwLjM0NCAyNjMuNDc3IDMzNC40NzMgMjc4LjE1MkMzMjguODU5IDI4MC40NTMgMzI0LjE2NCAyODQuMDIgMzIwIDI4OC4xMTdWMjg4SDI1NlYyODguMTE3QzI1MS44MzYgMjg0LjAyIDI0Ny4xNDEgMjgwLjQ1MyAyNDEuNTI3IDI3OC4xNTJDMjA1LjY1NiAyNjMuNDc3IDE2OC4xODggMjU2LjAzOSAxMzAuMTY0IDI1Ni4wMzlDOTcuNjM3IDI1Ni4wMzkgNjUuMDI3IDI2MS4zNzUgMzMuMjUgMjcxLjg5OEMyNy40MzggMjczLjgyNCAyMi40MTQgMjc2Ljk4IDE3Ljg4MyAyODAuNjg0QzIwLjQ2OSAyNTUuNSAyNi4xMDUgMjMyLjU0MyAzNS43MTEgMjAyLjUxNkw3NS45MzggODUuMjI3Qzg1LjU2MiA1Ny4xNjggMTE2LjAzMSA0MS44NTkgMTQ1LjIxOSA1MC4zODdMMTY1Ljc1IDU2LjM4N0MxNzAgNTcuNjA1IDE3NC40MzggNTUuMTk5IDE3NS42ODggNTAuOTQ5QzE3Ni45MDYgNDYuNzAzIDE3NC41IDQyLjI2NiAxNzAuMjUgNDEuMDE2TDE0OS43MTkgMzUuMDE2QzExMi4xMjUgMjQuMDQ3IDczLjE4NyA0My44OTEgNjAuODEyIDgwLjAzOUM1NC4wOTQgOTkuNTk4IDQ4LjAzMSAxMTYuOTM4IDQyLjU5NCAxMzIuNTMxQzMzLjYwNSAxNTguMjczIDE1LjYyNSAyMTEuNzk3IDE1LjYyNSAyMTEuNzk3QzUuMjUgMjQxLjk3NyAwIDI3My40NDEgMCAzMDUuMjgxVjM2OS4yMjNDMCA0MzAuMzA1IDUwLjEzNyA0ODAgMTExLjc2MiA0ODBIMTU1LjAwNEMyMTMuMTA5IDQ4MCAyNjIuMDQ3IDQzNC45OCAyNjYuNDE4IDM3Ny41MDhMMjcwLjI3NyAzMjUuOTE0QzI3MC44NTkgMzE4LjExNyAyNjkuMTA1IDMxMC44MTIgMjY2LjM0NCAzMDRIMzA5LjY1NkMzMDYuODk1IDMxMC44MTIgMzA1LjE0MSAzMTguMTE3IDMwNS43MjMgMzI1LjkxNEwzMDkuNTgyIDM3Ny41MDhDMzEzLjk1MyA0MzQuOTggMzYyLjg5MSA0ODAgNDIwLjk5NiA0ODBINDY0LjIzOEM1MjUuODYzIDQ4MCA1NzYgNDMwLjMwNSA1NzYgMzY5LjIyM1YzMDUuMjgxQzU3NiAyNzMuNDQxIDU3MC43NSAyNDEuOTc3IDU2MC4zNzUgMjExLjc5N1pNMjUwLjQ2NSAzNzYuMjk3QzI0Ni43MjMgNDI1LjQ5MiAyMDQuODI4IDQ2NCAxNTUuMDA0IDQ2NEgxMTEuNzYyQzU4Ljk0MSA0NjQgMTYgNDIxLjU3OCAxNiAzNjkuMjIzQzE2IDM2OS4yMjMgMTYuMDU5IDMxOC4xODggMTYuMDYyIDMxNy4yMDdDMTYuMjQyIDMwMy40MTggMjUuMTQ4IDI5MS40MyAzOC4yODEgMjg3LjA4NkM2MS41NjIgMjc5LjM3NSA5My40NDUgMjcyLjAzNSAxMzAuMTY0IDI3Mi4wMzVDMTY2LjMzNiAyNzIuMDM1IDIwMS41ODIgMjc5LjA5OCAyMzUuNDY1IDI5Mi45NjFDMjQ3Ljk2NSAyOTguMDc0IDI1NS4zMjggMzExLjI1OCAyNTQuMzIgMzI0LjcyM0wyNTAuNDY1IDM3Ni4yOTdaTTQ2NC4yMzggNDY0SDQyMC45OTZDMzcxLjE3MiA0NjQgMzI5LjI3NyA0MjUuNDkyIDMyNS41MzUgMzc2LjI5N0wzMjEuNjggMzI0LjcyM0MzMjAuNjcyIDMxMS4yNTggMzI4LjAzNSAyOTguMDc0IDM0MC41MzUgMjkyLjk2MUMzNzQuNDE4IDI3OS4wOTggNDA5LjY2NCAyNzIuMDM1IDQ0NS44MzYgMjcyLjAzNUM0ODIuNTU1IDI3Mi4wMzUgNTE0LjQzNyAyNzkuMzc1IDUzNy43MTkgMjg3LjA4NkM1NTAuODUyIDI5MS40MyA1NTkuNzU4IDMwMy40MTggNTU5LjkzNyAzMTcuMjA3QzU1OS45NDEgMzE4LjE4NyA1NjAgMzY5LjIyMyA1NjAgMzY5LjIyM0M1NjAgNDIxLjU3OCA1MTcuMDU5IDQ2NCA0NjQuMjM4IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Glasses(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560.375 211.797C560.375 211.797 542.395 158.273 533.406 132.531C527.969 116.937 521.906 99.598 515.187 80.039C502.812 43.891 463.875 24.047 426.281 35.016L405.75 41.016C401.5 42.266 399.094 46.703 400.313 50.949C401.563 55.199 406 57.605 410.25 56.387L430.781 50.387C459.969 41.859 490.437 57.168 500.062 85.227L540.289 202.516C549.895 232.543 555.531 255.5 558.117 280.684C553.586 276.98 548.562 273.824 542.75 271.898C510.973 261.375 478.363 256.039 445.836 256.039C407.813 256.039 370.344 263.477 334.473 278.152C328.859 280.453 324.164 284.02 320 288.117V288H256V288.117C251.836 284.02 247.141 280.453 241.527 278.152C205.656 263.477 168.188 256.039 130.164 256.039C97.637 256.039 65.027 261.375 33.25 271.898C27.438 273.824 22.414 276.98 17.883 280.684C20.469 255.5 26.105 232.543 35.711 202.516L75.938 85.227C85.562 57.168 116.031 41.859 145.219 50.387L165.75 56.387C170 57.605 174.438 55.199 175.688 50.949C176.906 46.703 174.5 42.266 170.25 41.016L149.719 35.016C112.125 24.047 73.187 43.891 60.812 80.039C54.094 99.598 48.031 116.938 42.594 132.531C33.605 158.273 15.625 211.797 15.625 211.797C5.25 241.977 0 273.441 0 305.281V369.223C0 430.305 50.137 480 111.762 480H155.004C213.109 480 262.047 434.98 266.418 377.508L270.277 325.914C270.859 318.117 269.105 310.812 266.344 304H309.656C306.895 310.812 305.141 318.117 305.723 325.914L309.582 377.508C313.953 434.98 362.891 480 420.996 480H464.238C525.863 480 576 430.305 576 369.223V305.281C576 273.441 570.75 241.977 560.375 211.797ZM250.465 376.297C246.723 425.492 204.828 464 155.004 464H111.762C58.941 464 16 421.578 16 369.223C16 369.223 16.059 318.188 16.062 317.207C16.242 303.418 25.148 291.43 38.281 287.086C61.562 279.375 93.445 272.035 130.164 272.035C166.336 272.035 201.582 279.098 235.465 292.961C247.965 298.074 255.328 311.258 254.32 324.723L250.465 376.297ZM464.238 464H420.996C371.172 464 329.277 425.492 325.535 376.297L321.68 324.723C320.672 311.258 328.035 298.074 340.535 292.961C374.418 279.098 409.664 272.035 445.836 272.035C482.555 272.035 514.437 279.375 537.719 287.086C550.852 291.43 559.758 303.418 559.937 317.207C559.941 318.187 560 369.223 560 369.223C560 421.578 517.059 464 464.238 464Z" />
        </Icon>
    </>
}