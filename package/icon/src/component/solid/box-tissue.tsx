
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `box-tissue` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-tissue?s=solid box-tissue}
 * @preview ![box-tissue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjg4TDQ0OCA5NkgzMzguNTk2QzMwOC4zODEgOTYgMjgxLjU1NSA3Ni42NjQgMjcyIDQ4QzI2Mi40NDUgMTkuMzM0IDIzNS42MTkgMCAyMDUuNDA0IDBINjRMMTI4IDI4OEgzODRaTTAgNDgwQzAgNDk3LjY3MiAxNC4zMjYgNTEyIDMyIDUxMkg0ODBDNDk3LjY3NCA1MTIgNTEyIDQ5Ny42NzIgNTEyIDQ4MFY0MTZIMFY0ODBaTTQ4MCAyMjRINDM5LjA2NEw0MTcuNzMgMjg4SDQzMkM0NDAuODM2IDI4OCA0NDggMjk1LjE2NCA0NDggMzA0UzQ0MC44MzYgMzIwIDQzMiAzMjBIODBDNzEuMTY0IDMyMCA2NCAzMTIuODM2IDY0IDMwNFM3MS4xNjQgMjg4IDgwIDI4OEg5NS4yMTlMODAuOTk2IDIyNEgzMkMxNC4zMjYgMjI0IDAgMjM4LjMyNiAwIDI1NlYzODRINTEyVjI1NkM1MTIgMjM4LjMyNiA0OTcuNjc0IDIyNCA0ODAgMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BoxTissue(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M384 288L448 96H338.596C308.381 96 281.555 76.664 272 48C262.445 19.334 235.619 0 205.404 0H64L128 288H384ZM0 480C0 497.672 14.326 512 32 512H480C497.674 512 512 497.672 512 480V416H0V480ZM480 224H439.064L417.73 288H432C440.836 288 448 295.164 448 304S440.836 320 432 320H80C71.164 320 64 312.836 64 304S71.164 288 80 288H95.219L80.996 224H32C14.326 224 0 238.326 0 256V384H512V256C512 238.326 497.674 224 480 224Z" />
        </Icon>
    </>
}