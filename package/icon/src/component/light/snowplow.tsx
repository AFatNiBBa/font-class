
import { Icon } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=light snowplow}
 * @preview ![snowplow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjAgMzc2QzEwNi43NSAzNzYgOTYgMzg2Ljc1IDk2IDQwMFMxMDYuNzUgNDI0IDEyMCA0MjRTMTQ0IDQxMy4yNSAxNDQgNDAwUzEzMy4yNSAzNzYgMTIwIDM3NlpNMjAwIDM3NkMxODYuNzUgMzc2IDE3NiAzODYuNzUgMTc2IDQwMFMxODYuNzUgNDI0IDIwMCA0MjRTMjI0IDQxMy4yNSAyMjQgNDAwUzIxMy4yNSAzNzYgMjAwIDM3NlpNMzYwIDM3NkMzNDYuNzUgMzc2IDMzNiAzODYuNzUgMzM2IDQwMFMzNDYuNzUgNDI0IDM2MCA0MjRTMzg0IDQxMy4yNSAzODQgNDAwUzM3My4yNSAzNzYgMzYwIDM3NlpNMjgwIDM3NkMyNjYuNzUgMzc2IDI1NiAzODYuNzUgMjU2IDQwMFMyNjYuNzUgNDI0IDI4MCA0MjRTMzA0IDQxMy4yNSAzMDQgNDAwUzI5My4yNSAzNzYgMjgwIDM3NlpNNTgzLjQzOCA0MzIuODEyQzU2OC4zMTIgNDE3LjY4OCA1NjAgMzk3LjU5NCA1NjAgMzc2LjIzNFYyNjMuNzY2QzU2MCAyNDIuNDA2IDU2OC4zMTIgMjIyLjMxMiA1ODMuNDM4IDIwNy4xODhMNjM1LjMxMyAxNTUuMzEyQzY0MS41NjMgMTQ5LjA2MiA2NDEuNTYzIDEzOC45MzcgNjM1LjMxMyAxMzIuNjg4UzYxOC45MzggMTI2LjQzOCA2MTIuNjg4IDEzMi42ODhMNTYwLjgxMyAxODQuNTYzQzUzOS42NTYgMjA1LjczNCA1MjggMjMzLjg1OSA1MjggMjYzLjc2NlYzMDRINDMwLjI1VjIzNy4xMjVDNDMwLjI1IDIyOC4zNzUgNDI4LjM3NSAyMTkuODc1IDQyNSAyMTEuODc1TDM0Ni43NSAyOS4xMjVDMzM5LjEyNSAxMS4zNzUgMzIxLjc1IDAgMzAyLjUgMEgxNTguMjVDMTMxLjc1IDAgMTEwLjI1IDIxLjUgMTEwLjI1IDQ4VjEyOEg5NC4yNUM2Ny43NSAxMjggNDYuMjUgMTQ5LjUgNDYuMjUgMTc2VjMwOS43NUMxOC4yNSAzMzAuMTI1IDAgMzYyLjc1IDAgNDAwQzAgNDYxLjg3NSA1MC4xMjUgNTEyIDExMiA1MTJIMzY4QzQyOS44NzUgNTEyIDQ4MCA0NjEuODc1IDQ4MCA0MDBDNDgwIDM3Ni4yNSA0NzIuMzc1IDM1NC4yNSA0NTkuNzUgMzM2SDUyOFYzNzYuMjM0QzUyOCA0MDYuMTQxIDUzOS42NTYgNDM0LjI2NiA1NjAuODEyIDQ1NS40MzhMNjEyLjY4OCA1MDcuMzEzQzYxNS44MTIgNTEwLjQzOCA2MTkuOTA2IDUxMiA2MjQgNTEyUzYzMi4xODggNTEwLjQzOCA2MzUuMzEyIDUwNy4zMTJDNjQxLjU2MiA1MDEuMDYyIDY0MS41NjIgNDkwLjkzNyA2MzUuMzEyIDQ4NC42ODhMNTgzLjQzOCA0MzIuODEyWk0xNDIuMjUgNDhDMTQyLjI1IDM5LjI1IDE0OS4zNzUgMzIgMTU4LjI1IDMySDMwMi41QzMwOSAzMiAzMTQuNzUgMzUuNzUgMzE3LjI1IDQxLjc1TDM5NS4zNzUgMjI0SDIxNC4yNUwxNDIuMjUgMTI4LjI1VjQ4Wk03OC4yNSAxNzZDNzguMjUgMTY3LjI1IDg1LjM3NSAxNjAgOTQuMjUgMTYwSDEyNkwxOTMuMzc1IDI0OS42MjVDMTk2LjM3NSAyNTMuNjI1IDIwMS4yNSAyNTYgMjA2LjI1IDI1NkgzOTguMjVWMjkyLjYyNUMzODguNSAyODkuODc1IDM3OC41IDI4OCAzNjggMjg4SDExMkMxMDAuMTI1IDI4OCA4OC44NzUgMjkwLjI1IDc4LjI1IDI5My43NVYxNzZaTTM2OCA0ODBIMTEyQzY3Ljg3NSA0ODAgMzIgNDQ0LjEyNSAzMiA0MDBTNjcuODc1IDMyMCAxMTIgMzIwSDM2OEM0MTIuMTI1IDMyMCA0NDggMzU1Ljg3NSA0NDggNDAwUzQxMi4xMjUgNDgwIDM2OCA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M120 376C106.75 376 96 386.75 96 400S106.75 424 120 424S144 413.25 144 400S133.25 376 120 376ZM200 376C186.75 376 176 386.75 176 400S186.75 424 200 424S224 413.25 224 400S213.25 376 200 376ZM360 376C346.75 376 336 386.75 336 400S346.75 424 360 424S384 413.25 384 400S373.25 376 360 376ZM280 376C266.75 376 256 386.75 256 400S266.75 424 280 424S304 413.25 304 400S293.25 376 280 376ZM583.438 432.812C568.312 417.688 560 397.594 560 376.234V263.766C560 242.406 568.312 222.312 583.438 207.188L635.313 155.312C641.563 149.062 641.563 138.937 635.313 132.688S618.938 126.438 612.688 132.688L560.813 184.563C539.656 205.734 528 233.859 528 263.766V304H430.25V237.125C430.25 228.375 428.375 219.875 425 211.875L346.75 29.125C339.125 11.375 321.75 0 302.5 0H158.25C131.75 0 110.25 21.5 110.25 48V128H94.25C67.75 128 46.25 149.5 46.25 176V309.75C18.25 330.125 0 362.75 0 400C0 461.875 50.125 512 112 512H368C429.875 512 480 461.875 480 400C480 376.25 472.375 354.25 459.75 336H528V376.234C528 406.141 539.656 434.266 560.812 455.438L612.688 507.313C615.812 510.438 619.906 512 624 512S632.188 510.438 635.312 507.312C641.562 501.062 641.562 490.937 635.312 484.688L583.438 432.812ZM142.25 48C142.25 39.25 149.375 32 158.25 32H302.5C309 32 314.75 35.75 317.25 41.75L395.375 224H214.25L142.25 128.25V48ZM78.25 176C78.25 167.25 85.375 160 94.25 160H126L193.375 249.625C196.375 253.625 201.25 256 206.25 256H398.25V292.625C388.5 289.875 378.5 288 368 288H112C100.125 288 88.875 290.25 78.25 293.75V176ZM368 480H112C67.875 480 32 444.125 32 400S67.875 320 112 320H368C412.125 320 448 355.875 448 400S412.125 480 368 480Z" />
    </Icon>
);

export default Snowplow;