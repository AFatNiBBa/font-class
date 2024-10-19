
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=solid weight-scale}
 * @preview ![weight-scale](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTAuMjUgOTcuMjVDMzAyLjI1IDkzLjc1IDI5Mi43NSA5Ny41IDI4OS4yNSAxMDUuNzVMMjU1Ljc1IDE4NEMyMzMuNzUgMTg0LjI1IDIxNiAyMDIgMjE2IDIyNEMyMTYgMjQ2LjEyNSAyMzMuODc1IDI2NCAyNTYgMjY0UzI5NiAyNDYuMTI1IDI5NiAyMjRDMjk2IDIxMy41IDI5MS43NSAyMDQgMjg1IDE5Ni44NzVMMzE4Ljc1IDExOC4yNUMzMjIuMjUgMTEwLjEyNSAzMTguMzc1IDEwMC43NSAzMTAuMjUgOTcuMjVaTTQ0OCA2NEgzOTEuNzczQzM1OS40OTQgMjQuOTE0IDMxMC42NiAwIDI1NiAwUzE1Mi41MDYgMjQuOTE0IDEyMC4yMjcgNjRINjRDMjguNzUgNjQgMCA5Mi43NSAwIDEyOFY0NDhDMCA0ODMuMjUgMjguNzUgNTEyIDY0IDUxMkg0NDhDNDgzLjI1IDUxMiA1MTIgNDgzLjI1IDUxMiA0NDhWMTI4QzUxMiA5Mi43NSA0ODMuMjUgNjQgNDQ4IDY0Wk0yNTYgMzA0QzE4NS40MjIgMzA0IDEyOCAyNDYuNTc4IDEyOCAxNzZTMTg1LjQyMiA0OCAyNTYgNDhDMzI2LjU4IDQ4IDM4NCAxMDUuNDIyIDM4NCAxNzZTMzI2LjU4IDMwNCAyNTYgMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WeightScale(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M310.25 97.25C302.25 93.75 292.75 97.5 289.25 105.75L255.75 184C233.75 184.25 216 202 216 224C216 246.125 233.875 264 256 264S296 246.125 296 224C296 213.5 291.75 204 285 196.875L318.75 118.25C322.25 110.125 318.375 100.75 310.25 97.25ZM448 64H391.773C359.494 24.914 310.66 0 256 0S152.506 24.914 120.227 64H64C28.75 64 0 92.75 0 128V448C0 483.25 28.75 512 64 512H448C483.25 512 512 483.25 512 448V128C512 92.75 483.25 64 448 64ZM256 304C185.422 304 128 246.578 128 176S185.422 48 256 48C326.58 48 384 105.422 384 176S326.58 304 256 304Z" />
        </Icon>
    </>
}