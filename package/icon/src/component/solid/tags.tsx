
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=solid tags}
 * @preview ![tags](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzEuNTk4IDIyNS42MDRMMjU0LjQwMiA0OC40MDJDMjQ1LjM4MSAzOS4zODEgMjI3LjU2MiAzMiAyMTQuODA1IDMySDI4QzEyLjUzNSAzMiAwIDQ0LjUzNSAwIDYwVjI0Ni44MDNDMCAyNTkuNTYxIDcuMzgxIDI3Ny4zODEgMTYuNDAyIDI4Ni40MDJMMTkzLjU5MiA0NjMuNTk4QzIxNS40NjEgNDg1LjQ2NyAyNTAuOTE2IDQ4NS40NjcgMjcyLjc4NyA0NjMuNkw0MzEuNTk2IDMwNC44MDFDNDUzLjQ2NyAyODIuOTMyIDQ1My40NjkgMjQ3LjQ3MyA0MzEuNTk4IDIyNS42MDRaTTExMiAxNzZDOTQuMzM0IDE3NiA4MCAxNjEuNjc2IDgwIDE0NEM4MCAxMjYuMzIyIDk0LjMzNCAxMTIgMTEyIDExMlMxNDQgMTI2LjMyMiAxNDQgMTQ0QzE0NCAxNjEuNjc2IDEyOS42NjYgMTc2IDExMiAxNzZaTTU1OS41OTggMjI1LjYwNEwzODIuNDAyIDQ4LjQwMkMzNzMuMzgxIDM5LjM4MSAzNTUuNTYyIDMyIDM0Mi44MDUgMzJIMzA1Ljg4M0w1MTYuNDUzIDI0Mi41NzZDNTI4Ljk0OSAyNTUuMDc0IDUyOC45NDkgMjc1LjMzNiA1MTYuNDUxIDI4Ny44MzJMMzMyLjQyMiA0NzEuODVDMzUzLjk0MyA0ODQuNzk5IDM4Mi4yMjUgNDgyLjE2IDQwMC43ODcgNDYzLjZMNTU5LjU5NiAzMDQuODAxQzU4MS40NjcgMjgyLjkzMiA1ODEuNDY5IDI0Ny40NzMgNTU5LjU5OCAyMjUuNjA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tags(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M431.598 225.604L254.402 48.402C245.381 39.381 227.562 32 214.805 32H28C12.535 32 0 44.535 0 60V246.803C0 259.561 7.381 277.381 16.402 286.402L193.592 463.598C215.461 485.467 250.916 485.467 272.787 463.6L431.596 304.801C453.467 282.932 453.469 247.473 431.598 225.604ZM112 176C94.334 176 80 161.676 80 144C80 126.322 94.334 112 112 112S144 126.322 144 144C144 161.676 129.666 176 112 176ZM559.598 225.604L382.402 48.402C373.381 39.381 355.562 32 342.805 32H305.883L516.453 242.576C528.949 255.074 528.949 275.336 516.451 287.832L332.422 471.85C353.943 484.799 382.225 482.16 400.787 463.6L559.596 304.801C581.467 282.932 581.469 247.473 559.598 225.604Z" />
        </Icon>
    </>
}