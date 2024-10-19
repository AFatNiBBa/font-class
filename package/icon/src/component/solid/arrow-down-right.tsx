
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=solid arrow-down-right}
 * @preview ![arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjggMTMyLjI4MUMzMDUuOTA2IDEzMi4yODEgMjg4IDE1MC4xODggMjg4IDE3Mi4yODFWMjgzLjcxOUw4NC4yODEgODBDNjguNjU2IDY0LjM3NSA0My4zNDQgNjQuMzc1IDI3LjcxOSA4MFMxMi4wOTQgMTIwLjkzOCAyNy43MTkgMTM2LjU2MkwyMzEuNDM3IDM0MC4yODFIMTIwQzk3LjkwNiAzNDAuMjgxIDgwIDM1OC4xODggODAgMzgwLjI4MVM5Ny45MDYgNDIwLjI4MSAxMjAgNDIwLjI4MUgzMjhDMzUwLjA5NCA0MjAuMjgxIDM2OCA0MDIuMzc1IDM2OCAzODAuMjgxVjE3Mi4yODFDMzY4IDE1MC4xODggMzUwLjA5NCAxMzIuMjgxIDMyOCAxMzIuMjgxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDownRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M328 132.281C305.906 132.281 288 150.188 288 172.281V283.719L84.281 80C68.656 64.375 43.344 64.375 27.719 80S12.094 120.938 27.719 136.562L231.437 340.281H120C97.906 340.281 80 358.188 80 380.281S97.906 420.281 120 420.281H328C350.094 420.281 368 402.375 368 380.281V172.281C368 150.188 350.094 132.281 328 132.281Z" />
        </Icon>
    </>
}