
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sistrix` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sistrix?s=brands sistrix}
 * @preview ![sistrix](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNDQ5TDMwMS4yIDMwMC4yYzIwLTI3LjkgMzEuOS02Mi4yIDMxLjktOTkuMiAwLTkzLjEtNzQuNy0xNjguOS0xNjYuNS0xNjguOUM3NC43IDMyIDAgMTA3LjggMCAyMDAuOXM3NC43IDE2OC45IDE2Ni41IDE2OC45YzM5LjggMCA3Ni4zLTE0LjIgMTA1LTM3LjlsMTQ2IDE0OC4xIDMwLjUtMzF6TTE2Ni41IDMzMC44Yy03MC42IDAtMTI4LjEtNTguMy0xMjguMS0xMjkuOVM5NS45IDcxIDE2Ni41IDcxczEyOC4xIDU4LjMgMTI4LjEgMTI5LjktNTcuNCAxMjkuOS0xMjguMSAxMjkuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sistrix(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9C74.7 32 0 107.8 0 200.9s74.7 168.9 166.5 168.9c39.8 0 76.3-14.2 105-37.9l146 148.1 30.5-31zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71s128.1 58.3 128.1 129.9-57.4 129.9-128.1 129.9z" />
        </Icon>
    </>
}