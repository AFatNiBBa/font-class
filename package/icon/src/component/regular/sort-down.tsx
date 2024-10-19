
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=regular sort-down}
 * @preview ![sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzEuOTY2IDI4OEg0OC4wOEM1LjQ1MyAyODggLTE2LjE3MyAzMzkuNzY2IDE0LjIwMyAzNjkuOUwxMjYuMDg0IDQ4MS45MzNDMTQ0LjcxIDUwMC42ODkgMTc1LjIxMSA1MDAuNjg5IDE5My45NjIgNDgxLjkzM0wzMDUuOTY3IDM2OS45QzMzNS45NjkgMzM5Ljc2NiAzMTQuNzE4IDI4OCAyNzEuOTY2IDI4OFpNMTU5Ljk2IDQ0OC4wNDhMNDcuOTU1IDMzNi4wMTRIMjcxLjk2NkwxNTkuOTYgNDQ4LjA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SortDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M271.966 288H48.08C5.453 288 -16.173 339.766 14.203 369.9L126.084 481.933C144.71 500.689 175.211 500.689 193.962 481.933L305.967 369.9C335.969 339.766 314.718 288 271.966 288ZM159.96 448.048L47.955 336.014H271.966L159.96 448.048Z" />
        </Icon>
    </>
}