
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=solid dagger}
 * @preview ![dagger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTI4SDIyNFYxNkMyMjQgNy4xMjUgMjE2Ljg3NSAwIDIwOCAwSDE3NkMxNjcuMTI1IDAgMTYwIDcuMTI1IDE2MCAxNlYxMjhINDhDMjEuNSAxMjggMCAxNDkuNSAwIDE3NlMyMS41IDIyNCA0OCAyMjRDNjguODc1IDIyNCA4Ni41IDIxMC42MjUgOTMgMTkySDI5MUMyOTcuNSAyMTAuNjI1IDMxNS4xMjUgMjI0IDMzNiAyMjRDMzYyLjUgMjI0IDM4NCAyMDIuNSAzODQgMTc2UzM2Mi41IDEyOCAzMzYgMTI4Wk0xMjggNDI4Ljg3NUwxNzguNzUgNTA0Ljg3NUMxODUgNTE0LjM3NSAxOTkgNTE0LjM3NSAyMDUuMzc1IDUwNC44NzVMMjU2IDQyOC44NzVWMjI0SDEyOFY0MjguODc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Dagger(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 128H224V16C224 7.125 216.875 0 208 0H176C167.125 0 160 7.125 160 16V128H48C21.5 128 0 149.5 0 176S21.5 224 48 224C68.875 224 86.5 210.625 93 192H291C297.5 210.625 315.125 224 336 224C362.5 224 384 202.5 384 176S362.5 128 336 128ZM128 428.875L178.75 504.875C185 514.375 199 514.375 205.375 504.875L256 428.875V224H128V428.875Z" />
        </Icon>
    </>
}