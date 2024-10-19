
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-divide` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-divide?s=light square-divide}
 * @preview ![square-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTg0QzIzNy4yNTQgMTg0IDI0OCAxNzMuMjU0IDI0OCAxNjBDMjQ4IDE0Ni43NDQgMjM3LjI1NCAxMzYgMjI0IDEzNlMyMDAgMTQ2Ljc0NCAyMDAgMTYwQzIwMCAxNzMuMjU0IDIxMC43NDYgMTg0IDIyNCAxODRaTTIyNCAzMjhDMjEwLjc0NiAzMjggMjAwIDMzOC43NDQgMjAwIDM1MkMyMDAgMzY1LjI1NCAyMTAuNzQ2IDM3NiAyMjQgMzc2UzI0OCAzNjUuMjU0IDI0OCAzNTJDMjQ4IDMzOC43NDQgMjM3LjI1NCAzMjggMjI0IDMyOFpNMzIwIDI0MEgxMjhDMTE5LjE1NiAyNDAgMTEyIDI0Ny4xNTYgMTEyIDI1NlMxMTkuMTU2IDI3MiAxMjggMjcySDMyMEMzMjguODQ0IDI3MiAzMzYgMjY0Ljg0NCAzMzYgMjU2UzMyOC44NDQgMjQwIDMyMCAyNDBaTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0NiAzMiAzODQgMzJaTTQxNiA0MTZDNDE2IDQzMy42NDUgNDAxLjY0NSA0NDggMzg0IDQ0OEg2NEM0Ni4zNTUgNDQ4IDMyIDQzMy42NDUgMzIgNDE2Vjk2QzMyIDc4LjM1NSA0Ni4zNTUgNjQgNjQgNjRIMzg0QzQwMS42NDUgNjQgNDE2IDc4LjM1NSA0MTYgOTZWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareDivide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 184C237.254 184 248 173.254 248 160C248 146.744 237.254 136 224 136S200 146.744 200 160C200 173.254 210.746 184 224 184ZM224 328C210.746 328 200 338.744 200 352C200 365.254 210.746 376 224 376S248 365.254 248 352C248 338.744 237.254 328 224 328ZM320 240H128C119.156 240 112 247.156 112 256S119.156 272 128 272H320C328.844 272 336 264.844 336 256S328.844 240 320 240ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416Z" />
        </Icon>
    </>
}