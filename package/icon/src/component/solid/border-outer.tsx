
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-outer` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=solid border-outer}
 * @preview ![border-outer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMjg4SDI0MEMyNDguODc1IDI4OCAyNTYgMjgwLjg3NSAyNTYgMjcyVjI0MEMyNTYgMjMxLjEyNSAyNDguODc1IDIyNCAyNDAgMjI0SDIwOEMxOTkuMTI1IDIyNCAxOTIgMjMxLjEyNSAxOTIgMjQwVjI3MkMxOTIgMjgwLjg3NSAxOTkuMTI1IDI4OCAyMDggMjg4Wk0zMDQgMjg4SDMzNkMzNDQuODc1IDI4OCAzNTIgMjgwLjg3NSAzNTIgMjcyVjI0MEMzNTIgMjMxLjEyNSAzNDQuODc1IDIyNCAzMzYgMjI0SDMwNEMyOTUuMTI1IDIyNCAyODggMjMxLjEyNSAyODggMjQwVjI3MkMyODggMjgwLjg3NSAyOTUuMTI1IDI4OCAzMDQgMjg4Wk0xMTIgMjg4SDE0NEMxNTIuODc1IDI4OCAxNjAgMjgwLjg3NSAxNjAgMjcyVjI0MEMxNjAgMjMxLjEyNSAxNTIuODc1IDIyNCAxNDQgMjI0SDExMkMxMDMuMTI1IDIyNCA5NiAyMzEuMTI1IDk2IDI0MFYyNzJDOTYgMjgwLjg3NSAxMDMuMTI1IDI4OCAxMTIgMjg4Wk0yMDggMzg0SDI0MEMyNDguODc1IDM4NCAyNTYgMzc2Ljg3NSAyNTYgMzY4VjMzNkMyNTYgMzI3LjEyNSAyNDguODc1IDMyMCAyNDAgMzIwSDIwOEMxOTkuMTI1IDMyMCAxOTIgMzI3LjEyNSAxOTIgMzM2VjM2OEMxOTIgMzc2Ljg3NSAxOTkuMTI1IDM4NCAyMDggMzg0Wk0yMDggMTkySDI0MEMyNDguODc1IDE5MiAyNTYgMTg0Ljg3NSAyNTYgMTc2VjE0NEMyNTYgMTM1LjEyNSAyNDguODc1IDEyOCAyNDAgMTI4SDIwOEMxOTkuMTI1IDEyOCAxOTIgMTM1LjEyNSAxOTIgMTQ0VjE3NkMxOTIgMTg0Ljg3NSAxOTkuMTI1IDE5MiAyMDggMTkyWk0zODQgMzJINjRDMjguOCAzMiAwIDYwLjggMCA5NlY0MTZDMCA0NTEuMiAyOC44IDQ4MCA2NCA0ODBIMzg0QzQxOS4yIDQ4MCA0NDggNDUxLjIgNDQ4IDQxNlY5NkM0NDggNjAuOCA0MTkuMiAzMiAzODQgMzJaTTM4NCA0MTZINjRWOTZIMzg0VjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BorderOuter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M208 288H240C248.875 288 256 280.875 256 272V240C256 231.125 248.875 224 240 224H208C199.125 224 192 231.125 192 240V272C192 280.875 199.125 288 208 288ZM304 288H336C344.875 288 352 280.875 352 272V240C352 231.125 344.875 224 336 224H304C295.125 224 288 231.125 288 240V272C288 280.875 295.125 288 304 288ZM112 288H144C152.875 288 160 280.875 160 272V240C160 231.125 152.875 224 144 224H112C103.125 224 96 231.125 96 240V272C96 280.875 103.125 288 112 288ZM208 384H240C248.875 384 256 376.875 256 368V336C256 327.125 248.875 320 240 320H208C199.125 320 192 327.125 192 336V368C192 376.875 199.125 384 208 384ZM208 192H240C248.875 192 256 184.875 256 176V144C256 135.125 248.875 128 240 128H208C199.125 128 192 135.125 192 144V176C192 184.875 199.125 192 208 192ZM384 32H64C28.8 32 0 60.8 0 96V416C0 451.2 28.8 480 64 480H384C419.2 480 448 451.2 448 416V96C448 60.8 419.2 32 384 32ZM384 416H64V96H384V416Z" />
        </Icon>
    </>
}