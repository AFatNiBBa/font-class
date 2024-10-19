
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=regular horizontal-rule}
 * @preview ![horizontal-rule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYgMjgwSDI0QzEwLjc1IDI4MCAwIDI2OS4yNSAwIDI1NlMxMC43NSAyMzIgMjQgMjMySDYxNkM2MjkuMjUgMjMyIDY0MCAyNDIuNzUgNjQwIDI1NlM2MjkuMjUgMjgwIDYxNiAyODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HorizontalRule(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616 280H24C10.75 280 0 269.25 0 256S10.75 232 24 232H616C629.25 232 640 242.75 640 256S629.25 280 616 280Z" />
        </Icon>
    </>
}