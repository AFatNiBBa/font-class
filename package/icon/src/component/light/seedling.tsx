
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `seedling` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=light seedling}
 * @preview ![seedling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCA5NkgxNkM3LjE1NiA5NiAwIDEwMy4xNTYgMCAxMTJDMCAyMjYuNjg4IDkzLjMxMiAzMjAgMjA4IDMyMEgyNTZWNDY0QzI1NiA0NzIuODM2IDI2My4xNjQgNDgwIDI3MiA0ODBTMjg4IDQ3Mi44MzYgMjg4IDQ2NFYzMDRDMjg4IDE4OS4zMTIgMTk0LjY4OCA5NiA4MCA5NlpNMjA4IDI4OEMxMTYuMzQ0IDI4OCA0MC44MjggMjE3LjU5NCAzMi43MTkgMTI4SDgwQzE3MS42NTYgMTI4IDI0Ny4xNzIgMTk4LjQwNiAyNTUuMjgxIDI4OEgyMDhaTTQ5NiAzMkg0MzJDMzY1LjI1IDMyIDMwMi4wOTQgNjQuNDA2IDI2My4wNDcgMTE4LjY1NkMyNTcuODkxIDEyNS44MTIgMjU5LjUxNiAxMzUuODEyIDI2Ni42ODggMTQxQzI3My44MjggMTQ2LjEyNSAyODMuODQ0IDE0NC41IDI4OS4wMTYgMTM3LjM0NEMzMjIuMDc4IDkxLjQwNiAzNzUuNTE2IDY0IDQzMiA2NEg0NzkuMjY2QzQ3MS41MzEgMTQ3Ljc4MSA0MDMuNzgxIDIxNi4zNzUgMzE4LjY4OCAyMjMuNDA2QzMwOS44NzUgMjI0LjEyNSAzMDMuMzI4IDIzMS44NDQgMzA0LjA0NyAyNDAuNjU2QzMwNC43NSAyNDkuMDMxIDMxMS43MzQgMjU1LjM0NCAzMTkuOTg0IDI1NS4zNDRDMzIwLjQyMiAyNTUuMzQ0IDMyMC44NzUgMjU1LjMxMiAzMjEuMzEzIDI1NS4yODFDNDI4LjIzNCAyNDYuNDY5IDUxMiAxNTUuNDA2IDUxMiA0OEM1MTIgMzkuMTU2IDUwNC44NDQgMzIgNDk2IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Seedling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M80 96H16C7.156 96 0 103.156 0 112C0 226.688 93.312 320 208 320H256V464C256 472.836 263.164 480 272 480S288 472.836 288 464V304C288 189.312 194.688 96 80 96ZM208 288C116.344 288 40.828 217.594 32.719 128H80C171.656 128 247.172 198.406 255.281 288H208ZM496 32H432C365.25 32 302.094 64.406 263.047 118.656C257.891 125.812 259.516 135.812 266.688 141C273.828 146.125 283.844 144.5 289.016 137.344C322.078 91.406 375.516 64 432 64H479.266C471.531 147.781 403.781 216.375 318.688 223.406C309.875 224.125 303.328 231.844 304.047 240.656C304.75 249.031 311.734 255.344 319.984 255.344C320.422 255.344 320.875 255.312 321.313 255.281C428.234 246.469 512 155.406 512 48C512 39.156 504.844 32 496 32Z" />
        </Icon>
    </>
}