
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=thin arrow-up-left}
 * @preview ![arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzNDQuMDAxVjEwMy45OTlDMzIgOTkuNTggMzUuNTggOTYgMzkuOTk5IDk2SDI4MC4wMDFDMjg0LjQyIDk2IDI4OCA5OS41OCAyODggMTAzLjk5OVMyODQuNDIgMTExLjk5OCAyODAuMDAxIDExMS45OThINTkuMzEyTDM0OS42NTkgNDAyLjM0NUMzNTIuNzc1IDQwNS40NjEgMzUyLjc4NiA0MTAuNTMyIDM0OS42NTkgNDEzLjY1OVMzNDEuNDYxIDQxNi43NzUgMzM4LjM0NSA0MTMuNjU5TDQ3Ljk5OCAxMjMuMzEyVjM0NC4wMDFDNDcuOTk4IDM0OC40MiA0NC40MTkgMzUyIDM5Ljk5OSAzNTJDMzUuNTc3IDM1MiAzMiAzNDguNDIzIDMyIDM0NC4wMDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowUpLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M32 344.001V103.999C32 99.58 35.58 96 39.999 96H280.001C284.42 96 288 99.58 288 103.999S284.42 111.998 280.001 111.998H59.312L349.659 402.345C352.775 405.461 352.786 410.532 349.659 413.659S341.461 416.775 338.345 413.659L47.998 123.312V344.001C47.998 348.42 44.419 352 39.999 352C35.577 352 32 348.423 32 344.001Z" />
        </Icon>
    </>
}