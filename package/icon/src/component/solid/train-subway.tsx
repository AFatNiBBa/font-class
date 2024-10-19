
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `train-subway` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/train-subway?s=solid train-subway}
 * @preview ![train-subway](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMEg5NkM0Mi45OCAwIDAgNDIuOTggMCA5NlYzNTJDMCA0MDEuNTA0IDM3LjYxMSA0NDEuNzc5IDg1LjczNiA0NDYuOTY1TDM0LjM1OSA0OTguMzQyQzI5LjMyIDUwMy4zODMgMzIuODg5IDUxMiA0MC4wMTYgNTEySDgxLjk0OUM4Ni4xOTMgNTEyIDkwLjI2NCA1MTAuMzE0IDkzLjI2NCA1MDcuMzEyTDE1Mi41NzggNDQ4SDI5NS40MjJMMzU0LjczNiA1MDcuMzEyQzM1Ny43MzYgNTEwLjMxNCAzNjEuODA3IDUxMiAzNjYuMDUxIDUxMkg0MDcuOTg0QzQxNS4xMTEgNTEyIDQxOC42OCA1MDMuMzgzIDQxMy42NDEgNDk4LjM0MkwzNjIuMjY0IDQ0Ni45NjVDNDEwLjM4OSA0NDEuNzc5IDQ0OCA0MDEuNTA0IDQ0OCAzNTJWOTZDNDQ4IDQyLjk4IDQwNS4wMiAwIDM1MiAwWk02NCAzNTJDNjQgMzM0LjM3NSA3OC4zNzUgMzIwIDk2IDMyMFMxMjggMzM0LjM3NSAxMjggMzUyUzExMy42MjUgMzg0IDk2IDM4NFM2NCAzNjkuNjI1IDY0IDM1MlpNMjA4IDIyNEMyMDggMjQxLjY3MiAxOTMuNjc0IDI1NiAxNzYgMjU2SDk2Qzc4LjQgMjU2IDY0IDI0MS42IDY0IDIyNFYxMjhDNjQgMTEwLjQgNzguNCA5NiA5NiA5NkgxNzZDMTkzLjY3NCA5NiAyMDggMTEwLjMyNiAyMDggMTI4VjIyNFpNMzUyIDM4NEMzMzQuMzc1IDM4NCAzMjAgMzY5LjYyNSAzMjAgMzUyUzMzNC4zNzUgMzIwIDM1MiAzMjBTMzg0IDMzNC4zNzUgMzg0IDM1MlMzNjkuNjI1IDM4NCAzNTIgMzg0Wk0zODQgMjI0QzM4NCAyNDEuNiAzNjkuNiAyNTYgMzUyIDI1NkgyNzJDMjU0LjMyNiAyNTYgMjQwIDI0MS42NzIgMjQwIDIyNFYxMjhDMjQwIDExMC4zMjYgMjU0LjMyNiA5NiAyNzIgOTZIMzUyQzM2OS42IDk2IDM4NCAxMTAuNCAzODQgMTI4VjIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TrainSubway(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 0H96C42.98 0 0 42.98 0 96V352C0 401.504 37.611 441.779 85.736 446.965L34.359 498.342C29.32 503.383 32.889 512 40.016 512H81.949C86.193 512 90.264 510.314 93.264 507.312L152.578 448H295.422L354.736 507.312C357.736 510.314 361.807 512 366.051 512H407.984C415.111 512 418.68 503.383 413.641 498.342L362.264 446.965C410.389 441.779 448 401.504 448 352V96C448 42.98 405.02 0 352 0ZM64 352C64 334.375 78.375 320 96 320S128 334.375 128 352S113.625 384 96 384S64 369.625 64 352ZM208 224C208 241.672 193.674 256 176 256H96C78.4 256 64 241.6 64 224V128C64 110.4 78.4 96 96 96H176C193.674 96 208 110.326 208 128V224ZM352 384C334.375 384 320 369.625 320 352S334.375 320 352 320S384 334.375 384 352S369.625 384 352 384ZM384 224C384 241.6 369.6 256 352 256H272C254.326 256 240 241.672 240 224V128C240 110.326 254.326 96 272 96H352C369.6 96 384 110.4 384 128V224Z" />
        </Icon>
    </>
}