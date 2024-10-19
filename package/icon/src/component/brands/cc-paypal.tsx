
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cc-paypal` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cc-paypal?s=brands cc-paypal}
 * @preview ![cc-paypal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODYuMyAyNTguMmMwIDEyLjItOS43IDIxLjUtMjIgMjEuNS05LjIgMC0xNi01LjItMTYtMTUgMC0xMi4yIDkuNS0yMiAyMS43LTIyIDkuMyAwIDE2LjMgNS43IDE2LjMgMTUuNXpNODAuNSAyMDkuN2gtNC43Yy0xLjUgMC0zIDEtMy4yIDIuN2wtNC4zIDI2LjcgOC4yLS4zYzExIDAgMTkuNS0xLjUgMjEuNS0xNC4yIDIuMy0xMy40LTYuMi0xNC45LTE3LjUtMTQuOXptMjg0IDBIMzYwYy0xLjggMC0zIDEtMy4yIDIuN2wtNC4yIDI2LjcgOC0uM2MxMyAwIDIyLTMgMjItMTgtLjEtMTAuNi05LjYtMTEuMS0xOC4xLTExLjF6TTU3NiA4MHYzNTJjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDQ4MGMyNi41IDAgNDggMjEuNSA0OCA0OHpNMTI4LjMgMjE1LjRjMC0yMS0xNi4yLTI4LTM0LjctMjhoLTQwYy0yLjUgMC01IDItNS4yIDQuN0wzMiAyOTQuMmMtLjMgMiAxLjIgNCAzLjIgNGgxOWMyLjcgMCA1LjItMi45IDUuNS01LjdsNC41LTI2LjZjMS03LjIgMTMuMi00LjcgMTgtNC43IDI4LjYgMCA0Ni4xLTE3IDQ2LjEtNDUuOHptODQuMiA4LjhoLTE5Yy0zLjggMC00IDUuNS00LjIgOC4yLTUuOC04LjUtMTQuMi0xMC0yMy43LTEwLTI0LjUgMC00My4yIDIxLjUtNDMuMiA0NS4yIDAgMTkuNSAxMi4yIDMyLjIgMzEuNyAzMi4yIDkgMCAyMC4yLTQuOSAyNi41LTExLjktLjUgMS41LTEgNC43LTEgNi4yIDAgMi4zIDEgNCAzLjIgNEgyMDBjMi43IDAgNS0yLjkgNS41LTUuN2wxMC4yLTY0LjNjLjMtMS45LTEuMi0zLjktMy4yLTMuOXptNDAuNSA5Ny45bDYzLjctOTIuNmMuNS0uNS41LTEgLjUtMS43IDAtMS43LTEuNS0zLjUtMy4yLTMuNWgtMTkuMmMtMS43IDAtMy41IDEtNC41IDIuNWwtMjYuNSAzOS0xMS0zNy41Yy0uOC0yLjItMy00LTUuNS00aC0xOC43Yy0xLjcgMC0zLjIgMS44LTMuMiAzLjUgMCAxLjIgMTkuNSA1Ni44IDIxLjIgNjIuMS0yLjcgMy44LTIwLjUgMjguNi0yMC41IDMxLjYgMCAxLjggMS41IDMuMiAzLjIgMy4yaDE5LjJjMS44LS4xIDMuNS0xLjEgNC41LTIuNnptMTU5LjMtMTA2LjdjMC0yMS0xNi4yLTI4LTM0LjctMjhoLTM5LjdjLTIuNyAwLTUuMiAyLTUuNSA0LjdsLTE2LjIgMTAyYy0uMiAyIDEuMyA0IDMuMiA0aDIwLjVjMiAwIDMuNS0xLjUgNC0zLjJsNC41LTI5YzEtNy4yIDEzLjItNC43IDE4LTQuNyAyOC40IDAgNDUuOS0xNyA0NS45LTQ1Ljh6bTg0LjIgOC44aC0xOWMtMy44IDAtNCA1LjUtNC4zIDguMi01LjUtOC41LTE0LTEwLTIzLjctMTAtMjQuNSAwLTQzLjIgMjEuNS00My4yIDQ1LjIgMCAxOS41IDEyLjIgMzIuMiAzMS43IDMyLjIgOS4zIDAgMjAuNS00LjkgMjYuNS0xMS45LS4zIDEuNS0xIDQuNy0xIDYuMiAwIDIuMyAxIDQgMy4yIDRINDg0YzIuNyAwIDUtMi45IDUuNS01LjdsMTAuMi02NC4zYy4zLTEuOS0xLjItMy45LTMuMi0zLjl6bTQ3LjUtMzMuM2MwLTItMS41LTMuNS0zLjItMy41aC0xOC41Yy0xLjUgMC0zIDEuMi0zLjIgMi43bC0xNi4yIDEwNC0uMy41YzAgMS44IDEuNSAzLjUgMy41IDMuNWgxNi41YzIuNSAwIDUtMi45IDUuMi01LjdMNTQ0IDE5MS4ydi0uM3ptLTkwIDUxLjhjLTEyLjIgMC0yMS43IDkuNy0yMS43IDIyIDAgOS43IDcgMTUgMTYuMiAxNSAxMiAwIDIxLjctOS4yIDIxLjctMjEuNS4xLTkuOC02LjktMTUuNS0xNi4yLTE1LjV6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CcPaypal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z" />
        </Icon>
    </>
}