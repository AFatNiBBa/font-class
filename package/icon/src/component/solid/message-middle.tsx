
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=solid message-middle}
 * @preview ![message-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjMuOTk0VjM1MS45NzFDNTEyIDM4Ny4yMTkgNDgzLjI1IDQxNS45NjcgNDQ4IDQxNS45NjdIMzM2LjAyNUwyNjguODAxIDUwNS42QzI2Mi40IDUxNC4xMzMgMjQ5LjYgNTE0LjEzMyAyNDMuMTk5IDUwNS42TDE3NS45NzUgNDE1Ljk2N0g2NEMyOC43NSA0MTUuOTY3IDAgMzg3LjIxOSAwIDM1MS45NzFWNjMuOTk0QzAgMjguNzQ4IDI4Ljc1IDAgNjQgMEg0NDhDNDgzLjI1IDAgNTEyIDI4Ljc0OCA1MTIgNjMuOTk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageMiddle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 63.994V351.971C512 387.219 483.25 415.967 448 415.967H336.025L268.801 505.6C262.4 514.133 249.6 514.133 243.199 505.6L175.975 415.967H64C28.75 415.967 0 387.219 0 351.971V63.994C0 28.748 28.75 0 64 0H448C483.25 0 512 28.748 512 63.994Z" />
        </Icon>
    </>
}