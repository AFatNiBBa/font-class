
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sign-hanging` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=regular sign-hanging}
 * @preview ![sign-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggNjRIMTEyVjI0QzExMiAxMC44IDEwMS4yIDAgODggMEg4OEM3NC44IDAgNjQgMTAuOCA2NCAyNFY2NEgyNEMxMC44IDY0IDAgNzQuOCAwIDg4Vjg4QzAgMTAxLjIgMTAuOCAxMTIgMjQgMTEySDY0VjQ4OEM2NCA1MDEuMiA3NC44IDUxMiA4OCA1MTJIODhDMTAxLjIgNTEyIDExMiA1MDEuMiAxMTIgNDg4VjExMkgxOTJWMTYwQzE3NC4yNSAxNjAgMTYwIDE3NC4yNSAxNjAgMTkyVjM1MkMxNjAgMzY5LjY3MyAxNzQuMzI3IDM4NCAxOTIgMzg0SDQ0OEM0NjUuNjczIDM4NCA0ODAgMzY5LjY3MyA0ODAgMzUyVjE5MkM0ODAgMTc0LjI1IDQ2NS43NSAxNjAgNDQ4IDE2MFYxMTJINDg4QzUwMS4yIDExMiA1MTIgMTAxLjIgNTEyIDg4Vjg4QzUxMiA3NC44IDUwMS4yIDY0IDQ4OCA2NFpNNDMyIDMzNkgyMDhWMjA4SDQzMlYzMzZaTTQxNiAxNjBIMjI0VjExMkg0MTZWMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SignHanging(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M488 64H112V24C112 10.8 101.2 0 88 0H88C74.8 0 64 10.8 64 24V64H24C10.8 64 0 74.8 0 88V88C0 101.2 10.8 112 24 112H64V488C64 501.2 74.8 512 88 512H88C101.2 512 112 501.2 112 488V112H192V160C174.25 160 160 174.25 160 192V352C160 369.673 174.327 384 192 384H448C465.673 384 480 369.673 480 352V192C480 174.25 465.75 160 448 160V112H488C501.2 112 512 101.2 512 88V88C512 74.8 501.2 64 488 64ZM432 336H208V208H432V336ZM416 160H224V112H416V160Z" />
        </Icon>
    </>
}