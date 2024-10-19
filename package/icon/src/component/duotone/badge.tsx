
import { Icon, generic } from "../../index";

/**
 * A component that renders the `badge` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/badge?s=duotone badge}
 * @preview ![badge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ1NC44NzUgMzM4LjM3NUM0NjkuNjI1IDM3MC43NSA0NjMuNzUgNDEwLjI1IDQzNyA0MzdDNDEwLjM3NSA0NjMuNjI1IDM3MSA0NjkuNzUgMzM4LjM3NSA0NTQuODc1QzMyNS44NzUgNDg4LjI1IDI5My43NSA1MTIgMjU2IDUxMlMxODYuMTI1IDQ4OC4yNSAxNzMuNjI1IDQ1NC44NzVDMTQxLjEyNSA0NjkuNzUgMTAxLjYyNSA0NjMuNjI1IDc1IDQzN0M0OC4yNSA0MTAuMzc1IDQyLjM3NSAzNzAuNzUgNTcuMTI1IDMzOC4zNzVDMjMuNzUgMzI1Ljg3NSAwIDI5My43NSAwIDI1NlMyMy43NSAxODYuMTI1IDU3LjEyNSAxNzMuNjI1QzQyLjM3NSAxNDEuMjUgNDguMjUgMTAxLjc1IDc1IDc1QzEwMS42MjUgNDguMjUgMTQxLjI1IDQyLjM3NSAxNzMuNjI1IDU3LjEyNUMxODYuMTI1IDIzLjc1IDIxOC4yNSAwIDI1NiAwUzMyNS44NzUgMjMuNzUgMzM4LjM3NSA1Ny4xMjVDMzcwLjc1IDQyLjM3NSA0MTAuMjUgNDguMjUgNDM3IDc1QzQ2My43NSAxMDEuNzUgNDY5LjYyNSAxNDEuMjUgNDU0Ljg3NSAxNzMuNjI1QzQ4OC4yNSAxODYuMTI1IDUxMiAyMTguMjUgNTEyIDI1NlM0ODguMjUgMzI1Ljg3NSA0NTQuODc1IDMzOC4zNzVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Badge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M454.875 338.375C469.625 370.75 463.75 410.25 437 437C410.375 463.625 371 469.75 338.375 454.875C325.875 488.25 293.75 512 256 512S186.125 488.25 173.625 454.875C141.125 469.75 101.625 463.625 75 437C48.25 410.375 42.375 370.75 57.125 338.375C23.75 325.875 0 293.75 0 256S23.75 186.125 57.125 173.625C42.375 141.25 48.25 101.75 75 75C101.625 48.25 141.25 42.375 173.625 57.125C186.125 23.75 218.25 0 256 0S325.875 23.75 338.375 57.125C370.75 42.375 410.25 48.25 437 75C463.75 101.75 469.625 141.25 454.875 173.625C488.25 186.125 512 218.25 512 256S488.25 325.875 454.875 338.375Z" />
    </Icon>
);

export default Badge;