
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `meter-droplet` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=regular meter-droplet}
 * @preview ![meter-droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQuMTI1IDM5OC41ODhDMzUwLjA5OCA0MjkuMTk1IDMwNS4yNiA0NDggMjU2IDQ0OEMxNTAuMTMxIDQ0OCA2NCAzNjEuODY5IDY0IDI1NlMxNTAuMTMxIDY0IDI1NiA2NFM0NDggMTUwLjEzMSA0NDggMjU2QzQ0OCAyNTguMzU3IDQ0Ny43MyAyNjAuNjQ2IDQ0Ny42NDYgMjYyLjk4NEM0NTkuNDUxIDI0NC40NzcgNDcwLjU1MSAyMjMuODAzIDQ3OC43NzMgMTk2LjU3NkM0ODAuMTc2IDE5MS45MzYgNDgyLjQ1MSAxODcuODE2IDQ4NC45NDEgMTgzLjg5M0M0NTQuMzIyIDg2LjU4NiAzNjMuNDE4IDE2IDI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZDMzA3LjQxOCA0OTYgMzU0Ljk0NyA0NzkuNjg4IDM5NC4wMDYgNDUyLjE1NkMzODcuNzY2IDQzNi4xMjcgMzg0IDQxOC44NjcgMzg0IDQwMC42NzJDMzg0IDM5OS45NDkgMzg0LjExNSAzOTkuMzAzIDM4NC4xMjUgMzk4LjU4OFpNMzI4IDEyOEMzMTkuMTY0IDEyOCAzMTIgMTM1LjE2MiAzMTIgMTQ0VjIwOEMzMTIgMjE2LjgzNiAzMTkuMTY0IDIyNCAzMjggMjI0SDM0NEMzNTIuODM2IDIyNCAzNjAgMjE2LjgzNiAzNjAgMjA4VjE0NEMzNjAgMTM1LjE2MiAzNTIuODM2IDEyOCAzNDQgMTI4SDMyOFpNMTY4IDEyOEMxNTkuMTY0IDEyOCAxNTIgMTM1LjE2MiAxNTIgMTQ0VjIwOEMxNTIgMjE2LjgzNiAxNTkuMTY0IDIyNCAxNjggMjI0SDE4NEMxOTIuODM2IDIyNCAyMDAgMjE2LjgzNiAyMDAgMjA4VjE0NEMyMDAgMTM1LjE2MiAxOTIuODM2IDEyOCAxODQgMTI4SDE2OFpNMjQ4IDEyOEMyMzkuMTY0IDEyOCAyMzIgMTM1LjE2MiAyMzIgMTQ0VjIwOEMyMzIgMjE2LjgzNiAyMzkuMTY0IDIyNCAyNDggMjI0SDI2NEMyNzIuODM2IDIyNCAyODAgMjE2LjgzNiAyODAgMjA4VjE0NEMyODAgMTM1LjE2MiAyNzIuODM2IDEyOCAyNjQgMTI4SDI0OFpNNTQ2LjU5NCAyMDUuODNDNTQxLjU2MiAxODcuNzgzIDUxNS4wOTQgMTg3LjAwMiA1MDkuNDA2IDIwNS44M0M0NzkuNjU2IDMwNC4zNDQgNDE2IDMzMS4yMTkgNDE2IDQwMC42NzJDNDE2IDQ2Mi4xNTYgNDY2LjA5NCA1MTIgNTI4IDUxMlM2NDAgNDYyLjE1NiA2NDAgNDAwLjY3MkM2NDAgMzMwLjgyOCA1NzYuNDkgMzA0Ljg5MSA1NDYuNTk0IDIwNS44M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MeterDroplet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M384.125 398.588C350.098 429.195 305.26 448 256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256C448 258.357 447.73 260.646 447.646 262.984C459.451 244.477 470.551 223.803 478.773 196.576C480.176 191.936 482.451 187.816 484.941 183.893C454.322 86.586 363.418 16 256 16C123.451 16 16 123.451 16 256S123.451 496 256 496C307.418 496 354.947 479.688 394.006 452.156C387.766 436.127 384 418.867 384 400.672C384 399.949 384.115 399.303 384.125 398.588ZM328 128C319.164 128 312 135.162 312 144V208C312 216.836 319.164 224 328 224H344C352.836 224 360 216.836 360 208V144C360 135.162 352.836 128 344 128H328ZM168 128C159.164 128 152 135.162 152 144V208C152 216.836 159.164 224 168 224H184C192.836 224 200 216.836 200 208V144C200 135.162 192.836 128 184 128H168ZM248 128C239.164 128 232 135.162 232 144V208C232 216.836 239.164 224 248 224H264C272.836 224 280 216.836 280 208V144C280 135.162 272.836 128 264 128H248ZM546.594 205.83C541.562 187.783 515.094 187.002 509.406 205.83C479.656 304.344 416 331.219 416 400.672C416 462.156 466.094 512 528 512S640 462.156 640 400.672C640 330.828 576.49 304.891 546.594 205.83Z" />
        </Icon>
    </>
}