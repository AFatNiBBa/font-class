
import { Icon } from "../../index";

/**
 * A component that renders the `users` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/users?s=light users}
 * @preview ![users](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTkuODU5IDMyMEMzNzcuMjczIDMyMCA0MjMuODE0IDI3My40MzYgNDIzLjgxNCAyMTZDNDIzLjgxNCAxNTguNTYyIDM3Ny4yNzMgMTEyIDMxOS44NTkgMTEyQzI2Mi40NTEgMTEyIDIxNS45MDQgMTU4LjU2MiAyMTUuOTA0IDIxNkMyMTUuOTA0IDI3My40MzYgMjYyLjQ1MSAzMjAgMzE5Ljg1OSAzMjBaTTMxOS44NTkgMTQ0QzM1OS41MzUgMTQ0IDM5MS44MTQgMTc2LjI5OSAzOTEuODE0IDIxNlMzNTkuNTM1IDI4OCAzMTkuODU5IDI4OFMyNDcuOTA0IDI1NS43MDEgMjQ3LjkwNCAyMTZTMjgwLjE4NCAxNDQgMzE5Ljg1OSAxNDRaTTM2OS44ODcgMzUySDI3MC4xMTNDMTkxLjYzMSAzNTIgMTI4IDQxMS42OTMgMTI4IDQ4NS4zMzJDMTI4IDUwMC4wNTkgMTQwLjcyNyA1MTIgMTU2LjQyMiA1MTJINDgzLjU3OEM0OTkuMjczIDUxMiA1MTIgNTAwLjA1OSA1MTIgNDg1LjMzMkM1MTIgNDExLjY5MyA0NDguMzc3IDM1MiAzNjkuODg3IDM1MlpNMTYwLjE1IDQ4MEMxNjMuMTcyIDQyNi41OTIgMjExLjMzOCAzODQgMjcwLjExMyAzODRIMzY5Ljg4N0M0MjguNjYyIDM4NCA0NzYuODI4IDQyNi41OTIgNDc5Ljg1IDQ4MEgxNjAuMTVaTTUxMiAxNjBDNTU2LjE4NCAxNjAgNTkyIDEyNC4xODIgNTkyIDgwUzU1Ni4xODQgMCA1MTIgMEM0NjcuODIgMCA0MzIgMzUuODE4IDQzMiA4MFM0NjcuODIgMTYwIDUxMiAxNjBaTTUxMiAzMkM1MzguNDY3IDMyIDU2MCA1My41MzMgNTYwIDgwUzUzOC40NjcgMTI4IDUxMiAxMjhTNDY0IDEwNi40NjcgNDY0IDgwUzQ4NS41MzMgMzIgNTEyIDMyWk0xMjggMTYwQzE3Mi4xODQgMTYwIDIwOCAxMjQuMTgyIDIwOCA4MFMxNzIuMTg0IDAgMTI4IDBDODMuODIgMCA0OCAzNS44MTggNDggODBTODMuODIgMTYwIDEyOCAxNjBaTTEyOCAzMkMxNTQuNDY3IDMyIDE3NiA1My41MzMgMTc2IDgwUzE1NC40NjcgMTI4IDEyOCAxMjhTODAgMTA2LjQ2NyA4MCA4MFMxMDEuNTMzIDMyIDEyOCAzMlpNNTYxLjA3OCAxOTJINDk2QzQ4NC44NDQgMTkyIDQ3My45MjIgMTk0LjUgNDYzLjUzMSAxOTkuNDM4QzQ1NS41NDcgMjAzLjIzNCA0NTIuMTQxIDIxMi43ODEgNDU1LjkzOCAyMjAuNzVTNDY5LjMxMyAyMzIuMTQxIDQ3Ny4yNSAyMjguMzQ0QzQ4My4zMjggMjI1LjQ2OSA0ODkuNjI1IDIyNCA0OTYgMjI0SDU2MS4wNzhDNTg2Ljk1MyAyMjQgNjA4IDI0Ni43MzQgNjA4IDI3NC42NzJWMjg4QzYwOCAyOTYuODQ0IDYxNS4xNTYgMzA0IDYyNCAzMDRTNjQwIDI5Ni44NDQgNjQwIDI4OFYyNzQuNjcyQzY0MCAyMjkuMDk0IDYwNC41OTQgMTkyIDU2MS4wNzggMTkyWk0xNjIuNzUgMjI4LjM0NEMxNzAuNjg4IDIzMi4xNDEgMTgwLjI4MSAyMjguNzE5IDE4NC4wNjIgMjIwLjc1QzE4Ny44NTkgMjEyLjc4MSAxODQuNDUzIDIwMy4yMzQgMTc2LjQ2OSAxOTkuNDM4QzE2Ni4wNzggMTk0LjUgMTU1LjE1NiAxOTIgMTQ0IDE5Mkg3OC45MjJDMzUuNDA2IDE5MiAwIDIyOS4wOTQgMCAyNzQuNjcyVjI4OEMwIDI5Ni44NDQgNy4xNTYgMzA0IDE2IDMwNFMzMiAyOTYuODQ0IDMyIDI4OFYyNzQuNjcyQzMyIDI0Ni43MzQgNTMuMDQ3IDIyNCA3OC45MjIgMjI0SDE0NEMxNTAuMzc1IDIyNCAxNTYuNjcyIDIyNS40NjkgMTYyLjc1IDIyOC4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
const Users: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M319.859 320C377.273 320 423.814 273.436 423.814 216C423.814 158.562 377.273 112 319.859 112C262.451 112 215.904 158.562 215.904 216C215.904 273.436 262.451 320 319.859 320ZM319.859 144C359.535 144 391.814 176.299 391.814 216S359.535 288 319.859 288S247.904 255.701 247.904 216S280.184 144 319.859 144ZM369.887 352H270.113C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H483.578C499.273 512 512 500.059 512 485.332C512 411.693 448.377 352 369.887 352ZM160.15 480C163.172 426.592 211.338 384 270.113 384H369.887C428.662 384 476.828 426.592 479.85 480H160.15ZM512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM512 32C538.467 32 560 53.533 560 80S538.467 128 512 128S464 106.467 464 80S485.533 32 512 32ZM128 160C172.184 160 208 124.182 208 80S172.184 0 128 0C83.82 0 48 35.818 48 80S83.82 160 128 160ZM128 32C154.467 32 176 53.533 176 80S154.467 128 128 128S80 106.467 80 80S101.533 32 128 32ZM561.078 192H496C484.844 192 473.922 194.5 463.531 199.438C455.547 203.234 452.141 212.781 455.938 220.75S469.313 232.141 477.25 228.344C483.328 225.469 489.625 224 496 224H561.078C586.953 224 608 246.734 608 274.672V288C608 296.844 615.156 304 624 304S640 296.844 640 288V274.672C640 229.094 604.594 192 561.078 192ZM162.75 228.344C170.688 232.141 180.281 228.719 184.062 220.75C187.859 212.781 184.453 203.234 176.469 199.438C166.078 194.5 155.156 192 144 192H78.922C35.406 192 0 229.094 0 274.672V288C0 296.844 7.156 304 16 304S32 296.844 32 288V274.672C32 246.734 53.047 224 78.922 224H144C150.375 224 156.672 225.469 162.75 228.344Z" />
    </Icon>
);

export default Users;