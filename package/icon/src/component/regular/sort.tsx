
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sort` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=regular sort}
 * @preview ![sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzEuOTc4IDI4OC4wMDhINDguMTQ3QzUuNTMxIDI4OC4wMDggLTE2LjA5IDMzOS43NzIgMTQuMjc5IDM2OS45MDVMMTI2LjEzMiA0ODEuOTM0QzE0NC43NTMgNTAwLjY4OSAxNzUuMjQ3IDUwMC42ODkgMTkzLjk5MyA0ODEuOTM0TDMwNS45NzEgMzY5LjkwNUMzMzUuOTY1IDMzOS43NzIgMzE0LjcxOSAyODguMDA4IDI3MS45NzggMjg4LjAwOFpNMTYwIDQ0OC4wNUw0OC4wMjIgMzM2LjAyMUgyNzEuOTc4TDE2MCA0NDguMDVaTTQ4LjAyMiAyMjMuOTkySDI3MS44NTNDMzE0LjQ2OSAyMjMuOTkyIDMzNi4wOSAxNzIuMjI4IDMwNS43MjEgMTQyLjA5NUwxOTMuODY4IDMwLjA2NkMxNzUuMjQ3IDExLjMxMSAxNDQuNzUzIDExLjMxMSAxMjYuMDA3IDMwLjA2NkwxNC4wMjkgMTQyLjA5NUMtMTUuOTY1IDE3Mi4yMjggNS4yODEgMjIzLjk5MiA0OC4wMjIgMjIzLjk5MlpNMTYwIDYzLjk1TDI3MS45NzggMTc1Ljk3OUg0OC4wMjJMMTYwIDYzLjk1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M271.978 288.008H48.147C5.531 288.008 -16.09 339.772 14.279 369.905L126.132 481.934C144.753 500.689 175.247 500.689 193.993 481.934L305.971 369.905C335.965 339.772 314.719 288.008 271.978 288.008ZM160 448.05L48.022 336.021H271.978L160 448.05ZM48.022 223.992H271.853C314.469 223.992 336.09 172.228 305.721 142.095L193.868 30.066C175.247 11.311 144.753 11.311 126.007 30.066L14.029 142.095C-15.965 172.228 5.281 223.992 48.022 223.992ZM160 63.95L271.978 175.979H48.022L160 63.95Z" />
        </Icon>
    </>
}