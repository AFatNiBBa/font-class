
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `box` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=solid box}
 * @preview ![box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuNjI1IDE1OC43NUwzOTEuMjUgNTMuODc1QzM4Ni44NzUgNDAuNzUgMzc0Ljc1IDMyIDM2MC44NzUgMzJIMjQwVjE2MEg0NDYuNzVDNDQ3LjEyNSAxNTkuNSA0NDcuMjUgMTU5LjI1IDQ0Ny42MjUgMTU4Ljc1Wk0wIDE5MlY0MzJDMCA0NTguNTEgMjEuNDkgNDgwIDQ4IDQ4MEg0MDBDNDI2LjUxIDQ4MCA0NDggNDU4LjUxIDQ0OCA0MzJWMTkySDBaTTIwOCAxNjBWMzJIODcuMTI1QzczLjI1IDMyIDYxLjEyNSA0MC43NSA1Ni43NSA1My44NzVMMC4zNzUgMTU4Ljc1QzAuNzUgMTU5LjI1IDAuODc1IDE1OS41IDEuMjUgMTYwSDIwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Box(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M447.625 158.75L391.25 53.875C386.875 40.75 374.75 32 360.875 32H240V160H446.75C447.125 159.5 447.25 159.25 447.625 158.75ZM0 192V432C0 458.51 21.49 480 48 480H400C426.51 480 448 458.51 448 432V192H0ZM208 160V32H87.125C73.25 32 61.125 40.75 56.75 53.875L0.375 158.75C0.75 159.25 0.875 159.5 1.25 160H208Z" />
        </Icon>
    </>
}