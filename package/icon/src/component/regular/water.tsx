
import { Icon } from "../../index";

/**
 * A component that renders the `water` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/water?s=regular water}
 * @preview ![water](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTYuMjAxIDQwMC4yMDlDNTM1LjMxIDM5Ni40NzcgNTE0LjM1NyAzODQuNjg2IDQ5Ny4yMDEgMzY2Ljk4NEM0ODguMTcgMzU3LjY3MiA0NzEuODI2IDM1Ny42NzIgNDYyLjc5NSAzNjYuOTg0QzQ0Mi41NjIgMzg3Ljg1NCA0MTMuODQ0IDM5OS44MzIgMzg0IDM5OS44MzJTMzI1LjQzNyAzODcuODU0IDMwNS4yMDMgMzY2Ljk4NEMyOTYuMTcyIDM1Ny42NzIgMjc5LjgyOCAzNTcuNjcyIDI3MC43OTcgMzY2Ljk4NEMyNTAuNTYyIDM4Ny44NTQgMjIxLjg0NCAzOTkuODMyIDE5MiAzOTkuODMyQzE1OS42NCAzOTkuODMyIDEyMy45NTUgMzg2LjMxNiAxMDUuMjA1IDM2Ni45ODRDOTYuMTc0IDM1Ny42NzIgNzkuODMgMzU3LjY3MiA3MC43OTkgMzY2Ljk4NEM1MS42NTggMzg2Ljc0IDM5LjE0MiAzOTYuNzYgMTkuNzk5IDQwMC4yMDlDNi43NTIgNDAyLjUyOSAtMS45NTEgNDE1LjA0MSAwLjM3NyA0MjguMTMzQzIuNjg5IDQ0MS4yMDkgMTUuMDMzIDQ0OS45NTkgMjguMjA1IDQ0Ny42MjFDNTQuMzkyIDQ0Mi45NDkgNzIuOTM5IDQzMC44NjEgODkuMjA1IDQxNi4xODZDMTE3LjIwNSA0MzUuOTI2IDE1NS4yMDMgNDQ3Ljk5OCAxOTIgNDQ3Ljk5OEMyMjYuODkgNDQ3Ljk5OCAyNjAuODEyIDQzNi40NTkgMjg4IDQxNS44MDlDMzQyLjMxMiA0NTcuMDYxIDQyNS40MjIgNDU3LjEyMyA0NzkuNzk1IDQxNS45NjdDNTAwLjQwNCA0MzIuMzM0IDUyMy45NTEgNDQzLjM3MyA1NDcuNzk1IDQ0Ny42MjFDNTQ5LjIxNyA0NDcuODczIDU1MC42MzggNDQ3Ljk5OCA1NTIuMDI5IDQ0Ny45OThDNTYzLjQzNSA0NDcuOTk4IDU3My41NiA0MzkuNzk5IDU3NS42MjMgNDI4LjEzM0M1NzcuOTUxIDQxNS4wNDEgNTY5LjI0OCA0MDIuNTI5IDU1Ni4yMDEgNDAwLjIwOVpNNTU2LjIwMSAyNTYuMjA5QzUzNS4zMSAyNTIuNDc3IDUxNC4zNTcgMjQwLjY4NiA0OTcuMjAxIDIyMi45ODRDNDg4LjE3IDIxMy42NzIgNDcxLjgyNiAyMTMuNjcyIDQ2Mi43OTUgMjIyLjk4NEM0NDIuNTYyIDI0My44NTQgNDEzLjg0NCAyNTUuODMyIDM4NCAyNTUuODMyUzMyNS40MzcgMjQzLjg1NCAzMDUuMjAzIDIyMi45ODRDMjk2LjE3MiAyMTMuNjcyIDI3OS44MjggMjEzLjY3MiAyNzAuNzk3IDIyMi45ODRDMjUwLjU2MiAyNDMuODU0IDIyMS44NDQgMjU1LjgzMiAxOTIgMjU1LjgzMkMxNTkuNjQgMjU1LjgzMiAxMjMuOTU1IDI0Mi4zMTYgMTA1LjIwNSAyMjIuOTg0Qzk2LjE3NCAyMTMuNjcyIDc5LjgzIDIxMy42NzIgNzAuNzk5IDIyMi45ODRDNTEuNjU4IDI0Mi43NCAzOS4xNDIgMjUyLjc2IDE5Ljc5OSAyNTYuMjA5QzYuNzUyIDI1OC41MjkgLTEuOTUxIDI3MS4wNDEgMC4zNzcgMjg0LjEzM0MyLjY4OSAyOTcuMjA5IDE1LjAzMyAzMDUuOTU5IDI4LjIwNSAzMDMuNjIxQzU0LjM5MiAyOTguOTQ5IDcyLjkzOSAyODYuODYxIDg5LjIwNSAyNzIuMTg2QzExNy4yMDUgMjkxLjkyNiAxNTUuMjAzIDMwMy45OTggMTkyIDMwMy45OThDMjI2Ljg5IDMwMy45OTggMjYwLjgxMiAyOTIuNDU5IDI4OCAyNzEuODA5QzM0Mi4zMTIgMzEzLjA2MSA0MjUuNDIyIDMxMy4xMjMgNDc5Ljc5NSAyNzEuOTY3QzUwMC40MDQgMjg4LjMzNCA1MjMuOTUxIDI5OS4zNzMgNTQ3Ljc5NSAzMDMuNjIxQzU0OS4yMTcgMzAzLjg3MyA1NTAuNjM4IDMwMy45OTggNTUyLjAyOSAzMDMuOTk4QzU2My40MzUgMzAzLjk5OCA1NzMuNTYgMjk1Ljc5OSA1NzUuNjIzIDI4NC4xMzNDNTc3Ljk1MSAyNzEuMDQxIDU2OS4yNDggMjU4LjUyOSA1NTYuMjAxIDI1Ni4yMDlaTTI4LjIwNSAxNTkuNjIxQzU0LjM5MiAxNTQuOTQ5IDcyLjkzOSAxNDIuODYxIDg5LjIwNSAxMjguMTg2QzExNy4yMDUgMTQ3LjkyNiAxNTUuMjAzIDE1OS45OTggMTkyIDE1OS45OThDMjI2Ljg5IDE1OS45OTggMjYwLjgxMiAxNDguNDU5IDI4OCAxMjcuODA5QzM0Mi4zMTIgMTY5LjA2MSA0MjUuNDIyIDE2OS4xMjMgNDc5Ljc5NSAxMjcuOTY3QzUwMC40MDQgMTQ0LjMzNCA1MjMuOTUxIDE1NS4zNzMgNTQ3Ljc5NSAxNTkuNjIxQzU0OS4yMTcgMTU5Ljg3MyA1NTAuNjM4IDE1OS45OTggNTUyLjAyOSAxNTkuOTk4QzU2My40MzUgMTU5Ljk5OCA1NzMuNTYgMTUxLjc5OSA1NzUuNjIzIDE0MC4xMzNDNTc3Ljk1MSAxMjcuMDQxIDU2OS4yNDggMTE0LjUyOSA1NTYuMjAxIDExMi4yMDlDNTM1LjMxIDEwOC40NzcgNTE0LjM1NyA5Ni42ODYgNDk3LjIwMSA3OC45ODRDNDg4LjE3IDY5LjY3MiA0NzEuODI2IDY5LjY3MiA0NjIuNzk1IDc4Ljk4NEM0NDIuNTYyIDk5Ljg1NCA0MTMuODQ0IDExMS44MzIgMzg0IDExMS44MzJTMzI1LjQzNyA5OS44NTQgMzA1LjIwMyA3OC45ODRDMjk2LjE3MiA2OS42NzIgMjc5LjgyOCA2OS42NzIgMjcwLjc5NyA3OC45ODRDMjUwLjU2MiA5OS44NTQgMjIxLjg0NCAxMTEuODMyIDE5MiAxMTEuODMyQzE1OS42NCAxMTEuODMyIDEyMy45NTUgOTguMzE2IDEwNS4yMDUgNzguOTg0Qzk2LjE3NCA2OS42NzIgNzkuODMgNjkuNjcyIDcwLjc5OSA3OC45ODRDNTEuNjU4IDk4Ljc0IDM5LjE0MiAxMDguNzYgMTkuNzk5IDExMi4yMDlDNi43NTIgMTE0LjUyOSAtMS45NTEgMTI3LjA0MSAwLjM3NyAxNDAuMTMzQzIuNjg5IDE1My4yMDkgMTUuMDMzIDE2MS45NTkgMjguMjA1IDE1OS42MjFaIi8+PC9zdmc+|width=32|height=32)
 */
const Water: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M556.201 400.209C535.31 396.477 514.357 384.686 497.201 366.984C488.17 357.672 471.826 357.672 462.795 366.984C442.562 387.854 413.844 399.832 384 399.832S325.437 387.854 305.203 366.984C296.172 357.672 279.828 357.672 270.797 366.984C250.562 387.854 221.844 399.832 192 399.832C159.64 399.832 123.955 386.316 105.205 366.984C96.174 357.672 79.83 357.672 70.799 366.984C51.658 386.74 39.142 396.76 19.799 400.209C6.752 402.529 -1.951 415.041 0.377 428.133C2.689 441.209 15.033 449.959 28.205 447.621C54.392 442.949 72.939 430.861 89.205 416.186C117.205 435.926 155.203 447.998 192 447.998C226.89 447.998 260.812 436.459 288 415.809C342.312 457.061 425.422 457.123 479.795 415.967C500.404 432.334 523.951 443.373 547.795 447.621C549.217 447.873 550.638 447.998 552.029 447.998C563.435 447.998 573.56 439.799 575.623 428.133C577.951 415.041 569.248 402.529 556.201 400.209ZM556.201 256.209C535.31 252.477 514.357 240.686 497.201 222.984C488.17 213.672 471.826 213.672 462.795 222.984C442.562 243.854 413.844 255.832 384 255.832S325.437 243.854 305.203 222.984C296.172 213.672 279.828 213.672 270.797 222.984C250.562 243.854 221.844 255.832 192 255.832C159.64 255.832 123.955 242.316 105.205 222.984C96.174 213.672 79.83 213.672 70.799 222.984C51.658 242.74 39.142 252.76 19.799 256.209C6.752 258.529 -1.951 271.041 0.377 284.133C2.689 297.209 15.033 305.959 28.205 303.621C54.392 298.949 72.939 286.861 89.205 272.186C117.205 291.926 155.203 303.998 192 303.998C226.89 303.998 260.812 292.459 288 271.809C342.312 313.061 425.422 313.123 479.795 271.967C500.404 288.334 523.951 299.373 547.795 303.621C549.217 303.873 550.638 303.998 552.029 303.998C563.435 303.998 573.56 295.799 575.623 284.133C577.951 271.041 569.248 258.529 556.201 256.209ZM28.205 159.621C54.392 154.949 72.939 142.861 89.205 128.186C117.205 147.926 155.203 159.998 192 159.998C226.89 159.998 260.812 148.459 288 127.809C342.312 169.061 425.422 169.123 479.795 127.967C500.404 144.334 523.951 155.373 547.795 159.621C549.217 159.873 550.638 159.998 552.029 159.998C563.435 159.998 573.56 151.799 575.623 140.133C577.951 127.041 569.248 114.529 556.201 112.209C535.31 108.477 514.357 96.686 497.201 78.984C488.17 69.672 471.826 69.672 462.795 78.984C442.562 99.854 413.844 111.832 384 111.832S325.437 99.854 305.203 78.984C296.172 69.672 279.828 69.672 270.797 78.984C250.562 99.854 221.844 111.832 192 111.832C159.64 111.832 123.955 98.316 105.205 78.984C96.174 69.672 79.83 69.672 70.799 78.984C51.658 98.74 39.142 108.76 19.799 112.209C6.752 114.529 -1.951 127.041 0.377 140.133C2.689 153.209 15.033 161.959 28.205 159.621Z" />
    </Icon>
);

export default Water;