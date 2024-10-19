
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `laptop` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=solid laptop}
 * @preview ![laptop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggOTZINTEyVjM1Mkg1NzZWODBDNTc2IDUzLjYyNSA1NTQuMzc1IDMyIDUyOCAzMkgxMTJDODUuNjI1IDMyIDY0IDUzLjYyNSA2NCA4MFYzNTJIMTI4Vjk2Wk02MjQgMzg0SDE2QzcuMjUgMzg0IDAgMzkxLjI1IDAgNDAwVjQxNkMwIDQ1MS4yNSAyOC43NSA0ODAgNjQgNDgwSDU3NkM2MTEuMjUgNDgwIDY0MCA0NTEuMjUgNjQwIDQxNlY0MDBDNjQwIDM5MS4yNSA2MzIuNzUgMzg0IDYyNCAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Laptop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M128 96H512V352H576V80C576 53.625 554.375 32 528 32H112C85.625 32 64 53.625 64 80V352H128V96ZM624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384Z" />
        </Icon>
    </>
}