
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=solid angle-left}
 * @preview ![angle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTMuMDMgMzgwLjUwMkMyMjguMjMzIDM5Ni41MzMgMjI3LjU0NiA0MjEuODQ0IDIxMS41MTUgNDM3LjAzMkMyMDMuNzggNDQ0LjM3NSAxOTMuODc0IDQ0OCAxODMuOTk5IDQ0OEMxNzMuNDA2IDQ0OCAxNjIuODI3IDQ0My44MTMgMTU0Ljk2OCA0MzUuNUwxMC45NjkgMjgzLjUwNUMtMy42NTYgMjY4LjA5OSAtMy42NTYgMjQzLjkxMiAxMC45NjkgMjI4LjUwNkwxNTQuOTY4IDc2LjUxQzE3MC4xNTYgNjAuNDQ4IDE5NS40ODQgNTkuNzYxIDIxMS41MTUgNzQuOTc5QzIyNy41NDYgOTAuMTY2IDIyOC4yMzMgMTE1LjQ3OCAyMTMuMDMgMTMxLjUwOUw5NS4wOTMgMjU2LjAwNUwyMTMuMDMgMzgwLjUwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AngleLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M213.03 380.502C228.233 396.533 227.546 421.844 211.515 437.032C203.78 444.375 193.874 448 183.999 448C173.406 448 162.827 443.813 154.968 435.5L10.969 283.505C-3.656 268.099 -3.656 243.912 10.969 228.506L154.968 76.51C170.156 60.448 195.484 59.761 211.515 74.979C227.546 90.166 228.233 115.478 213.03 131.509L95.093 256.005L213.03 380.502Z" />
        </Icon>
    </>
}