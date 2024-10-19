
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `memo` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=light memo}
 * @preview ![memo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMzIwSDgwQzcxLjE2NCAzMjAgNjQgMzI3LjE2NCA2NCAzMzZTNzEuMTY0IDM1MiA4MCAzNTJIMjA4QzIxNi44MzggMzUyIDIyNCAzNDQuODM2IDIyNCAzMzZTMjE2LjgzOCAzMjAgMjA4IDMyMFpNMzA0IDIyNEg4MEM3MS4xNjQgMjI0IDY0IDIzMS4xNjQgNjQgMjQwUzcxLjE2NCAyNTYgODAgMjU2SDMwNEMzMTIuODM4IDI1NiAzMjAgMjQ4LjgzNiAzMjAgMjQwUzMxMi44MzggMjI0IDMwNCAyMjRaTTMwNCAxMjhIODBDNzEuMTY0IDEyOCA2NCAxMzUuMTY0IDY0IDE0NFM3MS4xNjQgMTYwIDgwIDE2MEgzMDRDMzEyLjgzOCAxNjAgMzIwIDE1Mi44MzYgMzIwIDE0NFMzMTIuODM4IDEyOCAzMDQgMTI4Wk0zMjAgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzIwQzM1NS4zNDYgNTEyIDM4NCA0ODMuMzQ2IDM4NCA0NDhWNjRDMzg0IDI4LjY1MiAzNTUuMzQ2IDAgMzIwIDBaTTM1MiA0NDhDMzUyIDQ2NS42NDUgMzM3LjY0NSA0ODAgMzIwIDQ4MEg2NEM0Ni4zNTUgNDgwIDMyIDQ2NS42NDUgMzIgNDQ4VjY0QzMyIDQ2LjM1NSA0Ni4zNTUgMzIgNjQgMzJIMzIwQzMzNy42NDUgMzIgMzUyIDQ2LjM1NSAzNTIgNjRWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Memo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M208 320H80C71.164 320 64 327.164 64 336S71.164 352 80 352H208C216.838 352 224 344.836 224 336S216.838 320 208 320ZM304 224H80C71.164 224 64 231.164 64 240S71.164 256 80 256H304C312.838 256 320 248.836 320 240S312.838 224 304 224ZM304 128H80C71.164 128 64 135.164 64 144S71.164 160 80 160H304C312.838 160 320 152.836 320 144S312.838 128 304 128ZM320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.652 355.346 0 320 0ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H320C337.645 32 352 46.355 352 64V448Z" />
        </Icon>
    </>
}