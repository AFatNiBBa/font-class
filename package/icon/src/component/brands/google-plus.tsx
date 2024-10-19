
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `google-plus` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/google-plus?s=brands google-plus}
 * @preview ![google-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYsOEMxMTkuMSw4LDgsMTE5LjEsOCwyNTZTMTE5LjEsNTA0LDI1Niw1MDQsNTA0LDM5Mi45LDUwNCwyNTYsMzkyLjksOCwyNTYsOFpNMTg1LjMsMzgwYTEyNCwxMjQsMCwwLDEsMC0yNDhjMzEuMywwLDYwLjEsMTEsODMsMzIuM2wtMzMuNiwzMi42Yy0xMy4yLTEyLjktMzEuMy0xOS4xLTQ5LjQtMTkuMS00Mi45LDAtNzcuMiwzNS41LTc3LjIsNzguMVMxNDIuMywzMzQsMTg1LjMsMzM0YzMyLjYsMCw2NC45LTE5LjEsNzAuMS01My4zSDE4NS4zVjIzOC4xSDMwMi4yYTEwOS4yLDEwOS4yLDAsMCwxLDEuOSwyMC43YzAsNzAuOC00Ny41LDEyMS4yLTExOC44LDEyMS4yWk00MTUuNSwyNzMuOHYzNS41SDM4MFYyNzMuOEgzNDQuNVYyMzguM0gzODBWMjAyLjhoMzUuNXYzNS41aDM1LjJ2MzUuNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GooglePlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256,8C119.1,8,8,119.1,8,256S119.1,504,256,504,504,392.9,504,256,392.9,8,256,8ZM185.3,380a124,124,0,0,1,0-248c31.3,0,60.1,11,83,32.3l-33.6,32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9,0-77.2,35.5-77.2,78.1S142.3,334,185.3,334c32.6,0,64.9-19.1,70.1-53.3H185.3V238.1H302.2a109.2,109.2,0,0,1,1.9,20.7c0,70.8-47.5,121.2-118.8,121.2ZM415.5,273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5Z" />
        </Icon>
    </>
}