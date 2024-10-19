
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=solid circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyMiAxNiAxNiAxMjMuNDIyIDE2IDI1NlMxMjMuNDIyIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZTMzg4LjU3OCAxNiAyNTYgMTZaTTM3NiAzMTJDMzc2IDMyOS42ODggMzYxLjY3MiAzNDQgMzQ0IDM0NFMzMTIgMzI5LjY4OCAzMTIgMzEyVjI0NS4yNUwxOTAuNjI1IDM2Ni42MjVDMTg0LjM3NSAzNzIuODc1IDE3Ni4xODggMzc2IDE2OCAzNzZTMTUxLjYyNSAzNzIuODc1IDE0NS4zNzUgMzY2LjYyNUMxMzIuODc1IDM1NC4xMjUgMTMyLjg3NSAzMzMuODc1IDE0NS4zNzUgMzIxLjM3NUwyNjYuNzUgMjAwSDIwMEMxODIuMzI4IDIwMCAxNjggMTg1LjY4OCAxNjggMTY4UzE4Mi4zMjggMTM2IDIwMCAxMzZIMzQ0QzM2MS42NzIgMTM2IDM3NiAxNTAuMzEyIDM3NiAxNjhWMzEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM376 312C376 329.688 361.672 344 344 344S312 329.688 312 312V245.25L190.625 366.625C184.375 372.875 176.188 376 168 376S151.625 372.875 145.375 366.625C132.875 354.125 132.875 333.875 145.375 321.375L266.75 200H200C182.328 200 168 185.688 168 168S182.328 136 200 136H344C361.672 136 376 150.312 376 168V312Z" />
        </Icon>
    </>
}