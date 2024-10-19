
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `notes-medical` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/notes-medical?s=solid notes-medical}
 * @preview ![notes-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDhIODBDNjIuMzI2IDQ4IDQ4IDYyLjMyOCA0OCA4MFYzODRDMjEuNDkgMzg0IDAgMzYyLjUwOCAwIDMzNlY2NEMwIDI4LjY1NCAyOC42NTQgMCA2NCAwSDMzNkMzNjIuNTEgMCAzODQgMjEuNDkyIDM4NCA0OFpNNDgwIDE0NFYzODRMMzg0IDQ4MEgxNDRDMTE3LjQ5IDQ4MCA5NiA0NTguNTA4IDk2IDQzMlYxNDRDOTYgMTE3LjQ5MiAxMTcuNDkgOTYgMTQ0IDk2SDQzMkM0NTguNTEgOTYgNDgwIDExNy40OTIgNDgwIDE0NFpNMzg0IDI2NEMzODQgMjU5LjYyNSAzODAuMzc1IDI1NiAzNzYgMjU2SDMyMFYyMDBDMzIwIDE5NS42MjUgMzE2LjM3NSAxOTIgMzEyIDE5MkgyNjRDMjU5LjYyNSAxOTIgMjU2IDE5NS42MjUgMjU2IDIwMFYyNTZIMjAwQzE5NS42MjUgMjU2IDE5MiAyNTkuNjI1IDE5MiAyNjRWMzEyQzE5MiAzMTYuMzc1IDE5NS42MjUgMzIwIDIwMCAzMjBIMjU2VjM3NkMyNTYgMzgwLjM3NSAyNTkuNjI1IDM4NCAyNjQgMzg0SDMxMkMzMTYuMzc1IDM4NCAzMjAgMzgwLjM3NSAzMjAgMzc2VjMyMEgzNzZDMzgwLjM3NSAzMjAgMzg0IDMxNi4zNzUgMzg0IDMxMlYyNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function NotesMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M384 48H80C62.326 48 48 62.328 48 80V384C21.49 384 0 362.508 0 336V64C0 28.654 28.654 0 64 0H336C362.51 0 384 21.492 384 48ZM480 144V384L384 480H144C117.49 480 96 458.508 96 432V144C96 117.492 117.49 96 144 96H432C458.51 96 480 117.492 480 144ZM384 264C384 259.625 380.375 256 376 256H320V200C320 195.625 316.375 192 312 192H264C259.625 192 256 195.625 256 200V256H200C195.625 256 192 259.625 192 264V312C192 316.375 195.625 320 200 320H256V376C256 380.375 259.625 384 264 384H312C316.375 384 320 380.375 320 376V320H376C380.375 320 384 316.375 384 312V264Z" />
        </Icon>
    </>
}