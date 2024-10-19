
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-y` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=solid circle-y}
 * @preview ![circle-y](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM3OC4yMTkgMTgzLjYyNUwyODAgMjk4LjIwOVYzNzZDMjgwIDM4OS4yNSAyNjkuMjUgNDAwIDI1NiA0MDBTMjMyIDM4OS4yNSAyMzIgMzc2VjI5OC4yMDlMMTMzLjc4MSAxODMuNjI1QzEyNS4xNTYgMTczLjU2MiAxMjYuMzEyIDE1OC40MDYgMTM2LjM3NSAxNDkuNzgxQzE0Ni40NTMgMTQxLjE1NiAxNjEuNTk0IDE0Mi4zNDQgMTcwLjIxOSAxNTIuMzc1TDI1NiAyNTIuNDUzTDM0MS43ODEgMTUyLjM3NUMzNTAuNDIyIDE0Mi4zMjggMzY1LjU0NyAxNDEuMTA5IDM3NS42MjUgMTQ5Ljc4MUMzODUuNjg4IDE1OC40MDYgMzg2Ljg0NCAxNzMuNTYyIDM3OC4yMTkgMTgzLjYyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleY(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM378.219 183.625L280 298.209V376C280 389.25 269.25 400 256 400S232 389.25 232 376V298.209L133.781 183.625C125.156 173.562 126.312 158.406 136.375 149.781C146.453 141.156 161.594 142.344 170.219 152.375L256 252.453L341.781 152.375C350.422 142.328 365.547 141.109 375.625 149.781C385.688 158.406 386.844 173.562 378.219 183.625Z" />
        </Icon>
    </>
}