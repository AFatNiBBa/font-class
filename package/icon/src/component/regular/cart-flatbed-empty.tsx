
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cart-flatbed-empty` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-empty?s=regular cart-flatbed-empty}
 * @preview ![cart-flatbed-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYgMzk5Ljk5NkgxNDRWNjRDMTQ0IDI4Ljc5OSAxMTUuMTk5IDAgODAgMEgyNEMxMC44MDEgMCAwIDEwLjgwMSAwIDI0QzAgMzcuMjAxIDEwLjgwMSA0OCAyNCA0OEg3MkM4NS4yNTQgNDggOTYgNTguNzQ0IDk2IDcyVjQxNS45OTZDOTYgNDMzLjU5NiAxMTAuNCA0NDcuOTk2IDEyOCA0NDcuOTk2SDE2Mi45MzlDMTYxLjE1IDQ1My4wMjUgMTYwIDQ1OC4zNTcgMTYwIDQ2NEMxNjAgNDkwLjUxIDE4MS40OSA1MTIgMjA4IDUxMlMyNTYgNDkwLjUxIDI1NiA0NjRDMjU2IDQ1OC4zNTcgMjU0Ljg1IDQ1My4wMjUgMjUzLjA2MSA0NDcuOTk2SDQ1MC45MzlDNDQ5LjE1IDQ1My4wMjUgNDQ4IDQ1OC4zNTcgNDQ4IDQ2NEM0NDggNDkwLjUxIDQ2OS40OSA1MTIgNDk2IDUxMlM1NDQgNDkwLjUxIDU0NCA0NjRDNTQ0IDQ1OC4zNTcgNTQyLjg1IDQ1My4wMjUgNTQxLjA2MSA0NDcuOTk2SDYxNkM2MjkuMTk5IDQ0Ny45OTYgNjQwIDQzNy4xOTcgNjQwIDQyMy45OTZDNjQwIDQxMC43OTcgNjI5LjE5OSAzOTkuOTk2IDYxNiAzOTkuOTk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CartFlatbedEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616 399.996H144V64C144 28.799 115.199 0 80 0H24C10.801 0 0 10.801 0 24C0 37.201 10.801 48 24 48H72C85.254 48 96 58.744 96 72V415.996C96 433.596 110.4 447.996 128 447.996H162.939C161.15 453.025 160 458.357 160 464C160 490.51 181.49 512 208 512S256 490.51 256 464C256 458.357 254.85 453.025 253.061 447.996H450.939C449.15 453.025 448 458.357 448 464C448 490.51 469.49 512 496 512S544 490.51 544 464C544 458.357 542.85 453.025 541.061 447.996H616C629.199 447.996 640 437.197 640 423.996C640 410.797 629.199 399.996 616 399.996Z" />
        </Icon>
    </>
}