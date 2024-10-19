
import { Icon, generic } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=sharp-duotone-solid steering-wheel}
 * @preview ![steering-wheel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNTZjMCAxMC45IC45IDIxLjYgMi43IDMybDEwMi4yIDBMMjI0IDM1OC45bDAgODYuNWMxMC40IDEuNyAyMS4xIDIuNyAzMiAyLjdzMjEuNi0uOSAzMi0yLjdsMC04Ni41TDM0My4xIDI4OGwxMDIuMiAwYzEuNy0xMC40IDIuNy0yMS4xIDIuNy0zMnMtLjktMjEuNi0yLjctMzJMMzQ0IDIyNGwtMjQtMzItMTI4IDAtMjQgMzJMNjYuNyAyMjRjLTEuNyAxMC40LTIuNyAyMS4xLTIuNyAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA2NGExOTIgMTkyIDAgMSAxIDAgMzg0IDE5MiAxOTIgMCAxIDEgMC0zODR6bTAgNDQ4QTI1NiAyNTYgMCAxIDAgMjU2IDBhMjU2IDI1NiAwIDEgMCAwIDUxMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 256c0 10.9 .9 21.6 2.7 32l102.2 0L224 358.9l0 86.5c10.4 1.7 21.1 2.7 32 2.7s21.6-.9 32-2.7l0-86.5L343.1 288l102.2 0c1.7-10.4 2.7-21.1 2.7-32s-.9-21.6-2.7-32L344 224l-24-32-128 0-24 32L66.7 224c-1.7 10.4-2.7 21.1-2.7 32z" />
            <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default SteeringWheel;