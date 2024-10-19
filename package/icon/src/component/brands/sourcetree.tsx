
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sourcetree` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sourcetree?s=brands sourcetree}
 * @preview ![sourcetree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjcuMiAyMDNjMC0xMTIuMS05MC45LTIwMy0yMDMtMjAzQzExMi4xLS4yIDIxLjIgOTAuNiAyMSAyMDIuNkEyMDIuODYgMjAyLjg2IDAgMCAwIDE2MS41IDM5NnYxMDEuN2ExNC4zIDE0LjMgMCAwIDAgMTQuMyAxNC4zaDk2LjRhMTQuMyAxNC4zIDAgMCAwIDE0LjMtMTQuM1YzOTYuMUEyMDMuMTggMjAzLjE4IDAgMCAwIDQyNy4yIDIwM3ptLTI3MS42IDBjMC05MC44IDEzNy4zLTkwLjggMTM3LjMgMC0uMSA4OS45LTEzNy4zIDkxLTEzNy4zIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Sourcetree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M427.2 203c0-112.1-90.9-203-203-203C112.1-.2 21.2 90.6 21 202.6A202.86 202.86 0 0 0 161.5 396v101.7a14.3 14.3 0 0 0 14.3 14.3h96.4a14.3 14.3 0 0 0 14.3-14.3V396.1A203.18 203.18 0 0 0 427.2 203zm-271.6 0c0-90.8 137.3-90.8 137.3 0-.1 89.9-137.3 91-137.3 0z" />
        </Icon>
    </>
}