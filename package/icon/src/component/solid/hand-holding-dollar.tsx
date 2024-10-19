
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-dollar` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-dollar?s=solid hand-holding-dollar}
 * @preview ![hand-holding-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguMTk3IDMzNi4zMTJDNTU1LjA3MiAzMTguNSA1MzAuMDU5IDMxNC42NTYgNTEyLjI2NCAzMjcuODQ0TDM5Mi41OTIgNDE2LjAxNkgyNzEuOThDMjYzLjIzMiA0MTYuMDE2IDI1NS45ODIgNDA4Ljc2NiAyNTUuOTgyIDQwMC4wMjNDMjU1Ljk4MiAzOTEuMjczIDI2My4yMzIgMzg0LjAyMyAyNzEuOTggMzg0LjAyM0gzNTAuMjI3QzM2Ni4yMjUgMzg0LjAyMyAzODAuOTc1IDM3My4xNDggMzgzLjU5OCAzNTcuNDA2QzM4Ni44NDggMzM3LjQwNiAzNzEuNDc1IDMyMC4wMzEgMzUxLjk3NyAzMjAuMDMxSDE5MS45ODZDMTY0Ljk4OCAzMjAuMDMxIDEzOC44NjUgMzI5LjI4MSAxMTcuODY3IDM0Ni4yODFMNzEuMzY5IDM4NC4wMjNIMTUuOTk4QzcuMjUgMzg0LjAyMyAwIDM5MS4yNzMgMCA0MDAuMDIzVjQ5NkMwIDUwNC43NSA3LjI1IDUxMiAxNS45OTggNTEySDM2Mi45NzdDMzg1LjAwNiA1MTIgNDA2Ljg5NiA1MDQuODEyIDQyNC42NzYgNDkxLjcyN0w1NTkuNzI5IDM5Mi4yMTFDNTc3LjUxIDM3OS4xMTcgNTgxLjMwNSAzNTQuMDk0IDU2OC4xOTcgMzM2LjMxMlpNMjc5LjM0NCAxNzUuMDQ3QzI3MS42NTYgMTczLjg5MSAyNjEuNjg4IDE3MC4yOTcgMjUyLjkwNiAxNjcuMTI1TDI0OC4wMzEgMTY1LjM3NUMyMzUuNSAxNjAuOTY5IDIyMS44MTIgMTY3LjUgMjE3LjM3NSAxNzkuOTg0UzIxOS41IDIwNi4xODggMjMxLjk2OSAyMTAuNjI1TDIzNi42MjUgMjEyLjI4MUMyNDUuMTExIDIxNS4zNDIgMjU0LjUyMyAyMTguMzc5IDI2NC4wMzEgMjIwLjU5NlYyMzJDMjY0LjAzMSAyNDUuMjUgMjc0Ljc4MSAyNTYgMjg4LjAzMSAyNTZTMzEyLjAzMSAyNDUuMjUgMzEyLjAzMSAyMzJWMjIxLjU3NEMzMzcuMjk3IDIxNS44NTIgMzU0LjkxNiAxOTkuNzIzIDM1OS4wMzEgMTc1Ljg1OUMzNjcuNzE5IDEyNS44MTIgMzIwLjEyNSAxMTIuMjAzIDI5NC41OTQgMTA0LjkwNkwyODguNDA2IDEwMy4xMDlDMjYzIDk1LjY0MSAyNjMuNTYyIDkyLjQyMiAyNjQuMjgxIDg4LjMxMkMyNjUuNDM4IDgxLjU0NyAyNzkuNTk0IDc4LjI1IDI5Ni41IDgwLjkyMkMzMDEuNDM4IDgxLjcwMyAzMDcuODc1IDgzLjQ2OSAzMTYuMTU2IDg2LjM0NEMzMjguNjg4IDkwLjYyNSAzNDIuMzc1IDg0LjAzMSAzNDYuNjg4IDcxLjVTMzQ0LjM3NSA0NS4zMTIgMzMxLjg0NCA0MC45NjlDMzI0LjI0MiAzOC4zNDIgMzE3LjkzMiAzNi42MTMgMzEyLjAzMSAzNS4yNVYyNEMzMTIuMDMxIDEwLjc1IDMwMS4yODEgMCAyODguMDMxIDBTMjY0LjAzMSAxMC43NSAyNjQuMDMxIDI0VjM0LjUxNkMyMzguNzcgNDAuMjMyIDIyMS4wNzIgNTYuMjU0IDIxNi45NjkgODAuMTI1QzIwOC4zNzUgMTI5LjYwOSAyNTYuNjU2IDE0My44MTIgMjc0Ljg3NSAxNDkuMTcyTDI4MS4zNzUgMTUxLjA0N0MzMTMuMDMxIDE2MC4xMDkgMzEyLjUzMSAxNjIuOTM4IDMxMS43MTkgMTY3LjY4OEMzMTAuNTYyIDE3NC40NTMgMjk2LjQ2OSAxNzcuNzUgMjc5LjM0NCAxNzUuMDQ3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandHoldingDollar: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M568.197 336.312C555.072 318.5 530.059 314.656 512.264 327.844L392.592 416.016H271.98C263.232 416.016 255.982 408.766 255.982 400.023C255.982 391.273 263.232 384.023 271.98 384.023H350.227C366.225 384.023 380.975 373.148 383.598 357.406C386.848 337.406 371.475 320.031 351.977 320.031H191.986C164.988 320.031 138.865 329.281 117.867 346.281L71.369 384.023H15.998C7.25 384.023 0 391.273 0 400.023V496C0 504.75 7.25 512 15.998 512H362.977C385.006 512 406.896 504.812 424.676 491.727L559.729 392.211C577.51 379.117 581.305 354.094 568.197 336.312ZM279.344 175.047C271.656 173.891 261.688 170.297 252.906 167.125L248.031 165.375C235.5 160.969 221.812 167.5 217.375 179.984S219.5 206.188 231.969 210.625L236.625 212.281C245.111 215.342 254.523 218.379 264.031 220.596V232C264.031 245.25 274.781 256 288.031 256S312.031 245.25 312.031 232V221.574C337.297 215.852 354.916 199.723 359.031 175.859C367.719 125.812 320.125 112.203 294.594 104.906L288.406 103.109C263 95.641 263.562 92.422 264.281 88.312C265.438 81.547 279.594 78.25 296.5 80.922C301.438 81.703 307.875 83.469 316.156 86.344C328.688 90.625 342.375 84.031 346.688 71.5S344.375 45.312 331.844 40.969C324.242 38.342 317.932 36.613 312.031 35.25V24C312.031 10.75 301.281 0 288.031 0S264.031 10.75 264.031 24V34.516C238.77 40.232 221.072 56.254 216.969 80.125C208.375 129.609 256.656 143.812 274.875 149.172L281.375 151.047C313.031 160.109 312.531 162.938 311.719 167.688C310.562 174.453 296.469 177.75 279.344 175.047Z" />
    </Icon>
);

export default HandHoldingDollar;