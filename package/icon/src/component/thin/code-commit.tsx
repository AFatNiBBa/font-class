
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `code-commit` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=thin code-commit}
 * @preview ![code-commit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIgMjQ4SDQ1NS4xOTFDNDUwLjk1NyAxNzYuNzg1IDM5Mi4yNDYgMTIwIDMyMCAxMjBTMTg5LjA0MyAxNzYuNzg1IDE4NC44MDkgMjQ4SDhDMy41NzggMjQ4IDAgMjUxLjU5NCAwIDI1NlMzLjU3OCAyNjQgOCAyNjRIMTg0LjgwOUMxODkuMDQzIDMzNS4yMTUgMjQ3Ljc1NCAzOTIgMzIwIDM5MlM0NTAuOTU3IDMzNS4yMTUgNDU1LjE5MSAyNjRINjMyQzYzNi40MjIgMjY0IDY0MCAyNjAuNDA2IDY0MCAyNTZTNjM2LjQyMiAyNDggNjMyIDI0OFpNMzIwIDM3NkMyNTMuODI4IDM3NiAyMDAgMzIyLjE1NiAyMDAgMjU2UzI1My44MjggMTM2IDMyMCAxMzZTNDQwIDE4OS44NDQgNDQwIDI1NlMzODYuMTcyIDM3NiAzMjAgMzc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CodeCommit(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632 248H455.191C450.957 176.785 392.246 120 320 120S189.043 176.785 184.809 248H8C3.578 248 0 251.594 0 256S3.578 264 8 264H184.809C189.043 335.215 247.754 392 320 392S450.957 335.215 455.191 264H632C636.422 264 640 260.406 640 256S636.422 248 632 248ZM320 376C253.828 376 200 322.156 200 256S253.828 136 320 136S440 189.844 440 256S386.172 376 320 376Z" />
        </Icon>
    </>
}