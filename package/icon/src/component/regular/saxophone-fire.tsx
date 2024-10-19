
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `saxophone-fire` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/saxophone-fire?s=regular saxophone-fire}
 * @preview ![saxophone-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03NC4xMjkgMTc2TDY3LjEyOSAxNTkuNUM2NS4xMjkgMTUzLjUgNjQuMTI5IDE0Ny4xMjUgNjQuMDA0IDE0MC43NUM2NC4wMDQgMTMwLjM3NSA3NS4yNTQgMTAyLjEyNSAxMDAuMzgxIDcwLjI1QzEwNC4wMDYgNzQuNzUgMTA3LjUwNiA3OS4yNSAxMTAuODgxIDgzLjc1TDE0Ny4zODMgMTM0LjEyNUwxNzUuNTA4IDk5Ljg3NUMxODYuMDA4IDExOCAxOTEuNzYgMTM0LjUgMTkyLjAxIDE0MC43NUMxOTEuODg1IDE0Ny4xMjUgMTkwLjg4NSAxNTMuNSAxODkuMDEgMTU5LjVMMTgyLjAwOCAxNzZIMjM0LjEzN0MyMzcuODg3IDE2NC42MjUgMjM5Ljg4NyAxNTIuNzUgMjQwLjAxMiAxNDAuNzVDMjQwLjAxMiAxMTQuMTI1IDIxNC4wMSA1OS4yNSAxNzcuNzYgMjUuNjI1QzE2Ny43NTggMzUgMTU4LjM4MyA0NSAxNDkuNjMzIDU1LjYyNUMxMzUuMDA2IDM1LjUgMTE4LjI1NiAxNi44NzUgMTAwLjAwNiAwQzUwLjg3NyA0NS42MjUgMTYgMTA1IDE2IDE0MC43NUMxNi4xMjUgMTUyLjc1IDE4LjEyNSAxNjQuNjI1IDIxLjg3NyAxNzZINzQuMTI5Wk02MjUuOTA2IDEwNC4yNUw2MDEuMjc5IDgwLjg3NUM1ODkuNzc5IDcwIDU3NC42NTQgNjQgNTU4Ljc3NyA2NEg1MTYuNjVDNDkzLjI3MyA2My44NzUgNDcwLjc3MyA3Mi43NSA0NTMuODk2IDg4Ljg3NUw0NDguMzk2IDk0LjM3NUw0MzguNjQ2IDg0Ljc1QzQzMi4zOTYgNzguNSA0MjIuMjcxIDc4LjUgNDE2LjAyMSA4NC43NUw0MDQuNzcgOTZDMzk4LjUyIDEwMi4yNSAzOTguNTIgMTEyLjM3NSA0MDQuNzcgMTE4LjYyNUw0MTQuNTIgMTI4LjVMNDAwLjUyIDE0Mi41TDM5MC42NDUgMTMyLjc1QzM4NC4zOTUgMTI2LjUgMzc0LjI2OCAxMjYuNSAzNjguMDE4IDEzMi43NUwzNTYuNzY4IDE0NEMzNTAuNTE4IDE1MC4yNSAzNTAuNTE4IDE2MC4zNzUgMzU2Ljc2OCAxNjYuNjI1TDM2Ni42NDMgMTc2LjYyNUwzNTIuNjQzIDE5MC43NUwzNDIuNjQzIDE4MC43NUMzMzYuMzkzIDE3NC41IDMyNi4yNjYgMTc0LjUgMzIwLjAxNiAxODAuNzVMMzA4Ljc2NiAxOTJDMzAyLjUxNiAxOTguMjUgMzAyLjUxNiAyMDguMzc1IDMwOC43NjYgMjE0LjYyNUwzMTguNzY2IDIyNC43NUwyMjQuMDEyIDMyMEwyNDYuODg3IDI1NkgyNDhDMjYxLjI1NCAyNTYgMjcyIDI0NS4yNTQgMjcyIDIzMkMyNzIgMjE4Ljc0NCAyNjEuMjU0IDIwOCAyNDggMjA4SDI0QzEwLjc0NiAyMDggMCAyMTguNzQ0IDAgMjMyQzAgMjQxLjc3IDUuODg5IDI1MC4xMDQgMTQuMjY2IDI1My44NDhDNy4yOTEgMjgzLjI2MiAwIDMyMC4zODUgMCAzNDIuODc1QzAgNDA1LjUgMzYuMjUyIDQ2Mi43NSA5NC43NTQgNDkyLjI1QzExOS4wMDYgNTA1LjI1IDE0Ni42MzMgNTEyIDE3Ni4wMDggNTEyQzI1NC42MzcgNTEyIDI5OC4wMTQgNDY1IDMxMi4yNjYgNDQ5LjVDMzE2Ljg5MSA0NDQuNSAyOTQuNTE0IDQ3MSA1MzYuNTI3IDE4Mi44NzVINTkzLjY1NEM2MTIuNTMxIDE4MyA2MjkuNjU2IDE3MS41IDYzNi43ODEgMTUzLjg3NUM2NDMuNjU2IDEzNi42MjUgNjM5LjI4MSAxMTcgNjI1LjkwNiAxMDQuMjVaTTUzNi41MjcgMTM0Ljg3NUM1MjIuNCAxMzQuODc1IDUwOC45IDE0MS4xMjUgNDk5Ljc3NSAxNTJDMjU4LjM4OSA0MzkuMjUgMjgwLjc2NCA0MTMgMjc3LjAxNCA0MTdDMjY1LjEzOSA0MjkuODc1IDIzMy42MzcgNDY0IDE3Ni4wMDggNDY0QzE1NS4yNTggNDY0LjI1IDEzNC43NTYgNDU5LjEyNSAxMTYuMzgxIDQ0OS4zNzVDNzQuMjU0IDQyOC4xMjUgNDguMDAyIDM4Ny4zNzUgNDguMDAyIDM0Mi44NzVDNDguMDAyIDMxOC4zNzUgNTYuMTI3IDI4NC4yNSA2My4zNzkgMjU2SDE5NS44ODVMMTc4Ljc2IDMwMy44NzVDMTcxLjI1OCAzMjUgMTc5LjM4NSAzNDguNjI1IDE5OC4zODUgMzYwLjYyNUMyMTcuMzg3IDM3Mi42MjUgMjQyLjEzNyAzNjkuNzUgMjU4LjAxMiAzNTMuODc1TDQ4Ny4wMjMgMTIzLjYyNUM0OTUuMDI1IDExNi4xMjUgNTA1LjY1IDExMS44NzUgNTE2LjY1IDExMkg1NTguNzc3QzU2Mi4yNzcgMTEyIDU2NS42NTIgMTEzLjI1IDU2OC4xNTIgMTE1LjYyNUw1ODguNDA0IDEzNC44NzVINTM2LjUyN1pNMTIwLjAwNiAyODhDMTA2Ljc1NiAyODggOTYuMDA0IDI5OC43NSA5Ni4wMDQgMzEyUzEwNi43NTYgMzM2IDEyMC4wMDYgMzM2UzE0NC4wMDggMzI1LjI1IDE0NC4wMDggMzEyUzEzMy4yNTYgMjg4IDEyMC4wMDYgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SaxophoneFire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M74.129 176L67.129 159.5C65.129 153.5 64.129 147.125 64.004 140.75C64.004 130.375 75.254 102.125 100.381 70.25C104.006 74.75 107.506 79.25 110.881 83.75L147.383 134.125L175.508 99.875C186.008 118 191.76 134.5 192.01 140.75C191.885 147.125 190.885 153.5 189.01 159.5L182.008 176H234.137C237.887 164.625 239.887 152.75 240.012 140.75C240.012 114.125 214.01 59.25 177.76 25.625C167.758 35 158.383 45 149.633 55.625C135.006 35.5 118.256 16.875 100.006 0C50.877 45.625 16 105 16 140.75C16.125 152.75 18.125 164.625 21.877 176H74.129ZM625.906 104.25L601.279 80.875C589.779 70 574.654 64 558.777 64H516.65C493.273 63.875 470.773 72.75 453.896 88.875L448.396 94.375L438.646 84.75C432.396 78.5 422.271 78.5 416.021 84.75L404.77 96C398.52 102.25 398.52 112.375 404.77 118.625L414.52 128.5L400.52 142.5L390.645 132.75C384.395 126.5 374.268 126.5 368.018 132.75L356.768 144C350.518 150.25 350.518 160.375 356.768 166.625L366.643 176.625L352.643 190.75L342.643 180.75C336.393 174.5 326.266 174.5 320.016 180.75L308.766 192C302.516 198.25 302.516 208.375 308.766 214.625L318.766 224.75L224.012 320L246.887 256H248C261.254 256 272 245.254 272 232C272 218.744 261.254 208 248 208H24C10.746 208 0 218.744 0 232C0 241.77 5.889 250.104 14.266 253.848C7.291 283.262 0 320.385 0 342.875C0 405.5 36.252 462.75 94.754 492.25C119.006 505.25 146.633 512 176.008 512C254.637 512 298.014 465 312.266 449.5C316.891 444.5 294.514 471 536.527 182.875H593.654C612.531 183 629.656 171.5 636.781 153.875C643.656 136.625 639.281 117 625.906 104.25ZM536.527 134.875C522.4 134.875 508.9 141.125 499.775 152C258.389 439.25 280.764 413 277.014 417C265.139 429.875 233.637 464 176.008 464C155.258 464.25 134.756 459.125 116.381 449.375C74.254 428.125 48.002 387.375 48.002 342.875C48.002 318.375 56.127 284.25 63.379 256H195.885L178.76 303.875C171.258 325 179.385 348.625 198.385 360.625C217.387 372.625 242.137 369.75 258.012 353.875L487.023 123.625C495.025 116.125 505.65 111.875 516.65 112H558.777C562.277 112 565.652 113.25 568.152 115.625L588.404 134.875H536.527ZM120.006 288C106.756 288 96.004 298.75 96.004 312S106.756 336 120.006 336S144.008 325.25 144.008 312S133.256 288 120.006 288Z" />
        </Icon>
    </>
}