
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `paypal` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paypal?s=brands paypal}
 * @preview ![paypal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTEuNCAyOTUuOWMtMy41IDE5LjItMTcuNCAxMDguNy0yMS41IDEzNC0uMyAxLjgtMSAyLjUtMyAyLjVIMTIuM2MtNy42IDAtMTMuMS02LjYtMTIuMS0xMy45TDU4LjggNDYuNmMxLjUtOS42IDEwLjEtMTYuOSAyMC0xNi45IDE1Mi4zIDAgMTY1LjEtMy43IDIwNCAxMS40IDYwLjEgMjMuMyA2NS42IDc5LjUgNDQgMTQwLjMtMjEuNSA2Mi42LTcyLjUgODkuNS0xNDAuMSA5MC4zLTQzLjQuNy02OS41LTctNzUuMyAyNC4yek0zNTcuMSAxNTJjLTEuOC0xLjMtMi41LTEuOC0zIDEuMy0yIDExLjQtNS4xIDIyLjUtOC44IDMzLjYtMzkuOSAxMTMuOC0xNTAuNSAxMDMuOS0yMDQuNSAxMDMuOS02LjEgMC0xMC4xIDMuMy0xMC45IDkuNC0yMi42IDE0MC40LTI3LjEgMTY5LjctMjcuMSAxNjkuNy0xIDcuMSAzLjUgMTIuOSAxMC42IDEyLjloNjMuNWM4LjYgMCAxNS43LTYuMyAxNy40LTE0LjkuNy01LjQtMS4xIDYuMSAxNC40LTkxLjMgNC42LTIyIDE0LjMtMTkuNyAyOS4zLTE5LjcgNzEgMCAxMjYuNC0yOC44IDE0Mi45LTExMi4zIDYuNS0zNC44IDQuNi03MS40LTIzLjgtOTIuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Paypal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
        </Icon>
    </>
}