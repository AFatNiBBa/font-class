
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cauldron` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cauldron?s=regular cauldron}
 * @preview ![cauldron](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgNjRDMTc3LjYyNSA2NCAxOTIgNDkuNjI1IDE5MiAzMlMxNzcuNjI1IDAgMTYwIDBTMTI4IDE0LjM3NSAxMjggMzJTMTQyLjM3NSA2NCAxNjAgNjRaTTQyNCAyMDhDNDM3LjI1NCAyMDggNDQ4IDE5Ny4yNTQgNDQ4IDE4NEM0NDggMTcwLjc0NCA0MzcuMjU0IDE2MCA0MjQgMTYwSDI0QzEwLjc0NiAxNjAgMCAxNzAuNzQ0IDAgMTg0QzAgMTk3LjI1NCAxMC43NDYgMjA4IDI0IDIwOEg0NC45NjVDMTYuOTQzIDI1Mi4wNzYgMCAzMDAuNjkxIDAgMzQwQzAgMzcyLjIzNiAxMS44MjQgNDAyLjMxOCAzMiA0MjguMTMzVjQ4OEMzMiA1MDEuMjU0IDQyLjc0NiA1MTIgNTYgNTEyUzgwIDUwMS4yNTQgODAgNDg4VjQ3MS41NTdDMTE4Ljk3NSA0OTYuNzUgMTY5LjE5MSA1MTIgMjI0IDUxMlMzMjkuMDI1IDQ5Ni43NSAzNjggNDcxLjU1N1Y0ODhDMzY4IDUwMS4yNTQgMzc4Ljc0NiA1MTIgMzkyIDUxMlM0MTYgNTAxLjI1NCA0MTYgNDg4VjQyOC4xMzVDNDM2LjE3OCA0MDIuMzIgNDQ4IDM3Mi4yMzYgNDQ4IDM0MEM0NDggMzAwLjY5MSA0MzEuMDU3IDI1Mi4wNzYgNDAzLjAzNSAyMDhINDI0Wk0yMjQgNDY0QzEyNi45NjkgNDY0IDQ4IDQwOC4zNzUgNDggMzQwQzQ4IDMwNC4zNDggNjkuNDYxIDI1MS4xNzIgMTAzLjM4NyAyMDhIMzQ0LjYxM0MzNzguNTM5IDI1MS4xNzIgNDAwIDMwNC4zNDggNDAwIDM0MEM0MDAgNDA4LjM3NSAzMjEuMDMxIDQ2NCAyMjQgNDY0Wk0yNzIgMTI4QzI5OC41IDEyOCAzMjAgMTA2LjUgMzIwIDgwUzI5OC41IDMyIDI3MiAzMlMyMjQgNTMuNSAyMjQgODBTMjQ1LjUgMTI4IDI3MiAxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Cauldron(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M160 64C177.625 64 192 49.625 192 32S177.625 0 160 0S128 14.375 128 32S142.375 64 160 64ZM424 208C437.254 208 448 197.254 448 184C448 170.744 437.254 160 424 160H24C10.746 160 0 170.744 0 184C0 197.254 10.746 208 24 208H44.965C16.943 252.076 0 300.691 0 340C0 372.236 11.824 402.318 32 428.133V488C32 501.254 42.746 512 56 512S80 501.254 80 488V471.557C118.975 496.75 169.191 512 224 512S329.025 496.75 368 471.557V488C368 501.254 378.746 512 392 512S416 501.254 416 488V428.135C436.178 402.32 448 372.236 448 340C448 300.691 431.057 252.076 403.035 208H424ZM224 464C126.969 464 48 408.375 48 340C48 304.348 69.461 251.172 103.387 208H344.613C378.539 251.172 400 304.348 400 340C400 408.375 321.031 464 224 464ZM272 128C298.5 128 320 106.5 320 80S298.5 32 272 32S224 53.5 224 80S245.5 128 272 128Z" />
        </Icon>
    </>
}