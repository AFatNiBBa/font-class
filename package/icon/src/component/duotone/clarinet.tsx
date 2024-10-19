
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clarinet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clarinet?s=duotone clarinet}
 * @preview ![clarinet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYzMS41NjIgMTI5Ljg5MUM2MjYuMzQ0IDEyNy4xMDkgNjIwLjAzMSAxMjcuMzkxIDYxNS4xMjUgMTMwLjY4N0w1NzEuMTU2IDE2MEgxMDEuMjVDOTcuNzUgMTYwIDk0LjM3NSAxNjAuNSA5MS4xMjUgMTYxLjYyNUwxMSAxODguMzc1QzQuMzc1IDE5MC41IDAgMTk2LjYyNSAwIDIwMy41VjI3Ni41QzAgMjgzLjM3NSA0LjM3NSAyODkuNSAxMSAyOTEuNjI1TDkxLjEyNSAzMTguMzc1Qzk0LjM3NSAzMTkuNSA5Ny43NSAzMjAgMTAxLjI1IDMyMEg1NzEuMTU2TDYxNS4xMjUgMzQ5LjMxMkM2MTcuODEyIDM1MS4wOTQgNjIwLjkwNiAzNTIgNjI0IDM1MkM2MjYuNTk0IDM1MiA2MjkuMTg4IDM1MS4zNzUgNjMxLjU2MiAzNTAuMTA5QzYzNi43NSAzNDcuMzI4IDY0MCAzNDEuOTA2IDY0MCAzMzZWMTQ0QzY0MCAxMzguMDk0IDYzNi43NSAxMzIuNjcyIDYzMS41NjIgMTI5Ljg5MVpNMjcyIDI2NEMyNTguNzUgMjY0IDI0OCAyNTMuMjUgMjQ4IDI0MFMyNTguNzUgMjE2IDI3MiAyMTZTMjk2IDIyNi43NSAyOTYgMjQwUzI4NS4yNSAyNjQgMjcyIDI2NFpNMzY4IDI2NEMzNTQuNzUgMjY0IDM0NCAyNTMuMjUgMzQ0IDI0MFMzNTQuNzUgMjE2IDM2OCAyMTZTMzkyIDIyNi43NSAzOTIgMjQwUzM4MS4yNSAyNjQgMzY4IDI2NFpNNDY0IDI2NEM0NTAuNzUgMjY0IDQ0MCAyNTMuMjUgNDQwIDI0MFM0NTAuNzUgMjE2IDQ2NCAyMTZTNDg4IDIyNi43NSA0ODggMjQwUzQ3Ny4yNSAyNjQgNDY0IDI2NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDk2IDk2SDI0MEMyMzEuMTk5IDk2IDIyNCAxMDMuMTk5IDIyNCAxMTJDMjI0IDEyMC43OTkgMjMxLjE5OSAxMjggMjQwIDEyOEgyNTZWMTYwSDI4OFYxMjhIMzUyVjE2MEgzODRWMTI4SDQ0OFYxNjBINDgwVjEyOEg0OTZDNTA0LjgwMSAxMjggNTEyIDEyMC43OTkgNTEyIDExMkM1MTIgMTAzLjE5OSA1MDQuODAxIDk2IDQ5NiA5NlpNMjcyIDIxNkMyNTguNzUgMjE2IDI0OCAyMjYuNzUgMjQ4IDI0MFMyNTguNzUgMjY0IDI3MiAyNjRTMjk2IDI1My4yNSAyOTYgMjQwUzI4NS4yNSAyMTYgMjcyIDIxNlpNMzY4IDIxNkMzNTQuNzUgMjE2IDM0NCAyMjYuNzUgMzQ0IDI0MFMzNTQuNzUgMjY0IDM2OCAyNjRTMzkyIDI1My4yNSAzOTIgMjQwUzM4MS4yNSAyMTYgMzY4IDIxNlpNNDY0IDIxNkM0NTAuNzUgMjE2IDQ0MCAyMjYuNzUgNDQwIDI0MFM0NTAuNzUgMjY0IDQ2NCAyNjRTNDg4IDI1My4yNSA0ODggMjQwUzQ3Ny4yNSAyMTYgNDY0IDIxNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Clarinet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M631.562 129.891C626.344 127.109 620.031 127.391 615.125 130.687L571.156 160H101.25C97.75 160 94.375 160.5 91.125 161.625L11 188.375C4.375 190.5 0 196.625 0 203.5V276.5C0 283.375 4.375 289.5 11 291.625L91.125 318.375C94.375 319.5 97.75 320 101.25 320H571.156L615.125 349.312C617.812 351.094 620.906 352 624 352C626.594 352 629.188 351.375 631.562 350.109C636.75 347.328 640 341.906 640 336V144C640 138.094 636.75 132.672 631.562 129.891ZM272 264C258.75 264 248 253.25 248 240S258.75 216 272 216S296 226.75 296 240S285.25 264 272 264ZM368 264C354.75 264 344 253.25 344 240S354.75 216 368 216S392 226.75 392 240S381.25 264 368 264ZM464 264C450.75 264 440 253.25 440 240S450.75 216 464 216S488 226.75 488 240S477.25 264 464 264Z" />
            <path d="M496 96H240C231.199 96 224 103.199 224 112C224 120.799 231.199 128 240 128H256V160H288V128H352V160H384V128H448V160H480V128H496C504.801 128 512 120.799 512 112C512 103.199 504.801 96 496 96ZM272 216C258.75 216 248 226.75 248 240S258.75 264 272 264S296 253.25 296 240S285.25 216 272 216ZM368 216C354.75 216 344 226.75 344 240S354.75 264 368 264S392 253.25 392 240S381.25 216 368 216ZM464 216C450.75 216 440 226.75 440 240S450.75 264 464 264S488 253.25 488 240S477.25 216 464 216Z" />
    </Icon>
);

export default Clarinet;