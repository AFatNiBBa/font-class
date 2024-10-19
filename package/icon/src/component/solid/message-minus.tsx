
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-minus?s=solid message-minus}
 * @preview ![message-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk0VjM1MS45NzFDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNjBWNDk5Ljk1OUMxNjAgNTA5LjcwOSAxNzEuMjUgNTE1LjQ1OSAxNzkuMTI1IDUwOS43MDlMMzA0IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcxVjYzLjk5NEM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk0zMzYgMjMxLjk5OEgxNzZDMTYyLjczIDIzMS45OTggMTUyIDIyMS4yNTYgMTUyIDIwOEMxNTIgMTk0Ljc0MiAxNjIuNzM4IDE4NC4wMDIgMTc2IDE4NC4wMDJIMzM2QzM0OS4yNjIgMTg0LjAwMiAzNjAgMTk0Ljc0MiAzNjAgMjA4UzM0OS4yNjIgMjMxLjk5OCAzMzYgMjMxLjk5OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessageMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM336 231.998H176C162.73 231.998 152 221.256 152 208C152 194.742 162.738 184.002 176 184.002H336C349.262 184.002 360 194.742 360 208S349.262 231.998 336 231.998Z" />
        </Icon>
    </>
}