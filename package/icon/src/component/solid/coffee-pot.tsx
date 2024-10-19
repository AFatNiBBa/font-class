
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=solid coffee-pot}
 * @preview ![coffee-pot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzEuNSAxNzcuNjI1TDQ4MCAzMkg4OEMzOS4zNzUgMzIgMCA3MS4zNzUgMCAxMjBWMjA4QzAgMjE2Ljg3NSA3LjEyNSAyMjQgMTYgMjI0SDQ4QzU2Ljg3NSAyMjQgNjQgMjE2Ljg3NSA2NCAyMDhWMTM2QzY0IDExMy44NzUgODEuODc1IDk2IDEwNCA5NkgxMTcuMzc1TDE0NC43NSAxNzguMTI1Qzk1LjM3NSAyMTcuODc1IDY0IDI3Ny43NSA2NCAzNDQuNjI1QzY0IDM5Ni4xMjUgODIuNjI1IDQyOS4zNzUgMTEzLjYyNSA0NjIuMzc1QzEyNC41IDQ3My42MjUgMTM5LjUgNDgwIDE1NS4xMjUgNDgwSDQyMC44NzVDNDM2LjUgNDgwIDQ1MS41IDQ3My43NSA0NjIuMjUgNDYyLjM3NUM0OTMuMjUgNDI5LjUgNTEyIDM5Ni4xMjUgNTEyIDM0NC42MjVDNTEyIDI3OC4zNzUgNDgxLjM3NSAyMTcuODc1IDQzMS41IDE3Ny42MjVaTTQ0NS44NzUgMzIwSDEzMC42MjVDMTM3LjM3NSAyODEgMTU5LjUgMjQ3LjEyNSAxOTEuMTI1IDIyNEgzODYuODc1QzQxNy44NzUgMjQ3LjI1IDQzOS41IDI4MS4yNSA0NDUuODc1IDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CoffeePot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M431.5 177.625L480 32H88C39.375 32 0 71.375 0 120V208C0 216.875 7.125 224 16 224H48C56.875 224 64 216.875 64 208V136C64 113.875 81.875 96 104 96H117.375L144.75 178.125C95.375 217.875 64 277.75 64 344.625C64 396.125 82.625 429.375 113.625 462.375C124.5 473.625 139.5 480 155.125 480H420.875C436.5 480 451.5 473.75 462.25 462.375C493.25 429.5 512 396.125 512 344.625C512 278.375 481.375 217.875 431.5 177.625ZM445.875 320H130.625C137.375 281 159.5 247.125 191.125 224H386.875C417.875 247.25 439.5 281.25 445.875 320Z" />
        </Icon>
    </>
}