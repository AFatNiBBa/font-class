
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage-car` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage-car?s=sharp-duotone-solid garage-car}
 * @preview ![garage-car](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzYzLjVsMCA0LjUgMCAyNCAwIDI0IDAgNjQgMCAzMiA2NCAwIDAtMzIgMC0xNiAxOTIgMCAwIDE2IDAgMzIgNjQgMCAwLTMyIDAtNjQgMC0yNCAwLTI1LjggMC00LjUtMS43LTQuMi00MC0xMDIuMi02LTE1LjNMNDE2IDI0MGwtMTkyIDAtMTYuNSAwLTUuOSAxNS40LTQwIDEwNC0xLjYgNC4yek0yNjQgNDAwYTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bS00Mi02NGwxOC41LTQ4IDE1OS4xIDAgMTguOCA0OEwyMjIgMzM2em0yMDIgNjRhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTI4VjUxMkg5NlYxOTJINTQ0VjUxMmg5NlYxMjhMMzIwIDAgMCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const GarageCar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 363.5l0 4.5 0 24 0 24 0 64 0 32 64 0 0-32 0-16 192 0 0 16 0 32 64 0 0-32 0-64 0-24 0-25.8 0-4.5-1.7-4.2-40-102.2-6-15.3L416 240l-192 0-16.5 0-5.9 15.4-40 104-1.6 4.2zM264 400a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-42-64l18.5-48 159.1 0 18.8 48L222 336zm202 64a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M0 128V512H96V192H544V512h96V128L320 0 0 128z" />
    </Icon>
);

export default GarageCar;