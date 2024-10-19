
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dribbble-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dribbble-square?s=brands dribbble-square}
 * @preview ![dribbble-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05MC4yIDIyOC4yYzguOS00Mi40IDM3LjQtNzcuNyA3NS43LTk1LjcgMy42IDQuOSAyOCAzOC44IDUwLjcgNzktNjQgMTctMTIwLjMgMTYuOC0xMjYuNCAxNi43ek0zMTQuNiAxNTRjLTMzLjYtMjkuOC03OS4zLTQxLjEtMTIyLjYtMzAuNiAzLjggNS4xIDI4LjYgMzguOSA1MSA4MCA0OC42LTE4LjMgNjkuMS00NS45IDcxLjYtNDkuNHpNMTQwLjEgMzY0YzQwLjUgMzEuNiA5My4zIDM2LjcgMTM3LjMgMTgtMi0xMi0xMC01My44LTI5LjItMTAzLjYtNTUuMSAxOC44LTkzLjggNTYuNC0xMDguMSA4NS42em05OC44LTEwOC4yYy0zLjQtNy44LTcuMi0xNS41LTExLjEtMjMuMkMxNTkuNiAyNTMgOTMuNCAyNTIuMiA4Ny40IDI1MmMwIDEuNC0uMSAyLjgtLjEgNC4yIDAgMzUuMSAxMy4zIDY3LjEgMzUuMSA5MS40IDIyLjItMzcuOSA2Ny4xLTc3LjkgMTE2LjUtOTEuOHptMzQuOSAxNi4zYzE3LjkgNDkuMSAyNS4xIDg5LjEgMjYuNSA5Ny40IDMwLjctMjAuNyA1Mi41LTUzLjYgNTguNi05MS42LTQuNi0xLjUtNDIuMy0xMi43LTg1LjEtNS44em0tMjAuMy00OC40YzQuOCA5LjggOC4zIDE3LjggMTIgMjYuOCA0NS41LTUuNyA5MC43IDMuNCA5NS4yIDQuNC0uMy0zMi4zLTExLjgtNjEuOS0zMC45LTg1LjEtMi45IDMuOS0yNS44IDMzLjItNzYuMyA1My45ek00NDggODB2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY4MGMwLTI2LjUgMjEuNS00OCA0OC00OGgzNTJjMjYuNSAwIDQ4IDIxLjUgNDggNDh6bS02NCAxNzZjMC04OC4yLTcxLjgtMTYwLTE2MC0xNjBTNjQgMTY3LjggNjQgMjU2czcxLjggMTYwIDE2MCAxNjAgMTYwLTcxLjggMTYwLTE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DribbbleSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M90.2 228.2c8.9-42.4 37.4-77.7 75.7-95.7 3.6 4.9 28 38.8 50.7 79-64 17-120.3 16.8-126.4 16.7zM314.6 154c-33.6-29.8-79.3-41.1-122.6-30.6 3.8 5.1 28.6 38.9 51 80 48.6-18.3 69.1-45.9 71.6-49.4zM140.1 364c40.5 31.6 93.3 36.7 137.3 18-2-12-10-53.8-29.2-103.6-55.1 18.8-93.8 56.4-108.1 85.6zm98.8-108.2c-3.4-7.8-7.2-15.5-11.1-23.2C159.6 253 93.4 252.2 87.4 252c0 1.4-.1 2.8-.1 4.2 0 35.1 13.3 67.1 35.1 91.4 22.2-37.9 67.1-77.9 116.5-91.8zm34.9 16.3c17.9 49.1 25.1 89.1 26.5 97.4 30.7-20.7 52.5-53.6 58.6-91.6-4.6-1.5-42.3-12.7-85.1-5.8zm-20.3-48.4c4.8 9.8 8.3 17.8 12 26.8 45.5-5.7 90.7 3.4 95.2 4.4-.3-32.3-11.8-61.9-30.9-85.1-2.9 3.9-25.8 33.2-76.3 53.9zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-64 176c0-88.2-71.8-160-160-160S64 167.8 64 256s71.8 160 160 160 160-71.8 160-160z" />
        </Icon>
    </>
}