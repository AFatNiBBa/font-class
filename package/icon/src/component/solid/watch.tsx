
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `watch` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=solid watch}
 * @preview ![watch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMTEzLjE4VjQ4QzMyMCAyMS42MDIgMjk4LjQgMCAyNzIgMEgxMTJDODUuNiAwIDY0IDIxLjYwMiA2NCA0OFYxMTMuMThDMjQuODA1IDE0OC4zMzIgMCAxOTkuMjA3IDAgMjU2UzI0LjgwNSAzNjMuNjY4IDY0IDM5OC44MlY0NjRDNjQgNDkwLjM5OCA4NS42IDUxMiAxMTIgNTEySDI3MkMyOTguNCA1MTIgMzIwIDQ5MC4zOTggMzIwIDQ2NFYzOTguODJDMzU5LjE5NSAzNjMuNjY4IDM4NCAzMTIuNzkzIDM4NCAyNTZTMzU5LjE5NSAxNDguMzMyIDMyMCAxMTMuMThaTTE5MiA0MDBDMTEyLjU5OCA0MDAgNDggMzM1LjQwMiA0OCAyNTZTMTEyLjU5OCAxMTIgMTkyIDExMlMzMzYgMTc2LjU5OCAzMzYgMjU2UzI3MS40MDIgNDAwIDE5MiA0MDBaTTIxNiAyMzYuNzVWMTc2QzIxNiAxNjIuNzUgMjA1LjI1IDE1MiAxOTIgMTUyUzE2OCAxNjIuNzUgMTY4IDE3NlYyNDhDMTY4IDI1NS4xMjUgMTcxLjE1NiAyNjEuODc1IDE3Ni42MjUgMjY2LjQzOEwyMjQuNjI1IDMwNi40MzhDMjI5LjEyNSAzMTAuMTg4IDIzNC41NjIgMzEyIDI0MCAzMTJDMjQ2Ljg3NSAzMTIgMjUzLjY4OCAzMDkuMDYyIDI1OC40MzggMzAzLjM3NUMyNjYuOTM4IDI5My4xODggMjY1LjU2MiAyNzguMDYzIDI1NS4zNzUgMjY5LjU2M0wyMTYgMjM2Ljc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Watch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 113.18V48C320 21.602 298.4 0 272 0H112C85.6 0 64 21.602 64 48V113.18C24.805 148.332 0 199.207 0 256S24.805 363.668 64 398.82V464C64 490.398 85.6 512 112 512H272C298.4 512 320 490.398 320 464V398.82C359.195 363.668 384 312.793 384 256S359.195 148.332 320 113.18ZM192 400C112.598 400 48 335.402 48 256S112.598 112 192 112S336 176.598 336 256S271.402 400 192 400ZM216 236.75V176C216 162.75 205.25 152 192 152S168 162.75 168 176V248C168 255.125 171.156 261.875 176.625 266.438L224.625 306.438C229.125 310.188 234.562 312 240 312C246.875 312 253.688 309.062 258.438 303.375C266.938 293.188 265.562 278.063 255.375 269.563L216 236.75Z" />
        </Icon>
    </>
}