
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `yahoo` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/yahoo?s=brands yahoo}
 * @preview ![yahoo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjMuNjksMTQxLjA2LDE2NywyODQuMjMsMTExLDE0MS4wNkgxNC45M0wxMjAuNzYsMzkwLjE5LDgyLjE5LDQ4MGg5NC4xN0wzMTcuMjcsMTQxLjA2Wm0xMDUuNCwxMzUuNzlhNTguMjIsNTguMjIsMCwxLDAsNTguMjIsNTguMjJBNTguMjIsNTguMjIsMCwwLDAsMzI5LjA5LDI3Ni44NVpNMzk0LjY1LDMybC05MywyMjMuNDdINDA2LjQ0TDQ5OS4wNywzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Yahoo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M223.69,141.06,167,284.23,111,141.06H14.93L120.76,390.19,82.19,480h94.17L317.27,141.06Zm105.4,135.79a58.22,58.22,0,1,0,58.22,58.22A58.22,58.22,0,0,0,329.09,276.85ZM394.65,32l-93,223.47H406.44L499.07,32Z" />
        </Icon>
    </>
}