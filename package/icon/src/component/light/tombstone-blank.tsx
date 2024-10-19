
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tombstone-blank` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=light tombstone-blank}
 * @preview ![tombstone-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCA0NDhDNTYuODQ0IDQ0OCA2NCA0NDAuODQ0IDY0IDQzMlYxOTJDNjQgMTAzLjc4MSAxMzUuNzgxIDMyIDIyNCAzMlMzODQgMTAzLjc4MSAzODQgMTkyVjQzMkMzODQgNDQwLjg0NCAzOTEuMTU2IDQ0OCA0MDAgNDQ4UzQxNiA0NDAuODQ0IDQxNiA0MzJWMTkyQzQxNiA4Ni4xMjUgMzI5Ljg3NSAwIDIyNCAwUzMyIDg2LjEyNSAzMiAxOTJWNDMyQzMyIDQ0MC44NDQgMzkuMTU2IDQ0OCA0OCA0NDhaTTQzMiA0ODBIMTZDNy4xNjQgNDgwIDAgNDg3LjE2MiAwIDQ5NkMwIDUwNC44MzYgNy4xNjQgNTEyIDE2IDUxMkg0MzJDNDQwLjgzNiA1MTIgNDQ4IDUwNC44MzYgNDQ4IDQ5NkM0NDggNDg3LjE2MiA0NDAuODM2IDQ4MCA0MzIgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TombstoneBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M48 448C56.844 448 64 440.844 64 432V192C64 103.781 135.781 32 224 32S384 103.781 384 192V432C384 440.844 391.156 448 400 448S416 440.844 416 432V192C416 86.125 329.875 0 224 0S32 86.125 32 192V432C32 440.844 39.156 448 48 448ZM432 480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H432C440.836 512 448 504.836 448 496C448 487.162 440.836 480 432 480Z" />
        </Icon>
    </>
}