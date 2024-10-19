
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bitbucket` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bitbucket?s=brands bitbucket}
 * @preview ![bitbucket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMi4yIDMyQTE2IDE2IDAgMCAwIDYgNDcuOGEyNi4zNSAyNi4zNSAwIDAgMCAuMiAyLjhsNjcuOSA0MTIuMWEyMS43NyAyMS43NyAwIDAgMCAyMS4zIDE4LjJoMzI1LjdhMTYgMTYgMCAwIDAgMTYtMTMuNEw1MDUgNTAuN2ExNiAxNiAwIDAgMC0xMy4yLTE4LjMgMjQuNTggMjQuNTggMCAwIDAtMi44LS4yTDIyLjIgMzJ6bTI4NS45IDI5Ny44aC0xMDRsLTI4LjEtMTQ3aDE1Ny4zbC0yNS4yIDE0N3oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bitbucket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z" />
        </Icon>
    </>
}