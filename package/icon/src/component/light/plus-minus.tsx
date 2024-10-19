
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=light plus-minus}
 * @preview ![plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAyMDhIMTc2VjM2OEMxNzYgMzc2Ljg0NCAxODMuMTU2IDM4NCAxOTIgMzg0UzIwOCAzNzYuODQ0IDIwOCAzNjhWMjA4SDM2OEMzNzYuODQ0IDIwOCAzODQgMjAwLjg0NCAzODQgMTkyUzM3Ni44NDQgMTc2IDM2OCAxNzZIMjA4VjE2QzIwOCA3LjE1NiAyMDAuODQ0IDAgMTkyIDBTMTc2IDcuMTU2IDE3NiAxNlYxNzZIMTZDNy4xNTYgMTc2IDAgMTgzLjE1NiAwIDE5MlM3LjE1NiAyMDggMTYgMjA4Wk0zNjggNDgwSDE2QzcuMTU2IDQ4MCAwIDQ4Ny4xNTYgMCA0OTZTNy4xNTYgNTEyIDE2IDUxMkgzNjhDMzc2Ljg0NCA1MTIgMzg0IDUwNC44NDQgMzg0IDQ5NlMzNzYuODQ0IDQ4MCAzNjggNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PlusMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M16 208H176V368C176 376.844 183.156 384 192 384S208 376.844 208 368V208H368C376.844 208 384 200.844 384 192S376.844 176 368 176H208V16C208 7.156 200.844 0 192 0S176 7.156 176 16V176H16C7.156 176 0 183.156 0 192S7.156 208 16 208ZM368 480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H368C376.844 512 384 504.844 384 496S376.844 480 368 480Z" />
        </Icon>
    </>
}