
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-font-awesome` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-font-awesome?s=brands square-font-awesome}
 * @preview ![square-font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQuNSwzMi41aC0zMjBjLTM1LjMsMC02NCwyOC43LTY0LDY0djMyMGMwLDM1LjMsMjguNyw2NCw2NCw2NGgzMjBjMzUuMywwLDY0LTI4LjcsNjQtNjR2LTMyMCBDNDQ4LjUsNjEuMiw0MTkuOCwzMi41LDM4NC41LDMyLjV6IE0zMzYuNSwzMTIuNWMtMzEuNiwxMS4yLTQxLjIsMTYtNTkuOCwxNmMtMzEuNCwwLTQzLjItMTYtNzQuNi0xNmMtMTAuMiwwLTE4LjIsMS42LTI1LjYsNHYtMzIgYzcuNC0yLjIsMTUuNC00LDI1LjYtNGMzMS4yLDAsNDMuMiwxNiw3NC42LDE2YzEwLjIsMCwxNy44LTEuNCwyNy44LTQuNnYtOTZjLTEwLDMuMi0xNy42LDQuNi0yNy44LDQuNmMtMzEuNCwwLTQzLjItMTYtNzQuNi0xNiBjLTI1LjQsMC0zNy40LDEwLjQtNTcuNiwxNC40djE1My42YzAsOC44LTcuMiwxNi0xNiwxNmMtOC44LDAtMTYtNy4yLTE2LTE2di0xOTJjMC04LjgsNy4yLTE2LDE2LTE2YzguOCwwLDE2LDcuMiwxNiwxNnY2LjQgYzIwLjItNCwzMi4yLTE0LjQsNTcuNi0xNC40YzMxLjIsMCw0My4yLDE2LDc0LjYsMTZjMTguNiwwLDI4LjItNC44LDU5LjgtMTZWMzEyLjV6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SquareFontAwesome(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384.5,32.5h-320c-35.3,0-64,28.7-64,64v320c0,35.3,28.7,64,64,64h320c35.3,0,64-28.7,64-64v-320 C448.5,61.2,419.8,32.5,384.5,32.5z M336.5,312.5c-31.6,11.2-41.2,16-59.8,16c-31.4,0-43.2-16-74.6-16c-10.2,0-18.2,1.6-25.6,4v-32 c7.4-2.2,15.4-4,25.6-4c31.2,0,43.2,16,74.6,16c10.2,0,17.8-1.4,27.8-4.6v-96c-10,3.2-17.6,4.6-27.8,4.6c-31.4,0-43.2-16-74.6-16 c-25.4,0-37.4,10.4-57.6,14.4v153.6c0,8.8-7.2,16-16,16c-8.8,0-16-7.2-16-16v-192c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16v6.4 c20.2-4,32.2-14.4,57.6-14.4c31.2,0,43.2,16,74.6,16c18.6,0,28.2-4.8,59.8-16V312.5z" />
        </Icon>
    </>
}