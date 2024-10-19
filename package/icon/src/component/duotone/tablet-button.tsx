
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=duotone tablet-button}
 * @preview ![tablet-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMzg0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ2IDQ0OCA0NDhWMzg0SDBaTTIyNCA0ODBDMjA2LjI1IDQ4MCAxOTIgNDY1Ljc1IDE5MiA0NDhTMjA2LjI1IDQxNiAyMjQgNDE2UzI1NiA0MzAuMjUgMjU2IDQ0OFMyNDEuNzUgNDgwIDIyNCA0ODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ0OCA2NFYzODRIMFY2NEMwIDI4LjY1MiAyOC42NTQgMCA2NCAwSDM4NEM0MTkuMzQ2IDAgNDQ4IDI4LjY1MiA0NDggNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V384H0ZM224 480C206.25 480 192 465.75 192 448S206.25 416 224 416S256 430.25 256 448S241.75 480 224 480Z" />
            <path d="M448 64V384H0V64C0 28.652 28.654 0 64 0H384C419.346 0 448 28.652 448 64Z" />
    </Icon>
);

export default TabletButton;