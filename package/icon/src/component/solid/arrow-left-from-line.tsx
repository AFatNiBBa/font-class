
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-left-from-line` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-line?s=solid arrow-left-from-line}
 * @preview ![arrow-left-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODIuNjI1IDM2MS4zNzVMMTA5LjI1IDI4OEgyODhDMzA1LjY4OCAyODggMzIwIDI3My42ODggMzIwIDI1NlMzMDUuNjg4IDIyNCAyODggMjI0SDEwOS4yNUwxODIuNjI1IDE1MC42MjVDMTg4Ljg3NSAxNDQuMzc1IDE5MiAxMzYuMTg4IDE5MiAxMjhTMTg4Ljg3NSAxMTEuNjI1IDE4Mi42MjUgMTA1LjM3NUMxNzAuMTI1IDkyLjg3NSAxNDkuODc1IDkyLjg3NSAxMzcuMzc1IDEwNS4zNzVMOS4zNzUgMjMzLjM3NUMtMy4xMjUgMjQ1Ljg3NSAtMy4xMjUgMjY2LjEyNSA5LjM3NSAyNzguNjI1TDEzNy4zNzUgNDA2LjYyNUMxNDkuODc1IDQxOS4xMjUgMTcwLjEyNSA0MTkuMTI1IDE4Mi42MjUgNDA2LjYyNVMxOTUuMTI1IDM3My44NzUgMTgyLjYyNSAzNjEuMzc1Wk0zODQgOTZWNDE2QzM4NCA0MzMuNjg4IDM5OC4zMTMgNDQ4IDQxNiA0NDhTNDQ4IDQzMy42ODggNDQ4IDQxNlY5NkM0NDggNzguMzEyIDQzMy42ODggNjQgNDE2IDY0UzM4NCA3OC4zMTIgMzg0IDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowLeftFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M182.625 361.375L109.25 288H288C305.688 288 320 273.688 320 256S305.688 224 288 224H109.25L182.625 150.625C188.875 144.375 192 136.188 192 128S188.875 111.625 182.625 105.375C170.125 92.875 149.875 92.875 137.375 105.375L9.375 233.375C-3.125 245.875 -3.125 266.125 9.375 278.625L137.375 406.625C149.875 419.125 170.125 419.125 182.625 406.625S195.125 373.875 182.625 361.375ZM384 96V416C384 433.688 398.313 448 416 448S448 433.688 448 416V96C448 78.312 433.688 64 416 64S384 78.312 384 96Z" />
        </Icon>
    </>
}