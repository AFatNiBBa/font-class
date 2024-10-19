
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=solid door-closed}
 * @preview ![door-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgNDQ4SDQ4MFY1MC43NUM0ODAgMjIuNzUgNDU4LjUgMCA0MzIgMEgxNDRDMTE3LjUgMCA5NiAyMi43NSA5NiA1MC43NVY0NDhIMTZDNy4xMjUgNDQ4IDAgNDU1LjEyNSAwIDQ2NFY0OTZDMCA1MDQuODc1IDcuMTI1IDUxMiAxNiA1MTJINTYwQzU2OC44NzUgNTEyIDU3NiA1MDQuODc1IDU3NiA0OTZWNDY0QzU3NiA0NTUuMTI1IDU2OC44NzUgNDQ4IDU2MCA0NDhaTTM4NCAyODhDMzY2LjM3NSAyODggMzUyIDI3My42MjUgMzUyIDI1NlMzNjYuMzc1IDIyNCAzODQgMjI0UzQxNiAyMzguMzc1IDQxNiAyNTZTNDAxLjYyNSAyODggMzg0IDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DoorClosed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560 448H480V50.75C480 22.75 458.5 0 432 0H144C117.5 0 96 22.75 96 50.75V448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H560C568.875 512 576 504.875 576 496V464C576 455.125 568.875 448 560 448ZM384 288C366.375 288 352 273.625 352 256S366.375 224 384 224S416 238.375 416 256S401.625 288 384 288Z" />
        </Icon>
    </>
}