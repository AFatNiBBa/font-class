
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=duotone rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA0NDhINjRDMjguNjU0IDQ0OCAwIDQxOS4zNDYgMCAzODRWMTI4QzAgOTIuNjU0IDI4LjY1NCA2NCA2NCA2NEg0NDhDNDgzLjM0NiA2NCA1MTIgOTIuNjU0IDUxMiAxMjhWMzg0QzUxMiA0MTkuMzQ2IDQ4My4zNDYgNDQ4IDQ0OCA0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M448 448H64C28.654 448 0 419.346 0 384V128C0 92.654 28.654 64 64 64H448C483.346 64 512 92.654 512 128V384C512 419.346 483.346 448 448 448Z" />
    </Icon>
);

export default Rectangle;