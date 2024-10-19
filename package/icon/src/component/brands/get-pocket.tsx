
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `get-pocket` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/get-pocket?s=brands get-pocket}
 * @preview ![get-pocket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDcuNiA2NGgtMzY3QzE4LjUgNjQgMCA4Mi41IDAgMTA0LjZ2MTM1LjJDMCAzNjQuNSA5OS43IDQ2NCAyMjQuMiA0NjRjMTI0IDAgMjIzLjgtOTkuNSAyMjMuOC0yMjQuMlYxMDQuNmMwLTIyLjQtMTcuNy00MC42LTQwLjQtNDAuNnptLTE2MiAyNjguNWMtMTIuNCAxMS44LTMxLjQgMTEuMS00Mi40IDBDODkuNSAyMjMuNiA4OC4zIDIyNy40IDg4LjMgMjA5LjNjMC0xNi45IDEzLjgtMzAuNyAzMC43LTMwLjcgMTcgMCAxNi4xIDMuOCAxMDUuMiA4OS4zIDkwLjYtODYuOSA4OC42LTg5LjMgMTA1LjUtODkuMyAxNi45IDAgMzAuNyAxMy44IDMwLjcgMzAuNyAwIDE3LjgtMi45IDE1LjctMTE0LjggMTIzLjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function GetPocket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z" />
        </Icon>
    </>
}