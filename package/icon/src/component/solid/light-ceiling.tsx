
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=solid light-ceiling}
 * @preview ![light-ceiling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODguMDQxIDE2Mi4zNzVWMEgyMjQuMDQxVjE2Mi4zNzVDMTA4LjU0MSAxNzYuNjI1IDE2LjU0MSAyNjYuMDAxIDAuMjkxIDM3OS44NzVDLTIuMzM0IDM5OSAxMy4xNjYgNDE2IDMyLjU0MSA0MTZINDc5LjQ1OUM0OTguODM0IDQxNiA1MTQuMzM0IDM5OSA1MTEuNzA5IDM3OS44NzVDNDk1LjQ1OSAyNjYuMDAxIDQwMy41NDEgMTc2LjYyNSAyODguMDQxIDE2Mi4zNzVaTTI1Ni4wNDEgNTEyQzI5MS40MTYgNTEyIDMyMC4wNDEgNDgzLjM3NSAzMjAuMDQxIDQ0OEgxOTIuMDQxQzE5Mi4wNDEgNDgzLjM3NSAyMjAuNjY2IDUxMiAyNTYuMDQxIDUxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LightCeiling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M288.041 162.375V0H224.041V162.375C108.541 176.625 16.541 266.001 0.291 379.875C-2.334 399 13.166 416 32.541 416H479.459C498.834 416 514.334 399 511.709 379.875C495.459 266.001 403.541 176.625 288.041 162.375ZM256.041 512C291.416 512 320.041 483.375 320.041 448H192.041C192.041 483.375 220.666 512 256.041 512Z" />
        </Icon>
    </>
}