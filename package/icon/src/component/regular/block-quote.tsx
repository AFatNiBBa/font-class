
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `block-quote` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=regular block-quote}
 * @preview ![block-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggMTIwQzUwMS4yNTQgMTIwIDUxMiAxMDkuMjU0IDUxMiA5NlM1MDEuMjU0IDcyIDQ4OCA3MkgyNEMxMC43NDYgNzIgMCA4Mi43NDYgMCA5NlMxMC43NDYgMTIwIDI0IDEyMEg0ODhaTTI0IDIyNEMxMC43NDYgMjI0IDAgMjM0Ljc0NiAwIDI0OFY0MjRDMCA0MzcuMjU0IDEwLjc0NiA0NDggMjQgNDQ4UzQ4IDQzNy4yNTQgNDggNDI0VjI0OEM0OCAyMzQuNzQ2IDM3LjI1NCAyMjQgMjQgMjI0Wk00ODggMjMySDE1MkMxMzguNzQ2IDIzMiAxMjggMjQyLjc0NiAxMjggMjU2UzEzOC43NDYgMjgwIDE1MiAyODBINDg4QzUwMS4yNTQgMjgwIDUxMiAyNjkuMjU0IDUxMiAyNTZTNTAxLjI1NCAyMzIgNDg4IDIzMlpNNDg4IDM5MkgxNTJDMTM4Ljc0NiAzOTIgMTI4IDQwMi43NDYgMTI4IDQxNlMxMzguNzQ2IDQ0MCAxNTIgNDQwSDQ4OEM1MDEuMjU0IDQ0MCA1MTIgNDI5LjI1NCA1MTIgNDE2UzUwMS4yNTQgMzkyIDQ4OCAzOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BlockQuote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M488 120C501.254 120 512 109.254 512 96S501.254 72 488 72H24C10.746 72 0 82.746 0 96S10.746 120 24 120H488ZM24 224C10.746 224 0 234.746 0 248V424C0 437.254 10.746 448 24 448S48 437.254 48 424V248C48 234.746 37.254 224 24 224ZM488 232H152C138.746 232 128 242.746 128 256S138.746 280 152 280H488C501.254 280 512 269.254 512 256S501.254 232 488 232ZM488 392H152C138.746 392 128 402.746 128 416S138.746 440 152 440H488C501.254 440 512 429.254 512 416S501.254 392 488 392Z" />
        </Icon>
    </>
}