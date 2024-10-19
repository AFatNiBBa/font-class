
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shield-plus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-plus?s=regular shield-plus}
 * @preview ![shield-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjYuNSA4My42OEwyNzQuNSAzLjY3MkMyNjkuNjI1IDEuNjQxIDI2MS4zNDQgMCAyNTYuMDYyIDBDMjUwLjc1IDAgMjQyLjUgMS42NDEgMjM3LjU5NCAzLjY3Mkw0NS41OTQgODMuNjhDMjcuNjg4IDkxLjA3IDE2IDEwOC41NzQgMTYgMTI3Ljk4NEMxNiAzODUuMTU3IDIwNS4xNjQgNTEyIDI1NS45NTMgNTEyQzMwNy45NzUgNTEyIDQ5NiAzODMuODEzIDQ5NiAxMjcuOTg0QzQ5NiAxMDguNTc0IDQ4NC4zMTIgOTEuMDcgNDY2LjUgODMuNjhaTTI1Ni4wODYgNDhIMjU2LjA4MkMyNTYuMDY4IDQ3Ljk5MiAyNTYuMDUzIDQ3Ljk4NCAyNTYuMDM3IDQ3Ljk4TDI1Ni4wODYgNDhaTTI1NS45NjkgNDY0LjAxNkMxNjMuNTM2IDQyNS40ODggNjQuMDU3IDMwMy45NTIgNjQuMDU3IDEyOC4xMzhDNjQuMDU3IDEyOC4wODggNjQuMDU3IDEyOC4wMzggNjQuMDU3IDEyNy45ODhMMjU0Ljg3MyA0OC40MjZDMjU1LjIwNSA0OC4zMjQgMjU1Ljc4OSA0OC4xOTUgMjU2LjMyMiA0OC4wOThMNDQ4IDEyNy45ODRDNDQ4IDMzMC40NzcgMzIyLjM3MSA0MzYuMzMyIDI1NS45NjkgNDY0LjAxNlpNMjMyLjAwNCAxNzUuOTk2VjIzMkgxNzZDMTYyLjc0IDIzMiAxNTIuMDAyIDI0Mi43NDIgMTUyLjAwMiAyNTZDMTUyLjAwMiAyNjkuMjU0IDE2Mi43MzIgMjc5Ljk5NiAxNzYgMjc5Ljk5NkgyMzIuMDA0VjMzNkMyMzIuMDA0IDM0OS4yNTggMjQyLjczNiAzNjAgMjU2LjAwMiAzNjBDMjY5LjI2IDM2MCAyODAgMzQ5LjI1OCAyODAgMzM2VjI3OS45OTZIMzM2LjAwNEMzNDkuMjY0IDI3OS45OTYgMzYwLjAwMiAyNjkuMjU4IDM2MC4wMDIgMjU2UzM0OS4yNjQgMjMyIDMzNi4wMDQgMjMySDI4MFYxNzUuOTk2QzI4MCAxNjIuNzM0IDI2OS4yNiAxNTIgMjU2LjAwMiAxNTJTMjMyLjAwNCAxNjIuNzM0IDIzMi4wMDQgMTc1Ljk5NlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function ShieldPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.07 16 108.574 16 127.984C16 385.157 205.164 512 255.953 512C307.975 512 496 383.813 496 127.984C496 108.574 484.312 91.07 466.5 83.68ZM256.086 48H256.082C256.068 47.992 256.053 47.984 256.037 47.98L256.086 48ZM255.969 464.016C163.536 425.488 64.057 303.952 64.057 128.138C64.057 128.088 64.057 128.038 64.057 127.988L254.873 48.426C255.205 48.324 255.789 48.195 256.322 48.098L448 127.984C448 330.477 322.371 436.332 255.969 464.016ZM232.004 175.996V232H176C162.74 232 152.002 242.742 152.002 256C152.002 269.254 162.732 279.996 176 279.996H232.004V336C232.004 349.258 242.736 360 256.002 360C269.26 360 280 349.258 280 336V279.996H336.004C349.264 279.996 360.002 269.258 360.002 256S349.264 232 336.004 232H280V175.996C280 162.734 269.26 152 256.002 152S232.004 162.734 232.004 175.996Z " />
        </Icon>
    </>
}