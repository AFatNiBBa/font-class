
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=thin arrow-down-left}
 * @preview ![arrow-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOS45OTkgMTYwQzQ0LjQxOSAxNjAgNDcuOTk4IDE2My41OCA0Ny45OTggMTY3Ljk5OVYzODguNjg4TDMzOC4zNDUgOTguMzQxQzM0MS40NjEgOTUuMjI1IDM0Ni41MzIgOTUuMjE0IDM0OS42NTkgOTguMzQxUzM1Mi43NzUgMTA2LjUzOSAzNDkuNjU5IDEwOS42NTVMNTkuMzEyIDQwMC4wMDJIMjgwLjAwMUMyODQuNDIgNDAwLjAwMiAyODggNDAzLjU4MSAyODggNDA4LjAwMVMyODQuNDIgNDE2IDI4MC4wMDEgNDE2SDM5Ljk5OUMzNS41OCA0MTYgMzIgNDEyLjQyIDMyIDQwOC4wMDFWMTY3Ljk5OUMzMiAxNjMuNTc3IDM1LjU3NyAxNjAgMzkuOTk5IDE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowDownLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M39.999 160C44.419 160 47.998 163.58 47.998 167.999V388.688L338.345 98.341C341.461 95.225 346.532 95.214 349.659 98.341S352.775 106.539 349.659 109.655L59.312 400.002H280.001C284.42 400.002 288 403.581 288 408.001S284.42 416 280.001 416H39.999C35.58 416 32 412.42 32 408.001V167.999C32 163.577 35.577 160 39.999 160Z" />
        </Icon>
    </>
}