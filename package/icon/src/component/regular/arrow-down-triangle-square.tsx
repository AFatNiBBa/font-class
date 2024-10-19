
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-triangle-square` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-triangle-square?s=regular arrow-down-triangle-square}
 * @preview ![arrow-down-triangle-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDguMDA1IDI4OEgzMjAuMDAzQzMwMi4zMjkgMjg4IDI4OC4wMDMgMzAyLjMyOCAyODguMDAzIDMyMFY0NDhDMjg4LjAwMyA0NjUuNjcyIDMwMi4zMjkgNDgwIDMyMC4wMDMgNDgwSDQ0OC4wMDVDNDY1LjY3OSA0ODAgNDgwLjAwNSA0NjUuNjcyIDQ4MC4wMDUgNDQ4VjMyMEM0ODAuMDA1IDMwMi4zMjggNDY1LjY3OSAyODggNDQ4LjAwNSAyODhaTTQzMi4wMDUgNDMySDMzNi4wMDNWMzM2SDQzMi4wMDVWNDMyWk00OTIuMTMyIDE4Mi44NzVMNDA5LjAwNSA0NS43NUM0MDMuNjMgMzcuMTI1IDM5NC4xMyAzMiAzODQuMDA1IDMyQzM3My44NzggMzIgMzY0LjUwMyAzNy4xMjUgMzU5LjEyOCA0NS43NUwyNzUuODc2IDE4Mi44NzVDMjY0Ljg3NiAyMDEuMTI1IDI3OC42MjYgMjI0IDMwMC44NzggMjI0SDQ2Ny4xM0M0ODkuMzgyIDIyNCA1MDMuMTMyIDIwMS4xMjUgNDkyLjEzMiAxODIuODc1Wk0zMzYuMjUzIDE3NkwzODQuMDA1IDk3LjEyNUw0MzEuNzU1IDE3NkgzMzYuMjUzWk0yNDEuNjIgMzY4LjU1M0MyNTAuNjIgMzU4Ljc5NSAyNTAuMDI3IDM0My41OTYgMjQwLjI3NyAzMzQuNjE5QzIzNS42NTQgMzMwLjMzOCAyMjkuODEgMzI4LjI0IDIyMy45OTcgMzI4LjI0QzIxNy41MjkgMzI4LjI0IDIxMS4wOTEgMzMwLjgzOCAyMDYuMzcyIDMzNS45NjNMMTUxLjk5OSAzOTQuOTE2VjU2LjAyMUMxNTEuOTk5IDQyLjc2IDE0MS4yNDkgMzIuMDAyIDEyNy45OTkgMzIuMDAyUzEwMy45OTkgNDIuNzYgMTAzLjk5OSA1Ni4wMjFWMzk0LjkxNkw0OS42MjYgMzM1Ljk2M0M0MC42ODkgMzI2LjIwNSAyNS41MDEgMzI1LjU0OSAxNS43MjIgMzM0LjYxOUM1Ljk3MiAzNDMuNTk2IDUuMzc4IDM1OC43OTUgMTQuMzc4IDM2OC41NTNMMTEwLjM3NCA0NzIuNjM1QzExOS40MzcgNDgyLjQ1NSAxMzYuNTYyIDQ4Mi40NTUgMTQ1LjYyNCA0NzIuNjM1TDI0MS42MiAzNjguNTUzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDownTriangleSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448.005 288H320.003C302.329 288 288.003 302.328 288.003 320V448C288.003 465.672 302.329 480 320.003 480H448.005C465.679 480 480.005 465.672 480.005 448V320C480.005 302.328 465.679 288 448.005 288ZM432.005 432H336.003V336H432.005V432ZM492.132 182.875L409.005 45.75C403.63 37.125 394.13 32 384.005 32C373.878 32 364.503 37.125 359.128 45.75L275.876 182.875C264.876 201.125 278.626 224 300.878 224H467.13C489.382 224 503.132 201.125 492.132 182.875ZM336.253 176L384.005 97.125L431.755 176H336.253ZM241.62 368.553C250.62 358.795 250.027 343.596 240.277 334.619C235.654 330.338 229.81 328.24 223.997 328.24C217.529 328.24 211.091 330.838 206.372 335.963L151.999 394.916V56.021C151.999 42.76 141.249 32.002 127.999 32.002S103.999 42.76 103.999 56.021V394.916L49.626 335.963C40.689 326.205 25.501 325.549 15.722 334.619C5.972 343.596 5.378 358.795 14.378 368.553L110.374 472.635C119.437 482.455 136.562 482.455 145.624 472.635L241.62 368.553Z" />
        </Icon>
    </>
}