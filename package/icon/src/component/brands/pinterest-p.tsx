
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pinterest-p` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pinterest-p?s=brands pinterest-p}
 * @preview ![pinterest-p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDQgNi41QzEwMS40IDYuNSAwIDc0LjkgMCAxODUuNiAwIDI1NiAzOS42IDI5NiA2My42IDI5NmM5LjkgMCAxNS42LTI3LjYgMTUuNi0zNS40IDAtOS4zLTIzLjctMjkuMS0yMy43LTY3LjggMC04MC40IDYxLjItMTM3LjQgMTQwLjQtMTM3LjQgNjguMSAwIDExOC41IDM4LjcgMTE4LjUgMTA5LjggMCA1My4xLTIxLjMgMTUyLjctOTAuMyAxNTIuNy0yNC45IDAtNDYuMi0xOC00Ni4yLTQzLjggMC0zNy44IDI2LjQtNzQuNCAyNi40LTExMy40IDAtNjYuMi05My45LTU0LjItOTMuOSAyNS44IDAgMTYuOCAyLjEgMzUuNCA5LjYgNTAuNy0xMy44IDU5LjQtNDIgMTQ3LjktNDIgMjA5LjEgMCAxOC45IDIuNyAzNy41IDQuNSA1Ni40IDMuNCAzLjggMS43IDMuNCA2LjkgMS41IDUwLjQtNjkgNDguNi04Mi41IDcxLjQtMTcyLjggMTIuMyAyMy40IDQ0LjEgMzYgNjkuMyAzNiAxMDYuMiAwIDE1My45LTEwMy41IDE1My45LTE5Ni44QzM4NCA3MS4zIDI5OC4yIDYuNSAyMDQgNi41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PinterestP(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
        </Icon>
    </>
}