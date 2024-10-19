
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `usb-drive` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=thin usb-drive}
 * @preview ![usb-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgOTZINjRDMjguNjU0IDk2IDAgMTI0LjY1MiAwIDE2MFYzNTJDMCAzODcuMzQ2IDI4LjY1NCA0MTYgNjQgNDE2SDQxNkM0MzMuNjc0IDQxNiA0NDggNDAxLjY3MiA0NDggMzg0VjEyOEM0NDggMTEwLjMyNiA0MzMuNjc0IDk2IDQxNiA5NlpNNDMyIDM4NEM0MzIgMzkyLjgyMiA0MjQuODIyIDQwMCA0MTYgNDAwSDY0QzM3LjUzMyA0MDAgMTYgMzc4LjQ2NyAxNiAzNTJWMTYwQzE2IDEzMy41MzMgMzcuNTMzIDExMiA2NCAxMTJINDE2QzQyNC44MjIgMTEyIDQzMiAxMTkuMTc4IDQzMiAxMjhWMzg0Wk02MDAgMTI4SDQ4OEM0ODMuNTc4IDEyOCA0ODAgMTMxLjU5NCA0ODAgMTM2UzQ4My41NzggMTQ0IDQ4OCAxNDRINjAwQzYxMy4yMzQgMTQ0IDYyNCAxNTQuNzgxIDYyNCAxNjhWMzQ0QzYyNCAzNTcuMjE5IDYxMy4yMzQgMzY4IDYwMCAzNjhINDg4QzQ4My41NzggMzY4IDQ4MCAzNzEuNTk0IDQ4MCAzNzZTNDgzLjU3OCAzODQgNDg4IDM4NEg2MDBDNjIyLjA2MiAzODQgNjQwIDM2Ni4wNjIgNjQwIDM0NFYxNjhDNjQwIDE0NS45MzggNjIyLjA2MiAxMjggNjAwIDEyOFpNNTQ0IDI0MEg1NzZDNTg0LjgzNiAyNDAgNTkyIDIzMi44MzYgNTkyIDIyNFYxOTJDNTkyIDE4My4xNjIgNTg0LjgzNiAxNzYgNTc2IDE3Nkg1NDRDNTM1LjE2NCAxNzYgNTI4IDE4My4xNjIgNTI4IDE5MlYyMjRDNTI4IDIzMi44MzYgNTM1LjE2NCAyNDAgNTQ0IDI0MFpNNTQ0IDE5Mkg1NzZWMjI0SDU0NFYxOTJaTTUyOCAzMjBDNTI4IDMyOC44MzYgNTM1LjE2NCAzMzYgNTQ0IDMzNkg1NzZDNTg0LjgzNiAzMzYgNTkyIDMyOC44MzYgNTkyIDMyMFYyODhDNTkyIDI3OS4xNjIgNTg0LjgzNiAyNzIgNTc2IDI3Mkg1NDRDNTM1LjE2NCAyNzIgNTI4IDI3OS4xNjIgNTI4IDI4OFYzMjBaTTU0NCAyODhINTc2VjMyMEg1NDRWMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UsbDrive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M416 96H64C28.654 96 0 124.652 0 160V352C0 387.346 28.654 416 64 416H416C433.674 416 448 401.672 448 384V128C448 110.326 433.674 96 416 96ZM432 384C432 392.822 424.822 400 416 400H64C37.533 400 16 378.467 16 352V160C16 133.533 37.533 112 64 112H416C424.822 112 432 119.178 432 128V384ZM600 128H488C483.578 128 480 131.594 480 136S483.578 144 488 144H600C613.234 144 624 154.781 624 168V344C624 357.219 613.234 368 600 368H488C483.578 368 480 371.594 480 376S483.578 384 488 384H600C622.062 384 640 366.062 640 344V168C640 145.938 622.062 128 600 128ZM544 240H576C584.836 240 592 232.836 592 224V192C592 183.162 584.836 176 576 176H544C535.164 176 528 183.162 528 192V224C528 232.836 535.164 240 544 240ZM544 192H576V224H544V192ZM528 320C528 328.836 535.164 336 544 336H576C584.836 336 592 328.836 592 320V288C592 279.162 584.836 272 576 272H544C535.164 272 528 279.162 528 288V320ZM544 288H576V320H544V288Z" />
        </Icon>
    </>
}