
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `truck-front` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-front?s=solid truck-front}
 * @preview ![truck-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCAwQzI4LjY1NCAwIDAgMjguNjU0IDAgNjRWMzY4QzAgMzkxLjYyOSAxMi45NTMgNDEyLjAzNyAzMiA0MjMuMTIzVjQ4MEMzMiA0OTcuNjczIDQ2LjMyNyA1MTIgNjQgNTEySDk2QzExMy42NzMgNTEyIDEyOCA0OTcuNjczIDEyOCA0ODBWNDMySDM4NFY0ODBDMzg0IDQ5Ny42NzMgMzk4LjMyNyA1MTIgNDE2IDUxMkg0NDhDNDY1LjY3MyA1MTIgNDgwIDQ5Ny42NzMgNDgwIDQ4MFY0MjMuMTIzQzQ5OS4wNDcgNDEyLjAzNyA1MTIgMzkxLjYyOSA1MTIgMzY4VjY0QzUxMiAyOC42NTQgNDgzLjM0NiAwIDQ0OCAwSDY0Wk05NiAzNTJDNzguMzI4IDM1MiA2NCAzMzcuNjcyIDY0IDMyMEM2NCAzMDIuMzI2IDc4LjMyOCAyODggOTYgMjg4UzEyOCAzMDIuMzI2IDEyOCAzMjBDMTI4IDMzNy42NzIgMTEzLjY3MiAzNTIgOTYgMzUyWk0xMTAuMTI5IDIyNEwxMzQuODM2IDE0OS44ODFDMTM5LjE5NSAxMzYuNzkzIDE1MS4zOTggMTI4IDE2NS4xOTUgMTI4SDM0Ni44MDVDMzYwLjYwMiAxMjggMzcyLjgwNSAxMzYuNzkzIDM3Ny4xNjQgMTQ5Ljg4MUw0MDEuODcxIDIyNEgxMTAuMTI5Wk00MTYgMzUyQzM5OC4zMjggMzUyIDM4NCAzMzcuNjcyIDM4NCAzMjBDMzg0IDMwMi4zMjYgMzk4LjMyOCAyODggNDE2IDI4OFM0NDggMzAyLjMyNiA0NDggMzIwQzQ0OCAzMzcuNjcyIDQzMy42NzIgMzUyIDQxNiAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TruckFront(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M64 0C28.654 0 0 28.654 0 64V368C0 391.629 12.953 412.037 32 423.123V480C32 497.673 46.327 512 64 512H96C113.673 512 128 497.673 128 480V432H384V480C384 497.673 398.327 512 416 512H448C465.673 512 480 497.673 480 480V423.123C499.047 412.037 512 391.629 512 368V64C512 28.654 483.346 0 448 0H64ZM96 352C78.328 352 64 337.672 64 320C64 302.326 78.328 288 96 288S128 302.326 128 320C128 337.672 113.672 352 96 352ZM110.129 224L134.836 149.881C139.195 136.793 151.398 128 165.195 128H346.805C360.602 128 372.805 136.793 377.164 149.881L401.871 224H110.129ZM416 352C398.328 352 384 337.672 384 320C384 302.326 398.328 288 416 288S448 302.326 448 320C448 337.672 433.672 352 416 352Z" />
        </Icon>
    </>
}