
import { Icon, generic } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=duotone weight-hanging}
 * @preview ![weight-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgOTZjMCAxMS4yIDEuOSAyMiA1LjUgMzJsODEgMGMtMTIuNy00LjQtMjItMTctMjIuNC0zMWMwLS4zIDAtLjcgMC0xYzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJjMCAuMyAwIC42IDAgLjhjLS40IDE0LTkuNyAyNi44LTIyLjQgMzEuMmw4MSAwYzMuNS0xMCA1LjUtMjAuOCA1LjUtMzJjMC01My00My05Ni05Ni05NnMtOTYgNDMtOTYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjAgMTI4Yy0yMiAwLTQxLjIgMTUtNDYuNiAzNi40bC03MiAyODhjLTMuNiAxNC4zLS40IDI5LjUgOC43IDQxLjJTMzMuMiA1MTIgNDggNTEybDQxNiAwYzE0LjggMCAyOC43LTYuOCAzNy44LTE4LjVzMTIuMy0yNi44IDguNy00MS4ybC03Mi0yODhDNDMzLjIgMTQzIDQxNCAxMjggMzkyIDEyOGwtMjcyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96c0 11.2 1.9 22 5.5 32l81 0c-12.7-4.4-22-17-22.4-31c0-.3 0-.7 0-1c0-17.7 14.3-32 32-32s32 14.3 32 32c0 .3 0 .6 0 .8c-.4 14-9.7 26.8-22.4 31.2l81 0c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96z" />
            <path d="M120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-272 0z" />
    </Icon>
);

export default WeightHanging;