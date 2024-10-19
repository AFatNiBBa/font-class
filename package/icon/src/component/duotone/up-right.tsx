
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=duotone up-right}
 * @preview ![up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM2OGMwIDEwLjIgNC4xIDIwLjEgMTEuMyAyNy4zbDQxLjQgNDEuNEM1OS45IDQ0My45IDY5LjggNDQ4IDgwIDQ0OHMyMC4xLTQuMSAyNy4zLTExLjNMMjQxLjQgMzAyLjZjLTMyLTMyLTY0LTY0LTk2LTk2TDExLjMgMzQwLjdDNC4xIDM0Ny45IDAgMzU3LjggMCAzNjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMzYgODBIOTZjLTEyLjkgMC0yNC42IDcuOC0yOS42IDE5LjhzLTIuMiAyNS43IDYuOSAzNC45bDI0MCAyNDBjOS4yIDkuMiAyMi45IDExLjkgMzQuOSA2LjlzMTkuOC0xNi42IDE5LjgtMjkuNlYxMTJjMC0xNy43LTE0LjMtMzItMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 368c0 10.2 4.1 20.1 11.3 27.3l41.4 41.4C59.9 443.9 69.8 448 80 448s20.1-4.1 27.3-11.3L241.4 302.6c-32-32-64-64-96-96L11.3 340.7C4.1 347.9 0 357.8 0 368z" />
            <path d="M336 80H96c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l240 240c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V112c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default UpRight;