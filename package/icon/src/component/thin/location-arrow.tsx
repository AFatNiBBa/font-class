
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-arrow` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=thin location-arrow}
 * @preview ![location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzMuOTM4IDQ2LjA4NUM0MjQuNzY4IDM2Ljg5NCA0MTIuNDcxIDMyIDM5OS45NzMgMzJDMzkzLjg1OCAzMiAzODcuNjk4IDMzLjE3MiAzODEuODI5IDM1LjU4NkwyOS44MzIgMTc5LjU3OEM4LjU5OCAxODguMjY1IC0zLjUyNyAyMTAuNzY0IDAuOTEgMjMzLjI2M0M1LjMzMiAyNTUuNzkzIDI1LjA2NyAyNzIuMDExIDQ4LjAwNCAyNzIuMDExSDIwOC4wMDJWNDMyLjAwM0MyMDguMDAyIDQ1Ni4wMDEgMjI3LjE3OCA0ODAgMjU2LjAxOCA0ODBDMjc1LjE4OSA0ODAgMjkyLjkzOSA0NjguNDY5IDMwMC40MjQgNDUwLjE4OUw0NDQuNDIyIDk4LjIwN0M0NTEuNzUgODAuMzAyIDQ0Ny42MSA1OS43NDEgNDMzLjkzOCA0Ni4wODVaTTQyOS42MTQgOTIuMTQ5TDI4NS42MTcgNDQ0LjEyN0MyODAuNjc0IDQ1Ni4yIDI2OS4wNTcgNDY0LjAwMSAyNTYuMDE4IDQ2NC4wMDFDMjM2LjI0MiA0NjQuMDAxIDIyNC4wMDIgNDQ3LjM5MiAyMjQuMDAyIDQzMi4wMDNWMjU2LjAxMkg0OC4wMDRDMzIuNzUyIDI1Ni4wMTIgMTkuNTQ5IDI0NS4xNDkgMTYuNjA4IDIzMC4xNjVDMTMuNjU4IDIxNS4yMTMgMjEuNzY4IDIwMC4xNjMgMzUuODkxIDE5NC4zODZMMzg3LjkxNSA1MC4zODJDMzkxLjc1OSA0OC44MDQgMzk1LjgxNSA0Ny45OTkgMzk5Ljk3MyA0Ny45OTlDNDA4LjQxMSA0Ny45OTkgNDE2LjY2MSA1MS40MjEgNDIyLjYzMiA1Ny40MDVDNDMxLjc3NCA2Ni41MzcgNDM0LjUxNiA4MC4xNzMgNDI5LjYxNCA5Mi4xNDlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LocationArrow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M433.938 46.085C424.768 36.894 412.471 32 399.973 32C393.858 32 387.698 33.172 381.829 35.586L29.832 179.578C8.598 188.265 -3.527 210.764 0.91 233.263C5.332 255.793 25.067 272.011 48.004 272.011H208.002V432.003C208.002 456.001 227.178 480 256.018 480C275.189 480 292.939 468.469 300.424 450.189L444.422 98.207C451.75 80.302 447.61 59.741 433.938 46.085ZM429.614 92.149L285.617 444.127C280.674 456.2 269.057 464.001 256.018 464.001C236.242 464.001 224.002 447.392 224.002 432.003V256.012H48.004C32.752 256.012 19.549 245.149 16.608 230.165C13.658 215.213 21.768 200.163 35.891 194.386L387.915 50.382C391.759 48.804 395.815 47.999 399.973 47.999C408.411 47.999 416.661 51.421 422.632 57.405C431.774 66.537 434.516 80.173 429.614 92.149Z" />
        </Icon>
    </>
}