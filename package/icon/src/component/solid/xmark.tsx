
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `xmark` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=solid xmark}
 * @preview ![xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDguMjgxIDM0Ny43MTdDMzIzLjkwNiAzNjMuMzQyIDMyMy45MDYgMzg4LjY1NSAzMDguMjgxIDQwNC4yOEMyOTIuNjQ3IDQxOS45MTQgMjY3LjMzOSA0MTkuOSAyNTEuNzE5IDQwNC4yOEwxNjAgMzEyLjU2MUw2OC4yODEgNDA0LjI4QzUyLjY0NyA0MTkuOTE0IDI3LjMzOSA0MTkuOSAxMS43MTkgNDA0LjI4Qy0zLjkwNiAzODguNjU1IC0zLjkwNiAzNjMuMzQyIDExLjcxOSAzNDcuNzE3TDEwMy40MzggMjU1Ljk5OUwxMS43MTkgMTY0LjI4MUMtMy45MDYgMTQ4LjY1NiAtMy45MDYgMTIzLjM0NCAxMS43MTkgMTA3LjcxOVM1Mi42NTYgOTIuMDk0IDY4LjI4MSAxMDcuNzE5TDE2MCAxOTkuNDM3TDI1MS43MTkgMTA3LjcxOUMyNjcuMzQ0IDkyLjA5NCAyOTIuNjU2IDkyLjA5NCAzMDguMjgxIDEwNy43MTlTMzIzLjkwNiAxNDguNjU2IDMwOC4yODEgMTY0LjI4MUwyMTYuNTYyIDI1NS45OTlMMzA4LjI4MSAzNDcuNzE3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Xmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M308.281 347.717C323.906 363.342 323.906 388.655 308.281 404.28C292.647 419.914 267.339 419.9 251.719 404.28L160 312.561L68.281 404.28C52.647 419.914 27.339 419.9 11.719 404.28C-3.906 388.655 -3.906 363.342 11.719 347.717L103.438 255.999L11.719 164.281C-3.906 148.656 -3.906 123.344 11.719 107.719S52.656 92.094 68.281 107.719L160 199.437L251.719 107.719C267.344 92.094 292.656 92.094 308.281 107.719S323.906 148.656 308.281 164.281L216.562 255.999L308.281 347.717Z" />
        </Icon>
    </>
}