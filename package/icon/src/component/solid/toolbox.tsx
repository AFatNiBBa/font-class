
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=solid toolbox}
 * @preview ![toolbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNjI1IDE4Mi42MjVMNDU3LjM3NSAxMzcuMzc1QzQ1MS4zNzUgMTMxLjM3NSA0NDMuMjUgMTI4IDQzNC43NSAxMjhIMzg0VjgwQzM4NCA1My41IDM2Mi41IDMyIDMzNiAzMkgxNzZDMTQ5LjUgMzIgMTI4IDUzLjUgMTI4IDgwVjEyOEg3Ny4yNUM2OC43NSAxMjggNjAuNjI1IDEzMS4zNzUgNTQuNjI1IDEzNy4zNzVMOS4zNzUgMTgyLjYyNUMzLjM3NSAxODguNjI1IDAgMTk2Ljc1IDAgMjA1LjI1VjMwNEgxMjhWMjcyQzEyOCAyNjMuMTI1IDEzNS4xMjUgMjU2IDE0NCAyNTZIMTc2QzE4NC44NzUgMjU2IDE5MiAyNjMuMTI1IDE5MiAyNzJWMzA0SDMyMFYyNzJDMzIwIDI2My4xMjUgMzI3LjEyNSAyNTYgMzM2IDI1NkgzNjhDMzc2Ljg3NSAyNTYgMzg0IDI2My4xMjUgMzg0IDI3MlYzMDRINTEyVjIwNS4yNUM1MTIgMTk2Ljc1IDUwOC42MjUgMTg4LjYyNSA1MDIuNjI1IDE4Mi42MjVaTTMzNiAxMjhIMTc2VjgwSDMzNlYxMjhaTTM4NCAzNjhDMzg0IDM3Ni44NzUgMzc2Ljg3NSAzODQgMzY4IDM4NEgzMzZDMzI3LjEyNSAzODQgMzIwIDM3Ni44NzUgMzIwIDM2OFYzMzZIMTkyVjM2OEMxOTIgMzc2Ljg3NSAxODQuODc1IDM4NCAxNzYgMzg0SDE0NEMxMzUuMTI1IDM4NCAxMjggMzc2Ljg3NSAxMjggMzY4VjMzNkgwVjQ0OEMwIDQ2NS42MjUgMTQuMzc1IDQ4MCAzMiA0ODBINDgwQzQ5Ny42MjUgNDgwIDUxMiA0NjUuNjI1IDUxMiA0NDhWMzM2SDM4NFYzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Toolbox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.625 182.625L457.375 137.375C451.375 131.375 443.25 128 434.75 128H384V80C384 53.5 362.5 32 336 32H176C149.5 32 128 53.5 128 80V128H77.25C68.75 128 60.625 131.375 54.625 137.375L9.375 182.625C3.375 188.625 0 196.75 0 205.25V304H128V272C128 263.125 135.125 256 144 256H176C184.875 256 192 263.125 192 272V304H320V272C320 263.125 327.125 256 336 256H368C376.875 256 384 263.125 384 272V304H512V205.25C512 196.75 508.625 188.625 502.625 182.625ZM336 128H176V80H336V128ZM384 368C384 376.875 376.875 384 368 384H336C327.125 384 320 376.875 320 368V336H192V368C192 376.875 184.875 384 176 384H144C135.125 384 128 376.875 128 368V336H0V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V336H384V368Z" />
        </Icon>
    </>
}