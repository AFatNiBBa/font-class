
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=regular conveyor-belt}
 * @preview ![conveyor-belt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMzY4QzExMC4yNSAzNjggOTYgMzgyLjI1IDk2IDQwMFMxMTAuMjUgNDMyIDEyOCA0MzJTMTYwIDQxNy43NSAxNjAgNDAwUzE0NS43NSAzNjggMTI4IDM2OFpNNTI4IDI4OEgxMTJDNTAuMTQ1IDI4OCAwIDMzOC4xNDUgMCA0MDBTNTAuMTQ1IDUxMiAxMTIgNTEySDUyOEM1ODkuODU1IDUxMiA2NDAgNDYxLjg1NSA2NDAgNDAwUzU4OS44NTUgMjg4IDUyOCAyODhaTTUyOCA0NjRIMTEyQzc2LjcxMSA0NjQgNDggNDM1LjI4OSA0OCA0MDBDNDggMzY0LjcwOSA3Ni43MTEgMzM2IDExMiAzMzZINTI4QzU2My4yODkgMzM2IDU5MiAzNjQuNzA5IDU5MiA0MDBDNTkyIDQzNS4yODkgNTYzLjI4OSA0NjQgNTI4IDQ2NFpNNTEyIDM2OEM0OTQuMjUgMzY4IDQ4MCAzODIuMjUgNDgwIDQwMFM0OTQuMjUgNDMyIDUxMiA0MzJTNTQ0IDQxNy43NSA1NDQgNDAwUzUyOS43NSAzNjggNTEyIDM2OFpNMzIwIDM2OEMzMDIuMjUgMzY4IDI4OCAzODIuMjUgMjg4IDQwMFMzMDIuMjUgNDMyIDMyMCA0MzJTMzUyIDQxNy43NSAzNTIgNDAwUzMzNy43NSAzNjggMzIwIDM2OFpNMTkyIDI1Nkg0NDhDNDgzLjM0NiAyNTYgNTEyIDIyNy4zNDYgNTEyIDE5MlY2NEM1MTIgMjguNjUyIDQ4My4zNDYgMCA0NDggMEgxOTJDMTU2LjY1NCAwIDEyOCAyOC42NTIgMTI4IDY0VjE5MkMxMjggMjI3LjM0NiAxNTYuNjU0IDI1NiAxOTIgMjU2Wk0xNzYgNjRDMTc2IDU1LjE3OCAxODMuMTc4IDQ4IDE5MiA0OEgyNTZDMjU2IDcwLjIyMyAyNTYgMTI4IDI1NiAxMjhMMzIwIDk2TDM4NCAxMjhWNDhINDQ4QzQ1Ni44MjIgNDggNDY0IDU1LjE3OCA0NjQgNjRWMTkyQzQ2NCAyMDAuODIyIDQ1Ni44MjIgMjA4IDQ0OCAyMDhIMTkyQzE4My4xNzggMjA4IDE3NiAyMDAuODIyIDE3NiAxOTJWNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ConveyorBelt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M128 368C110.25 368 96 382.25 96 400S110.25 432 128 432S160 417.75 160 400S145.75 368 128 368ZM528 288H112C50.145 288 0 338.145 0 400S50.145 512 112 512H528C589.855 512 640 461.855 640 400S589.855 288 528 288ZM528 464H112C76.711 464 48 435.289 48 400C48 364.709 76.711 336 112 336H528C563.289 336 592 364.709 592 400C592 435.289 563.289 464 528 464ZM512 368C494.25 368 480 382.25 480 400S494.25 432 512 432S544 417.75 544 400S529.75 368 512 368ZM320 368C302.25 368 288 382.25 288 400S302.25 432 320 432S352 417.75 352 400S337.75 368 320 368ZM192 256H448C483.346 256 512 227.346 512 192V64C512 28.652 483.346 0 448 0H192C156.654 0 128 28.652 128 64V192C128 227.346 156.654 256 192 256ZM176 64C176 55.178 183.178 48 192 48H256C256 70.223 256 128 256 128L320 96L384 128V48H448C456.822 48 464 55.178 464 64V192C464 200.822 456.822 208 448 208H192C183.178 208 176 200.822 176 192V64Z" />
        </Icon>
    </>
}