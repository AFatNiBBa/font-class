
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `deezer` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/deezer?s=brands deezer}
 * @preview ![deezer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTEuNDYsMjQ0LjcxSDU3NlYxNzJINDUxLjQ2Wm0wLTE3My44OXY3Mi42N0g1NzZWNzAuODJabTAsMjc1LjA2SDU3NlYyNzMuMkg0NTEuNDZaTTAsNDQ3LjA5SDEyNC41NFYzNzQuNDJIMFptMTUwLjQ3LDBIMjc1VjM3NC40MkgxNTAuNDdabTE1MC41MiwwSDQyNS41M1YzNzQuNDJIMzAxWm0xNTAuNDcsMEg1NzZWMzc0LjQySDQ1MS40NlpNMzAxLDM0NS44OEg0MjUuNTNWMjczLjJIMzAxWm0tMTUwLjUyLDBIMjc1VjI3My4ySDE1MC40N1ptMC0xMDEuMTdIMjc1VjE3MkgxNTAuNDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Deezer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M451.46,244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0,275.06H576V273.2H451.46ZM0,447.09H124.54V374.42H0Zm150.47,0H275V374.42H150.47Zm150.52,0H425.53V374.42H301Zm150.47,0H576V374.42H451.46ZM301,345.88H425.53V273.2H301Zm-150.52,0H275V273.2H150.47Zm0-101.17H275V172H150.47Z" />
        </Icon>
    </>
}