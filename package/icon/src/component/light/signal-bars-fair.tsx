
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-bars-fair` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-fair?s=light signal-bars-fair}
 * @preview ![signal-bars-fair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2SDE5MkMxNzQuMzI4IDI1NiAxNjAgMjcwLjMyOCAxNjAgMjg4VjQ4MEMxNjAgNDk3LjY3MiAxNzQuMzI4IDUxMiAxOTIgNTEySDIyNEMyNDEuNjc0IDUxMiAyNTYgNDk3LjY3MiAyNTYgNDgwVjI4OEMyNTYgMjcwLjMyOCAyNDEuNjc0IDI1NiAyMjQgMjU2Wk0yMjQgNDgwSDE5MlYyODhIMjI0VjQ4MFpNNjQgMzg0SDMyQzE0LjMyOCAzODQgMCAzOTguMzI4IDAgNDE2VjQ4MEMwIDQ5Ny42NzIgMTQuMzI4IDUxMiAzMiA1MTJINjRDODEuNjc0IDUxMiA5NiA0OTcuNjcyIDk2IDQ4MFY0MTZDOTYgMzk4LjMyOCA4MS42NzQgMzg0IDY0IDM4NFpNNjQgNDgwSDMyVjQxNkg2NFY0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SignalBarsFair(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M224 256H192C174.328 256 160 270.328 160 288V480C160 497.672 174.328 512 192 512H224C241.674 512 256 497.672 256 480V288C256 270.328 241.674 256 224 256ZM224 480H192V288H224V480ZM64 384H32C14.328 384 0 398.328 0 416V480C0 497.672 14.328 512 32 512H64C81.674 512 96 497.672 96 480V416C96 398.328 81.674 384 64 384ZM64 480H32V416H64V480Z" />
        </Icon>
    </>
}