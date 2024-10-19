
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `angle-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=solid angle-right}
 * @preview ![angle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03Mi4wMDEgNDQ4QzYyLjEyNiA0NDggNTIuMjIgNDQ0LjM3NSA0NC40ODUgNDM3LjAzMkMyOC40NTQgNDIxLjg0NiAyNy43NjcgMzk2LjUzNiA0Mi45NyAzODAuNTA2TDE2MC45MDcgMjU2LjAxN0w0Mi45NyAxMzEuNTI4QzI3Ljc2NyAxMTUuNDk4IDI4LjQ1NCA5MC4xODggNDQuNDg1IDc1LjAwMkM2MC41MDEgNTkuNzUzIDg1LjgxMyA2MC40NDEgMTAxLjAzMiA3Ni41MzNMMjQ1LjAzMSAyMjguNTJDMjU5LjY1NiAyNDMuOTI0IDI1OS42NTYgMjY4LjExIDI0NS4wMzEgMjgzLjUxNUwxMDEuMDMyIDQzNS41MDFDOTMuMTczIDQ0My44MTMgODIuNTk0IDQ0OCA3Mi4wMDEgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AngleRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M72.001 448C62.126 448 52.22 444.375 44.485 437.032C28.454 421.846 27.767 396.536 42.97 380.506L160.907 256.017L42.97 131.528C27.767 115.498 28.454 90.188 44.485 75.002C60.501 59.753 85.813 60.441 101.032 76.533L245.031 228.52C259.656 243.924 259.656 268.11 245.031 283.515L101.032 435.501C93.173 443.813 82.594 448 72.001 448Z" />
        </Icon>
    </>
}