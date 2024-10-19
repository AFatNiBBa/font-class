
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ear-listen` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ear-listen?s=thin ear-listen}
 * @preview ![ear-listen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMzIwLjAwMkMxNDIuMzc1IDMyMC4wMDIgMTI4IDMzNC4zNzcgMTI4IDM1Mi4wMDFDMTI4IDM2OS42MjYgMTQyLjM3NSAzODQuMDAxIDE2MCAzODQuMDAxUzE5MiAzNjkuNjI2IDE5MiAzNTIuMDAxQzE5MiAzMzQuMzc3IDE3Ny42MjUgMzIwLjAwMiAxNjAgMzIwLjAwMlpNMTYwIDM2OC4wMDFDMTUxLjE3OCAzNjguMDAxIDE0NCAzNjAuODI0IDE0NCAzNTIuMDAxQzE0NCAzNDMuMTc5IDE1MS4xNzggMzM2LjAwMiAxNjAgMzM2LjAwMlMxNzYgMzQzLjE3OSAxNzYgMzUyLjAwMUMxNzYgMzYwLjgyNCAxNjguODIyIDM2OC4wMDEgMTYwIDM2OC4wMDFaTTMyIDQ0OC4wMDFDMTQuMzc1IDQ0OC4wMDEgMCA0NjIuMzc1IDAgNDgwQzAgNDk3LjYyNSAxNC4zNzUgNTEyIDMyIDUxMlM2NCA0OTcuNjI1IDY0IDQ4MEM2NCA0NjIuMzc1IDQ5LjYyNSA0NDguMDAxIDMyIDQ0OC4wMDFaTTMyIDQ5NkMyMy4xNzggNDk2IDE2IDQ4OC44MjIgMTYgNDgwQzE2IDQ3MS4xNzggMjMuMTc4IDQ2NCAzMiA0NjRTNDggNDcxLjE3OCA0OCA0ODBDNDggNDg4LjgyMiA0MC44MjIgNDk2IDMyIDQ5NlpNMzc5Ljg1OSAxLjAyOEMzNzYuMDE2IC0xLjE1OSAzNzEuMTQxIDAuMjYyIDM2OSA0LjE2OUMzNjYuODU5IDguMDI4IDM2OC4yNjYgMTIuOTAzIDM3Mi4xNDEgMTUuMDI2QzQ0My4xODYgNTQuMjU2IDQ5MC42NTQgMTI4LjQwMiA0OTYuMDE0IDIwOC41M0M0OTYuMjk1IDIxMi43NjQgNDk5LjgxMSAyMTUuOTk5IDUwMy45ODIgMjE1Ljk5OUM1MDQuMTcgMjE1Ljk5OSA1MDQuMzU3IDIxNS45OTkgNTA0LjUyOSAyMTUuOTgzQzUwOC45MzYgMjE1LjY4NiA1MTIuMjc5IDIxMS44NzQgNTExLjk4MiAyMDcuNDdDNTA2LjI2NCAxMjEuOTQ5IDQ1NS42MzkgNDIuODUyIDM3OS44NTkgMS4wMjhaTTY5LjY1NiAzNzguMzQxQzY2LjUzMSAzNzUuMjE2IDYxLjQ2OSAzNzUuMjE2IDU4LjM0NCAzNzguMzQxUzU1LjIxOSAzODYuNTI4IDU4LjM0NCAzODkuNjUzTDEyMi4zNDQgNDUzLjY1M0MxMjMuOTA2IDQ1NS4yMTUgMTI1Ljk1MyA0NTUuOTk3IDEyOCA0NTUuOTk3UzEzMi4wOTQgNDU1LjIxNSAxMzMuNjU2IDQ1My42NTNDMTM2Ljc4MSA0NTAuNTI4IDEzNi43ODEgNDQ1LjQ2NSAxMzMuNjU2IDQ0Mi4zNEw2OS42NTYgMzc4LjM0MVpNMzYwIDI1NS45OThDMzY0LjQyMiAyNTUuOTk4IDM2OCAyNTIuNDIgMzY4IDI0Ny45OThWMjMxLjk5OUMzNjggMTY1LjgyNyAzMTQuMTcyIDExMiAyNDggMTEyUzEyOCAxNjUuODI3IDEyOCAyMzEuOTk5VjI0Ny45OThDMTI4IDI1Mi40MiAxMzEuNTc4IDI1NS45OTggMTM2IDI1NS45OThTMTQ0IDI1Mi40MiAxNDQgMjQ3Ljk5OFYyMzEuOTk5QzE0NCAxNzQuNjU1IDE5MC42NTYgMTI4IDI0OCAxMjhTMzUyIDE3NC42NTUgMzUyIDIzMS45OTlWMjQ3Ljk5OEMzNTIgMjUyLjQyIDM1NS41NzggMjU1Ljk5OCAzNjAgMjU1Ljk5OFpNMjQ4IDQ4QzE0Ni41NDcgNDggNjQgMTMwLjU0NiA2NCAyMzEuOTk5VjI0Ny45OThDNjQgMjUyLjQyIDY3LjU3OCAyNTUuOTk4IDcyIDI1NS45OThTODAgMjUyLjQyIDgwIDI0Ny45OThWMjMxLjk5OUM4MCAxMzkuMzU5IDE1NS4zNTkgNjQgMjQ4IDY0UzQxNiAxMzkuMzU5IDQxNiAyMzEuOTk5QzQxNiAyODkuNDIgMzkzLjgxMiAzNDMuNTI5IDM1My41MzEgMzg0LjM4OEwzNTEuNTc4IDM4Ni4zNTdMMzUxLjI4MSAzODkuMTIyQzM0NC42MjUgNDUwLjA1OSAyOTMuMzQ0IDQ5NS45OTYgMjMyIDQ5NS45OTZDMjI3LjU3OCA0OTUuOTk2IDIyNCA0OTkuNTc0IDIyNCA1MDMuOTk2QzIyNCA1MDguNDE4IDIyNy41NzggNTExLjk5NiAyMzIgNTExLjk5NkMzMDAuNTc4IDUxMS45OTYgMzU4LjA3OCA0NjEuMzA5IDM2Ni44NTkgMzkzLjYzOEM0MDguODkxIDM1MC4wMTMgNDMyIDI5Mi43MTcgNDMyIDIzMS45OTlDNDMyIDEzMC41NDYgMzQ5LjQ1MyA0OCAyNDggNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EarListen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160 320.002C142.375 320.002 128 334.377 128 352.001C128 369.626 142.375 384.001 160 384.001S192 369.626 192 352.001C192 334.377 177.625 320.002 160 320.002ZM160 368.001C151.178 368.001 144 360.824 144 352.001C144 343.179 151.178 336.002 160 336.002S176 343.179 176 352.001C176 360.824 168.822 368.001 160 368.001ZM32 448.001C14.375 448.001 0 462.375 0 480C0 497.625 14.375 512 32 512S64 497.625 64 480C64 462.375 49.625 448.001 32 448.001ZM32 496C23.178 496 16 488.822 16 480C16 471.178 23.178 464 32 464S48 471.178 48 480C48 488.822 40.822 496 32 496ZM379.859 1.028C376.016 -1.159 371.141 0.262 369 4.169C366.859 8.028 368.266 12.903 372.141 15.026C443.186 54.256 490.654 128.402 496.014 208.53C496.295 212.764 499.811 215.999 503.982 215.999C504.17 215.999 504.357 215.999 504.529 215.983C508.936 215.686 512.279 211.874 511.982 207.47C506.264 121.949 455.639 42.852 379.859 1.028ZM69.656 378.341C66.531 375.216 61.469 375.216 58.344 378.341S55.219 386.528 58.344 389.653L122.344 453.653C123.906 455.215 125.953 455.997 128 455.997S132.094 455.215 133.656 453.653C136.781 450.528 136.781 445.465 133.656 442.34L69.656 378.341ZM360 255.998C364.422 255.998 368 252.42 368 247.998V231.999C368 165.827 314.172 112 248 112S128 165.827 128 231.999V247.998C128 252.42 131.578 255.998 136 255.998S144 252.42 144 247.998V231.999C144 174.655 190.656 128 248 128S352 174.655 352 231.999V247.998C352 252.42 355.578 255.998 360 255.998ZM248 48C146.547 48 64 130.546 64 231.999V247.998C64 252.42 67.578 255.998 72 255.998S80 252.42 80 247.998V231.999C80 139.359 155.359 64 248 64S416 139.359 416 231.999C416 289.42 393.812 343.529 353.531 384.388L351.578 386.357L351.281 389.122C344.625 450.059 293.344 495.996 232 495.996C227.578 495.996 224 499.574 224 503.996C224 508.418 227.578 511.996 232 511.996C300.578 511.996 358.078 461.309 366.859 393.638C408.891 350.013 432 292.717 432 231.999C432 130.546 349.453 48 248 48Z" />
        </Icon>
    </>
}