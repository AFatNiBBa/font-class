
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-stop` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-stop?s=solid circle-stop}
 * @preview ![circle-stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41OCAxMjMuNDIgNDk2IDI1NiA0OTZTNDk2IDM4OC41OCA0OTYgMjU2QzQ5NiAxMjMuNDE4IDM4OC41OCAxNiAyNTYgMTZaTTM1MiAzMjhDMzUyIDM0MS4xOTkgMzQxLjE5OSAzNTIgMzI4IDM1MkgxODRDMTcwLjgwMSAzNTIgMTYwIDM0MS4xOTkgMTYwIDMyOFYxODRDMTYwIDE3MC43OTkgMTcwLjgwMSAxNjAgMTg0IDE2MEgzMjhDMzQxLjE5OSAxNjAgMzUyIDE3MC43OTkgMzUyIDE4NFYzMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleStop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM352 328C352 341.199 341.199 352 328 352H184C170.801 352 160 341.199 160 328V184C160 170.799 170.801 160 184 160H328C341.199 160 352 170.799 352 184V328Z" />
        </Icon>
    </>
}