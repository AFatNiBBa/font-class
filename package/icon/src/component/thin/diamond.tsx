
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diamond` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=thin diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuOTcgMjIyLjEyOUwyODkuODcxIDE0LjAyOUMyODAuNTE3IDQuNjc2IDI2OC4yNTkgMCAyNTYgMEMyNDMuNzQyIDAgMjMxLjQ4MiA0LjY3NiAyMjIuMTI4IDE0LjAyOUwxNC4wMjkgMjIyLjEyOUMtNC42NzYgMjQwLjgzNCAtNC42NzYgMjcxLjE2NCAxNC4wMjkgMjg5Ljg3MUwyMjIuMTI4IDQ5Ny45NjlDMjMxLjQ4MiA1MDcuMzIyIDI0My43NDIgNTEyIDI1NiA1MTJDMjY4LjI1OSA1MTIgMjgwLjUxNyA1MDcuMzIyIDI4OS44NzEgNDk3Ljk2OUw0OTcuOTcgMjg5Ljg3MUM1MTYuNjc1IDI3MS4xNjQgNTE2LjY3NSAyNDAuODM0IDQ5Ny45NyAyMjIuMTI5Wk00ODYuNjU4IDI3OC41NTdMMjc4LjU1OCA0ODYuNjU2QzI3Mi41MzMgNDkyLjY4MiAyNjQuNTIxIDQ5NiAyNTYgNDk2QzI0Ny40OCA0OTYgMjM5LjQ2OCA0OTIuNjgyIDIzMy40NDMgNDg2LjY1NEwyNS4zNDMgMjc4LjU1OUMxMi45MDYgMjY2LjExOSAxMi45MDYgMjQ1Ljg4MSAyNS4zNDMgMjMzLjQ0M0wyMzMuNDQzIDI1LjM0NEMyMzkuNDY4IDE5LjMxOCAyNDcuNDggMTYgMjU2IDE2QzI2NC41MjEgMTYgMjcyLjUzMyAxOS4zMTggMjc4LjU1OCAyNS4zNDRMNDg2LjY1OCAyMzMuNDQzQzQ5OS4wOTUgMjQ1Ljg4MSA0OTkuMDkzIDI2Ni4xMTkgNDg2LjY1OCAyNzguNTU3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Diamond(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.97 222.129L289.871 14.029C280.517 4.676 268.259 0 256 0C243.742 0 231.482 4.676 222.128 14.029L14.029 222.129C-4.676 240.834 -4.676 271.164 14.029 289.871L222.128 497.969C231.482 507.322 243.742 512 256 512C268.259 512 280.517 507.322 289.871 497.969L497.97 289.871C516.675 271.164 516.675 240.834 497.97 222.129ZM486.658 278.557L278.558 486.656C272.533 492.682 264.521 496 256 496C247.48 496 239.468 492.682 233.443 486.654L25.343 278.559C12.906 266.119 12.906 245.881 25.343 233.443L233.443 25.344C239.468 19.318 247.48 16 256 16C264.521 16 272.533 19.318 278.558 25.344L486.658 233.443C499.095 245.881 499.093 266.119 486.658 278.557Z" />
        </Icon>
    </>
}