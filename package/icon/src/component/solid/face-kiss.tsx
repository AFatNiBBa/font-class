
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-kiss` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-kiss?s=solid face-kiss}
 * @preview ![face-kiss](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE5IDE2IDI1NlMxMjMuNDYxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTgxIDQ5NiAyNTZTMzg4LjUzOSAxNiAyNTYgMTZaTTE3NS45MzkgMjQwQzE1OC4yNiAyNDAgMTQzLjk3MSAyMjUuNzUgMTQzLjk3MSAyMDhTMTU4LjI2IDE3NiAxNzUuOTM5IDE3NkMxOTMuNzQgMTc2IDIwOC4wMjkgMTkwLjI1IDIwOC4wMjkgMjA4UzE5My43NCAyNDAgMTc1LjkzOSAyNDBaTTMxMS45NDUgMzg4LjA5OEMzMTEuOTQ1IDQwNy4yOTEgMjgzLjI0NiA0MjkuNDc1IDI0MC41IDQzMS45NjhDMjMyLjAyMyA0MzIuNzE2IDIyOC4zOTEgNDIwLjI1MyAyMzYuODY3IDQxNi42MzhMMjUzLjk0MSA0MDkuNDFDMjY2Ljg5OCA0MDMuOTI2IDI3NC42NDggMzk1Ljk1IDI3NC42NDggMzg3Ljk3NFMyNjYuODk4IDM3Mi4wMjEgMjUzLjk0MSAzNjYuNTM4TDIzNi44NjcgMzU5LjQzNEMyMzAuOTM0IDM1Ni45NDEgMjMwLjgxMiAzNDcuMjIgMjM2Ljg2NyAzNDQuNjAzTDI1My45NDEgMzM3LjQ5OUMyNjYuODk4IDMzMi4wMTYgMjc0LjY0OCAzMjQuMDM5IDI3NC42NDggMzE2LjA2M0MyNzQuNjQ4IDMwOC4wODcgMjY2Ljg5OCAzMDAuMTExIDI1My45NDEgMjk0LjYyN0wyMzYuODY3IDI4Ny4zOThDMjI4LjI3IDI4My43ODQgMjMyLjE0NSAyNzAuOTQ4IDI0MC41IDI3Mi4wNjlDMjgzLjI0NiAyNzQuNTYyIDMxMS45NDUgMjk2Ljc0NiAzMTEuOTQ1IDMxNS45MzhDMzExLjk0NSAzMjguOSAyOTguNjI1IDM0My4xMDggMjc2LjgyOCAzNTEuODMyQzI5OC42MjUgMzYwLjkyOSAzMTEuOTQ1IDM3NS4xMzcgMzExLjk0NSAzODguMDk4Wk0zMzYuMDYgMjQwQzMxOC4yNzYgMjQwIDMwNCAyMjUuNzUgMzA0IDIwOFMzMTguMjc2IDE3NiAzMzYuMDYgMTc2QzM1My43MjQgMTc2IDM2OCAxOTAuMjUgMzY4IDIwOFMzNTMuNzI0IDI0MCAzMzYuMDYgMjQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FaceKiss(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM175.939 240C158.26 240 143.971 225.75 143.971 208S158.26 176 175.939 176C193.74 176 208.029 190.25 208.029 208S193.74 240 175.939 240ZM311.945 388.098C311.945 407.291 283.246 429.475 240.5 431.968C232.023 432.716 228.391 420.253 236.867 416.638L253.941 409.41C266.898 403.926 274.648 395.95 274.648 387.974S266.898 372.021 253.941 366.538L236.867 359.434C230.934 356.941 230.812 347.22 236.867 344.603L253.941 337.499C266.898 332.016 274.648 324.039 274.648 316.063C274.648 308.087 266.898 300.111 253.941 294.627L236.867 287.398C228.27 283.784 232.145 270.948 240.5 272.069C283.246 274.562 311.945 296.746 311.945 315.938C311.945 328.9 298.625 343.108 276.828 351.832C298.625 360.929 311.945 375.137 311.945 388.098ZM336.06 240C318.276 240 304 225.75 304 208S318.276 176 336.06 176C353.724 176 368 190.25 368 208S353.724 240 336.06 240Z" />
        </Icon>
    </>
}