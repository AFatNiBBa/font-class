
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `viacoin` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/viacoin?s=brands viacoin}
 * @preview ![viacoin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJoLTY0bC04MC43IDE5MmgtOTQuNUw2NCAzMkgwbDQ4IDExMkgwdjQ4aDY4LjVsMTMuOCAzMkgwdjQ4aDEwMi44TDE5MiA0ODBsODkuMi0yMDhIMzg0di00OGgtODIuM2wxMy44LTMySDM4NHYtNDhoLTQ4bDQ4LTExMnpNMTkyIDMzNmwtMjctNjRoNTRsLTI3IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Viacoin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 32h-64l-80.7 192h-94.5L64 32H0l48 112H0v48h68.5l13.8 32H0v48h102.8L192 480l89.2-208H384v-48h-82.3l13.8-32H384v-48h-48l48-112zM192 336l-27-64h54l-27 64z" />
        </Icon>
    </>
}