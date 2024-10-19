
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `alarm-exclamation` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-exclamation?s=thin alarm-exclamation}
 * @preview ![alarm-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxMDFDMTYgNTQuMTI1IDU0LjEyNSAxNiAxMDEgMTZDMTE5LjA5NCAxNiAxNDUuNSAyNi40MDYgMTU4LjY4OCAzOC43MzRDMTYwLjI0MyA0MC4xNyAxNjIuMjE0IDQwLjg4MyAxNjQuMTc1IDQwLjg4M0MxNjguNjQgNDAuODgzIDE3Mi4xNjEgMzcuMjU4IDE3Mi4xNjEgMzIuODk3QzE3Mi4xNjEgMTkuNDE4IDEyNi4wMTQgMCAxMDEgMEM0NS4zMTIgMCAwIDQ1LjMxMiAwIDEwMS4wMzFDMC4wNjggMTE4Ljg3IDExLjI1OSAxNTguNjUyIDIyLjgyMiAxNTguNjUyQzI3LjM5OCAxNTguNjUyIDMwLjg0NCAxNTQuOTYgMzAuODQ0IDE1MC42NUMzMC44NDQgMTQ1LjU4NyAxNi4xMjUgMTI3LjY2NiAxNiAxMDFaTTI1NiA2NEMxMzIuMjg5IDY0IDMyIDE2NC4yODcgMzIgMjg4QzMyIDM0Ni45NzUgNTQuOTY5IDQwMC40NjMgOTIuMjIzIDQ0MC40NjVMMzQuMzQ0IDQ5OC4zNDRDMzIuNzgxIDQ5OS45MDYgMzIgNTAxLjk1MyAzMiA1MDRDMzIgNTA4LjU2MSAzNS43MjggNTEyLjAwMSA0MCA1MTIuMDAxQzQyLjA0NiA1MTIuMDAxIDQ0LjA5MyA1MTEuMjIgNDUuNjU2IDUwOS42NTZMMTAzLjUzNSA0NTEuNzc3QzE0My41MzkgNDg5LjAzMyAxOTcuMDIzIDUxMiAyNTYgNTEyUzM2OC40NjEgNDg5LjAzMyA0MDguNDY1IDQ1MS43NzdMNDY2LjM0NCA1MDkuNjU2QzQ2Ny45MDcgNTExLjIyIDQ2OS45NTQgNTEyLjAwMSA0NzIgNTEyLjAwMUM0NzYuMjc2IDUxMi4wMDEgNDgwIDUwOC41NTEgNDgwIDUwNEM0ODAgNTAxLjk1MyA0NzkuMjE5IDQ5OS45MDYgNDc3LjY1NiA0OTguMzQ0TDQxOS43NzcgNDQwLjQ2NUM0NTcuMDMxIDQwMC40NjMgNDgwIDM0Ni45NzUgNDgwIDI4OEM0ODAgMTY0LjI4NyAzNzkuNzExIDY0IDI1NiA2NFpNMjU2IDQ5NkMxNDEuMzA5IDQ5NiA0OCA0MDIuNjkxIDQ4IDI4OFMxNDEuMzA5IDgwIDI1NiA4MFM0NjQgMTczLjMwOSA0NjQgMjg4UzM3MC42OTEgNDk2IDI1NiA0OTZaTTQxMSAwQzM4My4xMzMgMCAzMzkuODQyIDIxLjA1MSAzMzkuODQyIDMyLjg2NUMzMzkuODQyIDM3LjMzIDM0My41MDYgNDAuODY2IDM0Ny44OCA0MC44NjZDMzQ5LjgxNyA0MC44NjYgMzUxLjc1NiA0MC4xNjIgMzUzLjI4MSAzOC43MTlDMzY2LjUzMSAyNi40MDYgMzkyLjk2OSAxNiA0MTEgMTZDNDU3Ljg3NSAxNiA0OTYgNTQuMTI1IDQ5NiAxMDAuOTY5QzQ5NS44NzYgMTI3LjUwMyA0ODEuMTgxIDE0NS42NTQgNDgxLjE4MSAxNTAuNjE3QzQ4MS4xODEgMTU1LjE2NiA0ODQuOTQxIDE1OC42NSA0ODkuMTcgMTU4LjY1QzUwMC44NTkgMTU4LjY1IDUxMS45MzMgMTE4LjY1OSA1MTIgMTAxQzUxMiA0NS4zMTIgNDY2LjY4OCAwIDQxMSAwWk0yNTYgMzY4QzI0Ny4xNzggMzY4IDI0MCAzNzUuMTc4IDI0MCAzODRTMjQ3LjE3OCA0MDAgMjU2IDQwMFMyNzIgMzkyLjgyMiAyNzIgMzg0UzI2NC44MjIgMzY4IDI1NiAzNjhaTTI1NS45MzggMzIwQzI2MC4zNDQgMzIwIDI2My45MzggMzE2LjQwNiAyNjMuOTM4IDMxMlYxNjhDMjYzLjkzOCAxNjMuNTk0IDI2MC4zNDQgMTYwIDI1NS45MzggMTYwUzI0Ny45MzggMTYzLjU5NCAyNDcuOTM4IDE2OFYzMTJDMjQ3LjkzOCAzMTYuNDA2IDI1MS41MzEgMzIwIDI1NS45MzggMzIwWiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function AlarmExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M16 101C16 54.125 54.125 16 101 16C119.094 16 145.5 26.406 158.688 38.734C160.243 40.17 162.214 40.883 164.175 40.883C168.64 40.883 172.161 37.258 172.161 32.897C172.161 19.418 126.014 0 101 0C45.312 0 0 45.312 0 101.031C0.068 118.87 11.259 158.652 22.822 158.652C27.398 158.652 30.844 154.96 30.844 150.65C30.844 145.587 16.125 127.666 16 101ZM256 64C132.289 64 32 164.287 32 288C32 346.975 54.969 400.463 92.223 440.465L34.344 498.344C32.781 499.906 32 501.953 32 504C32 508.561 35.728 512.001 40 512.001C42.046 512.001 44.093 511.22 45.656 509.656L103.535 451.777C143.539 489.033 197.023 512 256 512S368.461 489.033 408.465 451.777L466.344 509.656C467.907 511.22 469.954 512.001 472 512.001C476.276 512.001 480 508.551 480 504C480 501.953 479.219 499.906 477.656 498.344L419.777 440.465C457.031 400.463 480 346.975 480 288C480 164.287 379.711 64 256 64ZM256 496C141.309 496 48 402.691 48 288S141.309 80 256 80S464 173.309 464 288S370.691 496 256 496ZM411 0C383.133 0 339.842 21.051 339.842 32.865C339.842 37.33 343.506 40.866 347.88 40.866C349.817 40.866 351.756 40.162 353.281 38.719C366.531 26.406 392.969 16 411 16C457.875 16 496 54.125 496 100.969C495.876 127.503 481.181 145.654 481.181 150.617C481.181 155.166 484.941 158.65 489.17 158.65C500.859 158.65 511.933 118.659 512 101C512 45.312 466.688 0 411 0ZM256 368C247.178 368 240 375.178 240 384S247.178 400 256 400S272 392.822 272 384S264.822 368 256 368ZM255.938 320C260.344 320 263.938 316.406 263.938 312V168C263.938 163.594 260.344 160 255.938 160S247.938 163.594 247.938 168V312C247.938 316.406 251.531 320 255.938 320Z " />
        </Icon>
    </>
}