
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `u` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=regular u}
 * @preview ![u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNDgwLjAxOEM4Ni4xMjUgNDgwLjAxOCAwIDM5NS4yMDYgMCAyOTAuOTI0VjY0LjAxOEMwIDQ2LjMzIDE0LjMyOCAzMi4wMTggMzIgMzIuMDE4UzY0IDQ2LjMzIDY0IDY0LjAxOFYyOTAuOTI0QzY0IDM1OS44OTMgMTIxLjQyMiA0MTYuMDE4IDE5MiA0MTYuMDE4UzMyMCAzNTkuODkzIDMyMCAyOTAuOTI0VjY0LjAxOEMzMjAgNDYuMzMgMzM0LjMyOCAzMi4wMTggMzUyIDMyLjAxOFMzODQgNDYuMzMgMzg0IDY0LjAxOFYyOTAuOTI0QzM4NCAzOTUuMjA2IDI5Ny44NzUgNDgwLjAxOCAxOTIgNDgwLjAxOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function U(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 480.018C86.125 480.018 0 395.206 0 290.924V64.018C0 46.33 14.328 32.018 32 32.018S64 46.33 64 64.018V290.924C64 359.893 121.422 416.018 192 416.018S320 359.893 320 290.924V64.018C320 46.33 334.328 32.018 352 32.018S384 46.33 384 64.018V290.924C384 395.206 297.875 480.018 192 480.018Z" />
        </Icon>
    </>
}