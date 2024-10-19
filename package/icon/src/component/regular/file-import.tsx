
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-import` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=regular file-import}
 * @preview ![file-import](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjMuMDMxIDM4My4wMzFDMjU4LjM0NCAzODcuNzE5IDI1NiAzOTMuODQ0IDI1NiA0MDBTMjU4LjM0NCA0MTIuMjgxIDI2My4wMzEgNDE2Ljk2OUMyNzIuNDA2IDQyNi4zNDQgMjg3LjU5NCA0MjYuMzQ0IDI5Ni45NjkgNDE2Ljk2OUwzNzYuOTY5IDMzNi45NjlDMzg2LjM0NCAzMjcuNTk0IDM4Ni4zNDQgMzEyLjQwNiAzNzYuOTY5IDMwMy4wMzFMMjk2Ljk2OSAyMjMuMDMxQzI4Ny41OTQgMjEzLjY1NiAyNzIuNDA2IDIxMy42NTYgMjYzLjAzMSAyMjMuMDMxUzI1My42NTYgMjQ3LjU5NCAyNjMuMDMxIDI1Ni45NjlMMzAyLjA2MiAyOTZIMjRDMTAuNzUgMjk2IDAgMzA2Ljc1IDAgMzIwUzEwLjc1IDM0NCAyNCAzNDRIMzAyLjA2MkwyNjMuMDMxIDM4My4wMzFaTTQ5My4yNTQgOTMuMzgzTDQxOC42MjcgMTguNzQ2QzQwNi42MjUgNi43NDIgMzkwLjM0OCAwIDM3My4zNzMgMEgxOTJDMTU2LjY1MiAwIDEyNy45OTggMjguNjU2IDEyOCA2NEwxMjguMDA4IDIzMkMxMjguMDEgMjQ1LjI1OCAxMzguNzU0IDI1NiAxNTIuMDA4IDI1NlMxNzYuMDA4IDI0NS4yNTQgMTc2LjAwNiAyMzJMMTc2IDY0LjEyNUMxNzYgNTUuMjg5IDE4My4xNjIgNDguMTI1IDE5MiA0OC4xMjVIMzUyLjAwOFYxMjhDMzUyLjAwOCAxNDUuNjcyIDM2Ni4zMzQgMTYwIDM4NC4wMDggMTYwSDQ2NC4wMDJWNDQ4QzQ2NC4wMDIgNDU2LjgzNiA0NTYuODM4IDQ2NCA0NDguMDAyIDQ2NEgxOTIuMDJDMTgzLjE4MiA0NjQgMTc2LjAxOCA0NTYuODM2IDE3Ni4wMTggNDQ4TDE3Ni4wMTYgNDA3Ljk5NkMxNzYuMDE0IDM5NC43NDIgMTY1LjI3IDM4NCAxNTIuMDE2IDM4NFMxMjguMDE2IDM5NC43NDYgMTI4LjAxOCA0MDhMMTI4LjAyIDQ0OEMxMjguMDIxIDQ4My4zNDQgMTU2LjY3NiA1MTIgMTkyLjAyMyA1MTJINDQ4QzQ4My4xOTkgNTEyIDUxMiA0ODMuMTk5IDUxMiA0NDhWMTM4LjY0MUM1MTIgMTIxLjY2NCA1MDUuMjU4IDEwNS4zODMgNDkzLjI1NCA5My4zODNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileImport(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M263.031 383.031C258.344 387.719 256 393.844 256 400S258.344 412.281 263.031 416.969C272.406 426.344 287.594 426.344 296.969 416.969L376.969 336.969C386.344 327.594 386.344 312.406 376.969 303.031L296.969 223.031C287.594 213.656 272.406 213.656 263.031 223.031S253.656 247.594 263.031 256.969L302.062 296H24C10.75 296 0 306.75 0 320S10.75 344 24 344H302.062L263.031 383.031ZM493.254 93.383L418.627 18.746C406.625 6.742 390.348 0 373.373 0H192C156.652 0 127.998 28.656 128 64L128.008 232C128.01 245.258 138.754 256 152.008 256S176.008 245.254 176.006 232L176 64.125C176 55.289 183.162 48.125 192 48.125H352.008V128C352.008 145.672 366.334 160 384.008 160H464.002V448C464.002 456.836 456.838 464 448.002 464H192.02C183.182 464 176.018 456.836 176.018 448L176.016 407.996C176.014 394.742 165.27 384 152.016 384S128.016 394.746 128.018 408L128.02 448C128.021 483.344 156.676 512 192.023 512H448C483.199 512 512 483.199 512 448V138.641C512 121.664 505.258 105.383 493.254 93.383Z" />
        </Icon>
    </>
}