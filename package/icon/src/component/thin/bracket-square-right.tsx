
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-square-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=thin bracket-square-right}
 * @preview ![bracket-square-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgNzJWNDQwQzE3NiA0NTMuMjM0IDE2NS4yMTkgNDY0IDE1MiA0NjRINzJDNjcuNTk0IDQ2NCA2NCA0NjcuNTc4IDY0IDQ3MlM2Ny41OTQgNDgwIDcyIDQ4MEgxNTJDMTc0LjA2MiA0ODAgMTkyIDQ2Mi4wNjIgMTkyIDQ0MFY3MkMxOTIgNDkuOTM4IDE3NC4wNjIgMzIgMTUyIDMySDcyQzY3LjU5NCAzMiA2NCAzNS41NzggNjQgNDBTNjcuNTk0IDQ4IDcyIDQ4SDE1MkMxNjUuMjE5IDQ4IDE3NiA1OC43NjYgMTc2IDcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BracketSquareRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M176 72V440C176 453.234 165.219 464 152 464H72C67.594 464 64 467.578 64 472S67.594 480 72 480H152C174.062 480 192 462.062 192 440V72C192 49.938 174.062 32 152 32H72C67.594 32 64 35.578 64 40S67.594 48 72 48H152C165.219 48 176 58.766 176 72Z" />
        </Icon>
    </>
}