
import { Icon, generic } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=duotone horizontal-rule}
 * @preview ![horizontal-rule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCAyNTUuODc0VjI1NS44NzRDNjQwIDI3My41NDMgNjI1LjU0MyAyODggNjA3Ljg3NCAyODhIMzEuODc0QzE0LjM0MyAyODggMCAyNzMuNjU3IDAgMjU2LjEyNlYyNTYuMTI2QzAgMjM4LjQ1NyAxNC40NTcgMjI0IDMyLjEyNiAyMjRINjA4LjEyNkM2MjUuNzMgMjI0IDY0MCAyMzguMjcgNjQwIDI1NS44NzRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M640 255.874V255.874C640 273.543 625.543 288 607.874 288H31.874C14.343 288 0 273.657 0 256.126V256.126C0 238.457 14.457 224 32.126 224H608.126C625.73 224 640 238.27 640 255.874Z" />
    </Icon>
);

export default HorizontalRule;