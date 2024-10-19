
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=solid cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDI4OC4wMDdWNDQ4LjAwMUMwIDQ2NS42MjYgMTQuMzc1IDQ4MCAzMiA0ODBINDgwQzQ5Ny42MjUgNDgwIDUxMiA0NjUuNjI2IDUxMiA0NDguMDAxVjI4OC4wMDdIMFpNMjk5Ljg3NSAzMi4wMTdDMjkyLjEyNSAzMS43NjcgMjg0LjYyNSAzNC4yNjcgMjc4Ljc1IDM5LjAxN0wwIDI1Ni4wMDlINTEyQzUxMiAxMzYuMTM4IDQxNy45OTkgMzguMjY3IDI5OS44NzUgMzIuMDE3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cheese(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 288.007V448.001C0 465.626 14.375 480 32 480H480C497.625 480 512 465.626 512 448.001V288.007H0ZM299.875 32.017C292.125 31.767 284.625 34.267 278.75 39.017L0 256.009H512C512 136.138 417.999 38.267 299.875 32.017Z" />
        </Icon>
    </>
}