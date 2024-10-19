
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-arrow-down-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-right?s=solid circle-arrow-down-right}
 * @preview ![circle-arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyMiAxNiAxNiAxMjMuNDIyIDE2IDI1NlMxMjMuNDIyIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZTMzg4LjU3OCAxNiAyNTYgMTZaTTM3NiAzNDRDMzc2IDM2MS42ODggMzYxLjY3MiAzNzYgMzQ0IDM3NkgyMDBDMTgyLjMyOCAzNzYgMTY4IDM2MS42ODggMTY4IDM0NFMxODIuMzI4IDMxMiAyMDAgMzEySDI2Ni43NUwxNDUuMzc1IDE5MC42MjVDMTMyLjg3NSAxNzguMTI1IDEzMi44NzUgMTU3Ljg3NSAxNDUuMzc1IDE0NS4zNzVTMTc4LjEyNSAxMzIuODc1IDE5MC42MjUgMTQ1LjM3NUwzMTIgMjY2Ljc1VjIwMEMzMTIgMTgyLjMxMiAzMjYuMzI4IDE2OCAzNDQgMTY4UzM3NiAxODIuMzEyIDM3NiAyMDBWMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleArrowDownRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM376 344C376 361.688 361.672 376 344 376H200C182.328 376 168 361.688 168 344S182.328 312 200 312H266.75L145.375 190.625C132.875 178.125 132.875 157.875 145.375 145.375S178.125 132.875 190.625 145.375L312 266.75V200C312 182.312 326.328 168 344 168S376 182.312 376 200V344Z" />
        </Icon>
    </>
}