
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `angle-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=regular angle-right}
 * @preview ![angle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04OS40NTMgODcuNDk3TDIzMy40MzggMjM5LjQ5OUMyMzcuODEzIDI0NC4xMjQgMjQwIDI1MC4wNjIgMjQwIDI1NS45OTlDMjQwIDI2MS45MzcgMjM3LjgxMyAyNjcuODc0IDIzMy40MzggMjcyLjQ5OUw4OS40NTMgNDI0LjUwMUM4MC4zMjggNDM0LjEyNiA2NS4xNDEgNDM0LjUzMiA1NS41MiA0MjUuNDM5QzQ1LjgzMiA0MTYuMzE0IDQ1LjQ4OSA0MDEuMDY0IDU0LjU4MiAzOTEuNTAxTDE4Mi45NDYgMjU1Ljk5OUw1NC41ODIgMTIwLjQ5N0M0NS40ODkgMTEwLjkzNSA0NS44MzIgOTUuNzQ3IDU1LjUyIDg2LjU2QzY1LjE0MSA3Ny40NjYgODAuMzI4IDc3Ljg3MiA4OS40NTMgODcuNDk3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AngleRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M89.453 87.497L233.438 239.499C237.813 244.124 240 250.062 240 255.999C240 261.937 237.813 267.874 233.438 272.499L89.453 424.501C80.328 434.126 65.141 434.532 55.52 425.439C45.832 416.314 45.489 401.064 54.582 391.501L182.946 255.999L54.582 120.497C45.489 110.935 45.832 95.747 55.52 86.56C65.141 77.466 80.328 77.872 89.453 87.497Z" />
        </Icon>
    </>
}