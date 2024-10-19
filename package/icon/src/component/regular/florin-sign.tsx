
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `florin-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/florin-sign?s=regular florin-sign}
 * @preview ![florin-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNTZDMzg0IDY5LjI1IDM3My4yNSA4MCAzNjAgODBIMzA4Ljk4NEMyOTIuMTcyIDgwIDI3Ny4wNDcgOTAuNjI1IDI3MS4zNDQgMTA2LjQzOEwyMjYuMTQzIDIzMkgzMjhDMzQxLjI1IDIzMiAzNTIgMjQyLjc1IDM1MiAyNTZTMzQxLjI1IDI4MCAzMjggMjgwSDIwOC44NjNMMTU3LjgxMiA0MjEuODEyQzE0NS4yODEgNDU2LjYyNSAxMTIgNDgwIDc1LjAxNiA0ODBIMjRDMTAuNzUgNDgwIDAgNDY5LjI1IDAgNDU2UzEwLjc1IDQzMiAyNCA0MzJINzUuMDE2QzkxLjgyOCA0MzIgMTA2Ljk1MyA0MjEuMzc1IDExMi42NTYgNDA1LjU2MkwxNTcuODU3IDI4MEg1NkM0Mi43NSAyODAgMzIgMjY5LjI1IDMyIDI1NlM0Mi43NSAyMzIgNTYgMjMySDE3NS4xMzdMMjI2LjE4OCA5MC4xODhDMjM4LjcxOSA1NS4zNzUgMjcyIDMyIDMwOC45ODQgMzJIMzYwQzM3My4yNSAzMiAzODQgNDIuNzUgMzg0IDU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FlorinSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 56C384 69.25 373.25 80 360 80H308.984C292.172 80 277.047 90.625 271.344 106.438L226.143 232H328C341.25 232 352 242.75 352 256S341.25 280 328 280H208.863L157.812 421.812C145.281 456.625 112 480 75.016 480H24C10.75 480 0 469.25 0 456S10.75 432 24 432H75.016C91.828 432 106.953 421.375 112.656 405.562L157.857 280H56C42.75 280 32 269.25 32 256S42.75 232 56 232H175.137L226.188 90.188C238.719 55.375 272 32 308.984 32H360C373.25 32 384 42.75 384 56Z" />
        </Icon>
    </>
}