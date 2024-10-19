
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stop` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=thin stop}
 * @preview ![stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNjRINjRDMjguNjU0IDY0IDAgOTIuNjUyIDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhIMzIwQzM1NS4zNDYgNDQ4IDM4NCA0MTkuMzQ2IDM4NCAzODRWMTI4QzM4NCA5Mi42NTIgMzU1LjM0NiA2NCAzMjAgNjRaTTM2OCAzODRDMzY4IDQxMC40NjcgMzQ2LjQ2NyA0MzIgMzIwIDQzMkg2NEMzNy41MzMgNDMyIDE2IDQxMC40NjcgMTYgMzg0VjEyOEMxNiAxMDEuNTMzIDM3LjUzMyA4MCA2NCA4MEgzMjBDMzQ2LjQ2NyA4MCAzNjggMTAxLjUzMyAzNjggMTI4VjM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Stop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 64H64C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 64 448H320C355.346 448 384 419.346 384 384V128C384 92.652 355.346 64 320 64ZM368 384C368 410.467 346.467 432 320 432H64C37.533 432 16 410.467 16 384V128C16 101.533 37.533 80 64 80H320C346.467 80 368 101.533 368 128V384Z" />
        </Icon>
    </>
}