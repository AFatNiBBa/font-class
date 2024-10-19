
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-h` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=duotone circle-h}
 * @preview ![circle-h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzY4IDM2MEMzNjggMzczLjI1IDM1Ny4yNSAzODQgMzQ0IDM4NFMzMjAgMzczLjI1IDMyMCAzNjBWMjgwSDE5MlYzNjBDMTkyIDM3My4yNSAxODEuMjUgMzg0IDE2OCAzODRTMTQ0IDM3My4yNSAxNDQgMzYwVjE1MkMxNDQgMTM4Ljc1IDE1NC43NSAxMjggMTY4IDEyOFMxOTIgMTM4Ljc1IDE5MiAxNTJWMjMySDMyMFYxNTJDMzIwIDEzOC43NSAzMzAuNzUgMTI4IDM0NCAxMjhTMzY4IDEzOC43NSAzNjggMTUyVjM2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzQ0IDEyOEMzMzAuNzUgMTI4IDMyMCAxMzguNzUgMzIwIDE1MlYyMzJIMTkyVjE1MkMxOTIgMTM4Ljc1IDE4MS4yNSAxMjggMTY4IDEyOFMxNDQgMTM4Ljc1IDE0NCAxNTJWMzYwQzE0NCAzNzMuMjUgMTU0Ljc1IDM4NCAxNjggMzg0UzE5MiAzNzMuMjUgMTkyIDM2MFYyODBIMzIwVjM2MEMzMjAgMzczLjI1IDMzMC43NSAzODQgMzQ0IDM4NFMzNjggMzczLjI1IDM2OCAzNjBWMTUyQzM2OCAxMzguNzUgMzU3LjI1IDEyOCAzNDQgMTI4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleH(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM368 360C368 373.25 357.25 384 344 384S320 373.25 320 360V280H192V360C192 373.25 181.25 384 168 384S144 373.25 144 360V152C144 138.75 154.75 128 168 128S192 138.75 192 152V232H320V152C320 138.75 330.75 128 344 128S368 138.75 368 152V360Z" />
            <path d="M344 128C330.75 128 320 138.75 320 152V232H192V152C192 138.75 181.25 128 168 128S144 138.75 144 152V360C144 373.25 154.75 384 168 384S192 373.25 192 360V280H320V360C320 373.25 330.75 384 344 384S368 373.25 368 360V152C368 138.75 357.25 128 344 128Z" />
        </Icon>
    </>
}