
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=brands font-awesome}
 * @preview ![font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNDhWMzg0QzM4NSA0MDcgMzY2IDQxNiAzMjkgNDE2QzI2NiA0MTYgMjQyIDM4NCAxNzkgMzg0QzE1OSAzODQgMTQzIDM4OCAxMjggMzkyVjMyOEMxNDMgMzI0IDE1OSAzMjAgMTc5IDMyMEMyNDIgMzIwIDI2NiAzNTIgMzI5IDM1MkMzNDkgMzUyIDM2NCAzNDkgMzg0IDM0M1YxMzVDMzY0IDE0MSAzNDkgMTQ0IDMyOSAxNDRDMjY2IDE0NCAyNDIgMTEyIDE3OSAxMTJDMTI4IDExMiAxMDQgMTMzIDY0IDE0MVY0NDhDNjQgNDY2IDUwIDQ4MCAzMiA0ODBTMCA0NjYgMCA0NDhWNjRDMCA0NiAxNCAzMiAzMiAzMlM2NCA0NiA2NCA2NFY3N0MxMDQgNjkgMTI4IDQ4IDE3OSA0OEMyNDIgNDggMjY2IDgwIDMyOSA4MEMzNjYgODAgMzg1IDcxIDQ0OCA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
const FontAwesome: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 48V384C385 407 366 416 329 416C266 416 242 384 179 384C159 384 143 388 128 392V328C143 324 159 320 179 320C242 320 266 352 329 352C349 352 364 349 384 343V135C364 141 349 144 329 144C266 144 242 112 179 112C128 112 104 133 64 141V448C64 466 50 480 32 480S0 466 0 448V64C0 46 14 32 32 32S64 46 64 64V77C104 69 128 48 179 48C242 48 266 80 329 80C366 80 385 71 448 48Z" />
    </Icon>
);

export default FontAwesome;