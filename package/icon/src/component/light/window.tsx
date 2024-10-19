
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=light window}
 * @preview ![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0OCAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDggNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDQ0OEM0NjUuNjQ1IDY0IDQ4MCA3OC4zNTUgNDgwIDk2VjQxNlpNOTYgMTA0QzgyLjc0NiAxMDQgNzIgMTE0Ljc0MiA3MiAxMjhDNzIgMTQxLjI1NCA4Mi43NDYgMTUyIDk2IDE1MlMxMjAgMTQxLjI1NCAxMjAgMTI4QzEyMCAxMTQuNzQyIDEwOS4yNTQgMTA0IDk2IDEwNFpNMTkyIDEwNEMxNzguNzQ2IDEwNCAxNjggMTE0Ljc0MiAxNjggMTI4QzE2OCAxNDEuMjU0IDE3OC43NDYgMTUyIDE5MiAxNTJTMjE2IDE0MS4yNTQgMjE2IDEyOEMyMTYgMTE0Ljc0MiAyMDUuMjU0IDEwNCAxOTIgMTA0Wk0yODggMTA0QzI3NC43NDYgMTA0IDI2NCAxMTQuNzQyIDI2NCAxMjhDMjY0IDE0MS4yNTQgMjc0Ljc0NiAxNTIgMjg4IDE1MlMzMTIgMTQxLjI1NCAzMTIgMTI4QzMxMiAxMTQuNzQyIDMwMS4yNTQgMTA0IDI4OCAxMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Window(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H448C483.346 480 512 451.348 512 416V96C512 60.652 483.346 32 448 32ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V416ZM96 104C82.746 104 72 114.742 72 128C72 141.254 82.746 152 96 152S120 141.254 120 128C120 114.742 109.254 104 96 104ZM192 104C178.746 104 168 114.742 168 128C168 141.254 178.746 152 192 152S216 141.254 216 128C216 114.742 205.254 104 192 104ZM288 104C274.746 104 264 114.742 264 128C264 141.254 274.746 152 288 152S312 141.254 312 128C312 114.742 301.254 104 288 104Z" />
        </Icon>
    </>
}