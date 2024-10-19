
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `q` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/q?s=regular q}
 * @preview ![q](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTMuMDY2IDQwMi40ODRDNDI3LjE4NCAzNjMuMTY0IDQ0OCAzMTIuMDE2IDQ0OCAyNTZDNDQ4IDEzMi41IDM0Ny41MTYgMzIgMjI0IDMyUzAgMTMyLjUgMCAyNTZTMTAwLjQ4NCA0ODAgMjI0IDQ4MEMyNjguNDQ3IDQ4MCAzMDkuODA3IDQ2Ni44MjggMzQ0LjY4IDQ0NC40MUwzOTEuNDIyIDUwMC41QzM5Ny43NSA1MDguMDk0IDQwNi44NDQgNTEyIDQxNi4wMTYgNTEyQzQyMy4yMzQgNTEyIDQzMC41IDUwOS41NjIgNDM2LjQ4NCA1MDQuNTk0QzQ1MC4wNjIgNDkzLjI4MSA0NTEuODkxIDQ3My4wOTQgNDQwLjU3OCA0NTkuNUwzOTMuMDY2IDQwMi40ODRaTTIyNCA0MTZDMTM1Ljc4MSA0MTYgNjQgMzQ0LjIxOSA2NCAyNTZTMTM1Ljc4MSA5NiAyMjQgOTZTMzg0IDE2Ny43ODEgMzg0IDI1NkMzODQgMjkyLjIxMSAzNzEuNDQ5IDMyNS4yNyAzNTEuMDkgMzUyLjExM0wyODAuNTc4IDI2Ny41QzI2OS4yNSAyNTMuOTA2IDI0OS4wNzggMjUyLjEyNSAyMzUuNTE2IDI2My40MDZDMjIxLjkzOCAyNzQuNzE5IDIyMC4xMDkgMjk0LjkwNiAyMzEuNDIyIDMwOC41TDMwMi45MzggMzk0LjMyQzI3OS41NDUgNDA3LjcyNyAyNTIuODQgNDE2IDIyNCA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Q(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M393.066 402.484C427.184 363.164 448 312.016 448 256C448 132.5 347.516 32 224 32S0 132.5 0 256S100.484 480 224 480C268.447 480 309.807 466.828 344.68 444.41L391.422 500.5C397.75 508.094 406.844 512 416.016 512C423.234 512 430.5 509.562 436.484 504.594C450.062 493.281 451.891 473.094 440.578 459.5L393.066 402.484ZM224 416C135.781 416 64 344.219 64 256S135.781 96 224 96S384 167.781 384 256C384 292.211 371.449 325.27 351.09 352.113L280.578 267.5C269.25 253.906 249.078 252.125 235.516 263.406C221.938 274.719 220.109 294.906 231.422 308.5L302.938 394.32C279.545 407.727 252.84 416 224 416Z" />
        </Icon>
    </>
}