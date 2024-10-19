
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `r-project` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/r-project?s=brands r-project}
 * @preview ![r-project](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1ODEgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01ODEgMjI2LjZDNTgxIDExOS4xIDQ1MC45IDMyIDI5MC41IDMyUzAgMTE5LjEgMCAyMjYuNkMwIDMyMi40IDEwMy4zIDQwMiAyMzkuNCA0MTguMVY0ODBoOTkuMXYtNjEuNWMyNC4zLTIuNyA0Ny42LTcuNCA2OS40LTEzLjlMNDQ4IDQ4MGgxMTJsLTY3LjQtMTEzLjdjNTQuNS0zNS40IDg4LjQtODQuOSA4OC40LTEzOS43em0tNDY2LjggMTQuNWMwLTczLjUgOTguOS0xMzMgMjIwLjgtMTMzczIxMS45IDQwLjcgMjExLjkgMTMzYzAgNTAuMS0yNi41IDg1LTcwLjMgMTA2LjQtMi40LTEuNi00LjctMi45LTYuNC0zLjctMTAuMi01LjItMjcuOC0xMC41LTI3LjgtMTAuNXM4Ni42LTYuNCA4Ni42LTkyLjctOTAuNi04Ny45LTkwLjYtODcuOWgtMTk5VjM2MWMtNzQuMS0yMS41LTEyNS4yLTY3LjEtMTI1LjItMTE5Ljl6bTIyNS4xIDM4LjN2LTU1LjZjNTcuOCAwIDg3LjgtNi44IDg3LjggMjcuMyAwIDM2LjUtMzguMiAyOC4zLTg3LjggMjguM3ptLS45IDcyLjVIMzY1YzEwLjggMCAxOC45IDExLjcgMjQgMTkuMi0xNi4xIDEuOS0zMyAyLjgtNTAuNiAyLjl2LTIyLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function RProject(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 581 512" {...props}>
            <path d="M581 226.6C581 119.1 450.9 32 290.5 32S0 119.1 0 226.6C0 322.4 103.3 402 239.4 418.1V480h99.1v-61.5c24.3-2.7 47.6-7.4 69.4-13.9L448 480h112l-67.4-113.7c54.5-35.4 88.4-84.9 88.4-139.7zm-466.8 14.5c0-73.5 98.9-133 220.8-133s211.9 40.7 211.9 133c0 50.1-26.5 85-70.3 106.4-2.4-1.6-4.7-2.9-6.4-3.7-10.2-5.2-27.8-10.5-27.8-10.5s86.6-6.4 86.6-92.7-90.6-87.9-90.6-87.9h-199V361c-74.1-21.5-125.2-67.1-125.2-119.9zm225.1 38.3v-55.6c57.8 0 87.8-6.8 87.8 27.3 0 36.5-38.2 28.3-87.8 28.3zm-.9 72.5H365c10.8 0 18.9 11.7 24 19.2-16.1 1.9-33 2.8-50.6 2.9v-22.1z" />
        </Icon>
    </>
}