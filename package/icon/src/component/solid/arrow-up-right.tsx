
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=solid arrow-up-right}
 * @preview ![arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjggODBIMTIwQzk3LjkwNiA4MCA4MCA5Ny45MDYgODAgMTIwUzk3LjkwNiAxNjAgMTIwIDE2MEgyMzEuNDM3TDI3LjcxOSAzNjMuNzE5QzEyLjA5NCAzNzkuMzQ0IDEyLjA5NCA0MDQuNjU2IDI3LjcxOSA0MjAuMjgxQzM1LjUzMSA0MjguMDk0IDQ1Ljc2NiA0MzIgNTYgNDMyUzc2LjQ2OSA0MjguMDk0IDg0LjI4MSA0MjAuMjgxTDI4OCAyMTYuNTYyVjMyOEMyODggMzUwLjA5NCAzMDUuOTA2IDM2OCAzMjggMzY4UzM2OCAzNTAuMDk0IDM2OCAzMjhWMTIwQzM2OCA5Ny45MDYgMzUwLjA5NCA4MCAzMjggODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M328 80H120C97.906 80 80 97.906 80 120S97.906 160 120 160H231.437L27.719 363.719C12.094 379.344 12.094 404.656 27.719 420.281C35.531 428.094 45.766 432 56 432S76.469 428.094 84.281 420.281L288 216.562V328C288 350.094 305.906 368 328 368S368 350.094 368 328V120C368 97.906 350.094 80 328 80Z" />
        </Icon>
    </>
}