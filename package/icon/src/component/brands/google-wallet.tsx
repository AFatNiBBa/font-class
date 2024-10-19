
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `google-wallet` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/google-wallet?s=brands google-wallet}
 * @preview ![google-wallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTYuOCAxMjYuOGMzNy42IDYwLjYgNjQuMiAxMTMuMSA4NC4zIDE2Mi41LTguMyAzMy44LTE4LjggNjYuNS0zMS4zIDk4LjMtMTMuMi01Mi4zLTI2LjUtMTAxLjMtNTYtMTQ4LjUgNi41LTM2LjQgMi4zLTczLjYgMy0xMTIuM3pNMTA5LjMgMjAwSDE2LjFjLTYuNSAwLTEwLjUgNy41LTYuNSAxMi43QzUxLjggMjY3IDgxLjMgMzMwLjUgMTAxLjMgNDAwaDEwMy41Yy0xNi4yLTY5LjctMzguNy0xMzMuNy04Mi41LTE5My41LTMtNC04LTYuNS0xMy02LjV6bTQ3LjgtODhjNjguNSAxMDggMTMwIDIzNC41IDEzOC4yIDM2OEg0MDljLTEyLTEzOC02OC40LTI2NS0xNDMuMi0zNjhIMTU3LjF6bTI1MS44LTY4LjVjLTEuOC02LjgtOC4yLTExLjUtMTUuMi0xMS41aC04OC4zYy01LjMgMC05IDUtNy44IDEwLjMgMTMuMiA0Ni41IDIyLjMgOTUuNSAyNi41IDE0NiA0OC4yIDg2LjIgNzkuNyAxNzguMyA5MC42IDI3MC44IDE1LjgtNjAuNSAyNS4zLTEzMy41IDI1LjMtMjAzIDAtNzMuNi0xMi4xLTE0NS4xLTMxLjEtMjEyLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function GoogleWallet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M156.8 126.8c37.6 60.6 64.2 113.1 84.3 162.5-8.3 33.8-18.8 66.5-31.3 98.3-13.2-52.3-26.5-101.3-56-148.5 6.5-36.4 2.3-73.6 3-112.3zM109.3 200H16.1c-6.5 0-10.5 7.5-6.5 12.7C51.8 267 81.3 330.5 101.3 400h103.5c-16.2-69.7-38.7-133.7-82.5-193.5-3-4-8-6.5-13-6.5zm47.8-88c68.5 108 130 234.5 138.2 368H409c-12-138-68.4-265-143.2-368H157.1zm251.8-68.5c-1.8-6.8-8.2-11.5-15.2-11.5h-88.3c-5.3 0-9 5-7.8 10.3 13.2 46.5 22.3 95.5 26.5 146 48.2 86.2 79.7 178.3 90.6 270.8 15.8-60.5 25.3-133.5 25.3-203 0-73.6-12.1-145.1-31.1-212.6z" />
        </Icon>
    </>
}