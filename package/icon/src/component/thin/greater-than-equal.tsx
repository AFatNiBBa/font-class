
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `greater-than-equal` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=thin greater-than-equal}
 * @preview ![greater-than-equal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDAgNDM5Ljk5OEg4QzMuNTk0IDQzOS45OTggMCA0NDMuNTkyIDAgNDQ3Ljk5OVMzLjU5NCA0NTYgOCA0NTZINDQwQzQ0NC40MDYgNDU2IDQ0OCA0NTIuNDA2IDQ0OCA0NDcuOTk5UzQ0NC40MDYgNDM5Ljk5OCA0NDAgNDM5Ljk5OFpNNTYuNTYyIDMyMi45NTJDNTcuODEyIDMyNi4wNzggNjAuODEyIDMyNy45ODQgNjQgMzI3Ljk4NEM2NSAzMjcuOTg0IDY1Ljk5OSAzMjcuNzk3IDY2Ljk2OSAzMjcuNDIyTDM4Ni45NjkgMTk5LjQwNkMzODkuOTk5IDE5OC4xODcgMzkyIDE5NS4yNDkgMzkyIDE5MS45NjhDMzkyIDE4OC42ODYgMzg5Ljk5OSAxODUuNzQ4IDM4Ni45NjkgMTg0LjUyOUw2Ni45NjkgNTYuNTE0QzYyLjkzOCA1NS4wMTMgNTguMjE5IDU2Ljg4OSA1Ni41NjIgNjAuOTgzQzU0LjkzOCA2NS4wNzcgNTYuOTM4IDY5LjczNCA2MS4wMzEgNzEuMzlMMzYyLjQ2OSAxOTEuOTY4TDYxLjAzMSAzMTIuNTQ1QzU2LjkzOCAzMTQuMjAxIDU0LjkzOCAzMTguODU4IDU2LjU2MiAzMjIuOTUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GreaterThanEqual(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M440 439.998H8C3.594 439.998 0 443.592 0 447.999S3.594 456 8 456H440C444.406 456 448 452.406 448 447.999S444.406 439.998 440 439.998ZM56.562 322.952C57.812 326.078 60.812 327.984 64 327.984C65 327.984 65.999 327.797 66.969 327.422L386.969 199.406C389.999 198.187 392 195.249 392 191.968C392 188.686 389.999 185.748 386.969 184.529L66.969 56.514C62.938 55.013 58.219 56.889 56.562 60.983C54.938 65.077 56.938 69.734 61.031 71.39L362.469 191.968L61.031 312.545C56.938 314.201 54.938 318.858 56.562 322.952Z" />
        </Icon>
    </>
}