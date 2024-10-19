
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `battery-three-quarters` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-three-quarters?s=regular battery-three-quarters}
 * @preview ![battery-three-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAzMjBIMzUyVjE5Mkg5NlYzMjBaTTU0NCAxOTJWMTYwQzU0NCAxMjQuNjU0IDUxNS4zNDYgOTYgNDgwIDk2SDY0QzI4LjY1NCA5NiAwIDEyNC42NTQgMCAxNjBWMzUyQzAgMzg3LjM0NiAyOC42NTQgNDE2IDY0IDQxNkg0ODBDNTE1LjM0NiA0MTYgNTQ0IDM4Ny4zNDYgNTQ0IDM1MlYzMjBDNTYxLjY3NCAzMjAgNTc2IDMwNS42NzQgNTc2IDI4OFYyMjRDNTc2IDIwNi4zMjYgNTYxLjY3NCAxOTIgNTQ0IDE5MlpNNDk2IDM1MkM0OTYgMzYwLjgyMiA0ODguODIyIDM2OCA0ODAgMzY4SDY0QzU1LjE3OCAzNjggNDggMzYwLjgyMiA0OCAzNTJWMTYwQzQ4IDE1MS4xNzggNTUuMTc4IDE0NCA2NCAxNDRINDgwQzQ4OC44MjIgMTQ0IDQ5NiAxNTEuMTc4IDQ5NiAxNjBWMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BatteryThreeQuarters(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M96 320H352V192H96V320ZM544 192V160C544 124.654 515.346 96 480 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H480C515.346 416 544 387.346 544 352V320C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192ZM496 352C496 360.822 488.822 368 480 368H64C55.178 368 48 360.822 48 352V160C48 151.178 55.178 144 64 144H480C488.822 144 496 151.178 496 160V352Z" />
        </Icon>
    </>
}