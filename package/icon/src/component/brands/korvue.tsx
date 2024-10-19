
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `korvue` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/korvue?s=brands korvue}
 * @preview ![korvue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODYuNSAzNGgtMzI3QzI2LjggMzQgMCA2MC44IDAgOTMuNXYzMjcuMUMwIDQ1My4yIDI2LjggNDgwIDU5LjUgNDgwaDMyNy4xYzMzIDAgNTkuNS0yNi44IDU5LjUtNTkuNXYtMzI3QzQ0NiA2MC44IDQxOS4yIDM0IDM4Ni41IDM0ek04Ny4xIDEyMC44aDk2djExNmw2MS44LTExNmgxMTAuOWwtODEuMiAxMzJIODcuMXYtMTMyem0xNjEuOCAyNzIuMWwtNjUuNy0xMTMuNnYxMTMuNmgtOTZWMjYyLjFoMTkxLjVsODguNiAxMzAuOEgyNDguOXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Korvue(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 446 512" {...props}>
            <path d="M386.5 34h-327C26.8 34 0 60.8 0 93.5v327.1C0 453.2 26.8 480 59.5 480h327.1c33 0 59.5-26.8 59.5-59.5v-327C446 60.8 419.2 34 386.5 34zM87.1 120.8h96v116l61.8-116h110.9l-81.2 132H87.1v-132zm161.8 272.1l-65.7-113.6v113.6h-96V262.1h191.5l88.6 130.8H248.9z" />
        </Icon>
    </>
}