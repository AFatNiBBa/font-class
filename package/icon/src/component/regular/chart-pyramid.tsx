
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-pyramid` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=regular chart-pyramid}
 * @preview ![chart-pyramid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuMjczIDQxN0wyOTIuOTUxIDUzQzI4NC43ODMgMzkgMjcwLjM5NiAzMiAyNTUuOTk0IDMyUzIyNy4xNzUgMzkgMjE4Ljk1MyA1M0w1Ljc0MiA0MTdDLTEwLjU5MiA0NDQuODkxIDkuODUxIDQ4MCA0Mi43NCA0ODBINDY5LjI3NUM1MDIuMDUyIDQ4MCA1MjIuNjA1IDQ0NSA1MDYuMjczIDQxN1pNMjU1Ljk1MyA4NC44MDNMMzE0LjA4OCAxODRIMTk3Ljg0OUwyNTUuOTUzIDg0LjgwM1pNMTY5LjczMiAyMzJIMzQyLjIxOEwzODkuMTAzIDMxMkgxMjIuODczTDE2OS43MzIgMjMyWk01Mi41ODQgNDMyTDk2IDM1Ny44NzlWMzYwSDQxNlYzNTcuODk1TDQ1OS40MjkgNDMySDUyLjU4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChartPyramid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M506.273 417L292.951 53C284.783 39 270.396 32 255.994 32S227.175 39 218.953 53L5.742 417C-10.592 444.891 9.851 480 42.74 480H469.275C502.052 480 522.605 445 506.273 417ZM255.953 84.803L314.088 184H197.849L255.953 84.803ZM169.732 232H342.218L389.103 312H122.873L169.732 232ZM52.584 432L96 357.879V360H416V357.895L459.429 432H52.584Z" />
        </Icon>
    </>
}