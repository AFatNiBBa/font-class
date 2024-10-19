
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stop` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=light stop}
 * @preview ![stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNjRINjRDMjguNjU0IDY0IDAgOTIuNjUyIDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhIMzIwQzM1NS4zNDYgNDQ4IDM4NCA0MTkuMzQ2IDM4NCAzODRWMTI4QzM4NCA5Mi42NTIgMzU1LjM0NiA2NCAzMjAgNjRaTTM1MiAzODRDMzUyIDQwMS42NDUgMzM3LjY0NSA0MTYgMzIwIDQxNkg2NEM0Ni4zNTUgNDE2IDMyIDQwMS42NDUgMzIgMzg0VjEyOEMzMiAxMTAuMzU1IDQ2LjM1NSA5NiA2NCA5NkgzMjBDMzM3LjY0NSA5NiAzNTIgMTEwLjM1NSAzNTIgMTI4VjM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Stop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 64H64C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 64 448H320C355.346 448 384 419.346 384 384V128C384 92.652 355.346 64 320 64ZM352 384C352 401.645 337.645 416 320 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H320C337.645 96 352 110.355 352 128V384Z" />
        </Icon>
    </>
}