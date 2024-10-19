
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trash-undo` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=solid trash-undo}
 * @preview ![trash-undo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01My4yNSA0NjdDNTQuNzUgNDkyLjI1IDc1Ljc1IDUxMiAxMDEuMTI1IDUxMkgzNDYuODc1QzM3Mi4yNSA1MTIgMzkzLjI1IDQ5Mi4yNSAzOTQuNzUgNDY3TDQxNiAxMjhIMzJMNTMuMjUgNDY3Wk0xMDMuMDMxIDI3MS4wMzFMMTc1LjAzMSAxOTkuMDMxQzE4NC40MDYgMTg5LjY1NiAxOTkuNTk0IDE4OS42NTYgMjA4Ljk2OSAxOTkuMDMxUzIxOC4zNDQgMjIzLjU5NCAyMDguOTY5IDIzMi45NjlMMTc3LjkzOCAyNjRIMjQwQzI4OC41MzEgMjY0IDMyOCAzMDMuNDY5IDMyOCAzNTJWMzkyQzMyOCA0MDUuMjUgMzE3LjI1IDQxNiAzMDQgNDE2UzI4MCA0MDUuMjUgMjgwIDM5MlYzNTJDMjgwIDMyOS45MzggMjYyLjA2MiAzMTIgMjQwIDMxMkgxNzcuOTM4TDIwOC45NjkgMzQzLjAzMUMyMTguMzQ0IDM1Mi40MDYgMjE4LjM0NCAzNjcuNTk0IDIwOC45NjkgMzc2Ljk2OUMyMDQuMjgxIDM4MS42NTYgMTk4LjE0MSAzODQgMTkyIDM4NFMxNzkuNzE5IDM4MS42NTYgMTc1LjAzMSAzNzYuOTY5TDEwMy4wMzEgMzA0Ljk2OUM5My42NTYgMjk1LjU5NCA5My42NTYgMjgwLjQwNiAxMDMuMDMxIDI3MS4wMzFaTTQzMiAzMkgzMTJMMzAyLjYyNSAxMy4yNUMyOTguNSA1LjEyNSAyOTAuMjUgMCAyODEuMTI1IDBIMTY2Ljc1QzE1Ny43NSAwIDE0OS4zNzUgNS4xMjUgMTQ1LjM3NSAxMy4yNUwxMzYgMzJIMTZDNy4xMjUgMzIgMCAzOS4xMjUgMCA0OFY4MEMwIDg4Ljg3NSA3LjEyNSA5NiAxNiA5Nkg0MzJDNDQwLjg3NSA5NiA0NDggODguODc1IDQ0OCA4MFY0OEM0NDggMzkuMTI1IDQ0MC44NzUgMzIgNDMyIDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrashUndo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M53.25 467C54.75 492.25 75.75 512 101.125 512H346.875C372.25 512 393.25 492.25 394.75 467L416 128H32L53.25 467ZM103.031 271.031L175.031 199.031C184.406 189.656 199.594 189.656 208.969 199.031S218.344 223.594 208.969 232.969L177.938 264H240C288.531 264 328 303.469 328 352V392C328 405.25 317.25 416 304 416S280 405.25 280 392V352C280 329.938 262.062 312 240 312H177.938L208.969 343.031C218.344 352.406 218.344 367.594 208.969 376.969C204.281 381.656 198.141 384 192 384S179.719 381.656 175.031 376.969L103.031 304.969C93.656 295.594 93.656 280.406 103.031 271.031ZM432 32H312L302.625 13.25C298.5 5.125 290.25 0 281.125 0H166.75C157.75 0 149.375 5.125 145.375 13.25L136 32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96H432C440.875 96 448 88.875 448 80V48C448 39.125 440.875 32 432 32Z" />
        </Icon>
    </>
}