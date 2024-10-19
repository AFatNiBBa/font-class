
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `apple` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/apple?s=brands apple}
 * @preview ![apple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTguNyAyNjguN2MtLjItMzYuNyAxNi40LTY0LjQgNTAtODQuOC0xOC44LTI2LjktNDcuMi00MS43LTg0LjctNDQuNi0zNS41LTIuOC03NC4zIDIwLjctODguNSAyMC43LTE1IDAtNDkuNC0xOS43LTc2LjQtMTkuN0M2My4zIDE0MS4yIDQgMTg0LjggNCAyNzMuNXEwIDM5LjMgMTQuNCA4MS4yYzEyLjggMzYuNyA1OSAxMjYuNyAxMDcuMiAxMjUuMiAyNS4yLS42IDQzLTE3LjkgNzUuOC0xNy45IDMxLjggMCA0OC4zIDE3LjkgNzYuNCAxNy45IDQ4LjYtLjcgOTAuNC04Mi41IDEwMi42LTExOS4zLTY1LjItMzAuNy02MS43LTkwLTYxLjctOTEuOXptLTU2LjYtMTY0LjJjMjcuMy0zMi40IDI0LjgtNjEuOSAyNC03Mi41LTI0LjEgMS40LTUyIDE2LjQtNjcuOSAzNC45LTE3LjUgMTkuOC0yNy44IDQ0LjMtMjUuNiA3MS45IDI2LjEgMiA0OS45LTExLjQgNjkuNS0zNC4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Apple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </Icon>
    </>
}