
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-round` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=thin bracket-round}
 * @preview ![bracket-round](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDAuNjk5IDQ1Ny41MzFDMTQ0LjI2MiA0NjAuMTI1IDE0NS4wNzQgNDY1LjEyNSAxNDIuNDggNDY4LjY4OEMxNDAuOTE4IDQ3MC44NDQgMTM4LjQ4IDQ3MiAxMzYuMDExIDQ3MkMxMzQuMzg2IDQ3MiAxMzIuNzI5IDQ3MS41IDEzMS4zMjMgNDcwLjVDMTI3LjI2IDQ2Ny41NjMgMzIgMzk3LjEyMyAzMiAyNTUuOTk1UzEyNy4yNiA0NC40MjggMTMxLjMyMyA0MS40OTFDMTM0Ljg1NCAzOC45NTkgMTM5Ljg4NiAzOS43MDkgMTQyLjQ4IDQzLjMwM0MxNDUuMDc0IDQ2Ljg2NiAxNDQuMjYyIDUxLjg2NiAxNDAuNjk5IDU0LjQ2QzEzOS43OTIgNTUuMTQ3IDQ4LjAwMiAxMjMuMzM2IDQ4LjAwMiAyNTUuOTk1UzEzOS43OTIgNDU2Ljg0NCAxNDAuNjk5IDQ1Ny41MzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BracketRound(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M140.699 457.531C144.262 460.125 145.074 465.125 142.48 468.688C140.918 470.844 138.48 472 136.011 472C134.386 472 132.729 471.5 131.323 470.5C127.26 467.563 32 397.123 32 255.995S127.26 44.428 131.323 41.491C134.854 38.959 139.886 39.709 142.48 43.303C145.074 46.866 144.262 51.866 140.699 54.46C139.792 55.147 48.002 123.336 48.002 255.995S139.792 456.844 140.699 457.531Z" />
        </Icon>
    </>
}