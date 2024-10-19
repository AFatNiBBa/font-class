
import { Icon } from "../../index";

/**
 * A component that renders the `synagogue` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/synagogue?s=light synagogue}
 * @preview ![synagogue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTMuNzUgMzIwLjI1QzI4MC4zNzUgMzIzLjUgMjU2IDM1My4zNzUgMjU2IDM4Ni43NVY0OTZDMjU2IDUwNC43OTkgMjYzLjE5OSA1MTIgMjcyIDUxMlMyODggNTA0Ljc5OSAyODggNDk2VjM4NS43NUMyODggMzY5Ljg3NSAyOTguODc1IDM1NSAzMTQuNjI1IDM1Mi41QzMzNC42MjUgMzQ5LjEyNSAzNTIgMzY0LjYyNSAzNTIgMzg0VjQ5NkMzNTIgNTA0Ljc5OSAzNTkuMTk5IDUxMiAzNjggNTEyUzM4NCA1MDQuNzk5IDM4NCA0OTZWMzg0QzM4NCAzNDYuNjI1IDM1MS44NzUgMzE2LjYyNSAzMTMuNzUgMzIwLjI1Wk0zOTAuOTIyIDE1Mi4wMDZDMzg5LjQ4NCAxNDkuNTM3IDM4Ni44NTkgMTQ4LjAyMSAzODQgMTQ4LjAyMUgzNDcuNTA2TDMyNi45NTMgMTEyLjA1NUMzMjQuMDc4IDEwNy4wNTUgMzE1LjkyMiAxMDcuMDU1IDMxMy4wNDcgMTEyLjA1NUwyOTIuNDk0IDE0OC4wMjFIMjU2QzI1My4xNDEgMTQ4LjAyMSAyNTAuNTE2IDE0OS41MzcgMjQ5LjA3OCAxNTIuMDA2QzI0Ny42NTYgMTU0LjQ3NSAyNDcuNjQxIDE1Ny41MjEgMjQ5LjA0NyAxNTkuOTlMMjY3LjM1IDE5Mi4wMkwyNDkuMDQ3IDIyNC4wNDlDMjQ3LjY0MSAyMjYuNTE4IDI0Ny42NTYgMjI5LjU2NCAyNDkuMDc4IDIzMi4wMzFDMjUwLjUxNiAyMzQuNSAyNTMuMTQxIDIzNi4wMTYgMjU2IDIzNi4wMTZIMjkyLjQ5MkwzMTMuMDQ3IDI3MS45ODJDMzE0LjQ4NCAyNzQuNDgyIDMxNy4xMjUgMjc2LjAxNCAzMjAgMjc2LjAxNFMzMjUuNTE2IDI3NC40ODIgMzI2Ljk1MyAyNzEuOTgyTDM0Ny41MDggMjM2LjAxNkgzODRDMzg2Ljg1OSAyMzYuMDE2IDM4OS40ODQgMjM0LjUgMzkwLjkyMiAyMzIuMDMxQzM5Mi4zNDQgMjI5LjU2NCAzOTIuMzU5IDIyNi41MTggMzkwLjk1MyAyMjQuMDQ5TDM3Mi42NSAxOTIuMDJMMzkwLjk1MyAxNTkuOTlDMzkyLjM1OSAxNTcuNTIxIDM5Mi4zNDQgMTU0LjQ3NSAzOTAuOTIyIDE1Mi4wMDZaTTMyMCAxMzIuMTQ4TDMyOS4wNzIgMTQ4LjAyMUgzMTAuOTI4TDMyMCAxMzIuMTQ4Wk0yODMuMzUgMTY0LjAyMUwyNzYuNTY2IDE3NS44OTNMMjY5Ljc4MSAxNjQuMDIxSDI4My4zNVpNMjY5Ljc4MSAyMjAuMDE4TDI3Ni41NjYgMjA4LjE0NkwyODMuMzUyIDIyMC4wMThIMjY5Ljc4MVpNMzIwIDI1MS44OTFMMzEwLjkyOCAyMzYuMDE2SDMyOS4wNzJMMzIwIDI1MS44OTFaTTMzOC4yMTcgMjIwLjAxOEgzMDEuNzgzTDI4NS43ODMgMTkyLjAyTDMwMS43ODMgMTY0LjAyMUgzMzguMjE3TDM1NC4yMTcgMTkyLjAyTDMzOC4yMTcgMjIwLjAxOFpNMzU2LjY0OCAyMjAuMDE4TDM2My40MzQgMjA4LjE0NkwzNzAuMjE5IDIyMC4wMThIMzU2LjY0OFpNMzYzLjQzNCAxNzUuODkzTDM1Ni42NSAxNjQuMDIxSDM3MC4yMTlMMzYzLjQzNCAxNzUuODkzWk0xMDguMDA0IDE5Ni41MDRDMTAxLjQwNCAxOTAuMjY4IDkwLjYwMiAxOTAuMjY2IDg0IDE5Ni41TDggMjY4LjI1QzIuODc1IDI3My4xMjUgMCAyNzkuMzc1IDAgMjg1Ljg3NVY0OTUuMDI3QzAgNTAzLjAwNiA1LjQgNTEwLjQ0NyAxMy4yNyA1MTEuNzdDMjMuMjYyIDUxMy40NDkgMzIgNTA1LjY5MyAzMiA0OTZWMjg5LjYyNUw5NiAyMjkuMjVMMTAwLjk4NCAyMzMuOTUzQzExMS4yMDUgMjQzLjU5NCAxMjggMjM2LjM0OCAxMjggMjIyLjI5OUMxMjggMjE3Ljg5MSAxMjYuMTg0IDIxMy42OCAxMjIuOTggMjEwLjY1MkwxMDguMDA0IDE5Ni41MDRaTTYzMiAyNjguMjVMNTU2IDE5Ni41QzU0OS4zOTggMTkwLjI2NiA1MzguNTk2IDE5MC4yNjggNTMxLjk5NiAxOTYuNTA0TDUxNy4wMiAyMTAuNjUyQzUxMy44MTQgMjEzLjY4IDUxMiAyMTcuODkxIDUxMiAyMjIuMjk5QzUxMiAyMzYuMzQ4IDUyOC43OTUgMjQzLjU5NCA1MzkuMDE2IDIzMy45NTNMNTQ0IDIyOS4yNUw2MDggMjg5LjYyNVY0OTUuMDI3QzYwOCA1MDMuMDA2IDYxMy40IDUxMC40NDcgNjIxLjI3IDUxMS43N0M2MzEuMjYyIDUxMy40NDkgNjQwIDUwNS42OTMgNjQwIDQ5NlYyODUuODc1QzY0MCAyNzkuMzc1IDYzNy4xMjUgMjczLjEyNSA2MzIgMjY4LjI1Wk0zNDAgN0MzMzQuMTI1IDIuMzc1IDMyNy4xMjUgMCAzMjAgMFMzMDUuODc1IDIuMzc1IDMwMCA3TDE3MiAxMDkuMzc1QzE2NC4zNzUgMTE1LjUgMTYwIDEyNC42MjUgMTYwIDEzNC4zNzVWNDk2QzE2MCA1MDQuNzk5IDE2Ny4xOTkgNTEyIDE3NiA1MTJTMTkyIDUwNC43OTkgMTkyIDQ5NlYxMzQuMzc1TDMyMCAzMkw0NDggMTM0LjM3NVY0OTZDNDQ4IDUwNC43OTkgNDU1LjE5OSA1MTIgNDY0IDUxMlM0ODAgNTA0Ljc5OSA0ODAgNDk2VjEzNC4zNzVDNDgwIDEyNC42MjUgNDc1LjYyNSAxMTUuNSA0NjggMTA5LjM3NUwzNDAgN1oiLz48L3N2Zz4=|width=32|height=32)
 */
const Synagogue: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M313.75 320.25C280.375 323.5 256 353.375 256 386.75V496C256 504.799 263.199 512 272 512S288 504.799 288 496V385.75C288 369.875 298.875 355 314.625 352.5C334.625 349.125 352 364.625 352 384V496C352 504.799 359.199 512 368 512S384 504.799 384 496V384C384 346.625 351.875 316.625 313.75 320.25ZM390.922 152.006C389.484 149.537 386.859 148.021 384 148.021H347.506L326.953 112.055C324.078 107.055 315.922 107.055 313.047 112.055L292.494 148.021H256C253.141 148.021 250.516 149.537 249.078 152.006C247.656 154.475 247.641 157.521 249.047 159.99L267.35 192.02L249.047 224.049C247.641 226.518 247.656 229.564 249.078 232.031C250.516 234.5 253.141 236.016 256 236.016H292.492L313.047 271.982C314.484 274.482 317.125 276.014 320 276.014S325.516 274.482 326.953 271.982L347.508 236.016H384C386.859 236.016 389.484 234.5 390.922 232.031C392.344 229.564 392.359 226.518 390.953 224.049L372.65 192.02L390.953 159.99C392.359 157.521 392.344 154.475 390.922 152.006ZM320 132.148L329.072 148.021H310.928L320 132.148ZM283.35 164.021L276.566 175.893L269.781 164.021H283.35ZM269.781 220.018L276.566 208.146L283.352 220.018H269.781ZM320 251.891L310.928 236.016H329.072L320 251.891ZM338.217 220.018H301.783L285.783 192.02L301.783 164.021H338.217L354.217 192.02L338.217 220.018ZM356.648 220.018L363.434 208.146L370.219 220.018H356.648ZM363.434 175.893L356.65 164.021H370.219L363.434 175.893ZM108.004 196.504C101.404 190.268 90.602 190.266 84 196.5L8 268.25C2.875 273.125 0 279.375 0 285.875V495.027C0 503.006 5.4 510.447 13.27 511.77C23.262 513.449 32 505.693 32 496V289.625L96 229.25L100.984 233.953C111.205 243.594 128 236.348 128 222.299C128 217.891 126.184 213.68 122.98 210.652L108.004 196.504ZM632 268.25L556 196.5C549.398 190.266 538.596 190.268 531.996 196.504L517.02 210.652C513.814 213.68 512 217.891 512 222.299C512 236.348 528.795 243.594 539.016 233.953L544 229.25L608 289.625V495.027C608 503.006 613.4 510.447 621.27 511.77C631.262 513.449 640 505.693 640 496V285.875C640 279.375 637.125 273.125 632 268.25ZM340 7C334.125 2.375 327.125 0 320 0S305.875 2.375 300 7L172 109.375C164.375 115.5 160 124.625 160 134.375V496C160 504.799 167.199 512 176 512S192 504.799 192 496V134.375L320 32L448 134.375V496C448 504.799 455.199 512 464 512S480 504.799 480 496V134.375C480 124.625 475.625 115.5 468 109.375L340 7Z" />
    </Icon>
);

export default Synagogue;