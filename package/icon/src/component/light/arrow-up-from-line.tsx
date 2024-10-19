
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-from-line` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-line?s=light arrow-up-from-line}
 * @preview ![arrow-up-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OS4zMTIgMjAzLjMxMkwxNzYgODYuNjI1VjM4NEMxNzYgMzkyLjg0NCAxODMuMTU2IDQwMCAxOTIgNDAwUzIwOCAzOTIuODQ0IDIwOCAzODRWODYuNjI1TDMyNC42ODggMjAzLjMxMkMzMzAuOTM4IDIwOS41NjIgMzQxLjA2MyAyMDkuNTYyIDM0Ny4zMTIgMjAzLjMxMlMzNTMuNTYyIDE4Ni45MzcgMzQ3LjMxMiAxODAuNjg4TDIwMy4zMTIgMzYuNjg4QzIwMC4xODggMzMuNTYyIDE5Ni4wOTQgMzIgMTkyIDMyUzE4My44MTIgMzMuNTYyIDE4MC42ODggMzYuNjg4TDM2LjY4OCAxODAuNjg4QzMwLjQzOCAxODYuOTM4IDMwLjQzOCAxOTcuMDYzIDM2LjY4OCAyMDMuMzEyUzUzLjA2MiAyMDkuNTYyIDU5LjMxMiAyMDMuMzEyWk0zNjggNDQ4SDE2QzcuMTU2IDQ0OCAwIDQ1NS4xNTYgMCA0NjRTNy4xNTYgNDgwIDE2IDQ4MEgzNjhDMzc2Ljg0NCA0ODAgMzg0IDQ3Mi44NDQgMzg0IDQ2NFMzNzYuODQ0IDQ0OCAzNjggNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M59.312 203.312L176 86.625V384C176 392.844 183.156 400 192 400S208 392.844 208 384V86.625L324.688 203.312C330.938 209.562 341.063 209.562 347.312 203.312S353.562 186.937 347.312 180.688L203.312 36.688C200.188 33.562 196.094 32 192 32S183.812 33.562 180.688 36.688L36.688 180.688C30.438 186.938 30.438 197.063 36.688 203.312S53.062 209.562 59.312 203.312ZM368 448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H368C376.844 480 384 472.844 384 464S376.844 448 368 448Z" />
        </Icon>
    </>
}