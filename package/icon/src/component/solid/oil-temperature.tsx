
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `oil-temperature` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/oil-temperature?s=solid oil-temperature}
 * @preview ![oil-temperature](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTAuMzM2IDM4MC45NjFDMzM2LjEyMyAzNzMuOTM2IDM1Ny4zMTQgMzUzLjE2IDM2NC42NTQgMzI3LjQ2MUMzNzYuNzI3IDI4NS4xODQgMzU0LjgyIDI0Ni4wMDQgMzIwIDIzMC43NVYxNjBIMzY4QzM3Ni44MzggMTYwIDM4NCAxNTIuODM2IDM4NCAxNDRWMTEyQzM4NCAxMDMuMTY0IDM3Ni44MzggOTYgMzY4IDk2SDMyMFY2NEgzNjhDMzc2LjgzOCA2NCAzODQgNTYuODM2IDM4NCA0OFYxNkMzODQgNy4xNjQgMzc2LjgzOCAwIDM2OCAwSDI4OEMyNzAuMzI4IDAgMjU2IDE0LjMyNiAyNTYgMzJWMjMwLjc1QzIyNy43NSAyNDMuMTI1IDIwOCAyNzEuMjUgMjA4IDMwNEMyMDggMzU1LjM4NyAyNTYuNjU2IDM5NS41ODYgMzEwLjMzNiAzODAuOTYxWk0xNi43NTQgMzY3LjlDNDUuNTEgMzY1LjQgNzIuNzY2IDM1Ni41MjEgOTYuMTQ2IDM0Mi4wMThDMTI1LjI5MyAzNTkuODc5IDE2MC44MTEgMzY4LjIxOSAxOTUuOTM2IDM2Ny41OTZDMTgzLjQyMiAzNDkuNTE4IDE3NiAzMjcuNjUyIDE3NiAzMDRDMTc2IDMwMy40NDcgMTc2LjE1NCAzMDIuOTM5IDE3Ni4xNjIgMzAyLjM4OUMxNTQuNjMxIDI5OS44NDggMTMzLjk4MiAyOTIuNDY5IDExOC40IDI3OS42MjdDMTA0Ljg5OCAyNjguMzc3IDg1LjE0NSAyNzAuNzUyIDcxLjI2NiAyODEuNjI3QzU1Ljc2MiAyOTMuNzU2IDM1LjI1OCAzMDEuNzYgMTMuNjI5IDMwNC4wMUM1Ljc1MiAzMDQuNzYgMCAzMTEuNzYgMCAzMTkuNzY0VjM1MS44OTZDMCAzNjEuMDI1IDcuNjI3IDM2OC43NzUgMTYuNzU0IDM2Ny45Wk01NjIuMjQ2IDQ0Ny45MTZDNTQwLjc0IDQ0NS41NDEgNTIwLjExMSA0MzcuNDE2IDUwNC4zNTcgNDI1LjA0MUM0OTAuMjMgNDEzLjkwOCA0NzAuMSA0MTMuNzgzIDQ1Ni4wOTggNDI1LjA0MUM0MTguMjE1IDQ1NS40MiAzNDguODI0IDQ1NS40MiAzMTAuMzE2IDQyMy41MzdDMjk2LjgxNCA0MTIuMjgzIDI3Ny4zMTEgNDE0LjQwOCAyNjMuNjgyIDQyNS4yOTFDMjI1LjY3NCA0NTUuNDIgMTU2Ljc4MyA0NTUuMjk1IDExOC40IDQyMy42NjJDMTA0Ljg5OCA0MTIuNDA4IDg1LjE0NSA0MTQuNzgzIDcxLjI2NiA0MjUuNjY2QzU1Ljc2MiA0MzcuNzkxIDM1LjI1OCA0NDUuNzkxIDEzLjYyOSA0NDguMDQxQzUuNzUyIDQ0OC43OTEgMCA0NTUuNzk1IDAgNDYzLjc5OVY0OTUuOTMyQzAgNTA1LjA1NyA3LjYyNyA1MTIuODA3IDE2Ljc1NCA1MTEuOTMyQzQ1LjUxIDUwOS40MzIgNzIuNzY2IDUwMC41NTcgOTYuMTQ2IDQ4Ni4wNTNDMTUyLjY1OCA1MjAuNjg2IDIzMy4xNzYgNTIwLjE4NiAyODguMTg4IDQ4Ni4wNTNDMzQ0LjY5OSA1MjAuNjg2IDQyNS4yMTcgNTIwLjE4NiA0ODAuMjI5IDQ4Ni4wNTNDNTAzLjQ4MiA1MDAuMzA3IDUzMS4xMTMgNTA5LjMwNyA1NTkuMzY5IDUxMS44MDdDNTY4LjM3MSA1MTIuNjgyIDU3NS45OTggNTA0LjkzMiA1NzUuOTk4IDQ5NS44MDdWNDY0LjI5OUM1NzYuMTIzIDQ1Ni4yOTUgNTcwLjM3MyA0NDguNzkxIDU2Mi4yNDYgNDQ3LjkxNlpNNTYyLjI0NiAzMDMuODg1QzU0MC43NCAzMDEuNTEgNTIwLjExMSAyOTMuMzgxIDUwNC4zNTcgMjgxLjAwMkM0OTAuMjMgMjY5Ljg3NyA0NzAuMSAyNjkuNzUyIDQ1Ni4wOTggMjgxLjAwMkM0NDEuMDM1IDI5My4wODIgNDIwLjk1NSAzMDAuMTQ1IDM5OS44NTIgMzAyLjUyM0MzOTkuODU3IDMwMy4wMjcgNDAwIDMwMy40OTQgNDAwIDMwNEM0MDAgMzI3LjYxNSAzOTIuNjA5IDM0OS40NTcgMzgwLjEyOSAzNjcuNTJDNDE1Ljc1NCAzNjguMjczIDQ1MS40NzEgMzU5Ljg2MSA0ODAuMjI5IDM0Mi4wMThDNTAzLjQ4MiAzNTYuMjcxIDUzMS4xMTMgMzY1LjI3NSA1NTkuMzY5IDM2Ny43NzVDNTY4LjM3MSAzNjguNjUgNTc1Ljk5OCAzNjAuOSA1NzUuOTk4IDM1MS43NzFWMzIwLjI2NEM1NzYuMTIzIDMxMi4yNiA1NzAuMzczIDMwNC43NiA1NjIuMjQ2IDMwMy44ODVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function OilTemperature(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M310.336 380.961C336.123 373.936 357.314 353.16 364.654 327.461C376.727 285.184 354.82 246.004 320 230.75V160H368C376.838 160 384 152.836 384 144V112C384 103.164 376.838 96 368 96H320V64H368C376.838 64 384 56.836 384 48V16C384 7.164 376.838 0 368 0H288C270.328 0 256 14.326 256 32V230.75C227.75 243.125 208 271.25 208 304C208 355.387 256.656 395.586 310.336 380.961ZM16.754 367.9C45.51 365.4 72.766 356.521 96.146 342.018C125.293 359.879 160.811 368.219 195.936 367.596C183.422 349.518 176 327.652 176 304C176 303.447 176.154 302.939 176.162 302.389C154.631 299.848 133.982 292.469 118.4 279.627C104.898 268.377 85.145 270.752 71.266 281.627C55.762 293.756 35.258 301.76 13.629 304.01C5.752 304.76 0 311.76 0 319.764V351.896C0 361.025 7.627 368.775 16.754 367.9ZM562.246 447.916C540.74 445.541 520.111 437.416 504.357 425.041C490.23 413.908 470.1 413.783 456.098 425.041C418.215 455.42 348.824 455.42 310.316 423.537C296.814 412.283 277.311 414.408 263.682 425.291C225.674 455.42 156.783 455.295 118.4 423.662C104.898 412.408 85.145 414.783 71.266 425.666C55.762 437.791 35.258 445.791 13.629 448.041C5.752 448.791 0 455.795 0 463.799V495.932C0 505.057 7.627 512.807 16.754 511.932C45.51 509.432 72.766 500.557 96.146 486.053C152.658 520.686 233.176 520.186 288.188 486.053C344.699 520.686 425.217 520.186 480.229 486.053C503.482 500.307 531.113 509.307 559.369 511.807C568.371 512.682 575.998 504.932 575.998 495.807V464.299C576.123 456.295 570.373 448.791 562.246 447.916ZM562.246 303.885C540.74 301.51 520.111 293.381 504.357 281.002C490.23 269.877 470.1 269.752 456.098 281.002C441.035 293.082 420.955 300.145 399.852 302.523C399.857 303.027 400 303.494 400 304C400 327.615 392.609 349.457 380.129 367.52C415.754 368.273 451.471 359.861 480.229 342.018C503.482 356.271 531.113 365.275 559.369 367.775C568.371 368.65 575.998 360.9 575.998 351.771V320.264C576.123 312.26 570.373 304.76 562.246 303.885Z" />
        </Icon>
    </>
}