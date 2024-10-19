
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pi` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=light pi}
 * @preview ![pi](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDEuMDc4IDM3Mi40NjlDNDQ4LjM1OSAzNzcuNDY5IDQ1MC4xODggMzg3LjQzNyA0NDUuMTcyIDM5NC43MTlMNDI1LjY4OCA0MjIuOTY5QzQxNC44NDQgNDM4LjY1NiAzOTcgNDQ4IDM3Ny45NjkgNDQ4QzM0NiA0NDggMzIwIDQyMiAzMjAgMzkwLjAzMVY5NkgxNjBWMjY5QzE2MCAzMDUuMTI1IDE1MC41MzEgMzQwLjgxMiAxMzIuNTk0IDM3Mi4yMTlMOTMuODkxIDQzOS45MzhDOTAuOTM4IDQ0NS4wOTQgODUuNTQ3IDQ0OCA3OS45ODQgNDQ4Qzc3LjI5NyA0NDggNzQuNTYyIDQ0Ny4zMTIgNzIuMDYyIDQ0NS45MDZDNjQuMzkxIDQ0MS41IDYxLjcxOSA0MzEuNzE5IDY2LjEwOSA0MjQuMDYyTDEwNC44MTMgMzU2LjM0NEMxMTkuOTg0IDMyOS43ODEgMTI4IDI5OS41NjIgMTI4IDI2OVY5NkgxNkM3LjE2NCA5NiAwIDg4LjgzNiAwIDgwQzAgNzEuMTYyIDcuMTY0IDY0IDE2IDY0SDQzMkM0NDAuODM2IDY0IDQ0OCA3MS4xNjIgNDQ4IDgwQzQ0OCA4OC44MzYgNDQwLjgzNiA5NiA0MzIgOTZIMzUyVjM5MC4wMzFDMzUyIDQwNC4zNDQgMzYzLjY1NiA0MTYgMzc3Ljk2OSA0MTZDMzg2LjUgNDE2IDM5NC41IDQxMS44MTIgMzk5LjM1OSA0MDQuNzgxTDQxOC44MjggMzc2LjUzMUM0MjMuODU5IDM2OS4yNSA0MzMuODEyIDM2Ny4zNzUgNDQxLjA3OCAzNzIuNDY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pi(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M441.078 372.469C448.359 377.469 450.188 387.437 445.172 394.719L425.688 422.969C414.844 438.656 397 448 377.969 448C346 448 320 422 320 390.031V96H160V269C160 305.125 150.531 340.812 132.594 372.219L93.891 439.938C90.938 445.094 85.547 448 79.984 448C77.297 448 74.562 447.312 72.062 445.906C64.391 441.5 61.719 431.719 66.109 424.062L104.813 356.344C119.984 329.781 128 299.562 128 269V96H16C7.164 96 0 88.836 0 80C0 71.162 7.164 64 16 64H432C440.836 64 448 71.162 448 80C448 88.836 440.836 96 432 96H352V390.031C352 404.344 363.656 416 377.969 416C386.5 416 394.5 411.812 399.359 404.781L418.828 376.531C423.859 369.25 433.812 367.375 441.078 372.469Z" />
        </Icon>
    </>
}