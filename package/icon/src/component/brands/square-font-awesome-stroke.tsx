
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-font-awesome-stroke` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-font-awesome-stroke?s=brands square-font-awesome-stroke}
 * @preview ![square-font-awesome-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDEuNiwxNTJjLTI1LjQsMC0zNy40LDEwLjQtNTcuNiwxNC40VjE2MGMwLTguOC03LjItMTYtMTYtMTZzLTE2LDcuMi0xNiwxNnYxOTJjMCwwLjgsMC4xLDEuNiwwLjIsMi40IGMwLjEsMC40LDAuMSwwLjgsMC4yLDEuMmMxLjYsNy4xLDgsMTIuNCwxNS42LDEyLjRzMTQtNS4zLDE1LjYtMTIuNGMwLjEtMC40LDAuMi0wLjgsMC4yLTEuMmMwLjEtMC44LDAuMi0xLjYsMC4yLTIuNFYxOTguNCBjNC0wLjgsNy43LTEuOCwxMS4yLTNjMTQuMy00LjcsMjYtMTEuNCw0Ni40LTExLjRjMzEuNCwwLDQzLjIsMTYsNzQuNiwxNmM4LjksMCwxNS45LTEuMSwyNC4yLTMuNWMxLjItMC4zLDIuNC0wLjcsMy42LTEuMXY5NiBjLTEwLDMuMi0xNy42LDQuNi0yNy44LDQuNmMtMzEuNCwwLTQzLjQtMTYtNzQuNi0xNmMtMTAuMiwwLTE4LjIsMS44LTI1LjYsNHYzMmM3LjQtMi40LDE1LjQtNCwyNS42LTRjMzEuNCwwLDQzLjIsMTYsNzQuNiwxNgljMTguNiwwLDI4LjItNC44LDU5LjgtMTZWMTUyYy0zMS42LDExLjItNDEuMiwxNi01OS44LDE2QzI0NC44LDE2OCwyMzIuOCwxNTIsMjAxLjYsMTUyeiBNMzg0LDMySDY0QzI4LjcsMzIsMCw2MC43LDAsOTZ2MzIwCWMwLDM1LjMsMjguNyw2NCw2NCw2NGgzMjBjMzUuMywwLDY0LTI4LjcsNjQtNjRWOTZDNDQ4LDYwLjcsNDE5LjMsMzIsMzg0LDMyeiBNNDE2LDQxNmMwLDE3LjYtMTQuNCwzMi0zMiwzMkg2NCBjLTE3LjYsMC0zMi0xNC40LTMyLTMyVjk2YzAtMTcuNiwxNC40LTMyLDMyLTMyaDMyMGMxNy42LDAsMzIsMTQuNCwzMiwzMlY0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SquareFontAwesomeStroke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M201.6,152c-25.4,0-37.4,10.4-57.6,14.4V160c0-8.8-7.2-16-16-16s-16,7.2-16,16v192c0,0.8,0.1,1.6,0.2,2.4 c0.1,0.4,0.1,0.8,0.2,1.2c1.6,7.1,8,12.4,15.6,12.4s14-5.3,15.6-12.4c0.1-0.4,0.2-0.8,0.2-1.2c0.1-0.8,0.2-1.6,0.2-2.4V198.4 c4-0.8,7.7-1.8,11.2-3c14.3-4.7,26-11.4,46.4-11.4c31.4,0,43.2,16,74.6,16c8.9,0,15.9-1.1,24.2-3.5c1.2-0.3,2.4-0.7,3.6-1.1v96 c-10,3.2-17.6,4.6-27.8,4.6c-31.4,0-43.4-16-74.6-16c-10.2,0-18.2,1.8-25.6,4v32c7.4-2.4,15.4-4,25.6-4c31.4,0,43.2,16,74.6,16	c18.6,0,28.2-4.8,59.8-16V152c-31.6,11.2-41.2,16-59.8,16C244.8,168,232.8,152,201.6,152z M384,32H64C28.7,32,0,60.7,0,96v320	c0,35.3,28.7,64,64,64h320c35.3,0,64-28.7,64-64V96C448,60.7,419.3,32,384,32z M416,416c0,17.6-14.4,32-32,32H64 c-17.6,0-32-14.4-32-32V96c0-17.6,14.4-32,32-32h320c17.6,0,32,14.4,32,32V416z" />
        </Icon>
    </>
}