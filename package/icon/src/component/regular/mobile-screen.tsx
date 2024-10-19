
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=regular mobile-screen}
 * @preview ![mobile-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgMEg4MEM0NC42NTQgMCAxNiAyOC42NTQgMTYgNjRWNDQ4QzE2IDQ4My4zNDYgNDQuNjU0IDUxMiA4MCA1MTJIMzA0QzMzOS4zNDYgNTEyIDM2OCA0ODMuMzQ2IDM2OCA0NDhWNjRDMzY4IDI4LjY1NCAzMzkuMzQ2IDAgMzA0IDBaTTMyMCA0NDhDMzIwIDQ1Ni44MjIgMzEyLjgyMiA0NjQgMzA0IDQ2NEg4MEM3MS4xNzggNDY0IDY0IDQ1Ni44MjIgNjQgNDQ4VjM2OEgzMjBWNDQ4Wk0zMjAgMzIwSDY0VjY0QzY0IDU1LjE3OCA3MS4xNzggNDggODAgNDhIMzA0QzMxMi44MjIgNDggMzIwIDU1LjE3OCAzMjAgNjRWMzIwWk0xNjAgNDMySDIyNEMyMzIuODM2IDQzMiAyNDAgNDI0LjgzNiAyNDAgNDE2UzIzMi44MzYgNDAwIDIyNCA0MDBIMTYwQzE1MS4xNjQgNDAwIDE0NCA0MDcuMTY0IDE0NCA0MTZTMTUxLjE2NCA0MzIgMTYwIDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MobileScreen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M304 0H80C44.654 0 16 28.654 16 64V448C16 483.346 44.654 512 80 512H304C339.346 512 368 483.346 368 448V64C368 28.654 339.346 0 304 0ZM320 448C320 456.822 312.822 464 304 464H80C71.178 464 64 456.822 64 448V368H320V448ZM320 320H64V64C64 55.178 71.178 48 80 48H304C312.822 48 320 55.178 320 64V320ZM160 432H224C232.836 432 240 424.836 240 416S232.836 400 224 400H160C151.164 400 144 407.164 144 416S151.164 432 160 432Z" />
        </Icon>
    </>
}