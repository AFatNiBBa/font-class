
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-circle-check?s=sharp-duotone-solid envelope-circle-check}
 * @preview ![envelope-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgODBMMjU2IDMyMGw3OC40LTUzLjljMjYuMS02MC4yIDg0LjktMTAzIDE1NC4xLTEwNS45TDUxMiAxNDRsMC04MEwwIDY0ek0wIDE4Mi44TDAgNDQ4bDM2MC4yIDBDMzM1LjEgNDE3LjYgMzIwIDM3OC41IDMyMCAzMzZjMC03LjUgLjUtMTQuOSAxLjQtMjIuMWwtNDcuMiAzMi41TDI1NiAzNTguOGwtMTguMS0xMi41TDAgMTgyLjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00OTYgNDgwYTE0NCAxNDQgMCAxIDAgMC0yODggMTQ0IDE0NCAwIDEgMCAwIDI4OHptNjcuMy0xNjQuN2wtNzIgNzJMNDgwIDM5OC42bC0xMS4zLTExLjMtNDAtNDBMNDE3LjQgMzM2IDQ0MCAzMTMuNGwxMS4zIDExLjNMNDgwIDM1My40bDYwLjctNjAuN0w1NTIgMjgxLjQgNTc0LjYgMzA0bC0xMS4zIDExLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const EnvelopeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 80L256 320l78.4-53.9c26.1-60.2 84.9-103 154.1-105.9L512 144l0-80L0 64zM0 182.8L0 448l360.2 0C335.1 417.6 320 378.5 320 336c0-7.5 .5-14.9 1.4-22.1l-47.2 32.5L256 358.8l-18.1-12.5L0 182.8z" />
            <path d="M496 480a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 398.6l-11.3-11.3-40-40L417.4 336 440 313.4l11.3 11.3L480 353.4l60.7-60.7L552 281.4 574.6 304l-11.3 11.3z" />
    </Icon>
);

export default EnvelopeCircleCheck;