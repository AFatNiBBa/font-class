
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `otter` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/otter?s=regular otter}
 * @preview ![otter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNzJDNDg3LjEyNSA3MiA0ODAgNzkuMTI1IDQ4MCA4OFM0ODcuMTI1IDEwNCA0OTYgMTA0UzUxMiA5Ni44NzUgNTEyIDg4UzUwNC44NzUgNzIgNDk2IDcyWk01NzYgMzJINTY2LjVMNTU3Ljg3NSAyMy4zNzVDNTQyLjc1IDguMjUgNTIyLjYyNSAwIDUwMS4yNSAwSDQ4MC43NUM0NjYuODc1IDAgNDUzLjEyNSAzLjYyNSA0NDEgMTAuNUwyOTEuMTI1IDk2SDI3Mi4zNzVDMTU3LjUgOTYgNjQgMTg5LjI1IDY0IDMwNEw2NC4xMjUgMzY4Ljc1QzI4LjEyNSAzNzIuNzUgMCA0MDMgMCA0NDBDMCA0NzkuNzUgMzIuMjUgNTEyIDcyIDUxMkgyMzJDMjQ1LjI1IDUxMiAyNTYgNTAxLjI1IDI1NiA0ODhTMjQ1LjI1IDQ2NCAyMzIgNDY0SDcyQzU4Ljc1IDQ2NCA0OCA0NTMuMjUgNDggNDQwUzU4Ljc1IDQxNiA3MiA0MTZIMzA0LjVDMzMxIDQxNiAzNTIuNSAzOTQuNSAzNTIuNSAzNjhDMzUyLjUgMzQ4LjUgMzQ1LjUgMzMwLjc1IDMzMy44NzUgMzE2Ljg3NUwzNDcuODc1IDMwOS41TDM4OCAzODkuNUMzOTYuMTI1IDQwNS43NSA0MTIuNzUgNDE2IDQzMC44NzUgNDE2SDUyOUM1NTUuNSA0MTYgNTc3IDM5NC41IDU3NyAzNjhDNTc3IDMyMy44NzUgNTQxLjEyNSAyODggNDk2Ljg3NSAyODhINDgwLjM3NUw0NjEgMjQ5LjM3NUw0OTIuMTI1IDIzMi44NzVDNTAzIDIyNy4xMjUgNTE1LjM3NSAyMjQgNTI3Ljg3NSAyMjRDNTg5Ljc1IDIyNCA2NDAgMTczLjc1IDY0MCAxMTJWOTZDNjQwIDYwLjc1IDYxMS4yNSAzMiA1NzYgMzJaTTUyNy44NzUgMTc2QzUwNy41IDE3NiA0ODcuNSAxODEgNDY5LjYyNSAxOTAuNUw0NjUuODc1IDE5Mi41TDQ4Mi42MjUgMTcwLjc1QzQ5MS42MjUgMTU5IDUwNS44NzUgMTUyIDUyMC42MjUgMTUySDU3Ny41QzU2NS43NSAxNjYuNSA1NDggMTc2IDUyNy44NzUgMTc2Wk01OTIgMTEyQzU5MiAxMTQuNzUgNTkxLjUgMTE3LjM3NSA1OTEuMjUgMTIwSDUyMC42MjVDNDk2IDEyMCA0NzIuMjUgMTMxLjYyNSA0NTcuMjUgMTUxLjI1TDM5Ny44NzUgMjI3TDM5OSAyMjhMMzk3IDIyOUw0NTAuNzUgMzM2SDQ5Ni44NzVDNTE0LjYyNSAzMzYgNTI5IDM1MC4zNzUgNTI5IDM2OEg0MzAuODc1TDM2OC43NSAyNDRMMTk1LjM3NSAzMzZIMjcyLjM3NUMyOTAuMTI1IDMzNiAzMDQuNSAzNTAuMzc1IDMwNC41IDM2OEgxMTJWMzA0QzExMiAyMTUuNjI1IDE4My43NSAxNDQgMjcyLjM3NSAxNDRIMzAzLjc1TDQ2NC44NzUgNTIuMjVDNDY5LjYyNSA0OS41IDQ3NS4xMjUgNDggNDgwLjc1IDQ4SDUwMS4yNUM1MDkuODc1IDQ4IDUxNy44NzUgNTEuMzc1IDUyNCA1Ny4zNzVMNTQ2LjYyNSA4MEg1NzZDNTg0Ljg3NSA4MCA1OTIgODcuMTI1IDU5MiA5NlYxMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Otter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M496 72C487.125 72 480 79.125 480 88S487.125 104 496 104S512 96.875 512 88S504.875 72 496 72ZM576 32H566.5L557.875 23.375C542.75 8.25 522.625 0 501.25 0H480.75C466.875 0 453.125 3.625 441 10.5L291.125 96H272.375C157.5 96 64 189.25 64 304L64.125 368.75C28.125 372.75 0 403 0 440C0 479.75 32.25 512 72 512H232C245.25 512 256 501.25 256 488S245.25 464 232 464H72C58.75 464 48 453.25 48 440S58.75 416 72 416H304.5C331 416 352.5 394.5 352.5 368C352.5 348.5 345.5 330.75 333.875 316.875L347.875 309.5L388 389.5C396.125 405.75 412.75 416 430.875 416H529C555.5 416 577 394.5 577 368C577 323.875 541.125 288 496.875 288H480.375L461 249.375L492.125 232.875C503 227.125 515.375 224 527.875 224C589.75 224 640 173.75 640 112V96C640 60.75 611.25 32 576 32ZM527.875 176C507.5 176 487.5 181 469.625 190.5L465.875 192.5L482.625 170.75C491.625 159 505.875 152 520.625 152H577.5C565.75 166.5 548 176 527.875 176ZM592 112C592 114.75 591.5 117.375 591.25 120H520.625C496 120 472.25 131.625 457.25 151.25L397.875 227L399 228L397 229L450.75 336H496.875C514.625 336 529 350.375 529 368H430.875L368.75 244L195.375 336H272.375C290.125 336 304.5 350.375 304.5 368H112V304C112 215.625 183.75 144 272.375 144H303.75L464.875 52.25C469.625 49.5 475.125 48 480.75 48H501.25C509.875 48 517.875 51.375 524 57.375L546.625 80H576C584.875 80 592 87.125 592 96V112Z" />
        </Icon>
    </>
}