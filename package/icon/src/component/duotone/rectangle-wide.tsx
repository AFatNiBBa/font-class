
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=duotone rectangle-wide}
 * @preview ![rectangle-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiA0NDhINjRDMjguNjU0IDQ0OCAwIDQxOS4zNDYgMCAzODRWMTI4QzAgOTIuNjU0IDI4LjY1NCA2NCA2NCA2NEg1NzZDNjExLjM0NiA2NCA2NDAgOTIuNjU0IDY0MCAxMjhWMzg0QzY0MCA0MTkuMzQ2IDYxMS4zNDYgNDQ4IDU3NiA0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M576 448H64C28.654 448 0 419.346 0 384V128C0 92.654 28.654 64 64 64H576C611.346 64 640 92.654 640 128V384C640 419.346 611.346 448 576 448Z" />
    </Icon>
);

export default RectangleWide;