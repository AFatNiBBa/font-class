
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lamp-street` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-street?s=regular lamp-street}
 * @preview ![lamp-street](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAuMDQxIDUxMkMzNTUuNDE2IDUxMiAzODQuMDQxIDQ4My4zNzUgMzg0LjA0MSA0NDhIMjU2LjA0MUMyNTYuMDQxIDQ4My4zNzUgMjg0LjY2NiA1MTIgMzIwLjA0MSA1MTJaTTM0NC4wMzEgMjI1Ljc4MUgzNDRWMTIwQzM0NCA1My44MjggMjkwLjE1NiAwIDIyNCAwSDEyMEM1My44NDQgMCAwIDUzLjgyOCAwIDEyMFY1MTJINDhWMTIwQzQ4IDgwLjI5NyA4MC4zMTIgNDggMTIwIDQ4SDIyNEMyNjMuNjg4IDQ4IDI5NiA4MC4yOTcgMjk2IDEyMFYyMjUuNzg3QzIwOS4zODkgMjM2LjQ4NCAxNDAuNDA0IDMwMy41MSAxMjguMjE5IDM4OC45MDZDMTI2LjI1IDQwMy4yNSAxMzcuODc1IDQxNiAxNTIuNDA2IDQxNkg0ODcuNTk0QzUwMi4xMjUgNDE2IDUxMy43NSA0MDMuMjUgNTExLjc4MSAzODguOTA2QzQ5OS41OTQgMzAzLjUgNDMwLjY1NiAyMzYuNDY5IDM0NC4wMzEgMjI1Ljc4MVpNMTgyLjYwNSAzNjhDMTkyLjQ4NCAzNDAuNDgyIDIxMC42NDQgMzE2LjgzOCAyMzQuMTI2IDI5OS45MzZDMjU4LjgzOCAyODIuMTQ4IDI4OS4xMDcgMjczLjc4MSAzMTkuNTU1IDI3My43ODFIMzIwLjQ4OUMzNTAuOTUzIDI3My43ODEgMzgxLjIzNyAyODIuMTU4IDQwNS45NTYgMjk5Ljk2MkM0MjkuNDQgMzE2Ljg3NiA0NDcuNTg5IDM0MC41MjMgNDU3LjQzMiAzNjhIMTgyLjYwNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LampStreet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320.041 512C355.416 512 384.041 483.375 384.041 448H256.041C256.041 483.375 284.666 512 320.041 512ZM344.031 225.781H344V120C344 53.828 290.156 0 224 0H120C53.844 0 0 53.828 0 120V512H48V120C48 80.297 80.312 48 120 48H224C263.688 48 296 80.297 296 120V225.787C209.389 236.484 140.404 303.51 128.219 388.906C126.25 403.25 137.875 416 152.406 416H487.594C502.125 416 513.75 403.25 511.781 388.906C499.594 303.5 430.656 236.469 344.031 225.781ZM182.605 368C192.484 340.482 210.644 316.838 234.126 299.936C258.838 282.148 289.107 273.781 319.555 273.781H320.489C350.953 273.781 381.237 282.158 405.956 299.962C429.44 316.876 447.589 340.523 457.432 368H182.605Z" />
        </Icon>
    </>
}