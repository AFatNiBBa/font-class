
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `loveseat` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/loveseat?s=light loveseat}
 * @preview ![loveseat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMjI0QzQxMi42NTQgMjI0IDM4NCAyNTIuNjUyIDM4NCAyODhIMTI4QzEyOCAyNTIuNjUyIDk5LjM0NiAyMjQgNjQgMjI0UzAgMjUyLjY1MiAwIDI4OFY0NDhDMCA0NjUuNjcyIDE0LjMyNiA0ODAgMzIgNDgwSDk2QzExMy42NzQgNDgwIDEyOCA0NjUuNjcyIDEyOCA0NDhIMzg0QzM4NCA0NjUuNjcyIDM5OC4zMjYgNDgwIDQxNiA0ODBINDgwQzQ5Ny42NzQgNDgwIDUxMiA0NjUuNjcyIDUxMiA0NDhWMjg4QzUxMiAyNTIuNjUyIDQ4My4zNDYgMjI0IDQ0OCAyMjRaTTk2IDQ0OEgzMlYyODhDMzIgMjcwLjM1NSA0Ni4zNTUgMjU2IDY0IDI1NlM5NiAyNzAuMzU1IDk2IDI4OFY0NDhaTTM4NCA0MTZIMTI4VjMyMEgzODRWNDE2Wk00ODAgNDQ4SDQxNlYyODhDNDE2IDI3MC4zNTUgNDMwLjM1NSAyNTYgNDQ4IDI1NlM0ODAgMjcwLjM1NSA0ODAgMjg4VjQ0OFpNODAgMTkyQzg4Ljg0NCAxOTIgOTYgMTg0Ljg0NCA5NiAxNzZWMTQ0Qzk2IDk5Ljg3NSAxMzEuODkxIDY0IDE3NiA2NEgzMzZDMzgwLjEwOSA2NCA0MTYgOTkuODc1IDQxNiAxNDRWMTc2QzQxNiAxODQuODQ0IDQyMy4xNTYgMTkyIDQzMiAxOTJTNDQ4IDE4NC44NDQgNDQ4IDE3NlYxNDRDNDQ4IDgyLjI1IDM5Ny43NSAzMiAzMzYgMzJIMTc2QzExNC4yNSAzMiA2NCA4Mi4yNSA2NCAxNDRWMTc2QzY0IDE4NC44NDQgNzEuMTU2IDE5MiA4MCAxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Loveseat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 224C412.654 224 384 252.652 384 288H128C128 252.652 99.346 224 64 224S0 252.652 0 288V448C0 465.672 14.326 480 32 480H96C113.674 480 128 465.672 128 448H384C384 465.672 398.326 480 416 480H480C497.674 480 512 465.672 512 448V288C512 252.652 483.346 224 448 224ZM96 448H32V288C32 270.355 46.355 256 64 256S96 270.355 96 288V448ZM384 416H128V320H384V416ZM480 448H416V288C416 270.355 430.355 256 448 256S480 270.355 480 288V448ZM80 192C88.844 192 96 184.844 96 176V144C96 99.875 131.891 64 176 64H336C380.109 64 416 99.875 416 144V176C416 184.844 423.156 192 432 192S448 184.844 448 176V144C448 82.25 397.75 32 336 32H176C114.25 32 64 82.25 64 144V176C64 184.844 71.156 192 80 192Z" />
        </Icon>
    </>
}