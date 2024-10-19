
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=solid arrow-right-long}
 * @preview ![arrow-right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNjI1IDI3OC42MjVMMzc0LjYyNSA0MDYuNjI1QzM2Mi4xMTggNDE5LjEzMiAzNDEuODY4IDQxOS4xMTggMzI5LjM3NSA0MDYuNjI1QzMxNi44NzUgMzk0LjEyNSAzMTYuODc1IDM3My44NzUgMzI5LjM3NSAzNjEuMzc1TDQwMi43NSAyODhIMzJDMTQuMzEyIDI4OCAwIDI3My42ODggMCAyNTZTMTQuMzEyIDIyNCAzMiAyMjRINDAyLjc1TDMyOS4zNzUgMTUwLjYyNUMzMTYuODc1IDEzOC4xMjUgMzE2Ljg3NSAxMTcuODc1IDMyOS4zNzUgMTA1LjM3NVMzNjIuMTI1IDkyLjg3NSAzNzQuNjI1IDEwNS4zNzVMNTAyLjYyNSAyMzMuMzc1QzUxNS4xMjUgMjQ1Ljg3NSA1MTUuMTI1IDI2Ni4xMjUgNTAyLjYyNSAyNzguNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowRightLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.625 278.625L374.625 406.625C362.118 419.132 341.868 419.118 329.375 406.625C316.875 394.125 316.875 373.875 329.375 361.375L402.75 288H32C14.312 288 0 273.688 0 256S14.312 224 32 224H402.75L329.375 150.625C316.875 138.125 316.875 117.875 329.375 105.375S362.125 92.875 374.625 105.375L502.625 233.375C515.125 245.875 515.125 266.125 502.625 278.625Z" />
        </Icon>
    </>
}