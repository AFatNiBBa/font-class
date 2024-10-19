
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `firstdraft` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/firstdraft?s=brands firstdraft}
 * @preview ![firstdraft](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMTkyaC02NHYxMjhIMTkydjEyOEgwdi0yNS42aDE2Ni40di0xMjhoMTI4di0xMjhIMzg0VjE5MnptLTI1LjYgMzguNHYxMjhoLTEyOHYxMjhINjRWNTEyaDE5MlYzODRoMTI4VjIzMC40aC0yNS42em0yNS42IDE5MmgtODkuNlY1MTJIMzIwdi02NGg2NHYtMjUuNnpNMCAwdjM4NGgxMjhWMjU2aDEyOFYxMjhoMTI4VjBIMHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Firstdraft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 192h-64v128H192v128H0v-25.6h166.4v-128h128v-128H384V192zm-25.6 38.4v128h-128v128H64V512h192V384h128V230.4h-25.6zm25.6 192h-89.6V512H320v-64h64v-25.6zM0 0v384h128V256h128V128h128V0H0z" />
        </Icon>
    </>
}