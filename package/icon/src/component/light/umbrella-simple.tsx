
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=light umbrella-simple}
 * @preview ![umbrella-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzIwQzI0Ny4xNTYgMzIwIDI0MCAzMjcuMTU2IDI0MCAzMzZWNDQ4QzI0MCA0NjUuNjU2IDIyNS42NTYgNDgwIDIwOCA0ODBTMTc2IDQ2NS42NTYgMTc2IDQ0OFY0MzJDMTc2IDQyMy4xNTYgMTY4Ljg0NCA0MTYgMTYwIDQxNlMxNDQgNDIzLjE1NiAxNDQgNDMyVjQ0OEMxNDQgNDgzLjI4MSAxNzIuNzE5IDUxMiAyMDggNTEyUzI3MiA0ODMuMjgxIDI3MiA0NDhWMzM2QzI3MiAzMjcuMTU2IDI2NC44NDQgMzIwIDI1NiAzMjBaTTI3MS44NDQgMzIuNzc3QzI3MS44NTcgMzIuNTA0IDI3MiAzMi4yNzUgMjcyIDMyVjE2QzI3MiA3LjE1NiAyNjQuODQ0IDAgMjU2IDBTMjQwIDcuMTU2IDI0MCAxNlYzMkMyNDAgMzIuMjc1IDI0MC4xNDMgMzIuNTA0IDI0MC4xNTYgMzIuNzc3QzEwNi4zODkgNDAuNzcgMCAxNDguNDMyIDAgMjgwQzAgMjg0LjQwNiAzLjU5NCAyODggOCAyODhINTA0QzUwOC40MDYgMjg4IDUxMiAyODQuNDA2IDUxMiAyODBDNTEyIDE0OC40MzIgNDA1LjYxMSA0MC43NyAyNzEuODQ0IDMyLjc3N1pNMzMuMzczIDI1NkM0NS43OTUgMTQ4LjE1MiAxNDAuODk4IDY0IDI1NiA2NFM0NjYuMjA1IDE0OC4xNTIgNDc4LjYyNyAyNTZIMzMuMzczWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UmbrellaSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 320C247.156 320 240 327.156 240 336V448C240 465.656 225.656 480 208 480S176 465.656 176 448V432C176 423.156 168.844 416 160 416S144 423.156 144 432V448C144 483.281 172.719 512 208 512S272 483.281 272 448V336C272 327.156 264.844 320 256 320ZM271.844 32.777C271.857 32.504 272 32.275 272 32V16C272 7.156 264.844 0 256 0S240 7.156 240 16V32C240 32.275 240.143 32.504 240.156 32.777C106.389 40.77 0 148.432 0 280C0 284.406 3.594 288 8 288H504C508.406 288 512 284.406 512 280C512 148.432 405.611 40.77 271.844 32.777ZM33.373 256C45.795 148.152 140.898 64 256 64S466.205 148.152 478.627 256H33.373Z" />
        </Icon>
    </>
}