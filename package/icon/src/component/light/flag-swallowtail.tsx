
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=light flag-swallowtail}
 * @preview ![flag-swallowtail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAuNTY0IDIwOEw1MDQuNDc3IDg0LjYxM0M1MTIuNDk0IDc1LjA5NCA1MTQuMjY0IDYxLjc4OSA1MDkuMDE0IDUwLjUwNFM0OTIuNDQ3IDMyIDQ4MCAzMkgzMlYxNkMzMiA3LjE2NCAyNC44MzYgMCAxNiAwUzAgNy4xNjQgMCAxNlY0OTZDMCA1MDQuODM2IDcuMTY0IDUxMiAxNiA1MTJTMzIgNTA0LjgzNiAzMiA0OTZWMzg0SDQ4MEM0OTIuNDQ3IDM4NCA1MDMuNzY0IDM3Ni43ODEgNTA5LjAxNCAzNjUuNDk2UzUxMi40OTQgMzQwLjkwNiA1MDQuNDc3IDMzMS4zODdMNDAwLjU2NCAyMDhaTTMyIDM1MlY2NEg0ODBMMzU4LjcyOSAyMDhMNDgwIDM1MkgzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FlagSwallowtail(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M400.564 208L504.477 84.613C512.494 75.094 514.264 61.789 509.014 50.504S492.447 32 480 32H32V16C32 7.164 24.836 0 16 0S0 7.164 0 16V496C0 504.836 7.164 512 16 512S32 504.836 32 496V384H480C492.447 384 503.764 376.781 509.014 365.496S512.494 340.906 504.477 331.387L400.564 208ZM32 352V64H480L358.729 208L480 352H32Z" />
        </Icon>
    </>
}