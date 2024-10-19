
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `deviantart` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/deviantart?s=brands deviantart}
 * @preview ![deviantart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgOTMuMmwtOTguMiAxNzkuMSA3LjQgOS41SDMyMHYxMjcuN0gxNTkuMWwtMTMuNSA5LjItNDMuNyA4NGMtLjMgMC04LjYgOC42LTkuMiA5LjJIMHYtOTMuMmw5My4yLTE3OS40LTcuNC05LjJIMFYxMDIuNWgxNTZsMTMuNS05LjIgNDMuNy04NGMuMyAwIDguNi04LjYgOS4yLTkuMkgzMjB2OTMuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Deviantart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z" />
        </Icon>
    </>
}