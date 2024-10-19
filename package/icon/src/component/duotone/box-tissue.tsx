
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `box-tissue` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-tissue?s=duotone box-tissue}
 * @preview ![box-tissue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAyNTZWMzg0SDBWMjU2QzAgMjM4LjMyNiAxNC4zMjYgMjI0IDMyIDIyNEgxMDguODAxTDEyMS42IDI4OEg4MEM3MS4xNjQgMjg4IDY0IDI5NS4xNjQgNjQgMzA0UzcxLjE2NCAzMjAgODAgMzIwSDQzMkM0NDAuODM2IDMyMCA0NDggMzEyLjgzNiA0NDggMzA0UzQ0MC44MzYgMjg4IDQzMiAyODhIMzkzLjE0M0w0MTEuNDI4IDIyNEg0ODBDNDk3LjY3NCAyMjQgNTEyIDIzOC4zMjYgNTEyIDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMCAzODRWNDgwQzAgNDk3LjY3MiAxNC4zMjYgNTEyIDMyIDUxMkg0ODBDNDk3LjY3NCA1MTIgNTEyIDQ5Ny42NzIgNTEyIDQ4MFYzODRIMFpNMzg0IDMyMEw0NDggOTZIMzM4LjU5NkMzMDguMzgxIDk2IDI4MS41NTUgNzYuNjY0IDI3MiA0OEMyNjIuNDQ1IDE5LjMzNCAyMzUuNjE5IDAgMjA1LjQwNCAwSDY0TDEyOCAzMjBIMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BoxTissue(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512 256V384H0V256C0 238.326 14.326 224 32 224H108.801L121.6 288H80C71.164 288 64 295.164 64 304S71.164 320 80 320H432C440.836 320 448 312.836 448 304S440.836 288 432 288H393.143L411.428 224H480C497.674 224 512 238.326 512 256Z" />
            <path d="M0 384V480C0 497.672 14.326 512 32 512H480C497.674 512 512 497.672 512 480V384H0ZM384 320L448 96H338.596C308.381 96 281.555 76.664 272 48C262.445 19.334 235.619 0 205.404 0H64L128 320H384Z" />
        </Icon>
    </>
}