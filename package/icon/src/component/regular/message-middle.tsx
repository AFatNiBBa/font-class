
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-middle` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=regular message-middle}
 * @preview ![message-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk0VjM1MS45NzFDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNzUuOTc1TDI0My4xOTkgNTA1LjZDMjQ2LjQgNTA5Ljg2NyAyNTEuMTk5IDUxMiAyNTYgNTEyUzI2NS42IDUwOS44NjcgMjY4LjgwMSA1MDUuNkwzMzYuMDI1IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcxVjYzLjk5NEM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk00NjQgMzUxLjk3MUM0NjQgMzYwLjY0MSA0NTYuNjc0IDM2Ny45NjcgNDQ4IDM2Ny45NjdIMzEyLjAyNUwyNTYgNDQyLjY2OEwxOTkuOTc1IDM2Ny45NjdINjRDNTUuMzI2IDM2Ny45NjcgNDggMzYwLjY0MSA0OCAzNTEuOTcxVjYzLjk5NEM0OCA1NS4zMjQgNTUuMzI2IDQ4IDY0IDQ4SDQ0OEM0NTYuNjc0IDQ4IDQ2NCA1NS4zMjQgNDY0IDYzLjk5NFYzNTEuOTcxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageMiddle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H175.975L243.199 505.6C246.4 509.867 251.199 512 256 512S265.6 509.867 268.801 505.6L336.025 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM464 351.971C464 360.641 456.674 367.967 448 367.967H312.025L256 442.668L199.975 367.967H64C55.326 367.967 48 360.641 48 351.971V63.994C48 55.324 55.326 48 64 48H448C456.674 48 464 55.324 464 63.994V351.971Z" />
        </Icon>
    </>
}