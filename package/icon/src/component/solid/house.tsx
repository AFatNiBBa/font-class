
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `house` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house?s=solid house}
 * @preview ![house](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjUuMDgxIDIzMS45MDZMNTExLjk5NyAxODUuNDYxVjQ3Ljk4NUM1MTEuOTk3IDM5LjE1NiA1MDQuODQxIDMxLjk4NSA0OTUuOTk3IDMxLjk4NUg0MzIuMDAyQzQyMy4xNiAzMS45ODUgNDE2LjAwNCAzOS4xNTYgNDE2LjAwNCA0Ny45ODVWMTAxLjQ3M0wzMDkuMDgyIDcuOTIyQzMwMy4wNTIgMi42NCAyOTUuNTI4IDAgMjg4LjAwNiAwQzI4MS44MDggMCAyNzMuODU5IDEuODUyIDI2Ni45MjYgNy45MjJMMTAuOTI4IDIzMS45MDZDLTExLjI0NSAyNTEuMzE1IDIuNjA3IDI4OCAzMi4wMDYgMjg4SDY0LjAyOVY0NDhDNjQuMDI5IDQ4My4zNDUgOTIuNjgzIDUxMiAxMjguMDI5IDUxMkg0NDcuOTk4QzQ4My4zNDUgNTEyIDUxMS45OTcgNDgzLjM0NSA1MTEuOTk3IDQ0OFYyODhINTQ0LjAwM0M1NjEuNzM5IDI4OCA1NzYuMDAzIDI3My42MDIgNTc2LjAwMyAyNTZDNTc2LjAwMyAyNDYuOTQ3IDU3Mi4xNjEgMjM4LjEwNCA1NjUuMDgxIDIzMS45MDZaTTM1Mi4wMTQgMjk4LjYyNUMzNTIuMDE0IDMxMC41IDM0Mi4zODkgMzIwIDMzMC42MzkgMzIwSDI0NS4zOTNDMjMzLjY0MyAzMjAgMjI0LjAxOSAzMTAuMzc1IDIyNC4wMTkgMjk4LjYyNVYyMTMuMzc1QzIyNC4wMTkgMjAxLjUgMjMzLjY0MyAxOTIgMjQ1LjM5MyAxOTJIMzMwLjYzOUMzNDIuMzg5IDE5MiAzNTIuMDE0IDIwMS41IDM1Mi4wMTQgMjEzLjM3NVYyOTguNjI1WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function House(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M565.081 231.906L511.997 185.461V47.985C511.997 39.156 504.841 31.985 495.997 31.985H432.002C423.16 31.985 416.004 39.156 416.004 47.985V101.473L309.082 7.922C303.052 2.64 295.528 0 288.006 0C281.808 0 273.859 1.852 266.926 7.922L10.928 231.906C-11.245 251.315 2.607 288 32.006 288H64.029V448C64.029 483.345 92.683 512 128.029 512H447.998C483.345 512 511.997 483.345 511.997 448V288H544.003C561.739 288 576.003 273.602 576.003 256C576.003 246.947 572.161 238.104 565.081 231.906ZM352.014 298.625C352.014 310.5 342.389 320 330.639 320H245.393C233.643 320 224.019 310.375 224.019 298.625V213.375C224.019 201.5 233.643 192 245.393 192H330.639C342.389 192 352.014 201.5 352.014 213.375V298.625Z " />
        </Icon>
    </>
}