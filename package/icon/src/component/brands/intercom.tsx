
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `intercom` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/intercom?s=brands intercom}
 * @preview ![intercom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTIgMzJINTZDMjUuMSAzMiAwIDU3LjEgMCA4OHYzMzZjMCAzMC45IDI1LjEgNTYgNTYgNTZoMzM2YzMwLjkgMCA1Ni0yNS4xIDU2LTU2Vjg4YzAtMzAuOS0yNS4xLTU2LTU2LTU2em0tMTA4LjMgODIuMWMwLTE5LjggMjkuOS0xOS44IDI5LjkgMHYxOTkuNWMwIDE5LjgtMjkuOSAxOS44LTI5LjkgMFYxMTQuMXptLTc0LjYtNy41YzAtMTkuOCAyOS45LTE5LjggMjkuOSAwdjIxNi41YzAgMTkuOC0yOS45IDE5LjgtMjkuOSAwVjEwNi42em0tNzQuNyA3LjVjMC0xOS44IDI5LjktMTkuOCAyOS45IDB2MTk5LjVjMCAxOS44LTI5LjkgMTkuOC0yOS45IDBWMTE0LjF6TTU5LjcgMTQ0YzAtMTkuOCAyOS45LTE5LjggMjkuOSAwdjEzNC4zYzAgMTkuOC0yOS45IDE5LjgtMjkuOSAwVjE0NHptMzIzLjQgMjI3LjhjLTcyLjggNjMtMjQxLjcgNjUuNC0zMTguMSAwLTE1LTEyLjggNC40LTM1LjUgMTkuNC0yMi43IDY1LjkgNTUuMyAyMTYuMSA1My45IDI3OS4zIDAgMTQuOS0xMi45IDM0LjMgOS44IDE5LjQgMjIuN3ptNS4yLTkzLjVjMCAxOS44LTI5LjkgMTkuOC0yOS45IDBWMTQ0YzAtMTkuOCAyOS45LTE5LjggMjkuOSAwdjEzNC4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Intercom(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M392 32H56C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56zm-108.3 82.1c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zm-74.6-7.5c0-19.8 29.9-19.8 29.9 0v216.5c0 19.8-29.9 19.8-29.9 0V106.6zm-74.7 7.5c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zM59.7 144c0-19.8 29.9-19.8 29.9 0v134.3c0 19.8-29.9 19.8-29.9 0V144zm323.4 227.8c-72.8 63-241.7 65.4-318.1 0-15-12.8 4.4-35.5 19.4-22.7 65.9 55.3 216.1 53.9 279.3 0 14.9-12.9 34.3 9.8 19.4 22.7zm5.2-93.5c0 19.8-29.9 19.8-29.9 0V144c0-19.8 29.9-19.8 29.9 0v134.3z" />
        </Icon>
    </>
}