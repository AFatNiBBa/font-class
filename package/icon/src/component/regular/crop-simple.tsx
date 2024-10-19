
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=regular crop-simple}
 * @preview ![crop-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggMzg0SDQzMlYxMjBDNDMyIDk3LjkzOCA0MTQuMDYyIDgwIDM5MiA4MEgxNjBWMTI4SDM4NFY0ODhDMzg0IDUwMS4yNSAzOTQuNzUgNTEyIDQwOCA1MTJTNDMyIDUwMS4yNSA0MzIgNDg4VjQzMkg0ODhDNTAxLjI1IDQzMiA1MTIgNDIxLjI1IDUxMiA0MDhTNTAxLjI1IDM4NCA0ODggMzg0Wk0xMjggMzg0VjI0QzEyOCAxMC43NSAxMTcuMjUgMCAxMDQgMFM4MCAxMC43NSA4MCAyNFY4MEgyNEMxMC43NSA4MCAwIDkwLjc1IDAgMTA0UzEwLjc1IDEyOCAyNCAxMjhIODBWMzkyQzgwIDQxNC4wNjIgOTcuOTM4IDQzMiAxMjAgNDMySDM1MlYzODRIMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CropSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M488 384H432V120C432 97.938 414.062 80 392 80H160V128H384V488C384 501.25 394.75 512 408 512S432 501.25 432 488V432H488C501.25 432 512 421.25 512 408S501.25 384 488 384ZM128 384V24C128 10.75 117.25 0 104 0S80 10.75 80 24V80H24C10.75 80 0 90.75 0 104S10.75 128 24 128H80V392C80 414.062 97.938 432 120 432H352V384H128Z" />
        </Icon>
    </>
}