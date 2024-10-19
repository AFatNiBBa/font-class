
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `neuter` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/neuter?s=regular neuter}
 * @preview ![neuter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTc2QzM2OCA3OC43OTkgMjg5LjIwMyAwIDE5MiAwQzk0Ljc5OSAwIDE2IDc4Ljc5OSAxNiAxNzZDMTYgMjY1LjAzOSA4Mi4xODIgMzM4LjQ0MyAxNjggMzUwLjE3NlY0ODhDMTY4IDUwMS4yNSAxNzguNzUgNTEyIDE5MiA1MTJTMjE2IDUwMS4yNSAyMTYgNDg4VjM1MC4xNzZDMzAxLjgxOCAzMzguNDQ1IDM2OCAyNjUuMDM5IDM2OCAxNzZaTTE5MiAzMDRDMTIxLjQyIDMwNCA2NCAyNDYuNTggNjQgMTc2UzEyMS40MiA0OCAxOTIgNDhTMzIwIDEwNS40MiAzMjAgMTc2UzI2Mi41OCAzMDQgMTkyIDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Neuter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 176C368 78.799 289.203 0 192 0C94.799 0 16 78.799 16 176C16 265.039 82.182 338.443 168 350.176V488C168 501.25 178.75 512 192 512S216 501.25 216 488V350.176C301.818 338.445 368 265.039 368 176ZM192 304C121.42 304 64 246.58 64 176S121.42 48 192 48S320 105.42 320 176S262.58 304 192 304Z" />
        </Icon>
    </>
}