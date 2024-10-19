
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-plus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-plus?s=thin message-plus}
 * @preview ![message-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk0VjM1MS45NzFDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNjBWNDk5Ljk1OUMxNjAgNTA3LjAzMSAxNjUuOTIyIDUxMiAxNzIuMTggNTEyQzE3NC41NDcgNTEyIDE3Ni45NjEgNTExLjI4NyAxNzkuMTI1IDUwOS43MDlMMzA0IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcxVjYzLjk5NEM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk00OTYgMzUxLjk3MUM0OTYgMzc4LjQzNiA0NzQuNDY5IDM5OS45NjcgNDQ4IDM5OS45NjdIMjk4LjY2NEwyOTQuMzk1IDQwMy4xNzJMMTc2IDQ5Mi4wNTNWMzk5Ljk2N0g2NEMzNy41MzEgMzk5Ljk2NyAxNiAzNzguNDM2IDE2IDM1MS45NzFWNjMuOTk0QzE2IDM3LjUyOSAzNy41MzEgMTUuOTk4IDY0IDE1Ljk5OEg0NDhDNDc0LjQ2OSAxNS45OTggNDk2IDM3LjUyOSA0OTYgNjMuOTk0VjM1MS45NzFaTTM0NCAyMDBIMjY0VjEyMEMyNjQgMTE1LjU4IDI2MC40MjIgMTEyIDI1NiAxMTJTMjQ4IDExNS41OCAyNDggMTIwVjIwMEgxNjhDMTYzLjU3OCAyMDAgMTYwIDIwMy41OCAxNjAgMjA4QzE2MCAyMTIuNDIyIDE2My41NzggMjE2IDE2OCAyMTZIMjQ4VjI5NkMyNDggMzAwLjQyMiAyNTEuNTc4IDMwNCAyNTYgMzA0UzI2NCAzMDAuNDIgMjY0IDI5NlYyMTZIMzQ0QzM0OC40MjIgMjE2IDM1MiAyMTIuNDIgMzUyIDIwOFMzNDguNDIyIDIwMCAzNDQgMjAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessagePlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.922 512 172.18 512C174.547 512 176.961 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.469 399.967 448 399.967H298.664L294.395 403.172L176 492.053V399.967H64C37.531 399.967 16 378.436 16 351.971V63.994C16 37.529 37.531 15.998 64 15.998H448C474.469 15.998 496 37.529 496 63.994V351.971ZM344 200H264V120C264 115.58 260.422 112 256 112S248 115.58 248 120V200H168C163.578 200 160 203.58 160 208C160 212.422 163.578 216 168 216H248V296C248 300.422 251.578 304 256 304S264 300.42 264 296V216H344C348.422 216 352 212.42 352 208S348.422 200 344 200Z" />
        </Icon>
    </>
}