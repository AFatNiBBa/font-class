
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `prescription-bottle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=solid prescription-bottle}
 * @preview ![prescription-bottle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAxOTJIMTQ0QzE1Mi44MDEgMTkyIDE2MCAxOTkuMTk5IDE2MCAyMDhDMTYwIDIxNi43OTkgMTUyLjgwMSAyMjQgMTQ0IDIyNEgzMlYyODhIMTQ0QzE1Mi44MDEgMjg4IDE2MCAyOTUuMTk5IDE2MCAzMDRDMTYwIDMxMi43OTkgMTUyLjgwMSAzMjAgMTQ0IDMyMEgzMlYzODRIMTQ0QzE1Mi44MDEgMzg0IDE2MCAzOTEuMTk5IDE2MCA0MDBDMTYwIDQwOC43OTkgMTUyLjgwMSA0MTYgMTQ0IDQxNkgzMlY0NDhDMzIgNDgzLjE5OSA2MC44MDEgNTEyIDk2IDUxMkgyODhDMzIzLjE5OSA1MTIgMzUyIDQ4My4xOTkgMzUyIDQ0OFYxMjhIMzJWMTkyWk0zNjAgMEgyNEMxMC43NSAwIDAgMTAuNzUgMCAyNFY3MkMwIDg1LjI1IDEwLjc1IDk2IDI0IDk2SDM2MEMzNzMuMjUgOTYgMzg0IDg1LjI1IDM4NCA3MlYyNEMzODQgMTAuNzUgMzczLjI1IDAgMzYwIDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PrescriptionBottle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M32 192H144C152.801 192 160 199.199 160 208C160 216.799 152.801 224 144 224H32V288H144C152.801 288 160 295.199 160 304C160 312.799 152.801 320 144 320H32V384H144C152.801 384 160 391.199 160 400C160 408.799 152.801 416 144 416H32V448C32 483.199 60.801 512 96 512H288C323.199 512 352 483.199 352 448V128H32V192ZM360 0H24C10.75 0 0 10.75 0 24V72C0 85.25 10.75 96 24 96H360C373.25 96 384 85.25 384 72V24C384 10.75 373.25 0 360 0Z" />
        </Icon>
    </>
}