
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `manat-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/manat-sign?s=light manat-sign}
 * @preview ![manat-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMjcyVjQ2NEMzNjggNDcyLjg0NCAzNjAuODQ0IDQ4MCAzNTIgNDgwUzMzNiA0NzIuODQ0IDMzNiA0NjRWMjcyQzMzNiAxOTguMDcyIDI3OS44MDMgMTM3LjY5NSAyMDggMTI5LjYxN1Y0NjRDMjA4IDQ3Mi44NDQgMjAwLjg0NCA0ODAgMTkyIDQ4MFMxNzYgNDcyLjg0NCAxNzYgNDY0VjEyOS42MTdDMTA0LjE5NyAxMzcuNjk1IDQ4IDE5OC4wNzIgNDggMjcyVjQ2NEM0OCA0NzIuODQ0IDQwLjg0NCA0ODAgMzIgNDgwUzE2IDQ3Mi44NDQgMTYgNDY0VjI3MkMxNiAxODAuMzY5IDg2LjQzNCAxMDQuOTM0IDE3NiA5Ni44MTFWNDhDMTc2IDM5LjE1NiAxODMuMTU2IDMyIDE5MiAzMlMyMDggMzkuMTU2IDIwOCA0OFY5Ni44MTFDMjk3LjU2NiAxMDQuOTM0IDM2OCAxODAuMzY5IDM2OCAyNzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ManatSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 272V464C368 472.844 360.844 480 352 480S336 472.844 336 464V272C336 198.072 279.803 137.695 208 129.617V464C208 472.844 200.844 480 192 480S176 472.844 176 464V129.617C104.197 137.695 48 198.072 48 272V464C48 472.844 40.844 480 32 480S16 472.844 16 464V272C16 180.369 86.434 104.934 176 96.811V48C176 39.156 183.156 32 192 32S208 39.156 208 48V96.811C297.566 104.934 368 180.369 368 272Z" />
        </Icon>
    </>
}