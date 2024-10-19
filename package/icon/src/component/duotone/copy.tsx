
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=duotone copy}
 * @preview ![copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA5NlYzMzZDNTEyIDM2Mi41MDggNDkwLjUxIDM4NCA0NjQgMzg0SDI3MkMyNDUuNDkgMzg0IDIyNCAzNjIuNTA4IDIyNCAzMzZWNDhDMjI0IDIxLjQ5MiAyNDUuNDkgMCAyNzIgMEg0MTZWOTZINTEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xOTIgMzUyVjEyOEg0OEMyMS40OSAxMjggMCAxNDkuNDkyIDAgMTc2VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkgyNDBDMjY2LjUxIDUxMiAyODggNDkwLjUwOCAyODggNDY0VjQxNkgyNTZDMjIwLjY1MiA0MTYgMTkyIDM4Ny4zNDQgMTkyIDM1MlpNNDE2IDBWOTZINTEyTDQxNiAwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Copy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512 96V336C512 362.508 490.51 384 464 384H272C245.49 384 224 362.508 224 336V48C224 21.492 245.49 0 272 0H416V96H512Z" />
            <path d="M192 352V128H48C21.49 128 0 149.492 0 176V464C0 490.508 21.49 512 48 512H240C266.51 512 288 490.508 288 464V416H256C220.652 416 192 387.344 192 352ZM416 0V96H512L416 0Z" />
        </Icon>
    </>
}