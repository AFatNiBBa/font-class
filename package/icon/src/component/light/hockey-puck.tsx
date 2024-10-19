
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hockey-puck` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-puck?s=light hockey-puck}
 * @preview ![hockey-puck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgODBDMTI4Ljc4MSA4MCAwIDExMi45NjkgMCAxNzZWMzM2QzAgMzk5LjAzMSAxMjguNzgxIDQzMiAyNTYgNDMyUzUxMiAzOTkuMDMxIDUxMiAzMzZWMTc2QzUxMiAxMTIuOTY5IDM4My4yMTkgODAgMjU2IDgwWk0yNTYgMTEyQzM5Mi43MzQgMTEyIDQ4MCAxNDkuOTA2IDQ4MCAxNzZTMzkyLjczNCAyNDAgMjU2IDI0MFMzMiAyMDIuMDk0IDMyIDE3NlMxMTkuMjY2IDExMiAyNTYgMTEyWk0yNTYgNDAwQzExOS4yNjYgNDAwIDMyIDM2Mi4wOTQgMzIgMzM2VjIyNC44OThDNzguMDYxIDI1NS45NDEgMTY3LjM0IDI3MiAyNTYgMjcyUzQzMy45MzkgMjU1Ljk0MSA0ODAgMjI0Ljg5OFYzMzZDNDgwIDM2Mi4wOTQgMzkyLjczNCA0MDAgMjU2IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HockeyPuck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 80C128.781 80 0 112.969 0 176V336C0 399.031 128.781 432 256 432S512 399.031 512 336V176C512 112.969 383.219 80 256 80ZM256 112C392.734 112 480 149.906 480 176S392.734 240 256 240S32 202.094 32 176S119.266 112 256 112ZM256 400C119.266 400 32 362.094 32 336V224.898C78.061 255.941 167.34 272 256 272S433.939 255.941 480 224.898V336C480 362.094 392.734 400 256 400Z" />
        </Icon>
    </>
}