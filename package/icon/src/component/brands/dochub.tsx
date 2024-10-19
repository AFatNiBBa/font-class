
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dochub` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dochub?s=brands dochub}
 * @preview ![dochub](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTcuOSAxNjBIMjU2VjE5LjZMMzk3LjkgMTYwek0zMDQgMTkydjEzMGMwIDY2LjgtMzYuNSAxMDAuMS0xMTMuMyAxMDAuMUg5NlY4NC44aDk0LjdjMTIgMCAyMy4xLjggMzMuMSAyLjV2LTg0QzIxMi45IDEuMSAyMDEuNCAwIDE4OS4yIDBIMHY1MTJoMTg5LjJDMzI5LjcgNTEyIDQwMCA0NDcuNCA0MDAgMzE4LjFWMTkyaC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Dochub(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 416 512" {...props}>
            <path d="M397.9 160H256V19.6L397.9 160zM304 192v130c0 66.8-36.5 100.1-113.3 100.1H96V84.8h94.7c12 0 23.1.8 33.1 2.5v-84C212.9 1.1 201.4 0 189.2 0H0v512h189.2C329.7 512 400 447.4 400 318.1V192h-96z" />
        </Icon>
    </>
}