
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `image-landscape` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=regular image-landscape}
 * @preview ![image-landscape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjRINjRDMjguNjU0IDY0IDAgOTIuNjUyIDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhINTEyQzU0Ny4zNDggNDQ4IDU3NiA0MTkuMzQ2IDU3NiAzODRWMTI4QzU3NiA5Mi42NTIgNTQ3LjM0OCA2NCA1MTIgNjRaTTUyOCAzODRDNTI4IDM5Mi44MjIgNTIwLjgyMiA0MDAgNTEyIDQwMEg0ODUuMTk1TDM1Mi44NjUgMjAxLjVDMzQ4LjkwNiAxOTUuNTYyIDM0Mi4yNDYgMTkyIDMzNS4xMTUgMTkyQzMyNy45OCAxOTIgMzIxLjMxOCAxOTUuNTYyIDMxNy4zNjUgMjAxLjVMMjMzLjcwOSAzMjYuOTc5TDIwMy45MDYgMjg2LjA5OEMxOTkuODg3IDI4MC41ODggMTkzLjQ4IDI3Ny4zMzIgMTg2LjY2OCAyNzcuMzMyUzE3My40NDkgMjgwLjU4OCAxNjkuNDI4IDI4Ni4wOThMODYuMzczIDQwMEg2NEM1NS4xNzggNDAwIDQ4IDM5Mi44MjIgNDggMzg0VjEyOEM0OCAxMTkuMTc4IDU1LjE3OCAxMTIgNjQgMTEySDUxMkM1MjAuODIyIDExMiA1MjggMTE5LjE3OCA1MjggMTI4VjM4NFpNMTc2IDE2MEMxNTguMzI4IDE2MCAxNDQgMTc0LjMyOCAxNDQgMTkyUzE1OC4zMjggMjI0IDE3NiAyMjRDMTkzLjY3NiAyMjQgMjA4IDIwOS42NzIgMjA4IDE5MlMxOTMuNjc2IDE2MCAxNzYgMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ImageLandscape(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 64H64C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 64 448H512C547.348 448 576 419.346 576 384V128C576 92.652 547.348 64 512 64ZM528 384C528 392.822 520.822 400 512 400H485.195L352.865 201.5C348.906 195.562 342.246 192 335.115 192C327.98 192 321.318 195.562 317.365 201.5L233.709 326.979L203.906 286.098C199.887 280.588 193.48 277.332 186.668 277.332S173.449 280.588 169.428 286.098L86.373 400H64C55.178 400 48 392.822 48 384V128C48 119.178 55.178 112 64 112H512C520.822 112 528 119.178 528 128V384ZM176 160C158.328 160 144 174.328 144 192S158.328 224 176 224C193.676 224 208 209.672 208 192S193.676 160 176 160Z" />
        </Icon>
    </>
}