
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pie` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pie?s=light pie}
 * @preview ![pie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjcuMTg4IDIwMi4xNTZDNDg3Ljg3NSAxMDkuNTYyIDM5My4wMzEgNDggMjg4IDQ4QzE4Mi44NzUgNDggODggMTA5LjU0NyA0OC43ODEgMjAyLjE1NkMyMS41MzEgMjA0LjIwMyAwIDIyNi4yMTkgMCAyNTNDMCAyODEuMTI1IDIzLjc1IDMwNCA1Mi45MzggMzA0Qzg5LjkwNiAzMDQgMTExLjg3NSAyODguMzc1IDEyMy43NSAyNzkuOTIyQzEzMS40MjYgMjc0LjQyNCAxMzEuMDk2IDI3NC4yMjEgMTM5LjI4MSAyODAuMTA5QzE1MS4wMzEgMjg4LjQ1MyAxNzIuOTA2IDMwNCAyMDkuODQ0IDMwNEMyNDYuNzE5IDMwNCAyNjguNjg4IDI4OC40MDYgMjgwLjcxOSAyNzkuODc1QzI4OC4yNyAyNzQuNDczIDI4Ny42ODkgMjc0LjA2MyAyOTYuMjUgMjgwLjMyOEMzMDguODEyIDI4OS4xODggMzI5LjgxMiAzMDQgMzY2LjUgMzA0QzQwMy4zNzUgMzA0IDQyNS4zMTIgMjg4LjQ1MyA0MzcuNDM4IDI3OS44NTlDNDQ1LjY0OCAyNzMuODcxIDQ0NS4zNCAyNzQuODUgNDUyLjM3NSAyNzkuOTIyQzQ2NC4wNjIgMjg4LjM0NCA0ODUuODEyIDMwNCA1MjMuMDYyIDMwNEM1NTIuMjUgMzA0IDU3NiAyODEuMTI1IDU3NiAyNTNDNTc2IDIyNi4yMTkgNTU0LjQ2OSAyMDQuMTg4IDUyNy4xODggMjAyLjE1NlpNNTIzLjA2MiAyNzJDNDk2LjEyNSAyNzIgNDgxLjA2MiAyNjEuMTQxIDQ3MS4wMzEgMjUzLjkyMkM0NjIuMzc1IDI0Ny43MzQgNDU3LjE1NiAyNDQgNDQ0LjkwNiAyNDRDNDMyLjI4MSAyNDQgNDI3LjEyNSAyNDcuNzY2IDQxOC41OTQgMjU0QzQwOC40NjkgMjYxLjE3MiAzOTMuMTg4IDI3MiAzNjYuNSAyNzJDMzM5Ljk2OSAyNzIgMzI1LjM0NCAyNjEuNzAzIDMxNC45MDYgMjU0LjMyOEMzMDUuMzQ0IDI0Ny4zNTkgMzAwLjIxOSAyNDQgMjg4LjI1IDI0NEMyNzYuMTg4IDI0NCAyNzAuOTA2IDI0Ny40MzggMjYyIDI1My45MzhDMjUxLjg0NCAyNjEuMTI1IDIzNi41MzEgMjcyIDIwOS44NDQgMjcyQzE4My4xMjUgMjcyIDE2Ny45MDYgMjYxLjE4OCAxNTcuNjU2IDI1My45MDZDMTQ5LjAzMSAyNDcuNzM0IDE0My44MTIgMjQ0IDEzMS40NjkgMjQ0QzExOC45MDYgMjQ0IDExMy42ODcgMjQ3Ljc1IDEwNS4xMjUgMjUzLjkwNkM5NSAyNjEuMTA5IDc5LjY4OCAyNzIgNTIuOTM4IDI3MkM0MS40MDYgMjcyIDMyIDI2My40NjkgMzIgMjUzUzQxLjQwNiAyMzQgNTIuOTM4IDIzNEM2Mi43NDIgMjM0IDcxLjU4OCAyMzEuODg3IDc1LjA2MiAyMjIuNjA5QzEwNy4wOTQgMTM3LjMxMiAxOTIuNjg4IDgwIDI4OCA4MEMzODMuMTg4IDgwIDQ2OC43NSAxMzcuMjk3IDUwMC45MDYgMjIyLjU3OEM1MDQuMzYxIDIzMS44MDcgNTEzLjI2NiAyMzQgNTIzLjA2MiAyMzRDNTM0LjU5NCAyMzQgNTQ0IDI0Mi41MzEgNTQ0IDI1M1M1MzQuNTk0IDI3MiA1MjMuMDYyIDI3MlpNNTAxLjA1OSAzMjAuODA1QzQ5OS40MDYgMzIwLjI3IDQ5Ny43NTQgMzIwLjAwOCA0OTYuMDg0IDMyMC4wMDhDNDg5LjE5MyAzMjAuMDA4IDQ4My4wOTQgMzI0LjM4NyA0ODAuOTA0IDMzMC45MDZMNDU4LjczOCA0MDUuOTFDNDU2Ljc5NSA0MTEuODU3IDQ1MS4wOTQgNDE1Ljk5OCA0NDQuNjE1IDQxNS45OThIMTMxLjQ5MkMxMjUuMDA2IDQxNS45OTggMTE5LjI0NiA0MTEuODA5IDExNy4xNTYgNDA1LjU3NEw5NS4xNjYgMzMxLjE4NEM5Mi44OTggMzI0LjM4NyA4Ni44MTYgMzIwIDc5Ljk1MyAzMjBDNzguMjc3IDMyMCA3Ni42MTMgMzIwLjI2MiA3NS4wMDYgMzIwLjc3N0M3MC44NzcgMzIyLjE1NCA2Ny41OTggMzI1LjAwNCA2NS42OTEgMzI4LjgzNEM2My43ODMgMzMyLjY2IDYzLjQ3OSAzMzcuMDA0IDY0LjgzMiAzNDEuMDYyTDg2LjgyNiA0MTUuNDc3QzkzLjM1NSA0MzUuMDM3IDExMS4yNzEgNDQ4IDEzMS40OTIgNDQ4SDQ0NC42MTVDNDY0LjkzOSA0NDggNDgyLjgxNCA0MzUuMDA0IDQ4OS4wOTQgNDE1LjY2Mkw1MTEuMjMyIDM0MC43OTlDNTEyLjUwNCAzMzcuMDA0IDUxMi4xOTkgMzMyLjY2IDUxMC4yOTEgMzI4LjgzNEM1MDguMzg1IDMyNS4wMDQgNTA1LjEwNSAzMjIuMTU0IDUwMS4wNTkgMzIwLjgwNVpNMjg4IDEyOEMyNzkuMTU2IDEyOCAyNzIgMTM1LjE1NiAyNzIgMTQ0VjE3NkMyNzIgMTg0Ljg0NCAyNzkuMTU2IDE5MiAyODggMTkyUzMwNCAxODQuODQ0IDMwNCAxNzZWMTQ0QzMwNCAxMzUuMTU2IDI5Ni44NDQgMTI4IDI4OCAxMjhaTTE5OS4xNTYgMTI5LjY4OEMxOTEuMjUgMTI1LjgxMiAxODEuNjU2IDEyOC45MzggMTc3LjY4OCAxMzYuODQ0TDE2MS42ODggMTY4Ljg0NEMxNTcuNzUgMTc2Ljc1IDE2MC45MzggMTg2LjM1OSAxNjguODQ0IDE5MC4zMTJDMTcxLjE1NiAxOTEuNDUzIDE3My41OTQgMTkyIDE3NiAxOTJDMTgxLjg0NCAxOTIgMTg3LjUgMTg4Ljc2NiAxOTAuMzEyIDE4My4xNTZMMjA2LjMxMiAxNTEuMTU2QzIxMC4yNSAxNDMuMjUgMjA3LjA2MiAxMzMuNjQxIDE5OS4xNTYgMTI5LjY4OFpNMzk4LjMxMiAxMzYuODQ0QzM5NC4zNDQgMTI4LjkzOCAzODQuNzgxIDEyNS43ODEgMzc2Ljg0NCAxMjkuNjg4QzM2OC45MzggMTMzLjY0MSAzNjUuNzUgMTQzLjI1IDM2OS42ODggMTUxLjE1NkwzODUuNjg4IDE4My4xNTZDMzg4LjUgMTg4Ljc2NiAzOTQuMTU2IDE5MiA0MDAgMTkyQzQwMi40MDYgMTkyIDQwNC44NDQgMTkxLjQ1MyA0MDcuMTU2IDE5MC4zMTJDNDE1LjA2MiAxODYuMzU5IDQxOC4yNSAxNzYuNzUgNDE0LjMxMiAxNjguODQ0TDM5OC4zMTIgMTM2Ljg0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M527.188 202.156C487.875 109.562 393.031 48 288 48C182.875 48 88 109.547 48.781 202.156C21.531 204.203 0 226.219 0 253C0 281.125 23.75 304 52.938 304C89.906 304 111.875 288.375 123.75 279.922C131.426 274.424 131.096 274.221 139.281 280.109C151.031 288.453 172.906 304 209.844 304C246.719 304 268.688 288.406 280.719 279.875C288.27 274.473 287.689 274.063 296.25 280.328C308.812 289.188 329.812 304 366.5 304C403.375 304 425.312 288.453 437.438 279.859C445.648 273.871 445.34 274.85 452.375 279.922C464.062 288.344 485.812 304 523.062 304C552.25 304 576 281.125 576 253C576 226.219 554.469 204.188 527.188 202.156ZM523.062 272C496.125 272 481.062 261.141 471.031 253.922C462.375 247.734 457.156 244 444.906 244C432.281 244 427.125 247.766 418.594 254C408.469 261.172 393.188 272 366.5 272C339.969 272 325.344 261.703 314.906 254.328C305.344 247.359 300.219 244 288.25 244C276.188 244 270.906 247.438 262 253.938C251.844 261.125 236.531 272 209.844 272C183.125 272 167.906 261.188 157.656 253.906C149.031 247.734 143.812 244 131.469 244C118.906 244 113.687 247.75 105.125 253.906C95 261.109 79.688 272 52.938 272C41.406 272 32 263.469 32 253S41.406 234 52.938 234C62.742 234 71.588 231.887 75.062 222.609C107.094 137.312 192.688 80 288 80C383.188 80 468.75 137.297 500.906 222.578C504.361 231.807 513.266 234 523.062 234C534.594 234 544 242.531 544 253S534.594 272 523.062 272ZM501.059 320.805C499.406 320.27 497.754 320.008 496.084 320.008C489.193 320.008 483.094 324.387 480.904 330.906L458.738 405.91C456.795 411.857 451.094 415.998 444.615 415.998H131.492C125.006 415.998 119.246 411.809 117.156 405.574L95.166 331.184C92.898 324.387 86.816 320 79.953 320C78.277 320 76.613 320.262 75.006 320.777C70.877 322.154 67.598 325.004 65.691 328.834C63.783 332.66 63.479 337.004 64.832 341.062L86.826 415.477C93.355 435.037 111.271 448 131.492 448H444.615C464.939 448 482.814 435.004 489.094 415.662L511.232 340.799C512.504 337.004 512.199 332.66 510.291 328.834C508.385 325.004 505.105 322.154 501.059 320.805ZM288 128C279.156 128 272 135.156 272 144V176C272 184.844 279.156 192 288 192S304 184.844 304 176V144C304 135.156 296.844 128 288 128ZM199.156 129.688C191.25 125.812 181.656 128.938 177.688 136.844L161.688 168.844C157.75 176.75 160.938 186.359 168.844 190.312C171.156 191.453 173.594 192 176 192C181.844 192 187.5 188.766 190.312 183.156L206.312 151.156C210.25 143.25 207.062 133.641 199.156 129.688ZM398.312 136.844C394.344 128.938 384.781 125.781 376.844 129.688C368.938 133.641 365.75 143.25 369.688 151.156L385.688 183.156C388.5 188.766 394.156 192 400 192C402.406 192 404.844 191.453 407.156 190.312C415.062 186.359 418.25 176.75 414.312 168.844L398.312 136.844Z" />
        </Icon>
    </>
}