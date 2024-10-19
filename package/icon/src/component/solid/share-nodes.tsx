
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `share-nodes` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share-nodes?s=solid share-nodes}
 * @preview ![share-nodes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzg0QzQ0OCA0MzcuMDIgNDA1LjAyIDQ4MCAzNTIgNDgwUzI1NiA0MzcuMDIgMjU2IDM4NEMyNTYgMzgwLjAxNiAyNTYuNzAxIDM3Ni4yMjMgMjU3LjE3NCAzNzIuMzY1TDE2Mi40OTggMzI1LjAyNUMxNDUuMjM2IDM0MS42NTYgMTIxLjg2MyAzNTIgOTYgMzUyQzQyLjk4IDM1MiAwIDMwOS4wMiAwIDI1NlM0Mi45OCAxNjAgOTYgMTYwQzEyMS44NjMgMTYwIDE0NS4yMzYgMTcwLjM0NCAxNjIuNDk4IDE4Ni45NzVMMjU3LjE3NCAxMzkuNjM1QzI1Ni43MDEgMTM1Ljc3NyAyNTYgMTMxLjk4NCAyNTYgMTI4QzI1NiA3NC45OCAyOTguOTggMzIgMzUyIDMyUzQ0OCA3NC45OCA0NDggMTI4UzQwNS4wMiAyMjQgMzUyIDIyNEMzMjYuMTM3IDIyNCAzMDIuNzY2IDIxMy42NTggMjg1LjUwNCAxOTcuMDI3TDE5MC44MjYgMjQ0LjM2MUMxOTEuMjk5IDI0OC4yMjEgMTkyIDI1Mi4wMTQgMTkyIDI1NlMxOTEuMjk5IDI2My43NzkgMTkwLjgyNiAyNjcuNjM5TDI4NS41MDQgMzE0Ljk3M0MzMDIuNzY2IDI5OC4zNDIgMzI2LjEzNyAyODggMzUyIDI4OEM0MDUuMDIgMjg4IDQ0OCAzMzAuOTggNDQ4IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ShareNodes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 384C448 437.02 405.02 480 352 480S256 437.02 256 384C256 380.016 256.701 376.223 257.174 372.365L162.498 325.025C145.236 341.656 121.863 352 96 352C42.98 352 0 309.02 0 256S42.98 160 96 160C121.863 160 145.236 170.344 162.498 186.975L257.174 139.635C256.701 135.777 256 131.984 256 128C256 74.98 298.98 32 352 32S448 74.98 448 128S405.02 224 352 224C326.137 224 302.766 213.658 285.504 197.027L190.826 244.361C191.299 248.221 192 252.014 192 256S191.299 263.779 190.826 267.639L285.504 314.973C302.766 298.342 326.137 288 352 288C405.02 288 448 330.98 448 384Z" />
        </Icon>
    </>
}