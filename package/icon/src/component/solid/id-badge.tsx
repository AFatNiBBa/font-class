
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `id-badge` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=solid id-badge}
 * @preview ![id-badge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUxIDM4NCA0NjRWNDhDMzg0IDIxLjQ5IDM2Mi41MSAwIDMzNiAwWk0xOTIgMTYwQzIyNy4zNDYgMTYwIDI1NiAxODguNjU0IDI1NiAyMjRTMjI3LjM0NiAyODggMTkyIDI4OFMxMjggMjU5LjM0NiAxMjggMjI0UzE1Ni42NTQgMTYwIDE5MiAxNjBaTTI4OCA0MTZIOTZDODcuMTY0IDQxNiA4MCA0MDguODM2IDgwIDQwMEM4MCAzNTUuODE2IDExNS44MTYgMzIwIDE2MCAzMjBIMjI0QzI2OC4xODQgMzIwIDMwNCAzNTUuODE2IDMwNCA0MDBDMzA0IDQwOC44MzYgMjk2LjgzNiA0MTYgMjg4IDQxNlpNMjQwIDk2SDE0NEMxMzUuMTY0IDk2IDEyOCA4OC44MzYgMTI4IDgwUzEzNS4xNjQgNjQgMTQ0IDY0SDI0MEMyNDguODM2IDY0IDI1NiA3MS4xNjQgMjU2IDgwUzI0OC44MzYgOTYgMjQwIDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function IdBadge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V48C384 21.49 362.51 0 336 0ZM192 160C227.346 160 256 188.654 256 224S227.346 288 192 288S128 259.346 128 224S156.654 160 192 160ZM288 416H96C87.164 416 80 408.836 80 400C80 355.816 115.816 320 160 320H224C268.184 320 304 355.816 304 400C304 408.836 296.836 416 288 416ZM240 96H144C135.164 96 128 88.836 128 80S135.164 64 144 64H240C248.836 64 256 71.164 256 80S248.836 96 240 96Z" />
        </Icon>
    </>
}