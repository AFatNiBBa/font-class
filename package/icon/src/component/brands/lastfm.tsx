
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lastfm` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lastfm?s=brands lastfm}
 * @preview ![lastfm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjUuOCAzNjcuMWwtMTguOC01MXMtMzAuNSAzNC03Ni4yIDM0Yy00MC41IDAtNjkuMi0zNS4yLTY5LjItOTEuNSAwLTcyLjEgMzYuNC05Ny45IDcyLjEtOTcuOSA2Ni41IDAgNzQuOCA1My4zIDEwMC45IDEzNC45IDE4LjggNTYuOSA1NCAxMDIuNiAxNTUuNCAxMDIuNiA3Mi43IDAgMTIyLTIyLjMgMTIyLTgwLjkgMC03Mi45LTYyLjctODAuNi0xMTUtOTIuMS0yNS44LTUuOS0zMy40LTE2LjQtMzMuNC0zNCAwLTE5LjkgMTUuOC0zMS43IDQxLjYtMzEuNyAyOC4yIDAgNDMuNCAxMC42IDQ1LjcgMzUuOGw1OC42LTdjLTQuNy01Mi44LTQxLjEtNzQuNS0xMDAuOS03NC41LTUyLjggMC0xMDQuNCAxOS45LTEwNC40IDgzLjkgMCAzOS45IDE5LjQgNjUuMSA2OCA3Ni44IDQ0LjkgMTAuNiA3OS44IDEzLjggNzkuOCA0NS43IDAgMjEuNy0yMS4xIDMwLjUtNjEgMzAuNS01OS4yIDAtODMuOS0zMS4xLTk3LjktNzMuOS0zMi05Ni44LTQzLjYtMTYzLTE2MS4zLTE2M0M0NS43IDExMy44IDAgMTY4LjMgMCAyNjFjMCA4OS4xIDQ1LjcgMTM3LjIgMTI3LjkgMTM3LjIgNjYuMiAwIDk3LjktMzEuMSA5Ny45LTMxLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Lastfm(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M225.8 367.1l-18.8-51s-30.5 34-76.2 34c-40.5 0-69.2-35.2-69.2-91.5 0-72.1 36.4-97.9 72.1-97.9 66.5 0 74.8 53.3 100.9 134.9 18.8 56.9 54 102.6 155.4 102.6 72.7 0 122-22.3 122-80.9 0-72.9-62.7-80.6-115-92.1-25.8-5.9-33.4-16.4-33.4-34 0-19.9 15.8-31.7 41.6-31.7 28.2 0 43.4 10.6 45.7 35.8l58.6-7c-4.7-52.8-41.1-74.5-100.9-74.5-52.8 0-104.4 19.9-104.4 83.9 0 39.9 19.4 65.1 68 76.8 44.9 10.6 79.8 13.8 79.8 45.7 0 21.7-21.1 30.5-61 30.5-59.2 0-83.9-31.1-97.9-73.9-32-96.8-43.6-163-161.3-163C45.7 113.8 0 168.3 0 261c0 89.1 45.7 137.2 127.9 137.2 66.2 0 97.9-31.1 97.9-31.1z" />
        </Icon>
    </>
}