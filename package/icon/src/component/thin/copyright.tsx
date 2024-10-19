
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `copyright` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/copyright?s=thin copyright}
 * @preview ![copyright](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNiAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODQgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0zMTYgMTY1LjkwNkMzMTkuNzUgMTY4LjA2MiAzMjQuNjU2IDE2Ni43ODEgMzI2LjkzOCAxNjIuOTY5QzMyOS4xMjUgMTU5LjE1NiAzMjcuODEzIDE1NC4yNSAzMjQgMTUyLjAzMUMyNzcuMDk0IDEyNC45MzcgMjE3LjUgMTMyLjc1IDE3OS4xNTYgMTcxLjE1NkMxNTYuNSAxOTMuODEyIDE0NCAyMjMuOTM4IDE0NCAyNTZTMTU2LjUgMzE4LjE4OCAxNzkuMTU2IDM0MC44NDRDMjAyLjI1IDM2My45NjkgMjMzLjAzMSAzNzYgMjY0LjEyNSAzNzZDMjg0LjY1NiAzNzYgMzA1LjM0NCAzNzAuNzUgMzI0IDM1OS45NjlDMzI3LjgxMiAzNTcuNzUgMzI5LjEyNSAzNTIuODQ0IDMyNi45MzggMzQ5LjAzMUMzMjQuNjU2IDM0NS4xNTYgMzE5Ljc1IDM0My45MzcgMzE2IDM0Ni4wOTRDMjc1LjI4MSAzNjkuNTk0IDIyMy42NTYgMzYyLjc4MSAxOTAuNDY5IDMyOS41MzFDMTcwLjgxMiAzMDkuOTA2IDE2MCAyODMuNzgxIDE2MCAyNTZTMTcwLjgxMiAyMDIuMDk0IDE5MC40NjkgMTgyLjQ2OUMyMjMuNzE5IDE0OS4yMTkgMjc1LjI4MSAxNDIuNDA2IDMxNiAxNjUuOTA2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Copyright(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM316 165.906C319.75 168.062 324.656 166.781 326.938 162.969C329.125 159.156 327.813 154.25 324 152.031C277.094 124.937 217.5 132.75 179.156 171.156C156.5 193.812 144 223.938 144 256S156.5 318.188 179.156 340.844C202.25 363.969 233.031 376 264.125 376C284.656 376 305.344 370.75 324 359.969C327.812 357.75 329.125 352.844 326.938 349.031C324.656 345.156 319.75 343.937 316 346.094C275.281 369.594 223.656 362.781 190.469 329.531C170.812 309.906 160 283.781 160 256S170.812 202.094 190.469 182.469C223.719 149.219 275.281 142.406 316 165.906Z" />
        </Icon>
    </>
}