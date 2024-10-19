
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-left-long` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=regular arrow-left-long}
 * @preview ![arrow-left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYuOTY5IDEwMy4wMzFDMTgxLjY1NiAxMDcuNzE5IDE4NCAxMTMuODQ0IDE4NCAxMjBTMTgxLjY1NiAxMzIuMjgxIDE3Ni45NjkgMTM2Ljk2OUw4MS45MzggMjMySDQ4OEM1MDEuMjUgMjMyIDUxMiAyNDIuNzUgNTEyIDI1NlM1MDEuMjUgMjgwIDQ4OCAyODBIODEuOTM4TDE3Ni45NjkgMzc1LjAzMUMxODYuMzQ0IDM4NC40MDYgMTg2LjM0NCAzOTkuNTk0IDE3Ni45NjkgNDA4Ljk2OVMxNTIuNDA2IDQxOC4zNDQgMTQzLjAzMSA0MDguOTY5TDcuMDMxIDI3Mi45NjlDLTIuMzQ0IDI2My41OTQgLTIuMzQ0IDI0OC40MDYgNy4wMzEgMjM5LjAzMUwxNDMuMDMxIDEwMy4wMzFDMTUyLjQwNiA5My42NTYgMTY3LjU5NCA5My42NTYgMTc2Ljk2OSAxMDMuMDMxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowLeftLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M176.969 103.031C181.656 107.719 184 113.844 184 120S181.656 132.281 176.969 136.969L81.938 232H488C501.25 232 512 242.75 512 256S501.25 280 488 280H81.938L176.969 375.031C186.344 384.406 186.344 399.594 176.969 408.969S152.406 418.344 143.031 408.969L7.031 272.969C-2.344 263.594 -2.344 248.406 7.031 239.031L143.031 103.031C152.406 93.656 167.594 93.656 176.969 103.031Z" />
        </Icon>
    </>
}