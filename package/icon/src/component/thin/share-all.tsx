
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `share-all` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=thin share-all}
 * @preview ![share-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzAuNzM0IDQwMS45NjhDMzY3LjQwNiA0MDQuODc0IDM2Ny4wNjIgNDA5LjkzNyAzNjkuOTg0IDQxMy4yODFDMzcxLjU2MiA0MTUuMDYyIDM3My43ODEgNDE1Ljk5OSAzNzYgNDE1Ljk5OUMzNzcuODc1IDQxNS45OTkgMzc5Ljc1IDQxNS4zNDMgMzgxLjI2NiA0MTQuMDMxTDU3My4yNjYgMjQ2LjAyOEM1NzUgMjQ0LjQ5NyA1NzYgMjQyLjMwOSA1NzYgMjM5Ljk5N0M1NzYgMjM3LjY4NCA1NzUgMjM1LjQ5NiA1NzMuMjY2IDIzMy45NjVMMzgxLjI2NiA2NS45NjJDMzc3LjkzOCA2My4wODcgMzcyLjg5MSA2My40IDM2OS45ODQgNjYuNzEyQzM2Ny4wNjIgNzAuMDU2IDM2Ny40MDYgNzUuMTE5IDM3MC43MzQgNzguMDI1TDU1NS44NDQgMjM5Ljk5N0wzNzAuNzM0IDQwMS45NjhaTTAgMzY3Ljk5OVY0NDBDMCA0NDQuNDA2IDMuNTc4IDQ0OCA4IDQ0OFMxNiA0NDQuNDA2IDE2IDQ0MFYzNjcuOTk5QzE2IDMwMS44NDEgNjkuODI4IDI0Ny45OTcgMTM2IDI0Ny45OTdINDE4LjcwMUwyNDIuNzM0IDQwMS45NjhDMjM5LjQwNiA0MDQuODc0IDIzOS4wNjIgNDA5LjkzNyAyNDEuOTg0IDQxMy4yODFDMjQzLjU2MiA0MTUuMDYyIDI0NS43ODEgNDE1Ljk5OSAyNDggNDE1Ljk5OUMyNDkuODc1IDQxNS45OTkgMjUxLjc1IDQxNS4zNDMgMjUzLjI2NiA0MTQuMDMxTDQ0NS4yNjYgMjQ2LjAyOEM0NDcgMjQ0LjQ5NyA0NDggMjQyLjMwOSA0NDggMjM5Ljk5N0M0NDggMjM3LjY4NCA0NDcgMjM1LjQ5NiA0NDUuMjY2IDIzMy45NjVMMjUzLjI2NiA2NS45NjJDMjQ5LjkzOCA2My4wODcgMjQ0Ljg5MSA2My40IDI0MS45ODQgNjYuNzEyQzIzOS4wNjIgNzAuMDU2IDIzOS40MDYgNzUuMTE5IDI0Mi43MzQgNzguMDI1TDQxOC43MDEgMjMxLjk5NkgxMzZDNjEuMDE2IDIzMS45OTYgMCAyOTIuOTk3IDAgMzY3Ljk5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ShareAll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M370.734 401.968C367.406 404.874 367.062 409.937 369.984 413.281C371.562 415.062 373.781 415.999 376 415.999C377.875 415.999 379.75 415.343 381.266 414.031L573.266 246.028C575 244.497 576 242.309 576 239.997C576 237.684 575 235.496 573.266 233.965L381.266 65.962C377.938 63.087 372.891 63.4 369.984 66.712C367.062 70.056 367.406 75.119 370.734 78.025L555.844 239.997L370.734 401.968ZM0 367.999V440C0 444.406 3.578 448 8 448S16 444.406 16 440V367.999C16 301.841 69.828 247.997 136 247.997H418.701L242.734 401.968C239.406 404.874 239.062 409.937 241.984 413.281C243.562 415.062 245.781 415.999 248 415.999C249.875 415.999 251.75 415.343 253.266 414.031L445.266 246.028C447 244.497 448 242.309 448 239.997C448 237.684 447 235.496 445.266 233.965L253.266 65.962C249.938 63.087 244.891 63.4 241.984 66.712C239.062 70.056 239.406 75.119 242.734 78.025L418.701 231.996H136C61.016 231.996 0 292.997 0 367.999Z" />
        </Icon>
    </>
}