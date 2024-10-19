
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sigma` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=solid sigma}
 * @preview ![sigma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDMuOTkzIDEyMFYxMTJIMTMzLjYxOEwyNDQuODk5IDIyOC4zNDRDMjU5LjY4IDI0My44MTIgMjU5LjY4IDI2OC4xODggMjQ0Ljg5OSAyODMuNjU2TDEzMy42MTggNDAwSDMwMy45OTNWMzkyQzMwMy45OTMgMzY5LjkwNiAzMjEuODk5IDM1MiAzNDMuOTkzIDM1MlMzODMuOTkzIDM2OS45MDYgMzgzLjk5MyAzOTJWNDQwQzM4My45OTMgNDYyLjA5NCAzNjYuMDg2IDQ4MCAzNDMuOTkzIDQ4MEgzOS45OTNDMjMuOTYxIDQ4MCA5LjQ5MyA0NzAuNDM4IDMuMjExIDQ1NS43MTlTMC4wMjQgNDIzLjkzNyAxMS4wODYgNDEyLjM0NEwxNjAuNjQ5IDI1NkwxMS4wODYgOTkuNjU2QzAuMDI0IDg4LjA2MiAtMy4wNyA3MSAzLjIxMSA1Ni4yODFTMjMuOTYxIDMyIDM5Ljk5MyAzMkgzNDMuOTkzQzM2Ni4wODYgMzIgMzgzLjk5MyA0OS45MDYgMzgzLjk5MyA3MlYxMjBDMzgzLjk5MyAxNDIuMDk0IDM2Ni4wODYgMTYwIDM0My45OTMgMTYwUzMwMy45OTMgMTQyLjA5NCAzMDMuOTkzIDEyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sigma(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M303.993 120V112H133.618L244.899 228.344C259.68 243.812 259.68 268.188 244.899 283.656L133.618 400H303.993V392C303.993 369.906 321.899 352 343.993 352S383.993 369.906 383.993 392V440C383.993 462.094 366.086 480 343.993 480H39.993C23.961 480 9.493 470.438 3.211 455.719S0.024 423.937 11.086 412.344L160.649 256L11.086 99.656C0.024 88.062 -3.07 71 3.211 56.281S23.961 32 39.993 32H343.993C366.086 32 383.993 49.906 383.993 72V120C383.993 142.094 366.086 160 343.993 160S303.993 142.094 303.993 120Z" />
        </Icon>
    </>
}