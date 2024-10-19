
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `notes` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=solid notes}
 * @preview ![notes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDgwTDQ4MCAzODRIMzg0VjQ4MFpNMzM2IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFYzMzZDMCAzNjIuNTA4IDIxLjQ5IDM4NCA0OCAzODRWODBDNDggNjIuMzI4IDYyLjMyNiA0OCA4MCA0OEgzODRDMzg0IDIxLjQ5MiAzNjIuNTEgMCAzMzYgMFpNNDMyIDk2SDE0NEMxMTcuNDkgOTYgOTYgMTE3LjQ5MiA5NiAxNDRWNDMyQzk2IDQ1OC41MDggMTE3LjQ5IDQ4MCAxNDQgNDgwSDM1MlYzODRDMzUyIDM2Ni4zOTggMzY2LjQgMzUyIDM4NCAzNTJINDgwVjE0NEM0ODAgMTE3LjQ5MiA0NTguNTEgOTYgNDMyIDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Notes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M384 480L480 384H384V480ZM336 0H64C28.654 0 0 28.654 0 64V336C0 362.508 21.49 384 48 384V80C48 62.328 62.326 48 80 48H384C384 21.492 362.51 0 336 0ZM432 96H144C117.49 96 96 117.492 96 144V432C96 458.508 117.49 480 144 480H352V384C352 366.398 366.4 352 384 352H480V144C480 117.492 458.51 96 432 96Z" />
        </Icon>
    </>
}