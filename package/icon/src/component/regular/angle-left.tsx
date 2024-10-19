
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `angle-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=regular angle-left}
 * @preview ![angle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjYuNTQ3IDQyNC41MDNMMjIuNTYyIDI3Mi41MDFDMTguMTg3IDI2Ny44NzYgMTYgMjYxLjkzOCAxNiAyNTYuMDAxQzE2IDI1MC4wNjMgMTguMTg4IDI0NC4xMjYgMjIuNTYyIDIzOS41MDFMMTY2LjU0NyA4Ny40OTlDMTc1LjY3MiA3Ny44NzQgMTkwLjg1OSA3Ny40NjggMjAwLjQ4IDg2LjU2MUMyMTAuMTY4IDk1LjY4NiAyMTAuNTEyIDExMC45MzYgMjAxLjQxOCAxMjAuNDk5TDczLjA1NSAyNTYuMDAxTDIwMS40MTggMzkxLjUwM0MyMTAuNTEyIDQwMS4wNjUgMjEwLjE2OCA0MTYuMjUzIDIwMC40OCA0MjUuNDRDMTkwLjg1OSA0MzQuNTM0IDE3NS42NzIgNDM0LjEyOCAxNjYuNTQ3IDQyNC41MDNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function AngleLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M166.547 424.503L22.562 272.501C18.187 267.876 16 261.938 16 256.001C16 250.063 18.188 244.126 22.562 239.501L166.547 87.499C175.672 77.874 190.859 77.468 200.48 86.561C210.168 95.686 210.512 110.936 201.418 120.499L73.055 256.001L201.418 391.503C210.512 401.065 210.168 416.253 200.48 425.44C190.859 434.534 175.672 434.128 166.547 424.503Z" />
        </Icon>
    </>
}