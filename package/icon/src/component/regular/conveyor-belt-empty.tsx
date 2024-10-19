
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `conveyor-belt-empty` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-empty?s=regular conveyor-belt-empty}
 * @preview ![conveyor-belt-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMzY4QzExMC4yNSAzNjggOTYgMzgyLjI1IDk2IDQwMFMxMTAuMjUgNDMyIDEyOCA0MzJTMTYwIDQxNy43NSAxNjAgNDAwUzE0NS43NSAzNjggMTI4IDM2OFpNNTEyIDM2OEM0OTQuMjUgMzY4IDQ4MCAzODIuMjUgNDgwIDQwMFM0OTQuMjUgNDMyIDUxMiA0MzJTNTQ0IDQxNy43NSA1NDQgNDAwUzUyOS43NSAzNjggNTEyIDM2OFpNMzIwIDM2OEMzMDIuMjUgMzY4IDI4OCAzODIuMjUgMjg4IDQwMFMzMDIuMjUgNDMyIDMyMCA0MzJTMzUyIDQxNy43NSAzNTIgNDAwUzMzNy43NSAzNjggMzIwIDM2OFpNNTI4IDI4OEgxMTJDNTAuMTQ1IDI4OCAwIDMzOC4xNDUgMCA0MDBTNTAuMTQ1IDUxMiAxMTIgNTEySDUyOEM1ODkuODU1IDUxMiA2NDAgNDYxLjg1NSA2NDAgNDAwUzU4OS44NTUgMjg4IDUyOCAyODhaTTUyOCA0NjRIMTEyQzc2LjcxMSA0NjQgNDggNDM1LjI4OSA0OCA0MDBDNDggMzY0LjcwOSA3Ni43MTEgMzM2IDExMiAzMzZINTI4QzU2My4yODkgMzM2IDU5MiAzNjQuNzA5IDU5MiA0MDBDNTkyIDQzNS4yODkgNTYzLjI4OSA0NjQgNTI4IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ConveyorBeltEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M128 368C110.25 368 96 382.25 96 400S110.25 432 128 432S160 417.75 160 400S145.75 368 128 368ZM512 368C494.25 368 480 382.25 480 400S494.25 432 512 432S544 417.75 544 400S529.75 368 512 368ZM320 368C302.25 368 288 382.25 288 400S302.25 432 320 432S352 417.75 352 400S337.75 368 320 368ZM528 288H112C50.145 288 0 338.145 0 400S50.145 512 112 512H528C589.855 512 640 461.855 640 400S589.855 288 528 288ZM528 464H112C76.711 464 48 435.289 48 400C48 364.709 76.711 336 112 336H528C563.289 336 592 364.709 592 400C592 435.289 563.289 464 528 464Z" />
        </Icon>
    </>
}