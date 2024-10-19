
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-minimize` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=light window-minimize}
 * @preview ![window-minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDgwSDE2QzcuMjUgNDgwIDAgNDcyLjc1IDAgNDY0UzcuMjUgNDQ4IDE2IDQ0OEg0OTZDNTA0Ljc1IDQ0OCA1MTIgNDU1LjI1IDUxMiA0NjRTNTA0Ljc1IDQ4MCA0OTYgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindowMinimize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 480H16C7.25 480 0 472.75 0 464S7.25 448 16 448H496C504.75 448 512 455.25 512 464S504.75 480 496 480Z" />
        </Icon>
    </>
}