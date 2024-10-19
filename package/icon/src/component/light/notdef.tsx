
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `notdef` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=light notdef}
 * @preview ![notdef](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUxIDM4NCA0NjRWNDhDMzg0IDIxLjQ5IDM2Mi41MSAwIDMzNiAwWk0zNTIgNTkuNTM1VjQ1Mi40NjVMMjExLjY2OCAyNTZMMzUyIDU5LjUzNVpNMTkyIDIyOC40NjVMNTEuNjY4IDMySDMzMi4zMzJMMTkyIDIyOC40NjVaTTE3Mi4zMzIgMjU2TDMyIDQ1Mi40NjVWNTkuNTM1TDE3Mi4zMzIgMjU2Wk0xOTIgMjgzLjUzNUwzMzIuMzMyIDQ4MEg1MS42NjhMMTkyIDI4My41MzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Notdef(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V48C384 21.49 362.51 0 336 0ZM352 59.535V452.465L211.668 256L352 59.535ZM192 228.465L51.668 32H332.332L192 228.465ZM172.332 256L32 452.465V59.535L172.332 256ZM192 283.535L332.332 480H51.668L192 283.535Z" />
        </Icon>
    </>
}