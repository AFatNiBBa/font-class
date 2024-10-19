
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-up?s=duotone mars-stroke-up}
 * @preview ![mars-stroke-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMzUuOTk5QzI1NiAzNzEuMzQ1IDIyNy4zNDYgMzk5Ljk5OSAxOTIgMzk5Ljk5OVMxMjggMzcxLjM0NSAxMjggMzM1Ljk5OVMxNTYuNjU0IDI3MiAxOTIgMjcyUzI1NiAzMDAuNjUzIDI1NiAzMzUuOTk5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMjQgMTYzLjA0OFYxNDQuMDAxSDI0OEMyNTIuNDE4IDE0NC4wMDEgMjU2IDE0MC40MjMgMjU2IDEzNi4wMDFWMTIwLjAwMUMyNTYgMTE1LjU4MyAyNTIuNDE4IDExMi4wMDEgMjQ4IDExMi4wMDFIMjI0Vjk2LjAwMUgyNDguNjI3QzI2NS4wMzMgOTYuMDAxIDI3My4yNSA3Ni4xNjUgMjYxLjY1IDY0LjU2NEwyMDAuNjgxIDMuNTk2QzE5NS44ODYgLTEuMTk3IDE4OC4xMTMgLTEuMTk3IDE4My4zMTggMy41OTZMMTIyLjM0OSA2NC41NjRDMTEwLjc1IDc2LjE2NSAxMTguOTY3IDk2LjAwMSAxMzUuMzczIDk2LjAwMUgxNjBWMTEyLjAwMUgxMzZDMTMxLjU4MiAxMTIuMDAxIDEyOCAxMTUuNTgzIDEyOCAxMjAuMDAxVjEzNi4wMDFDMTI4IDE0MC40MjMgMTMxLjU4MiAxNDQuMDAxIDEzNiAxNDQuMDAxSDE2MFYxNjMuMDQ4Qzc1LjA5OSAxNzguNjY1IDExLjQ4IDI1NS4wNjIgMTYuMjUyIDM0NS41MzFDMjEuMDM1IDQzNi4yMjEgOTguNTk1IDUxMC42NyAxODkuNDA2IDUxMS45ODJDMjg3Ljc5NSA1MTMuMzk2IDM2OCA0MzQuMDYxIDM2OCAzMzUuOTk5QzM2OCAyNDkuNzQyIDMwNS45IDE3OC4xMSAyMjQgMTYzLjA0OFpNMTkyIDQzMS45OTlDMTM5LjA2NCA0MzEuOTk5IDk2IDM4OC45MzYgOTYgMzM1Ljk5OVMxMzkuMDYyIDI0MCAxOTIgMjQwQzI0NC45MzMgMjQwIDI4OCAyODMuMDYyIDI4OCAzMzUuOTk5UzI0NC45MzMgNDMxLjk5OSAxOTIgNDMxLjk5OVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function MarsStrokeUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M256 335.999C256 371.345 227.346 399.999 192 399.999S128 371.345 128 335.999S156.654 272 192 272S256 300.653 256 335.999Z" />
            <path d="M224 163.048V144.001H248C252.418 144.001 256 140.423 256 136.001V120.001C256 115.583 252.418 112.001 248 112.001H224V96.001H248.627C265.033 96.001 273.25 76.165 261.65 64.564L200.681 3.596C195.886 -1.197 188.113 -1.197 183.318 3.596L122.349 64.564C110.75 76.165 118.967 96.001 135.373 96.001H160V112.001H136C131.582 112.001 128 115.583 128 120.001V136.001C128 140.423 131.582 144.001 136 144.001H160V163.048C75.099 178.665 11.48 255.062 16.252 345.531C21.035 436.221 98.595 510.67 189.406 511.982C287.795 513.396 368 434.061 368 335.999C368 249.742 305.9 178.11 224 163.048ZM192 431.999C139.064 431.999 96 388.936 96 335.999S139.062 240 192 240C244.933 240 288 283.062 288 335.999S244.933 431.999 192 431.999Z" />
        </Icon>
    </>
}