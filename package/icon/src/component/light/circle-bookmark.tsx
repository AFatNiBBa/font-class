
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=light circle-bookmark}
 * @preview ![circle-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk0zMjAgMTI4SDE5MkMxNzQuMzQ0IDEyOCAxNjAgMTQyLjM1OSAxNjAgMTYwVjM2OEMxNjAgMzc0LjE1NiAxNjMuNTMxIDM3OS43NSAxNjkuMDYyIDM4Mi40MjJDMTc0LjYyNSAzODUuMDk0IDE4MS4xNTYgMzg0LjMxMiAxODYgMzgwLjVMMjU2IDMyNC40ODRMMzI2IDM4MC41QzMyOC45MDYgMzgyLjgxMiAzMzIuNDM4IDM4NCAzMzYgMzg0QzMzOC4zNDQgMzg0IDM0MC43MTkgMzgzLjQ4NCAzNDIuOTM4IDM4Mi40MjJDMzQ4LjQ2OSAzNzkuNzUgMzUyIDM3NC4xNTYgMzUyIDM2OFYxNjBDMzUyIDE0Mi4zNTkgMzM3LjY1NiAxMjggMzIwIDEyOFpNMzIwIDMzNC43MDNMMjY2IDI5MS41QzI2My4wNjIgMjg5LjE3MiAyNTkuNTMxIDI4OCAyNTYgMjg4UzI0OC45MzggMjg5LjE3MiAyNDYgMjkxLjVMMTkyIDMzNC43MDNWMTYwSDMyMFYzMzQuNzAzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleBookmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM320 128H192C174.344 128 160 142.359 160 160V368C160 374.156 163.531 379.75 169.062 382.422C174.625 385.094 181.156 384.312 186 380.5L256 324.484L326 380.5C328.906 382.812 332.438 384 336 384C338.344 384 340.719 383.484 342.938 382.422C348.469 379.75 352 374.156 352 368V160C352 142.359 337.656 128 320 128ZM320 334.703L266 291.5C263.062 289.172 259.531 288 256 288S248.938 289.172 246 291.5L192 334.703V160H320V334.703Z" />
        </Icon>
    </>
}