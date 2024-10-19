
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=duotone suitcase}
 * @preview ![suitcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDQ4MEgxMjhWOTZINjRWNDgwWk0zODQgOTZWNDgwSDQ0OFY5NkgzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTAgMTQ0VjQzMkMwIDQ1Ny41OTQgMjIuNDA2IDQ4MCA0OCA0ODBINjRWOTZINDhDMjIuNDA2IDk2IDAgMTE4LjQwNiAwIDE0NFpNNDY0IDk2SDQ0OFY0ODBINDY0QzQ4OS41OTQgNDgwIDUxMiA0NTcuNTk0IDUxMiA0MzJWMTQ0QzUxMiAxMTguNDA2IDQ4OS41OTQgOTYgNDY0IDk2Wk0zMzYgMEgxNzZDMTUwLjQwNiAwIDEyOCAyMi40MDYgMTI4IDQ4VjQ4MEgzODRWNDhDMzg0IDIyLjQwNiAzNjEuNTk0IDAgMzM2IDBaTTMzNiA5NkgxNzZWNDhIMzM2Vjk2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Suitcase(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M64 480H128V96H64V480ZM384 96V480H448V96H384Z" />
            <path d="M0 144V432C0 457.594 22.406 480 48 480H64V96H48C22.406 96 0 118.406 0 144ZM464 96H448V480H464C489.594 480 512 457.594 512 432V144C512 118.406 489.594 96 464 96ZM336 0H176C150.406 0 128 22.406 128 48V480H384V48C384 22.406 361.594 0 336 0ZM336 96H176V48H336V96Z" />
        </Icon>
    </>
}