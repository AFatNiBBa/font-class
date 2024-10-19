
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-frame` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=solid window-frame}
 * @preview ![window-frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDQ4SDQ4MFYzMkM0ODAgMTQuMzc1IDQ2NS42MjUgMCA0NDggMEg2NEM0Ni4zNzUgMCAzMiAxNC4zNzUgMzIgMzJWNDQ4SDE2QzcuMTI1IDQ0OCAwIDQ1NS4xMjUgMCA0NjRWNDk2QzAgNTA0Ljg3NSA3LjEyNSA1MTIgMTYgNTEySDQ5NkM1MDQuODc1IDUxMiA1MTIgNTA0Ljg3NSA1MTIgNDk2VjQ2NEM1MTIgNDU1LjEyNSA1MDQuODc1IDQ0OCA0OTYgNDQ4Wk00MTYgMjI0SDI3MlY2NEg0MTZWMjI0Wk05NiA2NEgyNDBWMjI0SDk2VjY0Wk05NiAyODhIMjQwVjQ0OEg5NlYyODhaTTI3MiA0NDhWMjg4SDQxNlY0NDhIMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindowFrame(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 448H480V32C480 14.375 465.625 0 448 0H64C46.375 0 32 14.375 32 32V448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H496C504.875 512 512 504.875 512 496V464C512 455.125 504.875 448 496 448ZM416 224H272V64H416V224ZM96 64H240V224H96V64ZM96 288H240V448H96V288ZM272 448V288H416V448H272Z" />
        </Icon>
    </>
}