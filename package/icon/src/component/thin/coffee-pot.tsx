
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=thin coffee-pot}
 * @preview ![coffee-pot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzEuNSAxNzcuNjI1TDQ4MCAzMkg3MkMzMi4zMTIgMzIgMCA2NC4yOTcgMCAxMDRWMjE2QzAgMjIwLjQyMiAzLjU5NCAyMjQgOCAyMjRTMTYgMjIwLjQyMiAxNiAyMTZWMTA0QzE2IDczLjEyNSA0MS4xMjUgNDggNzIgNDhIMTAxLjMzOEwxNDQuNzUgMTc4LjEyNUM5NS4zNzUgMjE3Ljg3NSA2NCAyNzcuNzUgNjQgMzQ0LjYyNUM2NCAzOTYuMTI1IDgyLjYyNSA0MjkuMzc1IDExMy42MjUgNDYyLjM3NUMxMjQuNSA0NzMuNjI1IDEzOS41IDQ4MCAxNTUuMTI1IDQ4MEg0MjAuODc1QzQzNi41IDQ4MCA0NTEuNSA0NzMuNzUgNDYyLjI1IDQ2Mi4zNzVDNDkzLjI1IDQyOS41IDUxMiAzOTYuMTI1IDUxMiAzNDQuNjI1QzUxMiAyNzguMzc1IDQ4MS4zNzUgMjE3Ljg3NSA0MzEuNSAxNzcuNjI1Wk0xMTguMjA1IDQ4SDQ1Ny44MDdMNDE2LjMyIDE3Mi41NjhMNDE1LjE3OCAxNzZIMTYwLjkwOEwxNTkuOTI4IDE3My4wNjFMMTE4LjIwNSA0OFpNMTUzLjIxMyAxOTJINDIzLjU4NEM0NTguODE4IDIyMS4yNTggNDgyLjQ1MSAyNjAuNjE3IDQ5MS42MDQgMzA0SDg0LjQ0N0M5My43MTMgMjYwLjY2OCAxMTcuNTk4IDIyMS4yNzUgMTUzLjIxMyAxOTJaTTQ1MC42MjEgNDUxLjM4NUM0NDMuMDQ1IDQ1OS40MDIgNDMyLjIwMyA0NjQgNDIwLjg3NSA0NjRIMTU1LjEyNUMxNDMuODkzIDQ2NCAxMzIuOTU5IDQ1OS4zNTUgMTI1LjI4NyA0NTEuNDJDOTguMTA0IDQyMi40ODQgODAgMzkzLjI0OCA4MCAzNDQuNjI1QzgwIDMzNi4zMjYgODAuNjUgMzI4LjEyNSA4MS42ODggMzIwSDQ5NC4zNDJDNDk1LjM2MyAzMjguMTIxIDQ5NiAzMzYuMzI0IDQ5NiAzNDQuNjI1QzQ5NiAzOTMuMjg5IDQ3Ny44NTQgNDIyLjUwNCA0NTAuNjIxIDQ1MS4zODVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CoffeePot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M431.5 177.625L480 32H72C32.312 32 0 64.297 0 104V216C0 220.422 3.594 224 8 224S16 220.422 16 216V104C16 73.125 41.125 48 72 48H101.338L144.75 178.125C95.375 217.875 64 277.75 64 344.625C64 396.125 82.625 429.375 113.625 462.375C124.5 473.625 139.5 480 155.125 480H420.875C436.5 480 451.5 473.75 462.25 462.375C493.25 429.5 512 396.125 512 344.625C512 278.375 481.375 217.875 431.5 177.625ZM118.205 48H457.807L416.32 172.568L415.178 176H160.908L159.928 173.061L118.205 48ZM153.213 192H423.584C458.818 221.258 482.451 260.617 491.604 304H84.447C93.713 260.668 117.598 221.275 153.213 192ZM450.621 451.385C443.045 459.402 432.203 464 420.875 464H155.125C143.893 464 132.959 459.355 125.287 451.42C98.104 422.484 80 393.248 80 344.625C80 336.326 80.65 328.125 81.688 320H494.342C495.363 328.121 496 336.324 496 344.625C496 393.289 477.854 422.504 450.621 451.385Z" />
        </Icon>
    </>
}