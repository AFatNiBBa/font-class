
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `glass-citrus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glass-citrus?s=duotone glass-citrus}
 * @preview ![glass-citrus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM0My43MjYgMTM4LjVDMzM3LjYwMSAxMzEuODc1IDMyOC45NzggMTI4IDMxOS45OCAxMjhIMzIuMDE5QzIzLjAyMSAxMjggMTQuMzk4IDEzMS44NzUgOC4yNzMgMTM4LjVDMi4yNzMgMTQ1LjI1IC0wLjcyNSAxNTQuMTI1IDAuMTUgMTYzLjEyNUwzMi4xNDQgNDgzLjEyNUMzMy43NjkgNDk5LjUgNDcuNTE3IDUxMiA2NC4wMTUgNTEySDI4Ny45ODRDMzA0LjQ4MiA1MTIgMzE4LjIzIDQ5OS41IDMxOS44NTUgNDgzLjEyNUwzNTEuODQ5IDE2My4xMjVDMzUyLjcyNCAxNTQuMTI1IDM0OS43MjYgMTQ1LjI1IDM0My43MjYgMTM4LjVaTTI1OS4wNDggNDQ4SDkyLjk1TDY3LjM1NSAxOTJIMjg0LjY0MkwyNTkuMDQ4IDQ0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzY4LjI1OCAwQzMwNS42MzkgMCAyNTIuODk1IDQwLjI1IDIzMy4xNDYgOTZIMjg1LjY0MUMzMDIuMjY0IDY3LjUgMzMyLjg4NyA0OCAzNjguMjU4IDQ4QzQyMS4yNTQgNDggNDY0LjI1IDkxIDQ2NC4yNSAxNDRDNDY0LjI1IDE5NC4xMjUgNDI1LjYyOSAyMzQuODc1IDM3Ni42MzMgMjM5LjEyNUwzNzEuNzU4IDI4Ny42MjVDNDQ5LjYyNyAyODUuNzUgNTEyLjI0NiAyMjIuMzc1IDUxMi4yNDYgMTQ0QzUxMi4yNDYgNjQuNSA0NDcuNzUyIDAgMzY4LjI1OCAwWk05My4xOTcgNDQ4SDI1OS4yOTVMMjc4LjQ5IDI1Nkg3NEw5My4xOTcgNDQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GlassCitrus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M343.726 138.5C337.601 131.875 328.978 128 319.98 128H32.019C23.021 128 14.398 131.875 8.273 138.5C2.273 145.25 -0.725 154.125 0.15 163.125L32.144 483.125C33.769 499.5 47.517 512 64.015 512H287.984C304.482 512 318.23 499.5 319.855 483.125L351.849 163.125C352.724 154.125 349.726 145.25 343.726 138.5ZM259.048 448H92.95L67.355 192H284.642L259.048 448Z" />
            <path d="M368.258 0C305.639 0 252.895 40.25 233.146 96H285.641C302.264 67.5 332.887 48 368.258 48C421.254 48 464.25 91 464.25 144C464.25 194.125 425.629 234.875 376.633 239.125L371.758 287.625C449.627 285.75 512.246 222.375 512.246 144C512.246 64.5 447.752 0 368.258 0ZM93.197 448H259.295L278.49 256H74L93.197 448Z" />
        </Icon>
    </>
}