
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `meter-bolt` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=thin meter-bolt}
 * @preview ![meter-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTIgMTI4QzEzOC43NDYgMTI4IDEyOCAxMzguNzQ0IDEyOCAxNTJWMjAwQzEyOCAyMTMuMjU0IDEzOC43NDYgMjI0IDE1MiAyMjRIMTY4QzE4MS4yNTYgMjI0IDE5MiAyMTMuMjU0IDE5MiAyMDBWMTUyQzE5MiAxMzguNzQ0IDE4MS4yNTYgMTI4IDE2OCAxMjhIMTUyWk0xNzYgMTUyVjIwMEMxNzYgMjA0LjQxIDE3Mi40MTIgMjA4IDE2OCAyMDhIMTUyQzE0Ny41OSAyMDggMTQ0IDIwNC40MSAxNDQgMjAwVjE1MkMxNDQgMTQ3LjU4OCAxNDcuNTkgMTQ0IDE1MiAxNDRIMTY4QzE3Mi40MTIgMTQ0IDE3NiAxNDcuNTg4IDE3NiAxNTJaTTI0OCAxMjhDMjM0Ljc0NiAxMjggMjI0IDEzOC43NDQgMjI0IDE1MlYyMDBDMjI0IDIxMy4yNTQgMjM0Ljc0NiAyMjQgMjQ4IDIyNEgyNjRDMjc3LjI1NiAyMjQgMjg4IDIxMy4yNTQgMjg4IDIwMFYxNTJDMjg4IDEzOC43NDQgMjc3LjI1NiAxMjggMjY0IDEyOEgyNDhaTTI3MiAxNTJWMjAwQzI3MiAyMDQuNDEgMjY4LjQxMiAyMDggMjY0IDIwOEgyNDhDMjQzLjU5IDIwOCAyNDAgMjA0LjQxIDI0MCAyMDBWMTUyQzI0MCAxNDcuNTg4IDI0My41OSAxNDQgMjQ4IDE0NEgyNjRDMjY4LjQxMiAxNDQgMjcyIDE0Ny41ODggMjcyIDE1MlpNMzQ0IDEyOEMzMzAuNzQ2IDEyOCAzMjAgMTM4Ljc0NCAzMjAgMTUyVjIwMEMzMjAgMjEzLjI1NCAzMzAuNzQ2IDIyNCAzNDQgMjI0SDM2MEMzNzMuMjU2IDIyNCAzODQgMjEzLjI1NCAzODQgMjAwVjE1MkMzODQgMTM4Ljc0NCAzNzMuMjU2IDEyOCAzNjAgMTI4SDM0NFpNMzY4IDE1MlYyMDBDMzY4IDIwNC40MSAzNjQuNDEyIDIwOCAzNjAgMjA4SDM0NEMzMzkuNTkgMjA4IDMzNiAyMDQuNDEgMzM2IDIwMFYxNTJDMzM2IDE0Ny41ODggMzM5LjU5IDE0NCAzNDQgMTQ0SDM2MEMzNjQuNDEyIDE0NCAzNjggMTQ3LjU4OCAzNjggMTUyWk00OTIuMzEyIDI5Ni42MjVDNDk0LjgxMiAyODIuMTU2IDQ5NiAyNjguODU5IDQ5NiAyNTZDNDk2IDEyMy42NTYgMzg4LjM0NCAxNiAyNTYgMTZTMTYgMTIzLjY1NiAxNiAyNTZTMTIzLjY1NiA0OTYgMjU2IDQ5NkMzMzEuNjg4IDQ5NiA0MDMuODc1IDQ1OS40MzggNDQ5LjA2MiAzOTguMTg4QzQ1MS42ODcgMzk0LjYyNSA0NTAuOTM4IDM4OS42MjUgNDQ3LjM3NSAzODdDNDQzLjg0NCAzODQuMzc1IDQzOC44MTIgMzg1LjEyNSA0MzYuMTg3IDM4OC42ODhDMzkzLjM3NSA0NDYuNzE5IDMyNy42ODggNDgwIDI1NiA0ODBDMTMyLjUgNDgwIDMyIDM3OS41IDMyIDI1NkMzMiAxMzIuNDg0IDEzMi41IDMyIDI1NiAzMlM0ODAgMTMyLjQ4NCA0ODAgMjU2QzQ4MCAyNjcuOTUzIDQ3OC44NzUgMjgwLjM1OSA0NzYuNTYyIDI5My45MzhDNDc1LjgxMiAyOTguMjgxIDQ3OC43NSAzMDIuNDM4IDQ4My4wOTQgMzAzLjE1NkM0ODcuNDM4IDMwNC4wMzEgNDkxLjU5NCAzMDAuOTY5IDQ5Mi4zMTIgMjk2LjYyNVpNNjM1LjM3NSAzNjQuODc3QzYzNC4xMjUgMzYxLjkwOCA2MzEuMjE5IDM2MC4wMDIgNjI4IDM2MC4wMDJINTEwLjg3NUw2MjkuMjE5IDIzNy41NjRDNjMyLjI4MSAyMzQuMzc3IDYzMi4yMTkgMjI5LjMxNCA2MjkuMDMxIDIyNi4yNTJDNjI1Ljg0NCAyMjMuMjIxIDYyMC43ODEgMjIzLjI4MyA2MTcuNzE5IDIyNi40MzlMNDg2LjI1IDM2Mi40MzlDNDg0LjAzMSAzNjQuNzUyIDQ4My4zNzUgMzY4LjE1OCA0ODQuNjI1IDM3MS4xMjdTNDg4Ljc4MSAzNzYuMDAyIDQ5MiAzNzYuMDAySDYwOS4xMjVMNDkwLjc4MSA0OTguNDM5QzQ4Ny43MTkgNTAxLjYyNyA0ODcuNzgxIDUwNi42ODkgNDkwLjk2OSA1MDkuNzUyQzQ5Mi41MzEgNTExLjI1MiA0OTQuNTMxIDUxMi4wMDIgNDk2LjUzMSA1MTIuMDAyQzQ5OC42MjUgNTEyLjAwMiA1MDAuNzE5IDUxMS4xODkgNTAyLjI4MSA1MDkuNTY0TDYzMy43NSAzNzMuNTY0QzYzNS45NjkgMzcxLjI1MiA2MzYuNjI1IDM2Ny44NDYgNjM1LjM3NSAzNjQuODc3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MeterBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M152 128C138.746 128 128 138.744 128 152V200C128 213.254 138.746 224 152 224H168C181.256 224 192 213.254 192 200V152C192 138.744 181.256 128 168 128H152ZM176 152V200C176 204.41 172.412 208 168 208H152C147.59 208 144 204.41 144 200V152C144 147.588 147.59 144 152 144H168C172.412 144 176 147.588 176 152ZM248 128C234.746 128 224 138.744 224 152V200C224 213.254 234.746 224 248 224H264C277.256 224 288 213.254 288 200V152C288 138.744 277.256 128 264 128H248ZM272 152V200C272 204.41 268.412 208 264 208H248C243.59 208 240 204.41 240 200V152C240 147.588 243.59 144 248 144H264C268.412 144 272 147.588 272 152ZM344 128C330.746 128 320 138.744 320 152V200C320 213.254 330.746 224 344 224H360C373.256 224 384 213.254 384 200V152C384 138.744 373.256 128 360 128H344ZM368 152V200C368 204.41 364.412 208 360 208H344C339.59 208 336 204.41 336 200V152C336 147.588 339.59 144 344 144H360C364.412 144 368 147.588 368 152ZM492.312 296.625C494.812 282.156 496 268.859 496 256C496 123.656 388.344 16 256 16S16 123.656 16 256S123.656 496 256 496C331.688 496 403.875 459.438 449.062 398.188C451.687 394.625 450.938 389.625 447.375 387C443.844 384.375 438.812 385.125 436.187 388.688C393.375 446.719 327.688 480 256 480C132.5 480 32 379.5 32 256C32 132.484 132.5 32 256 32S480 132.484 480 256C480 267.953 478.875 280.359 476.562 293.938C475.812 298.281 478.75 302.438 483.094 303.156C487.438 304.031 491.594 300.969 492.312 296.625ZM635.375 364.877C634.125 361.908 631.219 360.002 628 360.002H510.875L629.219 237.564C632.281 234.377 632.219 229.314 629.031 226.252C625.844 223.221 620.781 223.283 617.719 226.439L486.25 362.439C484.031 364.752 483.375 368.158 484.625 371.127S488.781 376.002 492 376.002H609.125L490.781 498.439C487.719 501.627 487.781 506.689 490.969 509.752C492.531 511.252 494.531 512.002 496.531 512.002C498.625 512.002 500.719 511.189 502.281 509.564L633.75 373.564C635.969 371.252 636.625 367.846 635.375 364.877Z" />
        </Icon>
    </>
}