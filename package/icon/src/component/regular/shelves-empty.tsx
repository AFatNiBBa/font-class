
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shelves-empty` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=regular shelves-empty}
 * @preview ![shelves-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYgMEM2MDIuNzUgMCA1OTIgMTAuNzUgNTkyIDI0VjE0NEg0OFYyNEM0OCAxMC43NSAzNy4yNSAwIDI0IDBTMCAxMC43NSAwIDI0VjQ4OEMwIDUwMS4yNSAxMC43NSA1MTIgMjQgNTEyUzQ4IDUwMS4yNSA0OCA0ODhWNDQ4SDU5MlY0ODhDNTkyIDUwMS4yNSA2MDIuNzUgNTEyIDYxNiA1MTJTNjQwIDUwMS4yNSA2NDAgNDg4VjI0QzY0MCAxMC43NSA2MjkuMjUgMCA2MTYgMFpNNDggNDAwVjE5Mkg1OTJWNDAwSDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShelvesEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616 0C602.75 0 592 10.75 592 24V144H48V24C48 10.75 37.25 0 24 0S0 10.75 0 24V488C0 501.25 10.75 512 24 512S48 501.25 48 488V448H592V488C592 501.25 602.75 512 616 512S640 501.25 640 488V24C640 10.75 629.25 0 616 0ZM48 400V192H592V400H48Z" />
        </Icon>
    </>
}