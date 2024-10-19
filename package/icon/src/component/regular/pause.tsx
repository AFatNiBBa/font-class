
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=regular pause}
 * @preview ![pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NiA2NEM0Mi43NSA2NCAzMiA3NC43NSAzMiA4OFY0MjRDMzIgNDM3LjI1IDQyLjc1IDQ0OCA1NiA0NDhTODAgNDM3LjI1IDgwIDQyNFY4OEM4MCA3NC43NSA2OS4yNSA2NCA1NiA2NFpNMjY0IDY0QzI1MC43NSA2NCAyNDAgNzQuNzUgMjQwIDg4VjQyNEMyNDAgNDM3LjI1IDI1MC43NSA0NDggMjY0IDQ0OFMyODggNDM3LjI1IDI4OCA0MjRWODhDMjg4IDc0Ljc1IDI3Ny4yNSA2NCAyNjQgNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Pause(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M56 64C42.75 64 32 74.75 32 88V424C32 437.25 42.75 448 56 448S80 437.25 80 424V88C80 74.75 69.25 64 56 64ZM264 64C250.75 64 240 74.75 240 88V424C240 437.25 250.75 448 264 448S288 437.25 288 424V88C288 74.75 277.25 64 264 64Z" />
        </Icon>
    </>
}