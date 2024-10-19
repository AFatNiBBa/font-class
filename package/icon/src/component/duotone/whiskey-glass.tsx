
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `whiskey-glass` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=duotone whiskey-glass}
 * @preview ![whiskey-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3OS45NTUgMzJIMzIuMDQ1QzEyLjU0OSAzMiAtMi4zMjQgNDkuMjU0IDAuMzAxIDY4LjUwOEw1Ni4yODkgNDI1LjEwOUM2MC43ODkgNDU2LjYxNyA4Ny43ODMgNDgwIDExOS43NzggNDgwSDM5Mi43MjNDNDI0LjQ2NyA0ODAgNDUxLjU4NiA0NTYuNjE3IDQ1Ni4wODYgNDI1LjEwOUw1MTEuNjk5IDY4LjUwOEM1MTQuMzI0IDQ5LjI1NCA0OTkuNDUxIDMyIDQ3OS45NTUgMzJaTTM5Mi43MjMgNDE2TDExOS41MTQgNDE1LjE4NEw2OS4zODkgOTZINDQyLjYzN0wzOTIuNzIzIDQxNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDIyLjE4MiAyMjRMMzkyLjIzMiA0MTZMMTE5LjAyMyA0MTUuMTg0TDg5IDIyNEg0MjIuMTgyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WhiskeyGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M479.955 32H32.045C12.549 32 -2.324 49.254 0.301 68.508L56.289 425.109C60.789 456.617 87.783 480 119.778 480H392.723C424.467 480 451.586 456.617 456.086 425.109L511.699 68.508C514.324 49.254 499.451 32 479.955 32ZM392.723 416L119.514 415.184L69.389 96H442.637L392.723 416Z" />
            <path d="M422.182 224L392.232 416L119.023 415.184L89 224H422.182Z" />
        </Icon>
    </>
}