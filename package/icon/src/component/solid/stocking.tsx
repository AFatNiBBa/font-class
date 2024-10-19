
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stocking` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=solid stocking}
 * @preview ![stocking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05Ni4wMDcgMjUxLjVMNTcuMDA4IDI3Ny41Qy0xLjc0IDMxNi43NSAtMTcuNzQgMzk2LjI1IDIxLjUwOSA0NTVDNDYuMjU4IDQ5MiA4Ni43NTcgNTEyIDEyOC4xMzEgNTEyQzE1Mi41MDYgNTEyIDE3Ny4yNTUgNTA1IDE5OS4wMDUgNDkwLjVMMjgwLjc1MyA0MzZDMzI1LjI1MSA0MDYuMjUgMzUxLjg3NiAzNTYuNSAzNTEuODc2IDMwMi44NzVWMTI4SDk2LjAwN1YyNTEuNVpNMzUyLjAwMSAwSDk2LjAwN0M3OC40MDggMCA2NC4wMDggMTQuNCA2NC4wMDggMzJWNjRDNjQuMDA4IDgxLjYgNzguNDA4IDk2IDk2LjAwNyA5NkgzNTIuMDAxQzM2OS42IDk2IDM4NCA4MS42IDM4NCA2NFYzMkMzODQgMTQuNCAzNjkuNiAwIDM1Mi4wMDEgMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Stocking(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M96.007 251.5L57.008 277.5C-1.74 316.75 -17.74 396.25 21.509 455C46.258 492 86.757 512 128.131 512C152.506 512 177.255 505 199.005 490.5L280.753 436C325.251 406.25 351.876 356.5 351.876 302.875V128H96.007V251.5ZM352.001 0H96.007C78.408 0 64.008 14.4 64.008 32V64C64.008 81.6 78.408 96 96.007 96H352.001C369.6 96 384 81.6 384 64V32C384 14.4 369.6 0 352.001 0Z" />
        </Icon>
    </>
}