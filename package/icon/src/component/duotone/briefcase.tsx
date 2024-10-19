
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=duotone briefcase}
 * @preview ![briefcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCAzMzZDMzIwIDM0NC44NDQgMzEyLjg0NCAzNTIgMzA0IDM1MkgyMDhDMTk5LjE1NiAzNTIgMTkyIDM0NC44NDQgMTkyIDMzNlYyODhIMFY0MzJDMCA0NTcuNTk0IDIyLjQwNiA0ODAgNDggNDgwSDQ2NEM0ODkuNTk0IDQ4MCA1MTIgNDU3LjU5NCA1MTIgNDMyVjI4OEgzMjBWMzM2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NjQgOTZIMzg0VjQ4QzM4NCAyMi40MDYgMzYxLjU5NCAwIDMzNiAwSDE3NkMxNTAuNDA2IDAgMTI4IDIyLjQwNiAxMjggNDhWOTZINDhDMjIuNDA2IDk2IDAgMTE4LjQwNiAwIDE0NFYyODhINTEyVjE0NEM1MTIgMTE4LjQwNiA0ODkuNTk0IDk2IDQ2NCA5NlpNMzM2IDk2SDE3NlY0OEgzMzZWOTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Briefcase(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M320 336C320 344.844 312.844 352 304 352H208C199.156 352 192 344.844 192 336V288H0V432C0 457.594 22.406 480 48 480H464C489.594 480 512 457.594 512 432V288H320V336Z" />
            <path d="M464 96H384V48C384 22.406 361.594 0 336 0H176C150.406 0 128 22.406 128 48V96H48C22.406 96 0 118.406 0 144V288H512V144C512 118.406 489.594 96 464 96ZM336 96H176V48H336V96Z" />
        </Icon>
    </>
}