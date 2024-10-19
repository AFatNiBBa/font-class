
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-user` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=solid file-user}
 * @preview ![file-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0yMjQgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5MiAwIDQ4VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyNiAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNMTkyIDE5MkMyMjcuMzQ4IDE5MiAyNTYgMjIwLjY1NiAyNTYgMjU2UzIyNy4zNDggMzIwIDE5MiAzMjBDMTU2LjY1NiAzMjAgMTI4IDI5MS4zNDQgMTI4IDI1NlMxNTYuNjU2IDE5MiAxOTIgMTkyWk0zMDQgNDMyQzMwNCA0NDAuODM2IDI5Ni44MzYgNDQ4IDI4OCA0NDhIOTZDODcuMTY0IDQ0OCA4MCA0NDAuODM2IDgwIDQzMkM4MCAzODcuODEyIDExNS44MiAzNTIgMTYwIDM1MkgyMjRDMjY4LjE4NCAzNTIgMzA0IDM4Ny44MTIgMzA0IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M256 0V128H384L256 0ZM224 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V160H256C238.326 160 224 145.672 224 128ZM192 192C227.348 192 256 220.656 256 256S227.348 320 192 320C156.656 320 128 291.344 128 256S156.656 192 192 192ZM304 432C304 440.836 296.836 448 288 448H96C87.164 448 80 440.836 80 432C80 387.812 115.82 352 160 352H224C268.184 352 304 387.812 304 432Z" />
        </Icon>
    </>
}