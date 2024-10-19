
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=thin arrow-up-right}
 * @preview ![arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQuMDAxIDM1MkMzMzkuNTgxIDM1MiAzMzYuMDAyIDM0OC40MiAzMzYuMDAyIDM0NC4wMDFWMTIzLjMxMkw0NS42NTUgNDEzLjY1OUM0Mi41MzkgNDE2Ljc3NSAzNy40NjggNDE2Ljc4NiAzNC4zNDEgNDEzLjY1OVMzMS4yMjUgNDA1LjQ2MSAzNC4zNDEgNDAyLjM0NUwzMjQuNjg4IDExMS45OThIMTAzLjk5OUM5OS41OCAxMTEuOTk4IDk2IDEwOC40MTkgOTYgMTAzLjk5OVM5OS41OCA5NiAxMDMuOTk5IDk2SDM0NC4wMDFDMzQ4LjQyIDk2IDM1MiA5OS41OCAzNTIgMTAzLjk5OVYzNDQuMDAxQzM1MiAzNDguNDIzIDM0OC40MjMgMzUyIDM0NC4wMDEgMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M344.001 352C339.581 352 336.002 348.42 336.002 344.001V123.312L45.655 413.659C42.539 416.775 37.468 416.786 34.341 413.659S31.225 405.461 34.341 402.345L324.688 111.998H103.999C99.58 111.998 96 108.419 96 103.999S99.58 96 103.999 96H344.001C348.42 96 352 99.58 352 103.999V344.001C352 348.423 348.423 352 344.001 352Z" />
        </Icon>
    </>
}