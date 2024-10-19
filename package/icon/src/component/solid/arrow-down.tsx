
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=solid arrow-down}
 * @preview ![arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTEuNTQ3IDMxN0wyNTEuNTQ3IDQ2OUMyNDMuODI4IDQ3Ni4zNDQgMjMzLjkyMiA0ODAgMjI0IDQ4MFMyMDQuMTcyIDQ3Ni4zNDQgMTk2LjQ1MyA0NjlMMzYuNDUzIDMxN0MyMC40MzcgMzAxLjc4MSAxOS43ODEgMjc2LjQ2OSAzNSAyNjAuNDM4QzUwLjIzNCAyNDQuNSA3NS41NzggMjQzLjgxMiA5MS41NDcgMjU5TDE4NCAzNDYuODJWNzJDMTg0IDQ5LjkwNiAyMDEuOTA2IDMyIDIyNCAzMlMyNjQgNDkuOTA2IDI2NCA3MlYzNDYuODJMMzU2LjQ1MyAyNTlDMzcyLjQzNyAyNDMuODEyIDM5Ny43ODEgMjQ0LjQ2OSA0MTMgMjYwLjQzOEM0MjguMjE4IDI3Ni40NjkgNDI3LjU2MiAzMDEuNzgxIDQxMS41NDcgMzE3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M411.547 317L251.547 469C243.828 476.344 233.922 480 224 480S204.172 476.344 196.453 469L36.453 317C20.437 301.781 19.781 276.469 35 260.438C50.234 244.5 75.578 243.812 91.547 259L184 346.82V72C184 49.906 201.906 32 224 32S264 49.906 264 72V346.82L356.453 259C372.437 243.812 397.781 244.469 413 260.438C428.218 276.469 427.562 301.781 411.547 317Z" />
        </Icon>
    </>
}