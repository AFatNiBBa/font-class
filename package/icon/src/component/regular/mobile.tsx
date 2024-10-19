
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mobile` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=regular mobile}
 * @preview ![mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgMEg4MEM0NC42NTQgMCAxNiAyOC42NTQgMTYgNjRWNDQ4QzE2IDQ4My4zNDYgNDQuNjU0IDUxMiA4MCA1MTJIMzA0QzMzOS4zNDYgNTEyIDM2OCA0ODMuMzQ2IDM2OCA0NDhWNjRDMzY4IDI4LjY1NCAzMzkuMzQ2IDAgMzA0IDBaTTMyMCA0NDhDMzIwIDQ1Ni44MjIgMzEyLjgyMiA0NjQgMzA0IDQ2NEg4MEM3MS4xNzggNDY0IDY0IDQ1Ni44MjIgNjQgNDQ4VjY0QzY0IDU1LjE3OCA3MS4xNzggNDggODAgNDhIMzA0QzMxMi44MjIgNDggMzIwIDU1LjE3OCAzMjAgNjRWNDQ4Wk0yMjQgNDAwSDE2MEMxNTEuMTY0IDQwMCAxNDQgNDA3LjE2NCAxNDQgNDE2UzE1MS4xNjQgNDMyIDE2MCA0MzJIMjI0QzIzMi44MzggNDMyIDI0MCA0MjQuODM2IDI0MCA0MTZTMjMyLjgzOCA0MDAgMjI0IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mobile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M304 0H80C44.654 0 16 28.654 16 64V448C16 483.346 44.654 512 80 512H304C339.346 512 368 483.346 368 448V64C368 28.654 339.346 0 304 0ZM320 448C320 456.822 312.822 464 304 464H80C71.178 464 64 456.822 64 448V64C64 55.178 71.178 48 80 48H304C312.822 48 320 55.178 320 64V448ZM224 400H160C151.164 400 144 407.164 144 416S151.164 432 160 432H224C232.838 432 240 424.836 240 416S232.838 400 224 400Z" />
        </Icon>
    </>
}