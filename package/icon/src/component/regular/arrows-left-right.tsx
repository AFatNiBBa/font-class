
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=regular arrows-left-right}
 * @preview ![arrows-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjU2QzUxMiAyNjIuNjg4IDUwOS4xODggMjY5LjA5NCA1MDQuMjgxIDI3My42MjVMNDAwLjI4MSAzNjkuNjI1QzM5NS42NTYgMzczLjkwNiAzODkuODEyIDM3NiAzODQgMzc2QzM3Ny41MzEgMzc2IDM3MS4wOTQgMzczLjQwNiAzNjYuMzc1IDM2OC4yODFDMzU3LjM3NSAzNTguNTMxIDM1Ny45NjkgMzQzLjM0NCAzNjcuNzE5IDMzNC4zNzVMNDI2LjYyNSAyODBIODUuMzc1TDE0NC4yODEgMzM0LjM3NUMxNTQuMDMxIDM0My4zNDQgMTU0LjYyNSAzNTguNTMxIDE0NS42MjUgMzY4LjI4MUMxNDAuOTA2IDM3My40MDYgMTM0LjQ2OSAzNzYgMTI4IDM3NkMxMjIuMTg4IDM3NiAxMTYuMzQ0IDM3My45MDYgMTExLjcxOSAzNjkuNjI1TDcuNzE5IDI3My42MjVDMi44MTIgMjY5LjA5NCAwIDI2Mi42ODggMCAyNTZTMi44MTIgMjQyLjkwNiA3LjcxOSAyMzguMzc1TDExMS43MTkgMTQyLjM3NUMxMjEuNSAxMzMuMzQ0IDEzNi42ODggMTM0IDE0NS42MjUgMTQzLjcxOUMxNTQuNjI1IDE1My40NjkgMTU0LjAzMSAxNjguNjU2IDE0NC4yODEgMTc3LjYyNUw4NS4zNzUgMjMySDQyNi42MjVMMzY3LjcxOSAxNzcuNjI1QzM1Ny45NjkgMTY4LjY1NiAzNTcuMzc1IDE1My40NjkgMzY2LjM3NSAxNDMuNzE5QzM3NS4zNDQgMTM0IDM5MC41IDEzMy4zNDQgNDAwLjI4MSAxNDIuMzc1TDUwNC4yODEgMjM4LjM3NUM1MDkuMTg4IDI0Mi45MDYgNTEyIDI0OS4zMTIgNTEyIDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowsLeftRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 256C512 262.688 509.188 269.094 504.281 273.625L400.281 369.625C395.656 373.906 389.812 376 384 376C377.531 376 371.094 373.406 366.375 368.281C357.375 358.531 357.969 343.344 367.719 334.375L426.625 280H85.375L144.281 334.375C154.031 343.344 154.625 358.531 145.625 368.281C140.906 373.406 134.469 376 128 376C122.188 376 116.344 373.906 111.719 369.625L7.719 273.625C2.812 269.094 0 262.688 0 256S2.812 242.906 7.719 238.375L111.719 142.375C121.5 133.344 136.688 134 145.625 143.719C154.625 153.469 154.031 168.656 144.281 177.625L85.375 232H426.625L367.719 177.625C357.969 168.656 357.375 153.469 366.375 143.719C375.344 134 390.5 133.344 400.281 142.375L504.281 238.375C509.188 242.906 512 249.312 512 256Z" />
        </Icon>
    </>
}