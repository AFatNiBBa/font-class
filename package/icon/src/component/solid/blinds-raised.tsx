
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `blinds-raised` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=solid blinds-raised}
 * @preview ![blinds-raised](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxNTkuOTIyTDAgMjIzLjg5MUg5NlYxNTkuOTIySDE2Wk01MTIgNDcuOTc3VjE1Ljk5MkM1MTIgNy4xMjIgNTA0Ljg3NSAwIDQ5NiAwSDE2QzcuMTI1IDAgMCA3LjEyMiAwIDE1Ljk5MlY0Ny45NzdDMCA1Ni44NDcgNy4xMjUgNjMuOTY5IDE2IDYzLjk2OUwwIDEyNy45MzhIOTZWNjMuOTY5SDEyOFYxMjcuOTM4SDUxMkw0OTYgNjMuOTY5QzUwNC44NzUgNjMuOTY5IDUxMiA1Ni44NDcgNTEyIDQ3Ljk3N1pNNDk2IDE1OS45MjJIMTI4VjIyMy44OTFINTEyTDQ5NiAxNTkuOTIyWk05NiAyMjMuODkxVjQxOC43OTZDNzMuOTk5IDQyNi41NDIgNjAuNzUgNDQ5LjAzMSA2NC43NSA0NzIuMDJDNjguNjI1IDQ5NS4xMzMgODguNjI1IDUxMiAxMTIgNTEyUzE1NS4zNzUgNDk1LjEzMyAxNTkuMjUgNDcyLjAyQzE2My4yNSA0NDkuMDMxIDE0OS45OTkgNDI2LjU0MiAxMjggNDE4Ljc5NlYyMjMuODkxSDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BlindsRaised(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M16 159.922L0 223.891H96V159.922H16ZM512 47.977V15.992C512 7.122 504.875 0 496 0H16C7.125 0 0 7.122 0 15.992V47.977C0 56.847 7.125 63.969 16 63.969L0 127.938H96V63.969H128V127.938H512L496 63.969C504.875 63.969 512 56.847 512 47.977ZM496 159.922H128V223.891H512L496 159.922ZM96 223.891V418.796C73.999 426.542 60.75 449.031 64.75 472.02C68.625 495.133 88.625 512 112 512S155.375 495.133 159.25 472.02C163.25 449.031 149.999 426.542 128 418.796V223.891H96Z" />
        </Icon>
    </>
}