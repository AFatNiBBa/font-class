
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `neuter` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/neuter?s=light neuter}
 * @preview ![neuter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTc2QzM2OCA3OC43OTkgMjg5LjIwMyAwIDE5MiAwQzk0Ljc5OSAwIDE2IDc4Ljc5OSAxNiAxNzZDMTYgMjY3Ljc5OSA4Ni4zMDkgMzQzLjEgMTc2IDM1MS4xOTNWNDk2QzE3NiA1MDQuODQ0IDE4My4xNTYgNTEyIDE5MiA1MTJTMjA4IDUwNC44NDQgMjA4IDQ5NlYzNTEuMTkzQzI5Ny42OTUgMzQzLjEgMzY4IDI2Ny44MDEgMzY4IDE3NlpNMTkyIDMyMEMxMTIuNTk4IDMyMCA0OCAyNTUuNDAyIDQ4IDE3NlMxMTIuNTk4IDMyIDE5MiAzMlMzMzYgOTYuNTk4IDMzNiAxNzZTMjcxLjQwMiAzMjAgMTkyIDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Neuter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 176C368 78.799 289.203 0 192 0C94.799 0 16 78.799 16 176C16 267.799 86.309 343.1 176 351.193V496C176 504.844 183.156 512 192 512S208 504.844 208 496V351.193C297.695 343.1 368 267.801 368 176ZM192 320C112.598 320 48 255.402 48 176S112.598 32 192 32S336 96.598 336 176S271.402 320 192 320Z" />
        </Icon>
    </>
}