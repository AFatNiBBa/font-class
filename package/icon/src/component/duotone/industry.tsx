
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `industry` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=duotone industry}
 * @preview ![industry](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAxNTIuMDE2VjQ0OEM1MTIgNDY1LjY3MiA0OTcuNjcyIDQ4MCA0ODAgNDgwSDEyOEMxNDUuNjcyIDQ4MCAxNjAgNDY1LjY3MiAxNjAgNDQ4VjIyNEwyOTkuMTI1IDEzMS43NjZDMzE1LjEyNSAxMjEuNjQxIDMzNiAxMzMuMTQxIDMzNiAxNTIuMDE2VjIyNEw0NzUuMTI1IDEzMS43NjZDNDkxLjEyNSAxMjEuNjQxIDUxMiAxMzMuMTQxIDUxMiAxNTIuMDE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMjggNDgwSDMyQzE0LjMyNyA0ODAgMCA0NjUuNjczIDAgNDQ4VjY0QzAgNDYuMzI3IDE0LjMyNyAzMiAzMiAzMkgxMjhDMTQ1LjY3MyAzMiAxNjAgNDYuMzI3IDE2MCA2NFY0NDhDMTYwIDQ2NS42NzMgMTQ1LjY3MyA0ODAgMTI4IDQ4MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Industry(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 152.016V448C512 465.672 497.672 480 480 480H128C145.672 480 160 465.672 160 448V224L299.125 131.766C315.125 121.641 336 133.141 336 152.016V224L475.125 131.766C491.125 121.641 512 133.141 512 152.016Z" />
            <path d="M128 480H32C14.327 480 0 465.673 0 448V64C0 46.327 14.327 32 32 32H128C145.673 32 160 46.327 160 64V448C160 465.673 145.673 480 128 480Z" />
        </Icon>
    </>
}