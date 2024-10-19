
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `plus-minus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=thin plus-minus}
 * @preview ![plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAyMDBIMTg0VjM2OEMxODQgMzcyLjQwNiAxODcuNTk0IDM3NiAxOTIgMzc2UzIwMCAzNzIuNDA2IDIwMCAzNjhWMjAwSDM2OEMzNzIuNDA2IDIwMCAzNzYgMTk2LjQwNiAzNzYgMTkyUzM3Mi40MDYgMTg0IDM2OCAxODRIMjAwVjE2QzIwMCAxMS41OTQgMTk2LjQwNiA4IDE5MiA4UzE4NCAxMS41OTQgMTg0IDE2VjE4NEgxNkMxMS41OTQgMTg0IDggMTg3LjU5NCA4IDE5MlMxMS41OTQgMjAwIDE2IDIwMFpNMzY4IDQ2NEgxNkMxMS41OTQgNDY0IDggNDY3LjU5NCA4IDQ3MlMxMS41OTQgNDgwIDE2IDQ4MEgzNjhDMzcyLjQwNiA0ODAgMzc2IDQ3Ni40MDYgMzc2IDQ3MlMzNzIuNDA2IDQ2NCAzNjggNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PlusMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M16 200H184V368C184 372.406 187.594 376 192 376S200 372.406 200 368V200H368C372.406 200 376 196.406 376 192S372.406 184 368 184H200V16C200 11.594 196.406 8 192 8S184 11.594 184 16V184H16C11.594 184 8 187.594 8 192S11.594 200 16 200ZM368 464H16C11.594 464 8 467.594 8 472S11.594 480 16 480H368C372.406 480 376 476.406 376 472S372.406 464 368 464Z" />
        </Icon>
    </>
}