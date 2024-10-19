
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-small` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=thin circle-small}
 * @preview ![circle-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgOTZDNzEuNjM1IDk2IDAgMTY3LjYzMyAwIDI1NkMwIDM0NC4zNjUgNzEuNjM1IDQxNiAxNjAgNDE2QzI0OC4zNjcgNDE2IDMyMCAzNDQuMzY1IDMyMCAyNTZDMzIwIDE2Ny42MzMgMjQ4LjM2NyA5NiAxNjAgOTZaTTE2MCA0MDBDODAuNTk4IDQwMCAxNiAzMzUuNDAyIDE2IDI1NlM4MC41OTggMTEyIDE2MCAxMTJTMzA0IDE3Ni41OTggMzA0IDI1NlMyMzkuNDAyIDQwMCAxNjAgNDAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleSmall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M160 96C71.635 96 0 167.633 0 256C0 344.365 71.635 416 160 416C248.367 416 320 344.365 320 256C320 167.633 248.367 96 160 96ZM160 400C80.598 400 16 335.402 16 256S80.598 112 160 112S304 176.598 304 256S239.402 400 160 400Z" />
        </Icon>
    </>
}