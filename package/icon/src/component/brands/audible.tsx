
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `audible` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/audible?s=brands audible}
 * @preview ![audible](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMTk5Ljl2NTRsLTMyMCAyMDBMMCAyNTR2LTU0bDMyMCAyMDAgMzIwLTIwMC4xem0tMTk0LjUgNzJsNDcuMS0yOS40Yy0zNy4yLTU1LjgtMTAwLjctOTIuNi0xNzIuNy05Mi42LTcyIDAtMTM1LjUgMzYuNy0xNzIuNiA5Mi40aC4zYzIuNS0yLjMgNS4xLTQuNSA3LjctNi43IDg5LjctNzQuNCAyMTkuNC01OC4xIDI5MC4yIDM2LjN6bS0yMjAuMSAxOC44YzE2LjktMTEuOSAzNi41LTE4LjcgNTcuNC0xOC43IDM0LjQgMCA2NS4yIDE4LjQgODYuNCA0Ny42bDQ1LjQtMjguNGMtMjAuOS0yOS45LTU1LjYtNDkuNS05NC44LTQ5LjUtMzguOSAwLTczLjQgMTkuNC05NC40IDQ5ek0xMDMuNiAxNjEuMWMxMzEuOC0xMDQuMyAzMTguMi03Ni40IDQxNy41IDYyLjFsLjcgMSA0OC44LTMwLjRDNTE3LjEgMTEyLjEgNDI0LjggNTguMSAzMTkuOSA1OC4xYy0xMDMuNSAwLTE5Ni42IDUzLjUtMjUwLjUgMTM1LjYgOS45LTEwLjUgMjIuNy0yMy41IDM0LjItMzIuNnptNDY3IDMyLjd6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Audible(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 199.9v54l-320 200L0 254v-54l320 200 320-200.1zm-194.5 72l47.1-29.4c-37.2-55.8-100.7-92.6-172.7-92.6-72 0-135.5 36.7-172.6 92.4h.3c2.5-2.3 5.1-4.5 7.7-6.7 89.7-74.4 219.4-58.1 290.2 36.3zm-220.1 18.8c16.9-11.9 36.5-18.7 57.4-18.7 34.4 0 65.2 18.4 86.4 47.6l45.4-28.4c-20.9-29.9-55.6-49.5-94.8-49.5-38.9 0-73.4 19.4-94.4 49zM103.6 161.1c131.8-104.3 318.2-76.4 417.5 62.1l.7 1 48.8-30.4C517.1 112.1 424.8 58.1 319.9 58.1c-103.5 0-196.6 53.5-250.5 135.6 9.9-10.5 22.7-23.5 34.2-32.6zm467 32.7z" />
        </Icon>
    </>
}