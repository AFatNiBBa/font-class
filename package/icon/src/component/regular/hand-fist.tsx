
import { Icon } from "../../index";

/**
 * A component that renders the `hand-fist` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=regular hand-fist}
 * @preview ![hand-fist](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQgNjRDMzM3LjY0OCA2NCAzMzEuMzg1IDY0Ljg3MSAzMjUuMjU4IDY2LjZDMzEyLjQzOCA0NS4zOTMgMjg5LjQ5MiAzMiAyNjQgMzJDMjU3LjY0OCAzMiAyNTEuMzg1IDMyLjg3MSAyNDUuMjU4IDM0LjZDMjMyLjQzOCAxMy4zOTMgMjA5LjQ5MiAwIDE4NCAwUzEzNS41NjQgMTMuMzkzIDEyMi43NDIgMzQuNkMxMTYuNjE3IDMyLjg3MSAxMTAuMzUyIDMyIDEwNCAzMkM2NC4yOTkgMzIgMzIgNjQuMjk5IDMyIDEwNFYxNjhDMzIgMTc0LjM4OSAzMy4yODkgMTgwLjQyNCAzNC44NzEgMTg2LjMxNEMxMy44MiAyMDIuNDA2IDAgMjI3LjUxMiAwIDI1NlYzNDQuNDIyQzAgMzcxLjczNCAxMi4zNzUgMzk3LjAzMSAzMy45NjkgNDEzLjgyOEw2NCA0MzcuMTcyVjQ4OEM2NCA1MDEuMjUgNzQuNzUgNTEyIDg4IDUxMlMxMTIgNTAxLjI1IDExMiA0ODhWNDI0LjcxOUMxMTIgNDA5Ljg1NCA5OS42NTMgNDAzLjU1OCA5Ny4wNjIgNDAyLjA3OEw2My40MzggMzc1LjkzOEM1My42MjUgMzY4LjMxMiA0OCAzNTYuODEyIDQ4IDM0NC40MjJWMjU2QzQ4IDIzMy45MzggNjUuOTM4IDIxNiA4OCAyMTZIMTcyQzE4Ny40MzggMjE2IDIwMCAyMjguNTYyIDIwMCAyNDRTMTg3LjQzOCAyNzIgMTcyIDI3MkgxMjBDMTA2Ljc1IDI3MiA5NiAyODIuNzUgOTYgMjk2UzEwNi43NSAzMjAgMTIwIDMyMEgxNzJDMjA1LjIzNCAzMjAgMjMzLjI0NiAyOTguNDIyIDI0My41NDUgMjY4LjY0NUMyNTAuMDQxIDI3MC43MjcgMjU2Ljg2MSAyNzIgMjY0IDI3MkMyNzguNDUzIDI3MiAyOTIuMjQ2IDI2Ny43NDIgMzA0IDI1OS44MTFDMzE1Ljc1NCAyNjcuNzQyIDMyOS41NDcgMjcyIDM0NCAyNzJDMzUyLjQ1NyAyNzIgMzYwLjQ1NyAyNzAuMjY2IDM2OCAyNjcuNTc2VjMxMkMzNjggMzUwLjQ1MyAzNDguMjgxIDM4NS44MTIgMzE1LjIxOSA0MDYuNTc4QzMwOC4yNSA0MTAuOTg0IDMwNCA0MTguNjU2IDMwNCA0MjYuOTA2VjQ4OEMzMDQgNTAxLjI1IDMxNC43NSA1MTIgMzI4IDUxMlMzNTIgNTAxLjI1IDM1MiA0ODhWNDM5LjUxNkMzOTIuMzEyIDQwOS4yODEgNDE2IDM2Mi41NDcgNDE2IDMxMlYxMzZDNDE2IDk2LjI5OSAzODMuNzAxIDY0IDM0NCA2NFpNMTYwIDcyQzE2MCA1OC43NjYgMTcwLjc4MSA0OCAxODQgNDhTMjA4IDU4Ljc2NiAyMDggNzJWMTY4QzIwOCAxNzEuMDI5IDIwNy4yOTkgMTczLjg3NSAyMDYuMjcgMTc2LjU0NUMxOTUuOTI2IDE3MS4yNjQgMTg0LjM5MSAxNjggMTcyIDE2OEgxNjBWNzJaTTgwIDE2OFYxMDRDODAgOTAuNzY2IDkwLjc4MSA4MCAxMDQgODBTMTI4IDkwLjc2NiAxMjggMTA0VjE2OEg4OEM4NS4zMTQgMTY4IDgyLjc4MyAxNjguNTU3IDgwLjE2IDE2OC43OTNDODAuMTUgMTY4LjUxNCA4MCAxNjguMjgxIDgwIDE2OFpNMjg4IDIwMEMyODggMjEzLjIzNCAyNzcuMjE5IDIyNCAyNjQgMjI0UzI0MCAyMTMuMjM0IDI0MCAyMDBWMTA0QzI0MCA5MC43NjYgMjUwLjc4MSA4MCAyNjQgODBTMjg4IDkwLjc2NiAyODggMTA0VjIwMFpNMzQ0IDIyNEMzMzAuNzgxIDIyNCAzMjAgMjEzLjIzNCAzMjAgMjAwVjEzNkMzMjAgMTIyLjc2NiAzMzAuNzgxIDExMiAzNDQgMTEyUzM2OCAxMjIuNzY2IDM2OCAxMzZWMjAwQzM2OCAyMTMuMjM0IDM1Ny4yMTkgMjI0IDM0NCAyMjRaIi8+PC9zdmc+|width=32|height=32)
 */
const HandFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M344 64C337.648 64 331.385 64.871 325.258 66.6C312.438 45.393 289.492 32 264 32C257.648 32 251.385 32.871 245.258 34.6C232.438 13.393 209.492 0 184 0S135.564 13.393 122.742 34.6C116.617 32.871 110.352 32 104 32C64.299 32 32 64.299 32 104V168C32 174.389 33.289 180.424 34.871 186.314C13.82 202.406 0 227.512 0 256V344.422C0 371.734 12.375 397.031 33.969 413.828L64 437.172V488C64 501.25 74.75 512 88 512S112 501.25 112 488V424.719C112 409.854 99.653 403.558 97.062 402.078L63.438 375.938C53.625 368.312 48 356.812 48 344.422V256C48 233.938 65.938 216 88 216H172C187.438 216 200 228.562 200 244S187.438 272 172 272H120C106.75 272 96 282.75 96 296S106.75 320 120 320H172C205.234 320 233.246 298.422 243.545 268.645C250.041 270.727 256.861 272 264 272C278.453 272 292.246 267.742 304 259.811C315.754 267.742 329.547 272 344 272C352.457 272 360.457 270.266 368 267.576V312C368 350.453 348.281 385.812 315.219 406.578C308.25 410.984 304 418.656 304 426.906V488C304 501.25 314.75 512 328 512S352 501.25 352 488V439.516C392.312 409.281 416 362.547 416 312V136C416 96.299 383.701 64 344 64ZM160 72C160 58.766 170.781 48 184 48S208 58.766 208 72V168C208 171.029 207.299 173.875 206.27 176.545C195.926 171.264 184.391 168 172 168H160V72ZM80 168V104C80 90.766 90.781 80 104 80S128 90.766 128 104V168H88C85.314 168 82.783 168.557 80.16 168.793C80.15 168.514 80 168.281 80 168ZM288 200C288 213.234 277.219 224 264 224S240 213.234 240 200V104C240 90.766 250.781 80 264 80S288 90.766 288 104V200ZM344 224C330.781 224 320 213.234 320 200V136C320 122.766 330.781 112 344 112S368 122.766 368 136V200C368 213.234 357.219 224 344 224Z" />
    </Icon>
);

export default HandFist;