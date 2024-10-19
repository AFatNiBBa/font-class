
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=light thumbs-down}
 * @preview ![thumbs-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjgwVjcyQzEyOCA0OS45MzggMTEwLjA2MiAzMiA4OCAzMkg0MEMxNy45MzggMzIgMCA0OS45MzggMCA3MlYyODBDMCAzMDIuMDYyIDE3LjkzOCAzMjAgNDAgMzIwSDg4QzExMC4wNjIgMzIwIDEyOCAzMDIuMDYyIDEyOCAyODBaTTk2IDI4MEM5NiAyODQuNDA2IDkyLjQwNiAyODggODggMjg4SDQwQzM1LjU5NCAyODggMzIgMjg0LjQwNiAzMiAyODBWNzJDMzIgNjcuNTk0IDM1LjU5NCA2NCA0MCA2NEg4OEM5Mi40MDYgNjQgOTYgNjcuNTk0IDk2IDcyVjI4MFpNNDc3LjkyMiAyMzUuNzE5QzQ4MC4zOTEgMjI5LjA0NyA0ODEuNjcyIDIyMS45NTMgNDgxLjY3MiAyMTQuNzM0QzQ4MS42NzIgMTkxLjc2NiA0NjguOTIyIDE3MS4zMTIgNDQ5LjYwOSAxNjAuNzk3QzQ1MC43NSAxNTYuMTI1IDQ1MS4zNDQgMTUxLjMyOCA0NTEuMzQ0IDE0Ni41MzFDNDUxLjM0NCAxMjQuNDY5IDQzOS41NjIgMTA0LjU5NCA0MjEuMDE2IDkzLjczNFY5My40NjlDNDIxLjAxNiA1OS41NzggMzkzLjQyMiAzMiAzNTkuNTE2IDMySDMwMy44OTFDMjI2LjQ3NiAzMiAxNTkuOTk5IDk1LjA0NCAxNTkuOTk5IDExMi4wMDNDMTU5Ljk5OSAxMjAuNzcxIDE2Ny4xMzEgMTI4LjAyNSAxNzYgMTI4LjAyNUMxOTUuNzY1IDEyOC4wMjUgMjIyLjIzNCA2NCAzMDMuODkxIDY0SDM1OS41MTZDMzc1Ljc4MSA2NCAzODkuMDE2IDc3LjIxOSAzODkuMDE2IDkzLjQ2OUMzODkuMDE2IDk4LjI5NSAzODcuODMgOTkuOTYgMzg3LjgzIDEwMy40NzhDMzg3LjgzIDEyNC40MTYgNDE5LjM0NCAxMTUuNTY5IDQxOS4zNDQgMTQ2LjUzMUM0MTkuMzQ0IDE1OS4zNzQgNDEyLjU3OSAxNjEuMjEgNDEyLjU3OSAxNzAuMDk0QzQxMi41NzkgMTc5LjQ0MSA0MTkuODM1IDE4NC43NTYgNDI1LjY0MSAxODUuODQ0QzQzOS41NjIgMTg4LjQzNyA0NDkuNjcyIDIwMC41OTQgNDQ5LjY3MiAyMTQuNzM0QzQ0OS42NzIgMjMyLjUgNDM3LjYxIDIzMy4xODUgNDM3LjYxIDI0NS4zNjRDNDM3LjYxIDI1My42NzkgNDQ0LjA1MyAyNjAuNzQ3IDQ1Mi41MTYgMjYxLjMyOEM0NjcuOTIyIDI2Mi4zNzUgNDgwIDI3NS4yMDMgNDgwIDI5MC41MzFDNDgwIDMwNi43ODEgNDY2Ljc2NiAzMjAgNDUwLjUgMzIwSDMyMi4xODhDMzEzLjkxNCAzMjAgMzA2LjE4OSAzMjYuNjU4IDMwNi4xODkgMzM2LjAxNEMzMDYuMTg5IDMzOC43MTIgMzA2Ljg2OSAzNDEuNDEyIDMwOC4yMzQgMzQzLjg0NEMzMjUuOTY5IDM3NS4zNzUgMzM0Ljg1OSA0MDkuMjM0IDMzNC44NTkgNDE5LjMyOEMzMzQuODU5IDQzMS4yMzQgMzI1LjU3OCA0NDggMzA0LjkyMiA0NDhDMjg4LjIxOSA0NDggMjg1LjI2NiA0NDMuMDQ3IDI3Ni4xNDEgNDE1LjIxOUMyNTQuMzQ4IDM0OC44MTMgMjQwLjAwNCAzNDUuNzQ0IDE4Ny4zMjggMjkyLjcwM0MxODQuMjAzIDI4OS41NjIgMTgwLjEwOSAyODggMTc2LjAxNiAyODhDMTY3LjQ0NiAyODggMTYwIDI5NC44ODcgMTYwIDMwNEMxNjAgMzI3LjI0NyAyMTcuOTQyIDM0MC41MzQgMjQ1LjczNCA0MjUuMTg4QzI1NC4xNTYgNDUwLjg5MSAyNjMuNzAzIDQ4MCAzMDQuOTIyIDQ4MEMzNDMuNjg4IDQ4MCAzNjYuODU5IDQ0OS4xNTYgMzY2Ljg1OSA0MTkuMzI4QzM2Ni44NTkgNDA1LjQ4NCAzNjAuMDE2IDM3OS4wNjIgMzQ4LjAzMSAzNTJINDUwLjVDNDg0LjQwNiAzNTIgNTEyIDMyNC40MjIgNTEyIDI5MC41MzFDNTEyIDI2Ni43NSA0OTguMTcyIDI0NS44NDQgNDc3LjkyMiAyMzUuNzE5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ThumbsDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 280V72C128 49.938 110.062 32 88 32H40C17.938 32 0 49.938 0 72V280C0 302.062 17.938 320 40 320H88C110.062 320 128 302.062 128 280ZM96 280C96 284.406 92.406 288 88 288H40C35.594 288 32 284.406 32 280V72C32 67.594 35.594 64 40 64H88C92.406 64 96 67.594 96 72V280ZM477.922 235.719C480.391 229.047 481.672 221.953 481.672 214.734C481.672 191.766 468.922 171.312 449.609 160.797C450.75 156.125 451.344 151.328 451.344 146.531C451.344 124.469 439.562 104.594 421.016 93.734V93.469C421.016 59.578 393.422 32 359.516 32H303.891C226.476 32 159.999 95.044 159.999 112.003C159.999 120.771 167.131 128.025 176 128.025C195.765 128.025 222.234 64 303.891 64H359.516C375.781 64 389.016 77.219 389.016 93.469C389.016 98.295 387.83 99.96 387.83 103.478C387.83 124.416 419.344 115.569 419.344 146.531C419.344 159.374 412.579 161.21 412.579 170.094C412.579 179.441 419.835 184.756 425.641 185.844C439.562 188.437 449.672 200.594 449.672 214.734C449.672 232.5 437.61 233.185 437.61 245.364C437.61 253.679 444.053 260.747 452.516 261.328C467.922 262.375 480 275.203 480 290.531C480 306.781 466.766 320 450.5 320H322.188C313.914 320 306.189 326.658 306.189 336.014C306.189 338.712 306.869 341.412 308.234 343.844C325.969 375.375 334.859 409.234 334.859 419.328C334.859 431.234 325.578 448 304.922 448C288.219 448 285.266 443.047 276.141 415.219C254.348 348.813 240.004 345.744 187.328 292.703C184.203 289.562 180.109 288 176.016 288C167.446 288 160 294.887 160 304C160 327.247 217.942 340.534 245.734 425.188C254.156 450.891 263.703 480 304.922 480C343.688 480 366.859 449.156 366.859 419.328C366.859 405.484 360.016 379.062 348.031 352H450.5C484.406 352 512 324.422 512 290.531C512 266.75 498.172 245.844 477.922 235.719Z" />
        </Icon>
    </>
}