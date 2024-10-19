
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder-grid` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-grid?s=solid folder-grid}
 * @preview ![folder-grid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIwOCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwVjQzMkMwIDQ1OC41IDIxLjUgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUgNDgwIDUxMiA0NTguNSA1MTIgNDMyVjE0NEM1MTIgMTE3LjUgNDkwLjUgOTYgNDY0IDk2Wk0xNzYgMzIwQzE3NiAzMjguODM2IDE2OC44MzggMzM2IDE2MCAzMzZIOTZDODcuMTY0IDMzNiA4MCAzMjguODM2IDgwIDMyMFYyNTZDODAgMjQ3LjE2NCA4Ny4xNjQgMjQwIDk2IDI0MEgxNjBDMTY4LjgzOCAyNDAgMTc2IDI0Ny4xNjQgMTc2IDI1NlYzMjBaTTMwNCAzMjBDMzA0IDMyOC44MzYgMjk2LjgzOCAzMzYgMjg4IDMzNkgyMjRDMjE1LjE2NCAzMzYgMjA4IDMyOC44MzYgMjA4IDMyMFYyNTZDMjA4IDI0Ny4xNjQgMjE1LjE2NCAyNDAgMjI0IDI0MEgyODhDMjk2LjgzOCAyNDAgMzA0IDI0Ny4xNjQgMzA0IDI1NlYzMjBaTTQzMiAzMjBDNDMyIDMyOC44MzYgNDI0LjgzOCAzMzYgNDE2IDMzNkgzNTJDMzQzLjE2NCAzMzYgMzM2IDMyOC44MzYgMzM2IDMyMFYyNTZDMzM2IDI0Ny4xNjQgMzQzLjE2NCAyNDAgMzUyIDI0MEg0MTZDNDI0LjgzOCAyNDAgNDMyIDI0Ny4xNjQgNDMyIDI1NlYzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FolderGrid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM176 320C176 328.836 168.838 336 160 336H96C87.164 336 80 328.836 80 320V256C80 247.164 87.164 240 96 240H160C168.838 240 176 247.164 176 256V320ZM304 320C304 328.836 296.838 336 288 336H224C215.164 336 208 328.836 208 320V256C208 247.164 215.164 240 224 240H288C296.838 240 304 247.164 304 256V320ZM432 320C432 328.836 424.838 336 416 336H352C343.164 336 336 328.836 336 320V256C336 247.164 343.164 240 352 240H416C424.838 240 432 247.164 432 256V320Z" />
        </Icon>
    </>
}