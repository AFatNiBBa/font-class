
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `table-list` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=regular table-list}
 * @preview ![table-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk00NjQgOTZWMTY4SDE4NFY4MEg0NDhDNDU2LjgyMiA4MCA0NjQgODcuMTc4IDQ2NCA5NlpNMTg0IDIxNkg0NjRWMjk2SDE4NFYyMTZaTTEzNiAyOTZINDhWMjE2SDEzNlYyOTZaTTY0IDgwSDEzNlYxNjhINDhWOTZDNDggODcuMTc4IDU1LjE3OCA4MCA2NCA4MFpNNDggNDE2VjM0NEgxMzZWNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyMiA0OCA0MTZaTTQ0OCA0MzJIMTg0VjM0NEg0NjRWNDE2QzQ2NCA0MjQuODIyIDQ1Ni44MjIgNDMyIDQ0OCA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TableList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM464 96V168H184V80H448C456.822 80 464 87.178 464 96ZM184 216H464V296H184V216ZM136 296H48V216H136V296ZM64 80H136V168H48V96C48 87.178 55.178 80 64 80ZM48 416V344H136V432H64C55.178 432 48 424.822 48 416ZM448 432H184V344H464V416C464 424.822 456.822 432 448 432Z" />
        </Icon>
    </>
}