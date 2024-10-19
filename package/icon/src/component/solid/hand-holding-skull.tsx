
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-skull` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-skull?s=solid hand-holding-skull}
 * @preview ![hand-holding-skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguMTk3IDMzNi4zMTJDNTU1LjA3MiAzMTguNSA1MzAuMDU5IDMxNC42NTYgNTEyLjI2NCAzMjcuODQ0TDM5Mi41OTIgNDE2LjAxNkgyNzEuOThDMjYzLjIzMiA0MTYuMDE2IDI1NS45ODIgNDA4Ljc2NiAyNTUuOTgyIDQwMC4wMjNDMjU1Ljk4MiAzOTEuMjczIDI2My4yMzIgMzg0LjAyMyAyNzEuOTggMzg0LjAyM0gzNTAuMjI3QzM2Ni4yMjUgMzg0LjAyMyAzODAuOTc1IDM3My4xNDggMzgzLjU5OCAzNTcuNDA2QzM4Ni44NDggMzM3LjQwNiAzNzEuNDc1IDMyMC4wMzEgMzUxLjk3NyAzMjAuMDMxSDE5MS45ODZDMTY0Ljk4OCAzMjAuMDMxIDEzOC44NjUgMzI5LjI4MSAxMTcuODY3IDM0Ni4yODFMNzEuMzY5IDM4NC4wMjNIMTUuOTk4QzcuMjUgMzg0LjAyMyAwIDM5MS4yNzMgMCA0MDAuMDIzVjQ5NkMwIDUwNC43NSA3LjI1IDUxMiAxNS45OTggNTEySDM2Mi45NzdDMzg1LjAwNiA1MTIgNDA2Ljg5NiA1MDQuODEyIDQyNC42NzYgNDkxLjcyN0w1NTkuNzI5IDM5Mi4yMTFDNTc3LjUxIDM3OS4xMTcgNTgxLjMwNSAzNTQuMDk0IDU2OC4xOTcgMzM2LjMxMlpNMjEzLjk4OCAyMzcuMjVMMjA4LjQ4OCAyNjMuMTI1QzIwNS44NjMgMjc1Ljc1IDIxMy45ODggMjg4IDIyNC45OSAyODhIMzUxLjAxQzM2Mi4xMzcgMjg4IDM3MC4xMzkgMjc1Ljc1IDM2Ny41MTQgMjYzLjEyNUwzNjIuMDEyIDIzNy4yNUM0MDMuNzcgMjE0Ljg3NSA0MzIuMDIzIDE3NC41IDQzMi4wMjMgMTI4QzQzMi4wMjMgNTcuMjUgMzY3LjUxNCAwIDI4OCAwQzIwOC40ODggMCAxNDMuOTc5IDU3LjI1IDE0My45NzkgMTI4QzE0My45NzkgMTc0LjUgMTcyLjIzMiAyMTQuODc1IDIxMy45ODggMjM3LjI1Wk0zNDQuMDEgMTEyLjAwOEMzNjEuNjM3IDExMi4wMDggMzc2LjAxNCAxMjYuMzgzIDM3Ni4wMTQgMTQ0LjAxQzM3Ni4wMTQgMTYxLjYzNSAzNjEuNjM3IDE3Ni4wMTIgMzQ0LjAxIDE3Ni4wMTJDMzI2LjM4MSAxNzYuMDEyIDMxMi4wMDQgMTYxLjYzNSAzMTIuMDA0IDE0NC4wMUMzMTIuMDA0IDEyNi4zODMgMzI2LjM4MSAxMTIuMDA4IDM0NC4wMSAxMTIuMDA4Wk0yMzEuOTkyIDExMi4wMDhDMjQ5LjYxOSAxMTIuMDA4IDI2My45OTYgMTI2LjM4MyAyNjMuOTk2IDE0NC4wMUMyNjMuOTk2IDE2MS42MzUgMjQ5LjYxOSAxNzYuMDEyIDIzMS45OTIgMTc2LjAxMkMyMTQuMzYzIDE3Ni4wMTIgMTk5Ljk4NiAxNjEuNjM1IDE5OS45ODYgMTQ0LjAxQzE5OS45ODYgMTI2LjM4MyAyMTQuMzYzIDExMi4wMDggMjMxLjk5MiAxMTIuMDA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandHoldingSkull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568.197 336.312C555.072 318.5 530.059 314.656 512.264 327.844L392.592 416.016H271.98C263.232 416.016 255.982 408.766 255.982 400.023C255.982 391.273 263.232 384.023 271.98 384.023H350.227C366.225 384.023 380.975 373.148 383.598 357.406C386.848 337.406 371.475 320.031 351.977 320.031H191.986C164.988 320.031 138.865 329.281 117.867 346.281L71.369 384.023H15.998C7.25 384.023 0 391.273 0 400.023V496C0 504.75 7.25 512 15.998 512H362.977C385.006 512 406.896 504.812 424.676 491.727L559.729 392.211C577.51 379.117 581.305 354.094 568.197 336.312ZM213.988 237.25L208.488 263.125C205.863 275.75 213.988 288 224.99 288H351.01C362.137 288 370.139 275.75 367.514 263.125L362.012 237.25C403.77 214.875 432.023 174.5 432.023 128C432.023 57.25 367.514 0 288 0C208.488 0 143.979 57.25 143.979 128C143.979 174.5 172.232 214.875 213.988 237.25ZM344.01 112.008C361.637 112.008 376.014 126.383 376.014 144.01C376.014 161.635 361.637 176.012 344.01 176.012C326.381 176.012 312.004 161.635 312.004 144.01C312.004 126.383 326.381 112.008 344.01 112.008ZM231.992 112.008C249.619 112.008 263.996 126.383 263.996 144.01C263.996 161.635 249.619 176.012 231.992 176.012C214.363 176.012 199.986 161.635 199.986 144.01C199.986 126.383 214.363 112.008 231.992 112.008Z" />
        </Icon>
    </>
}