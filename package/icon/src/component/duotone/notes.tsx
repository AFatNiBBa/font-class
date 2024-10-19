
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `notes` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=duotone notes}
 * @preview ![notes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzMiA5NkgxNDRDMTE3LjQ5IDk2IDk2IDExNy40OSA5NiAxNDRWNDMyQzk2IDQ1OC41MSAxMTcuNDkgNDgwIDE0NCA0ODBIMzg0VjM4NEg0ODBWMTQ0QzQ4MCAxMTcuNDkgNDU4LjUxIDk2IDQzMiA5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDM4NFY0ODBMNDgwIDM4NEgzODRaTTMzNiAwSDY0QzI4LjY1NCAwIDAgMjguNjU0IDAgNjRWMzM2QzAgMzYyLjUwOCAyMS40OSAzODQgNDggMzg0VjgwQzQ4IDYyLjMyOCA2Mi4zMjYgNDggODAgNDhIMzg0QzM4NCAyMS40OTIgMzYyLjUxIDAgMzM2IDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Notes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M432 96H144C117.49 96 96 117.49 96 144V432C96 458.51 117.49 480 144 480H384V384H480V144C480 117.49 458.51 96 432 96Z" />
            <path d="M384 384V480L480 384H384ZM336 0H64C28.654 0 0 28.654 0 64V336C0 362.508 21.49 384 48 384V80C48 62.328 62.326 48 80 48H384C384 21.492 362.51 0 336 0Z" />
        </Icon>
    </>
}