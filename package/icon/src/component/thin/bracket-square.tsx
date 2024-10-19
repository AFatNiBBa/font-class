
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-square` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=thin bracket-square}
 * @preview ![bracket-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MCA0OEgxMjBDMTI0LjQwNiA0OCAxMjggNDQuNDIyIDEyOCA0MFMxMjQuNDA2IDMyIDEyMCAzMkg0MEMxNy45MzggMzIgMCA0OS45MzggMCA3MlY0NDBDMCA0NjIuMDYyIDE3LjkzOCA0ODAgNDAgNDgwSDEyMEMxMjQuNDA2IDQ4MCAxMjggNDc2LjQyMiAxMjggNDcyUzEyNC40MDYgNDY0IDEyMCA0NjRINDBDMjYuNzgxIDQ2NCAxNiA0NTMuMjM0IDE2IDQ0MFY3MkMxNiA1OC43NjYgMjYuNzgxIDQ4IDQwIDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BracketSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M40 48H120C124.406 48 128 44.422 128 40S124.406 32 120 32H40C17.938 32 0 49.938 0 72V440C0 462.062 17.938 480 40 480H120C124.406 480 128 476.422 128 472S124.406 464 120 464H40C26.781 464 16 453.234 16 440V72C16 58.766 26.781 48 40 48Z" />
        </Icon>
    </>
}