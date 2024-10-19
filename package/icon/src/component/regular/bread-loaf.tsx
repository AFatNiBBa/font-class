
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=regular bread-loaf}
 * @preview ![bread-loaf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJIMjQwQzEwNy41IDMyIDAgMTAzLjYyNSAwIDE5MkMwIDIyNy4zNzUgMjYuODc1IDI1NiA2MCAyNTZINjRWNDQ4QzY0IDQ2NS42MjUgNzguMzc1IDQ4MCA5NiA0ODBINTQ0QzU2MS42MjUgNDgwIDU3NiA0NjUuNjI1IDU3NiA0NDhWMjU2SDU4MEM2MTMuMTI1IDI1NiA2NDAgMjI3LjM3NSA2NDAgMTkyQzY0MCAxMDMuNjI1IDUzMi41IDMyIDQwMCAzMlpNNDIwIDIwOEgzNjhWNDMySDExMlYyMDhINjBDNTQuMjUgMjA4IDQ4IDIwMS42MjUgNDggMTkyQzQ4IDEzMi4zNzUgMTM3Ljc1IDgwIDI0MCA4MFM0MzIgMTMyLjM3NSA0MzIgMTkyQzQzMiAyMDEuNjI1IDQyNS43NSAyMDggNDIwIDIwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BreadLoaf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M400 32H240C107.5 32 0 103.625 0 192C0 227.375 26.875 256 60 256H64V448C64 465.625 78.375 480 96 480H544C561.625 480 576 465.625 576 448V256H580C613.125 256 640 227.375 640 192C640 103.625 532.5 32 400 32ZM420 208H368V432H112V208H60C54.25 208 48 201.625 48 192C48 132.375 137.75 80 240 80S432 132.375 432 192C432 201.625 425.75 208 420 208Z" />
        </Icon>
    </>
}