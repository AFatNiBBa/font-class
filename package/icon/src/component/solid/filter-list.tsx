
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `filter-list` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=solid filter-list}
 * @preview ![filter-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMjI0SDM1MkMzMzQuMzI2IDIyNCAzMjAgMjM4LjMyNiAzMjAgMjU2QzMyMCAyNzMuNjcyIDMzNC4zMjYgMjg4IDM1MiAyODhINDgwQzQ5Ny42NzQgMjg4IDUxMiAyNzMuNjcyIDUxMiAyNTZDNTEyIDIzOC4zMjYgNDk3LjY3NCAyMjQgNDgwIDIyNFpNNDgwIDM4NEgzNTJDMzM0LjMyNiAzODQgMzIwIDM5OC4zMjYgMzIwIDQxNkMzMjAgNDMzLjY3MiAzMzQuMzI2IDQ0OCAzNTIgNDQ4SDQ4MEM0OTcuNjc0IDQ0OCA1MTIgNDMzLjY3MiA1MTIgNDE2QzUxMiAzOTguMzI2IDQ5Ny42NzQgMzg0IDQ4MCAzODRaTTQ0OCAxMjhINDgwQzQ5Ny42NzQgMTI4IDUxMiAxMTMuNjcyIDUxMiA5NkM1MTIgNzguMzI2IDQ5Ny42NzQgNjQgNDgwIDY0SDQ0OEM0MzAuMzI2IDY0IDQxNiA3OC4zMjYgNDE2IDk2QzQxNiAxMTMuNjcyIDQzMC4zMjYgMTI4IDQ0OCAxMjhaTTMyOS41MTggNjRIMjIuNDgyQzMuNTgyIDY0IC02Ljg1IDg1LjUgNS4wNyA5OS44NzdMMTI4IDI0NC42MzVWMzg4QzEyOCAzOTMuODcxIDEzMC44NTkgMzk5LjM3OSAxMzUuNjg5IDQwMi43NDJMMTk1LjY4NyA0NDQuNzNDMjA3LjUyMyA0NTMuMDE2IDIyNCA0NDQuNjI1IDIyNCA0MjkuOTg2VjI0NC42MzVMMzQ2LjkzIDk5Ljg3N0MzNTguODUgODUuNSAzNDguNDE2IDY0IDMyOS41MTggNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FilterList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 224H352C334.326 224 320 238.326 320 256C320 273.672 334.326 288 352 288H480C497.674 288 512 273.672 512 256C512 238.326 497.674 224 480 224ZM480 384H352C334.326 384 320 398.326 320 416C320 433.672 334.326 448 352 448H480C497.674 448 512 433.672 512 416C512 398.326 497.674 384 480 384ZM448 128H480C497.674 128 512 113.672 512 96C512 78.326 497.674 64 480 64H448C430.326 64 416 78.326 416 96C416 113.672 430.326 128 448 128ZM329.518 64H22.482C3.582 64 -6.85 85.5 5.07 99.877L128 244.635V388C128 393.871 130.859 399.379 135.689 402.742L195.687 444.73C207.523 453.016 224 444.625 224 429.986V244.635L346.93 99.877C358.85 85.5 348.416 64 329.518 64Z" />
        </Icon>
    </>
}