
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mixer` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mixer?s=brands mixer}
 * @preview ![mixer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTQuNTcsNzYuMDdhNDUuNzEsNDUuNzEsMCwwLDAtNjcuNTEtNi40MWMtMTcuNTgsMTYuMTgtMTksNDMuNTItNC43NSw2Mi43N2w5MS43OCwxMjNMNDEuNzYsMzc5LjU4Yy0xNC4yMywxOS4yNS0xMy4xMSw0Ni41OSw0Ljc0LDYyLjc3QTQ1LjcxLDQ1LjcxLDAsMCwwLDExNCw0MzUuOTRMMjQyLjg5LDI2Mi43YTEyLjE0LDEyLjE0LDAsMCwwLDAtMTQuMjNaTTQ3MC4yNCwzNzkuNTgsMzc3LjkxLDI1NS40NWw5MS43OC0xMjNjMTQuMjItMTkuMjUsMTIuODMtNDYuNTktNC43NS02Mi43N2E0NS43MSw0NS43MSwwLDAsMC02Ny41MSw2LjQxbC0xMjgsMTcyLjEyYTEyLjE0LDEyLjE0LDAsMCwwLDAsMTQuMjNMMzk4LDQzNS45NGE0NS43MSw0NS43MSwwLDAsMCw2Ny41MSw2LjQxQzQ4My4zNSw0MjYuMTcsNDg0LjQ3LDM5OC44Myw0NzAuMjQsMzc5LjU4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Mixer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M114.57,76.07a45.71,45.71,0,0,0-67.51-6.41c-17.58,16.18-19,43.52-4.75,62.77l91.78,123L41.76,379.58c-14.23,19.25-13.11,46.59,4.74,62.77A45.71,45.71,0,0,0,114,435.94L242.89,262.7a12.14,12.14,0,0,0,0-14.23ZM470.24,379.58,377.91,255.45l91.78-123c14.22-19.25,12.83-46.59-4.75-62.77a45.71,45.71,0,0,0-67.51,6.41l-128,172.12a12.14,12.14,0,0,0,0,14.23L398,435.94a45.71,45.71,0,0,0,67.51,6.41C483.35,426.17,484.47,398.83,470.24,379.58Z" />
        </Icon>
    </>
}