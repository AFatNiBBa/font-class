
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=regular dagger}
 * @preview ![dagger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDEuNzkzIDEyOEwyMTYgMTI4VjI0QzIxNiAxMC43NDUgMjA1LjI1NSAwIDE5MiAwSDE5MkMxNzguNzQ1IDAgMTY4IDEwLjc0NSAxNjggMjRWMTI4TDQyLjIwNiAxMjhDMjEuMjc5IDEyOCAyLjI0OSAxNDMuMDk5IDAuMjAxIDE2My45MjZDLTIuMTU1IDE4Ny44ODggMTYuNTMxIDIwOCA0MCAyMDhDNTkuMjUgMjA4IDc0LjYyNSAxOTQuMTI1IDc4LjM3NSAxNzZIMTEyVjQwOEwxNzUuMzc1IDUwMy4xMjVDMTc5LjM3NSA1MDkgMTg1LjYyNSA1MTIgMTkyIDUxMlMyMDQuNjI1IDUwOSAyMDguNjI1IDUwMy4xMjVMMjcyIDQwOFYxNzZIMzA1LjYyNUMzMDkuMzc1IDE5NC4xMjUgMzI0Ljc1IDIwOCAzNDQgMjA4QzM2Ny40NjggMjA4IDM4Ni4xNTUgMTg3Ljg4OCAzODMuNzk5IDE2My45MjZDMzgxLjc1MSAxNDMuMDk5IDM2Mi43MjEgMTI4IDM0MS43OTMgMTI4Wk0yMjQgMzkzLjVMMTkyIDQ0MS41TDE2MCAzOTMuNVYxNzZIMjI0VjM5My41WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Dagger(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M341.793 128L216 128V24C216 10.745 205.255 0 192 0H192C178.745 0 168 10.745 168 24V128L42.206 128C21.279 128 2.249 143.099 0.201 163.926C-2.155 187.888 16.531 208 40 208C59.25 208 74.625 194.125 78.375 176H112V408L175.375 503.125C179.375 509 185.625 512 192 512S204.625 509 208.625 503.125L272 408V176H305.625C309.375 194.125 324.75 208 344 208C367.468 208 386.155 187.888 383.799 163.926C381.751 143.099 362.721 128 341.793 128ZM224 393.5L192 441.5L160 393.5V176H224V393.5Z" />
        </Icon>
    </>
}