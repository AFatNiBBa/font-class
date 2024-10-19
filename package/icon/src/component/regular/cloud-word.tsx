
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-word` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-word?s=regular cloud-word}
 * @preview ![cloud-word](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMzUySDE3NkMxNjcuMTY0IDM1MiAxNjAgMzU5LjE2MiAxNjAgMzY4QzE2MCAzNzYuODM2IDE2Ny4xNjQgMzg0IDE3NiAzODRIMjA4QzIxNi44MzYgMzg0IDIyNCAzNzYuODM2IDIyNCAzNjhDMjI0IDM1OS4xNjIgMjE2LjgzNiAzNTIgMjA4IDM1MlpNMzY4IDM1MkgyNzJDMjYzLjE2NCAzNTIgMjU2IDM1OS4xNjIgMjU2IDM2OEMyNTYgMzc2LjgzNiAyNjMuMTY0IDM4NCAyNzIgMzg0SDM2OEMzNzYuODM2IDM4NCAzODQgMzc2LjgzNiAzODQgMzY4QzM4NCAzNTkuMTYyIDM3Ni44MzYgMzUyIDM2OCAzNTJaTTI4OCAzMDRDMjg4IDI5NS4xNjIgMjgwLjgzNiAyODggMjcyIDI4OEgxNDRDMTM1LjE2NCAyODggMTI4IDI5NS4xNjIgMTI4IDMwNEMxMjggMzEyLjgzNiAxMzUuMTY0IDMyMCAxNDQgMzIwSDI3MkMyODAuODM2IDMyMCAyODggMzEyLjgzNiAyODggMzA0Wk00NjQgMzUySDQzMkM0MjMuMTY0IDM1MiA0MTYgMzU5LjE2MiA0MTYgMzY4QzQxNiAzNzYuODM2IDQyMy4xNjQgMzg0IDQzMiAzODRINDY0QzQ3Mi44MzYgMzg0IDQ4MCAzNzYuODM2IDQ4MCAzNjhDNDgwIDM1OS4xNjIgNDcyLjgzNiAzNTIgNDY0IDM1MlpNNDk2IDI4Ny45OThIMzM2QzMyNy4xNjQgMjg3Ljk5OCAzMjAgMjk1LjE2MiAzMjAgMzAzLjk5OEMzMjAgMzEyLjgzNiAzMjcuMTY0IDMxOS45OTggMzM2IDMxOS45OThINDk2QzUwNC44MzYgMzE5Ljk5OCA1MTIgMzEyLjgzNiA1MTIgMzAzLjk5OEM1MTIgMjk1LjE2MiA1MDQuODM2IDI4Ny45OTggNDk2IDI4Ny45OThaTTU0My4zNzUgMjE0LjQ2OUM1NDMuNSAyMTIuMjgxIDU0NCAyMTAuMjAzIDU0NCAyMDhDNTQ0IDE0Ni4xNDEgNDkzLjg3NSA5NiA0MzIgOTZDNDIwLjYyNSA5NiA0MDkuODEyIDk4LjIwMyAzOTkuNDM4IDEwMS4zNzVDMzY4Ljg3NSA1OS41MTYgMzE5LjgxMiAzMiAyNjQgMzJDMTcwLjgxMiAzMiA5NS40MzggMTA3LjkzOCA5Ni4wOTQgMjAwLjc5N0M0MC4yMTkgMjIwLjYwOSAwIDI3My4zNzUgMCAzMzZDMCA0MTUuNTE2IDY0LjUgNDgwIDE0NCA0ODBINTA0QzU3OS4xMjUgNDgwIDY0MCA0MTkuMTA5IDY0MCAzNDRDNjQwIDI4Mi42NTYgNTk5LjEyNSAyMzEuNDIyIDU0My4zNzUgMjE0LjQ2OVpNNTA0IDQzMkgxNDRDOTEuMDYyIDQzMiA0OCAzODguOTIyIDQ4IDMzNkM0OCAyOTUuODEyIDczLjc1IDI1OS42NTYgMTEyLjEyNSAyNDYuMDE2TDE0NC4zMTIgMjM0LjU5NEMxNDQuMDMxIDE5NiAxNDQuMDk0IDIwMS40NjkgMTQ0LjAzMSAxOTcuNDM4QzE0NS40MDYgMTMyLjQ1MyAxOTguNjg4IDgwIDI2NCA4MEMzMDIuNDA2IDgwIDMzNy42MjUgOTguMTA5IDM2MC42ODggMTI5LjY1NkwzODAuODEyIDE1Ny4yODFMNDEzLjQ2OSAxNDcuMjk3QzQ2Mi4zNDQgMTMyLjM0NCA0OTcuNjg3IDE3Mi44NTkgNDk1LjQzNyAyMTEuNzE5TDQ5My4yMTkgMjQ5LjQzN0w1MjkuMzc1IDI2MC40MjJDNTY2LjgxMiAyNzEuODEyIDU5MiAzMDUuNDA2IDU5MiAzNDQuMDMxQzU5MiAzOTIuNTE2IDU1Mi41IDQzMiA1MDQgNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CloudWord(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M208 352H176C167.164 352 160 359.162 160 368C160 376.836 167.164 384 176 384H208C216.836 384 224 376.836 224 368C224 359.162 216.836 352 208 352ZM368 352H272C263.164 352 256 359.162 256 368C256 376.836 263.164 384 272 384H368C376.836 384 384 376.836 384 368C384 359.162 376.836 352 368 352ZM288 304C288 295.162 280.836 288 272 288H144C135.164 288 128 295.162 128 304C128 312.836 135.164 320 144 320H272C280.836 320 288 312.836 288 304ZM464 352H432C423.164 352 416 359.162 416 368C416 376.836 423.164 384 432 384H464C472.836 384 480 376.836 480 368C480 359.162 472.836 352 464 352ZM496 287.998H336C327.164 287.998 320 295.162 320 303.998C320 312.836 327.164 319.998 336 319.998H496C504.836 319.998 512 312.836 512 303.998C512 295.162 504.836 287.998 496 287.998ZM543.375 214.469C543.5 212.281 544 210.203 544 208C544 146.141 493.875 96 432 96C420.625 96 409.812 98.203 399.438 101.375C368.875 59.516 319.812 32 264 32C170.812 32 95.438 107.938 96.094 200.797C40.219 220.609 0 273.375 0 336C0 415.516 64.5 480 144 480H504C579.125 480 640 419.109 640 344C640 282.656 599.125 231.422 543.375 214.469ZM504 432H144C91.062 432 48 388.922 48 336C48 295.812 73.75 259.656 112.125 246.016L144.312 234.594C144.031 196 144.094 201.469 144.031 197.438C145.406 132.453 198.688 80 264 80C302.406 80 337.625 98.109 360.688 129.656L380.812 157.281L413.469 147.297C462.344 132.344 497.687 172.859 495.437 211.719L493.219 249.437L529.375 260.422C566.812 271.812 592 305.406 592 344.031C592 392.516 552.5 432 504 432Z" />
        </Icon>
    </>
}