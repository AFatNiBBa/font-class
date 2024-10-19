
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-stankey` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-stankey?s=solid diagram-stankey}
 * @preview ![diagram-stankey](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDQuMjM0IDE2MEwzNDYuNjM1IDI1Nkg1OTJDNjAwLjgzNiAyNTYgNjA4IDI2My4xNjQgNjA4IDI3MlYzMDRDNjA4IDMxMi44MzYgNjAwLjgzNiAzMjAgNTkyIDMyMEgyNzYuNzcxTDMxNS4xNzIgMzg0SDU3NkM1OTMuNjc0IDM4NCA2MDggMzk4LjMyNiA2MDggNDE2VjQ0OEM2MDggNDY1LjY3NCA1OTMuNjc0IDQ4MCA1NzYgNDgwSDI5Ny4wNjRDMjc0LjU4NCA0ODAgMjUzLjc1MiA0NjguMjA1IDI0Mi4xODYgNDQ4LjkyOEwxNjQuODI4IDMyMEg2NEM0Ni4zMjYgMzIwIDMyIDMwNS42NzQgMzIgMjg4VjIyNEMzMiAyMDYuMzI2IDQ2LjMyNiAxOTIgNjQgMTkySDIzNS43NjZMMzEzLjEyMyA2My4wNzJDMzI0LjY4OSA0My43OTUgMzQ1LjUyMSAzMiAzNjguMDAyIDMySDU3NkM1OTMuNjc0IDMyIDYwOCA0Ni4zMjYgNjA4IDY0VjEyOEM2MDggMTQ1LjY3NCA1OTMuNjc0IDE2MCA1NzYgMTYwSDQwNC4yMzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DiagramStankey(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M404.234 160L346.635 256H592C600.836 256 608 263.164 608 272V304C608 312.836 600.836 320 592 320H276.771L315.172 384H576C593.674 384 608 398.326 608 416V448C608 465.674 593.674 480 576 480H297.064C274.584 480 253.752 468.205 242.186 448.928L164.828 320H64C46.326 320 32 305.674 32 288V224C32 206.326 46.326 192 64 192H235.766L313.123 63.072C324.689 43.795 345.521 32 368.002 32H576C593.674 32 608 46.326 608 64V128C608 145.674 593.674 160 576 160H404.234Z" />
        </Icon>
    </>
}