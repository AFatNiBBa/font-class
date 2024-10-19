
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=thin ruler-vertical}
 * @preview ![ruler-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMEg0OEMyMS42IDAgMCAyMS42IDAgNDhWNDY0QzAgNDkwLjQgMjEuNiA1MTIgNDggNTEySDIwOEMyMzQuNCA1MTIgMjU2IDQ5MC40IDI1NiA0NjRWNDhDMjU2IDIxLjYgMjM0LjQgMCAyMDggMFpNMjQwIDEwNEgxNjBDMTU1LjU5NCAxMDQgMTUyIDEwNy41NzggMTUyIDExMlMxNTUuNTk0IDEyMCAxNjAgMTIwSDI0MFYyMDBIMTYwQzE1NS41OTQgMjAwIDE1MiAyMDMuNTc4IDE1MiAyMDhTMTU1LjU5NCAyMTYgMTYwIDIxNkgyNDBWMjk2SDE2MEMxNTUuNTk0IDI5NiAxNTIgMjk5LjU3OCAxNTIgMzA0UzE1NS41OTQgMzEyIDE2MCAzMTJIMjQwVjM5MkgxNjBDMTU1LjU5NCAzOTIgMTUyIDM5NS41NzggMTUyIDQwMFMxNTUuNTk0IDQwOCAxNjAgNDA4SDI0MFY0NjRDMjQwIDQ4MS42NDUgMjI1LjY0NSA0OTYgMjA4IDQ5Nkg0OEMzMC4zNTUgNDk2IDE2IDQ4MS42NDUgMTYgNDY0VjQ4QzE2IDMwLjM1NSAzMC4zNTUgMTYgNDggMTZIMjA4QzIyNS42NDUgMTYgMjQwIDMwLjM1NSAyNDAgNDhWMTA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RulerVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M208 0H48C21.6 0 0 21.6 0 48V464C0 490.4 21.6 512 48 512H208C234.4 512 256 490.4 256 464V48C256 21.6 234.4 0 208 0ZM240 104H160C155.594 104 152 107.578 152 112S155.594 120 160 120H240V200H160C155.594 200 152 203.578 152 208S155.594 216 160 216H240V296H160C155.594 296 152 299.578 152 304S155.594 312 160 312H240V392H160C155.594 392 152 395.578 152 400S155.594 408 160 408H240V464C240 481.645 225.645 496 208 496H48C30.355 496 16 481.645 16 464V48C16 30.355 30.355 16 48 16H208C225.645 16 240 30.355 240 48V104Z" />
        </Icon>
    </>
}