
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `trademark` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=light trademark}
 * @preview ![trademark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgOTYuMDM4SDE2QzcuMTcgOTYuMDM4IDAgMTAzLjE5NSAwIDExMi4wMzZDMCAxMjAuODY2IDcuMTU3IDEyOC4wMzQgMTYgMTI4LjAzNEgxMTJWNDAwLjAwMkMxMTIgNDA4LjgzMiAxMTkuMTU3IDQxNiAxMjggNDE2QzEzNi44MyA0MTYgMTQ0IDQwOC44NDMgMTQ0IDQwMC4wMDJWMTI4LjAzNEgyNDBDMjQ4LjgzIDEyOC4wMzQgMjU2IDEyMC44NzcgMjU2IDExMi4wMzZDMjU2IDEwMy4yMDYgMjQ4Ljg0MyA5Ni4wMzggMjQwIDk2LjAzOFpNNjI5LjQzOCA5Ny4wMDZDNjIzLjA2MiA5NC42IDYxNiA5Ni42MzEgNjExLjcxOSAxMDEuNzg3TDQ2NCAyNzkuMDE2TDMxNi4yODEgMTAxLjc4N0MzMTEuOTY5IDk2LjYzMSAzMDQuODc1IDk0LjYgMjk4LjU2MiA5Ny4wMDZDMjkyLjIxOSA5OS4yODcgMjg4IDEwNS4yODcgMjg4IDExMi4wMzZWNDAwLjAwMkMyODggNDA4Ljg0NSAyOTUuMTU2IDQxNiAzMDQgNDE2UzMyMCA0MDguODQ1IDMyMCA0MDAuMDAyVjE1Ni4yMThMNDUxLjcxOSAzMTQuMjYyQzQ1Ny43ODEgMzIxLjU3NCA0NzAuMjE5IDMyMS41NzQgNDc2LjI4MSAzMTQuMjYyTDYwOCAxNTYuMjE4VjQwMC4wMDJDNjA4IDQwOC44NDUgNjE1LjE1NiA0MTYgNjI0IDQxNlM2NDAgNDA4Ljg0NSA2NDAgNDAwLjAwMlYxMTIuMDM2QzY0MCAxMDUuMjg3IDYzNS43ODEgOTkuMjg3IDYyOS40MzggOTcuMDA2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Trademark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M240 96.038H16C7.17 96.038 0 103.195 0 112.036C0 120.866 7.157 128.034 16 128.034H112V400.002C112 408.832 119.157 416 128 416C136.83 416 144 408.843 144 400.002V128.034H240C248.83 128.034 256 120.877 256 112.036C256 103.206 248.843 96.038 240 96.038ZM629.438 97.006C623.062 94.6 616 96.631 611.719 101.787L464 279.016L316.281 101.787C311.969 96.631 304.875 94.6 298.562 97.006C292.219 99.287 288 105.287 288 112.036V400.002C288 408.845 295.156 416 304 416S320 408.845 320 400.002V156.218L451.719 314.262C457.781 321.574 470.219 321.574 476.281 314.262L608 156.218V400.002C608 408.845 615.156 416 624 416S640 408.845 640 400.002V112.036C640 105.287 635.781 99.287 629.438 97.006Z" />
        </Icon>
    </>
}