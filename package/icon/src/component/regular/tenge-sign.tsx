
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tenge-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=regular tenge-sign}
 * @preview ![tenge-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNCA4MEgzNjBDMzczLjI1IDgwIDM4NCA2OS4yNSAzODQgNTZTMzczLjI1IDMyIDM2MCAzMkgyNEMxMC43NSAzMiAwIDQyLjc1IDAgNTZTMTAuNzUgODAgMjQgODBaTTM2MCAxNjBIMjRDMTAuNzUgMTYwIDAgMTcwLjc1IDAgMTg0UzEwLjc1IDIwOCAyNCAyMDhIMTY4VjQ1NkMxNjggNDY5LjI1IDE3OC43NSA0ODAgMTkyIDQ4MFMyMTYgNDY5LjI1IDIxNiA0NTZWMjA4SDM2MEMzNzMuMjUgMjA4IDM4NCAxOTcuMjUgMzg0IDE4NFMzNzMuMjUgMTYwIDM2MCAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TengeSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M24 80H360C373.25 80 384 69.25 384 56S373.25 32 360 32H24C10.75 32 0 42.75 0 56S10.75 80 24 80ZM360 160H24C10.75 160 0 170.75 0 184S10.75 208 24 208H168V456C168 469.25 178.75 480 192 480S216 469.25 216 456V208H360C373.25 208 384 197.25 384 184S373.25 160 360 160Z" />
        </Icon>
    </>
}