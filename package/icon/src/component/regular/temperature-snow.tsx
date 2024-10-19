
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-snow` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-snow?s=regular temperature-snow}
 * @preview ![temperature-snow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjguODM2IDMwNC45NDVDMjczLjkzMyAyOTIuMDQ1IDI4MC4xNDYgMjc5LjUxIDI4OC4zNjEgMjY3Ljg0NFYyNjAuODQyTDIyMy40OTQgMjIzLjk5OEwyODguMzYxIDE4Ny4xNTZWMTMxLjk2M0wxOTkuNTAyIDE4Mi40MzJWMTI0LjI4OUwyMjkuNjQyIDk0LjE1NkMyMzcuNDU1IDg2LjM0NCAyMzcuNDU1IDczLjY1NiAyMjkuNjQyIDY1Ljg0NFMyMDkuMTczIDU4LjAzMSAyMDEuMzYxIDY1Ljg0NEwxOTkuNTAyIDY3LjcwNVY1NkMxOTkuNTAyIDQyLjc1IDE4OC43NTIgMzIgMTc1LjUwMiAzMlMxNTEuNTAyIDQyLjc1IDE1MS41MDIgNTZWNjcuNzA1TDE0OS42NDIgNjUuODQ0QzE0MS44MyA1OC4wMzEgMTI5LjE3MyA1OC4wMzEgMTIxLjM2MSA2NS44NDRTMTEzLjU0OCA4Ni4zNDQgMTIxLjM2MSA5NC4xNTZMMTUxLjUwMiAxMjQuMjg5VjE4Mi40MzZMMTAxLjE0OCAxNTMuMzY1TDkwLjExMSAxMTIuMTU2Qzg3LjI1MiAxMDEuNDY5IDc2LjMzIDk1LjE4OCA2NS42MjcgOTguMDMxQzU0Ljk1NSAxMDAuODc1IDQ4LjYyNyAxMTEuODQ0IDUxLjQ4NiAxMjIuNTMxTDUyLjE3MiAxMjUuMDlMNDIuMDAyIDExOS4yMTlDMzAuNTY0IDExMi41OTQgMTUuODMgMTE2LjUzMSA5LjIyIDEyOEMyLjU5NSAxMzkuNDY5IDYuNTE3IDE1NC4xNTYgMTguMDAyIDE2MC43ODFMMjguMTc3IDE2Ni42NTZMMjUuNjExIDE2Ny4zNDRDMTQuOTU1IDE3MC4xODggOC42MjcgMTgxLjE1NiAxMS40ODYgMTkxLjg0NEMxMy44NzcgMjAwLjc4MSAyMS45NTUgMjA2LjY1NiAzMC43ODMgMjA2LjY1NkMzMi41MDIgMjA2LjY1NiAzNC4yNTIgMjA2LjQzOCAzNS45ODYgMjA1Ljk2OUw3Ny4xNCAxOTQuOTI0TDEyNy41MDQgMjIzLjk5OEw3OC44NzMgMjUyLjA3NkwzNy43MiAyNDEuMDMxQzI3LjE1OCAyMzguMTU2IDE2LjA4IDI0NC41IDEzLjIyIDI1NS4xNTZDMTAuMzYxIDI2NS44NDQgMTYuNjg5IDI3Ni44MTIgMjcuMzQ1IDI3OS42NTZMMjkuOTEyIDI4MC4zNDRMMTkuNzM2IDI4Ni4yMTlDOC4yNTIgMjkyLjg0NCA0LjMzIDMwNy41MzEgMTAuOTU1IDMxOUMxNS4zOTIgMzI2LjY4OCAyMy40NyAzMzEgMzEuNzUyIDMzMUMzNS44MyAzMzEgMzkuOTU1IDMyOS45NjkgNDMuNzM2IDMyNy43ODFMNTMuOTA2IDMyMS45MUw1My4yMiAzMjQuNDY5QzUwLjM2MSAzMzUuMTU2IDU2LjY4OSAzNDYuMTI1IDY3LjM2MSAzNDguOTY5QzY5LjA5NSAzNDkuNDM3IDcwLjgzIDM0OS42NTYgNzIuNTQ4IDM0OS42NTZDODEuMzc3IDM0OS42NTYgODkuNDU1IDM0My43ODEgOTEuODQ1IDMzNC44NDRMMTAyLjg4NCAyOTMuNjMzTDE1MS41MDIgMjY1LjU2MlYzMTUuNzExTDEyMS4zNjEgMzQ1Ljg0NEMxMTMuNTQ4IDM1My42NTYgMTEzLjU0OCAzNjYuMzQ0IDEyMS4zNjEgMzc0LjE1NlMxNDEuODMgMzgxLjk2OSAxNDkuNjQyIDM3NC4xNTZMMTUxLjUwMiAzNzIuMjk1VjM5MkMxNTEuNTAyIDQwNS4yNSAxNjIuMjUyIDQxNiAxNzUuNTAyIDQxNlMxOTkuNTAyIDQwNS4yNSAxOTkuNTAyIDM5MlYzNzIuMjk1TDIwMS4zNjEgMzc0LjE1NkMyMDUuMjY3IDM3OC4wNjIgMjEwLjM3NyAzODAgMjE1LjUwMiAzODBTMjI1LjczNiAzNzguMDYyIDIyOS42NDIgMzc0LjE1NkMyMzcuNDU1IDM2Ni4zNDQgMjM3LjQ1NSAzNTMuNjU2IDIyOS42NDIgMzQ1Ljg0NEwxOTkuNTAyIDMxNS43MTFWMjY1LjU2NEwyNjguODM2IDMwNC45NDVaTTU0NC4zNjEgMjc4LjVWMTEyQzU0NC4zNjEgNTAuMTI1IDQ5NC4yMzYgMCA0MzIuMzYxIDBTMzIwLjM2MSA1MC4xMjUgMzIwLjM2MSAxMTJWMjc4LjVDMzAwLjYxMSAzMDMuMTI1IDI4OC4zNjEgMzM0IDI4OC4zNjEgMzY4QzI4OC4zNjEgNDQ3LjUgMzUyLjg2MSA1MTIgNDMyLjM2MSA1MTJTNTc2LjM2MSA0NDcuNSA1NzYuMzYxIDM2OEM1NzYuMzYxIDMzNCA1NjQuMTExIDMwMy4xMjUgNTQ0LjM2MSAyNzguNVpNNDMyLjM2MSA0NjRDMzc5LjQ4NiA0NjQgMzM2LjM2MSA0MjAuODc1IDMzNi4zNjEgMzY4QzMzNi4zNjEgMzQxIDM0OC4xMTEgMzIwLjc1IDM1Ny44NjEgMzA4LjVMMzY4LjM2MSAyOTUuMzc1VjExMkMzNjguMzYxIDc2Ljc1IDM5Ny4xMTEgNDggNDMyLjM2MSA0OFM0OTYuMzYxIDc2Ljc1IDQ5Ni4zNjEgMTEyVjI5NS4yNUw1MDYuODYxIDMwOC4zNzVDNTE2LjYxMSAzMjAuNzUgNTI4LjM2MSAzNDEgNTI4LjM2MSAzNjhDNTI4LjM2MSA0MjAuODc1IDQ4NS4yMzYgNDY0IDQzMi4zNjEgNDY0Wk00NDguMzYxIDMyMi44NzVWMzA0QzQ0OC4zNjEgMjk1LjI1IDQ0MS4xMTEgMjg4IDQzMi4zNjEgMjg4UzQxNi4zNjEgMjk1LjI1IDQxNi4zNjEgMzA0VjMyMi44NzVDMzk3LjczNiAzMjkuNSAzODQuMzYxIDM0Ny4xMjUgMzg0LjM2MSAzNjhDMzg0LjM2MSAzOTQuNSA0MDUuODYxIDQxNiA0MzIuMzYxIDQxNlM0ODAuMzYxIDM5NC41IDQ4MC4zNjEgMzY4QzQ4MC4zNjEgMzQ3LjEyNSA0NjYuOTg2IDMyOS41IDQ0OC4zNjEgMzIyLjg3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TemperatureSnow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M268.836 304.945C273.933 292.045 280.146 279.51 288.361 267.844V260.842L223.494 223.998L288.361 187.156V131.963L199.502 182.432V124.289L229.642 94.156C237.455 86.344 237.455 73.656 229.642 65.844S209.173 58.031 201.361 65.844L199.502 67.705V56C199.502 42.75 188.752 32 175.502 32S151.502 42.75 151.502 56V67.705L149.642 65.844C141.83 58.031 129.173 58.031 121.361 65.844S113.548 86.344 121.361 94.156L151.502 124.289V182.436L101.148 153.365L90.111 112.156C87.252 101.469 76.33 95.188 65.627 98.031C54.955 100.875 48.627 111.844 51.486 122.531L52.172 125.09L42.002 119.219C30.564 112.594 15.83 116.531 9.22 128C2.595 139.469 6.517 154.156 18.002 160.781L28.177 166.656L25.611 167.344C14.955 170.188 8.627 181.156 11.486 191.844C13.877 200.781 21.955 206.656 30.783 206.656C32.502 206.656 34.252 206.438 35.986 205.969L77.14 194.924L127.504 223.998L78.873 252.076L37.72 241.031C27.158 238.156 16.08 244.5 13.22 255.156C10.361 265.844 16.689 276.812 27.345 279.656L29.912 280.344L19.736 286.219C8.252 292.844 4.33 307.531 10.955 319C15.392 326.688 23.47 331 31.752 331C35.83 331 39.955 329.969 43.736 327.781L53.906 321.91L53.22 324.469C50.361 335.156 56.689 346.125 67.361 348.969C69.095 349.437 70.83 349.656 72.548 349.656C81.377 349.656 89.455 343.781 91.845 334.844L102.884 293.633L151.502 265.562V315.711L121.361 345.844C113.548 353.656 113.548 366.344 121.361 374.156S141.83 381.969 149.642 374.156L151.502 372.295V392C151.502 405.25 162.252 416 175.502 416S199.502 405.25 199.502 392V372.295L201.361 374.156C205.267 378.062 210.377 380 215.502 380S225.736 378.062 229.642 374.156C237.455 366.344 237.455 353.656 229.642 345.844L199.502 315.711V265.564L268.836 304.945ZM544.361 278.5V112C544.361 50.125 494.236 0 432.361 0S320.361 50.125 320.361 112V278.5C300.611 303.125 288.361 334 288.361 368C288.361 447.5 352.861 512 432.361 512S576.361 447.5 576.361 368C576.361 334 564.111 303.125 544.361 278.5ZM432.361 464C379.486 464 336.361 420.875 336.361 368C336.361 341 348.111 320.75 357.861 308.5L368.361 295.375V112C368.361 76.75 397.111 48 432.361 48S496.361 76.75 496.361 112V295.25L506.861 308.375C516.611 320.75 528.361 341 528.361 368C528.361 420.875 485.236 464 432.361 464ZM448.361 322.875V304C448.361 295.25 441.111 288 432.361 288S416.361 295.25 416.361 304V322.875C397.736 329.5 384.361 347.125 384.361 368C384.361 394.5 405.861 416 432.361 416S480.361 394.5 480.361 368C480.361 347.125 466.986 329.5 448.361 322.875Z" />
        </Icon>
    </>
}