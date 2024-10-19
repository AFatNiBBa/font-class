
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `briefcase-medical` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-medical?s=solid briefcase-medical}
 * @preview ![briefcase-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMzg0VjQ4QzM4NCAyMS41IDM2Mi41IDAgMzM2IDBIMTc2QzE0OS41IDAgMTI4IDIxLjUgMTI4IDQ4Vjk2SDQ4QzIxLjUgOTYgMCAxMTcuNSAwIDE0NFY0MzJDMCA0NTguNSAyMS41IDQ4MCA0OCA0ODBINDY0QzQ5MC41IDQ4MCA1MTIgNDU4LjUgNTEyIDQzMlYxNDRDNTEyIDExNy41IDQ5MC41IDk2IDQ2NCA5NlpNMTc2IDQ4SDMzNlY5NkgxNzZWNDhaTTM2OCAzMTRDMzY4IDMyMi44MzYgMzYwLjgzNiAzMzAgMzUyIDMzMEgyOThWMzg0QzI5OCAzOTIuODM2IDI5MC44MzYgNDAwIDI4MiA0MDBIMjMwQzIyMS4xNjQgNDAwIDIxNCAzOTIuODM2IDIxNCAzODRWMzMwSDE2MEMxNTEuMTY0IDMzMCAxNDQgMzIyLjgzNiAxNDQgMzE0VjI2MkMxNDQgMjUzLjE2MiAxNTEuMTY0IDI0NiAxNjAgMjQ2SDIxNFYxOTJDMjE0IDE4My4xNjIgMjIxLjE2NCAxNzYgMjMwIDE3NkgyODJDMjkwLjgzNiAxNzYgMjk4IDE4My4xNjIgMjk4IDE5MlYyNDZIMzUyQzM2MC44MzYgMjQ2IDM2OCAyNTMuMTYyIDM2OCAyNjJWMzE0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BriefcaseMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H384V48C384 21.5 362.5 0 336 0H176C149.5 0 128 21.5 128 48V96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM176 48H336V96H176V48ZM368 314C368 322.836 360.836 330 352 330H298V384C298 392.836 290.836 400 282 400H230C221.164 400 214 392.836 214 384V330H160C151.164 330 144 322.836 144 314V262C144 253.162 151.164 246 160 246H214V192C214 183.162 221.164 176 230 176H282C290.836 176 298 183.162 298 192V246H352C360.836 246 368 253.162 368 262V314Z" />
        </Icon>
    </>
}