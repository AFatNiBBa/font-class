
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `venus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/venus?s=solid venus}
 * @preview ![venus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTc2QzM2OCA3OC43OTcgMjg5LjIwMyAwIDE5MiAwQzk0Ljc5OSAwIDE2IDc4Ljc5NyAxNiAxNzZDMTYgMjYyLjI1OCA3OC4xIDMzMy44ODcgMTYwIDM0OC45NTNWMzg0SDExMkMxMDMuMTY0IDM4NCA5NiAzOTEuMTYyIDk2IDQwMFY0MzJDOTYgNDQwLjgzNiAxMDMuMTY0IDQ0OCAxMTIgNDQ4SDE2MFY0OTZDMTYwIDUwNC44MzYgMTY3LjE2NCA1MTIgMTc2IDUxMkgyMDhDMjE2LjgzOCA1MTIgMjI0IDUwNC44MzYgMjI0IDQ5NlY0NDhIMjcyQzI4MC44MzggNDQ4IDI4OCA0NDAuODM2IDI4OCA0MzJWNDAwQzI4OCAzOTEuMTYyIDI4MC44MzggMzg0IDI3MiAzODRIMjI0VjM0OC45NTNDMzA1LjkwMiAzMzMuODg3IDM2OCAyNjIuMjU4IDM2OCAxNzZaTTE5MiAyNzJDMTM5LjA2NiAyNzIgOTYgMjI4LjkzNCA5NiAxNzZDOTYgMTIzLjA2NCAxMzkuMDY2IDgwIDE5MiA4MEMyNDQuOTM2IDgwIDI4OCAxMjMuMDY0IDI4OCAxNzZDMjg4IDIyOC45MzQgMjQ0LjkzNiAyNzIgMTkyIDI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Venus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 176C368 78.797 289.203 0 192 0C94.799 0 16 78.797 16 176C16 262.258 78.1 333.887 160 348.953V384H112C103.164 384 96 391.162 96 400V432C96 440.836 103.164 448 112 448H160V496C160 504.836 167.164 512 176 512H208C216.838 512 224 504.836 224 496V448H272C280.838 448 288 440.836 288 432V400C288 391.162 280.838 384 272 384H224V348.953C305.902 333.887 368 262.258 368 176ZM192 272C139.066 272 96 228.934 96 176C96 123.064 139.066 80 192 80C244.936 80 288 123.064 288 176C288 228.934 244.936 272 192 272Z" />
        </Icon>
    </>
}