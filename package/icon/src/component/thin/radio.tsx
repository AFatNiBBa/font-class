
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=thin radio}
 * @preview ![radio](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMjI0LjAyQzI5OS4wMTEgMjI0LjAyIDI1NiAyNjcuMDI5IDI1NiAzMjAuMDEzUzI5OS4wMTEgNDE2LjAwNyAzNTIgNDE2LjAwN1M0NDcuOTk5IDM3Mi45OTggNDQ3Ljk5OSAzMjAuMDEzUzQwNC45ODggMjI0LjAyIDM1MiAyMjQuMDJaTTM1MiA0MDAuMDA4QzMwNy44ODYgNDAwLjAwOCAyNzIgMzY0LjEyMSAyNzIgMzIwLjAxM1MzMDcuODg2IDI0MC4wMTkgMzUyIDI0MC4wMTlTNDMxLjk5OSAyNzUuOTA1IDQzMS45OTkgMzIwLjAxM1MzOTYuMTEzIDQwMC4wMDggMzUyIDQwMC4wMDhaTTg4IDI2NC4wMTdIMjAwQzIwNC40MDYgMjY0LjAxNyAyMDggMjYwLjQyNCAyMDggMjU2LjAxOFMyMDQuNDA2IDI0OC4wMTggMjAwIDI0OC4wMThIODhDODMuNTk0IDI0OC4wMTggODAgMjUxLjYxMiA4MCAyNTYuMDE4UzgzLjU5NCAyNjQuMDE3IDg4IDI2NC4wMTdaTTIxNiAzMTIuMDE0SDcyQzY3LjU5NCAzMTIuMDE0IDY0IDMxNS42MDcgNjQgMzIwLjAxM1M2Ny41OTQgMzI4LjAxMyA3MiAzMjguMDEzSDIxNkMyMjAuNDA2IDMyOC4wMTMgMjI0IDMyNC40MTkgMjI0IDMyMC4wMTNTMjIwLjQwNiAzMTIuMDE0IDIxNiAzMTIuMDE0Wk0yMDAgMzc2LjAwOUg4OEM4My41OTQgMzc2LjAwOSA4MCAzNzkuNjAzIDgwIDM4NC4wMDlTODMuNTk0IDM5Mi4wMDggODggMzkyLjAwOEgyMDBDMjA0LjQwNiAzOTIuMDA4IDIwOCAzODguNDE1IDIwOCAzODQuMDA5UzIwNC40MDYgMzc2LjAwOSAyMDAgMzc2LjAwOVpNNDQ3Ljk5OSAxMjguMDI2SDEzNC4xNzJMNTA2LjMxMiAxNS42OUM1MTAuNTMxIDE0LjQwOSA1MTIuOTM3IDkuOTQxIDUxMS42NTYgNS43MjJDNTEwLjQwNiAxLjUwNCA1MDYuMTI0IC0wLjk5NiA1MDEuNjg3IDAuMzc5TDc4LjgyOCAxMjguMDI2SDY0QzI4LjY1MiAxMjguMDI2IDAgMTU2LjY3OSAwIDE5Mi4wMjJWNDQ4LjAwNEMwIDQ4My4zNDggMjguNjUyIDUxMiA2NCA1MTJINDQ3Ljk5OUM0ODMuMzQ3IDUxMiA1MTEuOTk5IDQ4My4zNDggNTExLjk5OSA0NDguMDA0VjE5Mi4wMjJDNTExLjk5OSAxNTYuNjc5IDQ4My4zNDcgMTI4LjAyNiA0NDcuOTk5IDEyOC4wMjZaTTQ5NS45OTkgNDQ4LjAwNEM0OTUuOTk5IDQ3NC40NjkgNDc0LjQ2OCA0OTYuMDAxIDQ0Ny45OTkgNDk2LjAwMUg2NEMzNy41MzEgNDk2LjAwMSAxNiA0NzQuNDY5IDE2IDQ0OC4wMDRWMTkyLjAyMkMxNiAxNjUuNTU3IDM3LjUzMSAxNDQuMDI1IDY0IDE0NC4wMjVINDQ3Ljk5OUM0NzQuNDY4IDE0NC4wMjUgNDk1Ljk5OSAxNjUuNTU3IDQ5NS45OTkgMTkyLjAyMlY0NDguMDA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Radio(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352 224.02C299.011 224.02 256 267.029 256 320.013S299.011 416.007 352 416.007S447.999 372.998 447.999 320.013S404.988 224.02 352 224.02ZM352 400.008C307.886 400.008 272 364.121 272 320.013S307.886 240.019 352 240.019S431.999 275.905 431.999 320.013S396.113 400.008 352 400.008ZM88 264.017H200C204.406 264.017 208 260.424 208 256.018S204.406 248.018 200 248.018H88C83.594 248.018 80 251.612 80 256.018S83.594 264.017 88 264.017ZM216 312.014H72C67.594 312.014 64 315.607 64 320.013S67.594 328.013 72 328.013H216C220.406 328.013 224 324.419 224 320.013S220.406 312.014 216 312.014ZM200 376.009H88C83.594 376.009 80 379.603 80 384.009S83.594 392.008 88 392.008H200C204.406 392.008 208 388.415 208 384.009S204.406 376.009 200 376.009ZM447.999 128.026H134.172L506.312 15.69C510.531 14.409 512.937 9.941 511.656 5.722C510.406 1.504 506.124 -0.996 501.687 0.379L78.828 128.026H64C28.652 128.026 0 156.679 0 192.022V448.004C0 483.348 28.652 512 64 512H447.999C483.347 512 511.999 483.348 511.999 448.004V192.022C511.999 156.679 483.347 128.026 447.999 128.026ZM495.999 448.004C495.999 474.469 474.468 496.001 447.999 496.001H64C37.531 496.001 16 474.469 16 448.004V192.022C16 165.557 37.531 144.025 64 144.025H447.999C474.468 144.025 495.999 165.557 495.999 192.022V448.004Z" />
        </Icon>
    </>
}