
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `code-fork` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=thin code-fork}
 * @preview ![code-fork](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNjRDNDQ4IDI4LjY1NCA0MTkuMzQ2IDAgMzg0IDBTMzIwIDI4LjY1NCAzMjAgNjRDMzIwIDk2LjYwNSAzNDQuNDc1IDEyMy4yMTcgMzc2IDEyNy4xOTNWMTkyQzM3NiAyMjEuNjI1IDMzNS43NSAyNDggMzA0IDI0OEgxMjhDOTcuMTI1IDI0OCA3MiAyMjIuODc1IDcyIDE5MlYxMjcuMTkzQzEwMy41MjUgMTIzLjIxNyAxMjggOTYuNjA1IDEyOCA2NEMxMjggMjguNjU0IDk5LjM0NiAwIDY0IDBTMCAyOC42NTQgMCA2NEMwIDk2LjYwNSAyNC40NzUgMTIzLjIxNyA1NiAxMjcuMTkzVjE5MkM1NiAyMzEuNjg4IDg4LjMxMiAyNjQgMTI4IDI2NEgyMTZWMzg0LjgwN0MxODQuNDc1IDM4OC43ODMgMTYwIDQxNS4zOTUgMTYwIDQ0OEMxNjAgNDgzLjM0NiAxODguNjU0IDUxMiAyMjQgNTEyUzI4OCA0ODMuMzQ2IDI4OCA0NDhDMjg4IDQxNS4zOTUgMjYzLjUyNSAzODguNzgzIDIzMiAzODQuODA3VjI2NEgzMDRDMzQzLjg0NCAyNjQgMzkyIDIzMS44NzUgMzkyIDE5MlYxMjcuMTkzQzQyMy41MjUgMTIzLjIxNyA0NDggOTYuNjA1IDQ0OCA2NFpNMTYgNjRDMTYgMzcuNTMzIDM3LjUzMyAxNiA2NCAxNlMxMTIgMzcuNTMzIDExMiA2NFM5MC40NjcgMTEyIDY0IDExMlMxNiA5MC40NjcgMTYgNjRaTTI3MiA0NDhDMjcyIDQ3NC40NjcgMjUwLjQ2NyA0OTYgMjI0IDQ5NlMxNzYgNDc0LjQ2NyAxNzYgNDQ4UzE5Ny41MzMgNDAwIDIyNCA0MDBTMjcyIDQyMS41MzMgMjcyIDQ0OFpNMzg0IDExMkMzNTcuNTMzIDExMiAzMzYgOTAuNDY3IDMzNiA2NFMzNTcuNTMzIDE2IDM4NCAxNlM0MzIgMzcuNTMzIDQzMiA2NFM0MTAuNDY3IDExMiAzODQgMTEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CodeFork(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 64C448 28.654 419.346 0 384 0S320 28.654 320 64C320 96.605 344.475 123.217 376 127.193V192C376 221.625 335.75 248 304 248H128C97.125 248 72 222.875 72 192V127.193C103.525 123.217 128 96.605 128 64C128 28.654 99.346 0 64 0S0 28.654 0 64C0 96.605 24.475 123.217 56 127.193V192C56 231.688 88.312 264 128 264H216V384.807C184.475 388.783 160 415.395 160 448C160 483.346 188.654 512 224 512S288 483.346 288 448C288 415.395 263.525 388.783 232 384.807V264H304C343.844 264 392 231.875 392 192V127.193C423.525 123.217 448 96.605 448 64ZM16 64C16 37.533 37.533 16 64 16S112 37.533 112 64S90.467 112 64 112S16 90.467 16 64ZM272 448C272 474.467 250.467 496 224 496S176 474.467 176 448S197.533 400 224 400S272 421.533 272 448ZM384 112C357.533 112 336 90.467 336 64S357.533 16 384 16S432 37.533 432 64S410.467 112 384 112Z" />
        </Icon>
    </>
}