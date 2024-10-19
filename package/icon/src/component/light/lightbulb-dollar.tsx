
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lightbulb-dollar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-dollar?s=light lightbulb-dollar}
 * @preview ![lightbulb-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuOTc1IDQxNS45OTJIMTI4LjAyNUMxMTkuMTggNDE1Ljk5MiAxMTIuMDEyIDQyMy4xNzIgMTEyLjAyNSA0MzIuMDJMMTEyLjA2MyA0NTQuNDE0QzExMi4wNzIgNDYwLjY4NCAxMTMuOTMyIDQ2Ni44MTMgMTE3LjQwNiA0NzIuMDM1TDEzNC41MDIgNDk3LjcxOUMxMzkuNzI3IDUwNS41NzQgMTUxLjcyMyA1MTIgMTYxLjE1NiA1MTJIMjIyLjg3NUMyMzIuMjkzIDUxMiAyNDQuMjY2IDUwNS41ODYgMjQ5LjQ4MiA0OTcuNzQ2TDI2Ni41NTEgNDcyLjEwMkMyNjkuNTA0IDQ2Ny42NiAyNzEuOTMgNDU5LjY2NCAyNzEuOTM3IDQ1NC4zMzZMMjcxLjk3NSA0MzIuMDJDMjcxLjk4OCA0MjMuMTcyIDI2NC44MiA0MTUuOTkyIDI1NS45NzUgNDE1Ljk5MlpNMjM5LjkxIDQ1NC4zNzVMMjIzLjc0MiA0NzguODgzQzIyMy4yNjYgNDc5LjMyIDIyMi4wNTcgNDc5Ljk2OSAyMjIuODc1IDQ4MEwxNjIuNTg4IDQ4MC4xMTdDMTYyLjE2NCA0ODAuMDE2IDE2MS40NzUgNDc5LjY4OCAxNjEuMTg5IDQ3OS42ODhDMTYxLjA0OSA0NzkuNjg4IDE2MS4wMDYgNDc5Ljc2NiAxNjEuMTQxIDQ3OS45OTJMMTQ0LjA2MiA0NTQuMzU5TDE0NC4wNTMgNDQ3Ljk5MkgyMzkuOTlMMjM5Ljk5NCA0NTMuMTcyQzIzOS45MyA0NTMuNjE3IDIzOS42NzggNDU0LjQ4NCAyMzkuNzk1IDQ1NC40ODRDMjM5LjgxNiA0NTQuNDg0IDIzOS44NTQgNDU0LjQ1MyAyMzkuOTEgNDU0LjM3NVpNMzE1Ljc4MSA1MS4yOTdDMjgyLjQ1MyAxOC4wNzggMjM3LjU2MyAtMS4xMzcgMTkxLjQzOCAwLjA1MUM5NC43MDMgMC4zMzIgMTYgNzkuODg3IDE2IDE3Ny4zNzVDMTYgMjIwLjI4MSAzMS40NjkgMjYxLjcxMSA1OS41NDcgMjkzLjk5MkM3Mi44NzUgMzA5LjMwMSA5NS4zOTEgMzQzLjU3OCAxMDMuMjgxIDM3MC4wMTZDMTA0LjM1OSAzNzguNzAzIDExMi4xMjUgMzg0LjYzNyAxMjAuOTIyIDM4My43M0MxMjkuNjI1IDM4Mi43NjIgMTM1LjkwNiAzNzQuNzY2IDEzNS4wMzEgMzY2LjA3OEwxMzQuNDIyIDM2Mi43NjZDMTI0LjEwOSAzMjcuNzk3IDk4LjQyMiAyODkuOTMgODMuNjg3IDI3Mi45OTJDNjAuNjcyIDI0Ni41MjcgNDggMjEyLjU2MiA0OCAxNzcuMzc1QzQ4IDk2LjEzMyAxMTEuMDQ3IDMyLjI5NyAxOTEuNTMxIDMyLjA0N0gxOTJDMjMwLjEyNSAzMi4wNDcgMjY2LjA0NyA0Ni45MjIgMjkzLjE4OCA3My45ODRDMzIwLjc5NyAxMDEuNDc3IDMzNiAxMzguMjI3IDMzNiAxNzcuMzc1QzMzNiAyMTIuNTYzIDMyMy4zMjggMjQ2LjUyNyAzMDAuMzI4IDI3Mi45OTJDMjg1LjU3OCAyODkuOTMgMjU5Ljg5MSAzMjcuNzk3IDI0OS41NzggMzYyLjc2NkwyNDguOTUzIDM2Ni4xMDlDMjQ3LjkwNiAzNzQuODU5IDI1My44OTEgMzgzLjY5OSAyNjIuNjI1IDM4NC43OTNDMjYzLjQwNiAzODQuODg3IDI2NC4xNTYgMzg0Ljk0OSAyNjQuOTA2IDM4NC45NDlDMjcyLjcwMyAzODQuOTQ5IDI3OS4yNjYgMzc5LjgyOCAyODAuMjY2IDM3MS44MjhDMjg4LjYwOSAzNDMuNTc4IDMxMS4xMjUgMzA5LjMwMSAzMjQuNDY5IDI5My45OTJDMzUyLjUzMSAyNjEuNzExIDM2OCAyMjAuMjgxIDM2OCAxNzcuMzc1QzM2OCAxMjkuNjY0IDM0OS40NTMgODQuODg3IDMxNS43ODEgNTEuMjk3Wk0xODMuNTE2IDIyMy4wOTRDMTc3Ljk4OCAyMjIuMjQ0IDE3My41MjUgMjIxLjAwMiAxNTQuNjU2IDIxNC4yNUMxNDYuMjY2IDIxMS4yODEgMTM3LjE3MiAyMTUuNjg4IDEzNC4yMzQgMjI0LjAzMUMxMzEuMjk3IDIzMi4zNDQgMTM1LjY3MiAyNDEuNSAxNDQgMjQ0LjQzOEMxNTIuMzYxIDI0Ny40MyAxNjQuNDEyIDI1MS45MzIgMTc2IDI1NC4wNzZWMjcyQzE3NiAyODAuODQ0IDE4My4xNTYgMjg4IDE5MiAyODhTMjA4IDI4MC44NDQgMjA4IDI3MlYyNTQuMjMyQzIzMC4zODMgMjUwLjQwNiAyNDYuNDE2IDIzNy42ODkgMjQ5Ljg5MSAyMTcuNjI1QzI1Ni43NSAxNzcuODc1IDIxOC45ODQgMTY3LjA2MyAxOTYuNDA2IDE2MC41OTRDMTc3Ljk4IDE1NS4zMjggMTYzLjU4IDE1MS43NzcgMTY1LjY0MSAxMzkuODEyQzE2Ny41MTYgMTI4Ljg3NSAxODQuODkxIDEyNi40MzcgMjAwLjQ1MyAxMjguOTA2QzIwNi4yNjYgMTI5LjgxMiAyMTIuNjcyIDEzMS44MTIgMjE4Ljc1IDEzMy45MzhDMjI3LjEwOSAxMzYuNzgxIDIzNi4xODcgMTMyLjQwNiAyMzkuMTA5IDEyNC4wNjJDMjQyLjAxNiAxMTUuNzE5IDIzNy41OTQgMTA2LjU5NCAyMjkuMjUgMTAzLjY4N0MyMjAuNzc1IDEwMC43NTQgMjE0LjA0NSA5OC45NzkgMjA4IDk3Ljg1OVY4MEMyMDggNzEuMTU2IDIwMC44NDQgNjQgMTkyIDY0UzE3NiA3MS4xNTYgMTc2IDgwVjk3LjI4OUMxNTMuNDU1IDEwMS4wNTMgMTM3LjU5NiAxMTQuMTk3IDEzNC4xMDkgMTM0LjM3NUMxMjcuMzEyIDE3My43MTkgMTY1LjUxNiAxODQuOTA2IDE4MS44MTIgMTg5LjY4OEMyMDMuODEyIDE5Ni4xMDkgMjIwLjU4IDE5OS4zOTMgMjE4LjM1OSAyMTIuMTg4QzIxNi40ODQgMjIzLjEyNSAxOTkuMDYyIDIyNS41MzEgMTgzLjUxNiAyMjMuMDk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LightbulbDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M255.975 415.992H128.025C119.18 415.992 112.012 423.172 112.025 432.02L112.063 454.414C112.072 460.684 113.932 466.813 117.406 472.035L134.502 497.719C139.727 505.574 151.723 512 161.156 512H222.875C232.293 512 244.266 505.586 249.482 497.746L266.551 472.102C269.504 467.66 271.93 459.664 271.937 454.336L271.975 432.02C271.988 423.172 264.82 415.992 255.975 415.992ZM239.91 454.375L223.742 478.883C223.266 479.32 222.057 479.969 222.875 480L162.588 480.117C162.164 480.016 161.475 479.688 161.189 479.688C161.049 479.688 161.006 479.766 161.141 479.992L144.062 454.359L144.053 447.992H239.99L239.994 453.172C239.93 453.617 239.678 454.484 239.795 454.484C239.816 454.484 239.854 454.453 239.91 454.375ZM315.781 51.297C282.453 18.078 237.563 -1.137 191.438 0.051C94.703 0.332 16 79.887 16 177.375C16 220.281 31.469 261.711 59.547 293.992C72.875 309.301 95.391 343.578 103.281 370.016C104.359 378.703 112.125 384.637 120.922 383.73C129.625 382.762 135.906 374.766 135.031 366.078L134.422 362.766C124.109 327.797 98.422 289.93 83.687 272.992C60.672 246.527 48 212.562 48 177.375C48 96.133 111.047 32.297 191.531 32.047H192C230.125 32.047 266.047 46.922 293.188 73.984C320.797 101.477 336 138.227 336 177.375C336 212.563 323.328 246.527 300.328 272.992C285.578 289.93 259.891 327.797 249.578 362.766L248.953 366.109C247.906 374.859 253.891 383.699 262.625 384.793C263.406 384.887 264.156 384.949 264.906 384.949C272.703 384.949 279.266 379.828 280.266 371.828C288.609 343.578 311.125 309.301 324.469 293.992C352.531 261.711 368 220.281 368 177.375C368 129.664 349.453 84.887 315.781 51.297ZM183.516 223.094C177.988 222.244 173.525 221.002 154.656 214.25C146.266 211.281 137.172 215.688 134.234 224.031C131.297 232.344 135.672 241.5 144 244.438C152.361 247.43 164.412 251.932 176 254.076V272C176 280.844 183.156 288 192 288S208 280.844 208 272V254.232C230.383 250.406 246.416 237.689 249.891 217.625C256.75 177.875 218.984 167.063 196.406 160.594C177.98 155.328 163.58 151.777 165.641 139.812C167.516 128.875 184.891 126.437 200.453 128.906C206.266 129.812 212.672 131.812 218.75 133.938C227.109 136.781 236.187 132.406 239.109 124.062C242.016 115.719 237.594 106.594 229.25 103.687C220.775 100.754 214.045 98.979 208 97.859V80C208 71.156 200.844 64 192 64S176 71.156 176 80V97.289C153.455 101.053 137.596 114.197 134.109 134.375C127.312 173.719 165.516 184.906 181.812 189.688C203.812 196.109 220.58 199.393 218.359 212.188C216.484 223.125 199.062 225.531 183.516 223.094Z" />
        </Icon>
    </>
}