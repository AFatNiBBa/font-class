
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=light franc-sign}
 * @preview ![franc-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDhDMzIwIDU2Ljg0NCAzMTIuODQ0IDY0IDMwNCA2NEg5NkM4Ny4xODggNjQgODAgNzEuMTcyIDgwIDgwVjE5MkgyNzJDMjgwLjg0NCAxOTIgMjg4IDE5OS4xNTYgMjg4IDIwOFMyODAuODQ0IDIyNCAyNzIgMjI0SDgwVjMyMEgyMDhDMjE2Ljg0NCAzMjAgMjI0IDMyNy4xNTYgMjI0IDMzNlMyMTYuODQ0IDM1MiAyMDggMzUySDgwVjQ2Mi40MjJDODAgNDcxLjI2NiA3Mi44NDQgNDc4LjQyMiA2NCA0NzguNDIyUzQ4IDQ3MS4yNjYgNDggNDYyLjQyMlYzNTJIMTZDNy4xNTYgMzUyIDAgMzQ0Ljg0NCAwIDMzNlM3LjE1NiAzMjAgMTYgMzIwSDQ4VjgwQzQ4IDUzLjUzMSA2OS41MzEgMzIgOTYgMzJIMzA0QzMxMi44NDQgMzIgMzIwIDM5LjE1NiAzMjAgNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FrancSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 48C320 56.844 312.844 64 304 64H96C87.188 64 80 71.172 80 80V192H272C280.844 192 288 199.156 288 208S280.844 224 272 224H80V320H208C216.844 320 224 327.156 224 336S216.844 352 208 352H80V462.422C80 471.266 72.844 478.422 64 478.422S48 471.266 48 462.422V352H16C7.156 352 0 344.844 0 336S7.156 320 16 320H48V80C48 53.531 69.531 32 96 32H304C312.844 32 320 39.156 320 48Z" />
        </Icon>
    </>
}