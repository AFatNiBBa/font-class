
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-ampersand` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=thin circle-ampersand}
 * @preview ![circle-ampersand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjIuODY5IDMyNS45NDFMMzY1LjM3NSAyNjUuODQ0QzM2Ny45MzcgMjYyLjIzNCAzNjcuMDYyIDI1Ny4yMzQgMzYzLjQ2OSAyNTQuNjg3QzM1OS44NDQgMjUyLjEyNSAzNTQuODc1IDI1Mi45NjkgMzUyLjMxMiAyNTYuNTk0TDMxMS42OTMgMzE0LjAyM0wyNDMuMzEyIDI0MS4xMDlMMjgwLjIxOSAyMTEuMzU5QzI5MS42ODcgMjAyLjQyMiAyOTguMjgxIDE4OS4xMDkgMjk4LjI4MSAxNzQuODQ0QzI5OC4yODEgMTQ5LjAxNiAyNzYuNjI1IDEyOCAyNTAgMTI4SDIyNy43MTlDMjAxLjA5NCAxMjggMTc5LjQzOCAxNDkuMDE2IDE3OS40MzggMTc0Ljg0NEMxNzkuNDM4IDE4OC44NzUgMTg0LjgxMyAyMDIuMjgxIDE5NC41NjIgMjEyLjU0N0wyMTkuODQ0IDIzOS40ODRMMTY3LjMxMiAyODEuODEyQzE1My4yMTkgMjkyLjc1IDE0NS4xNTYgMzA5LjA2MiAxNDUuMTU2IDMyNi41NzhDMTQ1LjE1NiAzNTguMjM0IDE3MS43NSAzODQgMjA0LjQzOCAzODRIMjQzLjMxM0MyNjcuNDA2IDM4NCAyODkuOTM4IDM3Mi41MTYgMzAzLjUzMSAzNTMuMjgxTDMxMy40MzQgMzM5LjI4MUwzNTMgMzgxLjQ2OUMzNTYuMDk0IDM4NC43MTkgMzYxLjEyNSAzODQuODU5IDM2NC4zMTIgMzgxLjgyOEMzNjcuNTMxIDM3OC44MTMgMzY3LjY4OCAzNzMuNzUgMzY0LjY4OCAzNzAuNTMxTDMyMi44NjkgMzI1Ljk0MVpNMjA2LjIxOSAyMDEuNTc4QzE5OS4yNSAxOTQuMjUgMTk1LjQzOCAxODQuNzUgMTk1LjQzOCAxNzQuODQ0QzE5NS40MzggMTU3Ljg0NCAyMDkuOTA2IDE0NCAyMjcuNzE5IDE0NEgyNTBDMjY3LjgxMiAxNDQgMjgyLjI4MSAxNTcuODQ0IDI4Mi4yODEgMTc0Ljg0NEMyODIuMjgxIDE4NC4xNDEgMjc3LjkzNyAxOTIuODU5IDI3MC4yODEgMTk4LjgxMkwyMzIuMzEyIDIyOS40MjJMMjA2LjIxOSAyMDEuNTc4Wk0yOTAuNDY5IDM0NC4wMzFDMjc5Ljg3NSAzNTkuMDQ3IDI2Mi4yMTkgMzY4IDI0My4zMTIgMzY4SDIwNC40MzhDMTgwLjU2MiAzNjggMTYxLjE1NiAzNDkuNDIyIDE2MS4xNTYgMzI2LjU3OEMxNjEuMTU2IDMxNC4wNDcgMTY2Ljk2OSAzMDIuMzI4IDE3Ny4yNSAyOTQuMzU5TDIzMC44MTIgMjUxLjE4OEwzMDIuMjU4IDMyNy4zNjVMMjkwLjQ2OSAzNDQuMDMxWk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleAmpersand(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M322.869 325.941L365.375 265.844C367.937 262.234 367.062 257.234 363.469 254.687C359.844 252.125 354.875 252.969 352.312 256.594L311.693 314.023L243.312 241.109L280.219 211.359C291.687 202.422 298.281 189.109 298.281 174.844C298.281 149.016 276.625 128 250 128H227.719C201.094 128 179.438 149.016 179.438 174.844C179.438 188.875 184.813 202.281 194.562 212.547L219.844 239.484L167.312 281.812C153.219 292.75 145.156 309.062 145.156 326.578C145.156 358.234 171.75 384 204.438 384H243.313C267.406 384 289.938 372.516 303.531 353.281L313.434 339.281L353 381.469C356.094 384.719 361.125 384.859 364.312 381.828C367.531 378.813 367.688 373.75 364.688 370.531L322.869 325.941ZM206.219 201.578C199.25 194.25 195.438 184.75 195.438 174.844C195.438 157.844 209.906 144 227.719 144H250C267.812 144 282.281 157.844 282.281 174.844C282.281 184.141 277.937 192.859 270.281 198.812L232.312 229.422L206.219 201.578ZM290.469 344.031C279.875 359.047 262.219 368 243.312 368H204.438C180.562 368 161.156 349.422 161.156 326.578C161.156 314.047 166.969 302.328 177.25 294.359L230.812 251.188L302.258 327.365L290.469 344.031ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}