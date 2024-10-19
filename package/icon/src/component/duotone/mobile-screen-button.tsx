
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-screen-button` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=duotone mobile-screen-button}
 * @preview ![mobile-screen-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAwSDk2QzYwLjY1NCAwIDMyIDI4LjY1NCAzMiA2NFY0NDhDMzIgNDgzLjM0NiA2MC42NTQgNTEyIDk2IDUxMkgyODhDMzIzLjM0NiA1MTIgMzUyIDQ4My4zNDYgMzUyIDQ0OFY2NEMzNTIgMjguNjU0IDMyMy4zNDYgMCAyODggMFpNMTkyIDQ4MEMxNzQuMjUgNDgwIDE2MCA0NjUuNzUgMTYwIDQ0OFMxNzQuMjUgNDE2IDE5MiA0MTZTMjI0IDQzMC4yNSAyMjQgNDQ4UzIwOS43NSA0ODAgMTkyIDQ4MFpNMjg4IDY0VjM4NEg5NlY2NEgyODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4OCA2NFYzODRIOTZWNjRIMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const MobileScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M288 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H288C323.346 512 352 483.346 352 448V64C352 28.654 323.346 0 288 0ZM192 480C174.25 480 160 465.75 160 448S174.25 416 192 416S224 430.25 224 448S209.75 480 192 480ZM288 64V384H96V64H288Z" />
            <path d="M288 64V384H96V64H288Z" />
    </Icon>
);

export default MobileScreenButton;